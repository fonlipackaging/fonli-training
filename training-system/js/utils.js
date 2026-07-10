// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Shared Utilities & i18n
// ═══════════════════════════════════════════════════════

// ── Language state ────────────────────────────────────
let currentLang = localStorage.getItem('fonli_lang') || APP_CONFIG.defaultLang || 'zh';

function setLang(lang) {
  currentLang = lang;
  localStorage.setItem('fonli_lang', lang);
  document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en';
  applyI18n();
}

function getLang() { return currentLang; }

function t(zhText, enText) {
  return currentLang === 'zh' ? zhText : (enText || zhText);
}

// Apply data-i18n attributes across the page
function applyI18n() {
  document.querySelectorAll('[data-zh]').forEach(el => {
    const zh = el.getAttribute('data-zh');
    const en = el.getAttribute('data-en') || zh;
    el.textContent = currentLang === 'zh' ? zh : en;
  });
  // Chapter/question text is handled by the render functions directly
  document.dispatchEvent(new CustomEvent('langchange', { detail: currentLang }));
}

// ── UI Helpers ────────────────────────────────────────
function showView(viewId) {
  document.querySelectorAll('.view').forEach(v => v.classList.add('hidden'));
  const target = document.getElementById(viewId);
  if (target) target.classList.remove('hidden');
}

function showModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.add('show');
}

function hideModal(id) {
  const m = document.getElementById(id);
  if (m) m.classList.remove('show');
}

function toast(msg, type = 'info', duration = 3000) {
  const colors = { success: '#1E7E45', danger: '#C0392B', info: '#2E6DA4', warning: '#B7770D' };
  const el = document.createElement('div');
  el.style.cssText = `position:fixed;bottom:24px;left:50%;transform:translateX(-50%);
    background:${colors[type]};color:#fff;padding:.7rem 1.5rem;border-radius:8px;
    font-size:.9rem;font-weight:600;z-index:9999;box-shadow:0 4px 16px rgba(0,0,0,.2);
    max-width:90vw;text-align:center;`;
  el.textContent = msg;
  document.body.appendChild(el);
  setTimeout(() => el.remove(), duration);
}

function showLoader(container) {
  if (typeof container === 'string') container = document.getElementById(container);
  if (container) container.innerHTML = '<div class="loader"><div class="spinner"></div></div>';
}

// ── Timer ─────────────────────────────────────────────
class CountdownTimer {
  constructor(totalSeconds, onTick, onExpire) {
    this.remaining = totalSeconds;
    this.onTick = onTick;
    this.onExpire = onExpire;
    this.interval = null;
  }
  start() {
    this.onTick(this.remaining);
    this.interval = setInterval(() => {
      this.remaining--;
      this.onTick(this.remaining);
      if (this.remaining <= 0) { this.stop(); this.onExpire(); }
    }, 1000);
  }
  stop() { clearInterval(this.interval); }
  pause() { this.stop(); }
  resume() { this.start(); }
}

