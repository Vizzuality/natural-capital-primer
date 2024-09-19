"use client";

import dynamic from "next/dynamic";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import ArrowSlide from "@/icons/arrow-slide.svg";
import Image from "next/image";
import Link from "next/link";
import { FC, useMemo, useRef } from "react";
import InfiniteSlideDownAnimation from "@/components/animations/infinite-slide-down";
import StickyNav from "@/components/sticky-nav";
import { useInView } from "framer-motion";
import Parallax from "@/components/animations/parallax";

const RevealLines = dynamic(() => import("@/components/animations/reveal-lines"), {
  ssr: false,
});

const ClimateAndBiodiversityPage: FC = () => {
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);

  const chapter1InView = useInView(chapter1Ref, { margin: "0px 0px -90% 0px" });
  const chapter2InView = useInView(chapter2Ref, { margin: "0px 0px -90% 0px" });

  const activeChapter = useMemo(() => {
    if (chapter2InView) {
      return chapter2Ref.current?.id ?? null;
    }

    if (chapter1InView) {
      return chapter1Ref.current?.id ?? null;
    }

    return null;
  }, [chapter1InView, chapter2InView]);

  return (
    <>
      <Header logo="color" />
      <StickyNav
        title="Climate & Biodiversity"
        items={[
          { key: "climate", value: "NC and Climate Change" },
          { key: "biodiversity", value: "NC and Biodiversity" },
        ]}
        activeItem={activeChapter}
      />
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pb-12 pt-10 lg:mt-14 lg:gap-y-10 lg:px-20 lg:pb-16 xl:mt-40">
        <h1 className="text-4.2xl font-medium lg:text-5xl">Climate & Biodiversity</h1>
        <div className="flex max-w-[827px] flex-col gap-y-4">
          <p className="max-w-[827px] lg:text-xl">
            Natural capital refers to all biotic (living) and abiotic (non-living) natural resources
            present in a defined area that produce flows of services that yield value to society.
            Natural capital is also sometimes referred to as natural capital assets or stocks.
          </p>
          <div className="absolute bottom-16 right-20 hidden w-28 flex-col gap-y-5 xl:flex">
            <div className="h-28 w-28 rounded-full border border-black/20">
              <InfiniteSlideDownAnimation>
                <div className="flex h-28 w-28 items-center justify-center">
                  <ArrowSlide className="h-6 w-6" />
                </div>
              </InfiniteSlideDownAnimation>
            </div>
            <p className="text-center opacity-30">Scroll down to discover</p>
          </div>
        </div>
      </div>

      <div ref={chapter1Ref} id="climate" className="scroll-mt-[46px]">
        <div className="bg-turquoise">
          <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
            <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
              Chapter 01
              <h2 className="text-2xl lg:text-4.5xl">Natural Capital and Climate Change</h2>
            </div>
            <div className="relative top-12 -mt-4 lg:top-20 lg:w-[calc(100%_+_theme(spacing.20))]">
              <Parallax
                heightClasses="h-[200px] md:h-[300px] lg:h-[556px]"
                containerHeightPercentageMobile={200}
              >
                <Image
                  src="/assets/climate-and-biodiversity-background.png"
                  alt=""
                  width={1180}
                  height={547}
                  className="h-auto w-full max-w-none"
                />
              </Parallax>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              The link between{" "}
              <span className="text-turquoise">natural capital and climate change</span> is
              inextricable
            </h3>
            <p className="lg:text-xl">
              We will not achieve net zero emissions without actions that build natural capital (and
              biodiversity), and we cannot build natural capital while consuming resources
              (non-renewable and renewable) at a rate that maintains or exacerbates the climate
              crisis. This inter-dependence is at once both the greatest risk to the planet and the
              potential solution.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:py-28 lg:pt-20">
          <div className="flex flex-col items-start gap-10 pb-10 lg:gap-20 lg:pb-28">
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-turquoise lg:text-5xl">01</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Reducing emissions</h4>
                </div>
                <p className="max-w-[475px] flex-grow lg:min-h-[170px] lg:flex-grow-0">
                  Supporting services support all other ecosystem services. In practical terms,
                  supporting services are difficult to measure directly, so tend to be assessed by
                  using proxy measures such as the extent of ecosystems and the maintenance of
                  genetic diversity among populations and communities.
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-turquoise lg:text-5xl">02</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Sequestring carbon</h4>
                </div>
                <p className="flex-grow lg:min-h-[170px] lg:flex-grow-0">
                  These are the services produced as a by-product of ecosystem processes. They do
                  not produce a tangible product directly but they facilitate many of the
                  provisioning services that do produce products, or moderate natural phenomena that
                  support life.
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-turquoise lg:text-5xl">03</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Cultivated</h4>
                </div>
                <p className="flex-grow lg:min-h-[170px] lg:flex-grow-0">
                  Growing our natural capital asset base
                </p>
              </div>
            </div>
            <div className="flex max-w-[860px] flex-col gap-y-6 pt-10">
              <p className="lg:text-xl">
                Such actions are usually mutualistic –building natural capital increases carbon
                sequestration and vice-versa – but care is needed to guard against perverse outcomes
                where this may not occur.
              </p>
            </div>
            <div className="mt-14 flex max-w-[860px] flex-col gap-y-6 lg:mt-28">
              <h3 className="text-2xl lg:text-4xl">
                It is imperative that{" "}
                <span className="text-turquoise">
                  businesses recognise and respond to this inter-dependence
                </span>
              </h3>
              <p className="lg:text-xl">
                To do so, they need to explicitly document their climate and nature-related
                dependencies and impacts, and understand the links between the two. Importantly,
                failure to consider and include natural capital in climate strategies will
                ultimately be ineffective in improving their climate position and expose the
                business to significant climate and nature-related risk.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-10 md:flex-row md:justify-between md:gap-x-10 lg:gap-x-10">
              <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
                <Parallax
                  heightClasses="h-[250px] md:h-[500px] lg:h-[618px]"
                  containerHeightPercentageMobile={200}
                >
                  <Image
                    src="/assets/climate-and-biodiversity-background-2.png"
                    alt=""
                    width={477}
                    height={618}
                    className="h-auto w-full max-w-none"
                  />
                </Parallax>
              </div>
              <div className="flex max-w-[475px] flex-1 flex-col gap-y-10 lg:gap-y-16">
                <p className="lg:text-xl">
                  Continuous research, policy development, and innovative business practices are
                  crucial to better incorporate natural capital into climate strategies.
                </p>
                <p className="border-l-[6px] border-l-turquoise pl-6">
                  Balancing economic growth with environmental sustainability and biodiversity
                  conservation is a pressing challenge that demands collaborative and proactive
                  solutions.
                </p>
              </div>
            </div>
          </div>
          <main className="flex flex-col justify-start gap-y-4 border-t-2 border-t-turquoise pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10">
            <h3 className="flex-shrink-0 text-turquoise lg:w-[350px] lg:text-xl">
              Key insights about this chapter
            </h3>
            <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Achieving net zero emissions and enhancing natural capital (like biodiversity)
                    are closely linked goals essential for effectively addressing climate change.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Nature-based strategies not only help combat climate change but also support
                    biodiversity. It’s crucial to ensure these actions benefit each other without
                    unintended consequences.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Businesses need to recognize and manage their dependencies on natural resources.
                    Understanding these connections is crucial for effective climate strategies and
                    mitigating business and societal risks related to climate change and
                    biodiversity loss.
                  </p>
                </RevealLines>
              </li>
            </ul>
          </main>
        </div>
      </div>

      <div ref={chapter2Ref} id="biodiversity" className="scroll-mt-[46px]">
        <div className="bg-pink">
          <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
            <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
              Chapter 02
              <h2 className="text-2xl lg:text-4.5xl">Natural Capital and Biodiversity</h2>
            </div>
            <div className="relative top-12 -mt-4 lg:top-20 lg:w-[calc(100%_+_theme(spacing.20))]">
              <Parallax
                heightClasses="h-[200px] md:h-[300px] lg:h-[556px]"
                containerHeightPercentageMobile={200}
              >
                <Image
                  src="/assets/climate-and-biodiversity-background-3.png"
                  alt=""
                  width={1180}
                  height={547}
                  className="h-auto w-full max-w-none"
                />
              </Parallax>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-11 px-6 lg:mt-40 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              Biodiversity has a special{" "}
              <span className="text-pink">relationship with Natural Capital</span>
            </h3>
            <p className="lg:text-xl">
              We will not achieve net zero emissions without actions that build natural capital (and
              biodiversity), and we cannot build natural capital while consuming resources
              (non-renewable and renewable) at a rate that maintains or exacerbates the climate
              crisis. This inter-dependence is at once both the greatest risk to the planet and the
              potential solution.
            </p>
          </div>
          <div className="grid gap-14 md:grid-cols-2 lg:gap-10">
            <div className="flex max-w-[475px] flex-1 flex-col">
              <p className="font-bold">Natural Capital</p>
              <p>
                Natural capital encompasses the entirety of Earth&apos;s natural resources and
                ecosystems, including both living (biotic) and non-living (abiotic) components.
              </p>
            </div>
            <div className="flex max-w-[475px] flex-1 flex-col">
              <p className="font-bold">Biodiversity</p>
              <p>
                Biodiversity specifically refers to the variety of life forms within ecosystems,
                encompassing genetic diversity, species diversity, and ecosystem diversity.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:pb-20 lg:pt-28">
          <div className="flex flex-col items-start gap-10 pb-10 lg:gap-14 lg:pb-28">
            <div className="grid w-full gap-14 md:grid-cols-2 lg:gap-10">
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-pink lg:text-5xl">01</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Resilience to environmental changes</h4>
                </div>
                <p className="max-w-[475px] lg:flex-grow-0">
                  Protecting biodiversity is essential for maintaining natural capital and ensuring
                  the resilience of ecosystems to environmental changes. Resilience refers to the
                  ability of a system to withstand and/or recover from shocks and pressures, such as
                  drought, fire, flood or disease.
                </p>
                <p className="max-w-[475px] lg:flex-grow-0">
                  Sustainable management practices should consider both the conservation of
                  biodiversity and the sustainable use of natural resources to promote long-term
                  environmental and economic sustainability.
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-pink lg:text-5xl">02</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Well-defined and measurable attributes</h4>
                </div>
                <p className="max-w-[475px] lg:flex-grow-0">
                  Biodiversity has well-defined and measurable attributes (e.g., the number of
                  species present, the amount of genetic variability in a population, or the
                  diversity of species that perform the same or similar functions) that are
                  indicators of the resilience of ecosystem assets.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-6 pb-10 lg:gap-y-20 lg:pb-36">
            <p className="max-w-[730px] text-2xl lg:text-4xl">
              Biodiversity builds Natural Capital, through{" "}
              <span className="text-pink">processes like:</span>
            </p>
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="flex gap-x-7">
                <Image
                  src="/assets/climate-and-biodiversity-illustration.png"
                  alt=""
                  width={108}
                  height={108}
                />
                <div className="flex-grow border-t-[6px] border-t-pink pt-5">
                  <RevealLines>
                    <p className="lg:text-xl">Photosynthesis</p>
                  </RevealLines>
                </div>
              </div>
              <div className="flex gap-x-7">
                <Image
                  src="/assets/climate-and-biodiversity-illustration-2.png"
                  alt=""
                  width={108}
                  height={108}
                />
                <div className="flex-grow border-t-[6px] border-t-pink pt-5">
                  <RevealLines>
                    <p className="lg:text-xl">Water Cycling</p>
                  </RevealLines>
                </div>
              </div>
              <div className="flex gap-x-7">
                <Image
                  src="/assets/climate-and-biodiversity-illustration-3.png"
                  alt=""
                  width={108}
                  height={108}
                />
                <div className="flex-grow border-t-[6px] border-t-pink pt-5">
                  <RevealLines>
                    <p className="lg:text-xl">Soil Formation</p>
                  </RevealLines>
                </div>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-y-10 md:flex-row md:justify-between md:gap-x-10 lg:gap-x-10">
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-10 lg:gap-y-16">
              <p className="text-2xl lg:text-4xl">
                However,{" "}
                <span className="text-pink">Natural Capital is more than just biodiversity.</span>
              </p>
              <p className="lg:text-xl">
                It includes the emergent properties that arise from the interaction of species and
                the combination of ecosystem and abiotic resources and also the structures,
                functions, and processes of ecosystems that support human well-being and economic
                activities.
              </p>
              <p className="border-l-[6px] border-l-pink pl-6">
                <span className="font-bold">
                  Example of natural capital, biodiversity and beyond
                </span>
                <br />
                <br />
                Ecosystem services such as pollination, pest control, and the production of food and
                fiber depend directly on biodiversity.
              </p>
            </div>
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <Parallax
                heightClasses="h-[250px] md:h-[500px] lg:h-[618px]"
                containerHeightPercentageMobile={200}
              >
                <Image
                  src="/assets/climate-and-biodiversity-background-4.png"
                  alt=""
                  width={477}
                  height={618}
                  className="h-auto w-full max-w-none"
                />
              </Parallax>
            </div>
          </div>
          <main className="mt-10 flex flex-col justify-start gap-y-4 border-t-2 border-t-pink pt-6 lg:mt-28 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10">
            <h3 className="flex-shrink-0 text-pink lg:w-[350px] lg:text-xl">
              Key insights about this chapter
            </h3>
            <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Biodiversity is essential within natural capital, playing a vital role in
                    ecosystem services such as pollination and pest control.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Natural capital goes beyond biodiversity, encompassing all of Earth&apos;s
                    resources and ecosystems, both living and non-living, which are crucial for
                    ecosystem functions.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Safeguarding biodiversity and sustainably managing natural resources are crucial
                    for maintaining ecosystem strength over time, ensuring our environment and
                    economy thrive in the long run.
                  </p>
                </RevealLines>
              </li>
            </ul>
          </main>
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-6 lg:p-20">
        <main className="flex flex-col items-start gap-y-6 bg-[url(/assets/key-concepts-background-4.svg)] bg-right-bottom bg-no-repeat pb-48 md:pb-32 lg:gap-y-10 lg:pb-24 xl:pb-0">
          <h2 className="flex items-center gap-x-5 text-2xl xl:text-4xl">Downloadable resource</h2>
          <p className="max-w-[730px] lg:text-xl">
            If you find it easier to learn about Natural Capital Key Concepts in a print form, you
            can download the PDF below which contains all theoretical principles about Natural
            Capital.
          </p>
          <Button asChild variant="outline">
            <Link href="/assets/natural-capital-booklet.pdf" download>
              Download Document
            </Link>
          </Button>
        </main>
      </div>
      <div className="bg-orange-500 py-10 lg:py-14">
        <main className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 p-6 text-center">
          <h2 className="max-w-[860px] text-2xl lg:text-4xl">
            Learn more about dependencies and impacts in the industry use cases chapter.
          </h2>
          <Button variant="outline" asChild>
            <Link href="/industry-use-cases">
              <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
            </Link>
          </Button>
        </main>
      </div>
      <Footer />
    </>
  );
};

export default ClimateAndBiodiversityPage;