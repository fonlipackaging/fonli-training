// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — User App Logic
// ═══════════════════════════════════════════════════════

// ── Firebase init ─────────────────────────────────────
firebase.initializeApp(FIREBASE_CONFIG);
const auth = firebase.auth();
const db   = firebase.firestore();

// ── EmailJS init ──────────────────────────────────────
// Loaded lazily only when needed
let emailJsReady = false;
function initEmailJs() {
  if (emailJsReady) return;
  const s = document.createElement('script');
  s.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
  s.onload = () => { emailjs.init(EMAILJS_CONFIG.publicKey); emailJsReady = true; };
  document.head.appendChild(s);
}

// ── App state ─────────────────────────────────────────
let currentUser  = null;
let userProfile  = null;
let userProgress = null;   // { completedChapters: [], quizScores: {} }
let examAttempts = [];     // array of attempt docs
let appChapters  = [];     // loaded from Firestore (fallback: appChapters in data.js)

let sessionMode       = null;  // 'quiz'|'mock'|'exam'
let sessionQuestions  = [];
let sessionAnswers    = {};
let currentQIndex     = 0;
let examTimer         = null;
let currentChapterId  = null;
let currentChapterIdx = 0;
let currentSectionIdx = 0;  // pagination within chapter

// ── Auth guard ────────────────────────────────────────
auth.onAuthStateChanged(async user => {
  if (!user) { window.location.href = 'index.html'; return; }
  currentUser = user;
  await loadUserData();
  initSidebar();
  navigate('dashboard');
  applyI18n();
});

// ── Load chapters from Firestore (with data.js fallback) ─
async function loadChapters() {
  try {
    const snap = await db.collection('chapters').orderBy('order').get();
    if (!snap.empty) {
      appChapters = snap.docs.map(d => ({ id: d.id, ...d.data() }));
    } else {
      appChapters = CHAPTERS; // fallback: static data in data.js
    }
  } catch(e) {
    appChapters = CHAPTERS;  // fallback on error
  }
}

async function loadUserData() {
  await loadChapters();

  const [profDoc, progDoc] = await Promise.all([
    db.collection('users').doc(currentUser.uid).get(),
    db.collection('progress').doc(currentUser.uid).get()
  ]);

  userProfile = profDoc.exists ? profDoc.data() : { name: currentUser.email, role: 'user' };

  if (!profDoc.exists) {
    // Create user doc if missing
    await db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email, name: currentUser.email,
      role: 'user', createdAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  }

  userProgress = progDoc.exists ? progDoc.data() : { completedChapters: [], quizScores: {} };

  // Load exam attempts
  const attSnap = await db.collection('examAttempts')
    .where('userId', '==', currentUser.uid)
    .where('mode', '==', 'exam')
    .orderBy('createdAt', 'asc').get();
  examAttempts = attSnap.docs.map(d => ({ id: d.id, ...d.data() }));

  // Update UI
  document.getElementById('userNameChip').textContent = userProfile.name || currentUser.email;
}

// ── Navigation ────────────────────────────────────────
function navigate(view) {
  showView('view-' + view);
  setActiveNav('nav-' + view);
  // Close mobile sidebar
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('show');

  if (view === 'dashboard')  renderDashboard();
  if (view === 'learn')      renderLearnList();
  if (view === 'quiz')       renderQuizChapterList();
  if (view === 'mock')       renderMockLanding();
  if (view === 'exam')       renderExamLanding();
  if (view === 'history')    renderHistory();
}

function doLogout() {
  auth.signOut().then(() => window.location.href = 'index.html');
}

function toggleLang() {
  const newLang = getLang() === 'zh' ? 'en' : 'zh';
  setLang(newLang);
  document.getElementById('langToggle').textContent = newLang === 'zh' ? 'EN' : '中';
  navigate(currentActiveView());
}

function currentActiveView() {
  const active = document.querySelector('.view:not(.hidden)');
  return active ? active.id.replace('view-', '') : 'dashboard';
}