function formatTime(seconds) {
  const m = Math.floor(seconds / 60).toString().padStart(2, '0');
  const s = (seconds % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
}

// ── Date helpers ──────────────────────────────────────
function formatDate(ts) {
  if (!ts) return '--';
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return d.toLocaleDateString(currentLang === 'zh' ? 'zh-CN' : 'en-US', {
    year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
}

function hoursSince(ts) {
  if (!ts) return Infinity;
  const d = ts.toDate ? ts.toDate() : new Date(ts);
  return (Date.now() - d.getTime()) / 3600000;
}

// ── Score helpers ─────────────────────────────────────
function scoreLabel(score, lang) {
  if (lang === undefined) lang = currentLang;
  const { passingScore, excellentScore } = EXAM_CONFIG.exam;
  if (score >= excellentScore) return lang === 'zh' ? '优秀 ✦' : 'Excellent ✦';
  if (score >= passingScore)   return lang === 'zh' ? '及格 ✓' : 'Pass ✓';
  return lang === 'zh' ? '未及格 ✗' : 'Fail ✗';
}

function scoreClass(score) {
  const { passingScore, excellentScore } = EXAM_CONFIG.exam;
  if (score >= excellentScore) return 'great';
  if (score >= passingScore)   return 'pass';
  return 'fail';
}

// ── Sidebar mobile toggle ─────────────────────────────
function initSidebar() {
  const burger = document.getElementById('hamburger');
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  if (!burger) return;
  burger.addEventListener('click', () => {
    sidebar.classList.toggle('open');
    overlay.classList.toggle('show');
  });
  overlay.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('show');
  });
}

// ── Nav link active state ─────────────────────────────
function setActiveNav(id) {
  document.querySelectorAll('.sidebar-nav a, .sidebar-nav button').forEach(a => a.classList.remove('active'));
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
}

// ── Quiz / Exam engine ────────────────────────────────

// Fisher-Yates shuffle (returns new array)
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Normalize a question from data.js format to UI-expected format
function normalizeQuestion(q) {
  if (q._normalized) return q;
  var n = Object.assign({}, q, { _normalized: true });

  // Map type names
  if (n.type === 'choice') n.type = 'single';
  // 'fill' stays as 'fill'; 'multiple' stays as 'multiple'

  // Convert options [{key,textZh,textEn}] → optionsZh/optionsEn flat arrays
  if (Array.isArray(n.options) && !n.optionsZh) {
    n.optionsZh = n.options.map(function(o){ return o.textZh || o.text || ''; });
    n.optionsEn = n.options.map(function(o){ return o.textEn || o.textZh || o.text || ''; });
  }

  // Convert letter answer (A/B/C/D) to 0-based index for single/boolean
  if ((n.type === 'single' || n.type === 'boolean') &&
      typeof n.answer === 'string' && /^[A-D]$/.test(n.answer)) {
    n.answer = n.answer.charCodeAt(0) - 65; // A→0, B→1, C→2, D→3
  }

  return n;
}

// Build question set for a single chapter quiz (in original order, all questions)
function buildChapterQuizSet(chapterId) {
  return (typeof QUESTIONS !== 'undefined' ? QUESTIONS : [])
    .filter(function(q){ return q.chapterId === chapterId; })
    .map(normalizeQuestion);
}

// Build mock exam question set (evenly distributed across chapters)
// Only uses choice/single questions (fill questions excluded from timed exams)
function buildMockSet() {
  var allQ   = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
  var target = EXAM_CONFIG.mock.questionCount;
  // Only scoreable question types for exams
  var choiceQ = allQ.filter(function(q){ return q.type === 'choice' || q.type === 'single' || q.type === 'multiple' || q.type === 'boolean'; });
  // Group by chapter
  var byChapter = {};
  choiceQ.forEach(function(q) {
    if (!byChapter[q.chapterId]) byChapter[q.chapterId] = [];
    byChapter[q.chapterId].push(q);
  });
  var chapters = Object.keys(byChapter);
  var perChap  = Math.ceil(target / chapters.length);
  var result = [];
  chapters.forEach(function(cid) {
    var picked = shuffle(byChapter[cid]).slice(0, perChap);
    result = result.concat(picked);
  });
  return shuffle(result).slice(0, target).map(normalizeQuestion);
}

// Build formal exam question set
// Only uses choice/single questions (fill questions excluded from timed exams)
function buildExamSet(config) {
  var allQ   = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
  var target = config.questionCount || 30;
  // Only scoreable question types for exams
  var choiceQ = allQ.filter(function(q){ return q.type === 'choice' || q.type === 'single' || q.type === 'multiple' || q.type === 'boolean'; });
  // Distribute proportionally by difficulty
  var easy   = shuffle(choiceQ.filter(function(q){ return q.difficulty === 'easy'; }));
  var medium = shuffle(choiceQ.filter(function(q){ return q.difficulty === 'medium'; }));
  var hard   = shuffle(choiceQ.filter(function(q){ return q.difficulty === 'hard'; }));
  // ~30% easy, 50% medium, 20% hard
  var eN = Math.round(target * 0.30);
  var mN = Math.round(target * 0.50);
  var hN = target - eN - mN;
  var pool = easy.slice(0, eN).concat(medium.slice(0, mN)).concat(hard.slice(0, hN));
  // Fill gaps if not enough in a difficulty tier
  if (pool.length < target) {
    var used = {};
    pool.forEach(function(q){ used[q.id] = true; });
    var extra = shuffle(choiceQ.filter(function(q){ return !used[q.id]; }));
    pool = pool.concat(extra.slice(0, target - pool.length));
  }
  return shuffle(pool).slice(0, target).map(normalizeQuestion);
}

// Score a completed session: returns { score, correct, total, details }
function scoreExam(questions, answers) {
  let correct = 0;
  const details = questions.map(function(q) {
    const userAns = answers[q.id];
    let isCorrect = false;
    if (q.type === 'fill') {
      // Fill questions: count as correct when user revealed the answer
      isCorrect = userAns === '__fill_revealed__';
    } else if (q.type === 'multiple' || q.type === 'multi') {
      // Multi-select: user answer is array, q.answer is array
      const ua = Array.isArray(userAns) ? [...userAns].sort() : [];
      const ca = Array.isArray(q.answer) ? [...q.answer].sort() : [];
      isCorrect = ua.length === ca.length && ua.every(function(v, i){ return v === ca[i]; });
    } else {
      // Single choice: compare index numbers
      isCorrect = userAns !== undefined && userAns === q.answer;
    }
    if (isCorrect) correct++;
    return { correct: isCorrect, userAnswer: userAns, correctAnswer: q.answer };
  });
  const score = questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0;
  return { score, correct, total: questions.length, details };
}
