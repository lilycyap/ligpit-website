# Ligpit Website

Premium home decluttering and organizing website for Ligpit, Berlin.  
Built with React + Vite + Tailwind CSS.

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Run locally
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

The development server runs at http://localhost:5173

---

## File Guide — What to Edit

### 1. Service names, prices, descriptions
**`src/data/services.js`**  
Edit `coreServices` and `addOnServices` arrays.  
Changes here update all service cards, the Services page, and any preview sections automatically.

### 2. FAQ content
**`src/data/faqs.js`**  
Edit the `faqs` array. Each item has `q` (question) and `a` (answer).

### 3. Brand colors
**`tailwind.config.js`** → `theme.extend.colors`  
All colors are defined here as tokens: `charcoal`, `beige`, `olive`, `gold`, `teal`.  
Change a color here and it updates everywhere on the site.

### 4. WhatsApp number
Search all files for: `wa.me/491234567890`  
Replace with the real business WhatsApp number.  
Locations: `Home.jsx`, `Pages.jsx` (Contact), `Footer.jsx`

### 5. Calendly booking link
Search all files for: `calendly.com/ligpit/discovery`  
Replace with the real Calendly link.  
Locations: `Home.jsx`, `Services.jsx`, `Pages.jsx` (HowItWorks, Contact), `Footer.jsx`

### 6. Legal pages (Impressum + Privacy Policy)
**`src/pages/Legal.jsx`**  
Both pages are in this file. Each has a ⚠ Developer Note warning box.  
Replace placeholder text with reviewed legal content before publishing.

### 7. Home page copy and sections
**`src/pages/Home.jsx`**  
All home page sections are here. Each section is clearly commented.

### 8. Navigation links
**`src/components/Navbar.jsx`** → `navLinks` array at the top.

### 9. Footer links and contact info
**`src/components/Footer.jsx`**

### 10. Global fonts
**`index.html`** → Google Fonts link  
**`tailwind.config.js`** → `fontFamily`  
Currently: Cormorant Garamond (headings) + Montserrat (body)

---

## Connect the Contact Form

The contact form in `/contact` currently runs `e.preventDefault()` (no submission).  
To activate it, choose one:

**Option A — Formspree (easiest, free tier available)**
```jsx
// In src/pages/Pages.jsx, Contact component:
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  // Remove onSubmit handler
```

**Option B — Netlify Forms**
```jsx
<form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
```

**Option C — Custom backend**
```jsx
// Add a fetch call to your API in the onSubmit handler
const handleSubmit = async (e) => {
  e.preventDefault()
  const formData = new FormData(e.target)
  await fetch('/api/contact', { method: 'POST', body: formData })
}
```

---

## Deploy to Production

**Vercel (recommended)**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Set production domain
vercel --prod
```

Or connect your GitHub repository to Vercel at vercel.com for automatic deployments.

**Netlify**
```bash
# Build the site
npm run build

# Upload the dist/ folder to Netlify
# Or connect GitHub repo at netlify.com
```

For both: the build output is in `/dist`. No server required — it's a static site.

---

## Project Structure

```
ligpit-website/
├── public/
│   └── logo.png                 # Ligpit logo (PNG)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Top navigation
│   │   ├── Footer.jsx           # Site footer
│   │   └── Components.jsx       # Reusable: ServiceCard, FAQItem, PageHeader, etc.
│   ├── data/
│   │   ├── services.js          # ← Edit services and prices here
│   │   └── faqs.js              # ← Edit FAQ content here
│   ├── pages/
│   │   ├── Home.jsx             # Home page (all sections)
│   │   ├── Services.jsx         # Services page
│   │   ├── Pages.jsx            # HowItWorks, About, FAQ, Contact
│   │   ├── Legal.jsx            # Impressum, Privacy Policy
│   │   └── [individual].jsx     # Re-export shims for routing
│   ├── App.jsx                  # Router setup
│   ├── main.jsx                 # React entry point
│   └── index.css                # Global styles + Tailwind
├── index.html                   # HTML entry + SEO + Google Fonts
├── tailwind.config.js           # ← Brand colors and fonts here
├── vite.config.js
├── postcss.config.js
└── package.json
```

---

## Before Publishing Checklist

- [ ] Replace WhatsApp number (`wa.me/491234567890`)
- [ ] Replace Calendly link (`calendly.com/ligpit/discovery`)
- [ ] Complete Impressum with real legal details (reviewed by German legal advisor)
- [ ] Complete Privacy Policy for GDPR compliance
- [ ] Activate contact form (Formspree, Netlify Forms, or custom backend)
- [ ] Add real before-and-after photos with client permission
- [ ] Connect Google Analytics or Plausible if tracking is needed (update Privacy Policy)
- [ ] Set canonical URL in `index.html`
- [ ] Test on mobile (iPhone and Android)
- [ ] Check all links work on the live domain

---

## Brand Reference

| Token | Hex | Use |
|-------|-----|-----|
| charcoal | #2B2B2B | Main text, headers, dark sections |
| beige | #F2EFEA | Page background |
| olive | #6F7A63 | Primary buttons, accents |
| gold | #B8965A | Dividers, hover states, premium details |
| teal | #5B8A7A | Supporting accent, returning-client badge |

Fonts: Cormorant Garamond (headings) · Montserrat (body)

Email: hello@ligpit.com · Instagram: @ligpit.berlin · ligpit.com
