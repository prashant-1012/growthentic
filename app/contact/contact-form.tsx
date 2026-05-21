"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  whatsapp: string;
  businessType: string;
  service: string;
  budget: string;
  details: string;
};

const empty: FormState = {
  name: "",
  email: "",
  whatsapp: "",
  businessType: "",
  service: "",
  budget: "",
  details: "",
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(empty);
  const [submitted, setSubmitted] = useState(false);
  const [toast, setToast] = useState(false);

  function set(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setToast(true);
    setForm(empty);
    setTimeout(() => setToast(false), 5000);
  }

  return (
    <div className="relative">
      {/* Toast */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-6 right-6 z-50 flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-2xl max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-300"
        >
          <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-500/15 text-emerald-500">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="20 6 9 17 4 12" /></svg>
          </div>
          <div>
            <p className="text-sm font-bold text-foreground">Request sent!</p>
            <p className="text-xs text-muted-foreground mt-0.5">
              Thanks! We&apos;ll WhatsApp you within 2 hours 🎉 Check your messages.
            </p>
          </div>
          <button
            onClick={() => setToast(false)}
            className="ml-2 flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Dismiss"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
          </button>
        </div>
      )}

      <form
        onSubmit={handleSubmit}
        className="rounded-2xl border border-border bg-card p-6 md:p-8 flex flex-col gap-6"
        noValidate
      >
        <div>
          <h2 className="font-heading text-xl font-bold text-foreground">Tell Us About Your Project</h2>
          <p className="mt-1 text-sm text-muted-foreground">Fill in the details below and we&apos;ll get back to you within 2 hours.</p>
        </div>

        {/* Row 1 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Full Name" required>
            <input
              type="text"
              placeholder="Priya Sharma"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
              className={inputCls}
            />
          </Field>
          <Field label="Email Address" required>
            <input
              type="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
              className={inputCls}
            />
          </Field>
        </div>

        {/* Row 2 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="WhatsApp Number" required>
            <input
              type="tel"
              placeholder="+91 98765 43210"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              required
              className={inputCls}
            />
          </Field>
          <Field label="Business Type" required>
            <select
              value={form.businessType}
              onChange={(e) => set("businessType", e.target.value)}
              required
              className={selectCls(form.businessType)}
            >
              <option value="" disabled>Select…</option>
              {["Clinic", "Salon", "Restaurant", "Boutique", "Startup", "Other"].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Row 3 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="Service Interested In" required>
            <select
              value={form.service}
              onChange={(e) => set("service", e.target.value)}
              required
              className={selectCls(form.service)}
            >
              <option value="" disabled>Select…</option>
              {[
                "Static / Business Website",
                "Landing Page",
                "E-Commerce Store",
                "Dynamic Web App",
                "Website Redesign",
                "SEO + Performance Audit",
              ].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </Field>
          <Field label="Budget Range" required>
            <select
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
              required
              className={selectCls(form.budget)}
            >
              <option value="" disabled>Select…</option>
              {[
                "Under ₹10,000",
                "₹10,000–₹25,000",
                "₹25,000–₹50,000",
                "₹50,000+",
              ].map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
          </Field>
        </div>

        {/* Textarea */}
        <Field label="Project Details">
          <textarea
            rows={4}
            placeholder="Tell us about your project — what you do, what you need, any inspiration or references…"
            value={form.details}
            onChange={(e) => set("details", e.target.value)}
            className={`${inputCls} resize-none`}
          />
        </Field>

        {/* Submit */}
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60"
        >
          Send My Request
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
        </button>

        {submitted && !toast && (
          <p className="text-sm text-emerald-600 dark:text-emerald-400 font-medium text-center">
            ✓ Request received — we&apos;ll WhatsApp you within 2 hours!
          </p>
        )}
      </form>
    </div>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-xs font-semibold text-foreground">
        {label}
        {required && <span className="ml-0.5 text-brand">*</span>}
      </label>
      {children}
    </div>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20";

const selectCls = (val: string) =>
  `${inputCls} ${val ? "text-foreground" : "text-muted-foreground/60"} cursor-pointer`;
