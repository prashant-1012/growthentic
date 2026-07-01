"use client";

import * as React from "react";
import { usePathname } from "next/navigation";
import { trackWhatsAppClick } from "@/lib/analytics";

const WHATSAPP_URL = "https://wa.me/917972052896";

interface WhatsAppLinkProps
  extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href"> {
  buttonLocation: string;
  buttonText: string;
}

export function WhatsAppLink({
  buttonLocation,
  buttonText,
  onClick,
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: WhatsAppLinkProps) {
  const pathname = usePathname();

  return (
    <a
      href={WHATSAPP_URL}
      target={target}
      rel={rel}
      onClick={(e) => {
        trackWhatsAppClick({ buttonLocation, buttonText, pagePath: pathname });
        onClick?.(e);
      }}
      {...props}
    />
  );
}