// ── Dashboard ─────────────────────────────────────────
function renderDashboard() {
  const total    = appChapters.length;
  const done     = (userProgress.completedChapters || []).length;
  const pct      = Math.round(done / total * 100);
  const bestExam = examAttempts.length ? Math.max(...examAttempts.map(a => a.score)) : null;
  const attLeft  = EXAM_CONFIG.exam.maxAttempts - examAttempts.length;

  document.getElementById('welcomeTitle').textContent =
    t(`欢迎回来，${userProfile.name || ''} 👋`, `Welcome back, ${userProfile.name || ''} 👋`);

  document.getElementById('dashStats').innerHTML = `
    <div class="stat-card">
      <div class="stat-num">${done}/${total}</div>
      <div class="stat-label" data-zh="已完成章节" data-en="Chapters Done">已完成章节</div>
    </div>
    <div class="stat-card gold">
      <div class="stat-num">${pct}%</div>
      <div class="stat-label" data-zh="学习进度" data-en="Study Progress">学习进度</div>
    </div>
    <div class="stat-card ${bestExam !== null && bestExam >= EXAM_CONFIG.exam.passingScore ? 'success' : ''}">
      <div class="stat-num">${bestExam !== null ? bestExam : '--'}</div>
      <div class="stat-label" data-zh="最高考试分" data-en="Best Exam Score">最高考试分</div>
    </div>
    <div class="stat-card">
      <div class="stat-num">${attLeft < 0 ? 0 : attLeft}</div>
      <div class="stat-label" data-zh="剩余考试机会" data-en="Exam Attempts Left">剩余考试机会</div>
    </div>
  `;

  document.getElementById('overallProgress').innerHTML = `
    <div style="display:flex;justify-content:space-between;font-size:.82rem;color:var(--dark-gray);margin-bottom:.4rem;">
      <span>${t('已完成', 'Completed')} ${done} ${t('章', 'chapters')}</span>
      <span>${pct}%</span>
    </div>
    <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
    <p style="font-size:.8rem;color:var(--dark-gray);margin-top:.75rem;">
      ${done < total ? t(`还需完成 ${total-done} 个章节才能解锁随堂练习`, `Complete ${total-done} more chapters to unlock quizzes`) : t('🎉 全部章节已完成！', '🎉 All chapters completed!')}
    </p>
  `;

  // Exam status
  const ec = document.getElementById('examStatusContent');
  if (examAttempts.length === 0) {
    ec.innerHTML = `<div class="alert alert-info">${t('尚未参加正式考试。完成全部章节后即可参加。', 'You have not taken the final exam yet. Complete all chapters to unlock it.')}</div>`;
  } else {
    let html = `<div class="table-wrap"><table class="list-table"><thead><tr>
      <th>${t('第几次','Attempt')}</th><th>${t('分数','Score')}</th><th>${t('结果','Result')}</th><th>${t('时间','Date')}</th>
    </tr></thead><tbody>`;
    examAttempts.forEach((a, i) => {
      const passed = a.score >= EXAM_CONFIG.exam.passingScore;
      const great  = a.score >= EXAM_CONFIG.exam.excellentScore;
      const cls    = great ? 'badge-great' : (passed ? 'badge-pass' : 'badge-fail');
      const lbl    = scoreLabel(a.score);
      html += `<tr><td>${t('第','')+(i+1)+t('次','')}</td><td><b>${a.score}</b></td>
        <td><span class="badge ${cls}">${lbl}</span></td><td>${formatDate(a.createdAt)}</td></tr>`;
    });
    html += '</tbody></table></div>';
    if (examAttempts.length < EXAM_CONFIG.exam.maxAttempts) {
      html += `<p style="margin-top:.75rem;font-size:.85rem;color:var(--dark-gray);">
        ${t(`还有 ${EXAM_CONFIG.exam.maxAttempts - examAttempts.length} 次考试机会`, `${EXAM_CONFIG.exam.maxAttempts - examAttempts.length} attempt(s) remaining`)}</p>`;
    } else {
      html += `<div class="alert ${bestExam >= EXAM_CONFIG.exam.passingScore ? 'alert-success' : 'alert-danger'}" style="margin-top:.75rem;">
        ${bestExam >= EXAM_CONFIG.exam.passingScore ? t('已通过考核！','You have passed the assessment!') : t('3次机会已用完，请联系管理员。','All 3 attempts used. Please contact admin.')}
      </div>`;
    }
    ec.innerHTML = html;
  }

  applyI18n();
}

// ── Learn ─────────────────────────────────────────────
function renderLearnList() {
  const done = userProgress.completedChapters || [];
  let html = '';
  appChapters.forEach((ch, i) => {
    const isComplete = done.includes(ch.id);
    const isLocked   = i > 0 && !done.includes(appChapters[i-1].id);
    html += `
      <div class="chapter-item ${isComplete ? 'completed' : ''} ${isLocked ? 'locked' : ''}"
           onclick="${isLocked ? '' : `openChapter('${ch.id}')`}">
        <div class="chapter-num">${ch.order}</div>
        <div class="chapter-info">
          <div class="chapter-title">${getLang()==='zh' ? ch.titleZh : ch.titleEn}</div>
          <div class="chapter-meta">${ch.sections.length} ${t('节','sections')} · ${t('约','~')}${ch.estimatedMinutes}${t('分钟','min')}</div>
        </div>
        <div class="chapter-status">${isComplete ? '✅' : (isLocked ? '🔒' : '📖')}</div>
      </div>`;
  });
  document.getElementById('chapterList').innerHTML = html;
}

function openChapter(chapterId) {
  currentChapterId  = chapterId;
  currentChapterIdx = appChapters.findIndex(c => c.id === chapterId);
  currentSectionIdx = 0;
  renderReader();
  showView('view-reader');
  setActiveNav('nav-learn');
}

