import type { Metadata } from "next";
import Link from "next/link";
import { StatsSection } from "@/components/stats-counter";

export const metadata: Metadata = {
  title: "Freelance Web Developer in Pune, India | Growthentic",
  description:
    "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days. Get a free quote.",
  alternates: { canonical: "https://growthentic.in" },
  openGraph: {
    url: "https://growthentic.in",
    title: "Freelance Web Developer in Pune, India | Growthentic",
    description:
      "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days. Get a free quote.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Growthentic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Freelance Web Developer in Pune, India | Growthentic",
    description:
      "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days. Get a free quote.",
    images: ["/og-default.png"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://growthentic.in/#business",
      name: "Growthentic",
      url: "https://growthentic.in",
      logo: "https://growthentic.in/logo.png",
      image: "https://growthentic.in/og-default.png",
      description:
        "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days.",
      telephone: "+917972052896",
      email: "hello@growthentic.in",
      priceRange: "₹₹",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Baner",
        addressLocality: "Pune",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "10:00",
        closes: "20:00",
      },
      sameAs: ["https://instagram.com/growthentic.in"],
    },
    {
      "@type": "Person",
      "@id": "https://growthentic.in/#founder",
      name: "Prashant Kumar",
      jobTitle: "Freelance Web Developer",
      url: "https://growthentic.in",
      worksFor: { "@id": "https://growthentic.in/#business" },
    },
  ],
};

export default function Home() {
  return (
    <main className="flex flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
      <ServicePreviewSection />
      <WhatWeOfferSection />
      <FeaturedWorkSection />
      <OurProcessSection />
      <WhyGrowthentic />
      <TechStackSection />
      <TestimonialsSection />
      <CtaBanner />
    </main>
  );
}

/* ── Section 2: Marquee / Social Proof Bar ── */
const marqueeItems = [
  "Dental Clinics", "Beauty Salons", "Restaurants", "Boutiques",
  "Fitness Studios", "Law Firms", "Startups", "Coaching Businesses",
  "Photographers", "Architects", "Real Estate Agents", "Yoga Studios",
];

