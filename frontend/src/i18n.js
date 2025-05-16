import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Translations
const resources = {
  en: {
    translation: {
      // Common
      "appName": "DYOR.net",
      "login": "Log in",
      "signup": "Sign up",
      "logout": "Log out",
      "password": "Password",
      "email": "Email",
      "remember": "Remember me",
      "forgotPassword": "I forgot my password",
      "notRegistered": "Not registered yet?",
      "goToRegistration": "Go to registration page",
      "create": "Create",
      "save": "Save",
      "cancel": "Cancel",
      "add": "Add",
      "remove": "Remove",
      "edit": "Edit",
      "delete": "Delete",
      "enabled": "Enabled",
      "disabled": "Disabled",
      "status": "Status",
      "details": "Details",
      "manage": "Manage",
      "all": "All",
      "free": "Free",
      "premium": "Premium",
      "subscribe": "Subscribe",

      // Dashboard
      "dashboard": "Dashboard",
      "createStrategy": "Create Strategy",
      "addCoin": "Add Coin",

      // TrendScanner
      "trendScanner": "TrendScanner",
      "typeOfStrategy": "Type of Strategy",
      "indicatorsAndConditions": "Indicators & Conditions",
      "pair": "Pair",
      "timeframe": "Timeframe",
      "signals": "Signals",
      "telegramAlerts": "Telegram Alerts",
      "myStrategies": "My strategies",

      // Strategy Maker
      "strategyMaker": "Strategy Maker",
      "strategies": "Strategies",

      // Cointracker
      "cointracker": "Cointracker",

      // Price Action Scanner
      "priceActionScanner": "Price Action Scanner",
      "filter": "Filter",
      "trend": "Trend",

      // Pumping Now
      "pumpingNow": "Pumping Now",
      "change": "Change",
      "volume": "Volume",
      "action": "Action",

      // My Account
      "myAccount": "My Account",
      "subscription": "Subscription",
      "telegram": "Telegram",
      "notifications": "Notifications",
      "connected": "Connected",
      "disconnected": "Disconnected",

      // Subscriptions
      "subscriptions": "Subscriptions",
      "freePlan": "Free Plan",
      "paidPlan": "Paid Plan",
      
      // New Analysis Pages
      "patterns": "Chart Patterns",
      "trendlines": "Trendlines",
      "divergences": "Divergences",
      "keyLevels": "Key Levels",
      "volumeAnalysis": "Volume Analysis"
    }
  },
  ar: {
    translation: {
      // Common
      "appName": "DYOR.net",
      "login": "تسجيل الدخول",
      "signup": "إنشاء حساب",
      "logout": "تسجيل الخروج",
      "password": "كلمة المرور",
      "email": "البريد الإلكتروني",
      "remember": "تذكرني",
      "forgotPassword": "نسيت كلمة المرور",
      "notRegistered": "غير مسجل بعد؟",
      "goToRegistration": "الذهاب إلى صفحة التسجيل",
      "create": "إنشاء",
      "save": "حفظ",
      "cancel": "إلغاء",
      "add": "إضافة",
      "remove": "إزالة",
      "edit": "تعديل",
      "delete": "حذف",
      "enabled": "مفعّل",
      "disabled": "معطّل",
      "status": "الحالة",
      "details": "تفاصيل",
      "manage": "إدارة",
      "all": "الكل",
      "free": "مجاني",
      "premium": "مميز",
      "subscribe": "اشتراك",

      // Dashboard
      "dashboard": "لوحة التحكم",
      "createStrategy": "إنشاء استراتيجية",
      "addCoin": "إضافة عملة",

      // TrendScanner
      "trendScanner": "ماسح الاتجاهات",
      "typeOfStrategy": "نوع الاستراتيجية",
      "indicatorsAndConditions": "المؤشرات والشروط",
      "pair": "الزوج",
      "timeframe": "الإطار الزمني",
      "signals": "الإشارات",
      "telegramAlerts": "تنبيهات تيليجرام",
      "myStrategies": "استراتيجياتي",

      // Strategy Maker
      "strategyMaker": "صانع الاستراتيجيات",
      "strategies": "الاستراتيجيات",

      // Cointracker
      "cointracker": "متابع العملات",

      // Price Action Scanner
      "priceActionScanner": "ماسح حركة السعر",
      "filter": "تصفية",
      "trend": "الاتجاه",

      // Pumping Now
      "pumpingNow": "العملات المتفجرة حاليًا",
      "change": "التغيير",
      "volume": "الحجم",
      "action": "الإجراء",

      // My Account
      "myAccount": "حسابي",
      "subscription": "الاشتراك",
      "telegram": "تيليجرام",
      "notifications": "الإشعارات",
      "connected": "متصل",
      "disconnected": "غير متصل",

      // Subscriptions
      "subscriptions": "الاشتراكات",
      "freePlan": "الخطة المجانية",
      "paidPlan": "الخطة المدفوعة",
      
      // New Analysis Pages
      "patterns": "أنماط الرسم البياني",
      "trendlines": "خطوط الاتجاه",
      "divergences": "الانحرافات",
      "keyLevels": "المستويات الرئيسية",
      "volumeAnalysis": "تحليل الحجم"
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en', // Default language
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already escapes by default
    },
  });

export default i18n;