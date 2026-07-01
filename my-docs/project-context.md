# Growthentic — Project Context

## What this is

The marketing website for **Growthentic**, a one-person freelance web development
studio run by **Prashant Kumar**, based in Baner, Pune, India. The site is the
studio's own storefront: it pitches web design/dev services to Indian small
businesses (clinics, salons, restaurants, boutiques, startups) and exists to
generate leads via a contact form and WhatsApp.

- Production domain: `https://growthentic.in`
- Contact: `hello@growthentic.in` (routes to `prashant2009kr@gmail.com`), WhatsApp `+91 79720 52896`
- Business hours: Mon–Sat, 10 AM–8 PM IST, "replies within 2 hours"
- Instagram: `instagram.com/growthentic.in`

## Tech stack

- **Next.js 16.2.6** (App Router) — note: `AGENTS.md` warns this is a version with
  breaking API/convention changes vs. training data; check
  `node_modules/next/dist/docs/` before assuming Next.js behavior.
- **React 19.2.4** / React DOM 19.2.4
- **TypeScript 5**, strict mode, path alias `@/*` → project root
- **Tailwind CSS v4** (CSS-first config via `@theme inline` in `app/globals.css`, no `tailwind.config`)
- **shadcn/ui** (style: `base-nova`, base color `neutral`, icon library `lucide`) — see `components.json`
- `@base-ui/react`, `class-variance-authority`, `clsx`, `tailwind-merge`, `tw-animate-css`
- `next-themes` for dark/light mode (default theme: **dark**)
- `@emailjs/browser` for the contact form (client-side email sending, no backend)
- `simple-icons`, `lucide-react` for iconography
- Fonts: Plus Jakarta Sans (headings), DM Sans (body), Geist Mono — all via `next/font/google`
- ESLint 9 (`eslint-config-next`), no test framework configured
- Package manager: npm (`package-lock.json` present)

Scripts: `npm run dev`, `npm run build`, `npm run start`, `npm run lint`.

## Design system

Defined entirely in `app/globals.css` using OKLCH color tokens and shadcn CSS
variables, mapped through `@theme inline`.

- **Brand color**: vivid amber/saffron (`oklch(0.769 0.162 70)`, ~`#F59E0B`) — used everywhere as the signature accent (`text-brand`, `bg-brand`, `border-brand`)
- **Light mode**: warm off-white/parchment background, deep ink-navy foreground
- **Dark mode** (default): deep blue-slate background (`#0D1117`-ish), warm off-white text
- Custom utility classes: `.hover-lift`, `.gradient-mesh`, `.section-warm`, `.glass` (frosted navbar), `.gradient-text`, `.fade-in-up`, marquee/float/pulse-ring keyframe animations, `.grain-overlay`
- Heavy use of hand-rolled inline SVG icons rather than an icon component library in most sections
- Visual motifs repeated across pages: radial gradient blobs behind hero sections, dot-grid background pattern, browser-chrome mockup cards showing live client sites

## Site structure (App Router)

```
app/
  layout.tsx          — root layout: fonts, ThemeProvider (dark default), Navbar, Footer, WhatsAppButton, FadeInObserver
  page.tsx             — homepage: Hero, industry marquee, stats counter, service preview,
                          "what we offer" (6 tiles), featured work (2 case studies), process (5 steps),
                          why-us, tech stack, testimonials, CTA banner
  about/               — hero, founder story (Prashant Kumar bio + photo), tech stack grid,
                          values, journey timeline, CTA
  services/             — hero, 6 pricing cards, "what we build", FAQ accordion
  work/                 — hero w/ stats, filterable client work (Healthcare / Beauty & Wellness tabs),
                          personal/open-source projects section, bottom CTA
  blog/                 — blog index (data-driven) + [slug] dynamic post pages
  contact/               — lead-gen form (EmailJS) + sidebar (WhatsApp, contact details, hours)
  sitemap.ts, robots.ts — SEO
components/            — Navbar (incl. WhatsAppIcon export used elsewhere), Footer, ThemeProvider/Toggle,
                          FadeInObserver (scroll reveal), StatsSection (count-up), WhatsAppButton (floating CTA)
data/blog-posts.ts     — typed blog post content (title/category/readTime/date/excerpt/content[])
lib/utils.ts           — shadcn `cn()` helper
```

