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
    dependencies: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            How does manufacturing and construction depend on forests?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            Forests are fundamental for manufacturing and construction because they provide
            essential raw materials. Companies that extract raw materials from forests (e.g., timber
            for construction and furniture, minerals that support digital technology and renewable
            energy, metals for construction and wiring) or use those materials to build or
            manufacture products depend on forests. Explore the diagram to see how natural capital
            supports manufacturing and construction.
          </p>
        </>
      ),
    },
    impacts: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            How does manufacturing and construction impact forests?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            Forests provide raw materials for manufacturing and construction. Sustainable
            harvesting, best-practice waste management and post-mining rehabilitation can minimise
            impacts on natural capital. However, poor management practices pose a significant threat
            to forests.
          </p>
        </>
      ),
      list: [
        {
          title: "Deforestation",
          text: "Deforestation associated with mining and timber harvesting (legal and illegal) continues to result in significant loss and severe degradation of forest ecosystems globally. Deforestation threatens the survival of many species and can lead to the loss of ecosystem services such as healthy and stable soils, climate regulation, carbon sequestration and water production.",
        },
        {
          title: "Waste management and access",
          text: "Extracting raw materials from forested landscapes requires transport, heavy machinery and people. Roads and infrastructure fragment forests and provide access for introduced species, weeds and pathogens. Waste (often toxic), sludge and sediment from mining and forestry operations are often discharged into rivers, wetlands and dams, impacting water quality and aquatic biodiversity. Poor soil management associated with road construction, mining and forestry can increase soil erosion and destabilise hillsides leading to landslides.",
        },
        {
          title: "Nature-related risk",
          text: "Companies that extract raw materials from forests or depend on those materials to build or manufacture products are heavily dependent on natural capital and, therefore, exposed to nature-related risk.",
        },
        {
          title: "Operational issues",
          text: "The nature-related risk to these businesses is currently limited to operational risk(e.g., reliable supply of raw materials), financial risk (e.g., costs of production, remediation, and supply), and reputational risk (e.g., ESG and morale corporate citizenship).",
        },
        {
          title: "Legal risk",
          text: "This may soon extend to legal risk, with company executives liable for the nature-related impacts and legacies of their operations and those of their supply chain. For this reason, nature-related dependencies and impacts need to be explicitly documented, measured and managed.",
        },
      ],
      image1: "/assets/industry-cases-construction-impacts.png",
      content2: (
        <>
          Companies in these industries must urgently recognize and address their reliance on
          natural resources to reduce financial, reputational, and legal risks. Taking action now
          will help secure a sustainable and successful business model for the future.
        </>
      ),
    },
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
            "Including farmers, machinery sales, and farm supplies manufacturers and retailers, rely on farmlands to produce crops and livestock, which are essential for their operations and products.",
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
    dependencies: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            How does the food industry depend on farmlands?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            Farmlands are fundamental to the food industry because they provide essential resources
            and ecosystem services. Explore the diagram to see how natural capital benefits the food
            industry.
          </p>
        </>
      ),
    },
    impacts: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">How does the food industry impact farmlands?</h3>
          <p className="max-w-[685px] tracking-tight">
            The natural capital leveraged for agricultural production contributes to global food
            security and financial returns for farmers and the entire agricultural supply chain.
            This is why big food companies, and the financial institutions that support them, need
            to be aware of the importance of natural capital and their responsibility to ensure
            their supply chains are not irreversibly destroying the very natural capital upon which
            their business depends
          </p>
        </>
      ),
      list: [
        {
          title: "Market pressure",
          text: "Historically, farmers have been incentivised to manage land in a way that erodes natural capital due to government policies (or lack thereof) and market forces and terms of trade that lock in poor practices for short-term financial benefits.",
        },
        {
          title: "Nature negative practices",
          text: "High rates of land clearing and chemical application (fertilisers, pesticides, herbicides), over-extraction of water, and overgrazing erode the natural capital upon which agriculture is based.",
        },
        {
          title: "Ecosystem degradation",
          text: "Overexploitation turns farmlands into a non-renewable resource that can only be maintained through continual inputs into the system. This has disastrous consequences for biodiversity in agricultural landscapes and contributes significantly to global greenhouse gas emissions.",
        },
        {
          title: "Operational issues",
          text: "The nature-related risk to these businesses is currently limited to operational risk (e.g., reliable supply of raw materials), financial risk (i.e., costs of production, remediation and supply) and reputational risk damage (e.g., ESG and morale corporate citizenship).",
        },
        {
          title: "Legal risk",
          text: "This may soon extend to legal risk, with company executives liable for the nature-related impacts and legacies of their operations and those of their supply chain. For this reason, nature-related dependencies and impacts need to be explicitly documented, measured, and managed.",
        },
      ],
      image1: "/assets/industry-cases-food-impacts.png",
      content2: (
        <>
          Businesses that benefit from the agricultural supply chain (e.g., food and beverage
          companies, clothing manufacturers, financial institutions, and retailers) must explicitly
          recognise their dependency and impact on natural capital and adopt strategies that reward
          nature-positive farming practices.
        </>
      ),
    },
  },
};

export const ACCORDION_ITEMS: AccordionContentType[] = [
  {
    id: "Constructions",
    text1: "Manufacturing depends on",
    text2: "Forests.",
    imageSrc1: "/assets/industry-cases-accordion-1.png",
    imageSrc2: "/assets/industry-cases-accordion-2.png",
    content: <AccordionItemContent {...ACCORDION_ITEMS_CONTENT["constructions"]} />,
  },
  {
    id: "Tourism",
    text1: "Tourism depends on",
    text2: "Wetlands & Mangroves.",
    imageSrc1: "/assets/industry-cases-accordion-3.png",
    imageSrc2: "/assets/industry-cases-accordion-4.png",
  },
  {
    id: "Urban Planning",
    text1: "Retail depends on",
    text2: "Urban Green Spaces.",
    imageSrc1: "/assets/industry-cases-accordion-5.png",
    imageSrc2: "/assets/industry-cases-accordion-6.png",
  },
  {
    id: "Food",
    text1: "Food industry depends on",
    text2: "Farmlands.",
    imageSrc1: "/assets/industry-cases-accordion-7.png",
    imageSrc2: "/assets/industry-cases-accordion-8.png",
    content: <AccordionItemContent {...ACCORDION_ITEMS_CONTENT["food"]} />,
  },
];
