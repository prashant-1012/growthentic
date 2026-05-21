"use client";

import { useEffect } from "react";

/**
 * Mounts once at root level. Observes every element carrying
 * data-fade or data-fade-delay="Nms" and adds .visible when it enters
 * the viewport — triggering the .fade-in-up CSS transition.
 */
export function FadeInObserver() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>("[data-fade]");
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          const el = entry.target as HTMLElement;
          const delay = parseInt(el.dataset.fadeDelay ?? "0", 10);
          setTimeout(() => el.classList.add("visible"), delay);
          observer.unobserve(el);
        });
      },
      { threshold: 0.12 }
    );

    els.forEach((el) => {
      el.classList.add("fade-in-up");
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return null;
}
