export type SourceNodes =
  | "water"
  | "soil"
  | "atmosphere"
  | "plants-and-animals"
  | "grasslands"
  | "mangroves"
  | "wetlands"
  | "farmlands";

export const relationships: { [key in SourceNodes]: string[] } = {
  water: [
    "livestock-production",
    "recreation-sites",
    "soil-fertility",
    "water-filtering",
    "energy-production",
  ],
  soil: ["timber", "soil-fertility", "water-filtering", "mineral-extraction", "fossil-fuels"],
  atmosphere: ["tourism", "climate-regulation", "habitat-provision", "energy-production"],
  "plants-and-animals": ["timber", "climate-regulation", "habitat-provision", "recreation-sites"],
  grasslands: ["livestock-production", "soil-fertility", "habitat-provision"],
  mangroves: ["tourism", "climate-regulation", "habitat-provision"],
  wetlands: ["tourism", "recreation-sites", "water-filtering"],
  farmlands: ["livestock-production", "habitat-provision", "soil-fertility"],
};
