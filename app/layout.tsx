import type React from "react";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { Suspense } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mikiyas - Full-Stack Developer & Designer | Personal Portfolio",
  description:
    "Mikiyas is a passionate full-stack developer and designer specializing in React, Next.js, web design, graphics design, and video editing. View my portfolio of creative digital experiences.",
  keywords: [
    "full-stack developer",
    "web designer",
    "React developer",
    "Next.js",
    "graphics design",
    "video editing",
    "portfolio",
    "Mikiyas",
  ],
  authors: [{ name: "Mikiyas" }],
  creator: "Mikiyas",
  publisher: "Mikiyas",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://mikiyashailegebreal.tech"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
  openGraph: {
    title: "Mikiyas - Full-Stack Developer & Designer",
    description:
      "Passionate full-stack developer creating amazing digital experiences with React, Next.js, and modern web technologies.",
    url: "https://mikiyashailegebreal.tech",
    siteName: "Mikiyas Portfolio",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Mikiyas - Full-Stack Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mikiyas - Full-Stack Developer & Designer",
    description:
      "Passionate full-stack developer creating amazing digital experiences.",
    images: ["/logo.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/logo.png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, viewport-fit=cover"
        />
      </head>
      <body
        className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-purple-600 text-white px-4 py-2 rounded-md z-50"
          >
            Skip to main content
          </a>
          <main id="main-content">{children}</main>
        </Suspense>
        <Analytics />
      </body>
    </html>
  );
}
