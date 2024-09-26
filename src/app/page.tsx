"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import Shape1 from "@/svgs/404-shape-1.svg";
import Shape2 from "@/svgs/home-shape-2.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import { useRef } from "react";
import Pebble from "@/components/home/pebble";
import DayInLifeCTA from "@/components/day-in-life-cta";
import LaTrobeUniversity from "@/svgs/la-trobe-university.svg";
import Reference from "@/components/reference";
import BackgroundVideo from "@/components/bg-video";

export default function Home() {
  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const videoSectionInView = useInView(videoSectionRef);

  const scrollSectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollSectionRef,
  });

  const progress = [
    {
      width: useTransform(scrollYProgress, [1 / 15, 2 / 15], [34, 10]),
      backgroundColor: useTransform(scrollYProgress, [1 / 15, 2 / 15], ["#37A24C", "#cbcdc8"]),
    },
    {
      width: useTransform(scrollYProgress, [1 / 15, 2 / 15, 3 / 15, 4 / 15], [10, 34, 34, 10]),
      backgroundColor: useTransform(
        scrollYProgress,
        [1 / 15, 2 / 15, 3 / 15, 4 / 15],
        ["#cbcdc8", "#37A24C", "#37A24C", "#cbcdc8"],
      ),
    },
    {
      width: useTransform(scrollYProgress, [3 / 15, 4 / 15, 5 / 15, 6 / 15], [10, 34, 34, 10]),
      backgroundColor: useTransform(
        scrollYProgress,
        [3 / 15, 4 / 15, 5 / 15, 6 / 15],
        ["#cbcdc8", "#37A24C", "#37A24C", "#cbcdc8"],
      ),
    },
    {
      width: useTransform(scrollYProgress, [5 / 15, 6 / 15, 11 / 15, 12 / 15], [10, 34, 34, 10]),
      backgroundColor: useTransform(
        scrollYProgress,
        [5 / 15, 6 / 15, 11 / 15, 12 / 15],
        ["#cbcdc8", "#37A24C", "#37A24C", "#cbcdc8"],
      ),
    },
    {
      width: useTransform(scrollYProgress, [11 / 15, 12 / 15], [10, 34]),
      backgroundColor: useTransform(scrollYProgress, [11 / 15, 12 / 15], ["#cbcdc8", "#37A24C"]),
    },
  ];

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

  return (
    <>
      <div className="bg-[url(/assets/home-background-mobile.png)] bg-[length:auto_50%] bg-[right_bottom_140px] bg-no-repeat pb-10 md:bg-[length:auto_70%] md:bg-[right_bottom_40px] lg:bg-[url(/assets/404-background.png)] lg:bg-right-bottom lg:pb-20 xl:bg-[length:auto_80%]">
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
        <main className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-y-10 p-6 pb-0 lg:gap-y-14 lg:px-20 lg:pt-36">
          <div className="flex max-w-[540px] flex-col items-start gap-y-6 lg:max-w-[1030px] lg:gap-y-10">
            <h1 className="text-[52px] font-medium leading-none lg:text-6xl">
              Welcome to the Natural Capital Primer
            </h1>
            <p className="max-w-[730px] text-lg lg:text-xl">
              A science-based resource that explains how our entire lives, businesses and economies
              depend on nature, and how we can understand the value of it using a concept called
              natural capital.
            </p>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex items-end gap-x-10">
              <Link href="https://www.latrobe.edu.au/" rel="noopener noreferrer" target="_blank">
                <LaTrobeUniversity
                  className="relative mb-1 h-auto w-[111px] lg:w-[135px]"
                  aria-label="La Trobe University"
                />
              </Link>
              <Link href="https://macdochfoundation.org/" rel="noopener noreferrer" target="_blank">
                <Image
                  src="/assets/macdoch-foundation.png"
                  alt="Macdoch Foundation"
                  width={116}
                  height={51}
                  className="h-auto w-[98px] lg:w-[116px]"
                />
              </Link>
            </div>
            <p className="max-w-[540px] text-xs text-black/50 lg:max-w-[730px]">
              In creating this resource on natural capital, we recognise the Indigenous peoples and
              local communities whose wisdom and that of their ancestors, has stewarded nature for
              millennia. We acknowledge their continuing connection to land, sea, culture and
              community, and pay our respects to Elders past, present and future.
            </p>
          </div>
        </main>
      </div>
      <div className="bg-green-500 pt-10 lg:pt-24">
        <main className="mx-auto flex max-w-7xl flex-col justify-start gap-y-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10 lg:px-20">
          <h2 className="flex-shrink-0 text-lg lg:sticky lg:top-6 lg:w-[254px] lg:text-xl">
            What is natural capital?
          </h2>
          <div className="relative grid flex-grow grid-cols-1 gap-y-6 lg:grid-cols-2 lg:gap-x-10 lg:gap-y-16">
            <p className="text-2xl lg:col-span-2 lg:text-4xl">
              Natural capital refers to the natural resources, services and benefits that the
              environment provides to humans, like clean water, fertile soil, plants, animals, and
              even the air we breathe.
            </p>
            <p className="lg:col-span-2">
              These resources, both living (like plants and animals) and non-living (like water and
              soil), are essential because they support our economy and overall well-being by
              providing goods and services that we rely on every day.{" "}
              <Reference id={0} color="green" className="text-white" /> It’s called “capital”
              because, just like financial capital, nature plays a critical role in sustaining our
              society and economy.
            </p>
            <div className="flex flex-col gap-y-3">
              <h3 className="text-lg lg:text-xl">Natural Capital Assets</h3>
              <p>
                The tangible things we use from nature, such as food, water, trees, and minerals.
                These can be living (biotic) and non-living (abiotic). We depend on them to fuel our
                bodies, shelter our homes and provide all the items we wear and use. Natural capital
                assets produce flows of ecosystem services.{" "}
                <Reference color="green" id={1} className="text-white" />
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <h3 className="text-lg lg:text-xl">Ecosystem Services</h3>
              <p>
                The life-sustaining functions nature performs, such as cleaning our air and water,
                pollinating plants, and regulating the climate. We rely on these services daily to
                keep our bodies and minds healthy, and on a larger scale to protect our communities
                from worsening natural disasters due to climate breakdown.{" "}
                <Reference color="green" id={2} className="text-white" />
              </p>
              <Link
                href="/key-concepts#flows-of-services"
                className="mt-3 text-xs font-bold uppercase underline"
              >
                Definitions from the Primer
              </Link>
            </div>
          </div>
        </main>
        <div
          ref={videoSectionRef}
          className="relative mx-6 -mt-10 h-[327px] w-full translate-y-[117px] bg-black lg:mx-20 lg:h-[550px] lg:translate-y-[145px] xl:left-[calc((100vw_-_1280px)_/_2_+_80px)] xl:mx-0 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)]"
        >
          <BackgroundVideo
            src="/assets/home-video.mp4"
            sectionInView={videoSectionInView}
            className="object-bottom"
          />
        </div>
      </div>
      <div className="bg-black pb-10 pt-44 text-white lg:pb-24 lg:pt-60">
        <div className="flex flex-col gap-y-6 lg:gap-y-20">
          <main className="mx-auto flex max-w-7xl flex-col justify-start gap-y-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20">
            <h2 className="flex-shrink-0 text-lg lg:sticky lg:top-6 lg:w-[254px] lg:text-xl">
              Why is natural capital important?
            </h2>
            <div className="flex flex-grow flex-col gap-y-20">
              <div className="flex flex-col gap-y-3 lg:gap-y-6">
                <p className="text-2xl lg:text-4xl">
                  <span className="text-green-500">
                    Our entire existence depends on natural capital.
                  </span>{" "}
                  We rely on it for life-sustaining services like clean air, water, food and
                  shelter.
                </p>
              </div>
              <div className="flex flex-col gap-y-3 lg:gap-y-6">
                <p className="text-2xl lg:text-4xl">
                  <span className="text-green-500">
                    Our businesses and economies depend on it too.
                  </span>{" "}
                  55% of global GDP directly depends on natural assets and ecosystem services.{" "}
                  <Reference color="green" id={3} className="text-lg text-green-500" />
                </p>
                <p>
                  This includes products such as timber and food, raw materials for manufacturing,
                  and services such as pollination, flood mitigation, and tourism. By balancing what
                  we extract from nature with what we restore, we can make informed choices about
                  using and conserving our planet&apos;s resources wisely.
                </p>
                <p>
                  Natural capital is not a new concept. Indigenous peoples and local communities
                  have always understood the value of nature for the many life-giving and
                  life-sustaining services it provides. Their sustainable management of the land and
                  seas has ensured its value has passed on from generation to generation, and spread
                  well beyond to society as a whole.
                </p>
                <p>
                  While representing less than 5 percent of the world&apos;s population, Indigenous
                  Peoples steward more than a quarter of Earth&apos;s land and seas.{" "}
                  <Reference color="green" id={4} className="text-green-500" /> The existence of
                  Indigenous peoples and their cultures goes hand in hand with a healthy
                  environment, in fact studies show that tropical forest integrity is higher in
                  protected Indigenous lands.{" "}
                  <Reference color="green" id={5} className="text-green-500" />
                </p>
                <p>
                  We must recognise and apply the ancestral knowledge and expertise of Indigenous
                  Peoples and local communities that will allow us to sustainably manage nature for
                  society as a whole.
                </p>
                <p className="mt-6 text-lg lg:mt-14 lg:text-xl">
                  Read on to learn the basics, or explore the Primer for an in-depth understanding
                  of natural capital and examples of it in industry use cases.
                </p>
                <div className="mt-6 flex flex-col items-stretch gap-y-3 lg:mt-0 lg:flex-row lg:gap-x-8">
                  <Button variant="outline-white" size="lg" asChild>
                    <Link href="/about">
                      <HoverRepeatAnimation>About the Primer</HoverRepeatAnimation>
                    </Link>
                  </Button>
                  <Button variant="outline-white" size="lg" asChild>
                    <Link href="/key-concepts">
                      <HoverRepeatAnimation>Key Concepts</HoverRepeatAnimation>
                    </Link>
                  </Button>
                  <Button variant="outline-white" size="lg" asChild>
                    <Link href="/industry-use-cases">
                      <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div className="relative h-[600vh]" ref={scrollSectionRef}>
        <main className="sticky top-0 mx-auto min-h-[100vh] max-w-7xl overflow-hidden px-6 pb-20 pt-10 lg:pb-[280px] lg:pt-24 xl:overflow-visible">
          <div className="absolute right-0 top-2/3 lg:right-32 lg:top-1/2">
            <Pebble index={1} scrollYProgress={scrollYProgress} />
            <Pebble index={2} scrollYProgress={scrollYProgress} />
            <Pebble index={3} scrollYProgress={scrollYProgress} />
            <Pebble index={4} scrollYProgress={scrollYProgress} />
          </div>
          <div className="flex gap-x-2.5">
            <motion.div className="h-2.5 rounded-full" style={progress[0]} />
            <motion.div className="h-2.5 rounded-full" style={progress[1]} />
            <motion.div className="h-2.5 rounded-full" style={progress[2]} />
            <motion.div className="h-2.5 rounded-full" style={progress[3]} />
            <motion.div className="h-2.5 rounded-full" style={progress[4]} />
          </div>
          <p className="mt-6 text-lg lg:mt-10 lg:text-xl">
            Scroll to see an example of natural capital...
          </p>
          <div className="relative z-10 mt-6 max-w-[730px] text-xl sm:text-2xl lg:mt-10 lg:text-4xl">
            <motion.p
              style={{
                ...firstParagraph,
              }}
            >
              Environmental and ecosystem assets are the foundation of natural capital.
            </motion.p>
            <motion.p style={{ ...secondParagraph }}>
              When they combine, these assets transform into services such as...
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
            className="relative z-10 mt-6 flex flex-col gap-y-6 text-xl lg:mt-10"
            style={{ ...services }}
          >
            <div className="flex items-start gap-x-2.5 lg:gap-x-7">
              <Image
                src="/assets/home-pollination.png"
                width={108}
                height={108}
                alt=""
                className="w-[96px] sm:w-[108px]"
              />
              <p className="min-w-[210px] border-t-[6px] border-t-orange pt-4">Pollination</p>
            </div>
            <div className="flex items-start gap-x-2.5 lg:gap-x-7">
              <Image
                src="/assets/home-crop-yields.png"
                width={108}
                height={108}
                alt=""
                className="w-[96px] sm:w-[108px]"
              />
              <p className="min-w-[210px] border-t-[6px] border-t-green-500 pt-4">Crop yields</p>
            </div>
          </motion.div>
          <motion.div
            className="relative z-10 mt-6 flex flex-col gap-y-6 text-xl lg:mt-10"
            style={{ ...values }}
          >
            <div className="flex items-start gap-x-2.5 lg:gap-x-7">
              <Image
                src="/assets/home-food-system.png"
                width={108}
                height={108}
                alt=""
                className="w-[96px] sm:w-[108px]"
              />
              <p className="min-w-[210px] border-t-[6px] border-t-orange-500 pt-4">Food security</p>
            </div>
            <div className="flex items-start gap-x-2.5 lg:gap-x-7">
              <Image
                src="/assets/home-income-generation.png"
                width={108}
                height={108}
                alt=""
                className="w-[96px] sm:w-[108px]"
              />
              <p className="min-w-[210px] border-t-[6px] border-t-turquoise pt-4">
                Income generation
              </p>
            </div>
          </motion.div>
        </main>
      </div>
      <DayInLifeCTA />
      <Footer />
    </>
  );
}
