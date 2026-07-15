// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Admin Panel Logic
// ═══════════════════════════════════════════════════════

firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db   = firebase.firestore();

let adminUser    = null;
let adminRole    = null;   // 'admin' | 'editor'
let allUsers     = [];
let allAttempts  = [];
let allNotifs    = [];
let userToDelete = null;
let userToEdit   = null;

// ── Auth guard ────────────────────────────────────────
auth.onAuthStateChanged(async user => {
  if (!user) { window.location.href = 'index.html'; return; }
  // Check role + load all data in parallel
  const [doc] = await Promise.all([
    db.collection('users').doc(user.uid).get(),
  ]);
  const role = doc.exists ? doc.data().role : null;
  if (role !== 'admin' && role !== 'editor') {
    alert(t('权限不足，跳转至学员页面', 'Access denied. Redirecting to user page.'));
    window.location.href = 'app.html'; return;
  }
  adminUser  = user;
  adminRole  = role;
  const nameText = doc.data().name || user.email;
  const roleLabel = role === 'editor' ? ' 〔编辑〕' : '';
  document.getElementById('adminNameChip').textContent = nameText + roleLabel;
  // Hide review-center nav from editors; show 'my submissions' nav for editors
  const reviewNav    = document.getElementById('nav-review');
  const myPendingNav = document.getElementById('nav-my-pending');
  if (reviewNav)    reviewNav.style.display    = role === 'editor' ? 'none' : '';
  if (myPendingNav) myPendingNav.style.display = role === 'editor' ? ''     : 'none';
  await loadAllData();
  initSidebar();
  navigate('overview');
  applyI18n();
});

async function loadAllData() {
  // Load core data — each in separate try/catch so one failure doesn't block others
  const [usersSnap, attSnap, notifSnap] = await Promise.all([
    db.collection('users').get(),
    db.collection('examAttempts').get().catch(() => null),
    db.collection('notifications').get().catch(() => null)
  ]);
  allUsers    = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
  allAttempts = (attSnap ? attSnap.docs : []).map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => {
      const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt || 0);
      const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt || 0);
      return tb - ta;
    });
  allNotifs   = (notifSnap ? notifSnap.docs : []).map(d => ({ id: d.id, ...d.data() }))
    .sort((a, b) => {
      const ta = a.createdAt?.toMillis ? a.createdAt.toMillis() : (a.createdAt || 0);
      const tb = b.createdAt?.toMillis ? b.createdAt.toMillis() : (b.createdAt || 0);
      return tb - ta;
    });

  // Load exam settings separately — non-fatal if collection doesn't exist yet
  try {
    const settingsDoc = await db.collection('settings').doc('exam').get();
    if (settingsDoc.exists) {
      const s = settingsDoc.data();
      if (s.passingScore  != null) EXAM_CONFIG.exam.passingScore  = s.passingScore;
      if (s.excellentScore!= null) EXAM_CONFIG.exam.excellentScore= s.excellentScore;
      if (s.maxAttempts   != null) EXAM_CONFIG.exam.maxAttempts   = s.maxAttempts;
      if (s.cooldownHours != null) EXAM_CONFIG.exam.cooldownHours = s.cooldownHours;
      if (s.timeMinutes   != null) {
        EXAM_CONFIG.exam.timeMinutes  = s.timeMinutes;
        EXAM_CONFIG.mock.timeMinutes  = s.timeMinutes;
      }
    }
  } catch(e) {
    console.warn('Could not load exam settings (check Firestore rules for settings collection):', e.message);
  }

  // Update notification badge
  const unread = allNotifs.filter(n => !n.read).length;
  const badge  = document.getElementById('notifBadge');
  if (unread > 0) { badge.textContent = unread; badge.classList.remove('hidden'); }
  else { badge.classList.add('hidden'); }

  // Load pending changes count (admin only)
  if (adminRole === 'admin') {
    try {
      const pendSnap = await db.collection('pendingChanges').where('status','==','pending').get();
      const pendCount = pendSnap.size;
      const pb = document.getElementById('pendingBadge');
      if (pb) {
        pb.textContent = pendCount;
        pb.classList.toggle('hidden', pendCount === 0);
      }
    } catch(e) { /* no pending collection yet */ }
  }
}

function navigate(view) {
  showView('view-' + view);
  setActiveNav('nav-' + view);
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');
  if (view === 'overview')      renderOverview();
  if (view === 'users')         renderUsers();
  if (view === 'results')       renderResults();
  if (view === 'notifications') renderNotifications();
  if (view === 'content')       renderContent();
  if (view === 'settings')      renderSettings();
  if (view === 'questions')     { loadQuestions().then(() => renderQuestions()); }
  if (view === 'faq')           { loadFAQs().then(() => renderFAQs()); }
  if (view === 'review')        { renderPendingReview(); }
}

function doLogout() {
  auth.signOut().then(() => window.location.href = 'index.html');
}

async function showAdminSelfResetPwd() {
  // For admin/editor self-service: send password reset email to own email
  const email = adminUser?.email;
  if (!email) { toast(t('无法获取当前邮箱', 'Cannot get current email'), 'danger'); return; }
  try {
    await auth.sendPasswordResetEmail(email);
    toast(t(`密码重置邮件已发送至 ${email}`, `Password reset email sent to ${email}`), 'success', 5000);
  } catch(e) {
    toast(e.message, 'danger');
  }
}

// ── Editor role helpers ──────────────────────────────
function isEditor() { return adminRole === 'editor'; }

async function submitPendingChange(type, collection, docId, data, originalData, description) {
  // Strip non-serializable Firestore FieldValues from data copy
  function cleanObj(obj) {
    if (!obj) return null;
    const c = Object.assign({}, obj);
    // Remove FieldValue sentinels and internal fields
    ['updatedAt','createdAt','_docId'].forEach(k => delete c[k]);
    return c;
  }
  await db.collection('pendingChanges').add({
    type,                            // 'add' | 'edit' | 'delete'
    collection,                      // 'chapters' | 'examQuestions' | 'faqs' | 'settings' | 'users'
    docId:         docId   || null,
    data:          cleanObj(data),
    originalData:  cleanObj(originalData),
    description,
    submittedBy:   adminUser.uid,
    submittedByName: (document.getElementById('adminNameChip').textContent || '').replace(' 〔编辑〕',''),
    submittedAt:   firebase.firestore.FieldValue.serverTimestamp(),
    status:        'pending',
    reviewedBy:    null, reviewedAt: null, rejectComment: null
  });
  // Update editor's own pending badge
  try {
    const snap = await db.collection('pendingChanges')
      .where('submittedBy','==',adminUser.uid)
      .where('status','==','pending').get();
    const myPb = document.getElementById('myPendingBadge');
    if (myPb) { myPb.textContent = snap.size; myPb.classList.toggle('hidden', snap.size === 0); }
  } catch(e) {}
}

// Switch to student preview mode (URL param is most reliable across browsers)
function enterStudentPreview() {
  window.location.href = 'app.html?preview=admin';
}

function toggleLang() {
  const newLang = getLang() === 'zh' ? 'en' : 'zh';
  setLang(newLang);
  document.getElementById('langToggle').textContent = newLang === 'zh' ? 'EN' : '中';
  navigate(document.querySelector('.view:not(.hidden)').id.replace('view-', ''));
}

// ── Overview ──────────────────────────────────────────
function renderOverview() {
  const totalUsers  = allUsers.filter(u => u.role !== 'admin').length;
  const examAtts    = allAttempts.filter(a => a.mode === 'exam');
  const passed      = examAtts.filter(a => a.score >= EXAM_CONFIG.exam.passingScore);
  const passRate    = examAtts.length ? Math.round(passed.length / examAtts.length * 100) : 0;
  const avgScore    = examAtts.length ? Math.round(examAtts.reduce((s,a) => s+a.score, 0) / examAtts.length) : '--';

  document.getElementById('overviewStats').innerHTML = `
    <div class="stat-card">
      <div class="stat-num">${totalUsers}</div>
      <div class="stat-label" data-zh="学员总数" data-en="Total Users">学员总数</div>
    </div>
    <div class="stat-card gold">
      <div class="stat-num">${examAtts.length}</div>
      <div class="stat-label" data-zh="正式考试次数" data-en="Exam Attempts">正式考试次数</div>
    </div>
    <div class="stat-card success">
      <div class="stat-num">${passRate}%</div>
      <div class="stat-label" data-zh="考试通过率" data-en="Pass Rate">考试通过率</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${avgScore}</div>
      <div class="stat-label" data-zh="平均分" data-en="Avg Score">平均分</div>
    </div>
  `;
  applyI18n();

  // Recent results
  const recent = allAttempts.slice(0, 10);
  if (!recent.length) {
    document.getElementById('recentResults').innerHTML =
      `<div class="empty-state"><div class="empty-icon">📋</div><p>${t('暂无考试记录','No records yet')}</p></div>`;
    return;
  }
  let html = `<div class="table-wrap"><table class="list-table"><thead><tr>
    <th>${t('姓名','Name')}</th><th>${t('类型','Type')}</th><th>${t('分数','Score')}</th>
    <th>${t('结果','Result')}</th><th>${t('时间','Date')}</th>
  </tr></thead><tbody>`;
  recent.forEach(a => {
    const lbl = scoreLabel(a.score);
    const cls = scoreClass(a.score);
    const typeLabel = a.mode === 'exam' ? t('正式','Final') : t('模拟','Mock');
    html += `<tr>
      <td>${a.userName || '--'}</td><td>${typeLabel}</td><td><b>${a.score}</b></td>
      <td><span class="badge badge-${cls}">${lbl}</span></td>
      <td>${formatDate(a.createdAt)}</td>
    </tr>`;
  });
  html += '</tbody></table></div>';
  document.getElementById('recentResults').innerHTML = html;
}

// ── Users ─────────────────────────────────────────────
function renderUsers() {
  const users = allUsers.filter(u => u.id !== adminUser?.uid);
  if (!users.length) {
    document.getElementById('userListContent').innerHTML =
      `<div class="empty-state"><div class="empty-icon">👥</div><p>${t('暂无学员','No users yet')}</p></div>`;
    return;
  }

  // Card layout — avoids table overflow on long emails
  let html = '<div style="display:flex;flex-direction:column;gap:.5rem;padding:.75rem;">';

  users.forEach(u => {
    const userAtts  = allAttempts.filter(a => a.userId === u.id && a.mode === 'exam');
    const bestScore = userAtts.length ? Math.max(...userAtts.map(a => a.score)) : null;
    const attempts  = userAtts.length;
    const cls       = bestScore !== null ? `badge-${scoreClass(bestScore)}` : 'badge-pending';
    const scoreTxt  = bestScore !== null ? `${bestScore}${t('分','pts')}` : t('未考试','—');

    const roleMap = {
      admin:   ['#fdecea','#C0392B','#f5c6c6', t('管理员','Admin')],
      editor:  ['#fff3e0','#e65100','#ffcc80', t('编辑者','Editor')],
      user:    ['#e8f4fd','#1a4fa0','#b8dff5', t('学员','User')],
    };
    const [bg, fg, bd, roleLabel] = roleMap[u.role] || roleMap.user;
    const roleBadge = `<span style="padding:2px 9px;border-radius:20px;font-size:.73rem;font-weight:700;background:${bg};color:${fg};border:1px solid ${bd};white-space:nowrap;">${roleLabel}</span>`;

    html += `
    <div style="display:grid;grid-template-columns:1fr auto;align-items:center;gap:.75rem;
                padding:.75rem 1rem;border-radius:8px;border:1px solid var(--border);background:#fff;">
      <!-- Left: user info -->
      <div style="min-width:0;">
        <div style="display:flex;align-items:center;gap:.6rem;flex-wrap:wrap;margin-bottom:.3rem;">
          <b style="font-size:.95rem;">${u.name || '--'}</b>
          ${roleBadge}
          <span class="badge ${cls}" style="font-size:.72rem;">${scoreTxt}</span>
          <span style="font-size:.72rem;color:var(--text-muted);">${attempts}/${EXAM_CONFIG.exam.maxAttempts}${t('次','att')}</span>
        </div>
        <div style="display:flex;gap:1.5rem;flex-wrap:wrap;font-size:.8rem;color:var(--text-muted);">
          <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:220px;" title="${u.email || ''}">📧 ${u.email || '--'}</span>
          <span style="font-family:monospace;">🔑 ${u.password_plain || '--'}</span>
        </div>
      </div>
      <!-- Right: actions -->
      <div style="display:flex;flex-direction:column;gap:.35rem;min-width:80px;">
        <button class="btn btn-sm btn-outline" style="font-size:.78rem;padding:.25rem .6rem;" onclick="showEditUser('${u.id}')">✏️ ${t('编辑','Edit')}</button>
        <button class="btn btn-sm btn-outline" style="font-size:.78rem;padding:.25rem .6rem;border-color:var(--warning);color:var(--warning);" onclick="showAdminResetPwd('${u.id}')">🔑 ${t('重置','Pwd')}</button>
        <button class="btn btn-sm btn-danger"  style="font-size:.78rem;padding:.25rem .6rem;" onclick="confirmDeleteUser('${u.id}','${u.name||u.email}')">🗑 ${t('删除','Del')}</button>
      </div>
    </div>`;
  });

  html += '</div>';
  document.getElementById('userListContent').innerHTML = html;
}

async function addUser() {
  const name     = document.getElementById('newName').value.trim();
  const email    = document.getElementById('newEmail').value.trim();
  const password = document.getElementById('newPassword').value;
  const role     = document.getElementById('newRole').value;
  const errEl    = document.getElementById('addUserError');

  errEl.classList.add('hidden');
  if (!name || !email || !password) {
    errEl.textContent = t('请填写所有字段', 'Please fill all fields');
    errEl.classList.remove('hidden'); return;
  }
  if (password.length < 6) {
    errEl.textContent = t('密码至少6位', 'Password must be at least 6 characters');
    errEl.classList.remove('hidden'); return;
  }

  // Helper: save user to Firestore and update local list
  async function _saveUserRecord(uid) {
    await db.collection('users').doc(uid).set({
      name, email, role, password_plain: password,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: adminUser.uid
    });
    const existing = allUsers.findIndex(u => u.id === uid);
    const record   = { id: uid, name, email, role, password_plain: password };
    if (existing >= 0) allUsers[existing] = record; else allUsers.push(record);
    hideModal('addUserModal');
    toast(t(`用户 ${name} 已创建`, `User ${name} created`), 'success');
    renderUsers();
    document.getElementById('newName').value = '';
    document.getElementById('newEmail').value = '';
    document.getElementById('newPassword').value = 'fonli2026';
  }

  try {
    // Try to create a new Firebase Auth account via secondary app
    const secondaryApp  = firebase.initializeApp(FIREBASE_CONFIG, 'secondary_' + Date.now());
    const secondaryAuth = secondaryApp.auth();
    try {
      const cred = await secondaryAuth.createUserWithEmailAndPassword(email, password);
      const uid  = cred.user.uid;
      await secondaryAuth.signOut();
      secondaryApp.delete();
      await _saveUserRecord(uid);
    } catch(authErr) {
      if (authErr.code === 'auth/email-already-in-use') {
        // Auth account already exists — sign in with the provided password to get the UID
        try {
          const signIn = await secondaryAuth.signInWithEmailAndPassword(email, password);
          const uid    = signIn.user.uid;
          await secondaryAuth.signOut();
          secondaryApp.delete();
          await _saveUserRecord(uid);
        } catch(signInErr) {
          await secondaryAuth.signOut().catch(()=>{});
          secondaryApp.delete();
          errEl.textContent = t(
            '该邮箱已在 Firebase 中注册，但密码不匹配。请使用该账号的正确密码，或在 Firebase 控制台重置后再试。',
            'Email already registered. Password mismatch — use the correct password or reset it in Firebase Console.'
          );
          errEl.classList.remove('hidden');
        }
      } else {
        secondaryApp.delete();
        throw authErr; // re-throw other errors
      }
    }
  } catch(e) {
    const msgs = {
      'auth/invalid-email':  t('邮箱格式不正确', 'Invalid email'),
      'auth/weak-password':  t('密码强度不足', 'Password too weak'),
    };
    errEl.textContent = msgs[e.code] || e.message;
    errEl.classList.remove('hidden');
  }
}

