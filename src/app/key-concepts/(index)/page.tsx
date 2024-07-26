"use client";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import DayInLifeCTA from "@/components/day-in-life-cta";
import Footer from "@/components/footer";
import Header from "@/components/header";
import MountainCoverImage from "@/components/mountain-cover-image";
import SeaCoverImage from "@/components/sea-cover-image";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Lightbulb from "@/icons/lightbulb.svg";
import ThinArrow from "@/icons/thin-arrow.svg";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { FC, useState } from "react";

const KeyConceptsPage: FC = () => {
  const [chapter1Tab, setChapter1Tab] = useState("environmental");
  const [chapter2Tab, setChapter2Tab] = useState("abiotic");
  const [chapter3Tab, setChapter3Tab] = useState("dependencies");

  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-7xl flex-col gap-y-6 p-6 pb-10 pt-10 lg:flex-row lg:gap-x-10 lg:px-20 lg:pb-20 lg:pt-36 xl:pt-64">
        <h1 className="flex-shrink-0 text-[52px] font-medium leading-none lg:w-[calc(50%_-_20px)] lg:text-[62px]">
          What is <span className="xl:whitespace-nowrap">Natural Capital?</span>
        </h1>
        <div className="flex flex-col gap-y-4">
          <p>
            Natural capital refers to all biotic (living) and abiotic (non-living) natural resources
            present in a defined area that produce flows of services that yield value to society.
            Natural capital is also sometimes referred to as natural capital assets or stocks.
          </p>
          <p>
            <b>Biotic natural resources</b>
            <br />
            Biotic natural resources are those derived from living organisms, such as plants,
            animals, fungi, bacteria and viruses.
          </p>
          <p>
            <b>Abiotic natural resources</b>
            <br />
            Abiotic natural resources are those derived from non-living sources and include
            geological resources (minerals, soil, fossil fuels), water and physical processes such
            as solar radiation, wind and tides.
          </p>
        </div>
      </div>
      <div
        id="assets"
        className={cn(
          "lg:bg-[length:100%,auto 100%] bg-green-500 lg:bg-[100%] lg:bg-no-repeat xl:bg-[length:100%,50%]",
          {
            "lg:bg-[linear-gradient(to_right,theme(colors.green.500)_50%,transparent_50%),url(/assets/key-concepts-background.png)]":
              chapter1Tab === "environmental",
            "lg:bg-[linear-gradient(to_right,theme(colors.green.500)_50%,transparent_50%),url(/assets/key-concepts-background-2.png)]":
              chapter1Tab !== "environmental",
          },
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:flex-row lg:px-20">
          <div className="shrink-0 grow-0 py-10 lg:w-1/2 lg:py-14 lg:pr-14">
            <div className="mb-6 flex flex-col gap-y-6 lg:mb-32 lg:gap-y-5">
              <h2 className="flex items-center gap-x-4">
                <span>Chapter 01</span>
                <span className="h-px w-6 shrink-0 bg-black" />
                <span>Assets and Resources</span>
              </h2>
              <p className="text-2xl lg:text-4xl">What are natural capital assets and resources?</p>
              <p>
                Abiotic factors like climate and geology interact with biotic factors such as
                vegetation and animals to shape ecosystems, define their physical context, and
                influence the quantity and quality of natural capital assets. There are two types of
                natural capital assets: environmental assets and ecosystem assets.
              </p>
            </div>
            <Tabs value={chapter1Tab} onValueChange={setChapter1Tab}>
              <TabsList className="mb-6 lg:mb-5">
                <TabsTrigger value="environmental">Environmental</TabsTrigger>
                <TabsTrigger value="ecosystem">Ecosystem</TabsTrigger>
              </TabsList>
              <TabsContent
                value="environmental"
                className="flex flex-col gap-y-4 data-[state=active]:min-h-[140px]"
              >
                <p>
                  Environmental assets are the components that make up the environment. This
                  includes both biotic and abiotic natural resources, which contribute to an
                  ecosystem&apos;s biological diversity and vitality (biotic) and provide the
                  foundational physical and chemical components necessary for ecosystem functioning
                  (abiotic).
                </p>
              </TabsContent>
              <TabsContent
                value="ecosystem"
                className="flex flex-col gap-y-4 data-[state=active]:min-h-[140px]"
              >
                <p>
                  Ecosystem assets are formed from the interaction of individual environmental
                  assets (i.e., biotic and abiotic natural resources).
                </p>
                <p>
                  They have properties (composition, functions, and form) that result from the
                  interaction of environmental assets. This gives ecosystems unique characteristics
                  and determines the flow of ecosystem services.
                </p>
              </TabsContent>
            </Tabs>
          </div>
          <div
            className={cn(
              "-mx-6 flex aspect-[9/10] flex-col justify-end bg-cover bg-center bg-no-repeat px-6 pb-8 sm:aspect-[5/3] lg:-mx-0 lg:aspect-auto lg:bg-none lg:pl-8 lg:pr-0",
              {
                "bg-[url(/assets/key-concepts-background.png)]": chapter1Tab === "environmental",
                "bg-[url(/assets/key-concepts-background-2.png)]": chapter1Tab !== "environmental",
              },
            )}
          >
            {chapter1Tab === "environmental" && (
              <p className="flex flex-row gap-x-4 rounded-[20px] bg-white/20 p-4 text-white backdrop-blur-[10px] lg:py-3">
                <Lightbulb className="shrink-0" />
                <span className="relative top-0.5">
                  Example: Individual plant or animal species (biotic) and water, minerals, and soil
                  (abiotic)
                </span>
              </p>
            )}
            {chapter1Tab !== "environmental" && (
              <p className="flex flex-row gap-x-4 rounded-[20px] bg-white/20 p-4 text-white backdrop-blur-[10px] lg:py-3">
                <Lightbulb className="shrink-0" />
                <span className="relative top-0.5">
                  Example: grasslands, forests, woodlands, wetlands, mangroves, and peatlands
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:flex-row lg:px-20">
        <p className="py-24 text-center lg:py-80">Content coming soon</p>
      </div>
      <div
        id="flows-of-services"
        className={cn(
          "lg:bg-[length:100%,auto 100%] bg-blue-500 lg:bg-[100%] lg:bg-no-repeat xl:bg-[length:100%,50%]",
          {
            "lg:bg-[linear-gradient(to_right,theme(colors.blue.500)_50%,transparent_50%),url(/assets/key-concepts-background-3.png)]":
              chapter2Tab === "abiotic",
            "lg:bg-[linear-gradient(to_right,theme(colors.blue.500)_50%,transparent_50%),url(/assets/key-concepts-background-4.png)]":
              chapter2Tab !== "abiotic",
          },
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:flex-row lg:px-20">
          <div className="shrink-0 grow-0 py-10 lg:w-1/2 lg:py-14 lg:pr-14">
            <div className="mb-6 flex flex-col gap-y-6 lg:mb-32 lg:gap-y-5">
              <h2 className="flex items-center gap-x-4">
                <span>Chapter 02</span>
                <span className="h-px w-6 shrink-0 bg-black" />
                <span>Flows of Services</span>
              </h2>
              <p className="text-2xl lg:text-4xl">
                What are the benefits that flow from natural capital assets?
              </p>
              <p>
                Natural capital assets produce flows of services that have value to businesses and
                society. These can be of two types:
              </p>
            </div>
            <Tabs value={chapter2Tab} onValueChange={setChapter2Tab}>
              <TabsList className="mb-6 lg:mb-5">
                <TabsTrigger value="abiotic">Abiotic Services</TabsTrigger>
                <TabsTrigger value="ecosystem-services">Ecosystem Services</TabsTrigger>
              </TabsList>
              <TabsContent
                value="abiotic"
                className="flex flex-col gap-y-4 data-[state=active]:min-h-[124px]"
              >
                <p>
                  Abiotic services are benefits that arise from abiotic natural resources and
                  physical processes, including fundamental geological processes, solar radiation
                  and the Earth’s rotation and gravitational pull.
                </p>
              </TabsContent>
              <TabsContent
                value="ecosystem-services"
                className="flex flex-col gap-y-4 data-[state=active]:min-h-[124px]"
              >
                <p>
                  Ecosystem services are a key concept in natural capital. Ecosystem services are
                  products or processes generated by ecosystems that have value to society. They can
                  be raw materials or produce extracted directly from ecosystem assets, or the
                  outcome of ecological processes that generate a resource or service.
                </p>
              </TabsContent>
            </Tabs>
          </div>
          <div
            className={cn(
              "-mx-6 flex aspect-[9/10] flex-col justify-end bg-cover bg-center bg-no-repeat px-6 pb-8 sm:aspect-[5/3] lg:-mx-0 lg:aspect-auto lg:bg-none lg:pl-8 lg:pr-0",
              {
                "bg-[url(/assets/key-concepts-background-3.png)]": chapter2Tab === "abiotic",
                "bg-[url(/assets/key-concepts-background-4.png)]": chapter2Tab !== "abiotic",
              },
            )}
          >
            {chapter2Tab === "abiotic" && (
              <p className="flex flex-row gap-x-4 rounded-[20px] bg-white/20 p-4 text-white backdrop-blur-[10px] lg:py-3">
                <Lightbulb className="shrink-0" />
                <span className="relative top-0.5">
                  Example:  the supply of minerals (including metals) and fossil fuels, as well as
                  geothermal heat, wind, tides, sunlight and hydro-power.
                </span>
              </p>
            )}
            {chapter2Tab !== "abiotic" && (
              <p className="flex flex-row gap-x-4 rounded-[20px] bg-white/20 p-4 text-white backdrop-blur-[10px] lg:py-3">
                <Lightbulb className="shrink-0" />
                <span className="relative top-0.5">
                  Example: timber production, food and fibre, pollination and pest control, water
                  regulation and clean air, climate regulation, and recreation and spiritual
                  fulfilment
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-20 lg:py-20">
        <div className="flex flex-col items-start gap-10 pb-10 lg:gap-20 lg:pb-20">
          <div className="flex flex-col gap-6 self-start lg:max-w-[799px]">
            <div className="text-lg text-blue-500">Flows of Services</div>
            <div className="text-2xl lg:text-[62px] lg:leading-none">
              The four categories of ecosystem services.
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16">
            <div className="hidden flex-shrink-0 lg:block lg:w-[220px]" />
            <div className="flex flex-grow flex-col gap-6 lg:gap-20">
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-blue-500 lg:text-5xl">01</div>
                <div className="text-2xl lg:text-4xl">Supporting services</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    Supporting services support all other ecosystem services. In practical terms,
                    supporting services are difficult to measure directly, so tend to be assessed by
                    using proxy measures such as the extent of ecosystems and the maintenance of
                    genetic diversity among populations and communities.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: photosynthesis, nutrient cycling, soil formation, and water cycling
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-blue-500 lg:text-5xl">02</div>
                <div className="text-2xl lg:text-4xl">Regulating</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    These are the services produced as a by-product of ecosystem processes. They do
                    not produce a tangible product directly but they facilitate many of the
                    provisioning services that do produce products, or moderate natural phenomena
                    that support life.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: climate regulation, flood mitigation, erosion control, water
                      purification and pollination.
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-blue-500 lg:text-5xl">03</div>
                <div className="text-2xl lg:text-4xl">Provisioning</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    These are ecosystem processes that produce any type of product that benefits
                    people and can be extracted from nature.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: all food, raw materials (timber, minerals, gas, oil), fibres,
                      medicines, drinking water
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-blue-500 lg:text-5xl">04</div>
                <div className="text-2xl lg:text-4xl">Cultural</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    These are non-material benefits that contribute to the cultural and spiritual
                    advancement of people.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: recreational services and tourism, mental and physical health and
                      well-being derived from connecting with nature, creative inspiration,
                      aesthetic amenity, spiritual renewal
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="-mx-6 flex flex-col justify-start gap-y-6 border-t border-dashed border-t-black p-6 lg:-mx-20 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
          <p className="hidden flex-shrink-0 text-blue-500 lg:block lg:w-[220px]">
            Flows of Services
          </p>
          <div className="flex flex-grow flex-col gap-10">
            <div className="flex items-center gap-3">
              <h2>Key insights about this chapter</h2>
              <div className="grow border-t border-t-grey-500"></div>
            </div>
            <ol className="flex max-w-[540px] list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
              <li>
                Natural capital assets produce two types of services: abiotic services (geological
                and physical processes) and ecosystem services (ecological processes).
              </li>
              <li>
                There are four categories of ecosystem services: supporting the production of all
                other services and life on Earth, regulating the balance of natural processes,
                provisioning products from nature, and cultural non-material benefits we get from
                nature.
              </li>
              <li>
                Humans directly benefit and exist thanks to all ecosystem services, be it nutrient
                cycling (supporting) and pollination (regulation) enabling food to grow, to
                freshwater for drinking (provisioning) and beautiful landscapes offering a place to
                exercise, relax and be inspired by nature (cultural).
              </li>
            </ol>
          </div>
        </main>
      </div>
      <SeaCoverImage />
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 lg:flex-row lg:px-20">
          <p className="py-24 text-center lg:py-80">Content coming soon</p>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-20 lg:py-24">
        <p className="mb-10 text-center text-2xl lg:mb-20 lg:text-[62px] lg:leading-none">
          Understanding the role of <span className="whitespace-nowrap">Natural Capital...</span>
        </p>
        <div className="grid grid-rows-2 gap-6 sm:grid-cols-2 sm:grid-rows-none lg:gap-x-11">
          <Link
            href="/key-concepts/natural-capital-and-climate-change"
            className="grid grid-rows-2"
          >
            <div className="flex items-end gap-x-8 bg-turquoise p-6 lg:h-full lg:p-11 lg:pt-20">
              <div className="h-full">
                <p>Insights</p>
                <p className="text-2xl lg:text-4xl">Natural Capital and Climate Change</p>
              </div>
              <div className="hidden h-[76px] w-[76px] shrink-0 rounded-full border border-black lg:flex lg:items-center lg:justify-center">
                <ThinArrow className="h-6 w-6" />
              </div>
            </div>
            <div className="relative">
              <Image
                src="/assets/key-concepts-illustration.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </Link>
          <Link href="/key-concepts/natural-capital-and-biodiversity" className="grid grid-rows-2">
            <div className="flex items-end gap-x-8 bg-pink p-6 lg:h-full lg:p-11 lg:pt-20">
              <div className="h-full">
                <p>Insights</p>
                <p className="text-2xl lg:text-4xl">Natural Capital and Biodiversity</p>
              </div>
              <div className="hidden h-[76px] w-[76px] shrink-0 rounded-full border border-black lg:flex lg:items-center lg:justify-center">
                <ThinArrow className="h-6 w-6" />
              </div>
            </div>

            <div className="relative">
              <Image
                src="/assets/key-concepts-illustration-2.png"
                alt=""
                fill
                className="object-cover"
              />
            </div>
          </Link>
        </div>
      </div>
      <div
        id="dependencies-and-impacts"
        className={cn(
          "lg:bg-[length:100%,auto 100%] bg-orange-500 lg:bg-[100%] lg:bg-no-repeat xl:bg-[length:100%,50%]",
          {
            "lg:bg-[linear-gradient(to_right,theme(colors.orange.500)_50%,transparent_50%),url(/assets/key-concepts-background-5.png)]":
              chapter3Tab === "dependencies",
            "lg:bg-[linear-gradient(to_right,theme(colors.orange.500)_50%,transparent_50%),url(/assets/key-concepts-background-6.png)]":
              chapter3Tab !== "dependencies",
          },
        )}
      >
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:flex-row lg:px-20">
          <div className="shrink-0 grow-0 py-10 lg:w-1/2 lg:py-14 lg:pr-14">
            <div className="mb-6 flex flex-col gap-y-6 lg:mb-32 lg:gap-y-5">
              <h2 className="flex items-center gap-x-4">
                <span>Chapter 03</span>
                <span className="h-px w-6 shrink-0 bg-black" />
                <span>Dependencies and Impacts</span>
              </h2>
              <p className="text-2xl lg:text-4xl">
                How do businesses impact and depend on natural capital?
              </p>
              <p>All businesses have natural capital dependencies and impacts.</p>
            </div>
            <Tabs value={chapter3Tab} onValueChange={setChapter3Tab}>
              <TabsList className="mb-6 lg:mb-5">
                <TabsTrigger value="dependencies">Dependencies</TabsTrigger>
                <TabsTrigger value="impacts">Impacts</TabsTrigger>
              </TabsList>
              <TabsContent
                value="dependencies"
                className="flex flex-col gap-y-4 data-[state=active]:min-h-[140px]"
              >
                <p>
                  A dependency is a reliance on, or use of, a natural capital asset or ecosystem
                  service to conduct the operations of the business.
                </p>
              </TabsContent>
              <TabsContent
                value="impacts"
                className="flex flex-col gap-y-4 data-[state=active]:min-h-[140px]"
              >
                <p>
                  Impacts are changes in the extent or condition of a natural capital asset or
                  ecosystem service resulting from the activities of a business. Impacts may be:
                </p>
                <ul className="list-inside list-disc">
                  <li>
                    <b>Positive:</b> an improvement in condition and/or increase in amount
                  </li>
                  <li>
                    <b>Negative:</b> a deterioration in condition and/or decrease in amount.
                  </li>
                </ul>
              </TabsContent>
            </Tabs>
          </div>
          <div
            className={cn(
              "-mx-6 flex aspect-[9/10] flex-col justify-end bg-cover bg-center bg-no-repeat px-6 pb-8 sm:aspect-[5/3] lg:-mx-0 lg:aspect-auto lg:bg-none lg:pl-8 lg:pr-0",
              {
                "bg-[url(/assets/key-concepts-background-5.png)]": chapter3Tab === "dependencies",
                "bg-[url(/assets/key-concepts-background-6.png)]": chapter3Tab !== "dependencies",
              },
            )}
          >
            {chapter3Tab === "dependencies" && (
              <p className="flex flex-row gap-x-4 rounded-[20px] bg-white/20 p-4 text-white backdrop-blur-[10px] lg:py-3">
                <Lightbulb className="shrink-0" />
                <span className="relative top-0.5">
                  Example: a company may be dependent on extracting a non-renewable resource (e.g.,
                  mining), harnessing a renewable resource (e.g., water flow to generate
                  electricity), or harvesting a biotic resource (e.g., fisheries) in order to
                  generate income.
                </span>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-20 lg:py-20">
        <div className="flex flex-col items-start gap-10 pb-10 lg:gap-20 lg:pb-20">
          <div className="flex flex-col gap-6 self-start lg:max-w-[799px]">
            <div className="text-lg text-orange-500">Dependencies and Impacts</div>
            <div className="text-2xl lg:text-[62px] lg:leading-none">
              There are three categories of impacts.
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16">
            <div className="hidden flex-shrink-0 lg:block lg:w-[220px]" />
            <div className="flex flex-grow flex-col gap-6 lg:gap-20">
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-orange-500 lg:text-5xl">01</div>
                <div className="text-2xl lg:text-4xl">Direct</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    This refers to the direct result of a company’s actions and operations, without
                    intermediaries or secondary pathways. Such as direct pollution, habitat
                    destruction, resource extraction and land use change.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: the release of waste into waterways negatively impacts water quality
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-orange-500 lg:text-5xl">02</div>
                <div className="text-2xl lg:text-4xl">Indirect</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    Indirect impacts from business on natural capital are unintended or secondary
                    consequences arising through pathways such as financial support, supply chains,
                    policy influences, and market dynamics, rather than direct actions.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: a company that provides financial credit to another company that is
                      clearing forests for grazing land and/or residential development leading to
                      changes in the condition of native vegetation
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-[52px] leading-[48px] text-orange-500 lg:text-5xl">03</div>
                <div className="text-2xl lg:text-4xl">Cumulative</div>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <p>
                    The gradual, collective effects of multiple activities, operations, or decisions
                    over time that alter natural capital assets and ecosystem services. Cumulative
                    impacts include climate change, habitat fragmentation, unsustainable water use,
                    and land degradation, resulting from ongoing contributions rather than isolated
                    events.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: Corporations are contributing to carbon emissions that are driving
                      climate change.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <main className="-mx-6 flex flex-col justify-start gap-y-6 border-t border-dashed border-t-black p-6 lg:-mx-20 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
          <p className="hidden flex-shrink-0 text-orange-500 lg:block lg:w-[220px]">
            Dependencies and Impacts
          </p>
          <div className="flex flex-grow flex-col gap-10">
            <div className="flex items-center gap-3">
              <h2>Key insights about this chapter</h2>
              <div className="grow border-t border-t-grey-500"></div>
            </div>
            <ol className="flex max-w-[540px] list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
              <li>
                Businesses depend on natural capital assets and ecosystem services to operate
                effectively, such as extracting non-renewable resources or utilizing renewable
                resources like water for electricity generation.
              </li>
              <li>
                Businesses influence natural capital assets and ecosystem services through their
                activities, having positive and negative impacts. Impacts can be direct (e.g., waste
                pollution from production), indirect (e.g., deforestation linked to scope 3 supply
                chains), and cumulative (e.g., numerous industries and activities contributing to
                global climate change over time).
              </li>
              <li>
                Many businesses aim to reduce their negative impacts by achieving net-zero
                emissions, avoiding deforestation, and eliminating plastic use. Others go further by
                restoring habitats, practicing sustainable agriculture, and adopting circular
                economy principles.
              </li>
            </ol>
          </div>
        </main>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-20 lg:pb-24">
        <DayInLifeCTA />
      </div>
      <div className="bg-orange-500 py-10 lg:py-14">
        <main className="mx-auto flex max-w-7xl flex-col items-center gap-y-10 p-6 text-center lg:gap-y-16">
          <h2 className="max-w-[1120px] text-2xl lg:text-[62px] lg:leading-[68px]">
            Learn more about dependencies and impacts in the industry use cases chapter
          </h2>
          <Button variant="outline" asChild>
            <Link href="/industry-use-cases">
              <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
            </Link>
          </Button>
        </main>
      </div>
      <MountainCoverImage />
      <Footer />
    </>
  );
};

export default KeyConceptsPage;
