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
  if (view === 'content')       renderContent();
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
  if (!allChapters.length) {
    listEl.innerHTML = `
      <div class="card" style="text-align:center;padding:2.5rem 1.5rem;">
        <div style="font-size:3rem;margin-bottom:1rem;">📚</div>
        <h3 style="margin-bottom:.5rem;">${t('暂无知识库内容','No knowledge content yet')}</h3>
        <p style="margin:.5rem 0 1.5rem;font-size:.88rem;">${t('点击"导入默认知识库"一键导入系统内置的10个章节','Click "Import Default" to import 10 built-in chapters')}</p>
        <button class="btn btn-primary" onclick="seedDefaultChapters()">${t('📥 导入默认知识库','📥 Import Default Knowledge Base')}</button>
      </div>`;
    return;
  }

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

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:.75rem;">
      ${buildEditorPanel(idx,'Zh',t('中文内容','Chinese Content'))}
      ${buildEditorPanel(idx,'En','English Content')}
    </div>
  </div>`;
}

function buildEditorPanel(idx, lang, label) {
  return `
  <div class="form-group" style="margin:0;">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:.35rem;">
      <label class="form-label" style="font-size:.78rem;margin:0;">${label}</label>
      <div style="display:flex;gap:.2rem;">
        <button type="button" id="sec-${idx}-btnV${lang}" class="wt-mode-btn active-tab"
          onmousedown="event.preventDefault();wSetMode(${idx},'${lang}','visual')">
          <i class="ti ti-eye"></i> ${t('可视化','Visual')}
        </button>
        <button type="button" id="sec-${idx}-btnH${lang}" class="wt-mode-btn"
          onmousedown="event.preventDefault();wSetMode(${idx},'${lang}','html')">
          &lt;/&gt; HTML
        </button>
      </div>
    </div>
    ${wysiwyg_toolbar(idx, lang)}
    <div class="wysiwyg-editor reader-body" id="sec-${idx}-vis${lang}" contenteditable="false"
      style="display:block;min-height:120px;"></div>
    <textarea class="form-input" id="sec-${idx}-src${lang}" rows="8"
      style="display:none;font-family:monospace;font-size:.73rem;resize:vertical;"></textarea>
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
