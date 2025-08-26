import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Créalab",
  description: "Créalab - Midi informatique à la camaradière",
  generator: "Next.js",
  applicationName: "Créalab",
  referrer: "origin-when-cross-origin",
  keywords: ["créalab", "créative", "camaradière", "technologie", "art & tics"],
  authors: [{ name: "L'équipe Créalab" }],
  creator: "Créalab",
  publisher: "Créalab",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://crealab.ca"),
  alternates: {
    canonical: "/",
    languages: {
      "fr-CA": "/fr-CA",
    },
  },
  openGraph: {
    title: "Créalab",
    description: "Créalab - Midi informatique à la camaradière",
    url: "https://crealab.ca",
    siteName: "Créalab",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Créalab - Laboratoire créatif",
      },
    ],
    locale: "fr_CA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Créalab",
    description: "Midi informatique à la camaradière",
    creator: "@crealab",
    images: ["/images/twitter-image.jpg"],
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
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  themeColor: {
    color: "#ffffff"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-geist">
        {children}
      </body>
    </html>
  );
}