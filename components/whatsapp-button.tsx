"use client";

import * as React from "react";
import { WhatsAppIcon } from "@/components/navbar";
import { WhatsAppLink } from "@/components/whatsapp-link";

export function WhatsAppButton() {
  const [visible, setVisible] = React.useState(false);

  /* Fade in after a short delay so it doesn't flash immediately on load */
  React.useEffect(() => {
    const t = setTimeout(() => setVisible(true), 1200);
    return () => clearTimeout(t);
  }, []);

  return (
    <WhatsAppLink
      buttonLocation="floating_button"
      buttonText="Chat with us on WhatsApp"
      aria-label="Chat with us on WhatsApp"
      className={`fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-all duration-500 hover:scale-110 hover:shadow-xl active:scale-95 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
      style={{ willChange: "transform, opacity" }}
    >
      {/* Pulse ring */}
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"
        style={{ animationDuration: "2s" }}
      />
      <WhatsAppIcon size={26} />
    </WhatsAppLink>
  );
}