function MarqueeSection() {
  /* Duplicate array so the seamless loop works */
  const items = [...marqueeItems, ...marqueeItems];

  return (
    <section aria-label="Industries we serve" className="relative border-y border-border bg-card py-4 overflow-hidden">
      {/* Left + right fade masks */}
      <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-card to-transparent" />
      <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-card to-transparent" />

      <div className="flex w-max animate-marquee gap-0">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-0 whitespace-nowrap"
            aria-hidden={i >= marqueeItems.length}
          >
            <span className="px-5 text-sm font-medium text-muted-foreground">
              {item}
            </span>
            <span className="text-brand/50 text-lg select-none">·</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden flex items-center">
      {/* ── Animated gradient mesh background ── */}
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        {/* Base warm background */}
        <div className="absolute inset-0 bg-background" />

        {/* Radial gradient blobs */}
        <div className="absolute top-[-10%] left-[-5%] h-[600px] w-[600px] rounded-full bg-brand/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[500px] w-[500px] rounded-full bg-brand/8 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-[30%] right-[20%] h-[300px] w-[300px] rounded-full bg-foreground/4 blur-[80px]" />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">

          {/* ── Left: Text content ── */}
          <div className="flex flex-col gap-7">
            {/* Eyebrow badge */}
            <div className="flex items-center gap-2 w-fit">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
                <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
                Freelance Web Studio · Pune, India
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-[3.5rem] xl:text-6xl">
              We Build Websites That Make Your Business{" "}
              <span className="relative inline-block">
                <span className="text-brand">Impossible to Ignore</span>
                {/* Underline accent */}
                <svg
                  aria-hidden="true"
                  className="absolute -bottom-2 left-0 w-full"
                  viewBox="0 0 300 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M2 8.5C60 3 120 1 180 3.5C220 5.5 260 8 298 6"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    className="text-brand/40"
                  />
                </svg>
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              From concept to launch — fast, beautiful, mobile-first websites
              for Indian small businesses ready to grow online.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3.5 text-base font-semibold text-brand-foreground shadow-lg shadow-brand/20 transition-all hover:opacity-90 hover:scale-105 hover:shadow-brand/30 active:scale-95"
                aria-label="Get a free quote"
              >
                Get a Free Quote
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>

              <Link
                href="/work"
                className="inline-flex items-center gap-2 rounded-xl border border-border bg-background/60 px-6 py-3.5 text-base font-semibold text-foreground backdrop-blur-sm transition-all hover:border-brand/40 hover:bg-brand/5 hover:text-brand active:scale-95"
                aria-label="See our work"
              >
                See Our Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" /><circle cx="12" cy="12" r="3" /></svg>
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-5 pt-2">
              <TrustPill icon="⚡" text="7–14 Day Delivery" />
              <TrustPill icon="📱" text="Mobile-First Design" />
              <TrustPill icon="⭐" text="4.9★ Client Rating" />
            </div>
          </div>

          {/* ── Right: Floating browser mockup cards ── */}
          <div className="relative flex items-center justify-center lg:justify-end min-h-[420px]">

            {/* Floating tech pill badges */}
            <FloatingPill label="Next.js" color="bg-foreground text-background" style={{ top: "6%", left: "2%", animationDelay: "0s" }} />
            <FloatingPill label="React" color="bg-[#61DAFB]/15 text-[#0ea5e9] border border-[#61DAFB]/30" style={{ top: "12%", right: "0%", animationDelay: "1s" }} />
            <FloatingPill label="Tailwind CSS" color="bg-[#06B6D4]/15 text-[#06B6D4] border border-[#06B6D4]/30" style={{ bottom: "8%", left: "0%", animationDelay: "2s" }} />
            <FloatingPill label="TypeScript" color="bg-[#3178C6]/15 text-[#3178C6] border border-[#3178C6]/30" style={{ bottom: "18%", right: "2%", animationDelay: "0.5s" }} />

            {/* Card 2 — back (Velour Studios) */}
            <div
              className="absolute w-[300px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card transition-transform hover:scale-105"
              style={{ transform: "rotate(4deg) translate(28px, 16px)", zIndex: 1 }}
              aria-hidden="true"
            >
              <BrowserMockup
                url="velourstudios.vercel.app"
                gradient="from-[#1a0a2e] via-[#2d1054] to-[#6b21a8]"
                label="Velour Studios"
                sublabel="Luxury Beauty & Salon"
                accent="#d946ef"
              />
            </div>

            {/* Card 1 — front (Smile Care Studio) */}
            <div
              className="relative w-[300px] sm:w-[340px] rounded-2xl overflow-hidden shadow-2xl border border-border bg-card transition-transform hover:scale-105 hover:-rotate-1"
              style={{ transform: "rotate(-2deg)", zIndex: 2 }}
            >
              <BrowserMockup
                url="smile-care-studio.vercel.app"
                gradient="from-[#0c2a4a] via-[#0d3a6e] to-[#1e5fa8]"
                label="Smile Care Studio"
                sublabel="Premium Dental Clinic"
                accent="#38bdf8"
              />
            </div>

          </div>
        </div>
      </div>

      {/* Bottom fade into next section */}
      <div aria-hidden="true" className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}

/* ── Sub-components ── */

function TrustPill({ icon, text }: { icon: string; text: string }) {
  return (
    <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
      <span aria-hidden="true">{icon}</span>
      <span>{text}</span>
    </div>
  );
}

function FloatingPill({
  label,
  color,
  style,
}: {
  label: string;
  color: string;
  style: React.CSSProperties;
}) {
  return (
    <span
      aria-hidden="true"
      className={`absolute z-10 rounded-full px-3 py-1 text-xs font-semibold animate-float shadow-md ${color}`}
      style={style}
    >
      {label}
    </span>
  );
}

function BrowserMockup({
  url,
  gradient,
  label,
  sublabel,
  accent,
}: {
  url: string;
  gradient: string;
  label: string;
  sublabel: string;
  accent: string;
}) {
  return (
    <div className="flex flex-col">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-muted/80 px-3 py-2.5 border-b border-border">
        {/* Traffic lights */}
        <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
        {/* URL bar */}
        <div className="ml-2 flex-1 rounded-md bg-background/60 border border-border px-2.5 py-1 flex items-center gap-1.5">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0" aria-hidden="true"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
          <span className="text-[10px] text-muted-foreground truncate font-mono">{url}</span>
        </div>
      </div>

      {/* Page preview */}
      <div className={`relative h-48 bg-gradient-to-br ${gradient} flex flex-col items-center justify-center gap-3 p-6`}>
        {/* Fake nav bar inside mockup */}
        <div className="absolute top-3 left-4 right-4 flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-white/20" />
          <div className="flex gap-2">
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
            <div className="h-1.5 w-8 rounded-full bg-white/15" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center mt-4">
          <p className="text-white/50 text-[9px] uppercase tracking-widest mb-1">{sublabel}</p>
          <p className="text-white font-bold text-sm leading-tight">{label}</p>
          <div className="mt-2 h-1 w-12 rounded-full mx-auto" style={{ backgroundColor: accent }} />
        </div>

        {/* Fake content blocks */}
        <div className="flex flex-col gap-1.5 w-full mt-2">
          <div className="h-1.5 rounded-full bg-white/10 w-3/4 mx-auto" />
          <div className="h-1.5 rounded-full bg-white/10 w-1/2 mx-auto" />
        </div>

        {/* CTA button */}
        <div className="mt-1 rounded-lg px-4 py-1.5 text-[10px] font-semibold text-white" style={{ backgroundColor: accent + "33", border: `1px solid ${accent}55` }}>
          Book Appointment
        </div>
      </div>

      {/* Footer of card */}
      <div className="bg-card px-4 py-3 flex items-center justify-between border-t border-border">
        <div>
          <p className="text-xs font-semibold text-foreground">{label}</p>
          <p className="text-[10px] text-muted-foreground">{sublabel}</p>
        </div>
        <div className="h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white" style={{ backgroundColor: accent }}>
          ↗
        </div>
      </div>
    </div>
  );
}

/* ── Section 4: Services Preview ── */
const featuredServices = [
  {
    id: "business-website",
    icon: <MonitorIcon />,
    name: "Business Website",
    pitch: "A multi-page, mobile-first website that builds trust and brings in enquiries around the clock.",
    price: "₹10,000",
    color: "from-blue-500/10 to-blue-600/5",
    iconBg: "bg-blue-500/10 text-blue-500",
    badge: "Most Popular",
  },
  {
    id: "landing-page",
    icon: <ZapIcon />,
    name: "Landing Page",
    pitch: "One focused page built to convert — ideal for ads, product launches, or lead capture campaigns.",
    price: "₹6,000",
    color: "from-amber-500/10 to-amber-600/5",
    iconBg: "bg-brand/10 text-brand",
    badge: "Fastest Delivery",
  },
  {
    id: "ecommerce",
    icon: <ShopIcon />,
    name: "E-Commerce Store",
    pitch: "A fully functional online store with product listings, cart, checkout, and payment — ready to sell.",
    price: "₹22,000",
    color: "from-emerald-500/10 to-emerald-600/5",
    iconBg: "bg-emerald-500/10 text-emerald-500",
    badge: null,
  },
];

function ServicePreviewSection() {
  return (
    <section aria-labelledby="services-preview-heading" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">

        {/* Heading */}
        <div data-fade className="mb-12 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            What We Build
          </span>
          <h2
            id="services-preview-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            The Right Website for{" "}
            <span className="text-brand">Your Business</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            From a simple landing page to a full e-commerce store — every project
            is built to perform, not just look good.
          </p>
        </div>

        {/* Service cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.id}
              href={`/services#${service.id}`}
              className="group relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 hover-lift hover:border-brand/30 transition-colors overflow-hidden"
              aria-label={`${service.name} — starting from ${service.price}`}
            >
              {/* Gradient background tint */}
              <div aria-hidden="true" className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Badge */}
              {service.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-brand/10 border border-brand/20 px-2.5 py-0.5 text-[10px] font-semibold text-brand">
                  {service.badge}
                </span>
              )}

              <div className="relative flex flex-col gap-5">
                {/* Icon */}
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${service.iconBg}`}>
                  {service.icon}
                </div>

                {/* Name + pitch */}
                <div className="flex flex-col gap-2">
                  <h3 className="font-heading text-lg font-bold text-foreground group-hover:text-brand transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {service.pitch}
                  </p>
                </div>

                {/* Price + arrow */}
                <div className="mt-auto flex items-center justify-between pt-2 border-t border-border">
                  <div className="flex flex-col gap-0.5">
                    <span className="text-[10px] text-muted-foreground uppercase tracking-wide">Starting from</span>
                    <span className="font-heading text-xl font-extrabold text-foreground">{service.price}</span>
                  </div>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground group-hover:bg-brand group-hover:text-brand-foreground transition-all duration-200">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors"
          >
            Explore All Services
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Service icons ── */
function MonitorIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <path d="M8 21h8M12 17v4" />
    </svg>
  );
}
function ZapIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  );
}
function ShopIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  );
}

/* ── Section 5: What We Offer ── */
const offerings = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    title: "Responsive Across Every Device",
    body: "Your website will look and perform flawlessly on phones, tablets, and desktops — because most of your customers are on mobile.",
    accent: "text-blue-500",
    bg: "bg-blue-500/8 group-hover:bg-blue-500/14",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "Built for Speed",
    body: "Optimized assets, clean code, and smart architecture mean your site loads fast — because every second of delay costs you customers.",
    accent: "text-brand",
    bg: "bg-brand/8 group-hover:bg-brand/14",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Security You Can Count On",
    body: "We bake security in from day one — HTTPS, data protection, and safe coding practices that keep your business and visitors safe.",
    accent: "text-emerald-500",
    bg: "bg-emerald-500/8 group-hover:bg-emerald-500/14",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Code That's Built to Last",
    body: "Well-structured, documented code means your website is easy to update, scale, and hand off — no messy spaghetti, ever.",
    accent: "text-violet-500",
    bg: "bg-violet-500/8 group-hover:bg-violet-500/14",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" />
        <line x1="15" y1="9" x2="15.01" y2="9" />
      </svg>
    ),
    title: "Design That Converts",
    body: "Every visual decision is made with your customer in mind — intuitive flows, beautiful UI, and interactions that drive action.",
    accent: "text-pink-500",
    bg: "bg-pink-500/8 group-hover:bg-pink-500/14",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: "Support After Launch",
    body: "We don't disappear after delivery. Bug fixes, updates, and improvements — we're your long-term web partner.",
    accent: "text-cyan-500",
    bg: "bg-cyan-500/8 group-hover:bg-cyan-500/14",
  },
];

function WhatWeOfferSection() {
  return (
    <section aria-labelledby="offerings-heading" className="py-20 md:py-28 section-warm relative overflow-hidden">
      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(currentColor 1px, transparent 1px), linear-gradient(to right, currentColor 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div data-fade className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            Why Clients Choose Us
          </span>
          <h2
            id="offerings-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Everything Your Website{" "}
            <span className="text-brand">Needs to Win</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            We don't just build websites — we build business tools. Every decision
            is made with your growth in mind.
          </p>
        </div>

        {/* 6-tile grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {offerings.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col gap-4 rounded-2xl border border-border bg-card p-7 hover-lift hover:border-brand/20 transition-colors overflow-hidden"
            >
              {/* Top accent line that fills in on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-brand/0 to-transparent group-hover:via-brand/60 transition-all duration-500" />

              {/* Icon */}
              <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors duration-200 ${item.accent} ${item.bg}`}>
                {item.icon}
              </div>

              {/* Text */}
              <div className="flex flex-col gap-2">
                <h3 className="font-heading text-base font-bold text-foreground leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 6: Featured Work ── */
