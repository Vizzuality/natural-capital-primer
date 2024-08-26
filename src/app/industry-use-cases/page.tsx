"use client";
import { useState, ReactNode, useRef, cloneElement, isValidElement } from "react";
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
import { ACCORDION_ITEMS } from "./data";
import { AccordionContentType, TriggerImagesAndText } from "./types";

const MotionPlus = motion(Plus);
const MotionMinus = motion(Minus);

const addRef = (
  accordionItemsRef: React.MutableRefObject<HTMLButtonElement[]>,
  index: number,
  el: HTMLButtonElement,
) => {
  if (!accordionItemsRef.current) {
    accordionItemsRef.current = [];
  }

  if (accordionItemsRef.current.length <= index) {
    accordionItemsRef.current.push(el);
  } else {
    accordionItemsRef.current[index] = el;
  }
};

const Item = ({
  triggerContent,
  content,
  active,
  accordionItemsRef,
  index,
}: {
  triggerContent: AccordionContentType;
  content?: ReactNode;
  active: boolean;
  accordionItemsRef: React.MutableRefObject<HTMLButtonElement[]>;
  index: number;
}) => {
  return (
    <AccordionItem value={triggerContent.id}>
      <AccordionTrigger
        ref={(el) => addRef(accordionItemsRef, index, el as unknown as HTMLButtonElement)}
        className="mx-6 w-full scroll-m-[90px] lg:mx-0"
        headerClassName="sticky top-[90px] z-30 bg-white"
      >
        <TriggerContent content={triggerContent} open={active} />
      </AccordionTrigger>
      {content && <AccordionContent className="lg:pt-0">{content}</AccordionContent>}
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
      <span className="flex flex-col gap-5 text-2xl font-normal text-black lg:gap-4 xl:text-4xl">
        {/* DESKTOP */}
        <span className="hidden text-left leading-tight group-hover:underline xl:inline">
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
        <span className="flex h-11 gap-3 xl:hidden">
          <Image width={105} height={44} alt="" src={imageSrc1} />
          <Image width={105} height={44} alt="" src={imageSrc2} />
        </span>
        <span className="text-left xl:hidden">
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

const IndustryUseCasesPage: FC = () => {
  const [activeItem, setActiveItem] = useState<string>("");
  const accordionItemsRef = useRef<HTMLButtonElement[]>([]);

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
      <main className="mx-auto flex w-full max-w-7xl flex-col gap-y-6 border-t border-dashed border-t-white lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
        <div className="top-24 z-10 hidden h-full flex-shrink-0 px-6 py-9 lg:sticky lg:block lg:w-[220px]">
          {/* Accordion menu */}
          <ul className="hidden flex-col gap-4 transition-opacity duration-200 lg:flex">
            {ACCORDION_ITEMS.map((accordionItem: AccordionContentType, index) => (
              <li key={accordionItem.id}>
                <Button
                  type="button"
                  variant="link"
                  size="auto"
                  className={cn("transition-all hover:font-bold", {
                    "font-bold underline underline-offset-4": activeItem === accordionItem.id,
                  })}
                  aria-expanded={activeItem === accordionItem.id}
                  onClick={() => {
                    setActiveItem(activeItem === accordionItem.id ? "" : accordionItem.id);
                    const triggerRef = accordionItemsRef.current?.[index];
                    setTimeout(() => {
                      triggerRef?.scrollIntoView({ behavior: "smooth" });
                    }, 150);
                  }}
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
            {ACCORDION_ITEMS.map((accordionItem: AccordionContentType, index) => (
              <Item
                key={accordionItem.id}
                triggerContent={accordionItem}
                active={activeItem === accordionItem.id}
                content={accordionItem.content}
                accordionItemsRef={accordionItemsRef}
                index={index}
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
