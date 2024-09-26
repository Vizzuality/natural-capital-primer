import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources on Natural Capital",
  description:
    "Explore these resources to deepen your understanding of natural capital and its role in shaping our environment and society.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
