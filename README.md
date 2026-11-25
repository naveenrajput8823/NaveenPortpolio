<div align="center">

# 👨‍💻 Naveen's Developer Portfolio

**A fast, modern and fully responsive portfolio website built with Next.js 16, React 19 and Tailwind CSS 4**

[![Live Demo](https://img.shields.io/badge/Live%20Demo-naveen34.vercel.app-000000?logo=vercel&logoColor=white)](https://naveen34.vercel.app)
![Next.js](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)

### 🌐 [View Live Site → naveen34.vercel.app](https://naveen34.vercel.app)

</div>

---

## 📖 Overview

This is the personal portfolio of a **Java Full Stack Developer**. It showcases skills, experience, projects, certifications and freelance services, and lets visitors send project inquiries straight to my inbox through a validated contact form.

The site is intentionally lightweight: only **four runtime dependencies** (Next.js, React, React DOM and EmailJS), with all animations and interactions written in plain React and CSS.

## ✨ Features

### 🎯 Content Sections
- **Hero** with call-to-action buttons and resume download
- **Tech strip** showing the core stack
- **About, Skills and Experience** timeline
- **Projects** showcase with tags and source code links
- **Services**, **Why Work With Me** and **Process** sections for freelance clients
- **Certifications** gallery with credential verification links
- **FAQ** accordion
- **Contact** section with project inquiry form

### 🎨 UI / UX
- Fully responsive across mobile, tablet and desktop
- **Light and Dark theme** toggle (no flash on load)
- Scroll progress indicator
- Scroll-reveal animations, 3D tilt cards and animated count-up statistics
- Floating **WhatsApp** chat button
- Optimized fonts with `next/font` (Geist)

### 📬 Contact Form
- Client-side validation and input normalization
- Spam protection with a hidden honeypot field
- Email delivery through **EmailJS** (no backend required)
- Clear success and error feedback

### 🔍 SEO
- Page metadata, Open Graph and Twitter cards
- Auto-generated `sitemap.xml` and `robots.txt`
- Dedicated pages: `/about`, `/projects`, `/services`, `/contact`

## 🧰 Tech Stack

| Category     | Technology                         |
|--------------|------------------------------------|
| Framework    | Next.js 16 (App Router)            |
| UI Library   | React 19                           |
| Language     | TypeScript                         |
| Styling      | Tailwind CSS 4                     |
| Email        | EmailJS (`@emailjs/browser`)       |
| Fonts        | Geist, Geist Mono (`next/font`)    |
| Hosting      | Vercel                             |

## 📂 Project Structure

```
├── public
│   ├── images
│   │   ├── profile            # Profile photo
│   │   └── certificates       # Certificate images
│   └── resume                 # Downloadable CV (PDF)
├── src
│   ├── app
│   │   ├── about | projects | services | contact   # Pages
│   │   ├── layout.tsx         # Root layout, metadata, theme script
│   │   ├── page.tsx           # Home page
│   │   ├── sitemap.ts         # sitemap.xml
│   │   └── robots.ts          # robots.txt
│   └── components
│       ├── layout             # Navbar
│       ├── sections           # Hero, About, Skills, Experience, Projects,
│       │                      # Services, Process, WhyMe, Certifications, FAQ,
│       │                      # Contact, Footer ...
│       └── ui                 # ThemeToggle, ScrollProgress, Reveal, TiltCard,
│                              # CountUp, WhatsAppFloat
├── next.config.ts
└── package.json
```

## ✅ Prerequisites

- **Node.js 20.9** or higher
- **npm**
- A free [EmailJS](https://www.emailjs.com) account (for the contact form)

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/naveenrajput8823/NaveenPortpolio.git
cd NaveenPortpolio
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root (copy from `.env.example`):

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

| Variable                          | Description                      |
|-----------------------------------|----------------------------------|
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID`  | EmailJS service ID               |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | EmailJS email template ID        |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`  | EmailJS public key               |

Your EmailJS template should use these variables: `name`, `email`, `phone`, `service`, `budget` and `message`.

> Without these variables the site still works, but the contact form shows an error on submit.

### 4. Run the development server

```bash
npm run dev
```

Open **http://localhost:3000**

## 📜 Available Scripts

| Command         | Description                       |
|-----------------|-----------------------------------|
| `npm run dev`   | Start the development server      |
| `npm run build` | Create an optimized production build |
| `npm start`     | Run the production build          |
| `npm run lint`  | Run ESLint                        |

## 🛠️ Customization

- **Projects:** edit the `projects` array in `src/components/sections/Projects.tsx`
- **Experience, skills, services, certifications:** edit the data arrays at the top of the matching file in `src/components/sections`
- **Resume:** replace `public/resume/Naveen_CV.pdf`
- **Profile photo:** replace `public/images/profile/profile.png`
- **SEO and domain:** update the site URL in `src/app/layout.tsx`, `src/app/sitemap.ts` and `src/app/robots.ts`

## ☁️ Deployment (Vercel)

1. Push the repository to GitHub
2. Import it on [Vercel](https://vercel.com/new)
3. Add the three `NEXT_PUBLIC_EMAILJS_*` environment variables in **Project Settings → Environment Variables**
4. Deploy

> `NEXT_PUBLIC_`
