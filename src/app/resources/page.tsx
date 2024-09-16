"use client";

import Header from "@/components/header";
import Link from "next/link";
import Manual from "@/icons/manual.svg";
import ArrowExternal from "@/icons/arrow-external.svg";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import MountainCoverImage from "@/components/mountain-cover-image";
import Footer from "@/components/footer";

const RESOURCES_BY_CATEGORY = [
  {
    category: "Natural Capital concepts",
    resources: [
      {
        name: "The Little Sustainable Landscapes Book",
        url: "https://ecoagriculture.org/resources/scientific-publications/the-little-sustainable-landscapes-book",
        description:
          "A book summarising current developments in landscape management, and the importance of landscape initiatives in achieving sustainable development goals",
      },
      {
        name: "ENCORE",
        url: "https://encorenature.org/en/data-and-methodology/methodology",
        description:
          "Online tool for companies to explore their exposure to nature-related risks and dependencies",
      },
      {
        name: "Nature Positive Initiative (Key resources)",
        url: "https://www.naturepositive.org/resources/",
        description:
          "Compilation of reports, documents and key information by the Nature Positive Initiative",
      },
      {
        name: "Business For Nature (See Essential reads & Sector Guidance)",
        url: "https://www.businessfornature.org/businesscase",
        description: "Resources and guidance on Natural Capital for business",
      },
      {
        name: "WEF - New Nature Economy Report",
        url: "https://www3.weforum.org/docs/WEF_New_Nature_Economy_Report_2020.pdf",
        description:
          "Report by the World Economic forum on the importance of the nature crisis for the socioeconomic system",
      },
      {
        name: "NatureFinance Resources / Insights",
        url: "https://www.naturefinance.net/resources-tools/",
        description:
          "Catalogue of publications about Nature Capital, sustainability, development and investment.",
      },
      {
        name: "Natural Capital Project - Stanford US / inVest",
        url: "https://naturalcapitalproject.stanford.edu/about",
        description:
          "Partnership between researchers, professionals and leaders to incorporate the value of nature into decision-making",
      },
      {
        name: "World Benchmarking Alliance - Nature Benchmarks",
        url: "https://www.worldbenchmarkingalliance.org/publication/nature/",
        description:
          "Comprehensive assessment on how companies are reducing their negative impacts on nature and contributing to the protection and restoration of ecosystems",
      },
      {
        name: "Deloitte: Natural Capital: The nexus between climate, nature and Indigenous Peoples",
        url: "https://www2.deloitte.com/content/dam/Deloitte/us/Documents/financial-services/us-xfsi-climate-indigenous-people-pov.pdf",
        description: "Summary by Deloitte on the importance of Natural Capital",
      },
    ].sort((resA, resB) => resA.name.localeCompare(resB.name)),
  },
  {
    category: "Projects and interventions",
    resources: [
      {
        name: "Natural Capital Coalition",
        url: "https://capitalscoalition.org/",
        description:
          "Coalition to promote and support the use of natural capital into decision making for organisations and individuals",
      },
      {
        name: "World Business Council for Sustainable Development",
        url: "https://www.wbcsd.org/",
        description:
          "Group of over 200 organisations working on developing paths towards sustainability goals",
      },
      {
        name: "Farming for the Future",
        url: "https://farmingforthefuture.org.au/",
        description: "Research and change program focused on natural capital in farming",
      },
      {
        name: "Sustainable Agriculture Initiative Platform",
        url: "https://saiplatform.org/",
        description:
          "International initiative for sustainable agricultural practices along with companies and organisations",
      },
    ].sort((resA, resB) => resA.name.localeCompare(resB.name)),
  },
  {
    category: "Natural Capital accounting & assessment",
    resources: [
      {
        name: "Taskforce for Nature Related Financial Disclosures",
        url: "https://tnfd.global/",
        description:
          "Guidelines and recommendations by the Taskforce on Nature-related Financial Disclosures (TNFD) on natural capital assessment aligned with Global Biodiversity Framework",
      },
      {
        name: "CSIRO Natural Capital Accounting Handbook",
        url: "https://www.csiro.au/en/research/natural-environment/natural-resources/natural-capital-accounting/handbook",
        description: "Handbook published by CSIRO for natural capital assessment and reporting",
      },
      {
        name: "Natural Capital Measurement Catalogue",
        url: "https://naturalcapitalmeasurement.org/",
        description:
          "Guidelines and resources for natural capital and assesment accounting and assesment",
      },
      {
        name: "World Resources Institute",
        url: "https://www.wri.org/",
        description:
          "World Resources Institute, a leading organisation on nature and sustainability tracking",
      },
      {
        name: "UNEP- Accountability for Nature (PDF)",
        url: "https://www.unepfi.org/wordpress/wp-content/uploads/2024/01/Accountability-for-Nature.pdf",
        description: "Overview of the main nature-related assesment and disclosure approaches",
      },
      {
        name: "Science-based Targets for Nature",
        url: "https://sciencebasedtargetsnetwork.org/resources/",
        description: "Framework developed to set and achieve science-based sustainability targets",
      },
      {
        name: "Pollination Nature Positive Strategy: Practical Guidance for Corporates",
        url: "https://pollinationgroup.com/global-perspectives/nature-positive-strategy-practical-guidance-for-corporates/",
        description:
          "Guideline on nature-positive transition for corporates developed by the investment and advisory firm Pollination",
      },
      {
        name: "SEEA",
        url: "https://seea.un.org/",
        description: "International framework for Natural Capital assessment, developed by the UN",
      },
    ].sort((resA, resB) => resA.name.localeCompare(resB.name)),
  },
];