const featuredProjects = [
  {
    name: "Smile Care Studio",
    type: "Premium Dental Clinic Website",
    industry: "Healthcare",
    liveUrl: "https://smile-care-studio.vercel.app/",
    internalUrl: "/work",
    gradient: "from-[#0c2a4a] via-[#0d3a6e] to-[#1e5fa8]",
    accentColor: "#38bdf8",
    stack: ["Next.js 15", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    description:
      "A 6-page clinic website with dark/light mode, scroll animations, and a multi-step appointment booking system that converts visitors into patients.",
    industryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>
    ),
  },
  {
    name: "Velour Studios",
    type: "Luxury Beauty & Salon Website",
    industry: "Beauty & Wellness",
    liveUrl: "https://velourstudios.vercel.app/",
    internalUrl: "/work",
    gradient: "from-[#1a0a2e] via-[#2d1054] to-[#6b21a8]",
    accentColor: "#d946ef",
    stack: ["Next.js 14", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    description:
      "An 8-page luxury salon website with gallery lightbox, team profiles, service menu, and a multi-step booking form designed to match a high-end brand.",
    industryIcon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 2a5 5 0 1 0 0 10A5 5 0 0 0 12 2z" /><path d="M3.5 21a9 9 0 0 1 17 0" /></svg>
    ),
  },
];

