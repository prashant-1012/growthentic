import type { Metadata } from "next";
import { ContactForm } from "./contact-form";

export const metadata: Metadata = {
  title: "Get a Free Website Quote | Contact Growthentic",
  description:
    "Tell us about your project — we'll get back to you within 2 hours. Free quote, no obligation.",
  alternates: { canonical: "https://growthentic.in/contact" },
  openGraph: {
    url: "https://growthentic.in/contact",
    title: "Get a Free Website Quote | Contact Growthentic",
    description:
      "Tell us about your project — we'll get back to you within 2 hours. Free quote, no obligation.",
    images: [{ url: "/og-default.png", width: 1200, height: 630, alt: "Contact Growthentic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Free Website Quote | Contact Growthentic",
    description:
      "Tell us about your project — we'll get back to you within 2 hours. Free quote, no obligation.",
    images: ["/og-default.png"],
  },
};

export default function ContactPage() {
  return (
    <main className="flex flex-col">
      {/* Page header */}
      <section className="relative overflow-hidden py-16 md:py-24">
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <div className="absolute top-[-10%] right-[-5%] h-[480px] w-[480px] rounded-full bg-brand/8 blur-[120px] animate-pulse-slow" />
          <div
            className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col items-center text-center gap-5 max-w-2xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
              <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
              Free Quote
            </span>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl">
              Let&apos;s Build Something{" "}
              <span className="text-brand">Great Together</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Tell us about your project and we&apos;ll get back to you within 2 hours — no obligation, no fluff.
            </p>
          </div>
        </div>
      </section>

      {/* Two-column layout */}
      <section className="mx-auto w-full max-w-7xl px-5 md:px-8 pb-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_380px] lg:gap-16 items-start">
          <ContactForm />
          <ContactSidebar />
        </div>
      </section>
    </main>
  );
}

function ContactSidebar() {
  return (
    <aside className="flex flex-col gap-5 lg:sticky lg:top-24">
      {/* WhatsApp card */}
      <a
        href="https://wa.me/917972052896"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-4 rounded-2xl border border-border bg-card p-5 transition-all duration-200 hover:border-brand/40 hover:shadow-md"
      >
        <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366]">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
        </div>
        <div>
          <p className="text-sm font-bold text-foreground group-hover:text-brand transition-colors">Chat on WhatsApp</p>
          <p className="text-xs text-muted-foreground">+91 7972052896</p>
        </div>
        <svg className="ml-auto text-muted-foreground group-hover:text-brand transition-colors" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
      </a>

      {/* Contact details card */}
      <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-4">
        <p className="text-sm font-bold text-foreground">Other Ways to Reach Us</p>

        {[
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>,
            label: "Email",
            value: "hello@growthentic.in",
            href: "mailto:hello@growthentic.in",
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.44 2 2 0 0 1 3.59 1.25h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6.11 6.11l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
            label: "Phone",
            value: "+91 7972052896",
            href: "tel:+917972052896",
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>,
            label: "Instagram",
            value: "@growthentic.in",
            href: "https://instagram.com/growthentic.in",
          },
          {
            icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>,
            label: "Location",
            value: "Baner, Pune, Maharashtra",
            href: null,
          },
        ].map((item) => (
          <div key={item.label} className="flex items-center gap-3">
            <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
              {item.icon}
            </div>
            <div className="min-w-0">
              <p className="text-[11px] text-muted-foreground">{item.label}</p>
              {item.href ? (
                <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="text-sm font-medium text-foreground hover:text-brand transition-colors truncate block">
                  {item.value}
                </a>
              ) : (
                <p className="text-sm font-medium text-foreground">{item.value}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Hours card */}
      <div className="rounded-2xl border border-border bg-card p-5 flex flex-col gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <p className="text-sm font-bold text-foreground">We&apos;re Available</p>
        </div>
        <p className="text-sm text-muted-foreground">Mon – Sat, 10:00 AM – 8:00 PM IST</p>
        <p className="text-xs font-semibold text-brand">We reply within 2 hours</p>
      </div>
    </aside>
  );
}
