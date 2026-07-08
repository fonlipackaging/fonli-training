// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Admin Panel Logic
// ═══════════════════════════════════════════════════════

firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db   = firebase.firestore();

let adminUser    = null;
let allUsers     = [];
let allAttempts  = [];
let allNotifs    = [];
let userToDelete = null;

// ── Auth guard ────────────────────────────────────────
auth.onAuthStateChanged(async user => {
  if (!user) { window.location.href = 'index.html'; return; }
  const doc = await db.collection('users').doc(user.uid).get();
  if (!doc.exists || doc.data().role !== 'admin') {
    alert(t('权限不足，跳转至学员页面', 'Access denied. Redirecting to user page.'));
    window.location.href = 'app.html'; return;
  }
  adminUser = user;
  document.getElementById('adminNameChip').textContent = doc.data().name || user.email;
  await loadAllData();
  initSidebar();
  navigate('overview');
  applyI18n();
});

async function loadAllData() {
  const [usersSnap, attSnap, notifSnap] = await Promise.all([
    db.collection('users').get(),
    db.collection('examAttempts').orderBy('createdAt', 'desc').get(),
    db.collection('notifications').orderBy('createdAt', 'desc').get()
  ]);
  allUsers    = usersSnap.docs.map(d => ({ id: d.id, ...d.data() }));
  allAttempts = attSnap.docs.map(d => ({ id: d.id, ...d.data() }));
  allNotifs   = notifSnap.docs.map(d => ({ id: d.id, ...d.data() }));

  // Update notification badge
  const unread = allNotifs.filter(n => !n.read).length;
  const badge  = document.getElementById('notifBadge');
  if (unread > 0) { badge.textContent = unread; badge.classList.remove('hidden'); }
  else { badge.classList.add('hidden'); }
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
}

function doLogout() {
  auth.signOut().then(() => window.location.href = 'index.html');
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
  const users = allUsers.filter(u => u.role !== 'admin');
  if (!users.length) {
    document.getElementById('userListContent').innerHTML =
      `<div class="empty-state"><div class="empty-icon">👥</div><p>${t('暂无学员','No users yet')}</p></div>`;
    return;
  }

  let html = `<div class="table-wrap"><table class="list-table"><thead><tr>
    <th>${t('姓名','Name')}</th><th>${t('邮箱','Email')}</th>
    <th>${t('进度','Progress')}</th><th>${t('最高分','Best Score')}</th><th>${t('操作','Actions')}</th>
  </tr></thead><tbody>`;

  users.forEach(u => {
    const userAtts  = allAttempts.filter(a => a.userId === u.id && a.mode === 'exam');
    const bestScore = userAtts.length ? Math.max(...userAtts.map(a => a.score)) : null;
    const attempts  = userAtts.length;
    const cls       = bestScore !== null ? `badge-${scoreClass(bestScore)}` : 'badge-pending';
    const scoreTxt  = bestScore !== null ? `${bestScore}${t('分','pts')} (${t('第','#')}${attempts}${t('次','')})` : t('未考试','No exam');

    html += `<tr>
      <td><b>${u.name || '--'}</b></td>
      <td style="font-size:.82rem;">${u.email || '--'}</td>
      <td><span class="badge badge-pending">${attempts}/${EXAM_CONFIG.exam.maxAttempts} ${t('次','att')}</span></td>
      <td><span class="badge ${cls}">${scoreTxt}</span></td>
      <td>
        <button class="btn btn-sm btn-danger" onclick="confirmDeleteUser('${u.id}','${u.name||u.email}')">
          ${t('删除','Delete')}
        </button>
      </td>
    </tr>`;
  });

  html += '</tbody></table></div>';
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

  try {
    // Create auth user via Firebase Admin REST API (requires Identity Platform or Cloud Functions)
    // Since we're on free tier without Cloud Functions, we use a workaround:
    // Create a secondary auth instance to register the user
    const secondaryApp = firebase.initializeApp(FIREBASE_CONFIG, 'secondary_' + Date.now());
    const secondaryAuth = secondaryApp.auth();
    const cred = await secondaryAuth.createUserWithEmailAndPassword(email, password);
    const uid  = cred.user.uid;
    await secondaryAuth.signOut();
    secondaryApp.delete();

    // Save to Firestore
    await db.collection('users').doc(uid).set({
      name, email, role,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      createdBy: adminUser.uid
    });

    allUsers.push({ id: uid, name, email, role });
    hideModal('addUserModal');
    toast(t(`用户 ${name} 已创建`, `User ${name} created`), 'success');
    renderUsers();

    // Reset form
    document.getElementById('newName').value = '';
    document.getElementById('newEmail').value = '';
    document.getElementById('newPassword').value = 'Fonli2024';
  } catch(e) {
    const msgs = {
      'auth/email-already-in-use': t('该邮箱已被使用', 'Email already in use'),
      'auth/invalid-email':        t('邮箱格式不正确', 'Invalid email'),
      'auth/weak-password':        t('密码强度不足', 'Password too weak')
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