export default function NotFoundPage() {
  return (
    <>
      <Header logo="color" />
      <div className="mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pt-10 lg:mt-14 lg:gap-y-10 lg:px-20 xl:mt-40">
        <h1 className="text-4.2xl font-medium lg:text-5xl">Resources</h1>
        <p className="max-w-[827px] lg:text-xl">
          Explore these resources to deepen your understanding of Natural Capital and its role in
          shaping our environment and society.
        </p>
      </div>
      <main className="mx-auto mt-10 flex max-w-7xl flex-col gap-y-10 p-6 lg:mt-28 lg:gap-y-40 lg:px-20">
        {RESOURCES_BY_CATEGORY.map(({ category, resources }) => (
          <div key={category} className="flex flex-col gap-y-6 lg:gap-y-10">
            <h2 className="text-2xl lg:text-4xl">{category}</h2>
            <ol className="grid gap-6 lg:grid-cols-2 lg:gap-10">
              {resources.map(({ name, description, url }) => (
                <li
                  key={url}
                  className="flex flex-col gap-y-2.5 rounded-[20px] border border-black/10 p-3 lg:rounded-3xl lg:p-7"
                >
                  <Link
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex content-start items-center gap-x-2.5 font-bold"
                  >
                    <span aria-hidden className="flex rounded-lg bg-blue-500/10 p-2 align-middle">
                      <Manual className="h-6 w-6 text-blue-500" />
                    </span>
                    {name}
                  </Link>
                  <p>{description}</p>
                  <Link
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex content-start items-end gap-x-2.5 text-[14px] font-bold"
                  >
                    Check resource
                    <ArrowExternal className="h-5 w-5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ol>
          </div>
        ))}
      </main>
      <div className="mt-9 bg-orange-500 py-10 lg:mt-36 lg:py-14">
        <main className="mx-auto flex max-w-7xl flex-col items-center gap-y-6 p-6 text-center lg:gap-y-5">
          <h2 className="max-w-[820px] text-2xl lg:text-4.5xl">
            Understanding and valuing natural capital is crucial
          </h2>
          <p className="max-w-[820px]">
            We can make informed choices to use and conserve our planet&apos;s resources by
            understanding and valuing natural capital, balancing what we take from nature with what
            we give back.
          </p>
          <Button variant="outline" asChild>
            <Link href="/key-concepts">
              <HoverRepeatAnimation>Learn More</HoverRepeatAnimation>
            </Link>
          </Button>
        </main>
      </div>
      <MountainCoverImage />
      <Footer />
    </>
  );
}
