// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Firebase & App Configuration
//  ⚠️  Fill in your own Firebase project credentials below
// ═══════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyDCgY6hGyRjpyq89TQJW4giogds8TDUpJI",
  authDomain:        "fonli-training.firebaseapp.com",
  projectId:         "fonli-training",
  storageBucket:     "fonli-training.firebasestorage.app",
  messagingSenderId: "876828021650",
  appId:             "1:876828021650:web:8a0c41e15db19cb5bce74b",
  measurementId:     "G-HD2XXJLXJE"
};

// ── EmailJS (for admin email notifications) ──────────
// Sign up free at https://emailjs.com
// 200 emails/month on free plan
const EMAILJS_CONFIG = {
  serviceId:        "YOUR_EMAILJS_SERVICE_ID",
  passTemplateId:   "YOUR_PASS_TEMPLATE_ID",   // template for exam pass notification
  failTemplateId:   "YOUR_FAIL_TEMPLATE_ID",   // template for 3-fail notification
  publicKey:        "YOUR_EMAILJS_PUBLIC_KEY"
};

// ── Admin contact ────────────────────────────────────
const ADMIN_EMAIL = "admin@fonlipackaging.com"; // change to real admin email

// ── App settings ─────────────────────────────────────
const APP_CONFIG = {
  appNameZh: "菲利包装培训系统",
  appNameEn: "Fonli Packaging Training System",
  defaultLang: "zh",   // "zh" | "en"
  version: "1.0.0"
};

// ── Exam / Quiz configuration ─────────────────────────
const EXAM_CONFIG = {
  quiz: {
    questionsPerChapter: 5   // max questions shown per chapter quiz
  },
  mock: {
    questionCount: null,     // same as exam (all V6 questions) — set dynamically
    timeMinutes: 180         // time limit (3 hours, same as formal exam)
  },
  exam: {
    questionCount: 259,      // total questions in formal exam (all V6 questions)
    timeMinutes: 180,        // time limit (3 hours)
    passingScore: 95,        // minimum passing score (%)
    excellentScore: 99,      // excellent threshold (%)
    maxAttempts: 3,          // max exam attempts allowed
    cooldownHours: 24        // hours between retries after fail
  }
};
