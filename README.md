# SV LearnLogic Pvt. Ltd. – Official Corporate Web Portal

> **Build Skills. Build Careers.**  
> *Learn • Logic • Lead*

The official, production-ready corporate web portal for **SV LearnLogic Pvt. Ltd.**, engineered to compete visually with top-tier international SaaS and EdTech leaders (Stripe, Linear, Vercel). The platform delivers high-performance technical curricula, institutional solutions, enterprise upskilling programs, and LMS platform showcase.

---

## 1. Verified Corporate Information & Contact Details

- **Company Name**: SV LearnLogic Pvt. Ltd.
- **Tagline**: *Build Skills. Build Careers.*
- **Motto**: *Learn • Logic • Lead*
- **Official General Email**: [`svlearnlogic@gmail.com`](mailto:svlearnlogic@gmail.com)
- **Business & Partnerships Contact (Suhana)**: [`svsuhanalearnlogic@gmail.com`](mailto:svsuhanalearnlogic@gmail.com)
- **Official Contact Number**: [`+91 9356172197`](tel:+919356172197)
- **Direct WhatsApp Chat**: [Chat on WhatsApp (+91 9356172197)](https://wa.me/919356172197?text=Hello%20SV%20LearnLogic%20Team%2C%20I%20would%20like%20to%20enquire%20about%20your%20technical%20programs%20and%20institutional%20solutions.)

---

## 2. Technology Stack & Engineering Architecture

- **Core Framework**: [Next.js 14+](https://nextjs.org/) (App Router, React Server Components)
- **Language**: [TypeScript](https://www.typescriptlang.org/) (Strict Mode)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom dark navy palette, neon accents, and radial glowing filters
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms & Validation**: [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/)
- **Animation**: [Framer Motion](https://www.framer.com/motion/)
- **API & Backend**: Next.js Server Route Handler (`/api/enquiry`) with spam honeypot, input sanitization, dynamic recipient routing, and webhook dispatcher.

---

## 3. Project Directory Structure

```
SV_LearnLogic/
├── .env.example              # Environment variables template
├── .env.local                # Local environment overrides
├── .gitignore
├── next.config.mjs           # Next.js optimization configuration
├── package.json
├── postcss.config.js
├── tailwind.config.ts        # Custom tech-glow theme & dark navy palette
├── tsconfig.json
├── public/
│   ├── images/
│   │   └── logo.png          # Official company logo mark
│   ├── icons/
│   └── brand/
└── src/
    ├── app/
    │   ├── api/
    │   │   └── enquiry/
    │   │       └── route.ts  # Server-side validation, routing & enquiry API
    │   ├── about/
    │   │   └── page.tsx      # Company story, vision, mission, philosophy
    │   ├── contact/
    │   │   └── page.tsx      # Multi-purpose contact & enquiry hub
    │   ├── lms/
    │   │   └── page.tsx      # SV LearnLogic LMS Advance product showcase
    │   ├── privacy/
    │   │   └── page.tsx      # Privacy policy
    │   ├── programs/
    │   │   ├── page.tsx      # Programs overview catalog
    │   │   ├── data-science/ # Dedicated Data Science & ML curriculum
    │   │   ├── generative-ai/# Dedicated GenAI & Agentic Systems track
    │   │   ├── java-dsa/     # Dedicated Java DSA 17-topic program
    │   │   ├── java-full-stack/ # Dedicated Enterprise Java Full Stack track
    │   │   └── python-dsa/   # Dedicated Python DSA interview bootcamp
    │   ├── services/
    │   │   └── page.tsx      # 10 Core Services detailed breakdown
    │   ├── solutions/
    │   │   ├── colleges/     # College & University partnerships landing page
    │   │   └── corporate/    # Corporate workforce upskilling landing page
    │   ├── terms/
    │   │   └── page.tsx      # Terms and conditions
    │   ├── globals.css       # Tailwind directives & glow backgrounds
    │   ├── layout.tsx        # Global shell with Navbar, Footer & WhatsApp
    │   ├── not-found.tsx     # Custom branded 404 page
    │   ├── page.tsx          # Homepage with all 12 key sections
    │   ├── robots.ts         # Dynamic robots.txt
    │   └── sitemap.ts        # Dynamic XML sitemap
    ├── components/
    │   ├── brand-logo.tsx    # High-resolution scalable vector brand logo
    │   ├── enquiry-form.tsx  # Interactive validated enquiry form component
    │   ├── footer.tsx        # Mega footer with verified contact details
    │   ├── navbar.tsx        # Sticky responsive navigation with desktop dropdowns
    │   ├── program-detail-view.tsx # Reusable rich curriculum & project template
    │   ├── whatsapp-button.tsx     # Floating WhatsApp pulse trigger
    │   └── home/
    │       ├── HeroSection.tsx
    │       ├── CompanyIntroSection.tsx
    │       ├── FlagshipProgramsSection.tsx
    │       ├── WhyChooseSection.tsx
    │       ├── CollegeSolutionsSection.tsx
    │       ├── CorporateTrainingSection.tsx
    │       ├── GenAiShowcaseSection.tsx
    │       ├── LmsShowcaseSection.tsx
    │       ├── ServicesGridSection.tsx
    │       ├── ImpactSection.tsx
    │       ├── TestimonialsSection.tsx
    │       └── FinalCtaSection.tsx
    ├── config/
    │   └── site.ts           # Central source-of-truth configuration
    ├── lib/
    │   └── utils.ts          # Utility helpers (cn, formatters)
    └── types/
        └── index.ts          # TypeScript type definitions
```

---

## 4. Local Development & Installation Instructions

### Prerequisites
- Node.js version 18.18+ or 20.x+
- npm version 9+ (or pnpm / yarn)

### Step 1: Clone or Navigate to the Repository
```bash
cd /Users/pstmac/Desktop/SV_LearnLogic
```

### Step 2: Install Dependencies
```bash
npm install
```

### Step 3: Configure Environment Variables
Copy `.env.example` to `.env.local`:
```bash
cp .env.example .env.local
```

### Step 4: Run the Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### Step 5: Verify Production Build
```bash
npm run build
npm run start
```

---

## 5. Environment Variables Documentation

All contact details and backend credentials are fully configurable via environment variables:

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_APP_URL` | Canonical public domain of the website | `https://svlearnlogic.com` |
| `NEXT_PUBLIC_OFFICIAL_EMAIL` | Display email for general student inquiries | `svlearnlogic@gmail.com` |
| `NEXT_PUBLIC_BUSINESS_EMAIL` | Display email for business / Suhana | `svsuhanalearnlogic@gmail.com` |
| `NEXT_PUBLIC_OFFICIAL_PHONE` | Display and clickable telephone link | `+91 9356172197` |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | Target number for WhatsApp direct link | `+919356172197` |
| `OFFICIAL_EMAIL` | Server-side recipient for student inquiries | `svlearnlogic@gmail.com` |
| `BUSINESS_EMAIL` | Server-side recipient for corporate/college inquiries | `svsuhanalearnlogic@gmail.com` |
| `ENQUIRY_WEBHOOK_URL` | Optional external webhook (Slack/Zapier/CRM) | None |

---

## 6. GitHub Repository Setup Instructions

To push this codebase to your GitHub organization or account:

```bash
# Initialize git if not already present
git init

# Stage all project files
git add .

# Create the initial commit
git commit -m "feat: complete production release of SV LearnLogic corporate portal"

# Create a main branch
git branch -M main

# Add your GitHub remote repository
git remote add origin https://github.com/<your-organization>/sv-learnlogic-website.git

# Push to GitHub
git push -u origin main
```

---

## 7. Vercel Deployment Instructions

The application is natively optimized for [Vercel](https://vercel.com):

1. **Import via Vercel Dashboard**:
   - Log into [vercel.com](https://vercel.com).
   - Click **Add New Project** and select your GitHub repository `sv-learnlogic-website`.
   - Vercel automatically detects Next.js framework settings.

2. **Set Environment Variables**:
   In the Vercel project deployment settings, add the key-value pairs from `.env.example`:
   - `NEXT_PUBLIC_APP_URL` = `https://your-domain.com`
   - `NEXT_PUBLIC_OFFICIAL_EMAIL` = `svlearnlogic@gmail.com`
   - `NEXT_PUBLIC_BUSINESS_EMAIL` = `svsuhanalearnlogic@gmail.com`
   - `NEXT_PUBLIC_OFFICIAL_PHONE` = `+91 9356172197`
   - `NEXT_PUBLIC_WHATSAPP_NUMBER` = `+919356172197`
   - `OFFICIAL_EMAIL` = `svlearnlogic@gmail.com`
   - `BUSINESS_EMAIL` = `svsuhanalearnlogic@gmail.com`

3. **Deploy**:
   Click **Deploy**. Vercel will run `next build`, generate edge and static assets, and issue a preview HTTPS URL.

---

## 8. Custom Domain Configuration Instructions

To link your official corporate domain (e.g. `svlearnlogic.com`):

1. In your **Vercel Project Dashboard**, navigate to **Settings** > **Domains**.
2. Enter `svlearnlogic.com` and `www.svlearnlogic.com`.
3. In your DNS provider (GoDaddy, Namecheap, Cloudflare, etc.), configure:
   - **A Record**:
     - Host: `@`
     - Value: `76.76.21.21`
   - **CNAME Record**:
     - Host: `www`
     - Value: `cname.vercel-dns.com.`
4. Vercel automatically generates free SSL/TLS certificates and activates HTTP-to-HTTPS redirection.

---

## 9. Content Integrity & Compliance Notes

- **No Invented Metrics**: All statistics are marked as configurable indicators.
- **No Fictional Testimonials**: All feedback cards are identified as sample cohort feedback placeholders.
- **Contact Details**: All verified contact phone numbers (`+91 9356172197`) and official emails (`svlearnlogic@gmail.com`, `svsuhanalearnlogic@gmail.com`) are linked directly throughout header, footer, contact hub, and WhatsApp triggers.
