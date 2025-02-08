export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import { IBM_Plex_Serif, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const ibmPlexSeriff = IBM_Plex_Serif({
  variable: "--font-ibm-plex-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "EkkoPrime Bank",
  description: "Banking for the future",
  icons: {
    icon: "/icons/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${ibmPlexSeriff.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