function renderReader() {
  const ch   = appChapters[currentChapterIdx];
  const lang = getLang();
  const secs = ch.sections || [];
  const totalSec = secs.length;
  // Guard section index
  if (currentSectionIdx < 0) currentSectionIdx = 0;
  if (currentSectionIdx >= totalSec) currentSectionIdx = totalSec - 1;
  const sec = secs[currentSectionIdx] || {};

  // ── Header ──────────────────────────────────────────
  document.getElementById('readerHeader').innerHTML = `
    <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:.5rem;">
      <div>
        <h2 style="margin-bottom:.2rem;">${lang==='zh' ? ch.titleZh : ch.titleEn}</h2>
        <p style="margin:0;font-size:.82rem;color:rgba(255,255,255,.65);">
          ${t('章节','Ch.')} ${ch.order}/${appChapters.length}
          &nbsp;·&nbsp;
          <span style="color:#ffb08a;font-weight:600;">
            ${t('小节','Sec.')} ${currentSectionIdx+1} / ${totalSec}
          </span>
        </p>
      </div>
      <div style="display:flex;align-items:center;gap:.5rem;">
        <div class="reader-progress-bar" style="width:120px;height:7px;background:rgba(255,255,255,.2);border-radius:4px;overflow:hidden;">
          <div style="height:100%;width:${Math.round((currentSectionIdx+1)/totalSec*100)}%;background:#E8603C;border-radius:4px;transition:width .4s;"></div>
        </div>
        <span style="font-size:.78rem;color:rgba(255,255,255,.7);">${Math.round((currentSectionIdx+1)/totalSec*100)}%</span>
      </div>
    </div>`;

  // ── Section content ──────────────────────────────────
  const heading = lang === 'zh' ? sec.headingZh : sec.headingEn;
  const content = (lang === 'zh' ? sec.contentZh : sec.contentEn) || '';
  const isHtml = content.trim().startsWith('<');
  const renderedContent = isHtml
    ? content
    : content.split('\n').map(line => line.trim()
        ? `<p>${line.replace(/^[•·]\s?/,'<span style="color:var(--mid-blue);margin-right:.3em;">•</span>')}</p>`
        : '').join('');

  document.getElementById('readerBody').innerHTML = `
    <div class="reader-section">
      ${heading ? `<h3>${heading}</h3>` : ''}
      ${renderedContent}
    </div>`;

  // Make images zoomable
  document.getElementById('readerBody').querySelectorAll('img').forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img.src, img.alt || ''));
  });

  // ── Section nav buttons ──────────────────────────────
  const isFirstSec = currentSectionIdx === 0;
  const isLastSec  = currentSectionIdx === totalSec - 1;
  const isLastCh   = currentChapterIdx === appChapters.length - 1;

  document.getElementById('prevChapterBtn').style.visibility =
    (isFirstSec && currentChapterIdx === 0) ? 'hidden' : 'visible';
  document.getElementById('prevChapterBtn').textContent =
    isFirstSec ? t('← 上一章', '← Prev Ch.') : t('← 上一节', '← Prev');

  const nextBtn = document.getElementById('nextChapterBtn');
  if (isLastSec && isLastCh) {
    nextBtn.textContent = t('完成学习', 'Finish');
  } else if (isLastSec) {
    nextBtn.textContent = t('下一章 →', 'Next Ch. →');
  } else {
    nextBtn.textContent = t('下一节 →', 'Next →');
  }

  const markBtn = document.getElementById('markReadBtn');
  if (markBtn) {
    markBtn.style.display = isLastSec ? 'inline-flex' : 'none';
  }

  window.scrollTo(0, 0);
}

// ── Lightbox ──────────────────────────────────────────
function openLightbox(src, caption) {
  let lb = document.getElementById('img-lightbox');
  if (!lb) {
    lb = document.createElement('div');
    lb.id = 'img-lightbox';
    lb.style.cssText = `position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:9999;
      display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;`;
    lb.innerHTML = `
      <button onclick="document.getElementById('img-lightbox').remove()"
        style="position:absolute;top:1rem;right:1.25rem;background:none;border:none;
               color:#fff;font-size:1.8rem;cursor:pointer;line-height:1;">✕</button>
      <img id="lb-img" style="max-width:92vw;max-height:85vh;border-radius:6px;box-shadow:0 8px 40px rgba(0,0,0,.6);object-fit:contain;">
      <p id="lb-cap" style="color:rgba(255,255,255,.75);font-size:.85rem;margin-top:.75rem;text-align:center;max-width:80vw;"></p>`;
    lb.addEventListener('click', e => { if (e.target === lb) lb.remove(); });
    document.body.appendChild(lb);
  }
  document.getElementById('lb-img').src = src;
  document.getElementById('lb-cap').textContent = caption;
  lb.style.display = 'flex';
}

async function markChapterRead() {
  const ch = appChapters[currentChapterIdx];
  const done = userProgress.completedChapters || [];
  if (!done.includes(ch.id)) {
    done.push(ch.id);
    userProgress.completedChapters = done;
    await db.collection('progress').doc(currentUser.uid).set(userProgress, { merge: true });
  }
  // Go to next chapter or back to list
  if (currentChapterIdx < appChapters.length - 1) {
    currentChapterIdx++;
    currentChapterId  = appChapters[currentChapterIdx].id;
    currentSectionIdx = 0;
    renderReader();
  } else {
    toast(t('🎉 全部章节学习完成！', '🎉 All chapters completed!'), 'success');
    navigate('learn');
  }
}

