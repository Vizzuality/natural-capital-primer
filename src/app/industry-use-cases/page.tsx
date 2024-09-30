"use client";

import { useState, useCallback, useEffect } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { FC } from "react";
import { Accordion } from "@/components/ui/accordion";
import { ACCORDION_ITEMS } from "./data";
import { IndustryUseCasesAccordionItem, IndustryUseCasesTab } from "./types";
import InfiniteSlideDownAnimation from "@/components/animations/infinite-slide-down";
import ArrowSlide from "@/icons/arrow-slide.svg";
import { Tabs } from "@/components/ui/tabs";
import AccordionItem from "./accordion-item";
import { useParams } from "next/navigation";

const IndustryUseCasesPage: FC = () => {
  const params = useParams();
  const [activeItem, setActiveItem] = useState<string>("");
  const [tab, setTab] = useState<IndustryUseCasesTab>("ecosystem");

  const handleTabChange = useCallback((value: string) => {
    setTab(value as IndustryUseCasesTab);
  }, []);

  // On mount, set the default active accordion and then listen to `params` change to set the active
  // accordion
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        setActiveItem(hash);
      }
    };

    handleHashChange();
  }, [params]);

  // Reset the tab when the active item changes (i.e. another accordion is expanded or the current
  // accordion is collapsed)
  useEffect(() => {
    setTab("ecosystem");
  }, [activeItem]);

  return (
    <>
      <div className="bg-black bg-[url(/assets/industry-use-cases-background.png)] bg-cover bg-center bg-no-repeat">
        <Header logo="white" />
        <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pb-12 pt-10 text-white lg:mt-14 lg:gap-y-10 lg:px-20 lg:pb-16 xl:mt-40">
          <h1 className="text-4.2xl font-medium lg:text-5xl">Industry Use Cases</h1>
          <div className="flex max-w-[827px] flex-col gap-y-4">
            <p className="max-w-[827px] text-lg lg:text-xl">
              How do different industries impact and depend on natural capital?
            </p>
            <p className="mt-6 max-w-[730px] lg:mt-10">
              Explore the natural capital assets, the services that flow from them and the value
              they provide for businesses and society in different industries.
            </p>
            <div className="absolute bottom-16 right-20 hidden w-28 flex-col gap-y-5 xl:flex">
              <div className="h-28 w-28 rounded-full border border-white/40">
                <InfiniteSlideDownAnimation>
                  <div className="flex h-28 w-28 items-center justify-center">
                    <ArrowSlide className="h-6 w-6" />
                  </div>
                </InfiniteSlideDownAnimation>
              </div>
              <p className="text-center opacity-50">Scroll down to discover</p>
            </div>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-6 pt-10 lg:px-20 lg:pt-16">
        <div className="mt-6 flex flex-col gap-y-6 pb-6 lg:pb-11">
          <Tabs value={tab} onValueChange={handleTabChange} className="relative">
            <Accordion
              type="single"
              value={activeItem ?? undefined}
              onValueChange={setActiveItem}
              className="flex flex-col"
              collapsible
            >
              {ACCORDION_ITEMS.map((accordionItem: IndustryUseCasesAccordionItem) => (
                <AccordionItem
                  key={accordionItem.id}
                  active={activeItem === accordionItem.id}
                  tab={tab}
                  data={accordionItem}
                />
              ))}
            </Accordion>
          </Tabs>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default IndustryUseCasesPage;
