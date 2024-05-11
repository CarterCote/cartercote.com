import React from 'react';
import Head from 'next/head';
import "../styles/fonts.css";
import "../styles/globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "CARTER COTE",
    template: "%s | cartercote.com",
  },
  description:
  "Hi, I'm Carter. I'm 19, and I study AI, human-computer interaction, + industrial design at Georgia Tech.",
  keywords: [],
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  twitter: {
    card: "summary_large_image",
    site: "@CarterCote",
    creator: "@CarterCote",
    images: "https://cartercote.com/assets/carter.png",
    title: {
      default: "CARTER COTE",
      template: "%s | cartercote.com",
    },
    description:
    "Hi, I'm Carter. I'm 19, and I study AI, human-computer interaction, + industrial design at Georgia Tech.",
  },
  openGraph: {
    url: "https://cartercote.com/",
    type: "website",
    locale: "en_US",
    siteName: "Carter Cote",
    title: {
      default: "CARTER COTE",
      template: "%s | cartercote.com",
    },
    description:
    "Hi, I'm Carter. I'm 19, and I study AI, human-computer interaction, + industrial design at Georgia Tech.",
    images: [
      {
        url: "https://cartercote.com/assets/carter.png",
        alt: "CARTER COTE",
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html className={`${inter.className}`}>
      <head>
        <title>{metadata.title.default}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(', ')} />
        <meta name="robots" content={metadata.robots.index ? 'index,follow' : 'noindex,nofollow'} />
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:title" content={metadata.openGraph.title.default} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:site" content={metadata.twitter.site} />
        <meta name="twitter:creator" content={metadata.twitter.creator} />
        <meta name="twitter:title" content={metadata.twitter.title.default} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images} />
      </head>
      <body className="bg-black text-white">
        {children}
      </body>
    </html>
  );
};

