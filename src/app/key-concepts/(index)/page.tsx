"use client";

import dynamic from "next/dynamic";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Pebble from "@/components/key-concepts/pebble";
import { Button } from "@/components/ui/button";
import useMediaQuery from "@/hooks/use-media-query";
import Lightbulb from "@/icons/lightbulb.svg";
import ArrowSlide from "@/icons/arrow-slide.svg";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FC, Fragment, useCallback, useRef, useState } from "react";
import Quiz from "@/components/quiz";
import type { QuizData } from "@/components/quiz";
import NaturalCapitalChart from "./natural-capital-chart";
import InfiniteSlideDownAnimation from "@/components/animations/infinite-slide-down";

// FadeInOnScroll and RevealLines components use window object, which is not available in SSR
const RevealLines = dynamic(() => import("@/components/animations/reveal-lines"), {
  ssr: false,
});
// const FadeInOnScroll = dynamic(() => import("@/components/animations/fade-in-on-scroll"), {
//   ssr: false,
// });

const QUIZ_DATA: QuizData[] = [
  {
    key: "quiz-chapter-1",
    colorClass: "lg:text-green-500",
    color: "green",
    chapterName: "Assets and Resources",
    questions: [
      {
        title: (
          <>
            Which of the following is a{" "}
            <span className="text-green-500">non-renewable resource?</span>
          </>
        ),
        options: ["Fossil fuels", "Water", "Kelp"],
        answer: 0,
      },
      {
        title: (
          <>
            <span className="text-green-500">Ecosystem assets</span> are formed through the
            interaction of:
          </>
        ),
        options: ["Different Species", "Climate & Geology", "Environmental Assets"],
        answer: 2,
      },
      {
        title: (
          <>
            What are two main categories of{" "}
            <span className="text-green-500">natural capital assets?</span>
          </>
        ),
        options: ["Biotic & Abiotic", "Environmental & Ecosystem", "Cultivated & Recoverable"],
        answer: 1,
      },
    ],
  },
  {
    key: "quiz-chapter-2",
    colorClass: "lg:text-blue-450",
    color: "blue",
    chapterName: "Flows of services",
    questions: [
      {
        title: (
          <>
            <span className="text-blue-450">Supporting and ecosystem services </span>
            relationship is:
          </>
        ),
        options: ["Independent", "Interdependent", "Comparative"],
        answer: 1,
      },
      {
        title: (
          <>
            Which <span className="text-blue-450">type of service </span> provides food, water, and
            timber?
          </>
        ),
        options: ["Regulating", "Ecosystem", "Abiotic"],
        answer: 1,
      },
      {
        title: (
          <>
            <span className="text-blue-450">Minerals and fossil fuels</span> are benefits derived
            from:
          </>
        ),
        options: ["Abiotic Services", "Ecosystem Services", "Supporting Services"],
        answer: 0,
      },
    ],
  },
  {
    key: "quiz-chapter-3",
    colorClass: "lg:text-orange-500",
    color: "orange",
    chapterName: "Dependencies and Impacts",
    questions: [
      {
        title: (
          <>
            An iron extracting company <span className="text-orange-500">has a dependency on:</span>
          </>
        ),
        options: ["Renewable Resources", "Not-Renewable Resources", "Services"],
        answer: 1,
      },
      {
        title: (
          <>
            How can business&apos;s actions{" "}
            <span className="text-orange-500">affect the environment?</span>
          </>
        ),
        options: [
          "Directly through pollution",
          "Indirectly through supply chains",
          "Both directly and indirectly",
        ],
        answer: 2,
      },
      {
        title: (
          <>
            Climate change is an example of{" "}
            <span className="text-orange-500">which type of impact?</span>
          </>
        ),
        options: ["Direct", "Indirect", "Cumulative"],
        answer: 2,
      },
    ],
  },
];

