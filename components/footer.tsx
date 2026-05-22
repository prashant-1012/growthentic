import Link from "next/link";
import { WhatsAppIcon } from "@/components/navbar";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Our Work" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services#business-website", label: "Business Website" },
  { href: "/services#landing-page", label: "Landing Page" },
  { href: "/services#ecommerce", label: "E-Commerce Store" },
  { href: "/services#web-app", label: "Dynamic Web App" },
  { href: "/services#redesign", label: "Website Redesign" },
  { href: "/services#seo-audit", label: "SEO & Performance Audit" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-card">
      {/* Subtle top gradient accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand to-transparent opacity-60"
      />

      {/* Ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-brand/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-5 md:px-8">
        {/* Main footer grid */}
        <div className="grid gap-8 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          {/* Col 1 — Brand */}
          <div className="lg:col-span-1 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-2 group w-fit"
              aria-label="Growthentic — home"
            >
              <FooterLogoIcon />
              <span className="font-heading text-xl font-extrabold tracking-tight text-foreground group-hover:text-brand transition-colors">
                Growthentic
              </span>
            </Link>

            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              We build fast, beautiful, mobile-first websites for Indian small
              businesses ready to grow online.
            </p>

            <p className="text-xs font-semibold text-brand tracking-wide uppercase">
              Design. Develop. Deliver.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-3 mt-1">
              <a
                href="https://instagram.com/growthentic.in"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Growthentic on Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-brand hover:border-brand transition-colors"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Growthentic on LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-brand hover:border-brand transition-colors"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Growthentic on GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground hover:text-brand hover:border-brand transition-colors"
              >
                <GitHubIcon />
              </a>
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {quickLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-muted-foreground group-hover:bg-brand group-hover:w-4 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5" role="list">
              {serviceLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-muted-foreground hover:text-brand transition-colors flex items-center gap-2 group"
                  >
                    <span className="h-px w-3 bg-muted-foreground group-hover:bg-brand group-hover:w-4 transition-all duration-200" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 — Contact */}
          <div className="flex flex-col gap-4">
            <h3 className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
              Get In Touch
            </h3>

            <div className="flex flex-col gap-3">
              <a
                href="https://wa.me/917972052896"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brand transition-colors group"
                aria-label="Chat on WhatsApp"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-green-500/10 text-green-500 group-hover:bg-green-500/20 transition-colors">
                  <WhatsAppIcon size={15} />
                </span>
                +91 79720 52896
              </a>

              <a
                href="mailto:prashant2009kr@gmail.com"
                className="flex items-center gap-3 text-sm text-muted-foreground hover:text-brand transition-colors group"
                aria-label="Send email"
              >
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand/20 transition-colors">
                  <EmailIcon />
                </span>
                hello@growthentic.in
              </a>

              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted">
                  <ClockIcon />
                </span>
                <span>Mon–Sat · 10 AM – 8 PM IST</span>
              </div>

              <div className="mt-1 inline-flex w-fit items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/8 px-3 py-1">
                <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-medium text-green-600 dark:text-green-400">
                  Usually replies in under 2 hours
                </span>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/917972052896"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-2.5 text-sm font-semibold text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-sm"
              aria-label="Chat with us on WhatsApp"
            >
              <WhatsAppIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center gap-3 border-t border-border py-6 sm:flex-row sm:justify-between">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2025 Growthentic · Built with Next.js &amp; ❤️ in India
          </p>
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-brand transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/contact"
              className="text-xs text-muted-foreground hover:text-brand transition-colors"
            >
              Terms of Service
            </Link>
            <span className="text-xs text-muted-foreground flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-brand" />
              Baner, Pune, India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ── Inline SVG icons ── */

function FooterLogoIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect width="28" height="28" rx="7" fill="currentColor" className="text-brand" />
      <path d="M8 19 L14 9 L20 19" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 15.5 H17.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
      <circle cx="20" cy="10" r="2.5" fill="white" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}
