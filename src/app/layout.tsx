import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natural Capital Primer",
  description:
    "A science-based resource that explains the concept of natural capital and how business and society depend on it.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-black">{children}</body>
    </html>
  );
}
