import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural Capital, Climate & Biodiversity",
  description:
    "Discover the essential link between natural capital, climate, and biodiversity. Explore how natural capital is vital to addressing the climate and biodiversity crises with nature-based solutions that reduce emissions, enhance biodiversity, and support sustainable business practices. Learn about the interdependence between biodiversity and natural capital and why businesses must integrate both into climate strategies for long-term resilience and success.",
};

export default function ClimateAndBiodiversityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