function confirmDeleteUser(userId, userName) {
  userToDelete = userId;
  document.getElementById('deleteUserMsg').textContent =
    t(`确认删除用户 "${userName}" 吗？`, `Delete user "${userName}"?`);
  document.getElementById('confirmDeleteBtn').onclick = () => deleteUser(userId);
  showModal('deleteUserModal');
}

async function deleteUser(userId) {
  hideModal('deleteUserModal');
  try {
    // Delete Firestore docs (Auth deletion requires Cloud Functions or admin SDK)
    await db.collection('users').doc(userId).delete();
    await db.collection('progress').doc(userId).delete();
    // Note: Auth user deletion requires server-side. Show instruction instead.
    allUsers = allUsers.filter(u => u.id !== userId);
    renderUsers();
    toast(t('用户数据已删除（Firebase Auth账号需在控制台手动删除）',
            'User data deleted. Remove Firebase Auth account from console.'), 'warning', 5000);
  } catch(e) {
    toast(t('删除失败: ','Delete failed: ') + e.message, 'danger');
  }
}

// ── Edit user ─────────────────────────────────────────
function showEditUser(userId) {
  const u = allUsers.find(x => x.id === userId);
  if (!u) return;
  userToEdit = userId;
  document.getElementById('editUserId').value   = userId;
  document.getElementById('editUserName').value  = u.name  || '';
  document.getElementById('editUserEmail').value = u.email || '';
  document.getElementById('editUserRole').value  = u.role  || 'user';
  document.getElementById('editUserError').classList.add('hidden');
  showModal('editUserModal');
}

async function saveEditUser() {
  const userId = document.getElementById('editUserId').value;
  const name   = document.getElementById('editUserName').value.trim();
  const role   = document.getElementById('editUserRole').value;
  const errEl  = document.getElementById('editUserError');
  errEl.classList.add('hidden');

  if (!name) {
    errEl.textContent = t('姓名不能为空', 'Name is required');
    errEl.classList.remove('hidden'); return;
  }

  try {
    await db.collection('users').doc(userId).update({ name, role });
    const u = allUsers.find(x => x.id === userId);
    if (u) { u.name = name; u.role = role; }
    hideModal('editUserModal');
    toast(t('用户信息已更新', 'User updated'), 'success');
    renderUsers();
  } catch(e) {
    errEl.textContent = e.message;
    errEl.classList.remove('hidden');
  }
}

function showAdminResetPwd(userId) {
  const u = allUsers.find(x => x.id === userId);
  if (!u) return;
  document.getElementById('adminCpUserId').value = userId;
  document.getElementById('adminCpUserName').textContent = `${u.name || u.email}（${u.email}）`;
  document.getElementById('adminCpCurPwd').textContent = u.password_plain || '（未记录）';
  document.getElementById('adminCpNewPwd').value = '';
  document.getElementById('adminCpError').classList.add('hidden');
  showModal('adminChangePwdModal');
}

async function adminChangePassword() {
  const userId = document.getElementById('adminCpUserId').value;
  const newPwd = (document.getElementById('adminCpNewPwd').value || '').trim();
  const errEl  = document.getElementById('adminCpError');
  errEl.classList.add('hidden');

  if (!newPwd || newPwd.length < 6) {
    errEl.textContent = t('新密码至少6位', 'Password must be at least 6 characters');
    errEl.classList.remove('hidden'); return;
  }

  const u = allUsers.find(x => x.id === userId);
  if (!u) { errEl.textContent = '用户不存在'; errEl.classList.remove('hidden'); return; }

  try {
    // Use secondary Firebase app to sign in as the user and update their Auth password
    if (u.password_plain) {
      const secondaryApp  = firebase.initializeApp(FIREBASE_CONFIG, 'pwd_reset_' + Date.now());
      const secondaryAuth = secondaryApp.auth();
      await secondaryAuth.signInWithEmailAndPassword(u.email, u.password_plain);
      await secondaryAuth.currentUser.updatePassword(newPwd);
      await secondaryAuth.signOut();
      secondaryApp.delete();
    }
    // Update Firestore password_plain
    await db.collection('users').doc(userId).update({ password_plain: newPwd });
    u.password_plain = newPwd;
    hideModal('adminChangePwdModal');
    document.getElementById('adminCpNewPwd').value = '';
    toast(t('密码已更新', 'Password updated'), 'success');
    renderUsers();
  } catch(e) {
    const msgs = {
      'auth/wrong-password': t('当前密码不正确，无法更新 Firebase 登录密码', 'Current password incorrect — Firebase Auth not updated'),
    };
    errEl.textContent = msgs[e.code] || e.message;
    errEl.classList.remove('hidden');
  }
}

// ── Results ───────────────────────────────────────────
function renderResults() {
  const modeFilter   = document.getElementById('filterMode')?.value || 'all';
  const resultFilter = document.getElementById('filterResult')?.value || 'all';

  let filtered = allAttempts;
  if (modeFilter   !== 'all') filtered = filtered.filter(a => a.mode === modeFilter);
  if (resultFilter === 'pass') filtered = filtered.filter(a => a.score >= EXAM_CONFIG.exam.passingScore);
  if (resultFilter === 'fail') filtered = filtered.filter(a => a.score < EXAM_CONFIG.exam.passingScore);

  if (!filtered.length) {
    document.getElementById('resultsContent').innerHTML =
      `<div class="empty-state"><div class="empty-icon">📋</div><p>${t('暂无记录','No records')}</p></div>`;
    return;
  }

  let html = `<div class="table-wrap"><table class="list-table"><thead><tr>
    <th>${t('姓名','Name')}</th><th>${t('类型','Type')}</th><th>${t('次数','Att#')}</th>
    <th>${t('分数','Score')}</th><th>${t('答对','Correct')}</th><th>${t('结果','Result')}</th><th>${t('时间','Date')}</th>
  </tr></thead><tbody>`;

  filtered.forEach(a => {
    const lbl  = scoreLabel(a.score);
    const cls  = scoreClass(a.score);
    const type = a.mode === 'exam' ? t('正式','Final') : t('模拟','Mock');
    html += `<tr>
      <td>${a.userName || '--'}</td><td>${type}</td>
      <td>${a.attemptNumber || '--'}</td>
      <td><b>${a.score}</b></td>
      <td>${a.correct} / ${a.total}</td>
      <td><span class="badge badge-${cls}">${lbl}</span></td>
      <td>${formatDate(a.createdAt)}</td>
    </tr>`;
  });

  html += '</tbody></table></div>';
  document.getElementById('resultsContent').innerHTML = html;
}

// ── Notifications ─────────────────────────────────────
// Notifications are written by the app.js client (via Firestore) and read here.
// When a user passes or fails all 3 attempts, a notification doc is created.
function renderNotifications() {
  if (!allNotifs.length) {
    document.getElementById('notifContent').innerHTML =
      `<div class="empty-state"><div class="empty-icon">🔔</div><p>${t('暂无通知','No notifications')}</p></div>`;
    return;
  }

  let html = '';
  allNotifs.forEach(n => {
    const icon = n.type === 'passed' ? '🎉' : '⚠️';
    const msg  = n.type === 'passed'
      ? t(`${n.userName} 考试通过，得分：${n.score}分`, `${n.userName} passed the exam with score ${n.score}`)
      : t(`${n.userName} 已用完3次考试机会，未通过（最高分${n.score}分）`,
          `${n.userName} has used all 3 attempts and did not pass (best: ${n.score})`);
    html += `<div class="notif-item ${n.read ? '' : 'unread'}" onclick="markRead('${n.id}', this)">
      <div class="notif-icon">${icon}</div>
      <div class="notif-content">
        <div class="notif-title">${msg}</div>
        <div class="notif-meta">${formatDate(n.createdAt)} ${n.read ? '' : `· <b>${t('未读','Unread')}</b>`}</div>
      </div>
    </div>`;
  });
  document.getElementById('notifContent').innerHTML = html;
}

async function markRead(notifId, el) {
  await db.collection('notifications').doc(notifId).update({ read: true });
  const idx = allNotifs.findIndex(n => n.id === notifId);
  if (idx !== -1) allNotifs[idx].read = true;
  el.classList.remove('unread');
  // Update badge
  const unread = allNotifs.filter(n => !n.read).length;
  const badge = document.getElementById('notifBadge');
  if (unread > 0) { badge.textContent = unread; badge.classList.remove('hidden'); }
  else badge.classList.add('hidden');
}

async function markAllRead() {
  const batch = db.batch();
  allNotifs.filter(n => !n.read).forEach(n => {
    batch.update(db.collection('notifications').doc(n.id), { read: true });
    n.read = true;
  });
  await batch.commit();
  document.getElementById('notifBadge').classList.add('hidden');
  renderNotifications();
  toast(t('全部已标为已读','All marked as read'), 'success');
}

// ═══════════════════════════════════════════════════════
//  KNOWLEDGE MANAGEMENT — Chapter CRUD
// ═══════════════════════════════════════════════════════

let allChapters      = [];
let editingChapterId = null;

// ── Chapter List ──────────────────────────────────────
async function renderContent() {
  document.getElementById('contentChapterList').classList.remove('hidden');
  document.getElementById('chapterEditorArea').classList.add('hidden');

  const snap = await db.collection('chapters').orderBy('order').get();
  allChapters = snap.docs.map(d => ({ id: d.id, ...d.data() }));

  const listEl = document.getElementById('contentChapterList');
  const seedBtn = document.getElementById('seedBtn');
  const syncBtn = document.getElementById('chapterSyncBtn');

  if (!allChapters.length) {
    if (seedBtn) seedBtn.style.display = '';
    if (syncBtn) syncBtn.style.display = 'none';
    listEl.innerHTML = `
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">📚</div>
        <h3 style="margin-bottom:.5rem;">${t('暂无知识库内容','No knowledge content yet')}</h3>
        <p style="margin:.5rem 0 1.5rem;font-size:.88rem;">${t('点击"导入默认知识库"一键导入系统内置的10个章节','Click "Import Default" to import 10 built-in chapters')}</p>
        <button class="btn btn-primary" onclick="seedDefaultChapters()">${t('📥 导入默认知识库','📥 Import Default Knowledge Base')}</button>
      </div>`;
    return;
  }

  // Chapters exist — hide direct seed, show sync button
  if (seedBtn) seedBtn.style.display = 'none';
  if (syncBtn) syncBtn.style.display = '';

  let html = `<div class="card" style="padding:0;overflow:hidden;">
    <div class="table-wrap"><table class="list-table"><thead><tr>
      <th style="width:70px;">${t('排序','Order')}</th>
      <th>${t('章节标题','Chapter Title')}</th>
      <th style="width:80px;text-align:center;">${t('小节数','Sections')}</th>
      <th style="width:160px;">${t('操作','Actions')}</th>
    </tr></thead><tbody>`;

  allChapters.forEach((ch, i) => {
    const sectionCount = Array.isArray(ch.sections) ? ch.sections.length : 0;
    html += `<tr>
      <td>
        <div style="display:flex;flex-direction:column;gap:3px;align-items:center;">
          <button class="btn btn-sm btn-outline" style="padding:1px 8px;font-size:.75rem;line-height:1.4;"
            onclick="moveChapter('${ch.id}',-1)" ${i===0?'disabled':''}>↑</button>
          <span style="font-size:.8rem;font-weight:600;color:var(--dark-gray);">${ch.order}</span>
          <button class="btn btn-sm btn-outline" style="padding:1px 8px;font-size:.75rem;line-height:1.4;"
            onclick="moveChapter('${ch.id}',1)" ${i===allChapters.length-1?'disabled':''}>↓</button>
        </div>
      </td>
      <td>
        <div style="font-weight:600;font-size:.92rem;color:var(--dark-blue);">${ch.titleZh || '--'}</div>
        <div style="font-size:.76rem;color:var(--dark-gray);margin-top:.15rem;">${ch.titleEn || ''}</div>
      </td>
      <td style="text-align:center;">
        <span class="badge badge-pending">${sectionCount} ${t('节','sec')}</span>
      </td>
      <td>
        <div style="display:flex;gap:.4rem;">
          <button class="btn btn-sm btn-outline" onclick="showChapterEditor('${ch.id}')">
            <i class="ti ti-edit"></i> ${t('编辑','Edit')}
          </button>
          <button class="btn btn-sm btn-danger" onclick="confirmDeleteChapter('${ch.id}','${(ch.titleZh||'').replace(/'/g,"\\'")}')">
            <i class="ti ti-trash"></i>
          </button>
        </div>
      </td>
    </tr>`;
  });

  html += '</tbody></table></div></div>';

  // Add chapter danger zone for accidental-import protection
  html += `
    <div style="margin-top:1.5rem;border:1.5px solid #e8b4b8;border-radius:10px;overflow:hidden;" id="chapDangerZone">
      <button onclick="toggleChapterDangerZone()"
        style="width:100%;padding:.65rem 1rem;background:#fff5f5;border:none;cursor:pointer;display:flex;align-items:center;gap:.5rem;font-size:.85rem;color:#c0392b;font-weight:600;text-align:left;">
        ⚠️ 危险操作区（点击展开）
        <span id="chapDzArrow" style="margin-left:auto;">▶</span>
      </button>
      <div id="chapDzContent" style="display:none;padding:1rem;background:#fff8f8;border-top:1px solid #e8b4b8;">
        <p style="color:#c0392b;font-size:.88rem;margin-bottom:.75rem;">
          ⚠️ 以下操作会<b>覆盖</b>现有全部 ${allChapters.length} 个章节，且不可撤销。
        </p>
        <p style="color:var(--text-muted);font-size:.84rem;margin-bottom:1rem;">
          请在输入框中输入 <b>CONFIRM</b> 后方可点击导入按钮：
        </p>
        <div style="display:flex;gap:.75rem;align-items:center;flex-wrap:wrap;">
          <input id="chapDangerConfirmInput" type="text" placeholder="输入 CONFIRM"
            style="padding:.5rem .75rem;border:1.5px solid #e8b4b8;border-radius:6px;font-size:.9rem;width:160px;">
          <button onclick="confirmSeedChapters()"
            style="padding:.5rem 1.25rem;background:#c0392b;color:#fff;border:none;border-radius:6px;font-size:.88rem;font-weight:600;cursor:pointer;">
            🗑 清空并从 data.js 重新导入
          </button>
        </div>
      </div>
    </div>`;

  listEl.innerHTML = html;
}

// ── Reorder ───────────────────────────────────────────
async function moveChapter(chId, dir) {
  const idx     = allChapters.findIndex(c => c.id === chId);
  const swapIdx = idx + dir;
  if (idx === -1 || swapIdx < 0 || swapIdx >= allChapters.length) return;

  const a = allChapters[idx], b = allChapters[swapIdx];
  const batch = db.batch();
  batch.update(db.collection('chapters').doc(a.id), { order: b.order });
  batch.update(db.collection('chapters').doc(b.id), { order: a.order });
  await batch.commit();
  toast(t('排序已更新','Order updated'), 'success');
  renderContent();
}

