"use client";

import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import ArrowSlide from "@/icons/arrow-slide.svg";
import ThinArrow from "@/icons/thin-arrow.svg";
import Link from "next/link";
import { FC, useMemo, useRef } from "react";
import Quiz from "@/components/quiz";
import type { QuizProps } from "@/components/quiz";
import NaturalCapitalChart from "./natural-capital-chart";
import InfiniteSlideDownAnimation from "@/components/animations/infinite-slide-down";
import SecondaryNavigation from "@/components/secondary-navigation";
import { useInView } from "framer-motion";
import Reference from "@/components/reference";
import BackgroundVideo from "@/components/bg-video";
import RevealLines from "@/components/animations/reveal-lines";

const QUIZ_DATA: QuizProps[] = [
  {
    name: "Chapter 1",
    color: "green",
    questions: [
      {
        title: "Which of the following is a non-renewable asset?",
        options: ["Fossil Fuels", "Water", "Kelp"],
        answer: 0,
      },
      {
        title:
          "Complete the sentence to explain how ecosystem assets are different from environmental assets. “Ecosystems are…",
        options: ["Single assets", "Always renewable", "Interactions of assets"],
        answer: 2,
      },
      {
        title: "Which resource category is maintained by human intervention?",
        options: ["Renewable", "Cultivated", "Non-renewable"],
        answer: 1,
      },
    ],
  },
  {
    name: "Chapter 2",
    color: "blue",
    questions: [
      {
        title:
          "The relationship between supporting services and other ecosystem services can be described as:",
        options: ["Independent", "Interdependent", "Competitive"],
        answer: 1,
      },
      {
        title: "Which type of service produces  food, water, and timber?",
        options: ["Regulating", "Provisioning", "Abiotic"],
        answer: 1,
      },
      {
        title: "Minerals and fossil fuels are examples of benefits derived from:",
        options: ["Abiotic services", "Cultural services", "Supporting services"],
        answer: 0,
      },
    ],
  },
  {
    name: "Chapter 3",
    color: "orange",
    questions: [
      {
        title:
          "A company that extracts iron ore from the ground has a direct dependency on what type of resources?",
        options: ["Renewable", "Non-renewable", "Manufactured"],
        answer: 1,
      },
      {
        title: "How can a business's actions in one place affect the environment somewhere else?",
        options: ["Direct pollution", "Indirect supply chains", "Both"],
        answer: 2,
      },
      {
        title: "Extreme weather due to climate change is an example of which type of impact?",
        options: ["Direct", "Indirect", "Cumulative"],
        answer: 2,
      },
    ],
  },
];

