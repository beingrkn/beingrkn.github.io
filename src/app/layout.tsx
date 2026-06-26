import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RKN",
  description: "19-year-old developer creating Discord tools, Minecraft servers, and indie games.",
  metadataBase: new URL("https://beingrkn.com"),
  keywords: [
    "RKN",
    "beingrkn",
    "mebeingrkn",
    "Ravi Nagda",
    "Discord Bot Developer",
    "Minecraft Infrastructure",
    "Indie Game Dev",
    "Software Engineer Portfolio"
  ],
  authors: [{ name: "RKN" }],
  creator: "RKN",
  publisher: "RKN",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "RKN",
    description: "19-year-old developer creating Discord tools, Minecraft servers, and indie games.",
    url: "https://beingrkn.com",
    siteName: "RKN Portfolio",
    images: [
      {
        url: "/pfpsite.png",
        width: 1200,
        height: 630,
        alt: "RKN - Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RKN",
    description: "19-year-old developer creating Discord tools, Minecraft servers, and indie games.",
    creator: "@mebeingrkn",
    images: ["/pfpsite.png"],
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
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
