import Bell from "@/svgs/bell.svg";

export const LEGEND_TERMS: {
  [key: string]: { title: string; colorClass: string; infoTooltip: string };
} = {
  "non-renewable-resource": {
    title: "Non-renewable resource",
    colorClass: "bg-orange-500",
    infoTooltip:
      "Non-renewable resources are finite and irreplaceable or those that can only be replaced over geological timescales. Example: fossil fuels, minerals.",
  },
  "renewable-resource": {
    title: "Renewable resource",
    colorClass: "bg-purple",
    infoTooltip: "",
  },
};

export const GLOSSARY_TERMS: {
  [key: string]: { title: string; description: string };
} = {
  resource: {
    title: "Resource",
    description: "Specific elements extracted from natural capital assets for direct human use.",
  },
  asset: {
    title: "Asset",
    description:
      "The primary natural capital components that flow to provide ecosystem services or become resources.",
  },
  service: {
    title: "Service",
    description:
      "A benefit ecosystems provide to humans, including products like food and processes such as pollination",
  },
};

export interface SectionType {
  id: string;
  title: string;
  mainImageURL: string;
  SvgIcon: JSX.Element;
  bgClass: string;
  borderColorClass?: string;
  story: JSX.Element;
  question: string;
  legend?: (keyof typeof LEGEND_TERMS)[];
  glossary: (keyof typeof GLOSSARY_TERMS)[];
  processes: {
    title: string;
    description: string;
    borderColorClass?: string;
    image: string;
  }[];
  importance: string;
}

