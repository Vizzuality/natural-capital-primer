"use client";

import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useCallback, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, useInView } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";
import DayInLifeCTA from "@/components/day-in-life-cta";
import Parallax from "@/components/animations/parallax";
import dynamic from "next/dynamic";

const RevealLines = dynamic(() => import("@/components/animations/reveal-lines"), { ssr: false });

export default function About() {
  const [activeBackgroundIndex, setActiveBackgroundIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const illustration2Ref = useRef<HTMLDivElement | null>(null);
  const illustration3Ref = useRef<HTMLDivElement | null>(null);
  const isXl = useMediaQuery("(min-width: 1280px)", false);

  const isIllustration2InView = useInView(illustration2Ref, {
    amount: 0.5,
    once: true,
  });
  const isIllustration3InView = useInView(illustration3Ref, {
    amount: 0.5,
    once: true,
  });

  const backgrounds = useMemo(
    () => [
      "/assets/about-illustration-4.png",
      "/assets/about-illustration-5.png",
      "/assets/about-illustration-6.png",
      "/assets/about-illustration-7.png",
      "/assets/about-illustration-8.png",
    ],
    [],
  );

  const onAnimationComplete = useCallback(() => {
    setIsAnimating(false);
    setActiveBackgroundIndex((prev) => (prev + 1) % backgrounds.length);
  }, [backgrounds]);

  return (
    <>
      <div>
        <Parallax
          heightClasses="h-[352px] lg:h-[645px]"
          className=""
          containerHeightPercentageMobile={142}
        >
          <div className="relative">
            {/* All the backgrounds */}
            {backgrounds.map((url, index) => (
              <Image
                key={url}
                src={url}
                alt=""
                fill
                className={cn("object-cover object-bottom", {
                  "opacity-0": activeBackgroundIndex !== index,
                })}
              />
            ))}
            {/* Clip background for the button */}
            <AnimatePresence mode="wait">
              {isAnimating ? (
                <motion.div
                  key="animated"
                  className="absolute inset-0 hidden lg:block"
                  initial={{
                    clipPath: isXl
                      ? "circle(22px at calc(100% - 188px - (100% - 1280px) / 2) 384px)"
                      : `circle(22px at calc(100% - 188px) 230px)`,
                  }}
                  animate={{
                    clipPath: isXl
                      ? "circle(100% at calc(100% - 188px - (100% - 1280px) / 2) 394px)"
                      : `circle(100% at calc(100% - 188px) 168px)`,
                  }}
                  transition={{ duration: 1, ease: "linear" }}
                  onAnimationComplete={onAnimationComplete}
                >
                  <Image
                    src={backgrounds[(activeBackgroundIndex + 1) % backgrounds.length]}
                    alt=""
                    fill
                    className="object-cover object-bottom"
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </Parallax>
        <motion.div
          key="initial"
          className="absolute inset-0 hidden lg:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={backgrounds[activeBackgroundIndex % backgrounds.length]}
            alt=""
            fill
            className="h-[130%] object-cover object-bottom lg:[clip-path:circle(22px_at_calc(100vw_-_203px)_168px)] xl:[clip-path:circle(22px_at_calc(100%_-_188px_-(100%_-_1280px)_/_2)_312px)]"
          />
        </motion.div>
        <div className="absolute inset-0 z-10">
          <div className="relative z-10">
            <Header logo="black" />
          </div>
          <div className="relative z-10 mx-auto max-w-7xl p-6 pb-20 text-white lg:px-20 lg:pb-48 lg:pt-36 xl:pt-72">
            <div
              className={cn(
                "absolute right-40 top-36 hidden h-[56px] w-[56px] -translate-y-24 rounded-full border border-dashed border-white transition-colors duration-1000 lg:flex lg:items-center lg:justify-center xl:top-72",
                {
                  "border-white": !isAnimating,
                  "border-transparent": isAnimating,
                },
              )}
            >
              <Button
                type="button"
                className="min-h-[44px] min-w-[44px] rounded-full bg-transparent hover:bg-transparent"
                onClick={() => setIsAnimating(true)}
              >
                <span className="sr-only">Change background</span>
              </Button>
            </div>
            <h1 className="text-[52px] font-medium leading-none lg:text-[72px]">
              About the Natural Capital Primer
            </h1>
          </div>
        </div>
      </div>
      <div className="pb-10 lg:pb-5">
        <div className="left-0 mx-0 bg-black px-6 py-10 pr-6 text-white lg:relative lg:-top-16 lg:px-20 lg:py-24 lg:pr-20 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)] xl:pl-[calc((100vw_-_1280px)_/_2_+_80px)] xl:pr-36">
          <main className="flex flex-col justify-start gap-y-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16">
            <h2 className="flex-shrink-0 lg:w-[220px]">Introduction</h2>
            <div className="flex flex-col gap-y-5">
              <p className="text-2xl lg:text-4xl">
                ‘Natural capital’ is the buzzword of the moment.
              </p>
              <p>
                It’s prominent in global initiatives, government policies, marketing slogans and
                sustainability frameworks around the world. But it can be confusing and overwhelming
                for individuals and businesses to navigate different definitions and applications of
                natural capital.
              </p>
            </div>
          </main>
        </div>
      </div>
      <div className="pb-10 lg:pb-24">
        <main className="mx-auto grid max-w-7xl grid-cols-1 gap-y-10 px-6 lg:mt-0 lg:grid-cols-[calc(100%_-_(55%_+_112px))_1fr_calc(100%_-_(55%_+_112px))] lg:gap-x-24 lg:gap-y-56 lg:px-20">
          <div className="flex flex-col gap-y-6 lg:col-span-2 lg:gap-y-10">
            <div className="flex flex-col gap-y-6 lg:gap-y-5">
              <p>The purpose of the Natural Capital Primer</p>
              <h2 className="text-2xl lg:text-4xl">
                The purpose of the Primer is to increase awareness, improve understanding of natural
                capital by:
              </h2>
            </div>
            <ol className="flex list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
              <li>
                Providing a ‘one-stop shop’ for resources and information for learning about natural
                capital
              </li>
              <li>Explaining key concepts about natural capital in easy to understand language</li>
              <li>Improving literacy and knowledge about natural capital and why it matters</li>
              <li>
                Revealing how different sectors of society depend on and impact natural capital
              </li>
              <li>
                Helping businesses and individuals understand their relationship with natural
                capital
              </li>
              <li>Encouraging a positive shift in how we view and manage natural capital</li>
            </ol>
            <Image
              src="/assets/about-illustration-2-mobile.png"
              alt=""
              width={327}
              height={221}
              className="mx-auto lg:hidden"
            />
            <p className="border-l-[6px] border-l-green-500 pl-6">
              Understanding and managing natural capital is crucial for achieving sustainability,
              conserving biodiversity, addressing climate change, and ensuring the well-being of
              future generations.
            </p>
          </div>
          <motion.div
            ref={illustration2Ref}
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: isIllustration2InView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/about-illustration-2.png"
              alt=""
              width={736}
              height={617}
              className="absolute top-20 max-w-none"
            />
          </motion.div>
          <motion.div
            ref={illustration3Ref}
            className="relative hidden lg:block"
            initial={{ opacity: 0 }}
            animate={{ opacity: isIllustration3InView ? 1 : 0 }}
            transition={{ duration: 1 }}
          >
            <Image
              src="/assets/about-illustration-3.png"
              alt=""
              width={755}
              height={566}
              className="absolute right-0 top-6 max-w-none"
            />
          </motion.div>
          <div className="flex flex-col gap-y-6 lg:col-span-2 lg:gap-y-16">
            <h2 className="flex flex-col gap-y-6 text-2xl lg:gap-y-5 lg:text-4xl">
              How can you use the Natural Capital Primer?
            </h2>
            <div className="flex flex-col gap-y-6 lg:gap-y-5">
              <div className="flex flex-col lg:gap-y-3">
                <p className="font-bold">Educators.</p>
                <p>Find resources to educate stakeholders about natural capital.</p>
              </div>
              <div className="flex flex-col lg:gap-y-3">
                <p className="font-bold">Businesses.</p>
                <p>
                  Learn more about natural capital to develop sustainability strategies, assess
                  environmental impact and make informed ESG and CSR decisions.
                </p>
              </div>
              <div className="flex flex-col lg:gap-y-3">
                <p className="font-bold">Non-government Organisations.</p>
                <p>Support policy advocacy positions and develop strategic directions.</p>
              </div>
              <div className="flex flex-col lg:gap-y-3">
                <p className="font-bold">Individuals.</p>
                <p>Learn about your dependency and impact on natural capital in everyday life.</p>
              </div>
              <div className="flex flex-col lg:gap-y-3">
                <p className="font-bold">Governments.</p>
                <p>
                  Inform policy development, enhance sustainable resource management and educate the
                  public.
                </p>
              </div>
            </div>
            <Image
              src="/assets/about-illustration-3-mobile.png"
              alt=""
              width={327}
              height={221}
              className="mx-auto lg:hidden"
            />
          </div>
        </main>
      </div>
      <div className="flex w-full items-center justify-center">
        <DayInLifeCTA />
      </div>
      <div className="bg-orange-500 pb-28 pt-10 lg:pb-52 lg:pt-24">
        <main className="mx-auto flex max-w-7xl flex-col justify-start gap-y-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20">
          <h2 className="flex-shrink-0 lg:w-[220px]">What can you find on The Primer?</h2>
          <div className="flex flex-col gap-y-6 lg:gap-y-10">
            <div className="flex flex-col gap-y-3">
              <RevealLines>
                <p className="text-2xl lg:text-4xl">Types of Natural Capital</p>
              </RevealLines>
              <RevealLines>
                <p>
                  Examine the natural capital present in different ecosystems and understand why it
                  is important to individuals, businesses, and governments.
                </p>
              </RevealLines>
            </div>
            <div className="flex flex-col gap-y-3">
              <RevealLines>
                <p className="text-2xl lg:text-4xl">Interactive Content</p>
              </RevealLines>
              <RevealLines>
                <p>
                  Engage with videos, infographics, and interactive tools to make learning about
                  natural capital enjoyable and relatable.
                </p>
              </RevealLines>
            </div>
            <div className="flex flex-col gap-y-3">
              <RevealLines>
                <p className="text-2xl lg:text-4xl">Business Dependencies and Impacts</p>
              </RevealLines>
              <RevealLines>
                <p>
                  Explore businesses&apos; dependencies and impacts on natural capital and why they
                  must account for and manage it.
                </p>
              </RevealLines>
            </div>
            <div className="flex flex-col gap-y-3">
              <RevealLines>
                <p className="text-2xl lg:text-4xl">Case Studies and Examples</p>
              </RevealLines>
              <RevealLines>
                <p>
                  Discover real-world examples from various industries and ecosystems illustrating
                  natural capital&apos;s practical applications and benefits.
                </p>
              </RevealLines>
            </div>
            <div className="flex flex-col gap-y-3">
              <RevealLines>
                <p className="text-2xl lg:text-4xl">Educational Resources</p>
              </RevealLines>
              <RevealLines>
                <p>
                  Access clear definitions, explanations, and examples to help you understand the
                  elements of natural capital and its significance.
                </p>
              </RevealLines>
            </div>
            <div className="flex flex-col gap-y-3">
              <RevealLines>
                <p className="text-2xl lg:text-4xl">Guides and Frameworks</p>
              </RevealLines>
              <RevealLines>
                <p>
                  Utilize guides on natural capital accounting, assessment, and reporting to help
                  businesses and policymakers integrate these practices into their operations.
                </p>
              </RevealLines>
            </div>
            <div className="flex flex-col gap-y-6 sm:flex-row sm:gap-x-3">
              <Button variant="outline" size="lg" asChild>
                <Link href="/key-concepts">
                  <HoverRepeatAnimation>Key Concepts</HoverRepeatAnimation>
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/industry-use-cases">
                  <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
                </Link>
              </Button>
            </div>
          </div>
        </main>
      </div>
      <div className="pb-10 lg:pb-24">
        <Parallax
          heightClasses="h-[327px] lg:h-[547px]"
          className="-top-20 ml-6 aspect-[3/2] pb-10 sm:aspect-[2/1] lg:-top-24 lg:mx-20 lg:aspect-auto xl:left-[calc((100vw_-_1280px)_/_2_+_80px)] xl:mx-0 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)]"
          src="/assets/about-illustration.png"
        />
        <main className="mx-auto -mt-10 flex max-w-7xl flex-col-reverse justify-start gap-y-10 px-6 lg:mt-0 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 xl:gap-x-44">
          <p className="flex-shrink-0 border-l-[6px] border-l-orange-500 pl-6 lg:w-[400px]">
            The Natural Capital Primer is a collaborative project by the Macdoch Foundation and La
            Trobe University. Our team comprises experts in environmental science, sustainability,
            and communication, all dedicated to making natural capital an integral part of public
            knowledge and business practices.
          </p>
          <p className="text-2xl lg:text-4xl">
            We must collectively value, measure, and manage nature in order to reverse its long-term
            decline and live within our planetary boundaries.
          </p>
        </main>
      </div>
      <Footer />
    </>
  );
}
