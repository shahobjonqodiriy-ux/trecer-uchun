# 📱 Kundalik Tracker - Hayot Boshqaruv Tizimi

**Sizning shaxsiy hayot boshqaruv ilovangiz** - kunlik vazifalar, maqsadlar va vaqt boshqaruvi uchun to'liq offline PWA (Progressive Web App).

---

## ✨ IMKONIYATLAR

### 📊 **Kunlik Tracking**
- ✅ 18 ta kunlik vazifa (04:30 dan 22:00 gacha)
- 📈 Real vaqtda statistika va foiz ko'rsatkichi
- 🔥 Streak (ketma-ket kunlar) hisobi
- 🎨 Vizual progress bar

### 📅 **Oylik Kalendar**
- 🟢 Yashil: 80%+ bajarilgan (Ajoyib)
- 🟡 Sariq: 50-79% bajarilgan (Yaxshi)
- 🔴 Qizil: 50% dan kam (Kam)
- 🟣 Pushti: Yakshanba (Dam olish)

### 🔔 **Avtomatik Eslatmalar**
- **04:30** - Yaxshi tong! Bugun yangi imkoniyatlar kuni 🌅
- **12:00** - Ertalabki blok tugadi. Natijalarni belgilang ✅
- **18:00** - Kechki sayr vaqti. Havo oling! 🌆
- **21:15** - 15 daqiqadan keyin uxlash vaqti. Bugungi natijani belgilang 🌙

### 💪 **Motivatsiya Tizimi**
- 🏆 3 kun ketma-ket → "Ajoyib boshlanish!"
- 🔥 7 kun ketma-ket → "Bir hafta!"
- 👑 30 kun ketma-ket → "Bir oy! Siz g'olibsiz!"

### 📱 **Offline Ishlash**
- ✅ Internet kerak emas
- ✅ Telefon ekraniga o'rnatiladi
- ✅ Ilova kabi ishlaydi
- ✅ Barcha ma'lumotlar telefonda saqlanadi

---

## 🚀 O'RNATISH (Android va iPhone)

### **1-QADAM: Fayllarni server yoki GitHub Pages ga yuklash**

#### **Variant A: GitHub Pages (Bepul va oson)**
```bash
# Reponi clone qiling
git clone https://github.com/shahobjonqodiriy-ux/trecer-uchun.git
cd trecer-uchun

# GitHub Pages ni yoqish:
# 1. GitHub da repo sahifasiga o'ting
# 2. Settings → Pages
# 3. Source: Deploy from a branch
# 4. Branch: main / root
# 5. Save
# 6. 2-3 daqiqadan keyin ilova tayyor!
# Link: https://shahobjonqodiriy-ux.github.io/trecer-uchun/
```

#### **Variant B: Lokal Server (Test uchun)**
```bash
# Python bilan:
python -m http.server 8000

# Yoki Node.js bilan:
npx http-server -p 8000

# Keyin telefonda oching: http://kompyuter-ip:8000
```

---

### **2-QADAM: Telefonda ochish**

#### **Android (Chrome):**
1. Chrome brauzerini oching
2. Ilovangiz manzilini oching (masalan: `https://shahobjonqodiriy-ux.github.io/trecer-uchun/`)
3. Yuqorida **"📱 Ilovani o'rnatish"** tugmasi paydo bo'ladi
4. Tugmani bosing → **"O'rnatish"** → **"Qo'shish"**
5. ✅ Ilova telefon ekraniga qo'shildi!

#### **iPhone (Safari):**
1. Safari brauzerini oching
2. Ilovangiz manzilini oching
3. Pastdagi **"Share"** (📤) tugmasini bosing
4. **"Add to Home Screen"** ni tanlang
5. **"Add"** ni bosing
6. ✅ Ilova telefon ekraniga qo'shildi!

---

### **3-QADAM: Bildirishnomalarni yoqish**

#### **Android:**
1. Ilovani oching
2. Brauzer "Show notifications?" deb so'raydi
3. **"Allow"** ni bosing
4. ✅ Bildirishnomalar yoqildi!

#### **iPhone:**
1. **Settings** → **Safari** → **Notifications**
2. Ilovangiz nomini toping
3. **"Allow Notifications"** ni yoqing
4. ✅ Bildirishnomalar yoqildi!

---

## 📋 KUNLIK JADVAL

### **🌅 ERTALAB (04:30-07:00)**
- 04:30 da uyg'onish
- Ertalabki tartib (tahorat, nonushta)
- Ertalabki sayr (1 soat) 🚶‍♂️
- Kun rejasini ko'rish

### **💼 ISH BLOKI #1 (07:00-12:00)**
- Mijozlar bilan aloqa (30 min)
- Video montaj (3 soat)
- Instagram kontent/story (30 min)
- Yangi mijoz qidirish (1 soat)

### **🍽️ TUSHLIK (12:00-13:00)**
- Tushlik va dam olish

### **💼 ISH BLOKI #2 (13:00-17:00)**
- Video montaj davomi (3 soat)
- Portfolio yangilash (30 min)
- Mijozlar bilan follow-up (30 min)

