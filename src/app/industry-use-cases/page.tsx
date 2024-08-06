"use client";
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MountainCoverImage from "@/components/mountain-cover-image";
import { FC } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import Plus from "@/svgs/plus.svg";
import Minus from "@/svgs/minus.svg";

type TriggerImagesAndText = {
  text1: string;
  imageSrc1: string;
  text2: string;
  imageSrc2: string;
};

type AccordionContent = {
  id: string;
} & TriggerImagesAndText;

const Item = ({ content, active }: { content: AccordionContent; active: boolean }) => {
  return (
    <AccordionItem value={content.id}>
      <AccordionTrigger className="w-full">
        <TriggerContent content={content} open={active} />
      </AccordionTrigger>
      <AccordionContent className="Accordion-content">
        Explore the stocks of natural capital, the services that flow from it and the values for
        businesses and society across a range of contexts.
      </AccordionContent>
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
    <div className="relative flex w-full gap-3.5">
      <div className="flex flex-col gap-4 text-4xl font-normal text-black">
        <div className="flex gap-3">
          <Image width={105} height={44} alt="" src={imageSrc1} />
          <div>{text1}</div>
        </div>
        <div className="flex gap-3">
          <Image width={105} height={44} alt="" src={imageSrc2} />
          <div>{text2}</div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-black">
        {open ? <Minus /> : <Plus />}
        <div className="sr-only">Open detail</div>
      </div>
    </div>
  );
};

const ACCORDION_ITEMS: AccordionContent[] = [
  {
    id: "accordion1",
    text1: "Constructions depend on",
    text2: "Forests.",
    imageSrc1: "/assets/industry-cases-accordion-1.png",
    imageSrc2: "/assets/industry-cases-accordion-2.png",
  },
  {
    id: "accordion2",
    text1: "Tourism depends on",
    text2: "Wetlands and Mangroves.",
    imageSrc1: "/assets/industry-cases-accordion-3.png",
    imageSrc2: "/assets/industry-cases-accordion-4.png",
  },
  {
    id: "accordion3",
    text1: "Retail depends on",
    text2: "Urban Green Spaces.",
    imageSrc1: "/assets/industry-cases-accordion-5.png",
    imageSrc2: "/assets/industry-cases-accordion-6.png",
  },
  {
    id: "accordion4",
    text1: "Food industry depends on",
    text2: "Farmlands.",
    imageSrc1: "/assets/industry-cases-accordion-7.png",
    imageSrc2: "/assets/industry-cases-accordion-8.png",
  },
];

const IndustryUseCasesPage: FC = () => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  return (
    <>
      <Header logo="color" headerClassName="fixed inset-0 w-full h-[92px] bg-white z-40" />
      <div className="mx-auto mt-[84px] flex max-w-7xl flex-col gap-x-10 gap-y-6 p-6 pb-10 pt-10 lg:mt-0 lg:gap-y-[60px] lg:px-20 lg:pb-20 lg:pt-36 xl:pt-64">
        <div className="text-black lg:hidden">Industry Use Cases</div>
        <h1 className="flex-shrink-0 text-2xl font-medium leading-9 lg:max-w-[974px] lg:text-5xl lg:leading-none lg:tracking-tight">
          How do different industries impact and are dependent on natural capital?
        </h1>
        <p className="max-w-[827px] lg:text-xl">
          Explore the stocks of natural capital, the services that flow from it and the values for
          businesses and society across a range of contexts.
        </p>
      </div>
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 border-t border-dashed border-t-white px-6 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
        <div className="flex-shrink-0 lg:w-[220px]"></div>
        <div className="flex flex-grow flex-col gap-y-6">
          <Accordion
            type="single"
            onValueChange={setActiveItem}
            className="flex flex-col lg:gap-y-20"
          >
            {ACCORDION_ITEMS.map((accordionItem: AccordionContent) => (
              <Item
                key={accordionItem.id}
                content={accordionItem}
                active={activeItem === accordionItem.id}
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
