import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nitin Yadav - Frontend Engineer & Solana Developer",
  description:
    "Frontend engineer specializing in React and TypeScript, learning Solana blockchain development and Rust. Open-source contributor to Samui Solana wallet and ecosystem tooling.",

  openGraph: {
    title: "Nitin Yadav - Frontend Engineer & Solana Developer",
    description:
      "Frontend engineer specializing in React and TypeScript, learning Solana blockchain development and Rust. 14 merged PRs to Samui wallet | 2x Turbin3 graduate | Open to work",
    url: "https://nitinyadav237.vercel.app",
    siteName: "Nitin Yadav Portfolio",
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Nitin Yadav - Frontend Engineer & Solana Developer",
    description:
      "Frontend engineer | 13 PRs to Samui wallet | 2x Turbin3 grad | Open to work",
    creator: "@NitinYa84",
  },

  keywords: [
    "Solana Developer",
    "Frontend Engineer",
    "React Developer",
    "TypeScript",
    "Rust Developer",
    "Blockchain Developer",
    "Open Source",
    "Samui Wallet",
    "Turbin3",
  ],
  authors: [{ name: "Nitin Yadav" }],
  creator: "Nitin Yadav",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-black text-white antialiased">
        <main className="min-h-screen flex justify-center">
          <div className="w-full max-w-[60%] min-w-[320px] px-6 py-16">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
