import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Natural Capital, Climate & Biodiversity",
  description:
    "Natural capital is fundamental to addressing two great challenges of our time: the climate crisis and the global species extinction (biodiversity) crisis. They cannot be addressed in isolation – effective solutions to the climate crisis require us to think about the interconnection between natural capital and biodiversity. Equally, to preserve and restore biodiversity, we need to address the climate crisis while building natural capital. But biodiversity, natural capital and climate are not the same thing.",
};

export default function ClimateAndBiodiversityLayout({ children }: { children: React.ReactNode }) {
  return children;
}