function navigateChapter(dir) {
  const ch     = appChapters[currentChapterIdx];
  const secs   = (ch && ch.sections) ? ch.sections : [];
  const total  = secs.length;

  if (dir > 0) {
    // Forward: go to next section, or next chapter if last section
    if (currentSectionIdx < total - 1) {
      currentSectionIdx++;
      renderReader();
    } else {
      // Move to next chapter
      const newIdx = currentChapterIdx + 1;
      if (newIdx >= appChapters.length) return;
      currentChapterIdx = newIdx;
      currentChapterId  = appChapters[newIdx].id;
      currentSectionIdx = 0;
      renderReader();
    }
  } else {
    // Backward: go to prev section, or prev chapter last section
    if (currentSectionIdx > 0) {
      currentSectionIdx--;
      renderReader();
    } else {
      const newIdx = currentChapterIdx - 1;
      if (newIdx < 0) return;
      currentChapterIdx = newIdx;
      currentChapterId  = appChapters[newIdx].id;
      const prevSecs = appChapters[newIdx].sections || [];
      currentSectionIdx = Math.max(0, prevSecs.length - 1);
      renderReader();
    }
  }
}

// ── Chapter Quiz ──────────────────────────────────────
function renderQuizChapterList() {
  const done  = userProgress.completedChapters || [];
  const scores = userProgress.quizScores || {};
  let html = '';
  appChapters.forEach(ch => {
    const isAvail = done.includes(ch.id);
    const score   = scores[ch.id];
    html += `
      <div class="chapter-item ${!isAvail ? 'locked' : ''}" onclick="${isAvail ? `startChapterQuiz('${ch.id}')` : ''}">
        <div class="chapter-num" style="background:${isAvail ? 'var(--pale-blue)' : 'var(--gray)'};">${ch.order}</div>
        <div class="chapter-info">
          <div class="chapter-title">${getLang()==='zh' ? ch.titleZh : ch.titleEn}</div>
          <div class="chapter-meta">${isAvail ? (score !== undefined ? `${t('上次','Last')}: ${score}${t('分','pts')}` : t('5题，立即答题','5 questions, answer now')) : t('请先完成本章学习','Complete chapter first')}</div>
        </div>
        <div class="chapter-status">${!isAvail ? '🔒' : (score >= 60 ? '✅' : (score !== undefined ? '⚠️' : '▶️'))}</div>
      </div>`;
  });
  document.getElementById('quizChapterList').innerHTML = html;
}

function startChapterQuiz(chapterId) {
  sessionMode      = 'quiz';
  sessionQuestions = buildChapterQuizSet(chapterId);
  currentChapterId = chapterId;
  sessionAnswers   = {};
  currentQIndex    = 0;
  showView('view-quiz-session');
  renderQuizSession();
}

function renderQuizSession() {
  // In quiz mode, show one question at a time with immediate feedback
  const q     = sessionQuestions[currentQIndex];
  const total = sessionQuestions.length;
  const lang  = getLang();
  const ch    = appChapters.find(c => c.id === currentChapterId);

  let html = `
    <div style="margin-bottom:1rem;display:flex;align-items:center;justify-content:space-between;">
      <button onclick="navigate('quiz')" style="background:none;border:none;color:var(--mid-blue);cursor:pointer;font-size:.9rem;">
        ← ${t('返回','Back')}
      </button>
      <span class="tag tag-blue">${currentQIndex+1} / ${total}</span>
    </div>
    <h3 style="margin-bottom:1rem;">${lang==='zh' ? ch.titleZh : ch.titleEn} — ${t('随堂练习','Chapter Quiz')}</h3>
    <div class="progress-bar" style="margin-bottom:1.5rem;">
      <div class="progress-fill" style="width:${(currentQIndex/total)*100}%"></div>
    </div>`;

  html += buildQuestionCard(q, sessionAnswers[q.id], true);

  // Nav buttons
  const answered = sessionAnswers[q.id] !== undefined;
  if (currentQIndex < total - 1) {
    html += `<div style="text-align:right;margin-top:1rem;">
      <button class="btn btn-primary" ${!answered?'disabled':''} onclick="quizNext()">
        ${t('下一题 →','Next →')}
      </button></div>`;
  } else {
    html += `<div style="text-align:right;margin-top:1rem;">
      <button class="btn btn-success" ${!answered?'disabled':''} onclick="finishQuiz()">
        ${t('完成练习','Finish Quiz')}
      </button></div>`;
  }

  document.getElementById('quizSessionContent').innerHTML = html;
}

function selectQuizOption(qId, idx) {
  const q = sessionQuestions.find(q => q.id === qId);
  if (!q || sessionAnswers[qId] !== undefined) return; // already answered

  if (q.type === 'multiple') {
    if (!sessionAnswers[qId]) sessionAnswers[qId] = [];
    const arr = sessionAnswers[qId];
    const pos = arr.indexOf(idx);
    if (pos === -1) arr.push(idx); else arr.splice(pos, 1);
  } else {
    sessionAnswers[qId] = idx;
  }
  renderQuizSession();
}

function confirmMultiple(qId) {
  if (!sessionAnswers[qId] || !sessionAnswers[qId].length) return;
  // Lock in answer — re-render with feedback shown
  renderQuizSession();
}

function quizNext() {
  if (currentQIndex < sessionQuestions.length - 1) {
    currentQIndex++;
    renderQuizSession();
    window.scrollTo(0,0);
  }
}

