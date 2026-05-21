import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground p-10 flex flex-col gap-10">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="font-heading text-3xl font-bold">
          Growthentic <span className="text-brand">Design System</span>
        </h1>
        <ThemeToggle />
      </div>

      {/* Color swatches */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-semibold">Color Palette</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Swatch label="Background" className="bg-background border border-border" />
          <Swatch label="Card" className="bg-card border border-border" />
          <Swatch label="Muted" className="bg-muted" />
          <Swatch label="Secondary" className="bg-secondary" />
          <Swatch label="Brand (Amber)" className="bg-brand" textClass="text-brand-foreground" />
          <Swatch label="Primary" className="bg-primary" textClass="text-primary-foreground" />
          <Swatch label="Destructive" className="bg-destructive text-white" textClass="text-white" />
          <Swatch label="Border" className="bg-border" />
        </div>
      </section>

      {/* Typography */}
      <section className="flex flex-col gap-3">
        <h2 className="font-heading text-xl font-semibold">Typography</h2>
        <p className="font-heading text-5xl font-extrabold leading-tight">
          Syne Heading — Bold &amp; Confident
        </p>
        <p className="font-heading text-2xl font-semibold gradient-text">
          Gradient Display Text
        </p>
        <p className="text-lg text-foreground leading-relaxed max-w-prose">
          DM Sans body copy — clean, warm, highly readable at all sizes. Perfect
          for explaining services to non-technical Indian business owners.
        </p>
        <p className="text-sm text-muted-foreground">
          Muted foreground — captions, meta info, secondary details
        </p>
      </section>

      {/* Utility classes */}
      <section className="flex flex-col gap-4">
        <h2 className="font-heading text-xl font-semibold">Utilities</h2>
        <div className="flex flex-wrap gap-3">
          <button className="bg-brand text-brand-foreground font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Brand CTA Button
          </button>
          <button className="bg-primary text-primary-foreground font-semibold px-5 py-2 rounded-lg hover:opacity-90 transition-opacity">
            Primary Button
          </button>
          <button className="border border-brand text-brand font-semibold px-5 py-2 rounded-lg hover:bg-brand hover:text-brand-foreground transition-colors">
            Outline Brand
          </button>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 mt-2">
          <div className="hover-lift bg-card border border-border rounded-xl p-5 cursor-pointer">
            <p className="font-heading font-bold text-sm text-brand mb-1">hover-lift</p>
            <p className="text-sm text-muted-foreground">Hover to see card lift + shadow</p>
          </div>
          <div className="gradient-mesh rounded-xl p-5 border border-border">
            <p className="font-heading font-bold text-sm text-brand mb-1">gradient-mesh</p>
            <p className="text-sm text-muted-foreground">Ambient radial gradient background</p>
          </div>
          <div className="section-warm rounded-xl p-5 border border-border">
            <p className="font-heading font-bold text-sm text-brand mb-1">section-warm</p>
            <p className="text-sm text-muted-foreground">Alternate section background</p>
          </div>
        </div>
      </section>

      <p className="text-xs text-muted-foreground mt-auto">
        Step 2 complete — Theme system ready. Next: Navbar + Global Layout.
      </p>
    </main>
  );
}

function Swatch({
  label,
  className,
  textClass = "text-foreground",
}: {
  label: string;
  className: string;
  textClass?: string;
}) {
  return (
    <div className={`rounded-xl p-4 h-20 flex items-end ${className}`}>
      <span className={`text-xs font-semibold ${textClass}`}>{label}</span>
    </div>
  );
}
