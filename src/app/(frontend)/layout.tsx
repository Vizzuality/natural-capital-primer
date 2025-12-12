import localFont from "next/font/local";

import { getAppSettings } from "@/cms/service/app-settings";
import Analytics from "@/components/analytics";
import Header from "@/components/header";
import PrivacyBanner from "@/components/privacy-banner";
import { Providers } from "@/components/providers";
import { env } from "@/env.mjs";
import { cn } from "@/lib/utils";

import type { Metadata } from "next";
import "../globals.css";

const circular = localFont({
  src: [
    {
      path: "../../fonts/CircularStd-Book.woff2",
      weight: "450",
      style: "normal",
    },
    {
      path: "../../fonts/CircularStd-Medium.woff2",
      weight: "500 600",
      style: "normal",
    },
    {
      path: "../../fonts/CircularStd-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${env.NEXT_PUBLIC_DOMAIN}`),
  title: {
    template: "%s | Natural Capital Primer",
    default: "Natural Capital Primer",
  },
  description:
    "A science-based resource that explains how our entire lives, businesses and economies depend on nature, and how we can understand the value of it using a concept called natural capital.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appSettings = await getAppSettings();

  return (
    <html lang="en" className={cn("overflow-x-clip scroll-smooth", circular.className)}>
      <body className="overflow-x-clip bg-white text-black">
        <Providers>
          <PrivacyBanner />
          <Header appSettings={appSettings} />
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
