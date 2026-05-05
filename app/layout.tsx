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
  metadataBase: new URL("https://www.nitin-yadav.in"),

  title:
    "Nitin Yadav — Frontend Engineer Building Solana Developer Tooling",
  description:
    "Frontend engineer specializing in React, TypeScript, and Solana ecosystem tooling. Building composable wallet UI systems, contributing to open source, and focused on developer experience.",

  openGraph: {
    title:
      "Nitin Yadav — Frontend Engineer Building Solana Developer Tooling",
    description:
      "Frontend engineer focused on React, TypeScript, Solana UI systems, and developer tooling. Creator of Nitso and contributor to Solana open source.",
    url: "https://www.nitin-yadav.in",
    siteName: "Nitin Yadav",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Nitin Yadav Portfolio",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Nitin Yadav — Frontend Engineer Building Solana Developer Tooling",
    description:
      "React + TypeScript engineer building Solana UI systems and developer tooling.",
    creator: "@NitinYa84",
    images: ["/og.png"],
  },
  keywords: [
    "Nitin Yadav",
    "Frontend Engineer",
    "React",
    "TypeScript",
    "Solana",
    "Solana Developer",
    "Web3 Frontend",
    "Developer Tooling",
    "Wallet UI",
    "shadcn",
    "Open Source",
    "Nitso",
    "Samui Wallet",
  ],

  authors: [
    {
      name: "Nitin Yadav",
      url: "https://www.nitin-yadav.in",
    },
  ],
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
