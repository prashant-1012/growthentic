import { FaqList } from "@/components/faq-list";
import { faqs } from "./faq-data";

export function FaqAccordion() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="py-20 md:py-28 mx-auto w-full max-w-3xl px-5 md:px-8"
    >
      {/* Heading */}
      <div data-fade className="mb-12 flex flex-col items-center gap-4 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand/8 px-4 py-1.5 text-xs font-semibold text-brand">
          FAQ
        </span>
        <h2
          id="faq-heading"
          className="font-heading text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        >
          Questions We Hear{" "}
          <span className="text-brand">All the Time</span>
        </h2>
        <p className="max-w-md text-base text-muted-foreground leading-relaxed">
          Straight answers — no fluff.
        </p>
      </div>

      <FaqList faqs={faqs} />
    </section>
  );
}
