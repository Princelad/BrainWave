import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrainWave",
  description: "A web app where you can keep track of your day to day tasks.",
  icons: [
    {
      media: "(prefers-color-scheme: dark)",
      url: "/LOGO.svg",
      href: "/LOGO.svg",
    },
    // {
    //   media: "(prefers-color-scheme: light)",
    //   url: "/LOGO-light.svg",
    //   href: "/LOGO-light.svg",
    // },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