export const SECTIONS: SectionType[] = [
  {
    id: "mobile-phone",
    title: "Julie’s mobile phone alarm goes off in the morning.",
    mainImageURL: "/assets/a-day-in-the-life-1.webp",
    SvgIcon: <Bell className="max-lg:h-12 max-lg:w-12" />,
    bgClass: "bg-orange",
    story: (
      <>
        <span>Her mobile phone is </span>
        <span className="text-orange">
          powered by a lithium battery, a finite, valuable resource that provides income to mining
          companies and the companies that create battery-powered products
        </span>
        <span>, phones being just one of many.</span>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Product",
        description: "Phone lithium battery",
        image: "/assets/a-day-in-the-life-pebble-1-1.png",
      },
      {
        title: "Resource",
        description: "Lithium",
        image: "/assets/a-day-in-the-life-pebble-1-2.png",
      },
      {
        title: "Asset",
        description: "Mineral rich ground",
        image: "/assets/a-day-in-the-life-pebble-1-3.png",
      },
    ],
    legend: ["non-renewable-resource"],
    glossary: ["resource", "asset"],
    importance:
      "Over-extraction of lithium can lead to resource depletion and environmental damage. Sustainable mining practices and recycling old electronics help protect this valuable asset.",
  },
  {
    id: "shower",
    title: "Julie gets up and then she has a shower.",
    mainImageURL: "/assets/a-day-in-the-life-2.webp",
    SvgIcon: <Bell />,
    bgClass: "bg-blue-500",
    story: (
      <>
        <span>She uses </span>
        <span className="text-blue-500">
          water sourced from the forested water catchment, which provides water for the city&apos;s
          people.
        </span>
        <span>
          {" "}
          This catchment is managed by an authority that generates income from distributing the
          water.
        </span>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Product",
        description: "Clean water for home use",
        image: "/assets/a-day-in-the-life-pebble-2-1.png",
      },
      {
        title: "Service",
        description: "Water filtering",
        image: "/assets/a-day-in-the-life-pebble-2-2.png",
      },
      {
        title: "Asset",
        description: "Forest ecosystem",
        image: "/assets/a-day-in-the-life-pebble-2-3.png",
      },
    ],
    legend: undefined,
    glossary: ["service", "asset"],
    importance:
      "Deforestation and pollution can compromise water quality. Protecting forests ensures a continuous supply of clean water and maintains biodiversity.",
  },
  {
    id: "clothes",
    title: "Julie puts on her clothes.",
    mainImageURL: "/assets/a-day-in-the-life-3.webp",
    SvgIcon: <Bell />,
    bgClass: "bg-purple",
    story: (
      <>
        <span>These are made from wool and cotton, both of which are </span>
        <span className="text-purple">
          natural fibres produced by pastures, cotton crops and reliant on photosynthesis, shade,
          and shelter.
        </span>
      </>
    ),
    question:
      "In addition to producing wool and cotton, the farms on which they are grown sequester carbon and provide a habitat for biodiversity.",
    processes: [
      {
        title: "Products",
        description: "Cotton and wool",
        image: "/assets/a-day-in-the-life-pebble-3-1.png",
      },
      {
        title: "Services",
        description: "Pasture and habitat provision, crop production, carbon sequestration",
        image: "/assets/a-day-in-the-life-pebble-3-2.png",
      },
      {
        title: "Assets",
        description: "Grasslands, croplands",
        image: "/assets/a-day-in-the-life-pebble-3-3.png",
      },
    ],
    legend: undefined,
    glossary: ["service", "asset"],
    importance:
      "Unsustainable farming can lead to soil degradation and loss of biodiversity. Sustainable agricultural practices protect these ecosystems and their services.",
  },
  {
    id: "kettle-and-coffee",
    title: "Julie turns on the kettle and prepares her morning coffee.",
    mainImageURL: "/assets/a-day-in-the-life-4.webp",
    SvgIcon: <Bell />,
    bgClass: "bg-lime",
    story: (
      <>
        <span>The kettle, made of stainless steel, is </span>
        <span className="text-lime">
          powered by hydroelectricity fed into the power grid and distributed by the power company,
          generating income.
        </span>
      </>
    ),
    question:
      "Her coffee is grown in a shade plantation and transported by sea on ships powered by fossil fuels.",
    processes: [
      {
        title: "Product",
        description: "Coffee",
        image: "/assets/a-day-in-the-life-pebble-4-1.png",
      },
      {
        title: "Services",
        description: "Steel, electricity, coffee beans, fossil fuels",
        image: "/assets/a-day-in-the-life-pebble-4-2.png",
      },
      {
        title: "Assets",
        description: "Grasslands, croplands",
        image: "/assets/a-day-in-the-life-pebble-4-3.png",
      },
    ],
    legend: undefined,
    glossary: ["service", "asset"],
    importance:
      "Energy production and transportation can impact natural capital. Using renewable energy sources and sustainable farming methods can mitigate these impacts.",
  },
  {
    id: "bread-and-butter",
    title: "Julie has a slice of toast and butter for breakfast.",
    mainImageURL: "/assets/a-day-in-the-life-5.webp",
    SvgIcon: <Bell />,
    bgClass: "bg-orange-500",
    story: (
      <>
        <span>The bread is made from flour </span>
        <span className="text-orange-500">
          grown from a combination of natural capital – soil, water, sunlight.
        </span>
      </>
    ),
    question:
      "The butter is derived from ecosystem services such as soil fertility, water availability, and nutrient cycling, aided by pasture production, shade and shelter from native vegetation, pest control by invertebrates, and income generation for farmers, food manufacturers, and retailers.",
    processes: [
      {
        title: "Products",
        description: "Bread, butter",
        image: "/assets/a-day-in-the-life-pebble-5-1.png",
      },
      {
        title: "Services",
        description: "Flour, dairy production",
        image: "/assets/a-day-in-the-life-pebble-5-2.png",
      },
      {
        title: "Assets",
        description: "Soil, water, sunlight, nutrients",
        image: "/assets/a-day-in-the-life-pebble-5-3.png",
      },
    ],
    legend: undefined,
    glossary: ["service", "asset"],
    importance:
      "Protecting soil health and water resources is crucial for food security. Sustainable farming practices and biodiversity conservation are key.",
  },
  {
    id: "train",
    title: "Julie catches the train to the city.",
    mainImageURL: "/assets/a-day-in-the-life-6.webp",
    SvgIcon: <Bell />,
    bgClass: "bg-turquoise",
    story: (
      <>
        <span>The train is powered by </span>
        <span className="text-turquoise">
          solar electricity, a clean and renewable energy source.
        </span>
        <span>Solar panels capture sunlight and convert it into electricity. </span>
      </>
    ),
    question:
      "The butter is derived from ecosystem services such as soil fertility, water availability, and nutrient cycling, aided by pasture production, shade and shelter from native vegetation, pest control by invertebrates, and income generation for farmers, food manufacturers, and retailers.",
    processes: [
      {
        title: "Product",
        description: "Transportation",
        image: "/assets/a-day-in-the-life-pebble-6-1.png",
      },
      {
        title: "Resources",
        description: "Solar energy, silicon, silver, aluminium, steel, concrete, wood",
        image: "/assets/a-day-in-the-life-pebble-6-2.png",
        borderColorClass: "text-purple",
      },
      {
        title: "Assets",
        description: "Sunlight, mineral-rich ground, forests",
        image: "/assets/a-day-in-the-life-pebble-6-3.png",
      },
    ],
    legend: ["renewable-resource"],
    glossary: ["resource", "asset"],
    importance:
      "Using renewable energy sources for transportation reduces environmental impact. Sustainable material sourcing and energy use are essential for protecting natural capital.",
  },
  {
    id: "laptop",
    title: "Julie goes to work in the stock exchange.",
    mainImageURL: "/assets/a-day-in-the-life-7.webp",
    SvgIcon: <Bell />,
    bgClass: "bg-pink",
    story: (
      <>
        <span>The computer on which she works </span>
        <span className="text-pink">
          depends on natural capital assets for its production and operates on fossil fuels and wind
          energy.
        </span>
      </>
    ),
    question:
      "The stocks she trades will most likely draw on natural capital assets to generate products or services.",
    processes: [
      {
        title: "Products",
        description: "Technology use, tradable stocks",
        image: "/assets/a-day-in-the-life-pebble-7-1.png",
      },
      {
        title: "Resources",
        description: "Minerals, wind energy",
        image: "/assets/a-day-in-the-life-pebble-7-2.png",
        borderColorClass: "text-orange-500",
      },
      {
        title: "Assets",
        description: "Minable soils, wind",
        image: "/assets/a-day-in-the-life-pebble-7-3.png",
      },
    ],
    legend: ["renewable-resource"],
    glossary: ["resource", "asset"],
    importance:
      "The tech industry relies heavily on natural resources. Investing in sustainable technologies and practices can help preserve these assets for future generations.",
  },
];
