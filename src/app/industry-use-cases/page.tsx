"use client";
import { useState, ReactNode } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MountainCoverImage from "@/components/mountain-cover-image";
import { FC } from "react";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Plus from "@/svgs/plus.svg";
import Minus from "@/svgs/minus.svg";
import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import AccordionItemContent from "@/components/industry-use-cases/accordion-item-content";
import type { AccordionItemsContentType } from "@/components/industry-use-cases/accordion-item-content";

type TriggerImagesAndText = {
  text1: string;
  imageSrc1: string;
  text2: string;
  imageSrc2: string;
};

type AccordionContent = {
  id: string;
  content?: ReactNode;
} & TriggerImagesAndText;

const MotionPlus = motion(Plus);
const MotionMinus = motion(Minus);

const Item = ({
  triggerContent,
  content,
  active,
}: {
  triggerContent: AccordionContent;
  content?: ReactNode;
  active: boolean;
}) => {
  return (
    <AccordionItem value={triggerContent.id}>
      <AccordionTrigger className="w-full">
        <TriggerContent content={triggerContent} open={active} />
      </AccordionTrigger>
      {content && <AccordionContent>{content}</AccordionContent>}
    </AccordionItem>
  );
};

const TriggerContent = ({
  open = false,
  content,
}: {
  open?: boolean;
  content: TriggerImagesAndText;
}) => {
  const { text1, imageSrc1, text2, imageSrc2 } = content;
  return (
    <span className="relative flex w-full items-start justify-between gap-3.5">
      <span className="flex flex-col gap-5 text-2xl font-normal text-black lg:gap-4 lg:text-4xl">
        {/* DESKTOP */}
        <span className="hidden text-left leading-tight group-hover:underline lg:inline">
          <Image
            width={105}
            height={44}
            alt=""
            src={imageSrc1}
            className="relative -top-1 mr-3 inline-block"
          />
          <span>{text1}</span>
          <br />
          <Image
            width={105}
            height={44}
            alt=""
            src={imageSrc2}
            className="relative -top-1 mr-3 inline-block"
          />
          {text2}
        </span>
        {/* MOBILE */}
        <span className="flex h-11 gap-3 lg:hidden">
          <Image width={105} height={44} alt="" src={imageSrc1} />
          <Image width={105} height={44} alt="" src={imageSrc2} />
        </span>
        <span className="text-left lg:hidden">
          {text1} {text2}
        </span>
      </span>
      <span className="absolute right-0 top-0 flex shrink-0 items-center gap-x-3 lg:relative lg:top-1">
        <span
          className="sr-only font-normal text-grey-300 opacity-0 transition-opacity group-hover:opacity-100 lg:not-sr-only"
          aria-hidden="true"
        >
          {!open && "Open detail"}
          {open && "Close detail"}
        </span>
        <span className="h-11 w-11 rounded-full bg-black text-white transition-colors group-hover:bg-grey-300 lg:h-9 lg:w-9">
          <AnimatePresence initial={false}>
            {open && (
              <MotionMinus
                aria-hidden="true"
                className="h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
            {!open && (
              <MotionPlus
                aria-hidden="true"
                className="h-full w-full"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            )}
          </AnimatePresence>
        </span>
      </span>
    </span>
  );
};

const ACCORDION_ITEMS_CONTENT: AccordionItemsContentType = {
  constructions: {
    ecosystem: {
      content1: (
        <>
          <div className="text-xl tracking-tight">
            Why are forests essential for businesses and society?
          </div>
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
          <div className="mb-5 text-xl">
            Forests provide goods and services to businesses and society.
          </div>
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
};
const ACCORDION_ITEMS: AccordionContent[] = [
  {
    id: "Constructions",
    text1: "Manufacturing and construction",
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
    content: <div>Byyeeee</div>,
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
    text1: "Food Security depends on",
    text2: "Ecosystem Assets.",
    imageSrc1: "/assets/industry-cases-accordion-7.png",
    imageSrc2: "/assets/industry-cases-accordion-8.png",
  },
];

const IndustryUseCasesPage: FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");

  return (
    <>
      <Header logo="color" headerClassName="fixed inset-0 w-full h-[92px] bg-white z-40" />
      <div className="mx-auto mt-[84px] flex max-w-7xl flex-col gap-x-10 gap-y-6 p-6 pb-10 pt-10 lg:mt-0 lg:gap-y-[60px] lg:px-20 lg:pb-20 lg:pt-36 xl:pt-64">
        <div className="text-black lg:hidden">Industry Use Cases</div>
        <h1 className="text-2xl leading-9 lg:max-w-[974px] lg:text-5xl lg:leading-none lg:tracking-tight">
          How do different industries impact and are dependent on natural capital?
        </h1>
        <p className="max-w-[827px] lg:text-xl">
          Explore the stocks of natural capital, the services that flow from it and the values for
          businesses and society across a range of contexts.
        </p>
      </div>
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 border-t border-dashed border-t-white px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
        <div className="top-24 z-10 hidden h-full flex-shrink-0 py-9 lg:sticky lg:block lg:w-[220px]">
          <ul
            className={cn("hidden flex-col gap-4 transition-opacity duration-200 lg:flex", {
              "lg:opacity-0": !activeItem,
              "lg:opacity-100": !!activeItem,
            })}
          >
            {ACCORDION_ITEMS.map((accordionItem: AccordionContent) => (
              <li key={accordionItem.id}>
                <Button
                  type="button"
                  variant="link"
                  size="auto"
                  className={cn("transition-all hover:font-bold", {
                    "font-bold underline underline-offset-4": activeItem === accordionItem.id,
                  })}
                  aria-expanded={activeItem === accordionItem.id}
                  onClick={() =>
                    setActiveItem(activeItem === accordionItem.id ? "" : accordionItem.id)
                  }
                >
                  {accordionItem.id}
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-grow flex-col gap-y-6 lg:pb-40">
          <Accordion
            type="single"
            value={activeItem ?? undefined}
            onValueChange={setActiveItem}
            className="flex flex-col lg:gap-y-20"
            collapsible
          >
            {ACCORDION_ITEMS.map((accordionItem: AccordionContent) => (
              <Item
                key={accordionItem.id}
                triggerContent={accordionItem}
                active={activeItem === accordionItem.id}
                content={accordionItem.content}
              />
            ))}
          </Accordion>
        </div>
      </main>
      <MountainCoverImage />
      <Footer />
    </>
  );
};

export default IndustryUseCasesPage;
