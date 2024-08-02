"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import MountainCoverImage from "@/components/mountain-cover-image";
import { FC } from "react";

const IndustryUseCasesPage: FC = () => {
  return (
    <>
      <Header headerClassName="fixed inset-0 w-full h-[92px] bg-white z-40" />
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
      <MountainCoverImage />
      <Footer />
    </>
  );
};

export default IndustryUseCasesPage;
