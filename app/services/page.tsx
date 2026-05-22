import type { Metadata } from "next";
import Link from "next/link";
import { WhatWeBuild } from "./what-we-build";
import { FaqAccordion } from "./faq-accordion";

export const metadata: Metadata = {
  title: "Web Design & Development Services + Pricing | Growthentic",
  description:
    "Explore our services: business websites, landing pages, e-commerce, and more. Transparent pricing starting from ₹4,000.",
  alternates: { canonical: "https://growthentic.in/services" },
  openGraph: {
    url: "https://growthentic.in/services",
    title: "Web Design & Development Services + Pricing | Growthentic",
    description:
      "Explore our services: business websites, landing pages, e-commerce, and more. Transparent pricing starting from ₹4,000.",
    images: [{ url: "/ogImage.jpeg", width: 1200, height: 630, alt: "Growthentic Services" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Design & Development Services + Pricing | Growthentic",
    description:
      "Explore our services: business websites, landing pages, e-commerce, and more. Transparent pricing starting from ₹4,000.",
    images: ["/ogImage.jpeg"],
  },
};

export default function ServicesPage() {
  return (
    <main className="flex flex-col">
      <ServicesHero />
      <ServiceCards />
      <WhatWeBuild />
      <FaqAccordion />
    </main>
  );
}

/* ── Hero ── */
function ServicesHero() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-[-10%] left-[-5%] h-[500px] w-[500px] rounded-full bg-brand/10 blur-[120px] animate-pulse-slow" />
        <div className="absolute bottom-[-10%] right-[-5%] h-[400px] w-[400px] rounded-full bg-brand/6 blur-[100px] animate-pulse-slow" style={{ animationDelay: "1.5s" }} />
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
            <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
            Services & Pricing
          </span>

          <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Everything You Need.{" "}
            <span className="text-brand">Nothing You Don't.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Transparent pricing, clear deliverables, and realistic timelines — so you know exactly
            what you're getting before we start.
          </p>

          <p className="text-sm font-semibold text-brand">
            Most websites delivered in 7–14 days
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Service Cards ── */
interface Service {
  icon: React.ReactNode;
  title: string;
  price: string;
  timeline: string;
  description: string;
  includes: string[];
  highlight?: boolean;
}

const services: Service[] = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 21V9" />
      </svg>
    ),
    title: "Static / Business Website",
    price: "₹10,000",
    timeline: "7–10 days",
    description:
      "Your business deserves a home on the web that builds trust the moment someone lands on it. We craft multi-page static websites with fast load times, beautiful design, and clear calls to action.",
    includes: [
      "Up to 6 pages",
      "Responsive design",
      "Contact form",
      "WhatsApp integration",
      "Basic SEO setup",
      "1 round of revisions",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
    title: "Landing Page",
    price: "₹6,000",
    timeline: "3–5 days",
    description:
      "One page. One goal. Maximum conversions. Whether you're running ads, launching a product, or promoting a service — a focused landing page turns clicks into customers.",
    includes: [
      "Single page",
      "Conversion-focused layout",
      "Lead capture form",
      "Fast hosting setup",
      "Mobile optimised",
      "Delivered in 3–5 days",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="9" cy="21" r="1" /><circle cx="20" cy="21" r="1" /><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
    title: "E-Commerce Store",
    price: "₹22,000",
    timeline: "14–21 days",
    description:
      "Sell online with confidence. We build fully functional online stores with product listings, cart, checkout, and payment integration — ready to take orders from day one.",
    includes: [
      "Product catalogue",
      "Cart & checkout",
      "Payment gateway",
      "Order management",
      "Mobile-first design",
      "Basic SEO",
    ],
    highlight: true,
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    title: "Dynamic Web App",
    price: "₹30,000",
    timeline: "21–30 days",
    description:
      "Need something more complex? Dashboards, booking systems, member portals, admin panels — we build custom web applications that work exactly the way your business needs them to.",
    includes: [
      "Custom backend",
      "Database integration",
      "User authentication",
      "Admin panel",
      "API development",
      "Full documentation",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
      </svg>
    ),
    title: "Website Redesign",
    price: "₹8,000",
    timeline: "5–7 days",
    description:
      "Your old website is costing you credibility. We take what you have, strip it back, and rebuild it with modern design, better performance, and a structure that actually converts.",
    includes: [
      "Full visual redesign",
      "Content migration",
      "Speed optimisation",
      "Mobile responsiveness",
      "SEO preservation",
      "1 round of revisions",
    ],
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "SEO + Performance Audit",
    price: "₹4,000",
    timeline: "2–3 days",
    description:
      "Find out exactly why your website isn't ranking or converting. We deliver a detailed audit with actionable fixes — covering page speed, Core Web Vitals, on-page SEO, and mobile usability.",
    includes: [
      "Full site crawl",
      "Core Web Vitals report",
      "Keyword gap analysis",
      "On-page SEO checklist",
      "Written recommendations report",
    ],
  },
];

function ServiceCards() {
  return (
    <section
      aria-labelledby="services-heading"
      className="mx-auto w-full max-w-7xl px-5 md:px-8 pb-24"
    >
      <h2 id="services-heading" className="sr-only">Our Services</h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <article
            key={s.title}
            className={[
              "group relative flex flex-col rounded-2xl border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
              s.highlight
                ? "border-brand/40 ring-1 ring-brand/20"
                : "border-border",
            ].join(" ")}
          >
            {s.highlight && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-brand px-3 py-0.5 text-[11px] font-bold text-brand-foreground shadow">
                Most Popular
              </span>
            )}

            {/* Hover glow */}
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{ boxShadow: "0 0 50px oklch(0.769 0.162 70 / 0.08)" }}
            />

            {/* Icon */}
            <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl border border-brand/20 bg-brand/8 text-brand">
              {s.icon}
            </div>

            {/* Title + price */}
            <div className="mb-3 flex items-start justify-between gap-2">
              <h3 className="font-heading text-lg font-bold text-foreground leading-tight group-hover:text-brand transition-colors">
                {s.title}
              </h3>
              <div className="flex-shrink-0 text-right">
                <div className="font-heading text-base font-extrabold text-brand leading-tight">
                  {s.price}
                </div>
                <div className="text-[11px] text-muted-foreground">starting</div>
              </div>
            </div>

            {/* Timeline badge */}
            <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
              {s.timeline}
            </span>

            {/* Description */}
            <p className="mb-5 text-sm text-muted-foreground leading-relaxed flex-1">
              {s.description}
            </p>

            {/* Includes */}
            <ul className="mb-6 flex flex-col gap-1.5">
              {s.includes.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <svg
                    className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/contact"
              className={[
                "inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all hover:opacity-90",
                s.highlight
                  ? "bg-brand text-brand-foreground"
                  : "border border-border bg-background text-foreground hover:border-brand/40 hover:text-brand",
              ].join(" ")}
            >
              Get a Quote
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}
