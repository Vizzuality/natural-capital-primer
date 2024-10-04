import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { Providers } from "@/components/providers";
import Analytics from "@/components/analytics";
import PrivacyBanner from "@/components/privacy-banner";

const circular = localFont({
  src: [
    {
      path: "../fonts/CircularStd-Book.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../fonts/CircularStd-Medium.woff2",
      weight: "500 600",
      style: "normal",
    },
    {
      path: "../fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: {
    template: "%s | Natural Capital Primer",
    default: "Natural Capital Primer",
  },
  description:
    "A science-based resource that explains how our entire lives, businesses and economies depend on nature, and how we can understand the value of it using a concept called natural capital.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("overflow-x-clip scroll-smooth", circular.className)}>
      <body className="overflow-x-clip bg-white text-black">
        <Providers>
          <PrivacyBanner />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
