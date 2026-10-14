# Ethixweb India

India-first redesign of [ethixweb.com](https://ethixweb.com) — a full-stack rebuild with premium UI, a working enquiry form, and a protected admin dashboard. Built with React + Vite + Tailwind on the frontend and Node.js + Express + MongoDB on the backend.

**Live:** https://ethixweb-in.netlify.app
**Admin:** https://ethixweb-in.netlify.app/admin — password: `admin123`
**Backend API:** https://ethixweb-api.onrender.com
**Repo:** https://github.com/vishanksharma/ethixweb-india

---

## Tech Stack

| Layer | Choice |
|---|---|
| **Frontend** | React 19 + Vite + React Router 7 |
| **Styling** | Tailwind CSS v4 + CSS variables for theming |
| **Backend** | Node.js + Express 4 |
| **Database** | MongoDB Atlas + Mongoose 8 |
| **Validation** | Zod (shared between client and server) |
| **Auth** | HMAC-signed httpOnly cookies, `crypto.timingSafeEqual` |
| **Rate limiting** | express-rate-limit |
| **Deployment** | Netlify (frontend) + Render (backend) + MongoDB Atlas (database) |

---

## Features

### Frontend
- **Home** — Hero, 8 services, India operations network, stats, why-us, testimonials, CTA
- **Services** — Detailed service breakdown + engagement rhythm
- **About** — Story, milestones timeline, team roles, values, offices, FAQ accordion, comparison table
- **Contact** — Working enquiry form with real-time validation, success/error states
- **Admin** — Leads dashboard with stats, search, filter, sort, notes, CSV export
- **Dark mode** — Full theme with localStorage persistence + OS detection + anti-flash script
- **Mobile-first** — Two-tier nav with services dropdown + animated mobile drawer
- **Animations** — Scroll-reveal via IntersectionObserver, respects `prefers-reduced-motion`
- **Accessibility** — Focus rings, aria labels, semantic HTML, keyboard nav

### Backend
- **Enquiry API** — `POST /api/enquiry` saves leads to MongoDB
- **Spam protection** — Honeypot + time-trap + rate limit + duplicate guard (4 layers)
- **Admin auth** — HMAC-signed httpOnly cookie, timing-safe comparison
- **Admin API** — List, filter, search, update status, add notes, delete leads
- **Stats endpoint** — MongoDB aggregation for status counts
- **Error handling** — Malformed JSON, payload limits, validation errors, 404, 500
- **Security** — Helmet headers, strict CORS whitelist, secrets in env vars only

---

## What Makes This India-Specific

The original ethixweb.com targets US businesses. This redesign reframes the entire site for India across four layers.

### 1. Positioning and audience
- **"US First Operations Focus"** → **"India-first operations"**
- **Seattle / Utah / New York / Canada / UK** → **Bengaluru / Mumbai / Delhi NCR / Pune / Hyderabad / Chennai**
- Home marquee shows **14 cities** including tier-2 and tier-3 markets — Surat, Jaipur, Kochi, Indore, Ahmedabad, Kolkata
- Case study metrics in **₹ (₹1.2 Cr GMV)**, not dollar equivalents

### 2. Money and pricing
- **INR budget bands** on the enquiry form — ₹50k, ₹50k–₹1L, ₹1L–₹5L, ₹5L+
- **GST invoicing** mentioned on About, Contact and footer
- **UPI, Razorpay, net-banking, NEFT** listed as payment methods
- Trust strip: **GST registered · MSME / Udyam · Startup India · Make in India 🇮🇳**

### 3. Communication channels
- **WhatsApp is the primary CTA** everywhere — hero, top bar, footer, contact page, final CTA
- **IST business hours** ("Mon–Sat, 10:00–19:00 IST") displayed on every page
- **Hindi + English support** called out on About
- **Hinglish-friendly copy** — "Let's get you more booked jobs", not "Submit your query"
- Live IST clock on city cards

### 4. Trust signals
- **Phone validation** uses the real Indian format — optional `+91`, `[6-9]` prefix, 10 digits
- **Testimonials** with real Indian contexts — Surat textile manufacturer, Bengaluru dental chain, Mumbai D2C brand
- **FAQ** answers real Indian founder questions — "Do you work outside metros?", "GST-compliant invoices?", "Payment terms?"
- **Recognitions** — GST, MSME/Udyam, Startup India badges

### 5. Performance for Indian networks
Most Indian users are on 4G on mid-range Android phones. Every technical decision assumes this:
- Self-hosted fonts (no Google Fonts CDN request)
- Zero third-party JS in the critical path
- CSS-only animations (no Framer Motion / GSAP)
- Inline SVG icons (no icon library bundle)
- `content-visibility: auto` on below-fold sections
- Sub-150KB hero assets

### 6. Visual language
Deliberately **avoided over-Indianising** — no saffron overload, mandalas, or Devanagari everywhere. That would look like an Indian site made for foreigners. Instead:
- **Ethixweb red** stays the primary brand colour
- **Subtle tricolor accents** — a 3-pixel bar on dark sections, small 🇮🇳 in trust chips
- **India map outline** in the About hero visual — abstract, not literal
- Premium, world-class look that happens to be Indian

---

## What I Improved Over the Current Site

| # | Original | This version |
|---|---|---|
| 1 | US-targeted positioning | India-first positioning throughout |
| 2 | No mobile navigation drawer | Full mobile drawer with sections + body scroll lock |
| 3 | No dark mode | Full dark mode with anti-flash script |
| 4 | Static city list | Live IST clock per city |
| 5 | Generic "Contact us" CTA | WhatsApp-first CTAs |
| 6 | No visible process | 4-step process with arrows |
| 7 | No FAQ | 6-question accordion with real Indian founder questions |
| 8 | No timeline or story | Founded-2020 → present milestone timeline |
| 9 | No team section | Role-based team cards (no fake names) |
| 10 | No comparison table | "Ethixweb vs. typical agency" |
| 11 | Missing INR pricing | INR budget bands |
| 12 | No trust signals | GST / MSME / Startup India / Make in India |
| 13 | No admin dashboard | Full leads dashboard with stats, search, notes, CSV |
| 14 | No lead status pipeline | Status pipeline (New → Contacted → Won / Lost) |
| 15 | No spam protection mentioned | 4-layer spam protection |

---

## PageSpeed Insights

**Live URL:** https://ethixweb-in.netlify.app

| Platform | Score |
|---|---|
| **Mobile** | 88/ 100 |
| **Desktop** | 98 / 100 |

📊 **[View full results and screenshots on Google Drive](https://drive.google.com/drive/folders/YOUR-FOLDER-ID)**

### Test Details
- Tool: [pagespeed.web.dev](https://pagespeed.web.dev)
- Date: [aaj ki date]
- Mobile: simulated Slow 4G (Moto G Power)
- Desktop: simulated Cable
- Chrome incognito to avoid extension interference

### Notes
The mobile score reflects a Vite SPA with code-split route boundaries and prerendered hero. Further improvements would involve full SSG (Next.js/Astro) for the marketing pages.

---

## Project Structure

```
ethixweb-india/
├── README.md
├── screenshots/
│   ├── pagespeed-mobile.png
│   └── pagespeed-desktop.png
├── ethixweb-frontend/
│   ├── public/
│   │   ├── favicon.webp
│   │   ├── logo.webp
│   │   ├── logo-e.webp
│   │   ├── spiderweb.svg
│   │   └── _redirects
│   ├── src/
│   │   ├── components/
│   │   │   ├── Logo.jsx
│   │   │   ├── Reveal.jsx
│   │   │   ├── SpiderWeb.jsx
│   │   │   └── ThemeToggle.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Admin.jsx
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── .env.example
│   ├── index.html
│   ├── netlify.toml
│   ├── package.json
│   └── vite.config.js
└── ethixweb-server/
    ├── config/
    │   └── db.js
    ├── lib/
    │   ├── cookie.js
    │   └── ratelimit.js
    ├── middleware/
    │   ├── auth.js
    │   └── errorHandler.js
    ├── models/
    │   └── Lead.js
    ├── routes/
    │   ├── admin.js
    │   └── enquiry.js
    ├── validators/
    │   └── lead.js
    ├── .env.example
    ├── package.json
    └── server.js
```

---

## Local Development

### Prerequisites
- Node.js 20+
- MongoDB Atlas account (free M0 cluster) or local MongoDB

### Backend

```bash
cd ethixweb-server
npm install
cp .env.example .env
# Fill in MONGODB_URI, ADMIN_PASSWORD, ADMIN_SECRET, FRONTEND_URL
npm run dev
```

Server runs on `http://localhost:5000`.

### Frontend

```bash
cd ethixweb-frontend
npm install
cp .env.example .env
# Set VITE_API_URL=http://localhost:5000
npm run dev
```

App runs on `http://localhost:5173`.

---

## Environment Variables

### Backend (`.env`)

| Variable | Required | Example |
|---|---|---|
| `NODE_ENV` | Yes | `development` or `production` |
| `PORT` | No | `5000` |
| `MONGODB_URI` | Yes | `mongodb+srv://user:pass@cluster.mongodb.net/ethixweb` |
| `ADMIN_PASSWORD` | Yes | `admin123` |
| `ADMIN_SECRET` | Yes | 32+ char random string |
| `FRONTEND_URL` | Yes | `http://localhost:5173` (or Netlify URL) |

Generate `ADMIN_SECRET`:
```bash
node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
```

### Frontend (`.env`)

| Variable | Required | Example |
|---|---|---|
| `VITE_API_URL` | Yes | `http://localhost:5000` (dev) or Render URL (prod) |

**Never commit `.env` files.** Both `.gitignore` files include them by default.

---

## API Reference

### Public

#### `POST /api/enquiry`
Submit a new enquiry from the contact form.

**Body:**
```json
{
  "name": "Rahul Sharma",
  "email": "rahul@example.com",
  "phone": "9876543210",
  "company": "Sharma Textiles",
  "service": "web",
  "budget": "1L-5L",
  "message": "Need a website for our textile business.",
  "website": "",
  "renderedAt": 1730000000000
}
```

**Responses:**
- `201` — `{ ok: true, id: "..." }`
- `400` — Validation error with `fields` object
- `429` — Rate limit exceeded
- `500` — Server error

**Spam protection:**
- **Honeypot** — `website` field must be empty
- **Time-trap** — `renderedAt` must be ≥ 3s before submit time
- **Rate limit** — 6 requests per 10 minutes per IP
- **Duplicate guard** — Same email within 24h silently accepted (not saved)

### Admin

All endpoints require the `admin_session` cookie.

| Endpoint | Method | Purpose |
|---|---|---|
| `/api/admin/login` | POST | Body: `{ "password": "..." }` → sets cookie |
| `/api/admin/logout` | POST | Clears session cookie |
| `/api/admin/verify` | GET | Returns `{ ok: true }` if session valid |
| `/api/admin/leads` | GET | Supports `?status=&search=&sort=` |
| `/api/admin/leads/:id` | PATCH | Body: `{ "status"?: "...", "notes"?: "..." }` |
| `/api/admin/leads/:id` | DELETE | Deletes the lead |
| `/api/admin/stats` | GET | Counts grouped by status |

---

## Security Notes

- Admin password is stored in an environment variable, **never in the database**
- Session cookies are **HMAC-SHA256 signed**, `HttpOnly`, `Secure` (prod), `SameSite=None`
- **Timing-safe comparison** (`crypto.timingSafeEqual`) prevents timing attacks
- **Rate limiting** on both enquiry (6/10min) and admin login (10/15min)
- **Input validation** via Zod on both client and server
- **CORS** is a strict origin whitelist, not `*`
- **Mongoose schema** enforces types, enums, and max-lengths at the database layer
- **No NoSQL injection** — Mongoose parameterizes queries

---

## Admin Access

| Field | Value |
|---|---|
| URL | https://ethixweb-in.netlify.app/admin |
| Password | `admin123` (demo — change in production) |

Dashboard supports:
- **Stats cards** — Total, New, Contacted, Won, Lost (click to filter)
- **Search** — name, email, phone, company, message
- **Filter** — by status
- **Sort** — newest, oldest, by status
- **CSV export** — filter-aware
- **Expandable rows** — full message, notes, quick actions
- **Quick actions** — Email, Call, WhatsApp, Copy email, Delete
- **Notes** — persistent per-lead, saved to MongoDB

---

## Deployment

### Backend — Render
1. Push repo to GitHub
2. Render → **New Web Service** → connect repo
3. **Root Directory:** `ethixweb-server`
4. **Build Command:** `npm install`
5. **Start Command:** `npm start`
6. Add all env vars from `.env.example`
7. Deploy

### Frontend — Netlify
1. Run `npm run build` in `ethixweb-frontend`
2. Copy `netlify.toml` and `public/_redirects` into `dist/`
3. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
4. Drag and drop the `dist/` folder
5. Rename site to `ethixweb-in`

**Note:** Backend's `FRONTEND_URL` env var must match the Netlify URL exactly (no trailing slash) and the backend must be redeployed after any change.

---

## Notes for Reviewers

- **Static by default.** Marketing content (services, testimonials, cities, stats) is static because it changes rarely. Only the enquiry form and admin dashboard are dynamic.
- **Admin is shared-secret**, not user-based. The brief asked for a "protected /admin page", not a user management system.
- **MongoDB Atlas free tier** is used. Connection is cached across invocations via `global.mongoose` to avoid exhausting connection limits.
- **Rate limiting is in-process.** If scaled to multiple instances, would upgrade to Redis-backed rate limiting.
- **No third-party analytics.** Adding GA4 or Meta Pixel would harm PageSpeed and isn't part of the brief.
- **Render free tier sleeps after 15 minutes of inactivity.** First request after idle takes 30-60 seconds.

---

## License

Submitted as a candidate assessment for Ethixweb. Not licensed for production use.
