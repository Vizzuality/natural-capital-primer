import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "The Natural Capital Primer is a collaborative project of the Macdoch Foundation, La Trobe University and Vizzuality. Our team comprises experts in environmental science, sustainability, and communication, all dedicated to making natural capital an integral part of public knowledge and business practices.",
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
