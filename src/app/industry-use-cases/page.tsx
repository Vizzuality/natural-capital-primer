"use client";
import { useState } from "react";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MountainCoverImage from "@/components/mountain-cover-image";
import { FC } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Image from "next/image";
import Plus from "@/svgs/plus.svg";
import Minus from "@/svgs/minus.svg";

const CollapsibleItem = () => {
  const [collapsibleOpen, setCollapsibleOpen] = useState(false);
  return (
    <Collapsible onOpenChange={setCollapsibleOpen}>
      <CollapsibleTrigger className="w-full">
        <TriggerContent open={collapsibleOpen} />
      </CollapsibleTrigger>
      <CollapsibleContent className="collapsible-content">
        Explore the stocks of natural capital, the services that flow from it and the values for
        businesses and society across a range of contexts.
      </CollapsibleContent>
    </Collapsible>
  );
};
const TriggerContent = ({ open = false }: { open?: boolean }) => {
  return (
    <div className="relative flex w-full gap-3.5">
      <div className="flex flex-col gap-3 text-4xl text-black">
        <div className="flex gap-3">
          <Image width={105} height={44} alt="" src="/assets/industry-cases-collapsible-1.png" />
          <div>Constructions depend on</div>
        </div>
        <div className="flex gap-3">
          <Image width={105} height={44} alt="" src="/assets/industry-cases-collapsible-2.png" />
          <div>Forests.</div>
        </div>
      </div>
      <div className="absolute right-0 top-0 h-9 w-9 rounded-full bg-black">
        {open ? <Minus /> : <Plus />}
        <div className="sr-only">Open detail</div>
      </div>
    </div>
  );
};

const IndustryUseCasesPage: FC = () => {
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
        <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-10">
          <CollapsibleItem />
        </div>
      </main>
      <MountainCoverImage />
      <Footer />
    </>
  );
};

export default IndustryUseCasesPage;
