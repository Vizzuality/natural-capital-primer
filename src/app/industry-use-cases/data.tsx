import AccordionItemContent from "@/components/industry-use-cases/accordion-item-content";
import type { AccordionItemsContentType } from "@/components/industry-use-cases/accordion-item-content";
import type { AccordionContentType } from "./types";

const ACCORDION_ITEMS_CONTENT: AccordionItemsContentType = {
  constructions: {
    ecosystem: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            Why are forests essential for businesses and society?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            Forests are indispensable to society&apos;s efforts to tackle climate change. They act
            as the Earth&apos;s lungs, absorbing enormous amounts of carbon dioxide and replenishing
            the oxygen in the atmosphere. Forests also provide vital raw materials like timber,
            paper, and biofuels, supporting key construction, manufacturing, and energy industries.
          </p>
          <p className="max-w-[685px] tracking-tight">
            Conservation of the world&apos;s biodiversity is inextricably tied to forests. Forests
            cover only 31% of the global land area but support 80% of the world&apos;s amphibian
            species, 75% of bird species, and 68% of mammals.
          </p>
        </>
      ),
      image1: "/assets/industry-cases-constructions-ecosystem-1.png",
      imageText:
        "Conservation of the world's biodiversity is inextricably tied to forests. Forests cover only 31% of the global land area but support 80% of the world's amphibian species, 75% of bird species, and 68% of mammals.",
      content2: (
        <>
          <h3 className="mb-5 text-xl">
            Forests provide goods and services to businesses and society.
          </h3>
          <div className="flex flex-col gap-5">
            <p>
              Forests supply essential raw materials such as timber and minerals, as well as genetic
              material for pharmaceuticals, food, and fibre. They also support crucial ecosystem
              services like climate regulation and water filtration and offer recreational
              opportunities that boost tourism.
            </p>
            <p>
              Forests are culturally significant, enriching communities with places for reflection,
              relaxation, and spiritual renewal. They also support traditional practices and social
              spaces.
            </p>
            <p>
              These benefits underscore the importance of sustainable forest management for
              economic, cultural and environmental well-being.
            </p>
          </div>
        </>
      ),
      image2: "/assets/industry-cases-constructions-ecosystem-2.png",
      industriesRelyOnText: "forests",
      directIndustries: [
        {
          title: "Manufacturing and construction",
          tooltip: "For raw materials (timber, minerals, clay) used in manufacturing of products.",
        },
        {
          title: "Building and furniture design",
          tooltip:
            "Forests for timber, a fundamental material for creating structural components and furniture.",
        },
        {
          title: "Mining",
          tooltip:
            "Significant reserves of many minerals (e.g., bauxite, cobalt, gold, nickel, copper, tin, iron ore) are found beneath forest ecosystems.",
        },
        {
          title: "Tourism, recreation and hospitality",
          tooltip:
            "For scenic beauty and natural landscapes, which attract visitors and enhance outdoor experiences.",
        },
      ],
      indirectIndustries: [
        {
          title: "Food and beverage manufacturers",
          tooltip:
            "For raw materials like paper and packaging, and ingredients such as fruits, nuts, herbs and spices.",
        },
        {
          title: "Fibre and clothing manufacturers",
          tooltip:
            "For wood and plant-based fibres, essential for producing sustainable textiles and packaging materials.",
        },
        {
          title: "Retail",
          tooltip:
            "For packaging materials and paper products, which are essential for product presentation and distribution.",
        },
        {
          title: "Technology",
          tooltip:
            "For rare minerals like lithium and cobalt for batteries and electronics, and biomaterials like cellulose for paper and biodegradable plastics.",
        },
      ],
      image3: "/assets/industry-cases-constructions-ecosystem-3.png",
      insights: [
        "Essential Raw Materials: Forests provide timber and minerals for construction, making sustainable forest management crucial for reliable material supply.",
        "Vital Ecosystem Services: Forests support construction through climate regulation, carbon storage, and soil and water quality, which are critical for sustainable operations.",
        "Deforestation Risks: Deforestation can cause biodiversity loss and degrade ecosystem services, leading to operational, financial, and reputational risks for the construction industry.",
      ],
    },
    dependencies: {},
    impacts: {},
  },
  food: {
    ecosystem: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            Why are farmlands essential for businesses and society?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            Farmlands are the cornerstone of society. They provide essential food and fibre
            resources, support regional economies, and offer vital ecosystem services like soil
            fertility, biodiversity conservation and climate regulation. They hold cultural value by
            enriching communities, connecting people with their heritage, and offer rural landscapes
            to enjoy, overall benefitting mental health.
          </p>
          <p className="max-w-[685px] tracking-tight">
            In an agricultural context, natural capital includes naturally occurring ecosystems and
            those established and maintained by humans (cultivated resources).
          </p>
          <p className="max-w-[685px] tracking-tight">
            Examples of ecosystem assets on a farm include native woody vegetation (remnant and
            replanted), grasslands (native and exotic pastures), crops and wetlands. Environmental
            assets include soil, minerals and water (surface, soil and groundwater).
          </p>
        </>
      ),
      image1: "/assets/industry-cases-food-ecosystem-1.png",
      imageText:
        "Conservation of the world's biodiversity is inextricably tied to forests. Forests cover only 31% of the global land area but support 80% of the world's amphibian species, 75% of bird species, and 68% of mammals.",
      content2: (
        <div className="flex flex-col gap-10">
          <div>
            <h3 className="mb-5 text-xl">How does natural capital support farming businesses?</h3>
            <div className="flex flex-col gap-5">
              <p>
                Agribusiness depends on farmlands that have healthy soils, waterways, and ecosystems
                to support crops and pastures for livestock.
              </p>
              <p>
                Areas of remnant and planted vegetation, such as shelterbelts and windbreaks, offer
                regulating services by providing shade and shelter for livestock, and habitat for
                pollinators, pest controllers, and decomposers. These services help agribusinesses
                reduce input costs and enhance production efficiency.
              </p>
            </div>
          </div>
          <div>
            <h3 className="mb-5 text-xl">Farmlands benefit the whole of society.</h3>
            <div className="flex flex-col gap-5">
              <p>
                Well-managed farmland can help fight climate change by sequestering and storing
                carbon in woody vegetation and soils. Good soil and water management on farms
                reduces soil erosion and nutrient loss, leading to better water quality and
                healthier landscapes for farms and surrounding communities. Farmlands can also
                contain high-quality habitats for native wildlife and plants, supporting
                biodiversity and combating the extinction crisis.
              </p>
            </div>
          </div>
        </div>
      ),
      image2: "/assets/industry-cases-food-ecosystem-2.png",
      industriesRelyOnText: "farmlands",
      directIndustries: [
        {
          title: "Agribusiness",
          tooltip:
            "ncluding farmers, machinery sales, and farm supplies manufacturers and retailers, rely on farmlands to produce crops and livestock, which are essential for their operations and products.",
        },
        {
          title: "Farm consultants / advisors",
          tooltip:
            "To offer their expertise in optimisng agricultural practices and improving farm productivity.",
        },
        {
          title: "Food and beverage manufacturers",
          tooltip:
            "For essential raw ingredients, such as fruits, vegetables, grains, and livestock, which are fundamental to their products.",
        },
        {
          title: "Fibre and clothing manufacturers",
          tooltip:
            "For animal-based (e.g., wool, alpaca, mohair) and plant-based fibres (e.g.,  cotton, flax, hemp), which are crucial for producing textiles and clothing.",
        },
      ],
      indirectIndustries: [
        {
          title: "Retailers / supermarkets",
          tooltip:
            "For a steady supply of fresh produce and non-perishable goods, essential for stocking their shelves and meeting consumer demand.",
        },
        {
          title: "Banks and lending institutions",
          tooltip:
            "To provide financial support and loans for agricultural operations, critical for maintaining and expanding farm productivity and infrastructure.",
        },
        {
          title: "Insurance companies",
          tooltip:
            "To provide coverage for agricultural risks, such as crop failure and natural disasters, which are essential for managing the financial stability of farming operations.",
        },
        {
          title: "Restaurants, cafes and hospitality",
          tooltip:
            "For a continuous supply of fresh, locally sourced ingredients crucial for their menu offerings and customer experiences.",
        },
      ],
      image3: "/assets/industry-cases-food-ecosystem-3.png",
      insights: [
        "Farmlands are a combination of natural and human-maintained ecosystems.",
        "Natural capital in farmland delivers a range of provisioning ecosystem services in the form of crops, forage and livestock, and key regulating services that increase productivity, such as micro-climate regulation, pollination, pest control and nutrient cycling.",
        "Properly managed farmlands are important for protecting biodiversity and mitigating climate change.",
      ],
    },
    dependencies: {},
    impacts: {},
  },
};

