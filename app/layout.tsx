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
