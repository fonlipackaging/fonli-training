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

// Build question set for a single chapter quiz — uses V6 questions (same pool as mock/formal exam)
// so that images, blanks, and content are always in sync across all three modes.
function buildChapterQuizSet(chapterId) {
  // Use V6 questions (Firestore or data.js fallback)
  var v6 = typeof getActiveQuestions === 'function' ? getActiveQuestions() : [];
  if (!v6.length) v6 = typeof EXAM_QUESTIONS_V6 !== 'undefined' ? EXAM_QUESTIONS_V6 : [];

  if (v6.length > 0) {
    // Convert chapterId 'ch03' → chapter number 3
    var chNum = parseInt((chapterId || '').replace(/^ch0*/i, ''), 10);
    var filtered = v6.filter(function(q) { return q.chapter === chNum; });
    if (filtered.length > 0) {
      return filtered.map(normalizeV6Question);
    }
  }

  // Legacy fallback (no image data)
  return (typeof QUESTIONS !== 'undefined' ? QUESTIONS : [])
    .filter(function(q){ return q.chapterId === chapterId; })
    .map(normalizeQuestion);
}

// ── V6 question helpers ───────────────────────────────

// Strip Chinese/English parenthetical content for lenient matching (handles incomplete brackets too)
function _stripParens(s) {
  return s
    .replace(/（[^）]*）/g, '')   // complete Chinese parens
    .replace(/（[^）]*$/g, '')    // incomplete Chinese parens e.g. "中套（Collar"
    .replace(/\([^)]*\)/g, '')   // complete English parens
    .replace(/\([^)]*$/g, '')    // incomplete English parens
    .trim().replace(/\s+/g, '');
}

// Strip trailing units and suffixes already present in the question text
function _stripUnit(s) {
  return s
    .replace(/[\s,，]*(?:ml\/次|mm|cm|ml|pcs|件|个|次|元|%|％|μm|g\/cm[³3]|g\/cm3|g|kg)\s*$/i, '')
    .replace(/[省市镇县区]\s*$/, '')  // "广东省"→"广东"
    .replace(/阶段\s*$/, '')          // "打样阶段"→"打样"
    .replace(/结构\s*$/, '')          // "B 结构"→"B"
    .replace(/步\s*$/, '')            // "6步"→"6"
    .trim();
}

// Check a single blank answer against the expected answer (supports "/" alternatives)
// 3-level matching: exact → strip parens → strip units
function checkFillBlank(expected, userInput) {
  if (!userInput || !userInput.trim()) return false;
  var inp = userInput.trim().toLowerCase().replace(/\s+/g, ' ');
  var alts = expected.split('/').map(function(a){ return a.trim().toLowerCase().replace(/\s+/g, ' '); });
  return alts.some(function(alt) {
    // 1. Exact match
    if (inp === alt) return true;
    // 2. Match ignoring parenthetical notes
    var coreAlt = _stripParens(alt);
    var coreInp = _stripParens(inp);
    if (coreInp && coreAlt && coreInp === coreAlt) return true;
    // 3. Match ignoring trailing units/suffixes
    var unitlessAlt = _stripUnit(coreAlt).replace(/,/g, '');
    var unitlessInp = _stripUnit(coreInp).replace(/,/g, '');
    if (unitlessInp && unitlessAlt && unitlessInp === unitlessAlt) return true;
    return false;
  });
}

// Check a V6 fill question answer — supports ordered AND set-based (order-free) matching
function checkV6FillAnswer(q, userAns) {
  if (!Array.isArray(userAns) || !Array.isArray(q.blanks) || q.blanks.length === 0) return false;

  // 1. Try ordered matching first
  var orderedOk = q.blanks.every(function(expected, i) {
    return checkFillBlank(expected, userAns[i] || '');
  });
  if (orderedOk) return true;

  // 2. For multi-blank questions, try set-based (order-free) matching
  if (q.blanks.length > 1) {
    var used = new Array(q.blanks.length).fill(false);
    var allMatched = userAns.every(function(inp) {
      if (!inp || !inp.trim()) return false;
      for (var j = 0; j < q.blanks.length; j++) {
        if (!used[j] && checkFillBlank(q.blanks[j], inp)) {
          used[j] = true;
          return true;
        }
      }
      return false;
    });
    if (allMatched && used.every(function(u){ return u; })) return true;
  }

  return false;
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
  // Use live question bank (Firestore → data.js fallback via getActiveQuestions)
  var v6 = typeof getActiveQuestions === 'function' ? getActiveQuestions() : [];
  if (v6.length === 0) v6 = typeof EXAM_QUESTIONS_V6 !== 'undefined' ? EXAM_QUESTIONS_V6 : [];
  if (v6.length === 0) {
    var allQ = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
    return shuffle(allQ).map(normalizeQuestion);
  }
  return shuffle(v6).map(normalizeV6Question);
}

// Build formal exam — all questions from live question bank, shuffled
function buildExamSet(config) {
  var v6 = typeof getActiveQuestions === 'function' ? getActiveQuestions() : [];
  if (v6.length === 0) v6 = typeof EXAM_QUESTIONS_V6 !== 'undefined' ? EXAM_QUESTIONS_V6 : [];
  if (v6.length === 0) {
    var allQ = typeof QUESTIONS !== 'undefined' ? QUESTIONS : [];
    return shuffle(allQ.filter(function(q){ return q.type === 'choice' || q.type === 'single'; }))
      .slice(0, config.questionCount || 50).map(normalizeQuestion);
  }
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
