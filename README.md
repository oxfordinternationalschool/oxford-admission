# Oxford International School — qabul arizasi

Ota-onalar uchun 5 bosqichli qabul arizasi sahifasi (UZ / RU / EN).
Arizalar Google Apps Script orqali "Qabul arizalari" Google Sheets jadvaliga yoziladi.

- `index.html` — sahifa (Apps Script havolasi `API_URL` qatorida)
- `logo.png`, `maktab.jpg` — logotip va maktab binosi rasmi

Statik sayt: Vercel'da Framework Preset "Other", build buyrug'i kerak emas.

## Reception TV (`/tv/`)
Reception televizori uchun avtomatik slayd-shou: `https://oxford-admission.vercel.app/tv/`.
Ma'lumotlar Google Sheet'dan olinadi (`tv/config.js` dagi `SHEET_ID`). Sheet ulanmagan bo'lsa, `tv/demo.js` namunasi ko'rsatiladi.
