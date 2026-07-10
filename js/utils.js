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

// ── V6 question helpers ───────────────────────────────

// Check a single blank answer against the expected answer (supports "/" alternatives)
function checkFillBlank(expected, userInput) {
  if (!userInput || !userInput.trim()) return false;
  var inp = userInput.trim().toLowerCase().replace(/\s+/g, ' ');
  // Split expected by "/" for alternatives
  var alts = expected.split('/').map(function(a){ return a.trim().toLowerCase().replace(/\s+/g, ' '); });
  return alts.some(function(alt){ return inp === alt; });
}

// Check a V6 fill question answer (array of blank answers)
function checkV6FillAnswer(q, userAns) {
  if (!Array.isArray(userAns) || !Array.isArray(q.blanks) || q.blanks.length === 0) return false;
  // All blanks must be correct
  return q.blanks.every(function(expected, i) {
    return checkFillBlank(expected, userAns[i] || '');
  });
}

// Normalize V6 format question so buildQuestionCard() can render it
function normalizeV6Question(q) {
  if (q._normalized) return q;
  var n = Object.assign({}, q, { _normalized: true, _v6: true });
  // Map fields to rendering format
  n.questionZh = n.textZh || '';
  n.questionEn = n.textZh || '';  // V6 questions are Chinese-only
  if (n.type === 'single' && Array.isArray(n.options)) {
    n.optionsZh = n.options;
    n.optionsEn = n.options;
  }
  return n;
}

// Build mock exam — same full question pool as formal exam, shuffled
// Scoring is always percentage-based (correct/total*100), safe when questions are added
function buildMockSet() {
  var v6 = typeof EXAM_QUESTIONS_V6 !== 'undefined' ? EXAM_QUESTIONS_V6 : [];
  if (v6.length === 0) {
    // Fallback to old questions
    var allQ = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
    return shuffle(allQ).map(normalizeQuestion);
  }
  // All V6 questions, shuffled (same as formal exam)
  return shuffle(v6).map(normalizeV6Question);
}

// Build formal exam (all 259 V6 questions)
function buildExamSet(config) {
  var v6 = typeof EXAM_QUESTIONS_V6 !== 'undefined' ? EXAM_QUESTIONS_V6 : [];
  if (v6.length === 0) {
    // Fallback to old questions
    var allQ = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
    return shuffle(allQ.filter(function(q){ return q.type === 'choice' || q.type === 'single'; }))
      .slice(0, config.questionCount || 50).map(normalizeQuestion);
  }
  // All V6 questions, shuffled
  return shuffle(v6).map(normalizeV6Question);
}

// Score a completed session: returns { score, correct, total, details }
function scoreExam(questions, answers) {
  let correct = 0;
  const details = questions.map(function(q) {
    const userAns = answers[q.id];
    let isCorrect = false;
    if (q.type === 'fill') {
      if (q._v6 && Array.isArray(q.blanks)) {
        // V6 fill: check typed answers against blanks
        isCorrect = checkV6FillAnswer(q, Array.isArray(userAns) ? userAns : []);
      } else {
        // Legacy fill: correct when user revealed the answer
        isCorrect = userAns === '__fill_revealed__';
      }
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