export const ACCORDION_ITEMS: AccordionContentType[] = [
  {
    id: "Constructions",
    text1: "Manufacturing",
    text2: "depend on Forests.",
    imageSrc1: "/assets/industry-cases-accordion-1.png",
    imageSrc2: "/assets/industry-cases-accordion-2.png",
    content: <AccordionItemContent {...ACCORDION_ITEMS_CONTENT["constructions"]} />,
  },
  {
    id: "Tourism",
    text1: "Tourism and Hospitality",
    text2: "depend on Coastal Ecosystems.",
    imageSrc1: "/assets/industry-cases-accordion-3.png",
    imageSrc2: "/assets/industry-cases-accordion-4.png",
  },
  {
    id: "Urban Planning",
    text1: "Retail",
    text2: "depends on Urban Green Spaces.",
    imageSrc1: "/assets/industry-cases-accordion-5.png",
    imageSrc2: "/assets/industry-cases-accordion-6.png",
  },
  {
    id: "Food",
    text1: "Food Security",
    text2: "depends on Ecosystem Assets.",
    imageSrc1: "/assets/industry-cases-accordion-7.png",
    imageSrc2: "/assets/industry-cases-accordion-8.png",
    content: <AccordionItemContent {...ACCORDION_ITEMS_CONTENT["food"]} />,
  },
];
