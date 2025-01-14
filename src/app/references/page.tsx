"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import { REFERENCES } from "./data";

export default function ReferencesPage() {
  return (
    <>
      <Header />
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pt-10 lg:mt-14 lg:gap-y-10 lg:px-20 xl:mt-40">
        <h1 className="text-4.2xl font-medium lg:text-5xl">Natural Capital Primer References</h1>
        <p className="max-w-[827px] text-lg lg:text-xl">
          Explore the references that underpin the Natural Capital Primer, showcasing authoritative
          sources from international organisations and scientific journals on ecosystem services,
          biodiversity, and the economic value of natural resources.
        </p>
      </div>
      <ol className="mx-auto my-10 max-w-7xl list-decimal-leading-zero space-y-4 p-6 pl-[60px] lg:my-28 lg:columns-2 lg:gap-x-28 lg:space-y-5 lg:px-20 lg:pl-[116px]">
        {REFERENCES.map((reference, index) => (
          <li id={`${index + 1}`} key={index} className="break-inside-avoid">
            {reference}
          </li>
        ))}
      </ol>
      <Footer />
    </>
  );
}
