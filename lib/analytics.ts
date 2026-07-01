import { sendGAEvent } from "@next/third-parties/google";

/**
 * Maps a pathname to a human-readable page name for GA4 reports.
 * Centralised here so every tracked event reports a consistent page_name.
 */
export function getPageName(pathname: string): string {
  if (pathname === "/") return "Home";
  if (pathname === "/work") return "Work";
  if (pathname === "/services") return "Services";
  if (pathname === "/about") return "About";
  if (pathname === "/contact") return "Contact";
  if (pathname === "/blog") return "Blog";
  if (pathname.startsWith("/blog/")) return "Blog Post";
  return pathname;
}

type EventParams = Record<string, string | number | boolean>;

function trackEvent(eventName: string, params: EventParams) {
  sendGAEvent("event", eventName, params);
}

function pageContext(pagePath: string) {
  return { page_name: getPageName(pagePath), page_path: pagePath };
}

// ── Priority 1: Lead generation ──────────────────────────────────────────

interface WhatsAppClickParams {
  buttonLocation: string;
  buttonText: string;
  pagePath: string;
}

export function trackWhatsAppClick({ buttonLocation, buttonText, pagePath }: WhatsAppClickParams) {
  trackEvent("whatsapp_click", {
    button_location: buttonLocation,
    button_text: buttonText,
    ...pageContext(pagePath),
  });
}

interface PhoneClickParams {
  buttonLocation: string;
  pagePath: string;
}

export function trackPhoneClick({ buttonLocation, pagePath }: PhoneClickParams) {
  trackEvent("phone_click", {
    button_location: buttonLocation,
    ...pageContext(pagePath),
  });
}

interface EmailClickParams {
  buttonLocation: string;
  pagePath: string;
}

export function trackEmailClick({ buttonLocation, pagePath }: EmailClickParams) {
  trackEvent("email_click", {
    button_location: buttonLocation,
    ...pageContext(pagePath),
  });
}

interface ContactFormSubmitParams {
  serviceInterested: string;
  businessType: string;
  budgetRange: string;
}

export function trackContactFormSubmit({
  serviceInterested,
  businessType,
  budgetRange,
}: ContactFormSubmitParams) {
  trackEvent("contact_form_submit", {
    service_interested: serviceInterested,
    business_type: businessType,
    budget_range: budgetRange,
    ...pageContext("/contact"),
  });
}

interface CTAClickParams {
  ctaText: string;
  buttonLocation: string;
  pagePath: string;
  destination: string;
}

export function trackCTAClick({ ctaText, buttonLocation, pagePath, destination }: CTAClickParams) {
  trackEvent("cta_click", {
    button_text: ctaText,
    button_location: buttonLocation,
    destination,
    ...pageContext(pagePath),
  });
}

// ── Priority 2: Engagement ───────────────────────────────────────────────

interface NavClickParams {
  linkText: string;
  linkUrl: string;
  navType: "desktop" | "mobile";
  pagePath: string;
}

export function trackNavClick({ linkText, linkUrl, navType, pagePath }: NavClickParams) {
  trackEvent("nav_click", {
    link_text: linkText,
    link_url: linkUrl,
    nav_type: navType,
    ...pageContext(pagePath),
  });
}

interface FooterLinkClickParams {
  linkText: string;
  linkUrl: string;
  linkCategory: string;
  pagePath: string;
}

export function trackFooterLinkClick({
  linkText,
  linkUrl,
  linkCategory,
  pagePath,
}: FooterLinkClickParams) {
  trackEvent("footer_link_click", {
    link_text: linkText,
    link_url: linkUrl,
    link_category: linkCategory,
    ...pageContext(pagePath),
  });
}

interface PortfolioClickParams {
  projectName: string;
  linkType: "live_demo" | "case_study" | "github";
  pagePath: string;
}

export function trackPortfolioClick({ projectName, linkType, pagePath }: PortfolioClickParams) {
  trackEvent("portfolio_click", {
    project_name: projectName,
    link_type: linkType,
    ...pageContext(pagePath),
  });
}

interface ServiceCardClickParams {
  serviceName: string;
  pagePath: string;
}

export function trackServiceCardClick({ serviceName, pagePath }: ServiceCardClickParams) {
  trackEvent("service_card_click", {
    service_name: serviceName,
    ...pageContext(pagePath),
  });
}

interface FaqExpandParams {
  question: string;
  pagePath: string;
}

export function trackFaqExpand({ question, pagePath }: FaqExpandParams) {
  trackEvent("faq_expand", {
    question,
    ...pageContext(pagePath),
  });
}

// ── Priority 3 ────────────────────────────────────────────────────────────

interface SocialClickParams {
  platform: string;
  linkLocation: string;
  pagePath: string;
}

export function trackSocialClick({ platform, linkLocation, pagePath }: SocialClickParams) {
  trackEvent("social_click", {
    platform,
    link_location: linkLocation,
    ...pageContext(pagePath),
  });
}

interface BlogClickParams {
  postTitle: string;
  postSlug: string;
  source: "blog_list" | "related_posts";
}

export function trackBlogClick({ postTitle, postSlug, source }: BlogClickParams) {
  trackEvent("blog_click", {
    post_title: postTitle,
    post_slug: postSlug,
    source,
    ...pageContext("/blog"),
  });
}
