// ═══════════════════════════════════════════════════════
//  FONLI TRAINING SYSTEM — Firebase & App Configuration
//  ⚠️  Fill in your own Firebase project credentials below
// ═══════════════════════════════════════════════════════

const FIREBASE_CONFIG = {
  apiKey:            "YOUR_API_KEY",
  authDomain:        "YOUR_PROJECT_ID.firebaseapp.com",
  projectId:         "YOUR_PROJECT_ID",
  storageBucket:     "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId:             "YOUR_APP_ID"
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
    questionCount: 20,       // total questions in mock test
    timeMinutes: 30          // time limit
  },
  exam: {
    questionCount: 30,       // total questions in formal exam
    timeMinutes: 45,         // time limit
    passingScore: 80,        // minimum passing score (%)
    excellentScore: 95,      // excellent threshold (%)
    maxAttempts: 3,          // max exam attempts allowed
    cooldownHours: 24        // hours between retries after fail
  }
};
