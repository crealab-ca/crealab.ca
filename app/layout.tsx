import type { Metadata } from "next";
import Header from "@/app/components/header";
import "./globals.css";

export const metadata: Metadata = {
  title: "Créalab",
  description: "Créalab - Midi informatique à la camaradière",
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
        alt: "Créalab",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Créalab",
    description: "Midi informatique à la camaradière",
    creator: "@crealab",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-geist">
        <Header />
        {children}
      </body>
    </html>
  );
}