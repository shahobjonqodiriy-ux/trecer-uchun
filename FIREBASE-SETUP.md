# 🔥 FIREBASE SOZLASH (OXIRGI 2 QADAM)

## ⚠️ MUHIM: Bu qadamlarni bajarmaguningizcha ilova ishlamaydi!

---

## 1️⃣ AUTHENTICATION YOQISH

### **Qadamlar:**

1. Firebase console ga o'ting: https://console.firebase.google.com

2. **"Planning With AI"** projectingizni oching

3. Chap menuda **"Build"** ni bosing

4. **"Authentication"** ni tanlang

5. **"Get started"** tugmasini bosing

6. **"Sign-in method"** tabida **"Email/Password"** ni tanlang

7. **Birinchi toggle** (Email/Password)ni **yoqing** (ON)

8. **Save** tugmasini bosing

✅ **Tayyor!** Authentication yoqildi!

---

## 2️⃣ FIRESTORE DATABASE YOQISH

### **Qadamlar:**

1. Chap menuda **"Firestore Database"** ni toping

2. **"Create database"** tugmasini bosing

3. **"Start in test mode"** ni tanlang ⚠️ **MUHIM!**

4. **Next** tugmasini bosing

5. **Location:** `us-central` yoki eng yaqin joy

6. **Enable** tugmasini bosing

7. **1-2 daqiqa kutish...**

### **Firestore Rules o'zgartirish:**

Database ochilgach:

1. Yuqorida **"Rules"** tabini bosing

2. Bu kodni **ko'chirib** qo'ying:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId}/{document=**} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

3. **Publish** tugmasini bosing

✅ **Tayyor!** Firestore sozlandi!

---

## ✅ **HAMMASI TAYYOR!**

Endi ilovani oching va:
1. **Ro'yxatdan o'ting** (email + parol)
2. **Kirish** qiling
3. **Vazifalarni belgilang** ✅
4. **Boshqa qurilmada** login qiling — **ma'lumotlar sinxronlanadi!** 🔄

---

## 🎉 **NATIJA:**

- ✅ MacBook va telefon sinxronlanadi
- ✅ Bir hisobga bir nechta qurilma
- ✅ Real-time sync (darhol yangilanadi)
- ✅ Offline ishlaydi (keyinroq sync qiladi)
- ✅ Ma'lumotlar bulutda xavfsiz

---

**Muvaffaqiyatlar!** 💪🔥