async function finishQuiz() {
  const result = scoreExam(sessionQuestions, sessionAnswers);
  const score  = result.score;

  // Save quiz score
  const scores = userProgress.quizScores || {};
  scores[currentChapterId] = Math.max(scores[currentChapterId] || 0, score);
  userProgress.quizScores = scores;
  await db.collection('progress').doc(currentUser.uid).set(userProgress, { merge: true });

  // Show result in quiz session area
  const lang = getLang();
  let html = `
    <div class="card text-center" style="padding:2rem;">
      <h2>${t('练习完成！','Quiz Complete!')}</h2>
      <div class="score-circle" style="margin:1.5rem auto;--pct:${score}%;">
        <div class="score-num">${score}<small>${t('分','pts')}</small></div>
      </div>
      <div class="score-label ${scoreClass(score)}">${scoreLabel(score)}</div>
      <p style="margin-top:.75rem;font-size:.85rem;">${t(`答对 ${result.correct} / ${result.total} 题`,`${result.correct} / ${result.total} correct`)}</p>
      <div style="margin-top:1.5rem;display:flex;gap:.75rem;justify-content:center;flex-wrap:wrap;">
        <button class="btn btn-outline" onclick="startChapterQuiz('${currentChapterId}')">${t('再练一次','Retry')}</button>
        <button class="btn btn-primary" onclick="navigate('quiz')">${t('返回章节列表','Back to Chapters')}</button>
      </div>
    </div>
    <h3 style="margin:1.25rem 0 .75rem;">${t('题目解析','Answer Review')}</h3>`;

  sessionQuestions.forEach((q, i) => {
    const detail = result.details[i];
    html += buildQuestionCard(q, sessionAnswers[q.id], true, true);
  });

  document.getElementById('quizSessionContent').innerHTML = html;
}

// ── Mock Exam ─────────────────────────────────────────
function renderMockLanding() {
  const done = (userProgress.completedChapters || []).length;
  const locked = done < appChapters.length;
  document.getElementById('mockDesc').textContent =
    locked ? t(`请先完成全部${appChapters.length}个章节的学习（当前已完成${done}章）`, `Complete all ${appChapters.length} chapters first (${done} done)`)
           : t('完整模拟正式考试环境，帮助你评估准备程度。', 'Simulate the real exam to assess your readiness.');
  document.getElementById('startMockBtn').disabled = locked;
}

function startMock() {
  sessionMode      = 'mock';
  sessionQuestions = buildMockSet();
  sessionAnswers   = {};
  currentQIndex    = 0;

  showView('view-exam-session');
  document.getElementById('sessionTitle').textContent = t('模拟测试','Mock Exam');
  startExamSession(EXAM_CONFIG.mockExam.timeMinutes * 60);
}

// ── Final Exam ────────────────────────────────────────
function renderExamLanding() {
  const done     = (userProgress.completedChapters || []).length;
  const allDone  = done >= appChapters.length;
  const attempts = examAttempts.length;
  const maxAtt   = EXAM_CONFIG.exam.maxAttempts;
  const canTake  = allDone && attempts < maxAtt;
  let cooldownMsg = '';

  if (attempts > 0 && attempts < maxAtt) {
    const lastAttempt = examAttempts[examAttempts.length - 1];
    const hrs = hoursSince(lastAttempt.createdAt);
    if (hrs < EXAM_CONFIG.exam.cooldownHours) {
      const remaining = Math.ceil(EXAM_CONFIG.exam.cooldownHours - hrs);
      cooldownMsg = `<div class="alert alert-warning" style="margin-bottom:1rem;">
        ${t(`冷却中：距下次考试还需等待 ${remaining} 小时`, `Cooldown: ${remaining} hours until next attempt`)}</div>`;
    }
  }

  let attHtml = '';
  if (examAttempts.length) {
    attHtml = `<h3 style="margin-bottom:.75rem;">${t('历次成绩','Previous Scores')}</h3>
      <div class="table-wrap"><table class="list-table"><thead><tr>
        <th>${t('次数','#')}</th><th>${t('分数','Score')}</th><th>${t('结果','Result')}</th><th>${t('时间','Date')}</th>
      </tr></thead><tbody>`;
    examAttempts.forEach((a, i) => {
      const lbl = scoreLabel(a.score);
      const cls = scoreClass(a.score);
      attHtml += `<tr><td>${i+1}</td><td><b>${a.score}</b></td>
        <td><span class="badge badge-${cls}">${lbl}</span></td><td>${formatDate(a.createdAt)}</td></tr>`;
    });
    attHtml += '</tbody></table></div>';
  }

  let btnHtml = '';
  if (!allDone) {
    btnHtml = `<div class="alert alert-info">${t(`请先完成全部${appChapters.length}章节的学习`, `Please complete all ${appChapters.length} chapters first`)}</div>`;
  } else if (attempts >= maxAtt) {
    const passed = examAttempts.some(a => a.score >= EXAM_CONFIG.exam.passingScore);
    btnHtml = `<div class="alert ${passed ? 'alert-success' : 'alert-danger'}">
      ${passed ? t('🎉 您已通过考试！','🎉 You have passed!') : t('3次机会已用完，请联系管理员','All 3 attempts used. Contact admin.')}
    </div>`;
  } else {
    const isCooling = attempts > 0 && hoursSince(examAttempts[examAttempts.length-1].createdAt) < EXAM_CONFIG.exam.cooldownHours;
    btnHtml = cooldownMsg + `
      <div class="alert alert-info" style="margin-bottom:1rem;">
        ${t(`剩余考试机会：${maxAtt - attempts} 次 | 每次间隔24小时`,`Attempts left: ${maxAtt - attempts} | 24h cooldown between attempts`)}
      </div>
      <button class="btn btn-primary btn-lg" ${isCooling ? 'disabled' : ''} onclick="startFinalExam()">
        ${t('开始正式考试','Start Final Exam')}
      </button>`;
  }

  document.getElementById('examLandingContent').innerHTML = attHtml + '<div style="margin-top:1.25rem;">' + btnHtml + '</div>';
}

