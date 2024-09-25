"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import InfiniteSlideDownAnimation from "@/components/animations/infinite-slide-down";
import ArrowSlide from "@/icons/arrow-slide.svg";
import Vizzuality from "@/svgs/vizzuality.svg";
import LaTrobeUniversity from "@/svgs/la-trobe-university.svg";
import BackgroundVideo from "@/components/bg-video";
import RevealLines from "@/components/animations/reveal-lines";

const BACKGROUNDS = [
  "/assets/about-background.png",
  "/assets/about-background-2.png",
  "/assets/about-background-3.png",
  "/assets/about-background-4.png",
  "/assets/about-background-5.png",
];

const MotionImage = motion.create(Image);

export default function About() {
  const [currentFrame, setCurrentFrame] = useState(0);

  const videoSectionRef = useRef<HTMLDivElement | null>(null);
  const videoSectionInView = useInView(videoSectionRef);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % BACKGROUNDS.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <div className="relative bg-black">
        {BACKGROUNDS.map((background, index) => (
          <MotionImage
            key={background}
            src={background}
            alt=""
            fill
            className="absolute object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: currentFrame === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
        <div className="relative z-10">
          <Header logo="white" />
          <div className="relative mx-auto mt-10 flex max-w-7xl flex-col gap-y-6 p-6 pb-12 pt-10 text-white lg:mt-14 lg:gap-y-10 lg:px-20 lg:pb-16 xl:mt-40">
            <h1 className="text-4.2xl font-medium lg:text-5xl">About the Natural Capital Primer</h1>
            <div className="flex max-w-[827px] flex-col gap-y-4">
              <p className="max-w-[827px] text-lg lg:text-xl">
                The Natural Capital Primer is a collaborative project of the Macdoch Foundation, La
                Trobe University and Vizzuality. Our team comprises experts in environmental
                science, sustainability, and communication, all dedicated to making natural capital
                an integral part of public knowledge and business practices.
              </p>
              <div className="absolute bottom-16 right-20 hidden w-28 flex-col gap-y-5 xl:flex">
                <div className="h-28 w-28 rounded-full border border-white/40">
                  <InfiniteSlideDownAnimation>
                    <div className="flex h-28 w-28 items-center justify-center">
                      <ArrowSlide className="h-6 w-6" />
                    </div>
                  </InfiniteSlideDownAnimation>
                </div>
                <p className="text-center opacity-50">Scroll down to discover</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-orange-500">
        <div className="mx-auto flex max-w-7xl flex-col gap-y-6 p-6 py-10 lg:px-20 lg:py-16">
          <h2 className="max-w-[600px] text-2xl lg:text-4xl">
            The organisations behind the Natural Capital Primer
          </h2>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="flex flex-col gap-y-6">
              <Link
                href="https://macdochfoundation.org/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex min-h-[60px] items-center"
              >
                <Image
                  src="/assets/macdoch-foundation.png"
                  alt="Macdoch Foundation"
                  width={137}
                  height={71}
                />
              </Link>
              <p>
                The Macdoch Foundation is an Australian philanthropic foundation that is committed
                to building a nature-positive, climate-friendly agriculture and food system that is
                economically sustainable, nourishes people and strengthens communities.  Active in
                Australia and the US, the Foundation funds in the areas of agriculture and natural
                capital, public engagement and climate-related industry transitions, and the health
                and wellbeing of farming communities in support of its purpose to build the
                resilience of people and the planet.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <Link
                href="https://www.latrobe.edu.au/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex min-h-[60px] items-center"
              >
                <LaTrobeUniversity
                  className="h-[33px] w-[158px]"
                  aria-label="La Trobe University"
                />
              </Link>
              <p>
                La Trobe University’s Research Centre for Future Landscapes creates knowledge and
                solutions for healthy landscapes for people and nature. The Centre develops
                next-generation tools and solutions to address the global challenge of sustaining
                natural ecosystems in human-dominated landscapes. The Centre is multi-disciplinary,
                comprised of academics, post-doctoral research fellows and research students.
              </p>
            </div>
            <div className="flex flex-col gap-y-6">
              <Link
                href="https://www.vizzuality.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="flex min-h-[60px] items-center"
              >
                <Vizzuality className="h-[34px] w-[147px]" aria-label="Vizzuality" />
              </Link>
              <p>
                Vizzuality is an impact-driven design and technology agency that creates bespoke,
                science-based data visualisations and digital tools that inspire learning, catalyse
                decisions, and improve our world. We collaborate with proactive organisations to
                create a sustainable future for our planet and society. We have over 15 years of
                experience working with world-changing organisations, building platforms like Global
                Forest Watch, Aqueduct, and Trase.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl flex-col gap-x-6 gap-y-10 p-6 py-10 md:grid-cols-2 md:gap-y-6 md:py-20 lg:px-20">
        <div className="flex max-w-[480px] flex-col gap-y-6">
          <h2 className="text-2xl lg:text-4xl">Why do we need the Natural Capital Primer?</h2>
          <p className="text-lg lg:text-xl">
            ‘Natural capital’ is the buzzword of the moment. Natural capital is prominent in global
            initiatives, government policies, marketing slogans, and sustainability frameworks
            worldwide. However, navigating different definitions and applications of natural capital
            can be confusing and overwhelming for individuals and businesses.
          </p>
        </div>
        <div className="flex justify-center md:justify-start">
          <Image
            src="/assets/about-illustration.png"
            width={840}
            height={645}
            alt=""
            className="w-full max-w-[400px] flex-shrink-0 lg:w-auto lg:max-w-none"
          />
        </div>
        <div className="order-3 flex items-start justify-center md:order-none md:justify-end">
          <Image
            src="/assets/about-illustration-2.png"
            width={745}
            height={672}
            alt=""
            className="w-full max-w-[400px] flex-shrink-0 lg:w-auto lg:max-w-none"
          />
        </div>
        <div className="flex max-w-[480px] flex-col gap-y-6">
          <h3 className="text-2xl lg:text-4xl">
            The purpose of the Natural Capital Primer is to increase awareness and to improve
            understanding of “natural capital” by:
          </h3>
          <ul>
            <li className="py-2 lg:py-4">
              Providing a ‘one-stop shop’ for resources and information to learn about natural
              capital
            </li>
            <li className="py-2 lg:py-4">
              Explaining key concepts about natural capital in easy-to-understand language
            </li>
            <li className="py-2 lg:py-4">
              Improving literacy and knowledge about natural capital and why it matters
            </li>
            <li className="py-2 lg:py-4">
              Revealing how different sectors of society depend on and impact natural capital
            </li>
            <li className="py-2 lg:py-4">
              Helping businesses and individuals understand their relationship with natural capital
            </li>
            <li className="py-2 lg:py-4">
              Encouraging a positive shift in how we view and manage natural capital
            </li>
          </ul>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-y-6 p-6 py-10 lg:px-20 lg:py-16">
        <p className="text-2xl text-orange-500 lg:text-4xl">
          Understanding and managing natural capital is crucial for achieving sustainability,
          conserving biodiversity, addressing climate change, and ensuring the well-being of future
          generations.
        </p>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-y-6 p-6 py-0 pb-10 lg:px-20 lg:pb-11">
        <div className="flex flex-col justify-start gap-y-4 border-t-2 border-t-orange-500 pt-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10">
          <div className="flex-shrink-0 lg:w-[350px]">
            <h2 className="text-lg text-orange-500 lg:text-xl">
              Who is the Natural Capital Primer for?
            </h2>
            <p className="mt-4 lg:mt-11">
              The Natural Capital Primer is intended to help build a foundational knowledge of what
              natural capital is, how we depend on it, and how we impact it. By understanding and
              managing natural capital, we can make informed decisions that help to create an
              equitable future that is both financially prosperous and beneficial for the planet.{" "}
              <b>The primer is handy for:</b>
            </p>
          </div>
          <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
            <li className="pt-5">
              <RevealLines>
                <p className="max-w-[600px] text-lg lg:text-xl">Educators</p>
              </RevealLines>
            </li>
            <li className="pt-5">
              <RevealLines>
                <p className="max-w-[600px] text-lg lg:text-xl">Businesses</p>
              </RevealLines>
            </li>
            <li className="pt-5">
              <RevealLines>
                <p className="max-w-[600px] text-lg lg:text-xl">Governments</p>
              </RevealLines>
            </li>
            <li className="pt-5">
              <RevealLines>
                <p className="max-w-[600px]text-lg lg:text-xl">Non-government Organisations</p>
              </RevealLines>
            </li>
            <li className="pt-5">
              <RevealLines>
                <p className="max-w-[600px] text-lg lg:text-xl">Individuals</p>
              </RevealLines>
            </li>
          </ul>
        </div>
      </div>

      <div
        ref={videoSectionRef}
        className="relative h-[550px] bg-black after:absolute after:inset-0 after:z-10 after:block after:bg-[#000]/30"
      >
        <BackgroundVideo
          src="/assets/about-video.mp4"
          sectionInView={videoSectionInView}
          className="object-bottom"
        />
        <div className="relative z-20 mx-auto flex max-w-7xl flex-col gap-y-6 p-6 py-10 lg:px-20 lg:py-14">
          <p className="max-w-[860px] text-xl text-white lg:text-2xl">
            We must collectively value, measure, and manage nature in order to reverse its long-term
            decline and live within our planetary boundaries.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
