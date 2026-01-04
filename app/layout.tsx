import type { Metadata } from "next";
import { Domine, Inter } from "next/font/google";
import "./globals.css";

const domine = Domine({
  subsets: ["latin"],
  variable: "--font-domine",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cosma",
  description: "Most connections fail by design.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${domine.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-inter" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