const KeyConceptsPage: FC = () => {
  const chapter0Ref = useRef<HTMLDivElement>(null);
  const chapter1Ref = useRef<HTMLDivElement>(null);
  const chapter2Ref = useRef<HTMLDivElement>(null);
  const chapter3Ref = useRef<HTMLDivElement>(null);

  const chapter0InView = useInView(chapter1Ref, { margin: "0px 0px 0% 0px" });
  const chapter1InView = useInView(chapter1Ref, { margin: "0px 0px -90% 0px" });
  const chapter2InView = useInView(chapter2Ref, { margin: "0px 0px -90% 0px" });
  const chapter3InView = useInView(chapter3Ref, { margin: "0px 0px -90% 0px" });

  const chapter1VideoRef = useRef<HTMLDivElement | null>(null);
  const chapter2VideoRef = useRef<HTMLDivElement | null>(null);
  const chapter3VideoRef = useRef<HTMLDivElement | null>(null);

  const chapter1videoInView = useInView(chapter1VideoRef);
  const chapter2videoInView = useInView(chapter2VideoRef);
  const chapter3videoInView = useInView(chapter3VideoRef);

  const activeChapter = useMemo(() => {
    if (chapter3InView) {
      return chapter3Ref.current?.id ?? null;
    }

    if (chapter2InView) {
      return chapter2Ref.current?.id ?? null;
    }

    if (chapter1InView) {
      return chapter1Ref.current?.id ?? null;
    }

    if (chapter0InView) {
      return chapter0Ref.current?.id ?? null;
    }

    return null;
  }, [chapter0InView, chapter1InView, chapter2InView, chapter3InView]);

  return (
    <>
      <Header />
      <SecondaryNavigation
        title="Key Concepts"
        items={[
          { key: "introduction", value: "Introduction" },
          { key: "assets", value: "Natural Capital Assets" },
          { key: "flows-of-services", value: "Flows of Services" },
          { key: "dependencies-and-impacts", value: "Dependencies and Impacts" },
        ]}
        activeItem={activeChapter}
      />
      <div
        ref={chapter0Ref}
        id="introduction"
        className="relative mx-auto flex max-w-7xl scroll-mt-[105px] flex-col gap-y-6 p-6 pb-12 pt-10 pt-16 lg:gap-y-10 lg:px-20 lg:pb-16 lg:pt-14 xl:pt-52"
      >
        <h1 className="text-4.2xl font-medium lg:text-5xl">What is Natural Capital?</h1>
        <div className="flex max-w-[827px] flex-col gap-y-4">
          <p className="max-w-[827px] text-lg lg:text-xl">
            Natural capital refers to all biotic (living) and abiotic (non-living) natural
            resources, or ‘assets’ that provide products and services that are of value to humans
            and society. Natural capital is sometimes referred to as ‘stocks’ to describe the role
            of nature within the economy.{" "}
            <Reference id={0} color="green" className="text-lg text-green-500" />
          </p>
          <div className="mt-6 flex max-w-[730px] flex-col gap-y-6 lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-x-10">
            <p>
              <b>Biotic natural resources</b> are those derived from living organisms, such as
              plants, animals, fungi, bacteria and viruses.
            </p>
            <p>
              <b>Abiotic natural resources</b> are those derived from non-living sources and include
              geological resources (minerals, soil, fossil fuels), water and physical processes such
              as solar radiation, wind and tides.
            </p>
          </div>
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

      <div ref={chapter1Ref} id="assets" className="scroll-mt-[53px]">
        <div className="bg-green-500">
          <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
            <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
              Chapter 01
              <h2 className="text-2xl lg:text-4.5xl">Natural Capital Assets</h2>
            </div>
            <div
              ref={chapter1VideoRef}
              className="relative top-12 -mt-4 h-[200px] md:h-[300px] lg:top-20 lg:h-[556px] lg:w-[calc(100%_+_theme(spacing.20))]"
            >
              <BackgroundVideo
                src="/assets/key-concepts-video.mp4"
                fallbackImage="/assets/key-concepts-video-fallback.png"
                sectionInView={chapter1videoInView}
                className="object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              What are <span className="text-green-500">natural capital assets?</span>
            </h3>
            <p className="text-lg lg:text-xl">
              Natural capital assets are the tangible natural resources (both biotic and abiotic)
              that provide products and generate ecosystem services that are of value to society.
              Natural capital assets can be defined by their extent (e.g., area, volume, length) and
              condition (e.g., quality, density, diversity).
            </p>
            <p className="text-lg lg:text-xl">
              There are two types of natural capital assets: environmental assets and ecosystem
              assets. <Reference id={1} color="green" className="text-lg text-green-500" />
            </p>
          </div>
          <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <h4 className="text-lg lg:text-xl">Environmental assets</h4>
              <p>
                Environmental assets are the individual components in nature. This includes both
                biotic and abiotic natural resources which contribute to an ecosystem&apos;s
                biological diversity and vitality. They provide the foundational physical and
                chemical components necessary for ecosystem functioning.
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> Individual plant or animal species (biotic) and water, minerals, and
                soil (abiotic)
              </p>
            </div>
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <h4 className="text-lg lg:text-xl">Ecosystem assets</h4>
              <p>
                Ecosystem assets are formed through the combination of many individual environmental
                assets. Abiotic factors like climate and geology interact with biotic factors such
                as plants and animals to shape ecosystems and influence their extent and condition.
                The properties of ecosystem assets, such as species composition, function and form,
                result from these interactions, and give ecosystems their unique characteristics
                that determine the services and products that flow from them. They are called
                “assets” because they are the source for ecosystem services that support well‐being,
                health, and security. <Reference id={1} color="green" className="text-green-500" />
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> grasslands, forests, woodlands, wetlands, mangroves, and peatlands
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-6 pt-20 lg:px-20 lg:pb-[84px] lg:pt-28">
          <div className="flex flex-col items-start gap-10 pb-10 lg:gap-14 lg:pb-28">
            <h3 className="max-w-[860px] text-2xl lg:text-4xl">
              There are{" "}
              <span className="text-green-500">three categories of natural capital assets.</span>
            </h3>
            <p className="max-w-[860px] text-lg lg:text-xl">
              Natural capital assets encompass all elements of nature that provide value, including
              both ecosystem services and resources. Natural capital assets can be defined by their
              usability for humans.
            </p>
            <div className="grid gap-14 md:grid-cols-2 md:grid-rows-[auto_auto] lg:mt-8 lg:grid-cols-[auto_350px] lg:gap-10">
              <div className="row-span-2 flex flex-col gap-y-6">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-green-500 lg:text-5xl">01</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Renewable</h4>
                </div>
                <p className="lg:mt-4 lg:flex-grow-0">
                  <b>Inexhaustible -</b> Physical resources that are restored by natural processes
                  at a rate equal to or faster than they are used.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> solar radiation, wind, tidal energy, water flow, geothermal energy
                </p>
                <p className="lg:mt-4 lg:flex-grow-0">
                  <b>Exhaustible -</b> Biological resources that, if harvested slower than or equal
                  to the rate at which they are replenished by natural processes, can be harvested
                  sustainably in perpetuity. If biotic resources are harvested faster than they are
                  replaced by natural processes, they become exhaustible (unsustainable).
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> timber, kelp, fisheries, game species
                </p>
                <p className="lg:mt-4 lg:flex-grow-0">
                  <b>Recoverable -</b> Renewable resources that are replenished by natural processes
                  on longer time scales (decades to centuries).
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> guano, groundwater, soil fertility
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-green-500 lg:text-5xl">02</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Cultivated</h4>
                </div>
                <p className="lg:mt-4 lg:flex-grow-0">
                  Ecosystems that are maintained by human intervention but depend on the underlying
                  environmental assets.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> agricultural systems, plantations, urban green spaces
                </p>
              </div>
              <div className="flex flex-col gap-y-6">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-green-500 lg:text-5xl">03</p>
                  </RevealLines>
                  <h4 className="lg:text-xl">Non-renewable</h4>
                </div>
                <p className="lg:mt-4 lg:flex-grow-0">
                  Non-renewable resources are finite and irreplaceable or those that can only be
                  replaced over geological timescales.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> coal, iron ore, natural gas, lithium
                </p>
              </div>
            </div>
          </div>
          <main className="flex flex-col justify-start gap-y-4 border-t-2 border-t-green-500 pb-14 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:pb-28">
            <h3 className="flex-shrink-0 text-lg text-green-500 lg:w-[350px] lg:text-xl">
              Key insights about natural capital assets
            </h3>
            <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Assets form the basis of natural capital and can be categorised as either
                    environmental (individual) or ecosystem (interaction of environmental) assets.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    There are three different resource classes: renewable (inexhaustible,
                    exhaustible and recoverable), cultivated and non-renewable.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    These classes are determined by the amount of time taken to replenish them and
                    the process in which they are created.
                  </p>
                </RevealLines>
              </li>
            </ul>
          </main>
          <Quiz {...QUIZ_DATA[0]} />
        </div>

        <div className="bg-black bg-[url(/assets/industry-use-cases-background.png)] bg-cover bg-center bg-no-repeat text-white">
          <div className="mx-auto max-w-7xl p-6 py-10 lg:p-20">
            <main className="flex flex-col items-start gap-y-6 lg:gap-y-10">
              <h2 className="flex max-w-[730px] items-center gap-x-5 text-2xl xl:text-4xl">
                How do different industries impact and depend on natural capital?
              </h2>
              <p className="max-w-[730px] text-lg lg:text-xl">
                Explore the natural capital assets, the services that flow from them and the value
                they provide for businesses and society in different industries.
              </p>
              <Button asChild variant="white" size="lg">
                <Link href="/industry-use-cases">
                  <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
                </Link>
              </Button>
            </main>
          </div>
        </div>
      </div>

      <div ref={chapter2Ref} id="flows-of-services" className="scroll-mt-[53px]">
        <div className="bg-blue-500">
          <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
            <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
              Chapter 02
              <h2 className="text-2xl lg:text-4.5xl">Flows of Services</h2>
            </div>
            <div
              ref={chapter2VideoRef}
              className="relative top-12 -mt-4 h-[200px] md:h-[300px] lg:top-20 lg:h-[556px] lg:w-[calc(100%_+_theme(spacing.20))]"
            >
              <BackgroundVideo
                src="/assets/key-concepts-video-2.mp4"
                fallbackImage="/assets/key-concepts-video-2-fallback.png"
                sectionInView={chapter2videoInView}
                className="object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              What are the{" "}
              <span className="text-blue-500">benefits that flow from natural capital assets?</span>
            </h3>
            <p className="text-lg lg:text-xl">
              Natural capital assets produce flows of services that have value to businesses and
              society. <Reference id={0} color="blue" className="text-lg text-blue-500" /> There can
              be of two types:
            </p>
          </div>
          <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <h4 className="text-lg lg:text-xl">Abiotic Services</h4>
              <p>
                Abiotic services are benefits that arise from abiotic natural resources and physical
                processes, including fundamental geological processes, solar radiation and the
                Earth’s rotation and gravitational pull.
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> the supply of minerals (including metals) and fossil fuels, as well
                as geothermal heat, wind, tides, sunlight and hydro-power
              </p>
            </div>
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <h4 className="text-lg lg:text-xl">Ecosystem Services</h4>
              <p>
                Ecosystem services are a key concept in natural capital. Ecosystem services are
                products or processes generated by ecosystems that have value to society. They can
                be raw materials or products extracted directly from ecosystem assets or the outcome
                of ecological processes that generate a resource or service.{" "}
                <Reference id={2} color="blue" className="text-blue-500" />
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> the provision of food, raw materials like timber and fibre,
                medicinal resources, climate regulation, water purification, pollination, flood
                control, nutrient cycling, photosynthesis, habitat provision, recreational and
                tourism opportunities, and spiritual and aesthetic values
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-6 pt-20 lg:px-20 lg:py-28 lg:pt-28">
          <div className="flex flex-col items-start gap-10 pb-10 lg:gap-14 lg:pb-28">
            <h3 className="text-2xl lg:text-4xl">
              The four categories of <span className="text-blue-500">ecosystem services.</span>
            </h3>
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-blue-500 lg:text-5xl">01</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Supporting services</h4>
                </div>
                <p className="lg:min-h-[145px] lg:flex-grow-0">
                  Supporting services support all other ecosystem services. They are the underlying
                  natural processes that enable ecosystems to function, and to produce all other
                  ecosystem services.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> photosynthesis, nutrient cycling, soil formation, and water
                  cycling
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-blue-500 lg:text-5xl">02</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Regulating services</h4>
                </div>
                <p className="flex-grow lg:min-h-[145px] lg:flex-grow-0">
                  These are the services produced as a by-product of ecosystem processes. They do
                  not produce a tangible product directly but they moderate natural phenomena that
                  support life or facilitate provisioning services that produce products.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> climate regulation, flood mitigation, erosion control, water
                  purification and pollination
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-blue-500 lg:text-5xl">03</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Provisioning services</h4>
                </div>
                <p className="flex-grow lg:min-h-[145px] lg:flex-grow-0">
                  These are any type of tangible material or product extracted from natural capital
                  that benefits people.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> all food, raw materials (timber, minerals, gas, oil), fibres
                  (wool, cotton, hemp), medicines, drinking water
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-blue-500 lg:text-5xl">04</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Cultural services</h4>
                </div>
                <p className="flex-grow lg:flex-grow-0">
                  These are non-material benefits that contribute to the cultural and spiritual
                  advancement of people.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> recreational services and tourism, mental and physical health and
                  well-being that comes from connecting with nature, creative inspiration, enjoying
                  beautiful scenery, spiritual renewal
                </p>
              </div>
              <div className="relative flex flex-col justify-between gap-y-10 bg-black bg-[url(/assets/key-concepts-background-2.png)] bg-cover p-4 text-white md:col-span-2 lg:p-12">
                <p className="text-xl lg:text-2xl">Climate & Biodiversity</p>
                <p className="max-w-[520px] text-2xl lg:text-4xl">
                  Understanding the relationship between natural capital, climate and biodiversity
                </p>
                <Button
                  variant="outline-white"
                  size="auto"
                  className="h-[76px] w-[76px] self-end rounded-full md:absolute md:bottom-4 md:right-4 lg:bottom-12 lg:right-12"
                  asChild
                >
                  <Link href="/climate-and-biodiversity">
                    <span className="sr-only">Climate & Biodiversity</span>
                    <HoverRepeatAnimation>
                      <ThinArrow aria-hidden />
                    </HoverRepeatAnimation>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <NaturalCapitalChart />
          <main className="mt-10 flex flex-col justify-start gap-y-4 border-t-2 border-t-blue-500 pb-14 pt-6 lg:mt-28 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:pb-28">
            <h3 className="flex-shrink-0 text-lg text-blue-500 lg:w-[350px] lg:text-xl">
              Key insights about flows of services
            </h3>
            <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Natural capital assets produce two types of services: abiotic services
                    (geological and physical processes) and ecosystem services (ecological
                    processes).
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    There are four categories of ecosystem services: <b>supporting</b> the
                    production of all other services and life on Earth, <b>regulating</b> the
                    balance of natural processes, <b>provisioning</b> products from nature, and{" "}
                    <b>cultural</b> non-material benefits we get from nature.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Humans directly benefit from and exist thanks to all ecosystem services, be it
                    nutrient cycling (supporting) and pollination (regulation), which enable food to
                    grow, freshwater for drinking (provisioning), and beautiful landscapes that
                    offer a place to exercise, relax, and be inspired by nature (cultural).
                  </p>
                </RevealLines>
              </li>
            </ul>
          </main>
          <Quiz {...QUIZ_DATA[1]} />
        </div>
      </div>

      <div ref={chapter3Ref} id="dependencies-and-impacts" className="scroll-mt-[53px]">
        <div className="bg-orange-500">
          <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
            <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
              Chapter 03
              <h2 className="text-2xl lg:text-4.5xl">Dependencies and Impacts</h2>
            </div>
            <div
              ref={chapter3VideoRef}
              className="relative top-12 -mt-4 h-[200px] md:h-[300px] lg:top-20 lg:h-[556px] lg:w-[calc(100%_+_theme(spacing.20))]"
            >
              <BackgroundVideo
                src="/assets/key-concepts-video-3.mp4"
                fallbackImage="/assets/key-concepts-video-3-fallback.png"
                sectionInView={chapter3videoInView}
                className="object-bottom"
              />
            </div>
          </div>
        </div>
        <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
          <div className="flex max-w-[860px] flex-col gap-y-6">
            <h3 className="text-2xl lg:text-4xl">
              How do businesses{" "}
              <span className="text-orange-500">impact and depend on natural capital?</span>
            </h3>
            <p className="text-lg lg:text-xl">
              All businesses have natural capital dependencies and impacts.
            </p>
          </div>
          <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <h4 className="text-lg lg:text-xl">Dependencies</h4>
              <p>
                A dependency is a reliance on or use of a natural capital asset or ecosystem service
                to conduct business operations.{" "}
                <Reference id={0} color="orange" className="text-orange-500" />
              </p>
              <p className="bg-black/5 px-4 py-3">
                <b>Example:</b> a company may be dependent on extracting a non-renewable resource
                (e.g., mining of coal), harnessing a renewable resource (e.g., water flow to
                generate electricity), or harvesting a biotic resource (e.g., fisheries) to generate
                income
              </p>
            </div>
            <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
              <h4 className="text-lg lg:text-xl">Impacts</h4>
              <div className="flex flex-col gap-y-4">
                <p>
                  Impacts are changes in the extent or condition of a natural capital asset or
                  ecosystem service resulting from a business&apos;s activities.{" "}
                  <Reference id={0} color="orange" className="text-orange-500" />
                </p>
                <p>Impacts may be:</p>
                <ul className="list-outside list-disc pl-4">
                  <li>
                    <b>Positive:</b> an improvement in condition and/or increase in the extent of a
                    natural capital asset
                  </li>
                  <li>
                    <b>Negative:</b> a deterioration in condition and/or decrease in the extent of a
                    natural capital asset
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-20 lg:py-28">
          <div className="flex flex-col items-start gap-10 pb-10 lg:gap-14 lg:pb-28">
            <h3 className="text-2xl lg:text-4xl">
              There are <span className="text-orange-500">three categories of impacts.</span>
            </h3>
            <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-orange-500 lg:text-5xl">01</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Direct</h4>
                </div>
                <p className="flex-grow lg:min-h-[195px] lg:flex-grow-0">
                  This refers to the direct result of a company’s actions and operations without
                  intermediaries or secondary pathways, such as direct pollution, habitat
                  destruction, resource extraction, and land use change.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b> the release of waste into waterways negatively impacts water
                  quality, reforestation of land to generate carbon credits
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-orange-500 lg:text-5xl">02</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Indirect</h4>
                </div>
                <p className="flex-grow lg:min-h-[195px] lg:flex-grow-0">
                  Indirect impacts are the unintended or secondary consequences of business
                  activities, such as: financially supporting others that directly impact natural
                  capital; downstream and upstream supply chain impacts; perverse consequences of
                  policy that influence natural capital; and investment and infrastructure decisions
                  with natural capital implications.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b>
                  <br />A bank that provides a financial loan to a company that is clearing native
                  forests for grazing land.
                  <br />
                  <br /> Residential development that leads to changes in the condition of adjacent
                  native vegetation.
                  <br />
                  <br />
                  Lower insurance premiums or higher land valuations for cleared farmlands.
                </p>
              </div>
              <div className="flex flex-col gap-y-6 lg:gap-y-10">
                <div>
                  <RevealLines splitChars>
                    <p className="text-4.2xl text-orange-500 lg:text-5xl">03</p>
                  </RevealLines>
                  <h4 className="text-lg lg:text-xl">Cumulative</h4>
                </div>
                <p className="flex-grow lg:min-h-[195px] lg:flex-grow-0">
                  Cumulative impacts are the gradual, incremental effects of multiple organisations,
                  activities, operations, or decisions over time that alter natural capital assets
                  and ecosystem services. These often relate to climate change, habitat
                  fragmentation, unsustainable water use, and land degradation, and result from
                  ongoing contributions rather than isolated events.
                </p>
                <p className="bg-black/5 px-4 py-3">
                  <b>Example:</b>
                  <br />
                  While the carbon emissions of an individual company may be small, the cumulative
                  emissions of many companies are fueling climate change.
                  <br />
                  <br />
                  The habitat loss from one residential development may be small, but the combined
                  impacts of many such developments leads to significant land use change and habitat
                  fragmentation.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 pb-14 lg:mb-28 lg:gap-y-6">
            <p className="text-2xl lg:text-4xl">
              <span className="text-orange-500">
                A company can measure and track their dependency and impact on natural capital
              </span>{" "}
              by using natural capital assessment or natural capital accounting.
            </p>
            <Link href="/resources" className="text-xs font-bold uppercase underline">
              See the resources section for more information on these tools.
            </Link>
          </div>
          <main className="flex flex-col justify-start gap-y-4 border-t-2 border-t-orange-500 pb-14 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:pb-28">
            <h3 className="flex-shrink-0 text-lg text-orange-500 lg:w-[350px] lg:text-xl">
              Key insights about dependencies and impacts
            </h3>
            <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Businesses <b>depend</b> on natural capital assets and ecosystem services to
                    operate effectively, such as extracting non-renewable resources or utilising
                    renewable resources like water for electricity generation.
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Businesses influence natural capital assets and ecosystem services through their
                    activities, having <b>positive and negative impacts.</b> Impacts can be direct
                    (e.g., waste and pollution from production), indirect (e.g., deforestation
                    linked to scope 3 supply chains), and cumulative (e.g., numerous industries and
                    activities contributing to global climate change over time).
                  </p>
                </RevealLines>
              </li>
              <li className="pt-5">
                <RevealLines>
                  <p className="max-w-[600px]">
                    Many businesses aim to reduce their negative impacts by achieving net-zero
                    emissions, avoiding deforestation, and eliminating plastic use. Others go
                    further by restoring habitats, practising sustainable agriculture, and adopting
                    circular economy principles.
                  </p>
                </RevealLines>
              </li>
            </ul>
          </main>
          <Quiz {...QUIZ_DATA[2]} />
        </div>
      </div>

      <div className="bg-black bg-[url(/assets/key-concepts-background.png)] bg-cover bg-bottom bg-no-repeat text-white">
        <div className="mx-auto max-w-7xl p-6 py-10 lg:p-20">
          <main className="flex flex-col items-start gap-y-6 lg:gap-y-10">
            <h2 className="flex items-center gap-x-5 text-2xl xl:text-4xl">
              Download Key Concepts
            </h2>
            <p className="max-w-[730px] text-lg lg:text-xl">
              If you prefer learning from PDF or print formats, where you can annotate and take
              notes, you can download the PDF below. It includes all the theoretical principles of
              natural capital.
            </p>
            <Button asChild variant="outline-white" size="lg">
              <Link href="/assets/natural-capital-booklet.pdf" download>
                Download PDF
              </Link>
            </Button>
          </main>
        </div>
      </div>
      <div className="bg-orange-500 py-10 lg:py-14">
        <main className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 p-6 text-center">
          <p className="max-w-[860px] text-2xl lg:text-4xl">
            Learn more about dependencies and impacts in the industry use cases chapter.
          </p>
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

export default KeyConceptsPage;
