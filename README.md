# Ligpit Website

A calm, founder-led home and office cleaning website for Ligpit (Berlin),
built with React + Vite + Tailwind CSS.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`).

## Build

```bash
npm run build
```

Output goes to `dist/`.

## Deploying to Netlify

1. Push this project to a Git repository (GitHub/GitLab/etc.), or drag the
   `dist/` folder into Netlify's manual deploy.
2. Build command: `npm run build`
3. Publish directory: `dist`

### Netlify Forms setup

The contact form (`src/pages/Contact.jsx`) is wired for **Netlify Forms**:

- `name="ligpit-inquiry"`, `method="POST"`, `data-netlify="true"`
- A hidden `form-name` input
- A honeypot field (`bot-field`) for spam protection
- A static mirror of the form's fields lives in `public/forms.html` so
  Netlify's build-time scanner can detect the form (required for SPAs)

After deploying:

1. Go to **Site settings → Forms** in the Netlify dashboard and confirm
   `ligpit-inquiry` is listed.
2. Go to **Forms → Settings & notifications → Add notification → Email
   notification**, and set it to send to **hello@ligpit.com**.
3. If you change the fields in `Contact.jsx`, update `public/forms.html`
   to match (same field names), so Netlify keeps tracking them correctly.

### Placeholders still needing completion after deployment

- `src/pages/legal/Privacy.jsx`, Section 6 (Kontaktformular) and Section
  10 (Hosting): replace the `[Insert final Netlify provider details / DPA
  details ...]` placeholders with the final Netlify legal entity / DPA
  information once available.
- Confirm the favicon (`public/favicon.png`) and `og-image.jpg` referenced
  in `index.html` exist in `public/` before going live.

## Recommended Ligpit workflow

1. A client submits the inquiry form, or contacts Ligpit directly via
   WhatsApp.
2. Lily reviews the inquiry personally.
3. Lily replies using the client's preferred contact method.
4. If the inquiry is a serious lead, it is added to the **Ligpit Client
   Inquiry Tracker** (a Google Sheet).
5. Estimate and scope are confirmed manually with the client.
6. The booking is confirmed by message or email.
7. Payment happens after the service, by cash or bank transfer, unless
   otherwise agreed in advance.

No CRM, booking app, payment system, or customer account system is used
at this stage — communication runs through **WhatsApp Business** and
**hello@ligpit.com**, with the Google Sheet as the only tracking tool.