function WorkBrowserMockup({
  gradient,
  accentColor,
  name,
  type,
}: {
  gradient: string;
  accentColor: string;
  name: string;
  type: string;
}) {
  return (
    <div className="flex flex-col rounded-xl overflow-hidden border border-border/60 shadow-xl">
      {/* Browser chrome */}
      <div className="flex items-center gap-2 bg-muted/70 px-4 py-3 border-b border-border">
        <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
        <div className="ml-2 flex-1 rounded-md bg-background/50 border border-border px-3 py-1 flex items-center gap-1.5">
          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-500 flex-shrink-0" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <span className="text-[10px] text-muted-foreground font-mono truncate">{name.toLowerCase().replace(/\s+/g, "-")}.vercel.app</span>
        </div>
      </div>
      {/* Page preview */}
      <div className={`relative bg-gradient-to-br ${gradient} h-52 flex flex-col overflow-hidden`}>
        <div className="flex items-center justify-between px-5 py-3">
          <div className="h-2 w-20 rounded-full bg-white/25" />
          <div className="flex gap-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-1.5 w-7 rounded-full bg-white/15" />
            ))}
            <div className="h-5 w-14 rounded-md bg-white/20" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 gap-3 px-6 pb-4">
          <div className="text-center">
            <p className="text-white/40 text-[8px] uppercase tracking-[0.2em] mb-2">{type}</p>
            <p className="text-white font-bold text-sm leading-tight mb-3">{name}</p>
            <div className="h-0.5 w-10 rounded-full mx-auto mb-3" style={{ backgroundColor: accentColor }} />
          </div>
          <div className="flex flex-col gap-2 w-full max-w-[160px]">
            <div className="h-1.5 rounded-full bg-white/10 w-full" />
            <div className="h-1.5 rounded-full bg-white/10 w-4/5 mx-auto" />
            <div className="h-1.5 rounded-full bg-white/10 w-3/5 mx-auto" />
          </div>
          <div
            className="mt-1 rounded-lg px-4 py-1.5 text-[10px] font-semibold text-white"
            style={{ backgroundColor: accentColor + "30", border: `1px solid ${accentColor}50` }}
          >
            Book Appointment
          </div>
        </div>
        <div className="grid grid-cols-3 gap-px border-t" style={{ borderColor: accentColor + "25" }}>
          {["Services", "Team", "Gallery"].map((label) => (
            <div key={label} className="flex flex-col items-center gap-1 py-2 bg-black/20">
              <div className="h-3 w-3 rounded-sm bg-white/20" />
              <span className="text-[8px] text-white/40">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FeaturedWorkSection() {
  return (
    <section aria-labelledby="featured-work-heading" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div data-fade className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            Our Work
          </span>
          <h2
            id="featured-work-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Projects We&apos;re{" "}
            <span className="text-brand">Proud Of</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Every project is a business that chose to show up online — and we made
            sure it made an impression.
          </p>
        </div>

        {/* Project cards */}
        <div className="grid gap-8 lg:grid-cols-2">
          {featuredProjects.map((project) => (
            <article
              key={project.name}
              className="group relative flex flex-col rounded-2xl border border-border bg-card overflow-hidden hover-lift"
            >
              {/* Glow on hover */}
              <div
                aria-hidden="true"
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{ boxShadow: `0 0 50px ${project.accentColor}20` }}
              />

              {/* Browser mockup */}
              <div className="p-5 pb-0">
                <WorkBrowserMockup
                  gradient={project.gradient}
                  accentColor={project.accentColor}
                  name={project.name}
                  type={project.type}
                />
              </div>

              {/* Card body */}
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex flex-col gap-1.5">
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground">
                      {project.industryIcon}
                      {project.industry}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{project.type}</p>
                  </div>
                  <div className="mt-1 h-3 w-3 rounded-full flex-shrink-0" style={{ backgroundColor: project.accentColor }} />
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md border border-border bg-muted/60 px-2.5 py-1 text-xs font-medium text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3 pt-2 border-t border-border">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
                    style={{ backgroundColor: project.accentColor }}
                    aria-label={`View ${project.name} live site`}
                  >
                    View Live
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
                  </a>
                  <Link
                    href={project.internalUrl}
                    className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors"
                    aria-label={`View ${project.name} case study`}
                  >
                    Case Study
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors"
          >
            View All Projects
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Section 7: Our Process ── */
const processSteps = [
  {
    number: "01",
    title: "Discovery",
    body: "We start with a conversation — understanding your business, your customers, and what success looks like for you.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Planning",
    body: "Wireframes, sitemap, and content strategy. We map everything out before a single line of code is written.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Design",
    body: "UI mockups crafted with your brand in mind — beautiful, intuitive, and built to make a first impression that lasts.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" /><circle cx="17.5" cy="10.5" r=".5" fill="currentColor" /><circle cx="8.5" cy="7.5" r=".5" fill="currentColor" /><circle cx="6.5" cy="12.5" r=".5" fill="currentColor" /><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Development",
    body: "Clean, modern code. Fully responsive. Fast. Tested across devices and browsers before you see a single pixel.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    number: "05",
    title: "Launch & Beyond",
    body: "Deployed, live, and handed to you with full guidance. And we stay available for anything you need after go-live.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" /><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" /><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

function OurProcessSection() {
  return (
    <section aria-labelledby="process-heading" className="py-20 md:py-28 section-warm relative overflow-hidden">
      {/* Ambient glow */}
      <div aria-hidden="true" className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[400px] w-[600px] rounded-full bg-brand/5 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div data-fade className="mb-16 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            How It Works
          </span>
          <h2
            id="process-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            From First Chat to{" "}
            <span className="text-brand">Live Website</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            A clear, collaborative process so you always know what&apos;s happening —
            no black boxes, no surprises.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div className="hidden lg:block">
          {/* Connector line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-[calc(10%+20px)] right-[calc(10%+20px)] h-px bg-gradient-to-r from-transparent via-border to-transparent" />
            {/* Amber progress fill (first 4 connectors) */}
            <div className="absolute top-8 left-[calc(10%+20px)] w-[40%] h-px bg-gradient-to-r from-brand/60 to-brand/20" />
          </div>

          <div className="grid grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={step.number} className="group flex flex-col items-center gap-4 text-center">
                {/* Step bubble */}
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-2 border-border bg-card transition-all duration-300 group-hover:border-brand group-hover:bg-brand/8 group-hover:scale-110 z-10">
                  <span className={`transition-colors duration-300 group-hover:text-brand ${i < 2 ? "text-brand" : "text-muted-foreground"}`}>
                    {step.icon}
                  </span>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-brand text-[9px] font-bold text-brand-foreground">
                    {i + 1}
                  </span>
                </div>

                <div className="flex flex-col gap-1.5 px-2">
                  <h3 className="font-heading text-sm font-bold text-foreground group-hover:text-brand transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {step.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="flex flex-col gap-0 lg:hidden">
          {processSteps.map((step, i) => (
            <div key={step.number} className="group relative flex gap-5">
              {/* Left: number + connector */}
              <div className="flex flex-col items-center">
                <div className="relative flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border-2 border-border bg-card group-hover:border-brand group-hover:bg-brand/8 transition-all duration-300 z-10">
                  <span className="text-muted-foreground group-hover:text-brand transition-colors">
                    {step.icon}
                  </span>
                  <span className="absolute -top-1.5 -right-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-brand text-[8px] font-bold text-brand-foreground">
                    {i + 1}
                  </span>
                </div>
                {/* Vertical connector — skip on last */}
                {i < processSteps.length - 1 && (
                  <div className="mt-1 w-px flex-1 min-h-[40px] bg-border" />
                )}
              </div>

              {/* Right: content */}
              <div className="pb-8 pt-2 flex flex-col gap-1.5">
                <h3 className="font-heading text-base font-bold text-foreground group-hover:text-brand transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-sm">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 flex flex-col items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground">
            Ready to get started? Most websites are live in{" "}
            <span className="font-semibold text-foreground">7–14 days.</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground shadow-md shadow-brand/20 hover:opacity-90 hover:scale-105 active:scale-95 transition-all"
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Section 8: Why Growthentic ── */
const reasons = [
  {
    number: "01",
    title: "Design Meets Strategy",
    body: "Great-looking websites that serve a purpose. Every layout, colour, and button placement is designed to move your visitors toward action.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
    highlight: "Every pixel earns its place.",
  },
  {
    number: "02",
    title: "A Partner, Not Just a Vendor",
    body: "We're invested in your growth — not just your launch. Planning, development, support, and honest advice at every stage.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    highlight: "Your goals are our goals.",
  },
  {
    number: "03",
    title: "Outcomes Over Output",
    body: "We measure success by what your website does for your business — more enquiries, more visibility, more revenue. That's the goal.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    ),
    highlight: "Results, not just deliverables.",
  },
];

function WhyGrowthentic() {
  return (
    <section aria-labelledby="why-heading" className="py-20 md:py-28 bg-background relative overflow-hidden">
      {/* Background: dark navy panel on the right half (desktop only) */}
      <div aria-hidden="true" className="absolute inset-y-0 right-0 w-1/2 bg-foreground/[0.03] dark:bg-white/[0.02] hidden lg:block rounded-l-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">

          {/* Left: heading + sub */}
          <div className="flex flex-col gap-6">
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
              Why Growthentic
            </span>
            <h2
              id="why-heading"
              className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
            >
              Built Different.{" "}
              <span className="text-brand">On Purpose.</span>
            </h2>
            <p className="text-base text-muted-foreground leading-relaxed max-w-md">
              There are a lot of web developers out there. Here&apos;s why business
              owners who care about results choose to work with us.
            </p>

            {/* Mini proof points */}
            <div className="flex flex-col gap-3 mt-2">
              {["No templates. Every site is built for your brand.", "Plain-English communication — no jargon.", "You own everything. Code, content, domain."].map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-brand/15">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-brand" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  <span className="text-sm text-muted-foreground">{point}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-brand hover:underline underline-offset-4 transition-colors mt-2"
              aria-label="Learn more about Growthentic"
            >
              More about us
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </div>

          {/* Right: 3 reason cards stacked */}
          <div className="flex flex-col gap-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.number}
                className="group relative flex gap-5 rounded-2xl border border-border bg-card p-6 hover-lift hover:border-brand/30 transition-colors overflow-hidden"
              >
                {/* Hover tint */}
                <div aria-hidden="true" className="absolute inset-0 bg-brand/0 group-hover:bg-brand/[0.03] transition-colors duration-300 rounded-2xl" />

                {/* Number + icon column */}
                <div className="relative flex flex-col items-center gap-2 flex-shrink-0">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand group-hover:bg-brand group-hover:text-brand-foreground transition-all duration-300">
                    {reason.icon}
                  </div>
                  <span className="text-[10px] font-bold text-muted-foreground/50 tracking-widest">
                    {reason.number}
                  </span>
                </div>

                {/* Text */}
                <div className="relative flex flex-col gap-1.5">
                  <h3 className="font-heading text-base font-bold text-foreground group-hover:text-brand transition-colors">
                    {reason.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {reason.body}
                  </p>
                  <p className="mt-1 text-xs font-semibold text-brand/70 italic">
                    &ldquo;{reason.highlight}&rdquo;
                  </p>
                </div>

                {/* Right edge accent bar */}
                <div className="absolute right-0 top-4 bottom-4 w-0.5 rounded-full bg-brand/0 group-hover:bg-brand/40 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Section 9: Tech Stack Marquee ── */
const techStack = [
  {
    name: "HTML5",
    color: "#E34F26",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z" />
      </svg>
    ),
  },
  {
    name: "CSS3",
    color: "#1572B6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z" />
      </svg>
    ),
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    textColor: "#1a1a1a",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z" />
      </svg>
    ),
  },
  {
    name: "React",
    color: "#61DAFB",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.74-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.150-1.315.283-2.015.386.24-.375.48-.762.705-1.158.225-.39.435-.782.634-1.176zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    name: "Next.js",
    color: "#ffffff",
    darkColor: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.163 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
      </svg>
    ),
  },
  {
    name: "Node.js",
    color: "#339933",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M11.998 24c-.321 0-.641-.084-.922-.247l-2.936-1.737c-.438-.245-.224-.332-.08-.383.585-.203.703-.25 1.328-.604.065-.037.151-.023.218.017l2.256 1.339c.082.045.198.045.275 0l8.795-5.076c.082-.047.134-.141.134-.238V6.921c0-.099-.052-.19-.137-.241l-8.791-5.072c-.082-.047-.19-.047-.271 0L3.075 6.68c-.087.05-.141.144-.141.241v10.15c0 .097.054.189.139.235l2.409 1.392c1.307.654 2.108-.116 2.108-.891V7.787c0-.142.114-.253.256-.253h1.115c.139 0 .255.111.255.253v10.021c0 1.745-.95 2.745-2.604 2.745-.508 0-.909 0-2.026-.551L2.28 18.675c-.57-.329-.922-.943-.922-1.604V6.921c0-.661.352-1.275.922-1.603l8.795-5.082c.557-.315 1.296-.315 1.848 0l8.794 5.082c.57.329.924.944.924 1.603v10.15c0 .659-.354 1.273-.924 1.604l-8.794 5.078c-.28.162-.6.247-.925.247zm2.718-6.975c-3.855 0-4.663-1.772-4.663-3.258 0-.142.114-.253.256-.253h1.136c.127 0 .233.092.252.217.172 1.161.684 1.748 3.023 1.748 1.862 0 2.652-.421 2.652-1.409 0-.569-.225-.993-3.123-1.278-2.421-.241-3.919-.773-3.919-2.708 0-1.782 1.502-2.845 4.021-2.845 2.825 0 4.224.981 4.402 3.087.008.07-.018.139-.063.19a.254.254 0 0 1-.189.083h-1.142c-.119 0-.225-.083-.249-.198-.276-1.221-.949-1.613-2.759-1.613-2.032 0-2.268.707-2.268 1.238 0 .643.279.83 3.027 1.19 2.72.357 4.009.862 4.009 2.782-.001 1.925-1.605 3.027-4.403 3.027z" />
      </svg>
    ),
  },
  {
    name: "MongoDB",
    color: "#47A248",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0 1 11.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 0 0 3.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z" />
      </svg>
    ),
  },
  {
    name: "TypeScript",
    color: "#3178C6",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    name: "Tailwind",
    color: "#06B6D4",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
      </svg>
    ),
  },
  {
    name: "WordPress",
    color: "#21759B",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M21.469 6.825c.61 1.491.943 3.137.943 4.849 0 3.71-1.902 6.99-4.791 8.924L21.469 6.825zm-12.745-.8C9.77 6.025 10.454 6 11.001 6c.572 0 1.155.027 1.709.046.572.023 1.12.042 1.64.042 2.038 0 3.454-.558 3.454-.558-.148.892-.27 1.83-.27 2.783 0 .959.16 1.912.448 2.783.288.879.718 1.73 1.3 2.48.576.757 1.293 1.417 2.127 1.953L21.007 6.35C19.455 2.61 15.558 0 11.001 0 6.836 0 3.24 2.193 1.452 5.452l8.272.573zm-5.77 13.248c.972 1.018 2.143 1.86 3.47 2.467.973.442 2.018.72 3.112.802L2.955 6.742l-2.21 6.083C2.048 15.5 3.64 17.86 2.954 19.273zm8.047 4.726c.891.062 1.803.029 2.7-.1a11.44 11.44 0 0 0 2.592-.709L12.001 15.3l-4.092 8.7z" />
      </svg>
    ),
  },
  {
    name: "Shopify",
    color: "#96BF48",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.89-.134-1.89-.134-.96-.961-1.074-1.072v-.016C16.582 2.62 15.966.316 14.161.001c-.04-.007-.079-.01-.117-.01-1.03 0-1.92.789-2.508 2.117a5.56 5.56 0 0 0-.347 1.258l-2.96.916S7.044.67 4.596.67c-.02 0-.04 0-.06.002C4.44.677 4.349.85 4.329.93l-3.58 11.4c0 .013 7.744 2.108 7.744 2.108l2.078 9.54 4.766-1.999zm-4.203-16.88a17.35 17.35 0 0 1-.384 1.287 26.695 26.695 0 0 1-.595 1.539c-.484 1.097-1.082 2.166-1.81 3.145l-1.283-8.107 4.072-1.259v3.395zm-5.75 1.763l1.28 8.097a8.4 8.4 0 0 1-2.093-2.83L5.384 8.862zm5.178-6.264c.414-1.019.937-1.736 1.473-2.097a3.543 3.543 0 0 0-.277 1.058l-.011.074-1.185.366v-.018c0-.005 0-.01.002-.016a4.003 4.003 0 0 1-.002-.367zm2.02.596c.012-.4.082-.82.21-1.243.317.47.56 1.105.696 1.944l-1.059.327a5.24 5.24 0 0 1 .152-1.028z" />
      </svg>
    ),
  },
  {
    name: "Vercel",
    color: "#ffffff",
    darkColor: "#000000",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 22.525H0l12-21.05 12 21.05z" />
      </svg>
    ),
  },
  {
    name: "Git",
    color: "#F05032",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.546 10.93L13.067.452c-.604-.603-1.582-.603-2.188 0L8.708 2.627l2.76 2.76c.645-.215 1.379-.07 1.889.441.516.515.658 1.258.438 1.9l2.658 2.66c.645-.223 1.387-.078 1.9.435.721.72.721 1.884 0 2.604-.719.719-1.881.719-2.6 0-.539-.541-.674-1.337-.404-1.996L12.86 8.955v6.525c.176.086.342.203.488.348.713.721.713 1.883 0 2.6-.719.721-1.889.721-2.609 0-.719-.719-.719-1.879 0-2.598.182-.18.387-.316.605-.406V8.835c-.217-.091-.424-.222-.604-.401-.545-.545-.676-1.342-.396-2.009L7.636 3.7.45 10.881c-.6.605-.6 1.584 0 2.189l10.48 10.477c.604.604 1.582.604 2.186 0l10.43-10.43c.605-.603.605-1.582 0-2.187" />
      </svg>
    ),
  },
];

function TechStackSection() {
  const items = [...techStack, ...techStack];

  return (
    <section aria-labelledby="tech-heading" className="py-20 md:py-24 section-warm relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-8 mb-10">
        <div className="flex flex-col items-center gap-3 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            Technologies We Use
          </span>
          <h2
            id="tech-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            Built With the{" "}
            <span className="text-brand">Best Tools Available</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Modern, battle-tested technologies that ensure your website is fast,
            secure, and built to last.
          </p>
        </div>
      </div>

      {/* Marquee strip */}
      <div className="relative">
        {/* Fade masks */}
        <div aria-hidden="true" className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-r from-[var(--color-background)] to-transparent" />
        <div aria-hidden="true" className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 z-10 bg-gradient-to-l from-[var(--color-background)] to-transparent" />

        <div className="flex w-max animate-marquee-slow gap-0 py-3">
          {items.map((tech, i) => (
            <div
              key={i}
              aria-hidden={i >= techStack.length}
              className="group mx-3 flex flex-shrink-0 items-center gap-3 rounded-xl border border-border bg-card px-5 py-3.5 shadow-sm hover:border-brand/30 hover:shadow-md transition-all duration-200 cursor-default"
            >
              {/* Logo */}
              <span
                className="flex h-7 w-7 flex-shrink-0 items-center justify-center"
                style={{ color: tech.color }}
              >
                <span className="h-6 w-6 block [&>svg]:h-full [&>svg]:w-full">
                  {tech.icon}
                </span>
              </span>
              {/* Name */}
              <span className="text-sm font-semibold text-foreground whitespace-nowrap">
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Section 10: Testimonials ── */
const testimonials = [
  {
    name: "Priya Sharma",
    business: "The Glow Room",
    type: "Beauty Salon, Delhi",
    rating: 5,
    avatar: "PS",
    avatarBg: "from-pink-400 to-rose-500",
    review:
      "Prashant delivered our new salon website in just 10 days — it looks absolutely stunning on every device. Our Instagram followers actually ask about the website now! The booking form alone has saved us hours every week. Highly recommend.",
  },
  {
    name: "Dr. Ankit Mehta",
    business: "Mehta Dental & Implant Clinic",
    type: "Dental Clinic, Pune",
    rating: 5,
    avatar: "AM",
    avatarBg: "from-blue-400 to-indigo-500",
    review:
      "We needed a website that matched the premium feel of our clinic. Growthentic nailed it — the design is clean, the animations are smooth, and patients keep complimenting us on it. Response time during the project was excellent, never felt left in the dark.",
  },
  {
    name: "Sunita Bose",
    business: "La Petite Boutique",
    type: "Fashion Boutique, Kolkata",
    rating: 4.9,
    avatar: "SB",
    avatarBg: "from-amber-400 to-orange-500",
    review:
      "Very professional from start to finish. He understood what our brand needed even when we weren't sure ourselves. The website launched on time and within budget. Our online enquiries have gone up noticeably since launch.",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill={star <= Math.floor(rating) ? "currentColor" : "none"}
          stroke="currentColor"
          strokeWidth="1.5"
          className="text-brand"
          aria-hidden="true"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
      <span className="ml-1.5 text-xs font-semibold text-brand">{rating}</span>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section
      aria-labelledby="testimonials-heading"
      className="py-20 md:py-28 bg-background relative overflow-hidden"
    >
      {/* Decorative quote mark */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-[220px] font-serif leading-none text-brand/4 select-none"
      >
        &ldquo;
      </div>

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Heading */}
        <div data-fade className="mb-14 flex flex-col items-center gap-4 text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            Client Reviews
          </span>
          <h2
            id="testimonials-heading"
            className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            What Our Clients{" "}
            <span className="text-brand">Actually Say</span>
          </h2>
          <p className="max-w-xl text-base text-muted-foreground leading-relaxed">
            Real feedback from real business owners — no filters, no fluff.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className={`group relative flex flex-col gap-5 rounded-2xl border border-border bg-card p-7 hover-lift hover:border-brand/20 transition-colors overflow-hidden ${i === 1 ? "lg:translate-y-4" : ""}`}
            >
              {/* Hover glow */}
              <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-brand/0 group-hover:bg-brand/[0.025] transition-colors duration-300" />

              {/* Top: rating + opening quote */}
              <div className="relative flex items-start justify-between">
                <StarRating rating={t.rating} />
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-brand/15 flex-shrink-0"
                  aria-hidden="true"
                >
                  <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003z" />
                </svg>
              </div>

              {/* Review text */}
              <blockquote className="relative flex-1">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  &ldquo;{t.review}&rdquo;
                </p>
              </blockquote>

              {/* Divider */}
              <div className="relative h-px w-full bg-border group-hover:bg-brand/20 transition-colors" />

              {/* Client info */}
              <figcaption className="relative flex items-center gap-3">
                {/* Avatar */}
                <div
                  className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${t.avatarBg} text-xs font-bold text-white shadow-sm`}
                  aria-hidden="true"
                >
                  {t.avatar}
                </div>
                <div className="flex flex-col gap-0.5 min-w-0">
                  <span className="text-sm font-bold text-foreground truncate">
                    {t.name}
                  </span>
                  <span className="text-xs text-brand font-medium truncate">
                    {t.business}
                  </span>
                  <span className="text-[10px] text-muted-foreground truncate">
                    {t.type}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Bottom row: aggregate rating + CTA */}
        <div className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center sm:gap-8">
          {/* Aggregate rating badge */}
          <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-5 py-3 shadow-sm">
            <div className="flex items-center gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg key={s} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="text-brand" aria-hidden="true">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground leading-tight">4.9 / 5.0</span>
              <span className="text-[10px] text-muted-foreground">Average client rating</span>
            </div>
          </div>

          <Link
            href="/work"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors shadow-sm"
          >
            Read All Reviews
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ── Section 11: Final CTA Banner ── */
function CtaBanner() {
  return (
    <section
      aria-labelledby="cta-heading"
      className="relative overflow-hidden py-24 md:py-32"
    >
      {/* Rich layered background */}
      <div aria-hidden="true" className="absolute inset-0 bg-foreground dark:bg-card" />

      {/* Amber radial glow — top left */}
      <div aria-hidden="true" className="absolute -top-24 -left-24 h-[500px] w-[500px] rounded-full bg-brand/20 blur-[120px]" />
      {/* Secondary glow — bottom right */}
      <div aria-hidden="true" className="absolute -bottom-24 -right-24 h-[400px] w-[400px] rounded-full bg-brand/15 blur-[100px]" />

      {/* Dot grid */}
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Top edge amber line */}
      <div aria-hidden="true" className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent" />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center flex flex-col items-center gap-8">

        {/* Eyebrow */}
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/40 bg-brand/15 px-4 py-1.5 text-xs font-semibold text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Ready When You Are
        </span>

        {/* Headline */}
        <h2
          id="cta-heading"
          className="font-heading text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl"
        >
          Your Business Deserves a Website{" "}
          <span className="text-brand">That Actually Works</span>{" "}
          for You
        </h2>

        {/* Sub */}
        <p className="max-w-xl text-lg text-white/60 leading-relaxed">
          Let&apos;s build something your customers will remember. Fast delivery,
          transparent pricing, and results you can see.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-8 py-4 text-base font-bold text-brand-foreground shadow-xl shadow-brand/30 transition-all hover:opacity-90 hover:scale-105 hover:shadow-brand/40 active:scale-95"
            aria-label="Start your project"
          >
            Start Your Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>

          <a
            href="https://wa.me/917972052896"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 rounded-xl border border-white/20 bg-white/8 px-8 py-4 text-base font-bold text-white backdrop-blur-sm transition-all hover:bg-white/15 hover:border-white/30 active:scale-95"
            aria-label="Chat on WhatsApp"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#25D366]" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Bottom trust row */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
          {[
            { icon: "⚡", text: "7–14 day delivery" },
            { icon: "💬", text: "Reply within 2 hours" },
            { icon: "🔒", text: "No upfront full payment" },
          ].map(({ icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-sm text-white/50">
              <span aria-hidden="true">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
