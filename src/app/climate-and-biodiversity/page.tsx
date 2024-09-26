"use client";

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
import RevealLines from "@/components/animations/reveal-lines";
import BackgroundVideo from "@/components/bg-video";

const ClimateAndBiodiversityPage: FC = () => {
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);

  const chapter1InView = useInView(chapter1Ref, { margin: "0px 0px -90% 0px" });
  const chapter2InView = useInView(chapter2Ref, { margin: "0px 0px -90% 0px" });

  const chapter1VideoRef = useRef<HTMLDivElement | null>(null);
  const chapter2VideoRef = useRef<HTMLDivElement | null>(null);

  const chapter1videoInView = useInView(chapter1VideoRef);
  const chapter2videoInView = useInView(chapter2VideoRef);

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
        title="Natural Capital, Climate & Biodiversity"
        items={[
          { key: "climate", value: "Climate Change" },
          { key: "biodiversity", value: "Biodiversity" },
        ]}
        activeItem={activeChapter}
      />
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pb-12 pt-10 lg:mt-14 lg:gap-y-10 lg:px-20 lg:pb-16 xl:mt-40">
        <h1 className="text-4.2xl font-medium lg:text-5xl">
          Natural Capital,
          <br /> Climate & Biodiversity
        </h1>
        <div className="flex max-w-[827px] flex-col gap-y-4">
          <p className="max-w-[827px] text-lg lg:text-xl">
            Natural capital is fundamental to addressing two great challenges of our time: the
            climate crisis and the global species extinction (biodiversity) crisis. They cannot be
            addressed in isolation – effective solutions to the climate crisis require us to think
            about the interconnection between natural capital and biodiversity. Equally, to preserve
            and restore biodiversity, we need to address the climate crisis while building natural
            capital. But biodiversity, natural capital and climate are not the same thing.
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
              <h2 className="text-2xl lg:text-4.5xl">Natural Capital & Climate Change</h2>
            </div>
            <div
              ref={chapter1VideoRef}
              className="relative top-12 -mt-4 h-[200px] md:h-[300px] lg:top-20 lg:h-[556px] lg:w-[calc(100%_+_theme(spacing.20))]"
            >
              <BackgroundVideo
                src="/assets/climate-and-biodiversity-video.mp4"
                sectionInView={chapter1videoInView}
                className="object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              The link between{" "}
              <span className="text-turquoise">natural capital and climate change</span> is
              inextricable.
            </h3>
            <p className="text-lg lg:text-xl">
              We will only achieve net zero emissions with actions that build natural capital (and
              biodiversity). We cannot build natural capital while consuming resources
              (non-renewable and renewable) at a rate that maintains or exacerbates the climate
              crisis. This interdependence is simultaneously the greatest risk to the planet and the
              potential solution.
            </p>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:py-28 lg:pt-20">
          <div className="flex flex-col items-start gap-10 pb-10 lg:gap-14 lg:pb-28">
            <p className="max-w-[860px] text-2xl lg:text-4xl">
              Nature-based strategies are{" "}
              <span className="text-turquoise">
                the key to fighting both the climate and biodiversity extinction crises through:
              </span>
            </p>
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-turquoise lg:text-5xl">01</p>
                  </RevealLines>
                  <h4 className="text-lg text-turquoise lg:text-xl">Reducing emissions</h4>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-turquoise lg:text-5xl">02</p>
                  </RevealLines>
                  <h4 className="text-lg text-turquoise lg:text-xl">Sequestring carbon</h4>
                </div>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-turquoise lg:text-5xl">03</p>
                  </RevealLines>
                  <h4 className="text-lg text-turquoise lg:text-xl">
                    Growing our natural capital asset base
                  </h4>
                </div>
              </div>
            </div>
            <div className="flex max-w-[860px] flex-col gap-y-6">
              <p className="text-lg lg:text-xl">
                Such actions are usually mutualistic—building natural capital increases carbon
                sequestration and vice versa— but care is needed to guard against perverse outcomes
                where this may not occur.
              </p>
            </div>
            <div className="mt-14 flex max-w-[860px] flex-col gap-y-6 lg:mt-28">
              <h3 className="text-2xl lg:text-4xl">
                It is imperative that{" "}
                <span className="text-turquoise">
                  businesses recognise and respond to this inter-dependence.
                </span>
              </h3>
              <p className="text-lg lg:text-xl">
                To do so, they need to explicitly document their climate and nature-related
                dependencies and impacts and understand the links between the two. Importantly,
                failure to consider and include natural capital in climate strategies will
                ultimately be ineffective in improving their climate position and expose the
                business to significant climate and nature-related risks.
              </p>
            </div>
            <div className="flex w-full flex-col gap-y-10 md:flex-row md:justify-between md:gap-x-10 lg:gap-x-10">
              <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
                <Parallax
                  heightClasses="h-[250px] md:h-[500px] lg:h-[618px]"
                  containerHeightPercentageMobile={200}
                >
                  <Image
                    src="/assets/climate-and-biodiversity-background.png"
                    alt=""
                    width={477}
                    height={618}
                    className="h-auto w-full max-w-none"
                  />
                </Parallax>
              </div>
              <div className="flex max-w-[475px] flex-1 flex-col gap-y-10 lg:gap-y-16">
                <p className="text-lg lg:text-xl">
                  Moving forward, continuous research, policy development, and innovative business
                  practices are crucial to better incorporate natural capital into climate
                  strategies.
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
            <h3 className="flex-shrink-0 text-lg text-turquoise lg:w-[350px] lg:text-xl">
              Key insights about natural capital & climate change
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
                    Nature-based strategies help combat climate change and support biodiversity.
                    It’s crucial to ensure these actions benefit each other without unintended
                    consequences.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Businesses need to recognise and manage their dependencies on natural resources.
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
              <h2 className="text-2xl lg:text-4.5xl">Natural Capital & Biodiversity</h2>
            </div>
            <div
              ref={chapter2VideoRef}
              className="relative top-12 -mt-4 h-[200px] md:h-[300px] lg:top-20 lg:h-[556px] lg:w-[calc(100%_+_theme(spacing.20))]"
            >
              <BackgroundVideo
                src="/assets/climate-and-biodiversity-video-2.mp4"
                sectionInView={chapter2videoInView}
                className="object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-11 px-6 lg:mt-40 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              Biodiversity has a special{" "}
              <span className="text-pink">relationship with natural capital.</span>
            </h3>
            <p className="text-lg lg:text-xl">
              Biodiversity is part of natural capital, benefits from other aspects of natural
              capital, and is fundamental to generating many of the ecosystem services that flow
              from natural capital. It is at once a subset of natural capital, while also being
              fundamental to growing natural capital and generating ecosystem services.
            </p>
          </div>
          <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <p className="text-lg lg:text-xl">Natural Capital</p>
              <p>
                Natural capital encompasses all Earth&apos;s natural resources and ecosystems,
                including living (biotic) and non-living (abiotic) components.
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> forests, freshwater, soil
              </p>
            </div>
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <p className="text-lg lg:text-xl">Biodiversity</p>
              <p>
                Biodiversity is the variety of life forms within ecosystems, encompassing genetic
                diversity, species diversity, and ecosystem diversity.
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> tree species, coral reefs, pollinators
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:py-28">
          <div className="flex flex-col gap-y-6 pb-10 lg:gap-y-20 lg:pb-36">
            <p className="max-w-[730px] text-2xl lg:text-4xl">
              Biodiversity builds natural capital, through{" "}
              <span className="text-pink">processes like:</span>
            </p>
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col gap-y-4 lg:gap-y-9">
                <div className="flex gap-x-7">
                  <Image
                    src="/assets/climate-and-biodiversity-illustration.png"
                    alt=""
                    width={108}
                    height={108}
                  />
                  <div className="flex-grow border-t-[6px] border-t-pink pt-5">
                    <RevealLines>
                      <p className="text-lg lg:text-xl">Photosynthesis</p>
                    </RevealLines>
                  </div>
                </div>
                <p>
                  The process by which green plants, algae, and certain bacteria convert light
                  energy into chemical energy in the form of glucose, using carbon dioxide and
                  water, and releasing oxygen as a byproduct.
                </p>
              </div>
              <div className="flex flex-col gap-y-4 lg:gap-y-9">
                <div className="flex gap-x-7">
                  <Image
                    src="/assets/climate-and-biodiversity-illustration-2.png"
                    alt=""
                    width={108}
                    height={108}
                  />
                  <div className="flex-grow border-t-[6px] border-t-pink pt-5">
                    <RevealLines>
                      <p className="text-lg lg:text-xl">Water Cycling</p>
                    </RevealLines>
                  </div>
                </div>
                <p>
                  The continuous movement of water on, above, and below the Earth&apos;s surface
                  through processes such as evaporation, condensation, precipitation, infiltration,
                  and runoff.
                </p>
              </div>
              <div className="flex flex-col gap-y-4 lg:gap-y-9">
                <div className="flex gap-x-7">
                  <Image
                    src="/assets/climate-and-biodiversity-illustration-3.png"
                    alt=""
                    width={108}
                    height={108}
                  />
                  <div className="flex-grow border-t-[6px] border-t-pink pt-5">
                    <RevealLines>
                      <p className="text-lg lg:text-xl">Soil Formation</p>
                    </RevealLines>
                  </div>
                </div>
                <p>
                  The process by which rock is broken down into smaller particles and mixed with
                  organic material over time, creating the layered structure of soil through
                  physical, chemical, and biological processes.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col gap-y-10 md:flex-row md:justify-between md:gap-x-10 lg:gap-x-10">
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-10 lg:gap-y-16">
              <p className="text-2xl lg:text-4xl">
                However,{" "}
                <span className="text-pink">natural capital is more than just biodiversity.</span>
              </p>
              <p className="text-lg lg:text-xl">
                It includes the emergent properties that arise from the interaction of species and
                the combination of ecosystem and abiotic resources.
              </p>
              <p className="border-l-[6px] border-l-pink pl-6">
                <span className="font-bold">
                  Examples of natural capital, biodiversity and beyond
                </span>
                <br />
                <br />
                Ecosystem services such as pollination, pest control, and the production of food and
                fibre depend directly on biodiversity.
                <br />
                <br />
                Natural capital encompasses not only biodiversity but also the structures,
                functions, and processes of ecosystems that support human well-being and economic
                activities.
              </p>
            </div>
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
          </div>
          <main className="mt-10 flex flex-col justify-start gap-y-4 border-t-2 border-t-pink pt-6 lg:mt-28 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10">
            <h3 className="flex-shrink-0 text-lg text-pink lg:w-[350px] lg:text-xl">
              We need to protect both for sustainability
            </h3>
            <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-5">
              <p className="max-w-[600px]">
                Protecting biodiversity is crucial for maintaining natural capital and ensuring
                ecosystems remain resilient to environmental changes. Sustainable management
                practices must balance biodiversity conservation with the responsible use of natural
                resources to support long-term environmental and economic sustainability.
                Biodiversity is measured through attributes such as the number of species, genetic
                variability within populations, and the diversity of species that perform similar
                ecological functions—all of which serve as indicators of ecosystem resilience.
              </p>
              <p className="max-w-[600px] font-bold lg:mt-5">
                However, biodiversity is under severe threat:
              </p>
              <p className="max-w-[600px] text-lg lg:text-xl">
                <span className="text-pink">Biodiversity Loss:</span> Around 1 million species are
                currently at risk of extinction, driven largely by habitat loss, climate change, and
                pollution.
              </p>
              <p className="max-w-[600px] text-lg lg:mt-5 lg:text-xl">
                <span className="text-pink">Pollinator Decline:</span> Over 75% of the global food
                crops we grow depend on animal pollinators, which are experiencing rapid population
                declines.
              </p>
              <p className="max-w-[600px] text-lg lg:mt-5 lg:text-xl">
                <span className="text-pink">Water Scarcity:</span> By 2025, it is projected that 1.8
                billion people will be living in areas facing absolute water scarcity, underscoring
                the pressing need for sustainable water management.
              </p>
              <p className="max-w-[600px] lg:mt-5">
                These figures highlight the urgent need for integrated approaches that prioritise
                biodiversity protection, sustainable resource use, and resilience to future
                environmental challenges.
              </p>
            </div>
          </main>
          <main className="mt-10 flex flex-col justify-start gap-y-4 border-t-2 border-t-pink pt-6 lg:mt-20 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10">
            <h3 className="flex-shrink-0 text-lg text-pink lg:w-[350px] lg:text-xl">
              Key insights about natural capital & biodiversity
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

      <div className="bg-orange-500 py-10 lg:py-14">
        <main className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 p-6 text-center">
          <h2 className="max-w-[860px] text-2xl lg:text-4xl">
            Learn more about dependencies and impacts in the industry use cases chapter.
          </h2>
          <Button variant="outline" size="lg" asChild>
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
