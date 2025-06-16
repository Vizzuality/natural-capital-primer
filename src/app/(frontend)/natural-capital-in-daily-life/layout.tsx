import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural Capital in Daily Life",
  description:
    "Discover how our everyday activities depend on natural capital—from the lithium in our phones to the water, clothing, food, and transportation we use. Explore the vital resources and ecosystem services that power modern life and learn why protecting natural capital through sustainable practices is crucial for the future.",
};

export default function ADayInTheLifeLayout({ children }: { children: React.ReactNode }) {
  return children;
}