function startFinalExam() {
  // Check cooldown one more time
  if (examAttempts.length > 0) {
    const last = examAttempts[examAttempts.length - 1];
    if (hoursSince(last.createdAt) < EXAM_CONFIG.exam.cooldownHours) {
      toast(t('冷却时间未到，请稍后再试','Cooldown not elapsed, please wait'), 'warning'); return;
    }
  }
  if (examAttempts.length >= EXAM_CONFIG.exam.maxAttempts) {
    toast(t('考试机会已用完','No attempts remaining'), 'danger'); return;
  }

  sessionMode      = 'exam';
  sessionQuestions = buildExamSet(EXAM_CONFIG.exam);
  sessionAnswers   = {};
  currentQIndex    = 0;

  showView('view-exam-session');
  document.getElementById('sessionTitle').textContent = t('正式考试','Final Exam');
  startExamSession(EXAM_CONFIG.exam.timeMinutes * 60);
}

// ── Exam session engine ───────────────────────────────
function startExamSession(totalSeconds) {
  renderExamQuestion();
  renderQuestionNav();
  updateExamProgress();

  if (examTimer) examTimer.stop();
  examTimer = new CountdownTimer(totalSeconds,
    (rem) => {
      const el = document.getElementById('timerDisplay');
      if (!el) return;
      el.textContent = formatTime(rem);
      el.className = 'timer-badge' + (rem < 300 ? ' danger' : (rem < 600 ? ' warning' : ''));
    },
    () => { toast(t('时间到！自动提交','Time up! Auto submitting'), 'warning'); submitExam(); }
  );
  examTimer.start();
}

function renderExamQuestion() {
  const q    = sessionQuestions[currentQIndex];
  const lang = getLang();
  document.getElementById('questionArea').innerHTML = buildQuestionCard(q, sessionAnswers[q.id], false);
  document.getElementById('prevQBtn').disabled = currentQIndex === 0;
  document.getElementById('nextQBtn').disabled = currentQIndex === sessionQuestions.length - 1;
}

function buildQuestionCard(q, userAns, showFeedback, alwaysShowExplanation) {
  const lang     = getLang();
  const answered = userAns !== undefined;
  const qText    = lang === 'zh' ? q.questionZh : q.questionEn;
  const options  = lang === 'zh' ? q.optionsZh  : q.optionsEn;
  const typeLbls = { single: t('单选题','Single'), multiple: t('多选题','Multiple'), boolean: t('判断题','True/False') };
  const typeCls  = { single: 'badge-single', multiple: 'badge-multiple', boolean: 'badge-boolean' };

  let html = `<div class="question-card">
    <div class="question-num">
      Q${currentQIndex !== undefined ? currentQIndex+1 : ''} — ${sessionQuestions.length ? '' : ''}
      <span class="question-type-badge ${typeCls[q.type]}">${typeLbls[q.type]}</span>
    </div>
    <div class="question-text">${qText}</div>
    <div class="options-list">`;

  options.forEach((opt, i) => {
    let cls = 'option-item';
    const keys = 'ABCD';

    if (showFeedback && answered) {
      const isCorrect = q.type === 'multiple'
        ? q.answer.includes(i)
        : q.answer === i;
      const isSelected = q.type === 'multiple'
        ? (Array.isArray(userAns) && userAns.includes(i))
        : userAns === i;
      if (isSelected && isCorrect)  cls += ' correct';
      else if (isSelected)          cls += ' wrong';
      else if (isCorrect)           cls += ' correct';
    } else if (q.type === 'multiple') {
      if (Array.isArray(userAns) && userAns.includes(i)) cls += ' selected';
    } else {
      if (userAns === i) cls += ' selected';
    }

    const clickable = showFeedback ? (q.type === 'multiple' && !answered) : true;
    const onclick   = clickable ? `onclick="selectOption('${q.id}',${i})"` : '';

    html += `<div class="${cls}" ${onclick}>
      <div class="option-key">${keys[i]}</div>
      <div class="option-text">${opt}</div>
    </div>`;
  });

  html += '</div>';

  // Multiple choice confirm button (quiz mode, not yet answered)
  if (q.type === 'multiple' && showFeedback && !answered) {
    html += `<div style="margin-top:.75rem;text-align:right;">
      <button class="btn btn-primary btn-sm" onclick="confirmMultiple('${q.id}')">${t('确认选择','Confirm')}</button>
    </div>`;
  }

  // Explanation
  if ((showFeedback && answered) || alwaysShowExplanation) {
    const exp = lang === 'zh' ? q.explanationZh : q.explanationEn;
    if (exp) html += `<div class="explanation-box"><strong>${t('解析：','Explanation:')}</strong> ${exp}</div>`;
  }

  html += '</div>';
  return html;
}

