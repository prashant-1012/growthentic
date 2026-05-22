import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { FadeInObserver } from "@/components/fade-in";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://growthentic.in"),
  title: {
    default: "Web Developer in Pune, India | Growthentic",
    template: "%s | Growthentic",
  },
  description:
    "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days. Get a free quote.",
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "Growthentic",
    url: "https://growthentic.in",
    title: "Web Developer in Pune, India | Growthentic",
    description:
      "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days. Get a free quote.",
    images: [{ url: "/ogImage.jpeg", width: 1200, height: 630, alt: "Growthentic" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Web Developer in Pune, India | Growthentic",
    description:
      "Affordable, professional websites for Indian small businesses. Next.js & React. Delivered in 7–14 days. Get a free quote.",
    images: ["/ogImage.jpeg"],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakartaSans.variable} ${dmSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <FadeInObserver />
          <Navbar />
          {/* pt-16 clears the fixed navbar height (64px) */}
          <div className="flex flex-col flex-1 pt-16">
            {children}
          </div>
          <Footer />
          <WhatsAppButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
