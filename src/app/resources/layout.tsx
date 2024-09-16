import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Resources",
  description:
    "Explore these resources to deepen your understanding of Natural Capital and its role in shaping our environment and society.",
};

export default function ResourcesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
