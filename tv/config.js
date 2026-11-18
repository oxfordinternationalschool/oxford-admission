// Reception TV sozlamalari. Faqat shu faylni o'zgartirish kifoya.
window.TV_CONFIG = {
  // Google Sheet ID: jadval havolasidagi /d/ va /edit orasidagi qism.
  // Bo'sh qolsa, sahifa demo.js dagi namuna ma'lumotlarni ko'rsatadi.
  SHEET_ID: "",

  // Har bir slayd necha soniya turadi (Sheet'dagi "Sozlamalar" varag'i ustun keladi)
  SLIDE_SECONDS: 12,

  // Ma'lumot har necha daqiqada Sheet'dan qayta o'qiladi
  REFRESH_MINUTES: 5,

  // Ob-havo uchun shahar (Open-Meteo, kalit kerak emas)
  CITY: { name: "Samarqand", lat: 39.6542, lon: 66.9597 },

  // Qabul havolasi (QR kod qr.png fayli ichida; manzil o'zgarsa qr.png ni yangilash kerak)
  ADMISSION_URL: "https://oxford-admission.vercel.app",

  PHONES: ["+998 (93) 339-83-93", "+998 (78) 707-08-80"]
};
