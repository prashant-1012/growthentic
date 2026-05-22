"use client";

import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

type Status = "idle" | "loading" | "success" | "error";

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
  const [form, setForm]     = useState<FormState>(empty);
  const [status, setStatus] = useState<Status>("idle");
  const [toast, setToast]   = useState(false);

  function set(key: keyof FormState, value: string) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    emailjs
      .send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name:          form.name,
          email:         form.email,
          whatsapp:      form.whatsapp,
          business_type: form.businessType,
          service:       form.service,
          budget:        form.budget,
          message:       form.details,
          title:         "Growthentic Enquiry",
          time:          new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
        },
        PUBLIC_KEY
      )
      .then(() => {
        setStatus("success");
        setForm(empty);
        setToast(true);
        setTimeout(() => {
          setToast(false);
          setStatus("idle");
        }, 5000);
      })
      .catch(() => {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      });
  }

  const isLoading = status === "loading";

  return (
    <div className="relative">
      {/* Toast — success */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className="fixed bottom-4 left-4 right-4 z-50 flex items-start gap-3 rounded-2xl border border-border bg-card px-5 py-4 shadow-2xl sm:left-auto sm:right-6 sm:bottom-6 sm:max-w-sm animate-in slide-in-from-bottom-4 fade-in duration-300"
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
              name="name"
              placeholder="Priya Sharma"
              value={form.name}
              onChange={(e) => set("name", e.target.value)}
              required
              disabled={isLoading}
              className={inputCls}
            />
          </Field>
          <Field label="Email Address" required>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={(e) => set("email", e.target.value)}
              required
              disabled={isLoading}
              className={inputCls}
            />
          </Field>
        </div>

        {/* Row 2 */}
        <div className="grid gap-4 sm:grid-cols-2">
          <Field label="WhatsApp Number" required>
            <input
              type="tel"
              name="whatsapp"
              placeholder="+91 98765 43210"
              value={form.whatsapp}
              onChange={(e) => set("whatsapp", e.target.value)}
              required
              disabled={isLoading}
              className={inputCls}
            />
          </Field>
          <Field label="Business Type" required>
            <select
              name="businessType"
              value={form.businessType}
              onChange={(e) => set("businessType", e.target.value)}
              required
              disabled={isLoading}
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
              name="service"
              value={form.service}
              onChange={(e) => set("service", e.target.value)}
              required
              disabled={isLoading}
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
              name="budget"
              value={form.budget}
              onChange={(e) => set("budget", e.target.value)}
              required
              disabled={isLoading}
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
            name="details"
            placeholder="Tell us about your project — what you do, what you need, any inspiration or references…"
            value={form.details}
            onChange={(e) => set("details", e.target.value)}
            disabled={isLoading}
            className={`${inputCls} resize-none`}
          />
        </Field>

        {/* Error message */}
        {status === "error" && (
          <p className="text-sm text-red-500 font-medium text-center">
            Something went wrong — please try again or WhatsApp us directly.
          </p>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={isLoading}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand px-6 py-3 text-sm font-semibold text-brand-foreground transition-all hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:scale-100"
        >
          {isLoading ? (
            <>
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" /></svg>
              Sending…
            </>
          ) : (
            <>
              Send My Request
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </>
          )}
        </button>
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
  "w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/60 outline-none transition-colors focus:border-brand focus:ring-2 focus:ring-brand/20 disabled:opacity-50 disabled:cursor-not-allowed";

const selectCls = (val: string) =>
  `${inputCls} ${val ? "text-foreground" : "text-muted-foreground/60"} cursor-pointer`;
