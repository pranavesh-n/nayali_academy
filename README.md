# Nayali Tamil Academy — Premium Demo Website

A modern, culturally authentic, production-ready website created for **Nayali Tamil Academy (Tamil Tuition)** located in Pallavaram, Chennai.

Crafted by **Pranavesh N** ([pranaveshn.vercel.app](https://pranaveshn.vercel.app)).

---

## 🌟 Pitch Highlights

- **Cultural & Dignified Design**: Deep maroon (`#7A1B28`), turmeric/saffron gold (`#D97706`), jasmine cream (`#FFFDF7`), and leaf green (`#15803D`). Clean geometric SVG Kolam dividers and subtle floating Tamil vowels with complete accessibility (`aria-hidden="true"`).
- **Tamil Typography First**: Native pairing with `Noto Sans Tamil`, `Mukta Malar`, and `Plus Jakarta Sans` with relaxed line-heights (`1.72`) to ensure zero glyph clipping on complex matras and pullis.
- **Bilingual Experience**: Instant one-click toggle between **English** and **தமிழ்** for every single section and form.
- **Mobile-First & High Conversion**:
  - Live Indian Standard Time (IST) **Open Now / Closed** badge.
  - Interactive Demo Booking form with client-side validation that auto-formats a WhatsApp message and deep-links directly to `+91 91761 07775` with celebratory confetti.
  - Floating WhatsApp action button on every screen.
  - Responsive Learning Path: Multi-column flow on desktop transitioning to an un-trapped vertical stepper on mobile.
- **SEO & Schema**: Pre-configured OpenGraph cards and rich `EducationalOrganization` + `LocalBusiness` JSON-LD schema matching Google Maps details.
- **Dark Mode Support**: Seamless toggle between warm cream and deep night-maroon palettes.

---

## 🚀 Quick Start (Local Development)

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚢 Deploying to Vercel

This project is built on Next.js App Router and is 100% backend-free. It can be deployed to Vercel in 60 seconds:

### Option A: Via GitHub (Recommended)
1. Push this folder to your GitHub repository:
   ```bash
   git add .
   git commit -m "feat: Nayali Tamil Academy demo website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/nayali-website.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and click **"Add New Project"**.
3. Import your GitHub repository.
4. Click **"Deploy"** (all build presets are automatically detected).

### Option B: Via Vercel CLI
```bash
npx vercel
```

---

## 📝 How to Replace Placeholder Content

All business data and bilingual copy are centralized in clean, typed files for quick edits without touching complex component markup.

### 1. Update Contact Info & Location
Edit [`src/lib/dictionary.ts`](file:///C:/VIT/nayali_website/src/lib/dictionary.ts):
```typescript
export const BUSINESS_INFO = {
  name: 'Nayali Tamil Academy',
  phone: '+91 91761 07775',
  phoneRaw: '919176107775', // WhatsApp & click-to-call target
  address: 'Block-14, Dharga Rd, Zamin Pallavaram, Dargah Colony, Pallavaram, Chennai, Tamil Nadu 600043',
  googleMapsUrl: '...',
  ...
};
```

### 2. Update Tuition Fees & Pricing Plans
In [`src/lib/dictionary.ts`](file:///C:/VIT/nayali_website/src/lib/dictionary.ts) under `pricing.plans`:
- Replace `'₹ XXX / month'` in [`src/components/Pricing.tsx`](file:///C:/VIT/nayali_website/src/components/Pricing.tsx) with the approved monthly rates (e.g., `₹ 1,500 / month`).
- Adjust class frequencies or batch sizes as per academy policy.

### 3. Replace Teacher Portrait (Anitha Mam)
1. Place a high-resolution photo in `public/images/anitha-mam.jpg`.
2. In [`src/components/TeacherCard.tsx`](file:///C:/VIT/nayali_website/src/components/TeacherCard.tsx), replace the placeholder avatar container with Next.js `Image`:
   ```tsx
   import Image from 'next/image';
   // Replace the placeholder div with:
   <Image
     src="/images/anitha-mam.jpg"
     alt="Anitha Mam - Lead Educator"
     width={176}
     height={176}
     className="rounded-[22px] object-cover"
     priority
   />
   ```

### 4. Replace Testimonials with Real Google Reviews
In [`src/lib/dictionary.ts`](file:///C:/VIT/nayali_website/src/lib/dictionary.ts), locate `testimonials.items`:
- Update `name`, `quoteEn`, `quoteTa`, and `locationEn` with genuine reviews from the 78 Google reviews with the owner's consent.

---

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations & Delight**: Framer Motion & Canvas Confetti
- **Fonts**: Google Fonts (`Noto Sans Tamil`, `Mukta Malar`, `Plus Jakarta Sans`)
- **Credits**: Designed by Pranavesh N ([pranaveshn.vercel.app](https://pranaveshn.vercel.app))
