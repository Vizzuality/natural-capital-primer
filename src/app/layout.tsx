import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

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
      path: "../fonts/CircularStd-Medium.woff2",
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
    <html lang="en" className={circular.className}>
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
