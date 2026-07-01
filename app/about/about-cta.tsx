import Link from "next/link";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function AboutCta() {
  return (
    <section
      aria-labelledby="about-cta-heading"
      className="py-20 md:py-28 bg-secondary/30"
    >
      <div className="mx-auto max-w-3xl px-5 md:px-8 flex flex-col items-center text-center gap-6">
        {/* Ambient glow */}
        <div aria-hidden="true" className="pointer-events-none absolute h-64 w-64 rounded-full bg-brand/10 blur-[80px]" />

        <span className="relative inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
          <span className="h-1.5 w-1.5 rounded-full bg-brand animate-pulse" />
          Let's Work Together
        </span>

        <h2
          id="about-cta-heading"
          className="relative font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        >
          Your Business Deserves a Website That{" "}
          <span className="text-brand">Actually Works for You</span>
        </h2>

        <p className="relative max-w-md text-base text-muted-foreground leading-relaxed">
          Let's build something your customers will remember. Free quote, honest timeline,
          no obligation.
        </p>

        <div className="relative flex flex-wrap gap-3 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground hover:opacity-90 transition-opacity"
          >
            Start Your Project
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
          <WhatsAppLink
            buttonLocation="about_cta"
            buttonText="Chat on WhatsApp"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:border-brand/40 hover:text-brand transition-colors"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
            Chat on WhatsApp
          </WhatsAppLink>
        </div>

        {/* Trust line */}
        <p className="relative text-xs text-muted-foreground">
          Mon–Sat, 10 AM – 8 PM IST · We reply within 2 hours
        </p>
      </div>
    </section>
  );
}