// ── Editor ────────────────────────────────────────────
function showChapterEditor(chId) {
  editingChapterId = chId;
  const ch = chId ? allChapters.find(c => c.id === chId) : null;

  document.getElementById('contentChapterList').classList.add('hidden');
  const editorEl = document.getElementById('chapterEditorArea');
  editorEl.classList.remove('hidden');

  const maxOrder     = allChapters.length ? Math.max(...allChapters.map(c => c.order)) : 0;
  const defaultOrder = ch ? ch.order : maxOrder + 1;
  const sections     = ch ? (ch.sections || []) : [];

  let sectionsHtml = sections.length
    ? sections.map((s, i) => buildSectionHtml(i, s)).join('')
    : `<p class="no-sections-msg" style="color:var(--dark-gray);text-align:center;padding:1.25rem 0;">${t('暂无小节，点击上方添加','No sections yet — click above to add.')}</p>`;
  const _sectionsForInit = sections; // capture for after-render init

  editorEl.innerHTML = `
    <div style="display:flex;align-items:center;gap:.75rem;margin-bottom:1.25rem;flex-wrap:wrap;">
      <button class="btn btn-outline btn-sm" onclick="cancelChapterEditor()">
        <i class="ti ti-arrow-left"></i> ${t('返回列表','Back')}
      </button>
      <h2 style="margin:0;">${ch ? t('编辑章节','Edit Chapter') : t('添加章节','Add Chapter')}</h2>
    </div>

    <div class="card">
      <div class="card-title" style="margin-bottom:1rem;"><i class="ti ti-info-circle" style="margin-right:.3rem;"></i>${t('基本信息','Basic Info')}</div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:1rem;margin-bottom:1rem;">
        <div class="form-group" style="margin:0;">
          <label class="form-label">${t('章节标题（中文）','Chapter Title (Chinese)')} *</label>
          <input class="form-input" id="ed-titleZh" value="${ch ? esc(ch.titleZh) : ''}" placeholder="${t('例：第一章 公司简介','e.g. Chapter 1: Company Intro')}">
        </div>
        <div class="form-group" style="margin:0;">
          <label class="form-label">${t('章节标题（英文）','Chapter Title (English)')}</label>
          <input class="form-input" id="ed-titleEn" value="${ch ? esc(ch.titleEn) : ''}" placeholder="e.g. Chapter 1: Company Introduction">
        </div>
      </div>
      <div style="display:grid;grid-template-columns:150px 1fr;gap:1rem;">
        <div class="form-group" style="margin:0;">
          <label class="form-label">${t('排序编号','Order No.')}</label>
          <input class="form-input" id="ed-order" type="number" value="${defaultOrder}" min="1">
        </div>
        <div class="form-group" style="margin:0;">
          <label class="form-label">${t('预计阅读时间（分钟）','Est. Reading Time (min)')}</label>
          <input class="form-input" id="ed-minutes" type="number" value="${ch ? (ch.estimatedMinutes||10) : 10}" min="1" style="width:120px;">
        </div>
      </div>
    </div>

    <div class="card">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:1rem;flex-wrap:wrap;gap:.5rem;">
        <div class="card-title"><i class="ti ti-list" style="margin-right:.3rem;"></i>${t('章节内容（小节）','Chapter Sections')}</div>
        <button class="btn btn-outline btn-sm" onclick="addEditorSection()">
          <i class="ti ti-plus"></i> ${t('添加小节','Add Section')}
        </button>
      </div>
      <div id="ed-sections">${sectionsHtml}</div>
    </div>

    <div style="display:flex;gap:.75rem;justify-content:flex-end;padding-bottom:2rem;">
      <button class="btn btn-outline" onclick="cancelChapterEditor()">${t('取消','Cancel')}</button>
      <button class="btn btn-primary" onclick="saveChapterEdit()">
        <i class="ti ti-device-floppy"></i> ${t('保存章节','Save Chapter')}
      </button>
    </div>`;

  // Initialize WYSIWYG editors after DOM is rendered
  if (_sectionsForInit && _sectionsForInit.length) {
    requestAnimationFrame(() => initSectionEditors(0, _sectionsForInit));
  }
}

