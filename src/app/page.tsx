"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion, useScroll, useTransform } from "framer-motion";
import Shape1 from "@/svgs/404-shape-1.svg";
import Shape2 from "@/svgs/home-shape-2.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import { useRef } from "react";
import Pebble from "@/components/home/pebble";
import PrimerExtractPopover from "@/components/home/primer-extract-popover";

export default function Home() {
  const scrollSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
  });

  const resources = {
    opacity: useTransform(scrollYProgress, [5 / 15, 6 / 15], [1, 0]),
    display: useTransform(scrollYProgress, (value) => (value < 6 / 15 ? "flex" : "none")),
  };

  const resourcesIndividualOpacity = {
    water: useTransform(scrollYProgress, [1 / 15, 2 / 15], [0, 1]),
    invertebrates: useTransform(scrollYProgress, [3 / 15, 4 / 15], [0, 1]),
  };

  const firstParagraph = {
    opacity: useTransform(scrollYProgress, [5 / 15, 6 / 15], [1, 0]),
    display: useTransform(scrollYProgress, (value) => (value < 6 / 15 ? "block" : "none")),
  };

  const secondParagraph = {
    opacity: useTransform(scrollYProgress, [7 / 15, 8 / 15, 11 / 15, 12 / 15], [0, 1, 1, 0]),
    position: useTransform(scrollYProgress, (value) =>
      value > 7 / 15 && value < 12 / 15 ? "static" : "absolute",
    ),
  };

  const thirdParagraph = {
    opacity: useTransform(scrollYProgress, [13 / 15, 14 / 15], [0, 1]),
    position: useTransform(scrollYProgress, (value) =>
      value > 12 / 15 + 1 / 15 ? "static" : "absolute",
    ),
  };

  const services = {
    opacity: useTransform(scrollYProgress, [9 / 15, 10 / 15, 11 / 15, 12 / 15], [0, 1, 1, 0]),
    display: useTransform(scrollYProgress, (value) =>
      value > 9 / 15 && value < 12 / 15 ? "flex" : "none",
    ),
  };

  const values = {
    opacity: useTransform(scrollYProgress, [13 / 15, 14 / 15], [0, 1]),
    display: useTransform(scrollYProgress, (value) => (value > 13 / 15 ? "flex" : "none")),
  };

  const explore = {
    opacity: useTransform(scrollYProgress, [13 / 15, 14 / 15], [0, 1]),
    display: useTransform(scrollYProgress, (value) =>
      value > 12 / 15 + 1 / 15 ? "block" : "none",
    ),
  };

  return (
    <>
      <div className="bg-[url(/assets/home-background-mobile.png)] bg-[length:auto_50%] bg-[right_bottom_40px] bg-no-repeat pb-10 md:bg-[length:auto_70%] lg:bg-[url(/assets/404-background.png)] lg:bg-right-bottom lg:pb-20 xl:bg-[length:auto_80%]">
        <div className="absolute left-1/2 w-full max-w-7xl -translate-x-1/2">
          <motion.div
            initial={{ translateX: 0, translateY: 0 }}
            animate={{ translateX: "100px", translateY: "20px" }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -left-14 -top-5 opacity-90 lg:-left-56"
          >
            <Shape1 className="max-w-[250px] md:max-w-[400px] lg:max-w-full" />
          </motion.div>
          <motion.div
            initial={{ translateX: 0, translateY: 0 }}
            animate={{ translateX: "-220px", translateY: "-30px" }}
            transition={{
              ease: "linear",
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute -top-9 left-5 max-w-[70vw] mix-blend-multiply lg:top-0"
          >
            <Shape2 className="max-w-[250px] md:max-w-[350px] lg:max-w-full" />
          </motion.div>
        </div>
        <div className="relative z-10">
          <Header logo="white" />
        </div>
        <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-y-10 p-6 pb-0 lg:gap-y-24 lg:px-20 lg:pt-36">
          <div className="flex max-w-[540px] flex-col items-start gap-y-6 lg:max-w-[1030px] lg:gap-y-10">
            <h1 className="text-[52px] font-medium leading-none lg:text-6xl">
              Welcome to the Natural Capital Primer
            </h1>
            <p className="lg:text-2xl">
              A science-based resource that explains the concept of natural capital and how business
              and society depend on it.
            </p>
          </div>
          <div className="flex items-end gap-x-10">
            <Link
              href="https://www.latrobe.edu.au/"
              rel="noopener noreferrer"
              target="_blank"
              className="bg-white"
            >
              <Image
                src="/assets/la-trobe-university.png"
                alt="La Trobe University"
                width={180}
                height={48}
                className="w-[111px] mix-blend-darken lg:w-[180px]"
              />
            </Link>
            <Link href="https://macdochfoundation.org/" rel="noopener noreferrer" target="_blank">
              <Image
                src="/assets/macdoch-foundation.png"
                alt="Macdoch Foundation"
                width={154}
                height={68}
                className="w-[98px] lg:w-[154px]"
              />
            </Link>
          </div>
        </main>
      </div>
      <div className="bg-green-500 pb-28 pt-10 lg:pb-52 lg:pt-24">
        <main className="mx-auto flex max-w-7xl flex-col justify-start gap-y-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20">
          <h2 className="flex-shrink-0 lg:w-[220px]">What is natural capital?</h2>
          <div className="grid flex-grow grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
            <p className="text-2xl lg:col-span-2 lg:text-4xl">
              Natural capital refers to all living and non-living natural resources (assets) that
              provide products and services that are of value to humans rand society.
            </p>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold">Natural Capital Assets:</h3>
              <p>
                These are the physical entities (resources) that can be described in terms of their
                extant and condition. Assets produce flows of ecosystem services.
              </p>
              <Link href="/key-concepts/assets" className="text-xs font-bold uppercase underline">
                Know more <span className="sr-only">about Natural Capital Assets</span>
              </Link>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="font-bold">Ecosystem Services:</h3>
              <p>
                These are the products or processes arising from nature that are of benefit and
                value to human society.
              </p>
              <Link
                href="/key-concepts/flows-of-services"
                className="text-xs font-bold uppercase underline"
              >
                Know more <span className="sr-only">about Ecosystem Services</span>
              </Link>
            </div>
          </div>
        </main>
      </div>
      <div className="bg-black pb-10 text-white lg:pb-24">
        <div className="relative -top-20 mx-6 aspect-[3/2] bg-[url(/assets/home-illustration.png)] bg-cover bg-center sm:aspect-[2/1] lg:-top-24 lg:mx-20 lg:aspect-auto lg:h-[550px] xl:left-[calc((100vw_-_1280px)_/_2_+_80px)] xl:mx-0 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)]"></div>
        <div className="flex flex-col gap-y-6 lg:gap-y-20">
          <main className="mx-auto flex max-w-7xl flex-col justify-start gap-y-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20">
            <h2 className="flex-shrink-0 lg:w-[220px]">Why is natural capital important to me?</h2>
            <div className="flex flex-grow flex-col gap-y-10 lg:gap-y-20">
              <div className="flex flex-col gap-y-3 lg:gap-y-6">
                <p className="text-2xl lg:text-4xl">
                  Our very own existence depends on natural capital.
                </p>
                <p>
                  Humans rely on natural capital for life-sustaining services like clean air, water,
                  food and shelter.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 lg:gap-y-6">
                <p className="text-2xl lg:text-4xl">
                  55% of global GDP directly depends on natural assets and ecosystem services.
                  <sup>1</sup>
                </p>
                <p>
                  This includes products such as timber and food, raw materials for manufacturing,
                  and services such as pollination, flood mitigation, and tourism.
                </p>
              </div>
            </div>
          </main>
          <main className="mx-auto flex w-full max-w-7xl flex-col justify-start gap-y-6 border-t border-dashed border-t-white px-6 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
            <div className="flex-shrink-0 lg:w-[220px]" />
            <div className="flex flex-grow flex-col gap-y-6 lg:gap-y-10">
              <div className="flex items-center gap-x-3">
                <p className="flex-shrink-0">Citations of this section</p>
                <div className="h-px flex-grow bg-white" />
              </div>
              <ol className="list-inside list-decimal">
                <li>
                  Evison, W., Low, L.P & O&apos;Brien, D. (2023) Managing nature risks: From
                  understanding to action. PwC.{" "}
                  <Link
                    href="https://www.pwc.com/gx/en/strategy-and-business/content/sbpwc-2023-04-19-Managing-nature-risks-v2.pdf"
                    className="underline"
                    rel="noopener noreferrer"
                  >
                    https://www.pwc.com/gx/en/strategy-and-business/content/sbpwc-2023-04-19-Managing-nature-risks-v2.pdf
                  </Link>
                </li>
              </ol>
            </div>
          </main>
        </div>
      </div>
      <div className="relative h-[600vh]" ref={scrollSectionRef}>
        <main className="sticky top-0 mx-auto h-[100vh] max-w-7xl overflow-hidden px-6 pb-20 pt-10 lg:pb-12 lg:pt-24 xl:overflow-visible">
          <div className="absolute right-0 top-2/3 lg:right-32 lg:top-1/2">
            <Pebble index={1} scrollYProgress={scrollYProgress} />
            <Pebble index={2} scrollYProgress={scrollYProgress} />
            <Pebble index={3} scrollYProgress={scrollYProgress} />
            <Pebble index={4} scrollYProgress={scrollYProgress} />
          </div>
          <div className="pointer-events-none absolute bottom-20 left-0 z-20 flex w-full justify-start px-6 lg:bottom-12 lg:justify-end">
            <PrimerExtractPopover />
          </div>
          <p>Let&apos;s look at a specific example...</p>
          <div className="relative z-10 mt-6 max-w-[730px] text-xl sm:text-2xl lg:mt-7 lg:text-4xl">
            <motion.p
              style={{
                ...firstParagraph,
              }}
            >
              These resources and services provide value to people. Let&apos;s look at a short
              example to show the concept of natural capital assets and flows of services in
              practice.
            </motion.p>
            <motion.p style={{ ...secondParagraph }}>
              When they combine, these resources transform into services such as...
            </motion.p>
            <motion.p style={{ ...thirdParagraph }}>
              These services benefit people and society by bringing them specific value like...
            </motion.p>
          </div>
          <motion.div
            className="relative z-10 mt-6 flex flex-col gap-y-3 text-2xl sm:flex-row sm:gap-x-10 lg:mt-14 lg:text-4xl"
            style={{ ...resources }}
          >
            <span className="text-orange">Soil</span>
            <motion.span
              className="text-turquoise"
              style={{ opacity: resourcesIndividualOpacity.water }}
            >
              Water
            </motion.span>
            <motion.span
              className="text-green-500"
              style={{ opacity: resourcesIndividualOpacity.invertebrates }}
            >
              Invertebrates
            </motion.span>
          </motion.div>
          <motion.div
            className="relative z-10 mt-6 flex flex-col gap-y-4 text-xl sm:text-2xl lg:mt-10 lg:text-4xl"
            style={{ ...services }}
          >
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/assets/home-pollination.png"
                width={105}
                height={44}
                alt=""
                className="w-[60px] sm:w-[105px]"
              />
              Pollination
            </div>
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/assets/home-crop-yields.png"
                width={105}
                height={44}
                alt=""
                className="w-[60px] sm:w-[105px]"
              />
              Crop yields
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 mt-6 flex flex-col gap-y-4 text-xl sm:text-2xl lg:mt-10 lg:text-4xl"
            style={{ ...values }}
          >
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/assets/home-food-security.png"
                width={105}
                height={44}
                alt=""
                className="w-[60px] sm:w-[105px]"
              />
              Food security
            </div>
            <div className="flex items-center gap-x-2.5">
              <Image
                src="/assets/home-income-generation.png"
                width={105}
                height={44}
                alt=""
                className="w-[60px] sm:w-[105px]"
              />
              Income generation
            </div>
          </motion.div>
          <motion.div className="relative z-10 mt-6 sm:mt-20 lg:mt-44" style={{ ...explore }}>
            <p>Explore Natural Capital Primer:</p>
            <div className="mt-3 flex flex-col gap-y-3 sm:flex-row sm:items-start sm:gap-x-3">
              <Button variant="outline" asChild>
                <Link href="/about">
                  <HoverRepeatAnimation>About the Project</HoverRepeatAnimation>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/key-concepts">
                  <HoverRepeatAnimation>Key Concepts</HoverRepeatAnimation>
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/industry-use-cases">
                  <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
                </Link>
              </Button>
            </div>
          </motion.div>
        </main>
      </div>
      <div className="bg-orange-500 py-10 lg:py-14">
        <main className="mx-auto flex max-w-7xl flex-col items-center gap-y-6 p-6 text-center lg:gap-y-5">
          <h2 className="max-w-[820px] text-2xl lg:text-[62px] lg:leading-[68px]">
            Understanding and valuing natural capital is crucial
          </h2>
          <p className="max-w-[820px]">
            We can make informed choices to use and conserve our planet&apos;s resources by
            understanding and valuing natural capital, balancing what we take from nature with what
            we give back.
          </p>
          <Button variant="outline" asChild>
            <Link href="/key-concepts">
              <HoverRepeatAnimation>Learn More about Natural Capital</HoverRepeatAnimation>
            </Link>
          </Button>
        </main>
      </div>
      <div className="h-[400px] bg-[url(/assets/home-illustration-2.png)] bg-cover bg-bottom sm:aspect-[5/3] sm:h-auto lg:aspect-auto lg:h-[550px]"></div>
      <Footer />
    </>
  );
}