function selectOption(qId, idx) {
  const q = sessionQuestions.find(q => q.id === qId);
  if (!q) return;

  // In exam/mock mode, no feedback while in session — just record answer
  if (q.type === 'multiple') {
    if (!sessionAnswers[qId]) sessionAnswers[qId] = [];
    const arr = sessionAnswers[qId];
    const pos = arr.indexOf(idx);
    if (pos === -1) arr.push(idx); else arr.splice(pos, 1);
  } else {
    sessionAnswers[qId] = idx;
  }

  if (sessionMode === 'quiz') {
    renderQuizSession();
  } else {
    renderExamQuestion();
    renderQuestionNav();
    updateExamProgress();
  }
}

function renderQuestionNav() {
  const nav = document.getElementById('questionNav');
  if (!nav) return;
  nav.innerHTML = sessionQuestions.map((q, i) => {
    const answered = sessionAnswers[q.id] !== undefined;
    const isCurrent = i === currentQIndex;
    return `<div class="q-dot ${answered ? 'answered' : ''} ${isCurrent ? 'current' : ''}" onclick="jumpToQuestion(${i})">${i+1}</div>`;
  }).join('');
}

function updateExamProgress() {
  const total    = sessionQuestions.length;
  const answered = Object.keys(sessionAnswers).length;
  const pct      = Math.round((currentQIndex+1) / total * 100);
  const counter  = document.getElementById('questionCounter');
  const aCounter = document.getElementById('answeredCounter');
  const fill     = document.getElementById('examProgressFill');
  if (counter)  counter.textContent  = t(`第 ${currentQIndex+1} / ${total} 题`, `Question ${currentQIndex+1} / ${total}`);
  if (aCounter) aCounter.textContent = t(`已答 ${answered} 题`, `${answered} answered`);
  if (fill)     fill.style.width = pct + '%';
}

function navigateQuestion(dir) {
  const newIdx = currentQIndex + dir;
  if (newIdx < 0 || newIdx >= sessionQuestions.length) return;
  currentQIndex = newIdx;
  renderExamQuestion();
  renderQuestionNav();
  updateExamProgress();
  window.scrollTo(0,0);
}

function jumpToQuestion(idx) {
  currentQIndex = idx;
  renderExamQuestion();
  renderQuestionNav();
  updateExamProgress();
  window.scrollTo(0,0);
}

function confirmSubmit() {
  const answered = Object.keys(sessionAnswers).length;
  const total    = sessionQuestions.length;
  const unanswered = total - answered;
  document.getElementById('confirmMsg').textContent =
    unanswered > 0
    ? t(`还有 ${unanswered} 题未作答，确认提交吗？`, `${unanswered} question(s) unanswered. Submit anyway?`)
    : t('确认提交答卷？提交后不可修改。', 'Confirm submit? Cannot be changed after submission.');
  showModal('confirmModal');
}

async function submitExam() {
  hideModal('confirmModal');
  if (examTimer) examTimer.stop();

  const result = scoreExam(sessionQuestions, sessionAnswers);

  if (sessionMode === 'exam') {
    // Save to Firestore
    const attemptData = {
      userId: currentUser.uid,
      userName: userProfile.name || currentUser.email,
      mode: 'exam',
      score: result.score,
      correct: result.correct,
      total: result.total,
      passed: result.score >= EXAM_CONFIG.exam.passingScore,
      excellent: result.score >= EXAM_CONFIG.exam.excellentScore,
      attemptNumber: examAttempts.length + 1,
      answers: sessionAnswers,
      details: result.details,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    };
    const ref = await db.collection('examAttempts').add(attemptData);
    examAttempts.push({ id: ref.id, ...attemptData, createdAt: new Date() });

    // Send email notification
    sendExamNotification(attemptData);
  }

  showResult(result);
}

function showResult(result) {
  showView('view-result');
  const lang = getLang();
  const sc   = result.score;
  const pct  = `${sc}%`;

  // Score circle
  document.getElementById('scoreCircle').style.setProperty('--pct', pct);
  document.getElementById('scoreNum').innerHTML = `${sc}<small>${t('分','pts')}</small>`;
  const lbl = document.getElementById('scoreLabel');
  lbl.textContent  = scoreLabel(sc);
  lbl.className    = `score-label ${scoreClass(sc)}`;

  document.getElementById('scoreBreakdown').innerHTML = `
    <span>${t('答对','Correct')} ${result.correct} / ${result.total}</span>
    <span>${t('得分率','Rate')} ${sc}%</span>
    ${sessionMode === 'exam' ? `<span>${t('第','Attempt ')}${examAttempts.length}${t('次','')}</span>` : ''}
  `;

  // Actions
  let actions = `<button class="btn btn-primary" onclick="navigate('dashboard')">${t('返回总览','Dashboard')}</button>`;
  if (sessionMode === 'mock') {
    actions = `<button class="btn btn-outline" onclick="startMock()">${t('再次模拟','Try Again')}</button>` + actions;
  } else if (sessionMode === 'exam' && examAttempts.length < EXAM_CONFIG.exam.maxAttempts && sc < EXAM_CONFIG.exam.passingScore) {
    actions = `<button class="btn btn-outline" onclick="navigate('exam')">${t('查看考试状态','View Exam Status')}</button>` + actions;
  }
  document.getElementById('resultActions').innerHTML = actions;

  // Answer review
  let reviewHtml = `<h3 style="margin-bottom:1rem;">${t('答题解析','Answer Review')}</h3>`;
  sessionQuestions.forEach((q, i) => {
    const userAns = sessionAnswers[q.id];
    const detail  = result.details[i];
    reviewHtml += buildReviewCard(q, userAns, detail, i);
  });
  document.getElementById('resultReview').innerHTML = reviewHtml;
}

