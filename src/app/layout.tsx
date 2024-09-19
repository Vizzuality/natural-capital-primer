import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { cn } from "@/lib/utils";
import { env } from "@/env.mjs";
import Script from "next/script";

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
    "A science-based resource that explains the concept of natural capital and how business and society depend on it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn("overflow-x-clip scroll-smooth", circular.className)}>
      <body className="overflow-x-clip bg-white text-black">{children}</body>
      {env.NEXT_PUBLIC_ENABLE_ANALYTICS && (
        <>
          <Script
            id="plausible-1"
            defer
            data-domain={env.NEXT_PUBLIC_DOMAIN}
            src="https://plausible.io/js/script.file-downloads.hash.outbound-links.tagged-events.js"
          />
          <Script id="plausible-2">
            {`window.plausible = window.plausible || function() { (window.plausible.q = window.plausible.q || []).push(arguments) }`}
          </Script>
        </>
      )}
    </html>
  );
}