Each route's page-specific subsections live as sibling files next to `page.tsx`
(e.g. `app/about/journey-timeline.tsx`, `app/work/project-cards.tsx`,
`app/services/faq-accordion.tsx`) rather than in `components/`. `components/`
holds only truly global/shared pieces.

## Services & pricing (as displayed on `/services`)

| Service | Price (starting) | Timeline |
|---|---|---|
| Static / Business Website | ₹10,000 | 7–10 days |
| Landing Page | ₹6,000 | 3–5 days |
| E-Commerce Store (highlighted "Most Popular") | ₹22,000 | 14–21 days |
| Dynamic Web App | ₹30,000 | 21–30 days |
| Website Redesign | ₹8,000 | 5–7 days |
| SEO + Performance Audit | ₹4,000 | 2–3 days |

## Portfolio content

**Client work** (shown on homepage + `/work`, filterable by industry):
- **Smile Care Studio** — premium dental clinic site (Next.js 15, TS, Tailwind, shadcn/ui), 6 pages, multi-step booking, dark/light mode. Live: `smile-care-studio.vercel.app`
- **Velour Studios** — luxury beauty/salon site (Next.js 14, TS, Tailwind, shadcn/ui), 8 pages, gallery lightbox, team profiles. Live: `velourstudios.vercel.app`

**Personal / open-source projects** (`/work`, "Also Built" section, demonstrates engineering depth):
- **Analytiq** — SaaS/Dashboard. Live: `analytiq-dashboard.vercel.app`
- **Mini CRM Dashboard** — CRM/Web App. Live: `mini-crm-dashboard-one.vercel.app`
- **Cognivoya** — Directory/PWA. Live: `cognivoya.vercel.app`

## Blog

Data-driven from `data/blog-posts.ts` (no CMS — content is hardcoded TS objects
with a typed `Section[]` content model supporting `p`/`h2`/`h3`/`table`/`ul`
blocks). Currently 3 posts, all SEO/lead-gen content aimed at Indian small
business owners:
1. "Why Every Small Business in India Needs a Website in 2026"
2. "How Much Does a Website Cost in India? (Honest 2026 Breakdown)"
3. "Next.js vs WordPress: What's Better for Your Small Business?"

`app/blog/[slug]/page.tsx` uses `generateStaticParams` + `generateMetadata` for
static generation and per-post SEO/OG tags.

## Contact form

`app/contact/contact-form.tsx` is a client component that posts directly to
**EmailJS** (`@emailjs/browser`) using env vars `NEXT_PUBLIC_EMAILJS_SERVICE_ID`,
`NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`, `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`. No backend/API
route — fully client-side. Fields: name, email, WhatsApp number, business type,
service interested in, budget range, project details. Shows a success toast and
resets the form; on failure shows an inline error nudging the user to WhatsApp instead.

## SEO

- `metadataBase` set to `https://growthentic.in`; per-page `Metadata` exports with
  canonical URLs, OpenGraph, and Twitter card tags throughout
- JSON-LD structured data on the homepage (`LocalBusiness` + `Person` `@graph`)
  declaring address (Baner, Pune, Maharashtra), phone, opening hours, founder
- `app/sitemap.ts` and `app/robots.ts` present

## Notable conventions / things to know before editing

- **This is not a standard Next.js version** — `AGENTS.md` explicitly warns
  Next.js 16 here may differ from training-data assumptions; check
  `node_modules/next/dist/docs/` for API/convention changes before writing new
  routing, data-fetching, or config code.
- Tailwind v4 is configured CSS-first (`@theme inline` block in `globals.css`) —
  there is no `tailwind.config.ts` to edit.
- Brand voice throughout copy: direct, no-fluff, India-specific pricing (₹) and
  business examples, emphasis on speed (7–14 day delivery) and transparent pricing.
- Recently added (per `git log`): `public/WhatsApp Image...jpeg` and a
  `removebg-preview.png` variant are untracked in git as of the last check —
  likely a new logo/avatar asset being staged for use.
- No automated test suite; verification is manual (`npm run dev` + browser).
