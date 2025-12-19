import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "InterLayer",
  description:
    "InterLayer is the visual agent layer for software: AI agents that highlight, explain, and execute workflows across support, onboarding, and demos.",
  metadataBase: new URL("https://interlayer.co.in"),
  openGraph: {
    title: "InterLayer",
    description:
      "InterLayer is the visual agent layer for software: AI agents that highlight, explain, and execute workflows across support, onboarding, and demos.",
    type: "website",
    url: "https://interlayer.co.in",
  },
  icons: {
    icon: "/interlayer_logo.png",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-55" />
        {children}
      </body>
    </html>
  );
}
