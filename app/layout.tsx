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
  title: "Kinenpatch Careers | 採用サイト",
  description: "あなたのやりたいことは、デザインかもしれない。Kinenpatchは、デザインで社会を前進させる仲間を探しています。",
  openGraph: {
    title: "Kinenpatch Careers | 採用サイト",
    description: "あなたのやりたいことは、デザインかもしれない。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