### **🍽️ KECHKI OVQAT (17:00-18:00)**
- Kechki ovqat va dam olish

### **🚶‍♂️ KECHKI SAYR (18:00-19:00)**
- Kechki sayr (1 soat) 🌆

### **📚 VIDEOGRAFLIK KURSI (19:00-21:30)**
- Kurs darsi (2.5 soat)

### **🌙 KECHKI TARTIB (21:30-22:00)**
- Ertangi kun rejasi
- Bugungi natijani belgilash
- 22:00 da uxlash

### **📅 DAM OLISH**
- **Yakshanba:** To'liq dam olish kuni (vazifalar yo'q)

---

## 💡 FOYDALANISH

### **Har kuni:**
1. ✅ Vazifani bajarganingizda **checkbox**ni belgilang
2. 📊 **Statistika** avtomatik yangilanadi
3. 🔥 **Streak** (ketma-ket kunlar) avtomatik hisoblanadi
4. 📅 **Kalendar**da bugungi kun avtomatik ranglangan

### **Streak tizimi:**
- **50%+ bajarilsa** → Streak davom etadi
- **50% dan kam** → Streak yangilanadi
- **Yakshanba** → Hisoblanmaydi (dam olish)

### **Kalendar ranglari:**
- **Yashil:** 80%+ (Ajoyib!)
- **Sariq:** 50-79% (Yaxshi)
- **Qizil:** 50% dan kam (Kam)
- **Pushti:** Bugun
- **Pushti border:** Yakshanba (Dam olish)

---

## 🔧 TEXNIK MA'LUMOTLAR

### **Texnologiyalar:**
- HTML5
- CSS3 (Gradient, Animations)
- Vanilla JavaScript
- Service Worker (Offline)
- LocalStorage (Ma'lumot saqlash)
- Notification API

### **Hajmi:**
- Jami: ~50-100KB
- Juda yengil va tez

### **Qo'llab-quvvatlash:**
- ✅ Android (Chrome, Firefox)
- ✅ iPhone (Safari)
- ✅ Offline ishlaydi
- ✅ Ma'lumotlar telefonda saqlanadi

### **Xotira:**
- Ma'lumotlar: LocalStorage (5-10MB)
- Har kuni: ~1KB
- 1 yil: ~365KB

---

## 🐛 MUAMMOLARNI HAL QILISH

### **Bildirishnoma kelmayapti?**
1. Telefon sozlamalarida bildirishnomalar yoqilganini tekshiring
2. Brauzer sozlamalarida ruxsat berilganini tekshiring
3. Telefon "Do Not Disturb" rejimida emasligini tekshiring

### **Ilova o'rnatilmayapti?**
1. HTTPS (https://) manzil ishlatilganini tekshiring (HTTP emas)
2. Brauzerdan cache tozalang
3. Telefonga qayta yuboring

### **Ma'lumotlar yo'qoldi?**
1. Brauzer cache/ma'lumotlarni o'chirgan bo'lishi mumkin
2. Telefon xotirasi to'lgan bo'lishi mumkin
3. Boshqa brauzerda ochgan bo'lishingiz mumkin

### **Offline ishlamayapti?**
1. Kamida bir marta internet bilan ochish kerak (birinchi marta)
2. Service Worker o'rnatilganini tekshiring (Console da)

---

## 📈 3 OYLIK MAQSAD

### **1-OY: Moliyaviy zaminni mustahkamlash**
- Maqsad: 500$/oy (hozir 300$)
- Strategiya: Mijoz oshirish, kontent ko'paytirish

### **2-OY: Ish oqimini avtomatlashtirish**
- Maqsad: 700$/oy
- Strategiya: Tezroq montaj, portfolio kuchliroq

### **3-OY: Qarzdan chiqish va o'sish**
- Maqsad: 900$/oy
- Strategiya: Narx oshirish, premium mijozlar

---

## 🎯 MUVAFFAQIYAT SIRLARI

### **1. Har kuni ochib ko'ring**
- Telefon ekraniga qo'ying
- Har kuni ko'ring va belgilang

### **2. 50% dan kam tushmaslik**
- Kam bajarilsa → Streak yangilanadi
- 50%+ → Streak davom etadi

### **3. Yakshanba dam oling**
- To'liq dam olish
- Keyingi hafta uchun yangi kuch

### **4. Motivatsiya xabarlariga e'tibor**
- Ilovada yuqorida ko'rsatiladi
- Sizni ilhomlantiradi

---

## 📞 QO'LLAB-QUVVATLASH

Muammo yoki savol bo'lsa:
- GitHub Issues: https://github.com/shahobjonqodiriy-ux/trecer-uchun/issues

---

## 📄 LITSENZIYA

Bu loyiha shaxsiy foydalanish uchun yaratilgan.

---

## 🙏 MINNATDORCHILIK

Bu ilova sizning hayotingizni yaxshilash uchun maxsus yaratildi.

**Muvaffaqiyatlar tilaymiz! 💪🔥**

---

**Versiya:** 1.0.0  
**Sana:** 29-May-2026  
**Boshlash sanasi:** 1-Iyun-2026