function esc(str) {
  return (str || '').replace(/&/g,'&amp;').replace(/"/g,'&quot;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

// ── WYSIWYG Visual Editor ─────────────────────────────

// Keep selection alive when toolbar buttons are clicked
let _savedSel = null;
document.addEventListener('mousedown', e => {
  if (e.target.closest('.wysiwyg-toolbar')) {
    const sel = window.getSelection();
    if (sel && sel.rangeCount) _savedSel = sel.getRangeAt(0).cloneRange();
  }
}, true);

function restoreSel() {
  if (!_savedSel) return;
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(_savedSel);
}

function wFmt(cmd, val) {
  restoreSel();
  document.execCommand(cmd, false, val || null);
}

function wInsertHtml(editorId, html) {
  const el = document.getElementById(editorId);
  if (!el) return;
  el.focus();
  // Try restoring selection first, otherwise append
  const sel = window.getSelection();
  if (_savedSel && el.contains(_savedSel.startContainer)) {
    sel.removeAllRanges();
    sel.addRange(_savedSel);
    document.execCommand('insertHTML', false, html);
  } else {
    // Append at end
    el.focus();
    const range = document.createRange();
    range.selectNodeContents(el);
    range.collapse(false);
    sel.removeAllRanges();
    sel.addRange(range);
    document.execCommand('insertHTML', false, html);
  }
}

function wInsertTable(editorId) {
  const rows = parseInt(prompt(t('行数（含表头）:','Rows (including header):'), '3'));
  const cols = parseInt(prompt(t('列数:','Columns:'), '3'));
  if (!rows || !cols || rows < 1 || cols < 1) return;
  let html = '<table class="kc-table" style="width:100%;border-collapse:collapse;margin:.75rem 0"><thead><tr>';
  for (let c = 0; c < cols; c++) html += `<th style="background:#2B2B2B;color:#fff;padding:.45rem .75rem;text-align:left;">${t('列','Col')}${c+1}</th>`;
  html += '</tr></thead><tbody>';
  for (let r = 0; r < rows - 1; r++) {
    html += '<tr>';
    for (let c = 0; c < cols; c++) html += '<td style="padding:.45rem .75rem;border-bottom:1px solid #f0f0f0;">&nbsp;</td>';
    html += '</tr>';
  }
  html += '</tbody></table><p><br></p>';
  wInsertHtml(editorId, html);
}

function wInsertImg(editorId) {
  const src = prompt(t('图片路径（如 img/image1.png）:','Image path (e.g. img/image1.png):'), 'img/');
  if (!src) return;
  const cap = prompt(t('图片说明（可选）:','Caption (optional):'), '') || '';
  const html = `<figure style="display:inline-block;text-align:center;margin:.5rem .25rem;vertical-align:top;">
    <img src="${src}" alt="${cap}" style="max-width:160px;height:120px;object-fit:contain;border-radius:6px;border:1px solid #eee;">
    ${cap ? `<figcaption style="font-size:.72rem;color:#666;margin-top:.25rem;">${cap}</figcaption>` : ''}
  </figure>`;
  wInsertHtml(editorId, html);
}

function wInsertBlock(editorId, type) {
  const blocks = {
    intro:   `<div class="kc-intro" style="background:#FEF3EF;border-left:4px solid #E8603C;padding:.75rem 1rem;border-radius:0 8px 8px 0;margin:.5rem 0;">在这里填写简介内容</div><p><br></p>`,
    tip:     `<div class="kc-tip" style="background:#FEF9C3;border:1px solid #FDE047;border-radius:8px;padding:.65rem 1rem;margin:.5rem 0;">💡 <strong>提示：</strong>在这里填写提示内容</div><p><br></p>`,
    warning: `<div class="kc-warning" style="background:#FEF2F2;border:1px solid #FECACA;border-radius:8px;padding:.65rem 1rem;margin:.5rem 0;color:#991B1B;">⚠️ <strong>注意：</strong>在这里填写警告内容</div><p><br></p>`,
    badge:   `<span class="kc-badge kc-badge-orange" style="display:inline-block;padding:.15rem .5rem;border-radius:999px;background:#FEF3C7;color:#92400E;font-weight:700;">标签文字</span>`,
  };
  wInsertHtml(editorId, blocks[type] || '');
}

function wSetMode(idx, lang, mode) {
  const visual = document.getElementById(`sec-${idx}-vis${lang}`);
  const source = document.getElementById(`sec-${idx}-src${lang}`);
  const btnV   = document.getElementById(`sec-${idx}-btnV${lang}`);
  const btnH   = document.getElementById(`sec-${idx}-btnH${lang}`);
  if (!visual || !source) return;
  if (mode === 'visual') {
    visual.innerHTML = source.value;
    visual.contentEditable = 'true';
    visual.style.display = 'block';
    source.style.display = 'none';
    if (btnV) { btnV.classList.add('active-tab'); }
    if (btnH) { btnH.classList.remove('active-tab'); }
  } else {
    source.value = visual.innerHTML;
    visual.contentEditable = 'false';
    visual.style.display = 'none';
    source.style.display = 'block';
    if (btnV) { btnV.classList.remove('active-tab'); }
    if (btnH) { btnH.classList.add('active-tab'); }
  }
}

function wysiwyg_toolbar(idx, lang) {
  const ed = `sec-${idx}-vis${lang}`;
  return `
  <div class="wysiwyg-toolbar">
    <div class="wt-group">
      <button type="button" class="wt-btn" title="${t('粗体','Bold')}" onmousedown="event.preventDefault();wFmt('bold')"><b>B</b></button>
      <button type="button" class="wt-btn" title="${t('斜体','Italic')}" onmousedown="event.preventDefault();wFmt('italic')"><i>I</i></button>
      <button type="button" class="wt-btn" title="${t('下划线','Underline')}" onmousedown="event.preventDefault();wFmt('underline')"><u>U</u></button>
    </div>
    <div class="wt-sep"></div>
    <div class="wt-group">
      <button type="button" class="wt-btn" title="${t('标题','Heading')}" onmousedown="event.preventDefault();wFmt('formatBlock','h3')">H</button>
      <button type="button" class="wt-btn" title="${t('正文','Normal')}" onmousedown="event.preventDefault();wFmt('formatBlock','p')">P</button>
      <button type="button" class="wt-btn" title="${t('无序列表','Bullet list')}" onmousedown="event.preventDefault();wFmt('insertUnorderedList')">≡</button>
    </div>
    <div class="wt-sep"></div>
    <div class="wt-group">
      <button type="button" class="wt-btn wt-btn-icon" onmousedown="event.preventDefault();wInsertTable('${ed}')"><i class="ti ti-table"></i> ${t('表格','Table')}</button>
      <button type="button" class="wt-btn wt-btn-icon" onmousedown="event.preventDefault();wInsertImg('${ed}')"><i class="ti ti-photo"></i> ${t('图片','Image')}</button>
    </div>
    <div class="wt-sep"></div>
    <div class="wt-group">
      <button type="button" class="wt-btn wt-btn-icon" onmousedown="event.preventDefault();wInsertBlock('${ed}','intro')">📋 ${t('简介块','Intro')}</button>
      <button type="button" class="wt-btn wt-btn-icon" onmousedown="event.preventDefault();wInsertBlock('${ed}','tip')">💡 ${t('提示','Tip')}</button>
      <button type="button" class="wt-btn wt-btn-icon" onmousedown="event.preventDefault();wInsertBlock('${ed}','warning')">⚠️ ${t('警告','Warn')}</button>
    </div>
  </div>`;
}

/* ── Rich content editor helpers (legacy - kept for seedDefaultChapters) ── */
const SNIPPET_TEMPLATES = {
  table: `<table class="kc-table">
  <thead><tr><th>列1</th><th>列2</th><th>列3</th></tr></thead>
  <tbody>
    <tr><td></td><td></td><td></td></tr>
    <tr><td></td><td></td><td></td></tr>
  </tbody>
</table>`,
  tip: `<div class="kc-tip">💡 <strong>提示：</strong>在这里填写提示内容</div>`,
  warning: `<div class="kc-warning">⚠️ 注意：在这里填写警告内容</div>`,
  intro: `<div class="kc-intro">在这里填写简介内容</div>`,
  steps: `<div class="kc-steps">
  <div class="kc-step"><div class="kc-step-num">01</div><div class="kc-step-body"><div class="kc-step-title">步骤标题</div><div class="kc-step-desc">步骤说明</div></div></div>
  <div class="kc-step"><div class="kc-step-num">02</div><div class="kc-step-body"><div class="kc-step-title">步骤标题</div><div class="kc-step-desc">步骤说明</div></div></div>
</div>`,
  imgGrid: `<div class="kc-img-grid">
  <figure><img src="img/image1.png" alt="图片说明"><figcaption>图片说明</figcaption></figure>
  <figure><img src="img/image2.png" alt="图片说明"><figcaption>图片说明</figcaption></figure>
</div>`,
  twocol: `<div class="kc-two-col">
  <div class="kc-col kc-col-a"><div class="kc-col-header">左侧标题</div>左侧内容</div>
  <div class="kc-col kc-col-b"><div class="kc-col-header">右侧标题</div>右侧内容</div>
</div>`,
  highlight: `<div class="kc-highlight-row">
  <div class="kc-highlight"><span class="kc-hi-icon">📦</span><strong>标题</strong><br>内容说明</div>
  <div class="kc-highlight"><span class="kc-hi-icon">✨</span><strong>标题</strong><br>内容说明</div>
</div>`
};

function insertSnippet(textareaId, key) {
  const ta = document.getElementById(textareaId);
  if (!ta) return;
  const snippet = SNIPPET_TEMPLATES[key] || '';
  const start = ta.selectionStart, end = ta.selectionEnd;
  ta.value = ta.value.slice(0, start) + '\n' + snippet + '\n' + ta.value.slice(end);
  ta.selectionStart = ta.selectionEnd = start + snippet.length + 2;
  ta.focus();
}

function togglePreview(idx, lang) {
  const ta   = document.getElementById(`sec-${idx}-content${lang}`);
  const pre  = document.getElementById(`sec-${idx}-preview${lang}`);
  const btn  = document.getElementById(`sec-${idx}-prevbtn${lang}`);
  if (!ta || !pre) return;
  if (pre.style.display === 'none') {
    pre.innerHTML = ta.value;
    pre.style.display = 'block';
    ta.style.display = 'none';
    btn.innerHTML = '<i class="ti ti-pencil"></i> ' + t('编辑','Edit');
  } else {
    ta.value = pre.innerHTML;
    pre.style.display = 'none';
    ta.style.display = 'block';
    btn.innerHTML = '<i class="ti ti-eye"></i> ' + t('预览','Preview');
  }
}

function richEditorToolbar(taId) {
  const snippets = [
    {key:'intro',    icon:'ti-info-circle',   label:'简介块'},
    {key:'table',    icon:'ti-table',         label:'表格'},
    {key:'tip',      icon:'ti-bulb',          label:'提示框'},
    {key:'warning',  icon:'ti-alert-triangle', label:'警告框'},
    {key:'steps',    icon:'ti-list-numbers',  label:'步骤流'},
    {key:'twocol',   icon:'ti-layout-columns',label:'双栏'},
    {key:'highlight',icon:'ti-cards',         label:'卡片组'},
    {key:'imgGrid',  icon:'ti-photo',         label:'图片格'},
  ];
  return `<div style="display:flex;flex-wrap:wrap;gap:.3rem;margin-bottom:.4rem;">
    ${snippets.map(s => `<button type="button" class="btn btn-sm btn-outline" style="padding:.2rem .5rem;font-size:.72rem;"
      onclick="insertSnippet('${taId}','${s.key}')">
      <i class="ti ${s.icon}"></i> ${s.label}
    </button>`).join('')}
  </div>`;
}

function buildSectionHtml(idx, sec) {
  // Content is set via initSectionEditors() to avoid HTML injection issues
  return `<div class="chapter-section-block" id="sec-block-${idx}"
    style="border:1px solid var(--mid-gray);border-radius:var(--radius-sm);padding:1rem;margin-bottom:.75rem;background:var(--gray);">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.75rem;">
      <span style="font-weight:600;font-size:.82rem;color:var(--dark-gray);text-transform:uppercase;letter-spacing:.04em;">
        ${t('小节','Section')} ${idx + 1}
      </span>
      <button class="btn btn-sm btn-danger" style="padding:.25rem .6rem;" onclick="removeEditorSection(${idx})">
        <i class="ti ti-trash"></i>
      </button>
    </div>
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;margin-bottom:.75rem;">
      <div class="form-group" style="margin:0;">
        <label class="form-label" style="font-size:.78rem;">${t('小节标题（中文）','Heading (Chinese)')}</label>
        <input class="form-input" id="sec-${idx}-headingZh" value="${esc(sec.headingZh||'')}" placeholder="${t('中文小节标题','Chinese section heading')}">
      </div>
      <div class="form-group" style="margin:0;">
        <label class="form-label" style="font-size:.78rem;">${t('小节标题（英文）','Heading (English)')}</label>
        <input class="form-input" id="sec-${idx}-headingEn" value="${esc(sec.headingEn||'')}" placeholder="English section heading">
      </div>
    </div>

    <!-- Language Tab switcher -->
    <div style="display:flex;border-bottom:2px solid var(--mid-gray);margin-bottom:.75rem;gap:0;">
      <button type="button" id="sec-${idx}-tabZh"
        onclick="switchLangTab(${idx},'Zh')"
        style="padding:.4rem 1.1rem;border:none;border-bottom:2px solid var(--orange);margin-bottom:-2px;
               background:none;cursor:pointer;font-size:.82rem;font-weight:700;color:var(--orange);">
        🇨🇳 ${t('中文内容','中文')}
      </button>
      <button type="button" id="sec-${idx}-tabEn"
        onclick="switchLangTab(${idx},'En')"
        style="padding:.4rem 1.1rem;border:none;border-bottom:2px solid transparent;margin-bottom:-2px;
               background:none;cursor:pointer;font-size:.82rem;font-weight:600;color:var(--dark-gray);">
        🇬🇧 English
      </button>
    </div>

    <div id="sec-${idx}-panelZh" style="display:block;">
      ${buildEditorPanel(idx,'Zh')}
    </div>
    <div id="sec-${idx}-panelEn" style="display:none;">
      ${buildEditorPanel(idx,'En')}
    </div>
  </div>`;
}

function switchLangTab(idx, lang) {
  const isZh = lang === 'Zh';
  document.getElementById(`sec-${idx}-panelZh`).style.display = isZh ? 'block' : 'none';
  document.getElementById(`sec-${idx}-panelEn`).style.display = isZh ? 'none' : 'block';
  const tabZh = document.getElementById(`sec-${idx}-tabZh`);
  const tabEn = document.getElementById(`sec-${idx}-tabEn`);
  tabZh.style.color = isZh ? 'var(--orange)' : 'var(--dark-gray)';
  tabZh.style.fontWeight = isZh ? '700' : '600';
  tabZh.style.borderBottomColor = isZh ? 'var(--orange)' : 'transparent';
  tabEn.style.color = isZh ? 'var(--dark-gray)' : 'var(--orange)';
  tabEn.style.fontWeight = isZh ? '600' : '700';
  tabEn.style.borderBottomColor = isZh ? 'transparent' : 'var(--orange)';
}

function buildEditorPanel(idx, lang) {
  return `
  <div class="form-group" style="margin:0;">
    <div style="display:flex;align-items:center;justify-content:flex-end;margin-bottom:.35rem;gap:.2rem;">
      <button type="button" id="sec-${idx}-btnV${lang}" class="wt-mode-btn active-tab"
        onmousedown="event.preventDefault();wSetMode(${idx},'${lang}','visual')">
        <i class="ti ti-eye"></i> ${t('可视化','Visual')}
      </button>
      <button type="button" id="sec-${idx}-btnH${lang}" class="wt-mode-btn"
        onmousedown="event.preventDefault();wSetMode(${idx},'${lang}','html')">
        &lt;/&gt; HTML
      </button>
    </div>
    ${wysiwyg_toolbar(idx, lang)}
    <div class="wysiwyg-editor reader-body" id="sec-${idx}-vis${lang}" contenteditable="false"
      style="display:block;min-height:280px;"></div>
    <textarea class="form-input" id="sec-${idx}-src${lang}" rows="12"
      style="display:none;font-family:monospace;font-size:.73rem;resize:vertical;min-height:280px;"></textarea>
  </div>`;
}

function initSectionEditors(startIdx, sections) {
  // Called after DOM is ready to set innerHTML safely
  sections.forEach((sec, i) => {
    const idx = startIdx + i;
    const visZh = document.getElementById(`sec-${idx}-visZh`);
    const visEn = document.getElementById(`sec-${idx}-visEn`);
    if (visZh) { visZh.innerHTML = sec.contentZh || ''; visZh.contentEditable = 'true'; }
    if (visEn) { visEn.innerHTML = sec.contentEn || ''; visEn.contentEditable = 'true'; }
  });
}

function collectEditorSections() {
  const blocks = document.querySelectorAll('.chapter-section-block');
  return Array.from(blocks).map((_, i) => {
    const getContent = (lang) => {
      const src = document.getElementById(`sec-${i}-src${lang}`);
      const vis = document.getElementById(`sec-${i}-vis${lang}`);
      // If HTML source mode is visible, use textarea value
      if (src && src.style.display !== 'none') return src.value;
      return vis ? vis.innerHTML : '';
    };
    return {
      headingZh: document.getElementById(`sec-${i}-headingZh`)?.value || '',
      headingEn: document.getElementById(`sec-${i}-headingEn`)?.value || '',
      contentZh: getContent('Zh'),
      contentEn: getContent('En')
    };
  });
}

function addEditorSection() {
  const container = document.getElementById('ed-sections');
  const placeholder = container.querySelector('.no-sections-msg');
  if (placeholder) placeholder.remove();
  const idx = container.querySelectorAll('.chapter-section-block').length;
  container.insertAdjacentHTML('beforeend', buildSectionHtml(idx, {}));
  initSectionEditors(idx, [{}]);
  container.lastElementChild.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function removeEditorSection(idx) {
  const sections = collectEditorSections();
  sections.splice(idx, 1);
  const container = document.getElementById('ed-sections');
  if (!sections.length) {
    container.innerHTML = `<p class="no-sections-msg" style="color:var(--dark-gray);text-align:center;padding:1.25rem 0;">${t('暂无小节，点击上方添加','No sections yet — click above to add.')}</p>`;
    return;
  }
  container.innerHTML = sections.map((s, i) => buildSectionHtml(i, s)).join('');
  initSectionEditors(0, sections);
}

// ── Save ──────────────────────────────────────────────
async function saveChapterEdit() {
  const titleZh = document.getElementById('ed-titleZh').value.trim();
  const titleEn = document.getElementById('ed-titleEn').value.trim();
  const order   = parseInt(document.getElementById('ed-order').value) || 1;
  const mins    = parseInt(document.getElementById('ed-minutes').value) || 10;

  if (!titleZh) {
    toast(t('请填写中文章节标题','Please enter the Chinese chapter title'), 'danger');
    return;
  }

  const sections = collectEditorSections().filter(s => s.headingZh || s.contentZh);

  const data = {
    titleZh, titleEn, order,
    estimatedMinutes: mins,
    sections,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  // ── Editor: submit for approval ──────────────────────
  if (isEditor()) {
    const desc = editingChapterId
      ? t(`修改章节「${titleZh}」`, `Edit chapter "${titleZh}"`)
      : t(`新增章节「${titleZh}」`, `Add chapter "${titleZh}"`);
    const orig = editingChapterId ? allChapters.find(c => c.id === editingChapterId) : null;
    const newId = editingChapterId || ('ch' + String(order).padStart(2,'0') + '_' + Date.now());
    try {
      await submitPendingChange(editingChapterId ? 'edit' : 'add', 'chapters', newId, data, orig, desc);
      toast(t('✅ 已提交审核，待管理员批准','✅ Submitted for review'), 'success');
      cancelChapterEditor();
    } catch(e) { toast(t('提交失败：','Submit failed: ') + e.message, 'danger'); }
    return;
  }

  try {
    if (editingChapterId) {
      await db.collection('chapters').doc(editingChapterId).update(data);
      toast(t('章节已保存 ✓','Chapter saved ✓'), 'success');
    } else {
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      const newId = 'ch' + String(order).padStart(2,'0') + '_' + Date.now();
      await db.collection('chapters').doc(newId).set(data);
      toast(t('章节已创建 ✓','Chapter created ✓'), 'success');
    }
    cancelChapterEditor();
  } catch(e) {
    toast(t('保存失败：','Save failed: ') + e.message, 'danger');
  }
}

function cancelChapterEditor() {
  editingChapterId = null;
  document.getElementById('contentChapterList').classList.remove('hidden');
  document.getElementById('chapterEditorArea').classList.add('hidden');
  renderContent();
}

// ── Delete ────────────────────────────────────────────
function confirmDeleteChapter(chId, chTitle) {
  if (confirm(t(`确认删除章节"${chTitle}"？此操作不可撤销。`, `Delete chapter "${chTitle}"? This cannot be undone.`))) {
    deleteChapter(chId);
  }
}

async function deleteChapter(chId) {
  // ── Editor: submit for approval ──────────────────────
  if (isEditor()) {
    const orig = allChapters.find(c => c.id === chId);
    const desc = t(`删除章节「${orig ? orig.titleZh : chId}」`, `Delete chapter "${orig ? orig.titleZh : chId}"`);
    try {
      await submitPendingChange('delete', 'chapters', chId, null, orig, desc);
      toast(t('✅ 已提交删除审核，待管理员批准','✅ Delete submitted for review'), 'success');
    } catch(e) { toast(t('提交失败：','Submit failed: ') + e.message, 'danger'); }
    return;
  }
  try {
    await db.collection('chapters').doc(chId).delete();
    allChapters = allChapters.filter(c => c.id !== chId);
    toast(t('章节已删除','Chapter deleted'), 'success');
    renderContent();
  } catch(e) {
    toast(t('删除失败：','Delete failed: ') + e.message, 'danger');
  }
}

// ── Seed default data ─────────────────────────────────
async function seedDefaultChapters() {
  // Step 1: try global CHAPTERS (works if data.js already loaded)
  let chapData = null;
  try { if (typeof CHAPTERS !== 'undefined' && CHAPTERS.length) chapData = CHAPTERS; } catch(e) {}

  // Step 2: if not found, fetch and execute data.js dynamically
  if (!chapData) {
    try {
      const res  = await fetch('js/data.js');
      const text = await res.text();
      // Execute the script in a sandboxed function to capture CHAPTERS
      // eslint-disable-next-line no-new-func
      const fn   = new Function(text + '\n return (typeof CHAPTERS !== "undefined") ? CHAPTERS : null;');
      chapData   = fn();
    } catch(e) {
      console.error('动态加载 data.js 失败:', e);
    }
  }

  if (!chapData || !chapData.length) {
    toast(t('找不到默认知识库数据，请确认 data.js 已上传','Cannot find data.js. Please ensure it is uploaded.'), 'danger', 5000);
    return;
  }
  const btn = document.getElementById('seedBtn');
  if (btn) { btn.disabled = true; btn.textContent = t('导入中...','Importing...'); }

  try {
    // Firestore batch limit is 500 ops; 10 chapters is fine
    const batch = db.batch();
    chapData.forEach(ch => {
      const ref = db.collection('chapters').doc(ch.id);
      batch.set(ref, {
        titleZh:          ch.titleZh  || ch.title || '',
        titleEn:          ch.titleEn  || '',
        order:            ch.order    || 1,
        estimatedMinutes: ch.estimatedMinutes || 10,
        sections: (ch.sections || []).map(s => ({
          headingZh:  s.headingZh || s.heading || '',
          headingEn:  s.headingEn || '',
          contentZh:  s.contentZh || s.content || '',
          contentEn:  s.contentEn || ''
        })),
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      }, { merge: true });
    });
    await batch.commit();
    toast(t(`已成功导入 ${chapData.length} 个章节 ✓`, `Successfully imported ${chapData.length} chapters ✓`), 'success');
    renderContent();
  } catch(e) {
    toast(t('导入失败：','Import failed: ') + e.message, 'danger');
  } finally {
    if (btn) {
      btn.disabled = false;
      btn.innerHTML = `<i class="ti ti-download"></i> ${t('导入默认知识库','Import Default')}`;
    }
  }
}

// ── Chapter danger zone ───────────────────────────────
function toggleChapterDangerZone() {
  const content = document.getElementById('chapDzContent');
  const arrow   = document.getElementById('chapDzArrow');
  if (!content) return;
  const isOpen = content.style.display !== 'none';
  content.style.display = isOpen ? 'none' : 'block';
  arrow.textContent = isOpen ? '▶' : '▼';
}

function confirmSeedChapters() {
  const val = (document.getElementById('chapDangerConfirmInput')?.value || '').trim();
  if (val !== 'CONFIRM') { toast('请先输入 CONFIRM 确认操作', 'warning'); return; }
  seedDefaultChapters();
}

// ── Chapter sync to data.js ───────────────────────────
function showChapterSyncModal() {
  document.getElementById('syncChapCount').textContent = allChapters.length || '--';
  document.getElementById('syncChapProgress').classList.add('hidden');
  document.getElementById('syncChapLog').textContent = '';
  document.getElementById('syncChapError').classList.add('hidden');
  document.getElementById('syncChapStartBtn').disabled = false;
  const cached = sessionStorage.getItem('_gh_sync_token');
  if (cached) document.getElementById('syncChapToken').value = cached;
  showModal('syncChaptersModal');
}

function chapSyncLog(msg) {
  const el = document.getElementById('syncChapLog');
  el.textContent += msg + '\n';
  el.scrollTop = el.scrollHeight;
}

async function startChapterSync() {
  const token = document.getElementById('syncChapToken').value.trim();
  if (!token) {
    document.getElementById('syncChapError').textContent = '请输入 GitHub Token';
    document.getElementById('syncChapError').classList.remove('hidden');
    return;
  }
  sessionStorage.setItem('_gh_sync_token', token);
  document.getElementById('syncChapError').classList.add('hidden');
  document.getElementById('syncChapProgress').classList.remove('hidden');
  document.getElementById('syncChapStartBtn').disabled = true;
  chapSyncLog('① 从 Firestore 加载章节…');

  try {
    // Step 1: ensure chapters loaded
    if (!allChapters.length) {
      const snap = await db.collection('chapters').orderBy('order').get();
      allChapters = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    }
    const chapters = allChapters.map(ch => ({
      id: ch.id,
      titleZh: ch.titleZh || '',
      titleEn: ch.titleEn || '',
      order: ch.order || 1,
      estimatedMinutes: ch.estimatedMinutes || 10,
      sections: (ch.sections || []).map(s => ({
        headingZh: s.headingZh || '',
        headingEn: s.headingEn || '',
        contentZh: s.contentZh || '',
        contentEn: s.contentEn || ''
      }))
    }));
    chapSyncLog(`   已加载 ${chapters.length} 个章节`);

    // Step 2: fetch data.js from GitHub
    chapSyncLog('② 从 GitHub 读取 data.js…');
    const getResp = await fetch(
      `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_PATH}?ref=${SYNC_BRANCH}`,
      { headers: { Authorization: `token ${token}` } }
    );
    if (!getResp.ok) {
      const e = await getResp.json();
      throw new Error('读取 data.js 失败: ' + (e.message || getResp.status));
    }
    const fileData = await getResp.json();
    const sha = fileData.sha;
    const original = fromB64(fileData.content);
    chapSyncLog(`   文件大小: ${(original.length / 1024).toFixed(1)} KB，SHA: ${sha.slice(0,10)}…`);

    // Step 3: find and replace CHAPTERS array using bracket-depth counter
    chapSyncLog('③ 替换 CHAPTERS 数组…');
    const marker = 'const CHAPTERS';
    const si = original.indexOf(marker);
    if (si === -1) throw new Error('在 data.js 中未找到 CHAPTERS');

    const bi = original.indexOf('[', si);
    let depth = 0, ei = bi;
    for (let i = bi; i < original.length; i++) {
      if (original[i] === '[') depth++;
      else if (original[i] === ']') { depth--; if (depth === 0) { ei = i; break; } }
    }
    let afterEnd = ei + 1;
    if (original[afterEnd] === ';') afterEnd++;

    const newDecl = `const CHAPTERS = ${JSON.stringify(chapters, null, 2)};`;
    const updated = original.substring(0, si) + newDecl + original.substring(afterEnd);
    chapSyncLog(`   替换完成，新文件大小: ${(updated.length / 1024).toFixed(1)} KB`);

    // Step 4: push back to GitHub
    chapSyncLog('④ 推送到 GitHub…');
    const pushResp = await fetch(
      `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_PATH}`,
      {
        method: 'PUT',
        headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `sync: update CHAPTERS from Firestore (${chapters.length} chapters)`,
          content: toB64(updated),
          sha: sha,
          branch: SYNC_BRANCH
        })
      }
    );
    if (!pushResp.ok) {
      const e = await pushResp.json();
      throw new Error('推送失败: ' + (e.message || pushResp.status));
    }
    chapSyncLog(`\n✅ 同步成功！data.js 已更新为 ${chapters.length} 个最新章节。`);
    chapSyncLog('   等约 30 秒 GitHub Pages 刷新后生效。');
    toast('✅ 知识库已同步到 data.js', 'success');

  } catch(e) {
    chapSyncLog('\n❌ 失败: ' + e.message);
    document.getElementById('syncChapError').textContent = e.message;
    document.getElementById('syncChapError').classList.remove('hidden');
  } finally {
    document.getElementById('syncChapStartBtn').disabled = false;
  }
}

// ── Exam Settings ─────────────────────────────────────

function renderSettings() {
  document.getElementById('setPassingScore').value   = EXAM_CONFIG.exam.passingScore;
  document.getElementById('setExcellentScore').value = EXAM_CONFIG.exam.excellentScore;
  document.getElementById('setMaxAttempts').value    = EXAM_CONFIG.exam.maxAttempts;
  document.getElementById('setCooldownHours').value  = EXAM_CONFIG.exam.cooldownHours;
  document.getElementById('setTimeMinutes').value    = EXAM_CONFIG.exam.timeMinutes;
  document.getElementById('settingsSavedMsg').style.display = 'none';
  const err = document.getElementById('settingsError');
  err.textContent = ''; err.classList.add('hidden');
}

async function saveExamSettings() {
  const passing   = parseInt(document.getElementById('setPassingScore').value);
  const excellent = parseInt(document.getElementById('setExcellentScore').value);
  const maxAtt    = parseInt(document.getElementById('setMaxAttempts').value);
  const cooldown  = parseInt(document.getElementById('setCooldownHours').value);
  const timeMins  = parseInt(document.getElementById('setTimeMinutes').value);

  const errEl = document.getElementById('settingsError');
  errEl.classList.add('hidden');

  if (isNaN(passing) || passing < 1 || passing > 100) {
    errEl.textContent = '及格分数须在 1-100 之间'; errEl.classList.remove('hidden'); return;
  }
  if (isNaN(excellent) || excellent < passing || excellent > 100) {
    errEl.textContent = '优秀分数须大于等于及格分数，且不超过 100'; errEl.classList.remove('hidden'); return;
  }
  if (isNaN(maxAtt) || maxAtt < 1) {
    errEl.textContent = '考试次数至少为 1'; errEl.classList.remove('hidden'); return;
  }
  if (isNaN(cooldown) || cooldown < 0) {
    errEl.textContent = '冷却时间不能为负数'; errEl.classList.remove('hidden'); return;
  }
  if (isNaN(timeMins) || timeMins < 10) {
    errEl.textContent = '考试时间至少 10 分钟'; errEl.classList.remove('hidden'); return;
  }

  const settings = { passingScore: passing, excellentScore: excellent,
    maxAttempts: maxAtt, cooldownHours: cooldown, timeMinutes: timeMins,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp() };

  // ── Editor: submit for approval ──────────────────────
  if (isEditor()) {
    const desc = t('修改考试设置（及格/优秀分数线、次数、时间）','Edit exam settings');
    try {
      await submitPendingChange('edit', 'settings', 'exam', settings, null, desc);
      toast(t('✅ 已提交审核，待管理员批准','✅ Submitted for review'), 'success');
      document.getElementById('settingsSavedMsg').style.display = 'inline';
      setTimeout(() => { document.getElementById('settingsSavedMsg').style.display = 'none'; }, 3000);
    } catch(e) { errEl.textContent = '提交失败: ' + e.message; errEl.classList.remove('hidden'); }
    return;
  }

  try {
    await db.collection('settings').doc('exam').set(settings);
    // Update runtime config immediately
    EXAM_CONFIG.exam.passingScore   = passing;
    EXAM_CONFIG.exam.excellentScore = excellent;
    EXAM_CONFIG.exam.maxAttempts    = maxAtt;
    EXAM_CONFIG.exam.cooldownHours  = cooldown;
    EXAM_CONFIG.exam.timeMinutes    = timeMins;
    EXAM_CONFIG.mock.timeMinutes    = timeMins;
    const msg = document.getElementById('settingsSavedMsg');
    msg.style.display = 'inline';
    setTimeout(() => { msg.style.display = 'none'; }, 3000);
    toast(t('设置已保存', 'Settings saved'), 'success');
  } catch(e) {
    errEl.textContent = '保存失败: ' + e.message; errEl.classList.remove('hidden');
  }
}

// ═══════════════════════════════════════════════════════
//  QUESTION BANK MANAGEMENT
// ═══════════════════════════════════════════════════════

let allQuestions   = [];   // loaded from Firestore
let filteredQs     = [];   // after search/filter
let currentQPage   = 1;
const Q_PER_PAGE   = 30;
let editingQDocId  = null; // Firestore doc id of question being edited
let deletingQDocId = null;

// ── Load questions from Firestore ─────────────────────
async function loadQuestions() {
  try {
    const snap = await db.collection('examQuestions').orderBy('num').get();
    allQuestions = snap.docs.map(d => ({ _docId: d.id, ...d.data() }));
    // Hide nav badge (count not needed in sidebar)
    const badge = document.getElementById('qBadge');
    if (badge) badge.classList.add('hidden');
    return allQuestions;
  } catch(e) {
    console.warn('loadQuestions error:', e.message);
    return [];
  }
}

// ── Render question list ──────────────────────────────
function renderQuestions() {
  const search  = (document.getElementById('qSearch')?.value || '').toLowerCase();
  const typeF   = document.getElementById('qFilterType')?.value || 'all';
  const chapF   = document.getElementById('qFilterChapter')?.value || 'all';

  filteredQs = allQuestions.filter(q => {
    if (typeF !== 'all' && q.type !== typeF) return false;
    if (chapF !== 'all' && String(q.chapter) !== chapF) return false;
    if (search) {
      const text = (q.textZh || q.text || '').toLowerCase();
      const blanks = (q.blanks || []).join(' ').toLowerCase();
      const opts = (q.options || []).join(' ').toLowerCase();
      if (!text.includes(search) && !blanks.includes(search) && !opts.includes(search)) return false;
    }
    return true;
  });

  // Update chapter filter options
  const chapSel = document.getElementById('qFilterChapter');
  if (chapSel && chapSel.options.length <= 1) {
    const chapters = [...new Set(allQuestions.map(q => q.chapter).filter(Boolean))].sort((a,b)=>a-b);
    chapters.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c; opt.textContent = `第 ${c} 章`;
      chapSel.appendChild(opt);
    });
  }

  document.getElementById('qCount').textContent = `${filteredQs.length} / ${allQuestions.length} 题`;

  const totalPages = Math.max(1, Math.ceil(filteredQs.length / Q_PER_PAGE));
  if (currentQPage > totalPages) currentQPage = 1;
  const pageQs = filteredQs.slice((currentQPage-1)*Q_PER_PAGE, currentQPage*Q_PER_PAGE);

  const container = document.getElementById('questionsContent');
  if (!container) return;

  if (allQuestions.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:3rem 1rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">📭</div>
        <h3 style="margin-bottom:.5rem;">题库尚未导入</h3>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;">点击右上角「从data.js导入题库」一键导入全部 V6 题目</p>
        <button class="btn btn-primary" onclick="seedQuestions()">
          <i class="ti ti-database-import"></i> 立即导入题库
        </button>
      </div>`;
    document.getElementById('qPagination').innerHTML = '';
    return;
  }

  if (filteredQs.length === 0) {
    container.innerHTML = `<div class="empty-state"><div class="empty-icon">🔍</div><p>没有符合条件的题目</p></div>`;
    document.getElementById('qPagination').innerHTML = '';
    return;
  }

  // Table
  let html = `<table style="width:100%;border-collapse:collapse;">
    <thead>
      <tr style="border-bottom:2px solid var(--border);">
        <th style="padding:.6rem 1rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);letter-spacing:.04em;width:52px;">#</th>
        <th style="padding:.6rem .75rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);letter-spacing:.04em;width:68px;">类型</th>
        <th style="padding:.6rem .75rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);letter-spacing:.04em;">题目内容</th>
        <th style="padding:.6rem .75rem;text-align:center;font-size:.78rem;font-weight:600;color:var(--text-muted);letter-spacing:.04em;width:56px;">章节</th>
        <th style="padding:.6rem .75rem;text-align:center;font-size:.78rem;font-weight:600;color:var(--text-muted);letter-spacing:.04em;width:52px;">图片</th>
        <th style="padding:.6rem 1rem;text-align:right;font-size:.78rem;font-weight:600;color:var(--text-muted);letter-spacing:.04em;width:68px;">操作</th>
      </tr>
    </thead><tbody>`;

  pageQs.forEach((q, idx) => {
    const isFill = q.type === 'fill';
    const typeBadge = isFill
      ? '<span style="display:inline-block;padding:2px 8px;border-radius:20px;font-size:.75rem;font-weight:600;background:#e8f4fd;color:#1a6fa0;border:1px solid #b8dff5;">填空</span>'
      : '<span style="display:inline-block;padding:2px 8px;border-radius:20px;font-size:.75rem;font-weight:600;background:#fff3e0;color:#b06000;border:1px solid #ffd180;">选择</span>';
    const rawText = (q.textZh || q.text || '');
    const displayText = rawText.replace(/</g,'&lt;').substring(0, 72) + (rawText.length > 72 ? '…' : '');
    const hasImg = q.image && (Array.isArray(q.image) ? q.image.length > 0 : true);
    const rowBg = idx % 2 === 0 ? '' : 'background:rgba(0,0,0,.018)';
    const qData = JSON.stringify(q).replace(/"/g,'&quot;');
    html += `<tr style="border-bottom:1px solid var(--border);${rowBg};transition:background .15s;"
      onmouseover="this.style.background='rgba(26,79,160,.06)'" onmouseout="this.style.background='${idx%2?'rgba(0,0,0,.018)':''}'"
      onclick="showQuestionEditor(${qData})" style="cursor:pointer;">
      <td style="padding:.7rem 1rem;color:var(--text-muted);font-size:.8rem;font-weight:500;white-space:nowrap;">Q${q.num}</td>
      <td style="padding:.7rem .75rem;">${typeBadge}</td>
      <td style="padding:.7rem .75rem;font-size:.9rem;line-height:1.45;cursor:pointer;">${displayText}</td>
      <td style="padding:.7rem .75rem;text-align:center;font-size:.8rem;color:var(--text-muted);">Ch${q.chapter||'?'}</td>
      <td style="padding:.7rem .75rem;text-align:center;font-size:.9rem;">${hasImg ? '🖼' : '<span style="color:var(--border);">—</span>'}</td>
      <td style="padding:.7rem 1rem;text-align:right;" onclick="event.stopPropagation()">
        <button onclick="showQuestionEditor(${qData})"
          style="padding:4px 12px;border-radius:6px;border:1.5px solid var(--primary);background:transparent;color:var(--primary);font-size:.8rem;font-weight:600;cursor:pointer;transition:all .15s;"
          onmouseover="this.style.background='var(--primary)';this.style.color='#fff'"
          onmouseout="this.style.background='transparent';this.style.color='var(--primary)'"
          style="padding:4px 12px;border-radius:6px;border:1.5px solid var(--primary);background:transparent;color:var(--primary);font-size:.8rem;font-weight:600;cursor:pointer;transition:all .15s;white-space:nowrap;">编辑</button>
      </td>
    </tr>`;
  });

  html += '</tbody></table>';
  container.innerHTML = html;

  // Hide the seed button when questions already exist — show danger zone instead
  const seedBtn = document.getElementById('seedQBtn');
  if (seedBtn) seedBtn.style.display = 'none';

  // Render danger zone below pagination
  let dz = document.getElementById('qDangerZone');
  if (!dz) {
    dz = document.createElement('div');
    dz.id = 'qDangerZone';
    document.getElementById('qPagination').insertAdjacentElement('afterend', dz);
  }
  dz.innerHTML = `
    <div style="margin-top:1.5rem;border:1.5px solid #e8b4b8;border-radius:10px;overflow:hidden;">
      <button onclick="toggleDangerZone()"
        style="width:100%;padding:.65rem 1rem;background:#fff5f5;border:none;cursor:pointer;display:flex;align-items:center;gap:.5rem;font-size:.85rem;color:#c0392b;font-weight:600;text-align:left;">
        ⚠️ 危险操作区（点击展开）
        <span id="dzArrow" style="margin-left:auto;">▶</span>
      </button>
      <div id="dzContent" style="display:none;padding:1rem;background:#fff8f8;border-top:1px solid #e8b4b8;">
        <p style="color:#c0392b;font-size:.88rem;margin-bottom:.75rem;">
          ⚠️ 以下操作会<b>清空并覆盖</b>现有全部 ${allQuestions.length} 道题目，且不可恢复。
        </p>
        <p style="color:var(--text-muted);font-size:.84rem;margin-bottom:1rem;">
          请在输入框中输入 <b>CONFIRM</b> 后方可点击导入按钮：
        </p>
        <div style="display:flex;gap:.75rem;align-items:center;flex-wrap:wrap;">
          <input id="dangerConfirmInput" type="text" placeholder="输入 CONFIRM"
            style="padding:.5rem .75rem;border:1.5px solid #e8b4b8;border-radius:6px;font-size:.9rem;width:160px;">
          <button onclick="confirmSeedQuestions()"
            style="padding:.5rem 1.25rem;background:#c0392b;color:#fff;border:none;border-radius:6px;font-size:.88rem;font-weight:600;cursor:pointer;">
            🗑 清空并从 data.js 重新导入
          </button>
        </div>
      </div>
    </div>`;

  // Pagination
  renderQPagination(totalPages);
}

function toggleDangerZone() {
  const content = document.getElementById('dzContent');
  const arrow   = document.getElementById('dzArrow');
  const isOpen  = content.style.display !== 'none';
  content.style.display = isOpen ? 'none' : 'block';
  arrow.textContent = isOpen ? '▶' : '▼';
}

function confirmSeedQuestions() {
  const val = (document.getElementById('dangerConfirmInput')?.value || '').trim();
  if (val !== 'CONFIRM') {
    toast('请先输入 CONFIRM 确认操作', 'warning'); return;
  }
  seedQuestions();
}

function renderQPagination(totalPages) {
  const pag = document.getElementById('qPagination');
  if (!pag || totalPages <= 1) { if(pag) pag.innerHTML=''; return; }
  const btnStyle = 'padding:5px 10px;border:1.5px solid var(--border);border-radius:6px;background:#fff;cursor:pointer;font-size:.85rem;transition:all .15s;';
  const btnActiveStyle = 'padding:5px 10px;border:1.5px solid var(--primary);border-radius:6px;background:var(--primary);color:#fff;cursor:pointer;font-size:.85rem;font-weight:600;';
  const btnDisabled = 'padding:5px 10px;border:1.5px solid var(--border);border-radius:6px;background:#f5f5f5;color:#bbb;cursor:not-allowed;font-size:.85rem;';

  const prev = currentQPage > 1;
  const next = currentQPage < totalPages;

  let html = `<div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;justify-content:center;">`;

  // First page
  html += `<button style="${prev ? btnStyle : btnDisabled}" ${prev?'':'disabled'} onclick="goQPage(1)" title="首页">«</button>`;
  // Prev
  html += `<button style="${prev ? btnStyle : btnDisabled}" ${prev?'':'disabled'} onclick="goQPage(${currentQPage-1})">‹ 上页</button>`;

  // Page numbers (window of 5)
  const start = Math.max(1, currentQPage - 2);
  const end   = Math.min(totalPages, currentQPage + 2);
  if (start > 1) html += `<span style="align-self:center;color:var(--text-muted);">…</span>`;
  for (let i = start; i <= end; i++) {
    html += `<button style="${i === currentQPage ? btnActiveStyle : btnStyle}" onclick="goQPage(${i})">${i}</button>`;
  }
  if (end < totalPages) html += `<span style="align-self:center;color:var(--text-muted);">…</span>`;

  // Next
  html += `<button style="${next ? btnStyle : btnDisabled}" ${next?'':'disabled'} onclick="goQPage(${currentQPage+1})">下页 ›</button>`;
  // Last page
  html += `<button style="${next ? btnStyle : btnDisabled}" ${next?'':'disabled'} onclick="goQPage(${totalPages})" title="末页">»</button>`;

  // Page jump input
  html += `<span style="align-self:center;color:var(--text-muted);font-size:.85rem;margin-left:.5rem;">跳至</span>
    <input type="number" min="1" max="${totalPages}" value="${currentQPage}"
      id="qPageJumpInput"
      style="width:52px;padding:4px 6px;border:1.5px solid var(--border);border-radius:6px;font-size:.85rem;text-align:center;"
      onkeydown="if(event.key==='Enter'){var v=parseInt(this.value);if(v>=1&&v<=${totalPages})goQPage(v);}"
      onblur="var v=parseInt(this.value);if(v>=1&&v<=${totalPages})goQPage(v);">
    <span style="align-self:center;color:var(--text-muted);font-size:.85rem;">/ ${totalPages} 页</span>`;

  html += '</div>';
  pag.innerHTML = html;
}

function goQPage(p) {
  currentQPage = p;
  renderQuestions();
  window.scrollTo(0, 200);
}

// ── Seed questions from data.js → Firestore ───────────
async function seedQuestions() {
  const v6 = typeof EXAM_QUESTIONS_V6 !== 'undefined' ? EXAM_QUESTIONS_V6 : [];
  if (v6.length === 0) { toast('EXAM_QUESTIONS_V6 未找到', 'danger'); return; }

  if (allQuestions.length > 0) {
    if (!confirm(`题库已有 ${allQuestions.length} 道题。继续将覆盖全部现有题目。确认吗？`)) return;
  }

  const btn = document.getElementById('seedQBtn');
  btn.disabled = true; btn.textContent = '导入中…';
  toast('正在导入题库，请稍候…', 'info', 8000);

  try {
    // Delete existing docs first (batch)
    const existing = await db.collection('examQuestions').get();
    const delBatches = [];
    let batch = db.batch();
    let count = 0;
    existing.docs.forEach(d => {
      batch.delete(d.ref);
      count++;
      if (count % 400 === 0) { delBatches.push(batch.commit()); batch = db.batch(); count = 0; }
    });
    if (count > 0) delBatches.push(batch.commit());
    await Promise.all(delBatches);

    // Write new docs in batches of 400
    const writeBatches = [];
    let wb = db.batch(); let wc = 0;
    v6.forEach(q => {
      const ref = db.collection('examQuestions').doc(q.id || ('v6q' + String(q.num).padStart(3,'0')));
      wb.set(ref, q);
      wc++;
      if (wc % 400 === 0) { writeBatches.push(wb.commit()); wb = db.batch(); wc = 0; }
    });
    if (wc > 0) writeBatches.push(wb.commit());
    await Promise.all(writeBatches);

    await loadQuestions();
    renderQuestions();
    toast(`✅ 成功导入 ${v6.length} 道题目`, 'success');
  } catch(e) {
    toast('导入失败: ' + e.message, 'danger');
  } finally {
    btn.disabled = false; btn.innerHTML = '<i class="ti ti-database-import"></i> 从data.js导入题库';
  }
}

// ── Question Editor ───────────────────────────────────
function showQuestionEditor(q) {
  editingQDocId = q ? (q._docId || q.id) : null;

  document.getElementById('qEditorTitle').textContent = q ? `编辑 Q${q.num}` : '新增题目';
  document.getElementById('qDeleteBtn').style.display = q ? 'inline-flex' : 'none';
  document.getElementById('qEditorError').classList.add('hidden');

  // Populate fields
  document.getElementById('qType').value    = q?.type || 'fill';
  document.getElementById('qChapter').value = q?.chapter || '';
  document.getElementById('qText').value    = q?.textZh || q?.text || '';
  document.getElementById('qImage').value   = q?.image ? (Array.isArray(q.image) ? q.image.join(',') : q.image) : '';
  document.getElementById('qHint').value    = q?.hint || '';

  // Answer
  if (q?.type === 'single') {
    const opts = q.options || ['', '', '', ''];
    ['A','B','C','D'].forEach((l,i) => {
      document.getElementById('opt'+l).value = opts[i] || '';
    });
    const radio = document.querySelector(`input[name="qAnswer"][value="${q.answer ?? 0}"]`);
    if (radio) radio.checked = true;
  } else {
    // Fill blanks
    renderBlanksEditor(q?.blanks || ['']);
  }

  updateQEditorFields();
  showModal('questionEditorModal');
}

function updateQEditorFields() {
  const type = document.getElementById('qType').value;
  document.getElementById('fillFields').style.display   = type === 'fill'   ? '' : 'none';
  document.getElementById('singleFields').style.display = type === 'single' ? '' : 'none';
}

function renderBlanksEditor(blanks) {
  const editor = document.getElementById('blanksEditor');
  editor.innerHTML = '';
  blanks.forEach((b, i) => {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;gap:.5rem;margin-bottom:.4rem;align-items:center;';
    row.innerHTML = `
      <span style="min-width:24px;color:var(--text-muted);font-size:.85rem;">第${i+1}空</span>
      <input class="form-input blank-input" value="${(b||'').replace(/"/g,'&quot;')}"
        placeholder="答案（多选项用 / 分隔）" style="flex:1;">
      <button type="button" onclick="removeBlank(this)" style="background:none;border:none;cursor:pointer;color:var(--danger);font-size:1.1rem;">✕</button>`;
    editor.appendChild(row);
  });
}

function addBlank() {
  const rows = document.querySelectorAll('.blank-input');
  const blanks = Array.from(rows).map(i => i.value);
  blanks.push('');
  renderBlanksEditor(blanks);
}

function removeBlank(btn) {
  const rows = document.querySelectorAll('.blank-input');
  if (rows.length <= 1) return;
  const blanks = Array.from(rows).map(i => i.value);
  const idx = Array.from(btn.parentElement.parentElement.children).indexOf(btn.parentElement);
  blanks.splice(idx, 1);
  renderBlanksEditor(blanks);
}

function autoUpdateBlanks() {
  const type = document.getElementById('qType').value;
  if (type !== 'fill') return;
  const text = document.getElementById('qText').value;
  const count = (text.match(/\(___\)/g) || []).length;
  if (count === 0) return;
  const existing = document.querySelectorAll('.blank-input');
  if (existing.length !== count) {
    const vals = Array.from(existing).map(i => i.value);
    const newBlanks = Array.from({length: count}, (_, i) => vals[i] || '');
    renderBlanksEditor(newBlanks);
  }
}

// ── Save question ─────────────────────────────────────
async function saveQuestion() {
  const type    = document.getElementById('qType').value;
  const chapter = parseInt(document.getElementById('qChapter').value) || 1;
  const text    = document.getElementById('qText').value.trim();
  const imageRaw = document.getElementById('qImage').value.trim();
  const hint    = document.getElementById('qHint').value.trim();
  const errEl   = document.getElementById('qEditorError');
  errEl.classList.add('hidden');

  if (!text) { errEl.textContent = '请填写题目内容'; errEl.classList.remove('hidden'); return; }

  let data = { type, chapter, textZh: text, text, hint: hint||null,
    image: imageRaw ? (imageRaw.includes(',') ? imageRaw.split(',').map(s=>s.trim()) : imageRaw) : null,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp() };

  if (type === 'fill') {
    const blanks = Array.from(document.querySelectorAll('.blank-input')).map(i => i.value.trim()).filter(Boolean);
    if (blanks.length === 0) { errEl.textContent = '请至少填写一个空格答案'; errEl.classList.remove('hidden'); return; }
    data.blanks = blanks;
    data.blankCount = blanks.length;
    data.options = null; data.answer = null;
  } else {
    const opts = ['A','B','C','D'].map(l => document.getElementById('opt'+l).value.trim());
    if (opts.some(o => !o)) { errEl.textContent = '请填写全部四个选项'; errEl.classList.remove('hidden'); return; }
    const ansRadio = document.querySelector('input[name="qAnswer"]:checked');
    if (!ansRadio) { errEl.textContent = '请选择正确答案'; errEl.classList.remove('hidden'); return; }
    data.options = opts; data.answer = parseInt(ansRadio.value);
    data.blanks = null; data.blankCount = 0;
  }

  // ── Editor: submit for approval ──────────────────────
  if (isEditor()) {
    const orig = editingQDocId ? allQuestions.find(q => q._docId === editingQDocId || q.id === editingQDocId) : null;
    const newId = editingQDocId || ('v6q' + String(allQuestions.reduce((m,q)=>Math.max(m,q.num||0),0)+1).padStart(3,'0'));
    const desc = editingQDocId
      ? `修改题目 Q${orig?.num || ''}`
      : `新增题目（${type === 'fill' ? '填空题' : '选择题'}）`;
    try {
      await submitPendingChange(editingQDocId ? 'edit' : 'add', 'examQuestions', newId, data, orig, desc);
      toast('✅ 已提交审核，待管理员批准', 'success');
      hideModal('questionEditorModal');
    } catch(e) { errEl.textContent = '提交失败: ' + e.message; errEl.classList.remove('hidden'); }
    return;
  }

  try {
    if (editingQDocId) {
      // Update existing
      await db.collection('examQuestions').doc(editingQDocId).update(data);
      const idx = allQuestions.findIndex(q => q._docId === editingQDocId || q.id === editingQDocId);
      if (idx >= 0) allQuestions[idx] = { ...allQuestions[idx], ...data };
      toast('✅ 题目已更新', 'success');
    } else {
      // New question — assign next num
      const maxNum = allQuestions.reduce((m, q) => Math.max(m, q.num||0), 0);
      data.num = maxNum + 1;
      data.id  = 'v6q' + String(data.num).padStart(3,'0');
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      const ref = await db.collection('examQuestions').doc(data.id).set(data);
      allQuestions.push({ _docId: data.id, ...data });
      toast('✅ 题目已新增', 'success');
    }
    hideModal('questionEditorModal');
    renderQuestions();
  } catch(e) {
    errEl.textContent = '保存失败: ' + e.message; errEl.classList.remove('hidden');
  }
}

// ── Delete question ───────────────────────────────────
function deleteCurrentQuestion() {
  const q = allQuestions.find(q => q._docId === editingQDocId || q.id === editingQDocId);
  if (!q) return;
  deletingQDocId = editingQDocId;
  document.getElementById('deleteQMsg').textContent = `确认删除 Q${q.num}「${(q.textZh||q.text||'').substring(0,40)}…」？`;
  document.getElementById('confirmDeleteQBtn').onclick = async () => {
    // ── Editor: submit for approval ──────────────────────
    if (isEditor()) {
      const orig2 = allQuestions.find(q => (q._docId||q.id) === deletingQDocId);
      try {
        await submitPendingChange('delete', 'examQuestions', deletingQDocId, null, orig2,
          `删除题目 Q${orig2?.num || deletingQDocId}`);
        toast('✅ 已提交删除审核，待管理员批准', 'success');
        hideModal('deleteQModal'); hideModal('questionEditorModal');
      } catch(e) { toast('提交失败: '+e.message, 'danger'); }
      return;
    }
    try {
      await db.collection('examQuestions').doc(deletingQDocId).delete();
      allQuestions = allQuestions.filter(q => (q._docId||q.id) !== deletingQDocId);
      hideModal('deleteQModal');
      hideModal('questionEditorModal');
      renderQuestions();
      toast('题目已删除', 'info');
    } catch(e) { toast('删除失败: '+e.message, 'danger'); }
  };
  hideModal('questionEditorModal');
  showModal('deleteQModal');
}

// ═══════════════════════════════════════════════════════
//  SYNC FIRESTORE → data.js on GitHub
// ═══════════════════════════════════════════════════════

const SYNC_REPO   = 'fonlipackaging/fonli-training';
const SYNC_BRANCH = 'main';
const SYNC_PATH   = 'js/data.js';

function showSyncModal() {
  document.getElementById('syncQCount').textContent = allQuestions.length || '--';
  document.getElementById('syncProgress').classList.add('hidden');
  document.getElementById('syncLog').textContent = '';
  document.getElementById('syncError').classList.add('hidden');
  document.getElementById('syncStartBtn').disabled = false;
  // Restore cached token if available
  const cached = sessionStorage.getItem('_gh_sync_token');
  if (cached) document.getElementById('syncGithubToken').value = cached;
  showModal('syncDataJsModal');
}

function syncLog(msg) {
  const el = document.getElementById('syncLog');
  el.textContent += msg + '\n';
  el.scrollTop = el.scrollHeight;
}

// Safe base64 encode/decode for Unicode strings
function toB64(str) {
  return btoa(unescape(encodeURIComponent(str)));
}
function fromB64(b64) {
  return decodeURIComponent(escape(atob(b64.replace(/\s/g, ''))));
}

async function startDataJsSync() {
  const token = document.getElementById('syncGithubToken').value.trim();
  if (!token) {
    document.getElementById('syncError').textContent = '请输入 GitHub Token';
    document.getElementById('syncError').classList.remove('hidden');
    return;
  }
  sessionStorage.setItem('_gh_sync_token', token);
  document.getElementById('syncError').classList.add('hidden');
  document.getElementById('syncProgress').classList.remove('hidden');
  document.getElementById('syncStartBtn').disabled = true;
  syncLog('① 从 Firestore 加载题目…');

  try {
    // Step 1: ensure all questions loaded
    if (allQuestions.length === 0) await loadQuestions();
    const questions = allQuestions.map(q => {
      const copy = Object.assign({}, q);
      delete copy._docId; // strip internal field
      return copy;
    });
    syncLog(`   已加载 ${questions.length} 道题目`);

    // Step 2: fetch current data.js from GitHub
    syncLog('② 从 GitHub 读取 data.js…');
    const getResp = await fetch(
      `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_PATH}?ref=${SYNC_BRANCH}`,
      { headers: { Authorization: `token ${token}` } }
    );
    if (!getResp.ok) {
      const e = await getResp.json();
      throw new Error('读取 data.js 失败: ' + (e.message || getResp.status));
    }
    const fileData = await getResp.json();
    const sha = fileData.sha;
    const original = fromB64(fileData.content);
    syncLog(`   文件大小: ${(original.length / 1024).toFixed(1)} KB，SHA: ${sha.slice(0,10)}…`);

    // Step 3: find and replace EXAM_QUESTIONS_V6 array
    syncLog('③ 替换 EXAM_QUESTIONS_V6 数组…');
    const marker = 'const EXAM_QUESTIONS_V6';
    const si = original.indexOf(marker);
    if (si === -1) throw new Error('在 data.js 中未找到 EXAM_QUESTIONS_V6');

    // Find opening bracket
    const bi = original.indexOf('[', si);
    // Walk to matching closing bracket
    let depth = 0, ei = bi;
    for (let i = bi; i < original.length; i++) {
      if (original[i] === '[') depth++;
      else if (original[i] === ']') { depth--; if (depth === 0) { ei = i; break; } }
    }
    // Skip trailing ';' if present
    let afterEnd = ei + 1;
    if (original[afterEnd] === ';') afterEnd++;

    const newDecl = `const EXAM_QUESTIONS_V6 = ${JSON.stringify(questions, null, 2)};`;
    const updated = original.substring(0, si) + newDecl + original.substring(afterEnd);
    syncLog(`   替换完成，新文件大小: ${(updated.length / 1024).toFixed(1)} KB`);

    // Step 4: push back to GitHub
    syncLog('④ 推送到 GitHub…');
    const newB64 = toB64(updated);
    const pushResp = await fetch(
      `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_PATH}`,
      {
        method: 'PUT',
        headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `sync: update EXAM_QUESTIONS_V6 from Firestore (${questions.length} questions)`,
          content: newB64,
          sha: sha,
          branch: SYNC_BRANCH
        })
      }
    );
    if (!pushResp.ok) {
      const e = await pushResp.json();
      throw new Error('推送失败: ' + (e.message || pushResp.status));
    }
    syncLog(`\n✅ 同步成功！data.js 已更新为 ${questions.length} 道最新题目。`);
    syncLog('   等约 30 秒 GitHub Pages 刷新后生效。');
    toast('✅ data.js 同步完成', 'success');

  } catch(e) {
    syncLog('\n❌ 失败: ' + e.message);
    document.getElementById('syncError').textContent = e.message;
    document.getElementById('syncError').classList.remove('hidden');
  } finally {
    document.getElementById('syncStartBtn').disabled = false;
  }
}

