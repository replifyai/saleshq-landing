import { LandingNavigation } from "@/components/landing";
import FooterSection from "@/components/landing/FooterSection";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { bricolage, jetbrainsMono } from "./fonts";
import Script from "next/script";
import "./globals.css";
import ThemeProvider from "@/providers/theme-provider";
import JsonLd, { SITE_URL } from "@/components/seo/JsonLd";

const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "SalesHQ",
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description:
    "SalesHQ is an AI platform across the whole revenue motion: an intent-driven AI shopping assistant for Shopify, a referral & affiliate growth platform for D2C brands, and a real-time sales assistant for revenue teams.",
  sameAs: ["https://twitter.com/SalesHQ"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "SalesHQ",
  url: SITE_URL,
};
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SalesHQ – AI Shopping Assistant for Shopify, Referrals & Sales Teams",
    template: "%s | SalesHQ",
  },
  description: "SalesHQ is an AI platform across your whole revenue motion: SalesHQ for Shopify (an intent-driven AI shopping assistant that turns browsers into buyers), a Referral & Affiliate growth platform for D2C brands, and a real-time Sales Assistant that gives reps instant, source-backed answers on live calls.",
  keywords: [
    "AI shopping assistant",
    "Shopify AI chatbot",
    "Shopify shopping assistant",
    "ecommerce AI assistant",
    "referral and affiliate platform",
    "D2C referral program",
    "UPI affiliate payouts",
    "AI sales assistant",
    "real-time call assistant",
    "sales enablement",
    "conversational commerce",
    "intent-driven chatbot",
  ],
  authors: [{ name: "SalesHQ" }],
  creator: "SalesHQ",
  publisher: "SalesHQ",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://SalesHQ.ai"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google-site-verification-code", // Replace with actual verification code when available
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://SalesHQ.ai",
    siteName: "SalesHQ",
    title: "SalesHQ – AI for Shopify, Referrals & Sales Teams",
    description: "SalesHQ is an AI platform across your whole revenue motion: SalesHQ for Shopify (an intent-driven AI shopping assistant that turns browsers into buyers), a Referral & Affiliate growth platform for D2C brands, and a real-time Sales Assistant that gives reps instant, source-backed answers on live calls.",
    images: [
      {
        url: "https://SalesHQ.ai/og-image.png",
        width: 1200,
        height: 630,
        alt: "SalesHQ – AI for Shopify, Referrals & Sales Teams",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SalesHQ – AI for Shopify, Referrals & Sales Teams",
    description: "SalesHQ is an AI platform across your whole revenue motion: SalesHQ for Shopify (an intent-driven AI shopping assistant that turns browsers into buyers), a Referral & Affiliate growth platform for D2C brands, and a real-time Sales Assistant that gives reps instant, source-backed answers on live calls.",
    images: ["https://SalesHQ.ai/og-image.png"],
    creator: "@SalesHQ",
    site: "@SalesHQ",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/icon/favicon.ico", sizes: "any" },
      { url: "/icon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon/favicon-32x32.png", sizes: "32x32", type: "image/png" }
    ],
    apple: [
      { url: "/icon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }
    ],
    other: [
      {
        rel: "icon",
        url: "/icon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        rel: "icon",
        url: "/icon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  },
  manifest: "/icon/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/icon/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="icon" href="/icon/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="apple-touch-icon" href="/icon/apple-touch-icon.png" />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="msapplication-config" content="/icon/browserconfig.xml" />
        <link rel="preload" href="/logo.png" as="image" />
      </head>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} ${bricolage.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <JsonLd data={[orgSchema, websiteSchema]} />
        {/* Google Tag Manager */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TVT4BKMB');`,
          }}
        />
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TVT4BKMB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider>
          <div className="min-h-screen bg-background">
            <LandingNavigation />
            {children}
            <FooterSection />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

