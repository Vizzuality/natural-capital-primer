import type { IndustryUseCasesAccordionItem, IndustryUseCasesTabContent } from "./types";
import { manufacturingLinks, tourismLinks, foodLinks, retailLinks } from "./chart-data";

const ACCORDION_ITEMS_CONTENT: Record<string, IndustryUseCasesTabContent> = {
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
      image1: {
        src: "/assets/industry-cases-constructions-ecosystem-1.png",
        width: 685,
        height: 388,
      },
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
      image2: {
        src: "/assets/industry-cases-constructions-ecosystem-2.png",
        width: 373,
        height: 375,
      },
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
      image3: {
        src: "/assets/industry-cases-constructions-ecosystem-3.png",
        width: 871,
        height: 300,
      },
      content3: (
        <>
          Companies in these industries must urgently recognize and address their reliance on
          natural resources to reduce financial, reputational, and legal risks. Taking action now
          will help secure a sustainable and successful business model for the future.
        </>
      ),
      insights: [
        "Essential Raw Materials: Forests provide timber and minerals for construction, making sustainable forest management crucial for reliable material supply.",
        "Vital Ecosystem Services: Forests support construction through climate regulation, carbon storage, and soil and water quality, which are critical for sustainable operations.",
        "Deforestation Risks: Deforestation can cause biodiversity loss and degrade ecosystem services, leading to operational, financial, and reputational risks for the construction industry.",
      ],
    },
    dependencies: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does manufacturing and construction depend on forests?
          </h3>
          <p className="max-w-[860px] lg:text-center">
            Forests are fundamental for manufacturing and construction because they provide
            essential raw materials. Companies that extract raw materials from forests (e.g., timber
            for construction and furniture, minerals that support digital technology and renewable
            energy, metals for construction and wiring) or use those materials to build or
            manufacture products depend on forests. Explore the diagram to see how natural capital
            supports manufacturing and construction.
          </p>
        </>
      ),
      chartData: manufacturingLinks,
    },
    impacts: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does manufacturing and construction impact forests?
          </h3>
          <p className="max-w-[860px] lg:text-center">
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
      image1: {
        src: "/assets/industry-cases-construction-impacts.png",
        width: 831,
        height: 403,
      },
    },
  },
  tourism: {
    ecosystem: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            Why are coastal ecosystems essential for businesses and society?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            Coastal ecosystems include sea-grass meadows, rocky platforms, coral reefs, mangroves,
            sand beaches and dunes, estuaries and coastal wetlands. Coastal areas comprise only 4%
            of Earth’s land, yet host &gt;30% of the world’s human population. They account for 90%
            of the marine fish catch and provide a multitude of ecosystem services that are
            essential to human wellbeing.
          </p>
        </>
      ),
      image1: {
        src: "/assets/industry-cases-tourism-ecosystem-1.png",
        width: 685,
        height: 388,
      },
      imageText: (
        <>
          <p>
            Ecosystem assets of coastal ecosystems, such as mangroves and estuarine marshes, store
            up to five times as much carbon per hectare as tropical forests, reduce coastline
            erosion and protect coastal communities in events such as cyclones and storm surges.
          </p>
          <p>
            These ecosystem assets are also nurseries for many commercially important fish species
            and provide habitat for a wide range of birds, invertebrates and mammals, many of which
            are found only in these habitats.
          </p>
        </>
      ),
      content2: (
        <div className="flex flex-col gap-5 xl:pb-10">
          <p>
            Ecosystem assets of coastal ecosystems, such as mangroves and estuarine marshes, store
            up to five times as much carbon per hectare as tropical forests, reduce coastline
            erosion and protect coastal communities in events such as cyclones and storm surges.
          </p>
          <p>
            These ecosystem assets are also nurseries for many commercially important fish species
            and provide habitat for a wide range of birds, invertebrates and mammals, many of which
            are found only in these habitats.
          </p>
        </div>
      ),
      image2: {
        src: "/assets/industry-cases-tourism-ecosystem-2.png",
        width: 353,
        height: 322,
      },
      industriesRelyOnText: "coastal ecosystems",
      directIndustries: [
        {
          title: "Tourism and hospitality",
          tooltip:
            "For recreational, scenic and spiritual renewal opportunities (e.g., swimming, surfing, diving, beachcombing, birdwatching and bushwalking).",
        },
        {
          title: "Fisheries",
          tooltip:
            "Key habitats for breeding and nurseries of commercial fishing species, as well as fishing grounds for harvest.",
        },
        {
          title: "Coastal housing construction and maintenance / landscaping",
          tooltip: "For landscape protection against coastal erosion, flood and storm surges.",
        },
        {
          title: "Recreational fishing",
          tooltip: "To maintain fish populations and the rich fishing spots they provide.",
        },
      ],
      indirectIndustries: [
        {
          title: "Real estate and property developers",
          tooltip:
            "For protection against coastal erosion, floods, and storms, urban development plans need to incorporate these areas to preserve their protective functions and landscape attractiveness.",
        },
        {
          title: "Health and education (in coastal areas)",
          tooltip:
            "To provide clean air and water to nearby communities, mental and physical health benefits, and offer opportunities for research and education on-site.",
        },
        {
          title: "Blue carbon",
          tooltip:
            "Efficient systems to capture and store large amounts of carbon from the atmosphere.",
        },
        {
          title: "Retail",
          tooltip:
            "To promote local economies, provide produce and raw materials, and attract tourism and businesses.",
        },
      ],
      image3: {
        src: "/assets/industry-cases-tourism-ecosystem-3.png",
        width: 871,
        height: 300,
      },
      content3: (
        <>
          Businesses depending on coastal ecosystems must recognize their role in sustaining these
          environments and take proactive steps to minimize their impact. By embracing sustainable
          practices to support ecosystem conservation, such as ecotourism, responsible fisheries,
          and green buildings, businesses can protect the natural resources they rely on and ensure
          their long-term success and resilience.
        </>
      ),
      insights: [
        "Coastal ecosystems provide a range of ecosystem services, including protection from coastal erosion, floods, and storm surges. They also support a variety of industries, such as fisheries, tourism and hospitality, residential development, and retail.",
        "Tourism and hospitality are highly dependent on natural capital, with most visitors attracted by the visual amenities, recreational opportunities and fresh produce derived from coastal ecosystems.",
        "Excessive tourism and unregulated exploitation pressure the natural capital base of coastal ecosystems. Tourism and hospitality must be managed sustainably to maintain the integrity of the ecosystems on which the industry depends.",
      ],
    },
    dependencies: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does tourism and hospitality depend on coastal ecosystems?
          </h3>
          <p className="max-w-[860px] lg:text-center">
            Coastal ecosystems buffer built infrastructure from floods, inundation, coastal erosion
            and storm surges. Coastal ecosystems attract tourists to explore, relax and adventure in
            seaside localities. Tourists support hotels, cafes, restaurants and retail outlets.
            Explore the diagram to see how natural capital benefits tourism and hospitality
            providers.
          </p>
        </>
      ),
      chartData: tourismLinks,
    },
    impacts: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does tourism and hospitality impact coastal ecosystems?
          </h3>
          <p className="max-w-[860px] lg:text-center">
            Tourism and hospitality have a unique opportunity to protect and preserve the coastal
            ecosystems they rely on. This stunning natural capital draws visitors from around the
            world, and with committed management, we can ensure it remains vibrant and healthy for
            generations to come. Businesses in the tourism and hospitality sectors, both large and
            small, must understand their impact on natural capital to take meaningful steps towards
            sustainability. The rise of ecotourism is a promising sign of this commitment, but these
            efforts must go beyond labels and marketing. True ecotourism is about taking real,
            actionable steps backed by credible accreditation, ensuring that the environment is
            genuinely cared for and protected.
          </p>
        </>
      ),
      list: [
        {
          title: "Pollution",
          text: "Accommodation and hospitality providers often discharge pollutants, such as chemicals and wastewater, into coastal wetlands. Road run-off and litter also pollute coastal ecosystems. This can degrade water quality, harm aquatic life, disrupt coastal ecosystems, and diminish visual and visitor amenities.",
        },
        {
          title: "Habitat destruction",
          text: "New hotels, resorts, marinas, retail precincts, real estate projects, infrastructure expansion, or hydrological alterations can directly result in the loss of wetland habitats. These activities can also drain, fill, or convert wetlands into built infrastructure, greatly reducing biodiversity and ecosystem services.",
        },
        {
          title: "Overexploitation",
          text: "Unsustainable fishing practices can deplete fish stocks, and unregulated collection can eliminate shellfish from local areas,  disrupting the ecological balance of these areas. Some recreational activities, such as dune buggies and 4WDing on beaches, can erode dunes and beaches, reducing protection from high tides and storm surges,  and endangering biodiversity.",
        },
        {
          title: "Operational issues",
          text: "The nature-related risk to these businesses is currently limited to operational risk (e.g., reliable supply of services and amenities), financial risk (i.e., costs of supply and maintenance of amenities) and reputational risk damage (e.g., ESG and morale corporate citizenship).",
        },
        {
          title: "Legal risk",
          text: "This may soon extend to legal risk, with company executives liable for the nature-related impacts and legacies of their operations and those of their supply chain. For this reason, nature-related dependencies and impacts need to be explicitly documented, measured and managed.",
        },
      ],
      image1: {
        src: "/assets/industry-cases-tourism-impacts.png",
        width: 831,
        height: 403,
      },
    },
  },
  retail: {
    ecosystem: {
      content1: (
        <>
          <h3 className="text-xl tracking-tight">
            Why are urban green spaces essential for businesses and society?
          </h3>
          <p className="max-w-[685px] tracking-tight">
            With over half of the global population now living in cities, urbanisation presents a
            significant challenge to the management of natural capital and ecosystem services.
            Natural capital in urban areas is often restricted to relatively small green spaces like
            parks, gardens, wetlands and habitat corridors. But even these have the potential to
            mitigate some impacts of urbanisation and provide economic value for retail businesses
            and other industries.
          </p>
        </>
      ),
      image1: {
        src: "/assets/industry-cases-retail-ecosystem-1.png",
        width: 685,
        height: 388,
      },
      imageText:
        "Urban green spaces are vital to the health, climate and economy of cities. Green spaces like parks, gardens, and recreation areas can have mental and physical health benefits and reduce the urban heat island effect (a build-up of heat due to the abundance of heat retaining surfaces), generating ‘urban cooling’ instead. ",
      content2: (
        <div className="flex flex-col gap-5">
          <p>
            Green spaces have also been shown to lead to greater employee retention and increased
            productivity, fewer sick days and better overall employee satisfaction.
          </p>
          <p>
            There is also a strong business case for urban green spaces with direct links between
            tree canopy and retail, with increased consumer spending due to a positive perception of
            the area and enhanced shopping experience. Moreover, ‘green leafy suburbs’ have higher
            real estate value and lower power bills due to microclimate regulation.
          </p>
        </div>
      ),
      image2: {
        src: "/assets/industry-cases-retail-ecosystem-2.png",
        width: 373,
        height: 375,
      },
      industriesRelyOnText: "green spaces",
      directIndustries: [
        {
          title: "Retal",
          tooltip:
            "To attract more foot traffic, enhance the shopping experience and increase consumer spending.",
        },
        {
          title: "Urban planning",
          tooltip:
            "To enhance livability, manage stormwater, reduce urban heat islands and preserve urban biodiversity.",
        },
        {
          title: "Residential housing and real state",
          tooltip:
            "To increase property values, attract buyers, and enhance the appeal of neighbourhoods.",
        },
        {
          title: "Landscaping",
          tooltip:
            "To design, create, and maintain attractive and functional outdoor environments that enhance liveability.",
        },
      ],
      indirectIndustries: [
        {
          title: "Government services",
          tooltip:
            "For benefits to public health, reducing infrastructure costs (e.g., flood control, air quality) and community well-being.",
        },
        {
          title: "Hospitality and office maintenance",
          tooltip:
            "For more appealing urban spaces that contribute to higher occupancy rates, employee productivity, and customer satisfaction.",
        },
        {
          title: "Health and wellbeing",
          tooltip:
            "Recreational spaces provide areas for physical activity, stress relief, social interaction, and clean air, which improve mental and physical health, reduce healthcare costs, and enhance overall public health.",
        },
        {
          title: "Insurance and financial sector",
          tooltip:
            "To mitigate risks such as flood control, climate regulation, and reduced pollution. All this lowers the risk of property damage, health issues, and other liabilities.",
        },
      ],
      image3: {
        src: "/assets/industry-cases-retail-ecosystem-3.png",
        width: 871,
        height: 300,
      },
      content3: (
        <>
          Retail businesses that depend on urban green spaces must help preserve them. By adopting
          sustainable practices, such as supporting green infrastructure, reducing pollution, and
          investing in the maintenance of parks and gardens, businesses can help protect the urban
          natural capital they rely on. This will not only bring direct benefits to businesses but
          will ensure beautiful, healthy urban environments for future generations.
        </>
      ),
      insights: [
        "Urban green spaces offer essential ecosystem services like climate regulation, air purification, and flood mitigation, alongside cultural services such as mental well-being and recreational opportunities, which are crucial for the health of city residents and businesses.",
        "Urban green spaces directly benefit the retail and real estate industries. They enhance the attractiveness of city centres, boost foot traffic, and increase property values, supporting the success of local businesses and the economic growth of an area.",
        "Pollution, urban expansion, and climate change threaten urban green spaces. Sustainable management and political prioritisation are vital to preserving and creating these areas and their economic benefits.",
      ],
    },
    dependencies: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does retail depend on urban green spaces?
          </h3>
          <p className="max-w-[860px] lg:text-center">
            Urban green spaces are vital to the retail sector by enhancing the attractiveness of
            city centres and encouraging foot traffic. These green areas offer residents and
            visitors places to relax, socialise, and unwind, creating a more inviting environment
            that draws people to nearby shops and cafes. Explore the diagram to see how natural
            capital in urban green spaces supports and sustains the retail industry.
          </p>
        </>
      ),
      chartData: retailLinks,
    },
    impacts: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does retail impact urban green spaces?
          </h3>
          <p className="max-w-[860px] lg:text-center">
            While the benefits of urban green spaces are compelling, the politics and economics are
            more complex. Local or regional (e.g., state) governments are responsible for
            establishing and maintaining urban green spaces. While there are good community health,
            amenity, and service grounds for public funding of urban green areas, other public or
            private urban development plans and businesses may clash with these spaces, draining
            available resources and reducing benefits.
          </p>
        </>
      ),
      list: [
        {
          title: "Pollution and degradation",
          text: "Urban development and maintenance activities contribute to air and noise pollution, litter, and runoff, which degrade air quality, water resources, and the overall health of green spaces. Additionally, high foot traffic from retail and tourism, as well as overuse by residents, can lead to soil compaction, vegetation damage, and reduced biodiversity.",
        },
        {
          title: "Urban Expansion",
          text: "Real estate and urban planning industries can reduce green spaces in favour of land conversion for housing, commercial developments, and infrastructure, leading to loss and fragmentation of green areas. Increased urban development may place additional demands on water and other natural resources, further stressing green spaces.",
        },
        {
          title: "Climate Effects",
          text: "Increased impervious surfaces and reduced vegetation from industrial activities exacerbate the urban heat island effect, impacting the cooling and climate regulation services provided by green spaces.",
        },
      ],
      image1: {
        src: "/assets/industry-cases-retail-impacts.png",
        width: 831,
        height: 403,
      },
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
      image1: {
        src: "/assets/industry-cases-food-ecosystem-1.png",
        width: 685,
        height: 388,
      },
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
      image2: {
        src: "/assets/industry-cases-food-ecosystem-2.png",
        width: 373,
        height: 375,
      },
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
      image3: {
        src: "/assets/industry-cases-food-ecosystem-3.png",
        width: 871,
        height: 300,
      },
      content3: (
        <>
          Businesses that benefit from the agricultural supply chain (e.g., food and beverage
          companies, clothing manufacturers, financial institutions, and retailers) must explicitly
          recognise their dependency and impact on natural capital and adopt strategies that reward
          nature-positive farming practices.
        </>
      ),
      insights: [
        "Farmlands are a combination of natural and human-maintained ecosystems.",
        "Natural capital in farmland delivers a range of provisioning ecosystem services in the form of crops, forage and livestock, and key regulating services that increase productivity, such as micro-climate regulation, pollination, pest control and nutrient cycling.",
        "Properly managed farmlands are important for protecting biodiversity and mitigating climate change.",
      ],
    },
    dependencies: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does the food industry depend on farmlands?
          </h3>
          <p className="max-w-[860px] lg:text-center">
            Farmlands are fundamental to the food industry because they provide essential resources
            and ecosystem services. Explore the diagram to see how natural capital benefits the food
            industry.
          </p>
        </>
      ),
      chartData: foodLinks,
    },
    impacts: {
      content1: (
        <>
          <h3 className="max-w-[600px] text-xl lg:text-center lg:text-4xl">
            How does the food industry impact farmlands?
          </h3>
          <p className="max-w-[860px] lg:text-center">
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
      image1: {
        src: "/assets/industry-cases-food-impacts.png",
        width: 831,
        height: 403,
      },
    },
  },
};

export const ACCORDION_ITEMS: IndustryUseCasesAccordionItem[] = [
  {
    id: "manufacturing",
    title: "Manufacturing depends heavily on Forests",
    tabContent: ACCORDION_ITEMS_CONTENT["constructions"],
  },
  {
    id: "tourism",
    title: "Tourism depends heavily on Coastal Ecosystems",
    tabContent: ACCORDION_ITEMS_CONTENT["tourism"],
  },
  {
    id: "retail",
    title: "Retail depends heavily on Urban Green Spaces",
    tabContent: ACCORDION_ITEMS_CONTENT["retail"],
  },
  {
    id: "food-security",
    title: "Food Security depends heavily on Ecosystem Assets",
    tabContent: ACCORDION_ITEMS_CONTENT["food"],
  },
];