// ═══════════════════════════════════════════════════════
//  FAQ MANAGEMENT
// ═══════════════════════════════════════════════════════

let allFAQs       = [];
let filteredFAQs  = [];
let currentFAQPage = 1;
const FAQ_PER_PAGE = 25;
let editingFAQId   = null;

// ── navigate hook ─────────────────────────────────────
// (navigate() already calls: if (view==='faq') { loadFAQs().then(()=>renderFAQs()); })

// ── Load FAQs from Firestore ──────────────────────────
async function loadFAQs() {
  try {
    const snap = await db.collection('faqs').orderBy('num').get();
    allFAQs = snap.docs.map(d => ({ _docId: d.id, ...d.data() }));
  } catch(e) {
    console.warn('loadFAQs error:', e.message);
  }
  return allFAQs;
}

// ── Render FAQ list ───────────────────────────────────
function renderFAQs() {
  const search = (document.getElementById('faqSearch')?.value || '').toLowerCase();
  const catF   = document.getElementById('faqFilterCat')?.value || 'all';

  filteredFAQs = allFAQs.filter(f => {
    if (catF !== 'all' && (f.category || '未分类') !== catF) return false;
    if (search) {
      const q = (f.question || '').toLowerCase();
      const a = (f.answer   || '').toLowerCase();
      const t = (f.tags     || []).join(' ').toLowerCase();
      if (!q.includes(search) && !a.includes(search) && !t.includes(search)) return false;
    }
    return true;
  });

  // Populate category filter
  const catSel = document.getElementById('faqFilterCat');
  if (catSel && allFAQs.length) {
    const cats = [...new Set(allFAQs.map(f => f.category || '未分类'))].sort();
    // Rebuild options only when list changed
    const existing = Array.from(catSel.options).slice(1).map(o => o.value);
    if (JSON.stringify(existing) !== JSON.stringify(cats)) {
      while (catSel.options.length > 1) catSel.remove(1);
      cats.forEach(c => {
        const opt = document.createElement('option');
        opt.value = c; opt.textContent = c;
        catSel.appendChild(opt);
      });
    }
  }

  // Update datalist in editor modal
  const dl = document.getElementById('faqCatList');
  if (dl) {
    dl.innerHTML = '';
    [...new Set(allFAQs.map(f => f.category || '').filter(Boolean))].forEach(c => {
      const opt = document.createElement('option'); opt.value = c; dl.appendChild(opt);
    });
  }

  document.getElementById('faqCount').textContent = `${filteredFAQs.length} / ${allFAQs.length} 条`;

  const totalPages = Math.max(1, Math.ceil(filteredFAQs.length / FAQ_PER_PAGE));
  if (currentFAQPage > totalPages) currentFAQPage = 1;
  const pageFAQs = filteredFAQs.slice((currentFAQPage-1)*FAQ_PER_PAGE, currentFAQPage*FAQ_PER_PAGE);

  const container = document.getElementById('faqContent');
  if (!container) return;

  // Show/hide sync button
  const syncBtn = document.getElementById('faqSyncBtn');
  if (syncBtn) syncBtn.style.display = allFAQs.length ? '' : 'none';

  if (!allFAQs.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:3rem 1rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">❓</div>
        <h3 style="margin-bottom:.5rem;">暂无 FAQ 条目</h3>
        <p style="color:var(--text-muted);margin-bottom:1.5rem;">点击右上角「新增 FAQ」开始积累常见问题解答</p>
        <button class="btn btn-primary" onclick="showFAQEditor(null)">
          <i class="ti ti-plus"></i> 新增第一条 FAQ
        </button>
      </div>`;
    document.getElementById('faqPagination').innerHTML = '';
    return;
  }

  if (!filteredFAQs.length) {
    container.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--text-muted);">🔍 没有符合条件的 FAQ</div>`;
    document.getElementById('faqPagination').innerHTML = '';
    return;
  }

  // Table
  let html = `<table style="width:100%;border-collapse:collapse;">
    <thead><tr style="border-bottom:2px solid var(--border);">
      <th style="padding:.6rem 1rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);width:44px;">#</th>
      <th style="padding:.6rem .75rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);width:100px;">分类</th>
      <th style="padding:.6rem .75rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);">问题</th>
      <th style="padding:.6rem .75rem;text-align:left;font-size:.78rem;font-weight:600;color:var(--text-muted);width:160px;">关键词</th>
      <th style="padding:.6rem 1rem;text-align:right;font-size:.78rem;font-weight:600;color:var(--text-muted);width:60px;">操作</th>
    </tr></thead><tbody>`;

  pageFAQs.forEach((f, idx) => {
    const cat     = f.category || '未分类';
    const tags    = (f.tags || []).slice(0, 3).map(t =>
      `<span style="display:inline-block;padding:1px 7px;border-radius:20px;font-size:.72rem;background:#f0f4ff;color:var(--primary);margin:1px;">${t}</span>`
    ).join('');
    const qText   = (f.question || '').substring(0, 80) + ((f.question||'').length > 80 ? '…' : '');
    const rowBg   = idx % 2 === 0 ? '' : 'background:rgba(0,0,0,.018)';
    const fData   = JSON.stringify(f).replace(/"/g,'&quot;');

    html += `<tr style="border-bottom:1px solid var(--border);${rowBg};cursor:pointer;transition:background .15s;"
      onmouseover="this.style.background='rgba(26,79,160,.06)'" onmouseout="this.style.background='${idx%2?'rgba(0,0,0,.018)':''}'"
      onclick="showFAQEditor(${fData})">
      <td style="padding:.7rem 1rem;color:var(--text-muted);font-size:.8rem;font-weight:500;">F${f.num}</td>
      <td style="padding:.7rem .75rem;">
        <span style="display:inline-block;padding:2px 9px;border-radius:20px;font-size:.76rem;font-weight:600;background:#f0fff4;color:#22863a;border:1px solid #c6efce;white-space:nowrap;">${cat}</span>
      </td>
      <td style="padding:.7rem .75rem;font-size:.9rem;line-height:1.45;">${qText.replace(/</g,'&lt;')}</td>
      <td style="padding:.7rem .75rem;">${tags}</td>
      <td style="padding:.7rem 1rem;text-align:right;" onclick="event.stopPropagation()">
        <button onclick="showFAQEditor(${fData})"
          style="padding:4px 12px;border-radius:6px;border:1.5px solid var(--primary);background:transparent;color:var(--primary);font-size:.8rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .15s;"
          onmouseover="this.style.background='var(--primary)';this.style.color='#fff'"
          onmouseout="this.style.background='transparent';this.style.color='var(--primary)'">编辑</button>
      </td>
    </tr>`;
  });

  html += '</tbody></table>';
  container.innerHTML = html;
  renderFAQPagination(totalPages);
}

function renderFAQPagination(totalPages) {
  const pag = document.getElementById('faqPagination');
  if (!pag || totalPages <= 1) { if (pag) pag.innerHTML=''; return; }
  const bs = 'padding:5px 10px;border:1.5px solid var(--border);border-radius:6px;background:#fff;cursor:pointer;font-size:.85rem;';
  const ba = 'padding:5px 10px;border:1.5px solid var(--primary);border-radius:6px;background:var(--primary);color:#fff;cursor:pointer;font-size:.85rem;font-weight:600;';
  const bd = 'padding:5px 10px;border:1.5px solid var(--border);border-radius:6px;background:#f5f5f5;color:#bbb;cursor:not-allowed;font-size:.85rem;';
  const prev = currentFAQPage > 1, next = currentFAQPage < totalPages;
  let html = '<div style="display:flex;align-items:center;gap:.4rem;flex-wrap:wrap;justify-content:center;">';
  html += `<button style="${prev?bs:bd}" ${prev?'':'disabled'} onclick="goFAQPage(1)">«</button>`;
  html += `<button style="${prev?bs:bd}" ${prev?'':'disabled'} onclick="goFAQPage(${currentFAQPage-1})">‹ 上页</button>`;
  const start = Math.max(1, currentFAQPage-2), end = Math.min(totalPages, currentFAQPage+2);
  if (start > 1) html += `<span style="align-self:center;color:var(--text-muted);">…</span>`;
  for (let i = start; i <= end; i++) html += `<button style="${i===currentFAQPage?ba:bs}" onclick="goFAQPage(${i})">${i}</button>`;
  if (end < totalPages) html += `<span style="align-self:center;color:var(--text-muted);">…</span>`;
  html += `<button style="${next?bs:bd}" ${next?'':'disabled'} onclick="goFAQPage(${currentFAQPage+1})">下页 ›</button>`;
  html += `<button style="${next?bs:bd}" ${next?'':'disabled'} onclick="goFAQPage(${totalPages})">»</button>`;
  html += `<span style="align-self:center;color:var(--text-muted);font-size:.85rem;margin-left:.5rem;">跳至</span>
    <input type="number" min="1" max="${totalPages}" value="${currentFAQPage}" id="faqPageJumpInput"
      style="width:52px;padding:4px 6px;border:1.5px solid var(--border);border-radius:6px;font-size:.85rem;text-align:center;"
      onkeydown="if(event.key==='Enter'){var v=parseInt(this.value);if(v>=1&&v<=${totalPages})goFAQPage(v);}"
      onblur="var v=parseInt(this.value);if(v>=1&&v<=${totalPages})goFAQPage(v);">
    <span style="align-self:center;color:var(--text-muted);font-size:.85rem;">/ ${totalPages} 页</span>`;
  pag.innerHTML = html + '</div>';
}

function goFAQPage(p) { currentFAQPage = p; renderFAQs(); window.scrollTo(0, 200); }

// ── FAQ Editor ────────────────────────────────────────
function showFAQEditor(f) {
  editingFAQId = f ? (f._docId || f.id) : null;
  document.getElementById('faqEditorTitle').textContent = f ? `编辑 F${f.num}` : '新增 FAQ';
  document.getElementById('faqDeleteBtn').style.display = f ? '' : 'none';
  document.getElementById('faqEditorError').classList.add('hidden');

  document.getElementById('faqQuestion').value = f?.question || '';
  document.getElementById('faqCategory').value = f?.category || '';
  document.getElementById('faqTags').value      = (f?.tags || []).join(', ');
  document.getElementById('faqAnswer').value    = f?.answer || '';

  showModal('faqEditorModal');
}

async function saveFAQ() {
  const question = document.getElementById('faqQuestion').value.trim();
  const category = document.getElementById('faqCategory').value.trim() || '未分类';
  const tagsRaw  = document.getElementById('faqTags').value.trim();
  const answer   = document.getElementById('faqAnswer').value.trim();
  const errEl    = document.getElementById('faqEditorError');
  errEl.classList.add('hidden');

  if (!question) { errEl.textContent = '请填写问题'; errEl.classList.remove('hidden'); return; }
  if (!answer)   { errEl.textContent = '请填写答案'; errEl.classList.remove('hidden'); return; }

  const tags = tagsRaw ? tagsRaw.split(/[,，]+/).map(s => s.trim()).filter(Boolean) : [];
  const data = {
    question, category, tags, answer,
    updatedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  // ── Editor: submit for approval ──────────────────────
  if (isEditor()) {
    const orig = editingFAQId ? allFAQs.find(f => (f._docId||f.id) === editingFAQId) : null;
    const newId = editingFAQId || ('faq' + String(allFAQs.reduce((m,f)=>Math.max(m,f.num||0),0)+1).padStart(3,'0'));
    const desc = editingFAQId ? `修改 FAQ「${question.substring(0,30)}」` : `新增 FAQ「${question.substring(0,30)}」`;
    try {
      await submitPendingChange(editingFAQId ? 'edit' : 'add', 'faqs', newId, data, orig, desc);
      toast('✅ 已提交审核，待管理员批准', 'success');
      hideModal('faqEditorModal');
    } catch(e) { errEl.textContent = '提交失败: ' + e.message; errEl.classList.remove('hidden'); }
    return;
  }

  try {
    if (editingFAQId) {
      await db.collection('faqs').doc(editingFAQId).update(data);
      const idx = allFAQs.findIndex(f => (f._docId||f.id) === editingFAQId);
      if (idx >= 0) allFAQs[idx] = { ...allFAQs[idx], ...data };
      toast('✅ FAQ 已更新', 'success');
    } else {
      const maxNum = allFAQs.reduce((m, f) => Math.max(m, f.num||0), 0);
      data.num = maxNum + 1;
      data.id  = 'faq' + String(data.num).padStart(3, '0');
      data.createdAt = firebase.firestore.FieldValue.serverTimestamp();
      await db.collection('faqs').doc(data.id).set(data);
      allFAQs.push({ _docId: data.id, ...data });
      toast('✅ FAQ 已新增', 'success');
    }
    hideModal('faqEditorModal');
    renderFAQs();
  } catch(e) {
    errEl.textContent = '保存失败: ' + e.message;
    errEl.classList.remove('hidden');
  }
}

// ── Delete FAQ ────────────────────────────────────────
function confirmDeleteFAQ() {
  const f = allFAQs.find(f => (f._docId||f.id) === editingFAQId);
  if (!f) return;
  document.getElementById('deleteFaqMsg').textContent =
    `确认删除「${(f.question||'').substring(0, 50)}…」？`;
  document.getElementById('confirmDeleteFaqBtn').onclick = async () => {
    // ── Editor: submit for approval ──────────────────────
    if (isEditor()) {
      const fOrig = allFAQs.find(f => (f._docId||f.id) === editingFAQId);
      try {
        await submitPendingChange('delete', 'faqs', editingFAQId, null, fOrig,
          `删除 FAQ「${(fOrig?.question||'').substring(0,30)}」`);
        toast('✅ 已提交删除审核，待管理员批准', 'success');
        hideModal('deleteFaqModal'); hideModal('faqEditorModal');
      } catch(e) { toast('提交失败: ' + e.message, 'danger'); }
      return;
    }
    try {
      await db.collection('faqs').doc(editingFAQId).delete();
      allFAQs = allFAQs.filter(f => (f._docId||f.id) !== editingFAQId);
      hideModal('deleteFaqModal');
      hideModal('faqEditorModal');
      renderFAQs();
      toast('FAQ 已删除', 'info');
    } catch(e) { toast('删除失败: ' + e.message, 'danger'); }
  };
  hideModal('faqEditorModal');
  showModal('deleteFaqModal');
}

// ── Sync FAQ → data.js ────────────────────────────────
function showFAQSyncModal() {
  document.getElementById('syncFaqCount').textContent = allFAQs.length || '--';
  document.getElementById('syncFaqProgress').classList.add('hidden');
  document.getElementById('syncFaqLog').textContent = '';
  document.getElementById('syncFaqError').classList.add('hidden');
  document.getElementById('syncFaqStartBtn').disabled = false;
  const cached = sessionStorage.getItem('_gh_sync_token');
  if (cached) document.getElementById('syncFaqToken').value = cached;
  showModal('syncFaqModal');
}

function faqSyncLog(msg) {
  const el = document.getElementById('syncFaqLog');
  el.textContent += msg + '\n';
  el.scrollTop = el.scrollHeight;
}

async function startFAQSync() {
  const token = document.getElementById('syncFaqToken').value.trim();
  if (!token) {
    document.getElementById('syncFaqError').textContent = '请输入 GitHub Token';
    document.getElementById('syncFaqError').classList.remove('hidden');
    return;
  }
  sessionStorage.setItem('_gh_sync_token', token);
  document.getElementById('syncFaqError').classList.add('hidden');
  document.getElementById('syncFaqProgress').classList.remove('hidden');
  document.getElementById('syncFaqStartBtn').disabled = true;
  faqSyncLog('① 从 Firestore 加载 FAQ…');

  try {
    if (!allFAQs.length) await loadFAQs();
    const faqs = allFAQs.map(f => {
      const copy = Object.assign({}, f);
      delete copy._docId;
      // Strip Firestore Timestamp objects
      if (copy.createdAt && typeof copy.createdAt.toDate === 'function') delete copy.createdAt;
      if (copy.updatedAt && typeof copy.updatedAt.toDate === 'function') delete copy.updatedAt;
      return copy;
    });
    faqSyncLog(`   已加载 ${faqs.length} 条 FAQ`);

    faqSyncLog('② 从 GitHub 读取 data.js…');
    const getResp = await fetch(
      `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_PATH}?ref=${SYNC_BRANCH}`,
      { headers: { Authorization: `token ${token}` } }
    );
    if (!getResp.ok) {
      const e = await getResp.json();
      throw new Error('读取 data.js 失败: ' + (e.message || getResp.status));
    }
    const fileData = await getResp.json();
    const sha = fileData.sha;
    let original = fromB64(fileData.content);
    faqSyncLog(`   文件大小: ${(original.length / 1024).toFixed(1)} KB`);

    faqSyncLog('③ 更新 FAQ_DATA 数组…');
    const newDecl = `const FAQ_DATA = ${JSON.stringify(faqs, null, 2)};`;
    const faqMarker = 'const FAQ_DATA';
    const si = original.indexOf(faqMarker);
    let updated;
    if (si !== -1) {
      // Replace existing FAQ_DATA
      const bi = original.indexOf('[', si);
      let depth = 0, ei = bi;
      for (let i = bi; i < original.length; i++) {
        if (original[i] === '[') depth++;
        else if (original[i] === ']') { depth--; if (depth === 0) { ei = i; break; } }
      }
      let afterEnd = ei + 1;
      if (original[afterEnd] === ';') afterEnd++;
      updated = original.substring(0, si) + newDecl + original.substring(afterEnd);
      faqSyncLog('   找到现有 FAQ_DATA，替换完成');
    } else {
      // Append FAQ_DATA before the last line of the file
      updated = original.trimEnd() + '\n\n' + newDecl + '\n';
      faqSyncLog('   FAQ_DATA 未存在，已追加到文件末尾');
    }
    faqSyncLog(`   新文件大小: ${(updated.length / 1024).toFixed(1)} KB`);

    faqSyncLog('④ 推送到 GitHub…');
    const pushResp = await fetch(
      `https://api.github.com/repos/${SYNC_REPO}/contents/${SYNC_PATH}`,
      {
        method: 'PUT',
        headers: { Authorization: `token ${token}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: `sync: update FAQ_DATA from Firestore (${faqs.length} FAQs)`,
          content: toB64(updated),
          sha, branch: SYNC_BRANCH
        })
      }
    );
    if (!pushResp.ok) {
      const e = await pushResp.json();
      throw new Error('推送失败: ' + (e.message || pushResp.status));
    }
    faqSyncLog(`\n✅ 同步成功！data.js 已包含 ${faqs.length} 条 FAQ 离线备份。`);
    toast('✅ FAQ 已同步到 data.js', 'success');

  } catch(e) {
    faqSyncLog('\n❌ 失败: ' + e.message);
    document.getElementById('syncFaqError').textContent = e.message;
    document.getElementById('syncFaqError').classList.remove('hidden');
  } finally {
    document.getElementById('syncFaqStartBtn').disabled = false;
  }
}


// ═══════════════════════════════════════════════════════
//  PENDING REVIEW CENTER (admin only)
// ═══════════════════════════════════════════════════════

let allPendingChanges = [];

async function renderPendingReview() {
  const container = document.getElementById('reviewContent');
  if (!container) return;
  container.innerHTML = '<div style="text-align:center;padding:2rem;color:var(--text-muted);">加载中…</div>';

  // ── Editor: show own submission history ────────────────
  if (isEditor()) { renderMySubmissions(); return; }

  try {
    const snap = await db.collection('pendingChanges')
      .where('status','==','pending').get();
    allPendingChanges = snap.docs.map(d => ({ _id: d.id, ...d.data() }))
      .sort((a, b) => {
        const ta = a.submittedAt?.toMillis ? a.submittedAt.toMillis() : 0;
        const tb = b.submittedAt?.toMillis ? b.submittedAt.toMillis() : 0;
        return ta - tb;
      });
  } catch(e) {
    container.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--danger);">加载失败: ${e.message}</div>`;
    return;
  }

  // Update badge
  const pb = document.getElementById('pendingBadge');
  if (pb) { pb.textContent = allPendingChanges.length; pb.classList.toggle('hidden', allPendingChanges.length === 0); }

  if (!allPendingChanges.length) {
    container.innerHTML = `
      <div style="text-align:center;padding:4rem 1rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">✅</div>
        <h3 style="color:var(--text-muted);">暂无待审核变更</h3>
        <p style="color:var(--text-muted);font-size:.9rem;margin-top:.5rem;">所有编辑提交的内容将显示在这里</p>
      </div>`;
    return;
  }

  const typeLabel = { add:'新增', edit:'修改', delete:'删除' };
  const collLabel = { chapters:'知识章节', examQuestions:'题库', faqs:'FAQ', settings:'考试设置', users:'用户' };
  const typeBg    = { add:'#e8f5e9', edit:'#e3f2fd', delete:'#ffebee' };
  const typeColor = { add:'#2e7d32', edit:'#1565c0', delete:'#c62828' };

  let html = '';
  allPendingChanges.forEach((p, i) => {
    const tLabel = typeLabel[p.type] || p.type;
    const cLabel = collLabel[p.collection] || p.collection;
    const tColor = typeColor[p.type] || '#555';
    const tBg    = typeBg[p.type]   || '#f5f5f5';
    const ts     = p.submittedAt?.toDate ? p.submittedAt.toDate().toLocaleString('zh-CN') : '--';

    // Build data preview
    let preview = '';
    if (p.type === 'delete' && p.originalData) {
      const od = p.originalData;
      preview = `<div style="background:#fff8f8;border:1px solid #ffcdd2;border-radius:6px;padding:.75rem;font-size:.83rem;line-height:1.6;">
        <strong style="color:#c62828;">将被删除的内容：</strong><br>
        ${od.titleZh ? `章节：${od.titleZh}` : ''}
        ${od.question ? `问题：${od.question}` : ''}
        ${od.textZh   ? `题目：${od.textZh.substring(0,100)}` : ''}
        ${od.passingScore != null ? `及格分: ${od.passingScore}%, 优秀分: ${od.excellentScore}%` : ''}
      </div>`;
    } else if (p.data) {
      const d = p.data;
      let lines = [];
      if (d.titleZh)       lines.push(`章节标题：${d.titleZh}`);
      if (d.question)      lines.push(`问题：${(d.question||'').substring(0,80)}`);
      if (d.answer)        lines.push(`答案：${(d.answer||'').substring(0,100)}`);
      if (d.category)      lines.push(`分类：${d.category}`);
      if (d.textZh)        lines.push(`题目：${(d.textZh||'').substring(0,80)}`);
      if (d.passingScore != null) lines.push(`及格分: ${d.passingScore}%, 优秀分: ${d.excellentScore}%, 考试次数: ${d.maxAttempts}, 冷却: ${d.cooldownHours}h, 时间: ${d.timeMinutes}分钟`);
      if (d.sections)      lines.push(`小节数：${d.sections.length}`);
      preview = lines.length ? `<div style="background:#f8fafc;border:1px solid var(--border);border-radius:6px;padding:.75rem;font-size:.83rem;line-height:1.7;">${lines.map(l=>`<div>${l.replace(/</g,'&lt;')}</div>`).join('')}</div>` : '';
    }

    html += `
    <div id="pending-${i}" style="border:1.5px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:1rem;">
      <div style="display:flex;align-items:center;gap:.75rem;padding:.85rem 1rem;background:#fafafa;border-bottom:1px solid var(--border);flex-wrap:wrap;">
        <span style="display:inline-block;padding:3px 10px;border-radius:20px;font-size:.78rem;font-weight:700;background:${tBg};color:${tColor};">${tLabel}</span>
        <span style="font-weight:600;font-size:.9rem;">${cLabel}</span>
        <span style="flex:1;color:var(--text-muted);font-size:.85rem;">${(p.description||'').replace(/</g,'&lt;')}</span>
        <span style="font-size:.78rem;color:var(--text-muted);white-space:nowrap;">by ${(p.submittedByName||'').replace(/</g,'&lt;')} · ${ts}</span>
      </div>
      <div style="padding:.85rem 1rem;">
        ${preview}
        <div style="display:flex;gap:.75rem;margin-top:.85rem;flex-wrap:wrap;">
          <button onclick="approvePendingChange('${p._id}', ${i})"
            style="padding:6px 20px;border-radius:7px;border:none;background:#2e7d32;color:#fff;font-size:.88rem;font-weight:600;cursor:pointer;">
            ✓ 批准
          </button>
          <button onclick="showRejectDialog('${p._id}', ${i})"
            style="padding:6px 20px;border-radius:7px;border:1.5px solid #c62828;background:#fff;color:#c62828;font-size:.88rem;font-weight:600;cursor:pointer;">
            ✕ 驳回
          </button>
        </div>
        <div id="reject-form-${i}" style="display:none;margin-top:.75rem;">
          <textarea id="reject-reason-${i}" placeholder="驳回原因（可选）"
            style="width:100%;border:1.5px solid var(--border);border-radius:6px;padding:.5rem;font-size:.85rem;resize:vertical;min-height:60px;box-sizing:border-box;"></textarea>
          <div style="display:flex;gap:.5rem;margin-top:.5rem;">
            <button onclick="rejectPendingChange('${p._id}', ${i})"
              style="padding:5px 16px;border-radius:6px;border:none;background:#c62828;color:#fff;font-size:.85rem;font-weight:600;cursor:pointer;">确认驳回</button>
            <button onclick="document.getElementById('reject-form-${i}').style.display='none'"
              style="padding:5px 16px;border-radius:6px;border:1.5px solid var(--border);background:#fff;color:var(--text);font-size:.85rem;cursor:pointer;">取消</button>
          </div>
        </div>
      </div>
    </div>`;
  });

  container.innerHTML = html;
}

async function renderMySubmissions() {
  const container = document.getElementById('reviewContent');
  if (!container) return;
  const h1 = document.querySelector('#view-review h1');
  if (h1) h1.textContent = '我的提交记录';

  let snap;
  try {
    snap = await db.collection('pendingChanges')
      .where('submittedBy','==', adminUser.uid).get();
  } catch(e) {
    container.innerHTML = `<div style="text-align:center;padding:2rem;color:var(--danger);">加载失败: ${e.message}</div>`;
    return;
  }

  const items = snap.docs.map(d => ({ _id: d.id, ...d.data() }))
    .sort((a,b) => {
      const ta = a.submittedAt?.toMillis ? a.submittedAt.toMillis() : 0;
      const tb = b.submittedAt?.toMillis ? b.submittedAt.toMillis() : 0;
      return tb - ta;
    });

  // Update my pending badge
  const pending = items.filter(i => i.status === 'pending').length;
  const myPb = document.getElementById('myPendingBadge');
  if (myPb) { myPb.textContent = pending; myPb.classList.toggle('hidden', pending === 0); }

  if (!items.length) {
    container.innerHTML = `<div style="text-align:center;padding:4rem 1rem;">
      <div style="font-size:3rem;margin-bottom:1rem;">📝</div>
      <h3 style="color:var(--text-muted);">尚无提交记录</h3>
      <p style="color:var(--text-muted);font-size:.9rem;margin-top:.5rem;">您对知识、题库、FAQ 的编辑操作会在此显示状态</p>
    </div>`;
    return;
  }

  const statusBadge = {
    pending:  '<span style="padding:2px 9px;border-radius:20px;font-size:.75rem;font-weight:700;background:#fff3e0;color:#e65100;">审核中</span>',
    approved: '<span style="padding:2px 9px;border-radius:20px;font-size:.75rem;font-weight:700;background:#e8f5e9;color:#2e7d32;">已批准 ✓</span>',
    rejected: '<span style="padding:2px 9px;border-radius:20px;font-size:.75rem;font-weight:700;background:#ffebee;color:#c62828;">已驳回 ✕</span>',
  };
  const typeLabel = { add:'新增', edit:'修改', delete:'删除' };
  const collLabel = { chapters:'知识章节', examQuestions:'题库', faqs:'FAQ', settings:'考试设置', users:'用户' };

  let html = '';
  items.forEach(p => {
    const ts = p.submittedAt?.toDate ? p.submittedAt.toDate().toLocaleString('zh-CN') : '--';
    const revTs = p.reviewedAt?.toDate ? p.reviewedAt.toDate().toLocaleString('zh-CN') : null;
    html += `<div style="border:1.5px solid var(--border);border-radius:10px;overflow:hidden;margin-bottom:.85rem;">
      <div style="display:flex;align-items:center;gap:.75rem;padding:.75rem 1rem;background:#fafafa;border-bottom:1px solid var(--border);flex-wrap:wrap;">
        ${statusBadge[p.status] || ''}
        <span style="font-size:.82rem;color:var(--text-muted);">${typeLabel[p.type]||p.type} · ${collLabel[p.collection]||p.collection}</span>
        <span style="flex:1;font-size:.88rem;">${(p.description||'').replace(/</g,'&lt;')}</span>
        <span style="font-size:.76rem;color:var(--text-muted);">${ts}</span>
      </div>
      ${p.status==='rejected' && p.rejectComment ? `<div style="padding:.6rem 1rem;font-size:.83rem;color:#c62828;background:#fff8f8;">驳回原因：${p.rejectComment.replace(/</g,'&lt;')}</div>` : ''}
      ${revTs ? `<div style="padding:.4rem 1rem;font-size:.78rem;color:var(--text-muted);">审核时间：${revTs}</div>` : ''}
    </div>`;
  });
  container.innerHTML = html;
}

function showRejectDialog(docId, idx) {
  document.getElementById(`reject-form-${idx}`).style.display = 'block';
  document.getElementById(`reject-reason-${idx}`).focus();
}

async function approvePendingChange(docId, idx) {
  const p = allPendingChanges[idx];
  if (!p) return;
  const btn = document.querySelector(`#pending-${idx} button`);
  if (btn) { btn.disabled = true; btn.textContent = '处理中…'; }

  try {
    const now = firebase.firestore.FieldValue.serverTimestamp();
    const data = p.data ? Object.assign({}, p.data) : null;

    if (p.type === 'add') {
      if (data) { data.createdAt = now; data.updatedAt = now; }
      await db.collection(p.collection).doc(p.docId).set(data || {});
    } else if (p.type === 'edit') {
      if (data) { data.updatedAt = now; delete data.createdAt; }
      await db.collection(p.collection).doc(p.docId).set(data || {}, { merge: true });
    } else if (p.type === 'delete') {
      await db.collection(p.collection).doc(p.docId).delete();
    }

    // Mark as approved
    await db.collection('pendingChanges').doc(docId).update({
      status: 'approved', reviewedBy: adminUser.uid,
      reviewedAt: now, rejectComment: null
    });

    toast(`✅ 已批准：${p.description || docId}`, 'success');
    // Remove from UI
    const el = document.getElementById(`pending-${idx}`);
    if (el) el.remove();
    allPendingChanges.splice(idx, 1);
    // Update badge
    const pb = document.getElementById('pendingBadge');
    if (pb) { pb.textContent = allPendingChanges.length; pb.classList.toggle('hidden', allPendingChanges.length === 0); }
  } catch(e) {
    toast('批准失败: ' + e.message, 'danger');
    if (btn) { btn.disabled = false; btn.textContent = '✓ 批准'; }
  }
}

async function rejectPendingChange(docId, idx) {
  const p = allPendingChanges[idx];
  if (!p) return;
  const reason = (document.getElementById(`reject-reason-${idx}`)?.value || '').trim();
  try {
    await db.collection('pendingChanges').doc(docId).update({
      status: 'rejected', reviewedBy: adminUser.uid,
      reviewedAt: firebase.firestore.FieldValue.serverTimestamp(),
      rejectComment: reason || null
    });
    toast(`驳回成功：${p.description || docId}`, 'info');
    const el = document.getElementById(`pending-${idx}`);
    if (el) el.remove();
    allPendingChanges.splice(idx, 1);
    const pb = document.getElementById('pendingBadge');
    if (pb) { pb.textContent = allPendingChanges.length; pb.classList.toggle('hidden', allPendingChanges.length === 0); }
  } catch(e) {
    toast('驳回失败: ' + e.message, 'danger');
  }
}
