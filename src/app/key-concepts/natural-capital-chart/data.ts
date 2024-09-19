export enum SourceGroup {
  Environmental = "environmental",
  Ecosystem = "ecosystem",
}

export enum TargetGroup {
  Ecosystem = "ecosystem",
  Abiotic = "abiotic",
}

export enum TargetSubGroup {
  Provisioning = "provisioning",
  Cultural = "cultural",
  Regulating = "regulating",
  Supporting = "supporting",
}

export interface SourceNode {
  id: string;
  group: SourceGroup;
  image: string;
}

export interface TargetNode {
  id: string;
  group: TargetGroup;
  subGroup?: TargetSubGroup;
  image: string;
}

export const sourceNodes: SourceNode[] = [
  { id: "water", group: SourceGroup.Environmental, image: "/assets/chart/water.png" },
  { id: "soil", group: SourceGroup.Environmental, image: "/assets/chart/soil.png" },
  { id: "atmosphere", group: SourceGroup.Environmental, image: "/assets/chart/atmosphere.png" },
  {
    id: "plants-and-animals",
    group: SourceGroup.Environmental,
    image: "/assets/chart/plants-and-animals.png",
  },
  { id: "grasslands", group: SourceGroup.Ecosystem, image: "/assets/chart/grasslands.png" },
  { id: "mangroves", group: SourceGroup.Ecosystem, image: "/assets/chart/mangroves.png" },
  { id: "wetlands", group: SourceGroup.Ecosystem, image: "/assets/chart/wetlands.png" },
  { id: "farmlands", group: SourceGroup.Ecosystem, image: "/assets/chart/farmlands.png" },
];

export const targetNodes: TargetNode[] = [
  {
    id: "livestock-production",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Provisioning,
    image: "/assets/chart/livestock-production.png",
  },
  {
    id: "timber",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Provisioning,
    image: "/assets/chart/timber.png",
  },
  {
    id: "tourism",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Cultural,
    image: "/assets/chart/tourism.png",
  },
  {
    id: "recreation-sites",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Cultural,
    image: "/assets/chart/recreation-sites.png",
  },
  {
    id: "soil-fertility",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Regulating,
    image: "/assets/chart/soil-fertility.png",
  },
  {
    id: "climate-regulation",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Regulating,
    image: "/assets/chart/climate-regulation.png",
  },
  {
    id: "water-filtering",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Supporting,
    image: "/assets/chart/water-filtering.png",
  },
  {
    id: "habitat-provision",
    group: TargetGroup.Ecosystem,
    subGroup: TargetSubGroup.Supporting,
    image: "/assets/chart/habitat-provision.png",
  },
  {
    id: "mineral-extraction",
    group: TargetGroup.Abiotic,
    image: "/assets/chart/mineral-extraction.png",
  },
  { id: "fossil-fuels", group: TargetGroup.Abiotic, image: "/assets/chart/fossil-fuels.png" },
  {
    id: "energy-production",
    group: TargetGroup.Abiotic,
    image: "/assets/chart/energy-production.png",
  },
];

export const targetSubGroups = [
  {
    id: TargetSubGroup.Provisioning,
    name: "Provisioning",
    image: "/assets/chart/provisioning.png",
  },
  { id: TargetSubGroup.Cultural, name: "Cultural", image: "/assets/chart/cultural.png" },
  { id: TargetSubGroup.Regulating, name: "Regulating", image: "/assets/chart/regulating.png" },
  { id: TargetSubGroup.Supporting, name: "Supporting", image: "/assets/chart/supporting.png" },
];

export const relationships: Record<string, string[]> = {
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