function buildReviewCard(q, userAns, detail, idx) {
  const lang    = getLang();
  const qText   = lang === 'zh' ? q.questionZh : q.questionEn;
  const options = lang === 'zh' ? q.optionsZh  : q.optionsEn;
  const keys    = 'ABCD';

  let html = `<div class="question-card" style="margin-bottom:.75rem;">
    <div class="question-num">Q${idx+1} <span style="margin-left:.5rem;">${detail.isCorrect ? '✅' : '❌'}</span></div>
    <div class="question-text">${qText}</div>
    <div class="options-list">`;

  options.forEach((opt, i) => {
    const isCorrect  = q.type === 'multiple' ? q.answer.includes(i) : q.answer === i;
    const isSelected = q.type === 'multiple' ? (Array.isArray(userAns) && userAns.includes(i)) : userAns === i;
    let cls = 'option-item';
    if (isSelected && isCorrect) cls += ' correct';
    else if (isSelected)         cls += ' wrong';
    else if (isCorrect)          cls += ' correct';
    html += `<div class="${cls}"><div class="option-key">${keys[i]}</div><div class="option-text">${opt}</div></div>`;
  });

  html += '</div>';
  const exp = lang === 'zh' ? q.explanationZh : q.explanationEn;
  if (exp) html += `<div class="explanation-box"><strong>${t('解析：','Explanation:')}</strong> ${exp}</div>`;
  html += '</div>';
  return html;
}

// ── Exam History ──────────────────────────────────────
async function renderHistory() {
  showLoader('historyContent');
  try {
    const snap = await db.collection('examAttempts')
      .where('userId', '==', currentUser.uid)
      .orderBy('createdAt', 'desc').get();
    const all = snap.docs.map(d => ({ id: d.id, ...d.data() }));

    if (!all.length) {
      document.getElementById('historyContent').innerHTML =
        `<div class="empty-state"><div class="empty-icon">📊</div><p>${t('暂无考试记录','No exam records yet')}</p></div>`;
      return;
    }

    let html = `<div class="table-wrap"><table class="list-table"><thead><tr>
      <th>${t('类型','Type')}</th><th>${t('分数','Score')}</th><th>${t('结果','Result')}</th>
      <th>${t('答对','Correct')}</th><th>${t('时间','Date')}</th>
    </tr></thead><tbody>`;

    all.forEach(a => {
      const typeLabel = a.mode === 'exam' ? t('正式考试','Final') : t('模拟测试','Mock');
      const cls = scoreClass(a.score);
      html += `<tr>
        <td>${typeLabel}</td>
        <td><b>${a.score}</b></td>
        <td><span class="badge badge-${cls}">${scoreLabel(a.score)}</span></td>
        <td>${a.correct} / ${a.total}</td>
        <td>${formatDate(a.createdAt)}</td>
      </tr>`;
    });
    html += '</tbody></table></div>';
    document.getElementById('historyContent').innerHTML = html;
  } catch(e) {
    document.getElementById('historyContent').innerHTML =
      `<div class="alert alert-danger">${t('加载失败','Load failed')}: ${e.message}</div>`;
  }
}

// ── Email Notification ────────────────────────────────
async function sendExamNotification(attempt) {
  initEmailJs();
  // Wait for EmailJS to load
  await new Promise(r => setTimeout(r, 1500));
  if (!emailJsReady) return;

  const isPassed = attempt.passed;
  const isAllFailed = !isPassed && attempt.attemptNumber >= EXAM_CONFIG.exam.maxAttempts;

  if (!isPassed && !isAllFailed) return; // only notify on pass or 3rd fail

  const templateId = isPassed ? EMAILJS_CONFIG.passTemplateId : EMAILJS_CONFIG.failTemplateId;
  const params = {
    to_email: ADMIN_EMAIL,
    employee_name: attempt.userName,
    score: attempt.score,
    attempt_number: attempt.attemptNumber,
    result: scoreLabel(attempt.score, 'zh') + ' / ' + scoreLabel(attempt.score, 'en'),
    date: new Date().toLocaleString('zh-CN')
  };

  try {
    await emailjs.send(EMAILJS_CONFIG.serviceId, templateId, params);
  } catch(e) {
    console.warn('Email notification failed:', e);
  }
}
