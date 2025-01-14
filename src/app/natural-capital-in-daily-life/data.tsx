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
      "Biotic (living) or abiotic (non-living) natural resources that generate products and services that are of value to humans and society.",
  },
  service: {
    title: "Service",
    description:
      "Products (i.e., resources) or ecological processes generated by natural capital assets that have value to society.",
  },
};

export interface SectionType {
  title: string;
  mainImageURL: string;
  videoURL: string;
  color: "orange" | "orange-dark" | "blue" | "turquoise" | "purple" | "lime" | "pink";
  story: JSX.Element;
  question: string;
  glossary: (keyof typeof GLOSSARY_TERMS)[];
  processes: {
    title: string;
    description: string;
    image: string;
  }[];
  importance: JSX.Element;
}

export const SECTIONS: SectionType[] = [
  {
    title: "Julie’s mobile phone alarm goes off in the morning.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-22.png",
    videoURL: "/assets/natural-capital-in-daily-life-video.mp4",
    color: "orange",
    story: (
      <>
        A lithium battery powers her mobile phone.{" "}
        <span className="text-orange">
          Lithium is a finite, non-renewable natural resource that generates income
        </span>{" "}
        for mining companies and the companies that manufacture and service battery-powered tech
        products, phones being just one of many.
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Product",
        description: "Lithium-ion cell phone battery",
        image: "/assets/natural-capital-in-daily-life-illustration.png",
      },
      {
        title: "Resource",
        description: "Lithium",
        image: "/assets/natural-capital-in-daily-life-illustration-2.png",
      },
      {
        title: "Asset",
        description: "Mineral reserves",
        image: "/assets/natural-capital-in-daily-life-illustration-3.png",
      },
    ],
    glossary: ["resource", "asset"],
    importance: (
      <p>
        Unsustainable lithium mining practices can lead to resource depletion and cause
        environmental damage, impacting a range of ecosystem assets. Discarded batteries pose a
        pollution risk to waterways and soils. Sustainable mining practices and recycling old
        electronics can help protect this valuable asset.
      </p>
    ),
  },
  {
    title: "Julie gets up and has a shower.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-23.png",
    videoURL: "/assets/natural-capital-in-daily-life-video-2.mp4",
    color: "blue",
    story: (
      <>
        She uses{" "}
        <span className="text-blue-500">
          water sourced from the water catchment—a forested natural capital asset that provides
          water for the city.
        </span>{" "}
        The catchment is managed by a water company that generates income from capturing, storing,
        and distributing the water.
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Product",
        description: "Clean water for home use",
        image: "/assets/natural-capital-in-daily-life-illustration-4.png",
      },
      {
        title: "Service",
        description: "Water filtration",
        image: "/assets/natural-capital-in-daily-life-illustration-5.png",
      },
      {
        title: "Asset",
        description: "Forest ecosystem",
        image: "/assets/natural-capital-in-daily-life-illustration-6.png",
      },
    ],
    glossary: ["service", "asset"],
    importance: (
      <p>
        Deforestation and pollution of water catchments can compromise water supply and quality.
        Protecting forests ensures a continuous supply of clean water and maintains biodiversity.
      </p>
    ),
  },
  {
    title: "Julie puts on her clothes.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-24.png",
    videoURL: "/assets/natural-capital-in-daily-life-video-3.mp4",
    color: "purple",
    story: (
      <>
        <p>
          Clothes are made from{" "}
          <span className="text-purple">
            wool and cotton, natural fibres from livestock grazing (sheep), and cotton crops.
          </span>
        </p>
        <p className="mt-4">
          In addition to producing wool and cotton, the farms on which they are grown sequester
          carbon and provide a habitat for biodiversity.
        </p>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Products",
        description: "Cotton and wool",
        image: "/assets/natural-capital-in-daily-life-illustration-7.png",
      },
      {
        title: "Services",
        description:
          "Pasture, crop production, carbon sequestration, habitat provision, shade and shelter (for livestock)",
        image: "/assets/natural-capital-in-daily-life-illustration-8.png",
      },
      {
        title: "Assets",
        description: "Grasslands, croplands, shelterbelts",
        image: "/assets/natural-capital-in-daily-life-illustration-9.png",
      },
    ],
    glossary: ["service", "asset"],
    importance: (
      <p>
        Unsustainable farming practices can lead to soil degradation and loss of biodiversity.
        Sustainable agricultural practices protect these ecosystems and their services.
      </p>
    ),
  },
  {
    title: "Julie turns on the kettle and prepares her morning coffee.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-25.png",
    videoURL: "/assets/natural-capital-in-daily-life-video-4.mp4",
    color: "lime",
    story: (
      <>
        <p>
          The kettle, made of stainless steel, is{" "}
          <span className="text-lime">
            powered by hydroelectricity (a renewable resource) and is generated and distributed by
            the power company.
          </span>
        </p>
        <p className="mt-4">
          Her coffee is grown using regenerative farming practices in a shade-coffee plantation and
          transported across the sea on diesel-powered ships.
        </p>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Product",
        description: "Coffee, kettle",
        image: "/assets/natural-capital-in-daily-life-illustration-10.png",
      },
      {
        title: "Resource",
        description: "Steel, electricity, coffee beans, diesel, clean water",
        image: "/assets/natural-capital-in-daily-life-illustration-11.png",
      },
      {
        title: "Assets",
        description: "Coffee plantation, water reserves, mineral reserves, fossil fuels",
        image: "/assets/natural-capital-in-daily-life-illustration-12.png",
      },
    ],
    glossary: ["service", "asset"],
    importance: (
      <p>
        Energy production, agriculture, and transportation can impact natural capital. Renewable
        energy sources and sustainable farming methods (e.g., shade-grown coffee) can mitigate these
        impacts.
      </p>
    ),
  },
  {
    title: "Julie has a slice of toast and butter for breakfast.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-26.png",
    videoURL: "/assets/natural-capital-in-daily-life-video-5.mp4",
    color: "orange-dark",
    story: (
      <>
        <p>
          Bread is made from{" "}
          <span className="text-orange-500">
            wheat, a product generated from natural capital assets such as croplands, soil, water,
            and sunlight.
          </span>
        </p>
        <p className="mt-4">
          Butter is produced on a dairy farm using ecosystem services such as soil fertility, water
          availability, nutrient cycling, shade and shelter (from native vegetation), and pest
          control (provided by invertebrates). Food products generate income for farmers, food
          manufacturers, and retailers.
        </p>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Products",
        description: "Bread, butter",
        image: "/assets/natural-capital-in-daily-life-illustration-13.png",
      },
      {
        title: "Services",
        description: "Provisioning services - wheat and dairy",
        image: "/assets/natural-capital-in-daily-life-illustration-14.png",
      },
      {
        title: "Assets",
        description:
          "Soil, water, sunlight, mineral nutrients, livestock, native vegetation, fauna (invertebrates)",
        image: "/assets/natural-capital-in-daily-life-illustration-15.png",
      },
    ],
    glossary: ["service", "asset"],
    importance: (
      <p>
        Healthy soils and water resources are crucial for food security. Sustainable farming
        practices and biodiversity contribute to healthy farmlands.
      </p>
    ),
  },
  {
    title: "Julie catches a train to the city.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-27.png",
    videoURL: "/assets/natural-capital-in-daily-life-video-6.mp4",
    color: "turquoise",
    story: (
      <>
        <p>
          The train is powered by{" "}
          <span className="text-turquoise">
            solar electricity, a clean and renewable energy source.
          </span>{" "}
          Solar panels capture sunlight and convert it into electricity.
        </p>
        <p className="mt-4">
          Solar panels are made from materials such as silicon, silver, and aluminium derived from
          natural capital assets. The train infrastructure, including tracks and stations, also
          depends on materials like steel and concrete derived from natural capital assets.
        </p>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Product",
        description: "Transportation",
        image: "/assets/natural-capital-in-daily-life-illustration-16.png",
      },
      {
        title: "Resources",
        description: "Solar energy, silicon, silver, aluminium, steel, concrete",
        image: "/assets/natural-capital-in-daily-life-illustration-17.png",
      },
      {
        title: "Assets",
        description: "Sunlight, mineral resources",
        image: "/assets/natural-capital-in-daily-life-illustration-18.png",
      },
    ],
    glossary: ["resource", "asset"],
    importance: (
      <p>
        Using renewable energy sources for transportation greatly reduces greenhouse gas emissions
        and environmental impact. Sustainable material sourcing and energy use are essential for
        protecting natural capital.
      </p>
    ),
  },
  {
    title: "Julie goes to work in the stock exchange.",
    mainImageURL: "/assets/natural-capital-in-daily-life-illustration-28.png",
    videoURL: "/assets/natural-capital-in-daily-life-video-7.mp4",
    color: "pink",
    story: (
      <>
        <p>
          The computer on which she works{" "}
          <span className="text-pink">
            depends on natural capital assets for its production and operates on electricity derived
            from a mix of non-renewable (fossil fuels) and renewable (wind energy) natural capital
            assets.
          </span>
        </p>
        <p className="mt-4">
          The stocks she trades will most likely draw on natural capital assets to generate products
          or services.
        </p>
      </>
    ),
    question: "What does this mean in terms of natural capital?",
    processes: [
      {
        title: "Products",
        description: "Digital technology, tradable stocks",
        image: "/assets/natural-capital-in-daily-life-illustration-19.png",
      },
      {
        title: "Resources",
        description: "Tech minerals, energy",
        image: "/assets/natural-capital-in-daily-life-illustration-20.png",
      },
      {
        title: "Assets",
        description: "Mineral resources, soils, wind, fossil fuels",
        image: "/assets/natural-capital-in-daily-life-illustration-21.png",
      },
    ],
    glossary: ["resource", "asset"],
    importance: (
      <p>
        The tech industry relies heavily on natural capital assets. Investing in sustainable
        technologies, renewable energy, and ethical mining practices can help preserve these assets
        for future generations.
      </p>
    ),
  },
];