const KeyConceptsPage: FC = () => {
  const [activeSectionMobile, setActiveSectionMobile] = useState(0);

  const isMobile = useMediaQuery("not (min-width: 1024px)", false);

  const scrollSectionRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
  });

  const sectionsLinkStyle = [
    {
      textDecoration: useTransform(scrollYProgress, (value) =>
        (isMobile && activeSectionMobile === 0) || (!isMobile && value < 4 / 13)
          ? "underline"
          : "none",
      ),
      fontWeight: useTransform(scrollYProgress, (value) =>
        (isMobile && activeSectionMobile === 0) || (!isMobile && value < 4 / 13) ? 700 : 450,
      ),
    },
    {
      textDecoration: useTransform(scrollYProgress, (value) =>
        (isMobile && activeSectionMobile === 1) || (!isMobile && value >= 4 / 13 && value < 9 / 13)
          ? "underline"
          : "none",
      ),
      fontWeight: useTransform(scrollYProgress, (value) =>
        (isMobile && activeSectionMobile === 1) || (!isMobile && value >= 4 / 13 && value < 9 / 13)
          ? 700
          : 450,
      ),
    },
    {
      textDecoration: useTransform(scrollYProgress, (value) =>
        (isMobile && activeSectionMobile === 2) || (!isMobile && value >= 9 / 13)
          ? "underline"
          : "none",
      ),
      fontWeight: useTransform(scrollYProgress, (value) =>
        (isMobile && activeSectionMobile === 2) || (!isMobile && value >= 9 / 13) ? 700 : 450,
      ),
    },
  ];

  const sectionsStyle = [
    {
      opacity: useTransform(scrollYProgress, [3 / 13, 4 / 13], [1, 0]),
      display: useTransform(scrollYProgress, (value) => (value < 4 / 13 ? "flex" : "none")),
    },
    {
      opacity: useTransform(scrollYProgress, [4 / 13, 5 / 13, 8 / 13, 9 / 13], [0, 1, 1, 0]),
      display: useTransform(scrollYProgress, (value) =>
        value >= 4 / 13 && value <= 9 / 13 ? "flex" : "none",
      ),
    },
    {
      opacity: useTransform(scrollYProgress, [9 / 13, 10 / 13, 13 / 13], [0, 1, 1]),
      display: useTransform(scrollYProgress, (value) => (value >= 9 / 13 ? "flex" : "none")),
    },
  ];

  const SectionsContainer = isMobile ? Fragment : AnimatePresence;

  const setActiveSection = useCallback(
    (index: number) => {
      if (isMobile) {
        setActiveSectionMobile(index);
        return;
      }

      // If `top` is positive, the top of the container is below the top of the screen. If `top` is
      // negative, the user has already entered the scrolling section.
      const { top, height } = scrollSectionRef.current?.getBoundingClientRect() ?? {
        top: 0,
        height: 0,
      };

      const sectionsYStart = [0, 5 / 13, 10 / 13];

      document.documentElement.scrollBy({
        top: top + height * sectionsYStart[index],
        behavior: "smooth",
      });
    },
    [scrollSectionRef, isMobile],
  );

  return (
    <>
      <Header
        logo="color"
        // anchors={
        //   <FadeInOnScroll>
        //     <nav className="hidden gap-12 lg:flex">
        //       <Link href="/key-concepts/#assets-and-resources">Assets and Resources</Link>
        //       <Link href="/key-concepts/#flows-of-services">Flows of Services</Link>
        //       <Link href="/key-concepts/#dependencies-and-impacts">Dependencies and Impacts</Link>
        //     </nav>
        //   </FadeInOnScroll>
        // }
      />
      <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pb-12 pt-10 lg:mt-14 lg:gap-y-10 lg:px-20 lg:pb-16 xl:mt-40">
        <h1 className="text-4.2xl font-medium lg:text-5xl">What is Natural Capital?</h1>
        <div className="flex max-w-[827px] flex-col gap-y-4">
          <p className="max-w-[827px] lg:text-xl">
            Natural capital refers to all biotic (living) and abiotic (non-living) natural resources
            present in a defined area that produce flows of services that yield value to society.
            Natural capital is also sometimes referred to as natural capital assets or stocks.
          </p>
          <div className="mt-6 flex max-w-[730px] flex-col gap-y-6 lg:mt-10 lg:grid lg:grid-cols-2 lg:gap-x-10">
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
      <div id="assets" className="scroll-mt-[92px] bg-green-500">
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
          <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
            Chapter 01
            <h2 className="text-2xl lg:text-4.5xl">Assets and Resources</h2>
          </div>
          <Image
            src="/assets/key-concepts-background.png"
            alt=""
            width={1180}
            height={547}
            className="relative top-12 -mt-4 h-auto w-[calc(100%_+_theme(spacing.6))] max-w-none lg:top-20 lg:w-[calc(100%_+_theme(spacing.20))]"
          />
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
        <div className="flex max-w-[860px] flex-col gap-y-6">
          <h3 className="text-2xl lg:text-4xl">
            What are <span className="text-green-500">natural capital assets and resources?</span>
          </h3>
          <p className="lg:text-xl">
            Abiotic factors like climate and geology interact with biotic factors such as vegetation
            and animals to shape ecosystems, define their physical context, and influence the
            quantity and quality of natural capital assets. There are two types of natural capital
            assets: environmental assets and ecosystem assets.
          </p>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
          <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
            <p className="text-xl">Environmental</p>
            <p>
              Environmental assets are the components that make up the environment. This includes
              both biotic and abiotic natural resources, which contribute to an ecosystem&apos;s
              biological diversity and vitality (biotic) and provide the foundational physical and
              chemical components necessary for ecosystem functioning (abiotic).
            </p>
          </div>
          <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
            <p className="text-xl">Ecosystem</p>
            <p>
              Ecosystem assets are formed from the interaction of individual environmental assets
              (i.e., biotic and abiotic natural resources).
              <br />
              <br />
              They have properties (composition, functions, and form) that result from the
              interaction of environmental assets. This gives ecosystems unique characteristics and
              determines the flow of ecosystem services.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-20 lg:py-20">
        <div className="flex flex-col items-start gap-10 pb-10 lg:gap-20 lg:pb-20">
          <div className="flex flex-col gap-6 self-start lg:max-w-[690px]">
            <div className="text-lg text-green-500">Assets and Resources</div>
            <div className="text-2xl lg:text-[62px] lg:leading-none">
              The three categories of natural resources.
            </div>
            <p>
              Natural capital assets and natural resources are related but distinct. Natural capital
              assets encompass the broader elements of nature that provide value through ecosystem
              services. These assets include natural resources such as water, minerals, and forests,
              which humans utilize for economic gain or other purposes.
            </p>
          </div>
          <div
            className="relative flex w-full flex-col justify-start gap-y-6 lg:h-[450vh] lg:flex-row lg:items-start lg:justify-between lg:gap-x-16"
            ref={scrollSectionRef}
          >
            <ul className="flex flex-shrink-0 flex-row gap-4 lg:sticky lg:top-24 lg:h-[calc(100vh_-_80px)] lg:w-[220px] lg:flex-col">
              <motion.li style={{ ...sectionsLinkStyle[0] }}>
                <Button
                  type="button"
                  variant="link"
                  size="auto"
                  className="[text-decoration:inherit]"
                  onClick={() => setActiveSection(0)}
                >
                  Renewable
                </Button>
              </motion.li>
              <motion.li style={{ ...sectionsLinkStyle[1] }}>
                <Button
                  type="button"
                  variant="link"
                  size="auto"
                  className="[text-decoration:inherit]"
                  onClick={() => setActiveSection(1)}
                >
                  Cultivated
                </Button>
              </motion.li>
              <motion.li style={{ ...sectionsLinkStyle[2] }}>
                <Button
                  type="button"
                  variant="link"
                  size="auto"
                  className="[text-decoration:inherit]"
                  onClick={() => setActiveSection(2)}
                >
                  Non-renewable
                </Button>
              </motion.li>
            </ul>
            <div className="relative flex flex-grow flex-col gap-6 pt-36 lg:sticky lg:top-24 lg:h-[calc(100vh_-_80px)] lg:gap-20 lg:pt-0">
              {!isMobile && (
                <div className="absolute right-0 top-0 lg:-right-32">
                  <Pebble index={1} scrollYProgress={scrollYProgress} />
                  <Pebble index={2} scrollYProgress={scrollYProgress} />
                  <Pebble index={3} scrollYProgress={scrollYProgress} />
                  <Pebble index={4} scrollYProgress={scrollYProgress} />
                </div>
              )}
              {isMobile && (
                <div className="absolute -right-10 -top-3 sm:right-0 sm:top-0 sm:scale-125 md:right-10 md:scale-150">
                  <motion.div
                    className="absolute right-0 top-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSectionMobile === 0 ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  >
                    <Image
                      src="/assets/key-concepts-pebbles-1.png"
                      alt=""
                      width={185}
                      height={194}
                      sizes="(max-width: 640) 185px, (max-width: 768px) 231px, (max-width: 1024px) 278px, 185px"
                      className="max-w-none"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute right-0 top-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSectionMobile === 1 ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  >
                    <Image
                      src="/assets/key-concepts-pebbles-2.png"
                      alt=""
                      width={174}
                      height={210}
                      sizes="(max-width: 640) 174px, (max-width: 768px) 218px, (max-width: 1024px) 261px, 174px"
                      className="max-w-none"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute right-0 top-0"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: activeSectionMobile === 2 ? 1 : 0 }}
                    transition={{ duration: 0.3, ease: "linear" }}
                  >
                    <Image
                      src="/assets/key-concepts-pebbles-3.png"
                      alt=""
                      width={114}
                      height={202}
                      sizes="(max-width: 640) 114px, (max-width: 768px) 143px, (max-width: 1024px) 171px, 114px"
                      className="max-w-none"
                    />
                  </motion.div>
                </div>
              )}
              <SectionsContainer>
                <motion.div
                  key="renewable"
                  className={cn("relative z-10 flex max-w-[390px] flex-col gap-y-6 lg:gap-y-5", {
                    "pointer-events-none": isMobile && activeSectionMobile !== 0,
                  })}
                  aria-hidden={isMobile && activeSectionMobile !== 0}
                  transition={{ duration: 0.3, ease: "linear" }}
                  {...(isMobile
                    ? {
                        initial: { opacity: 0 },
                        animate: activeSectionMobile === 0 ? { opacity: 1 } : undefined,
                      }
                    : { style: sectionsStyle[0] })}
                >
                  <p id="renewable" className="text-2xl text-green-500 lg:text-4xl">
                    Renewable
                  </p>
                  <p>
                    <b>Inexhaustible</b>
                    <br />
                    Physical resources that are restored by natural processes at a rate equal to or
                    faster than they are used.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: solar radiation, wind, tidal energy, water flow, geothermal energy
                    </span>
                  </p>
                  <p>
                    <b>Exhaustible</b>
                    <br />
                    Biological resources that, if harvested slower than or equal to the rate at
                    which they are replenished by natural processes. If biotic resources are
                    harvested faster than they are replaced by natural processes, they become
                    exhaustible (unsustainable).
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">Example: Timber, kelp, fisheries</span>
                  </p>
                  <p>
                    <b>Recoverable</b>
                    <br />
                    Renewable resources that are replenished by natural processes on longer time
                    scales (decades to centuries).
                  </p>
                </motion.div>
                <motion.div
                  key="cultivated"
                  className={cn("flex max-w-[390px] flex-col gap-y-6 lg:gap-y-5", {
                    absolute: isMobile,
                    "pointer-events-none": isMobile && activeSectionMobile !== 1,
                  })}
                  aria-hidden={isMobile && activeSectionMobile !== 1}
                  transition={{ duration: 0.3, ease: "linear" }}
                  {...(isMobile
                    ? {
                        initial: { opacity: 0 },
                        animate: activeSectionMobile === 1 ? { opacity: 1 } : undefined,
                      }
                    : { style: sectionsStyle[1] })}
                >
                  <p id="cultivated" className="text-2xl text-green-500 lg:text-4xl">
                    Cultivated
                  </p>
                  <p>
                    Ecosystems that are maintained by human intervention but depend on the
                    underlying environmental assets.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: agricultural systems, plantations, urban green spaces
                    </span>
                  </p>
                </motion.div>
                <motion.div
                  key="non-renewable"
                  className={cn("flex max-w-[390px] flex-col gap-y-6 lg:gap-y-5", {
                    absolute: isMobile,
                    "pointer-events-none": isMobile && activeSectionMobile !== 2,
                  })}
                  aria-hidden={isMobile && activeSectionMobile !== 2}
                  transition={{ duration: 0.3, ease: "linear" }}
                  {...(isMobile
                    ? {
                        initial: { opacity: 0 },
                        animate: activeSectionMobile === 2 ? { opacity: 1 } : undefined,
                      }
                    : { style: sectionsStyle[2] })}
                >
                  <p id="non-renewable" className="text-2xl text-green-500 lg:text-4xl">
                    Non-renewable
                  </p>
                  <p>
                    Non-renewable resources are finite and irreplaceable or those that can only be
                    replaced over geological timescales.
                  </p>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">Example: fossil fuels, minerals</span>
                  </p>
                </motion.div>
              </SectionsContainer>
            </div>
          </div>
        </div>
        <main className="flex flex-col justify-start gap-y-4 border-t-2 border-t-green-500 pb-14 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:pb-28">
          <h3 className="flex-shrink-0 text-green-500 lg:w-[350px] lg:text-xl">
            Key insights about this chapter
          </h3>
          <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
            <li className="pt-5">
              <p className="max-w-[600px]">
                Assets form the basis of natural capital and can be categorized as either
                environmental (individual) or ecosystem (interaction of environmental) assets.
              </p>
            </li>
            <li className="pt-5">
              <p className="max-w-[600px]">
                There are three different resource classes: renewable (inexhaustible, exhaustible
                and recoverable), cultivated and non-renewable.
              </p>
            </li>
            <li className="pt-5">
              <p className="max-w-[600px]">
                These classes are determined by the amount of time taken to replenish them and the
                process in which they are created.
              </p>
            </li>
          </ul>
        </main>
        <Quiz data={QUIZ_DATA[0]} />
      </div>

      <div id="flows-of-services" className="scroll-mt-[92px] bg-blue-500">
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
          <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
            Chapter 02
            <h2 className="text-2xl lg:text-4.5xl">Flows of Services</h2>
          </div>
          <Image
            src="/assets/key-concepts-background-2.png"
            alt=""
            width={1180}
            height={547}
            className="relative top-12 -mt-4 h-auto w-[calc(100%_+_theme(spacing.6))] max-w-none lg:top-20 lg:w-[calc(100%_+_theme(spacing.20))]"
          />
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
        <div className="flex max-w-[860px] flex-col gap-y-6">
          <h3 className="text-2xl lg:text-4xl">
            What are the{" "}
            <span className="text-blue-500">benefits that flow from natural capital assets?</span>
          </h3>
          <p className="lg:text-xl">
            Natural capital assets produce flows of services that have value to businesses and
            society. These can be of two types:
          </p>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
          <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
            <p className="text-xl">Abiotic Services</p>
            <p>
              Abiotic services are benefits that arise from abiotic natural resources and physical
              processes, including fundamental geological processes, solar radiation and the Earth’s
              rotation and gravitational pull.
            </p>
          </div>
          <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
            <p className="text-xl">Ecosystem Services</p>
            <p>
              Ecosystem services are a key concept in natural capital. Ecosystem services are
              products or processes generated by ecosystems that have value to society. They can be
              raw materials or produce extracted directly from ecosystem assets, or the outcome of
              ecological processes that generate a resource or service.
            </p>
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
                <RevealLines splitChars>
                  <div className="text-4.2xl text-blue-500 lg:text-5xl">01</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Supporting services</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      Supporting services support all other ecosystem services. In practical terms,
                      supporting services are difficult to measure directly, so tend to be assessed
                      by using proxy measures such as the extent of ecosystems and the maintenance
                      of genetic diversity among populations and communities.
                    </p>
                  </RevealLines>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: photosynthesis, nutrient cycling, soil formation, and water cycling
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <RevealLines splitChars>
                  <div className="text-4.2xl text-blue-500 lg:text-5xl">02</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Regulating</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      These are the services produced as a by-product of ecosystem processes. They
                      do not produce a tangible product directly but they facilitate many of the
                      provisioning services that do produce products, or moderate natural phenomena
                      that support life.
                    </p>
                  </RevealLines>
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
                <RevealLines splitChars>
                  <div className="text-4.2xl text-blue-500 lg:text-5xl">03</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Provisioning</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      These are ecosystem processes that produce any type of product that benefits
                      people and can be extracted from nature.
                    </p>
                  </RevealLines>
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
                <RevealLines splitChars>
                  <div className="text-4.2xl text-blue-500 lg:text-5xl">04</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Cultural</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      These are non-material benefits that contribute to the cultural and spiritual
                      advancement of people.
                    </p>
                  </RevealLines>
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
        <main className="flex flex-col justify-start gap-y-4 border-t-2 border-t-blue-500 pb-14 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:pb-28">
          <h3 className="flex-shrink-0 text-blue-500 lg:w-[350px] lg:text-xl">
            Key insights about this chapter
          </h3>
          <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
            <li className="pt-5">
              <p className="max-w-[600px]">
                Natural capital assets produce two types of services: abiotic services (geological
                and physical processes) and ecosystem services (ecological processes).
              </p>
            </li>
            <li className="pt-5">
              <p className="max-w-[600px]">
                There are four categories of ecosystem services: supporting the production of all
                other services and life on Earth, regulating the balance of natural processes,
                provisioning products from nature, and cultural non-material benefits we get from
                nature.
              </p>
            </li>
            <li className="pt-5">
              <p className="max-w-[600px]">
                Humans directly benefit and exist thanks to all ecosystem services, be it nutrient
                cycling (supporting) and pollination (regulation) enabling food to grow, to
                freshwater for drinking (provisioning) and beautiful landscapes offering a place to
                exercise, relax and be inspired by nature (cultural).
              </p>
            </li>
          </ul>
        </main>
        <Quiz data={QUIZ_DATA[1]} />
      </div>
      <div className="bg-black text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center lg:px-20">
          <NaturalCapitalChart />
        </div>
      </div>

      <div id="dependencies-and-impacts" className="scroll-mt-[92px] bg-orange-500">
        <div className="mx-auto flex max-w-7xl flex-col px-6 lg:px-20">
          <div className="flex flex-col items-center gap-y-4 pt-10 lg:pt-16">
            Chapter 03
            <h2 className="text-2xl lg:text-4.5xl">Dependencies and Impacts</h2>
          </div>
          <Image
            src="/assets/key-concepts-background-3.png"
            alt=""
            width={1180}
            height={547}
            className="relative top-12 -mt-4 h-auto w-[calc(100%_+_theme(spacing.6))] max-w-none lg:top-20 lg:w-[calc(100%_+_theme(spacing.20))]"
          />
        </div>
      </div>
      <div className="mx-auto mt-24 flex max-w-7xl flex-col gap-y-14 px-6 lg:mt-40 lg:gap-y-20 lg:px-20">
        <div className="flex max-w-[860px] flex-col gap-y-6">
          <h3 className="text-2xl lg:text-4xl">
            How do businesses{" "}
            <span className="text-orange-500">impact and depend on natural capital?</span>
          </h3>
          <p className="lg:text-xl">
            All businesses have natural capital dependencies and impacts.
          </p>
        </div>
        <div className="flex flex-col gap-y-10 lg:flex-row lg:justify-between lg:gap-x-10">
          <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
            <p className="text-xl">Dependencies</p>
            <p>
              A dependency is a reliance on, or use of, a natural capital asset or ecosystem service
              to conduct the operations of the business.
            </p>
          </div>
          <div className="flex max-w-[475px] flex-1 flex-col gap-y-6 lg:gap-y-10">
            <p className="text-xl">Impacts</p>
            <div className="flex flex-col gap-y-4">
              <p>
                Impacts are changes in the extent or condition of a natural capital asset or
                ecosystem service resulting from the activities of a business. Impacts may be:
              </p>
              <ul className="list-inside list-disc">
                <li>Positive: an improvement in condition and/or increase in amount</li>
                <li>Negative: a deterioration in condition and/or decrease in amount.</li>
              </ul>
            </div>
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
                <RevealLines splitChars>
                  <div className="text-4.2xl text-orange-500 lg:text-5xl">01</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Direct</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      This refers to the direct result of a company’s actions and operations,
                      without intermediaries or secondary pathways. Such as direct pollution,
                      habitat destruction, resource extraction and land use change.
                    </p>
                  </RevealLines>
                  <p className="flex flex-row gap-x-4 rounded-[20px] bg-black/5 p-4 lg:py-3">
                    <Lightbulb className="shrink-0" />
                    <span className="relative top-0.5">
                      Example: the release of waste into waterways negatively impacts water quality
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <RevealLines splitChars>
                  <div className="text-4.2xl text-orange-500 lg:text-5xl">02</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Indirect</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      Indirect impacts from business on natural capital are unintended or secondary
                      consequences arising through pathways such as financial support, supply
                      chains, policy influences, and market dynamics, rather than direct actions.
                    </p>
                  </RevealLines>
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
                <RevealLines splitChars>
                  <div className="text-4.2xl text-orange-500 lg:text-5xl">03</div>
                </RevealLines>
                <RevealLines>
                  <div className="text-2xl lg:text-4xl">Cumulative</div>
                </RevealLines>
                <div className="flex flex-col gap-3 lg:gap-y-10 lg:pt-5">
                  <RevealLines>
                    <p>
                      The gradual, collective effects of multiple activities, operations, or
                      decisions over time that alter natural capital assets and ecosystem services.
                      Cumulative impacts include climate change, habitat fragmentation,
                      unsustainable water use, and land degradation, resulting from ongoing
                      contributions rather than isolated events.
                    </p>
                  </RevealLines>
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
        <main className="flex flex-col justify-start gap-y-4 border-t-2 border-t-orange-500 pb-14 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:pb-28">
          <h3 className="flex-shrink-0 text-orange-500 lg:w-[350px] lg:text-xl">
            Key insights about this chapter
          </h3>
          <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
            <li className="pt-5">
              <p className="max-w-[600px]">
                Businesses depend on natural capital assets and ecosystem services to operate
                effectively, such as extracting non-renewable resources or utilizing renewable
                resources like water for electricity generation.
              </p>
            </li>
            <li className="pt-5">
              <p className="max-w-[600px]">
                Businesses influence natural capital assets and ecosystem services through their
                activities, having positive and negative impacts. Impacts can be direct (e.g., waste
                pollution from production), indirect (e.g., deforestation linked to scope 3 supply
                chains), and cumulative (e.g., numerous industries and activities contributing to
                global climate change over time).
              </p>
            </li>
            <li className="pt-5">
              <p className="max-w-[600px]">
                Many businesses aim to reduce their negative impacts by achieving net-zero
                emissions, avoiding deforestation, and eliminating plastic use. Others go further by
                restoring habitats, practicing sustainable agriculture, and adopting circular
                economy principles.
              </p>
            </li>
          </ul>
        </main>
        <Quiz data={QUIZ_DATA[2]} />
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

export default KeyConceptsPage;
