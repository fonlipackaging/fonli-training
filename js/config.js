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
  appNameZh: "芳力包装培训系统",
  appNameEn: "Fonli Packaging Training System",
  defaultLang: "zh",   // "zh" | "en"
  version: "1.0.0"
};
