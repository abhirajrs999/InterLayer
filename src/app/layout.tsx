import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });

export const metadata: Metadata = {
  title: "YourCompany — AI agents with visual + video guidance",
  description:
    "Automate support, onboarding, and product demos with AI agents that can guide visually and speak through video avatars.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "YourCompany — AI agents with visual + video guidance",
    description:
      "Automate support, onboarding, and product demos with AI agents that can guide visually and speak through video avatars.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body>
        <div className="pointer-events-none fixed inset-0 bg-grid opacity-55" />
        {children}
      </body>
    </html>
  );
}
