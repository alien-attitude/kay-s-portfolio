# Blessing Iyekeretin Edoleyi — Virtual Assistant Portfolio

An elegant, responsive, and feminine portfolio website crafted for **Blessing Iyekeretin Edoleyi**, an experienced Virtual Assistant specializing in **Customer Support** and **Administrative Support**.

The website reflects her professional brand identity, highlighting core strengths in customer communication, scheduling, recordkeeping, and operational organization, following verified facts from her official portfolio brief and reproducing the approved editorial design.

---

## 🌸 Visual Reference & Design Direction

- **Primary Colors**:
  - Blush Pink: `#FCE7ED`
  - Rose Pink: `#E87595`
  - Warm Ivory: `#FFFBF8`
  - Dark Charcoal: `#29252A`
  - Muted Mauve-Grey: `#82757B`
- **Typography**:
  - Headings: *Playfair Display* (Editorial Serif)
  - Body Text: *Plus Jakarta Sans* (Clean, legible Sans-Serif)
  - Accents: *Caveat* (Feminine Script)
- **Aesthetic**: Soft curves, generous whitespace, frosted cards, and subtle micro-interactions.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool & Dev Server**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 3](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Linting**: Oxlint

---

## 📁 Project Structure

```text
kay-s-portfolio/
├── public/
│   ├── assets/              # Static assets (images, certificates, downloads)
│   └── favicon.svg          # Custom 'BE' monogram SVG favicon
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx   # Header with brand monogram, responsive nav, and mobile drawer
│   │   │   └── Footer.tsx   # Footer with contact actions, copyright, and scroll-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx                 # Balanced two-column hero with script accents & contact pills
│   │   │   ├── AboutAndServices.tsx     # Verified bio card & 5 responsive service cards
│   │   │   ├── SkillsAndExperience.tsx  # Software tools, soft skill pills, & experience timeline
│   │   │   ├── PortfolioAndEducation.tsx# Fictional demonstration samples & education credentials
│   │   │   ├── WhyWorkWithMe.tsx        # 6 core work strengths & professional values
│   │   │   ├── FAQ.tsx                  # Accessible accordion with verified client Q&A
│   │   │   ├── Testimonials.tsx         # Auto-hiding authentic testimonial slider
│   │   │   ├── Achievements.tsx         # Auto-hiding verified achievements & volunteer impact
│   │   │   └── Contact.tsx              # Working WhatsApp/Email links & validated consultation form
│   │   └── ui/
│   │       ├── BrandMark.tsx            # Stylized 'BE' brand monogram component
│   │       ├── Button.tsx               # Reusable styled button with link support
│   │       └── Accordion.tsx            # Fully accessible WAI-ARIA accordion
│   ├── content/
│   │   └── portfolio.ts     # Central source of truth for all portfolio data
│   ├── types/
│   │   └── portfolio.ts     # TypeScript data contracts and models
│   ├── App.tsx              # Main page assembly
│   ├── main.tsx             # Application entry point
│   └── index.css            # Tailwind directives, theme variables, and custom utilities
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.0.0 or higher; developed on v26)
- [npm](https://www.npmjs.com/) (v9.0.0 or higher)
- [Git](https://git-scm.com/)

### Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/alien-attitude/kay-s-portfolio.git
cd kay-s-portfolio
npm install
```

### Running Locally (Development)

Start the Vite development server:

```bash
npm run dev
```

Visit `http://localhost:5173` in your browser.

### Linting & Type Checking

To verify code quality and TypeScript types:

```bash
# Run TypeScript compilation check
npx tsc -b

# Run linter
npm run lint
```

### Production Build

Create an optimized production build in `dist/`:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```

---

## ✍️ Content Updates & Architecture

All text and portfolio assets are centrally maintained in [`src/content/portfolio.ts`](src/content/portfolio.ts) using strongly typed interfaces defined in [`src/types/portfolio.ts`](src/types/portfolio.ts).

### 1. Adding a Profile Photograph
When Blessing's approved portrait photograph is available:
1. Place the image in `public/assets/blessing.jpg`.
2. Open `src/content/portfolio.ts` and update `personalInfo.profilePhoto`:
   ```ts
   personalInfo: {
     profilePhoto: "/assets/blessing.jpg",
     // ...
   }
   ```
*(Until supplied, the hero gracefully displays a tasteful, feminine monogram badge that preserves visual balance without displaying placeholder stock photos).*

### 2. Adding a Résumé / CV
1. Place the PDF in `public/assets/Blessing_Edoleyi_CV.pdf`.
2. Set `personalInfo.resumeUrl: "/assets/Blessing_Edoleyi_CV.pdf"` in `src/content/portfolio.ts`.

### 3. Adding Verified Testimonials
To protect integrity, testimonials remain hidden until verified and permission-approved:
```ts
testimonials: [
  {
    id: "testimonial-1",
    clientName: "Jane Doe",
    clientRole: "Founder",
    company: "Acme Studios",
    testimonial: "Blessing brought immense order to our customer support inbox.",
    hasPermission: true,
  }
]
```
The testimonials section will automatically render as soon as valid entries exist.

### 4. Adding Achievements & Volunteer Experience
Populate `achievements` or `volunteerExperiences` in `src/content/portfolio.ts`:
```ts
achievements: [
  {
    id: "achieve-1",
    title: "100% Inbound Query Resolution Rate",
    description: "Successfully managed and resolved over 500 inquiries.",
    date: "2024"
  }
]
```

### 5. Adding Social Media Profiles
Add verified profiles to `personalInfo.socialLinks`:
```ts
socialLinks: [
  {
    platform: "LinkedIn",
    url: "https://linkedin.com/in/blessing-edoleyi"
  }
]
```

---

## 📬 Contact Form & Inquiries

- The portfolio provides working direct contact actions:
  - **Email**: `mailto:edoleyiblessing7@gmail.com`
  - **WhatsApp**: `https://wa.me/2349059628581`
- Submitting the consultation form validates input fields client-side and triggers a formatted `mailto:` transmission directly addressed to Blessing, ensuring no fake APIs or silently discarded submissions occur.
- For backend form services (e.g. Formspree, Resend, or EmailJS), integrate the endpoint into `handleSubmit` in `src/components/sections/Contact.tsx`.

---

## 📦 Git & Repository Information

- **Remote URL**: `https://github.com/alien-attitude/kay-s-portfolio.git`
- **Primary Branch**: `main`
