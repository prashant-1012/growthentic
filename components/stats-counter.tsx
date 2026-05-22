"use client";

import * as React from "react";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  description: string;
}

const stats: StatItem[] = [
  { value: 5,   suffix: "+",   label: "Projects Shipped",   description: "Real websites live and growing" },
  { value: 100, suffix: "%",   label: "On-Time Delivery",   description: "Every project, delivered as promised" },
  { value: 14,  suffix: " Days", prefix: "7–", label: "Avg. Turnaround", description: "From kickoff to launch-ready" },
  { value: 4.9, suffix: "★",   label: "Client Rating",      description: "Across all completed projects" },
];

function useCountUp(target: number, duration: number, active: boolean) {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!active) return;
    const isDecimal = target % 1 !== 0;
    const steps = 50;
    const increment = target / steps;
    const interval = duration / steps;
    let current = 0;
    let frame = 0;

    const timer = setInterval(() => {
      frame++;
      current = Math.min(increment * frame, target);
      setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
      if (current >= target) clearInterval(timer);
    }, interval);

    return () => clearInterval(timer);
  }, [active, target, duration]);

  return count;
}

function StatCard({ stat }: { stat: StatItem }) {
  const ref = React.useRef<HTMLDivElement>(null);
  const [active, setActive] = React.useState(false);
  const count = useCountUp(stat.value, 1200, active);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActive(true); },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="group relative flex flex-col items-center gap-2 rounded-2xl border border-border bg-card p-7 text-center hover-lift hover:border-brand/30 transition-colors"
    >
      {/* Subtle amber glow on hover */}
      <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-brand/0 group-hover:bg-brand/3 transition-colors duration-300" />

      <div className="relative font-heading text-4xl font-extrabold text-foreground sm:text-5xl">
        {stat.prefix && <span className="text-muted-foreground text-2xl sm:text-3xl">{stat.prefix}</span>}
        <span className="text-brand">{count}</span>
        <span className="text-2xl sm:text-3xl">{stat.suffix}</span>
      </div>

      <p className="font-heading text-sm font-bold uppercase tracking-widest text-foreground">
        {stat.label}
      </p>
      <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
    </div>
  );
}

export function StatsSection() {
  return (
    <section aria-label="Key stats" className="py-16 md:py-20 section-warm">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
