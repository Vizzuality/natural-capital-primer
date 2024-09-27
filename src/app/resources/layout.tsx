import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources on Natural Capital",
  description:
    "A selection of resources beyond the Natural Capital Primer to further your understanding of natural capital and its role in shaping our environment and society.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
