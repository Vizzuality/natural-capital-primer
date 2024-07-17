"use client";

import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function About() {
  return (
    <>
      <div className="relative z-10">
        <Header />
      </div>
      <div className="bg-orange-500 pb-28 pt-10 lg:pb-52 lg:pt-24">
        <main className="mx-auto flex max-w-7xl flex-col justify-start gap-y-6 px-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20">
          <h2 className="flex-shrink-0 lg:w-[220px]">What can you find on The Primer?</h2>
          <div className="flex flex-col gap-y-6 lg:gap-y-10">
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl lg:text-4xl">Types of Natural Capital</p>
              <p>
                Examine the natural capital present in different ecosystems and understand why it is
                important to individuals, businesses, and governments.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl lg:text-4xl">Interactive Content</p>
              <p>
                Engage with videos, infographics, and interactive tools to make learning about
                natural capital enjoyable and relatable.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl lg:text-4xl">Business Dependencies and Impacts</p>
              <p>
                Explore businesses&apos; dependencies and impacts on natural capital and why they
                must account for and manage it.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl lg:text-4xl">Case Studies and Examples</p>
              <p>
                Discover real-world examples from various industries and ecosystems illustrating
                natural capital&apos;s practical applications and benefits.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl lg:text-4xl">Educational Resources</p>
              <p>
                Access clear definitions, explanations, and examples to help you understand the
                elements of natural capital and its significance.
              </p>
            </div>
            <div className="flex flex-col gap-y-3">
              <p className="text-2xl lg:text-4xl">Guides and Frameworks</p>
              <p>
                Utilize guides on natural capital accounting, assessment, and reporting to help
                businesses and policymakers integrate these practices into their operations.
              </p>
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
        <div className="relative -top-20 mx-6 aspect-[3/2] bg-[url(/assets/about-illustration.png)] bg-cover bg-center sm:aspect-[2/1] lg:-top-24 lg:mx-20 lg:aspect-auto lg:h-[550px] xl:left-[calc((100vw_-_1280px)_/_2_+_80px)] xl:mx-0 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)]"></div>
        <div className="flex flex-col gap-y-6 lg:gap-y-20">
          <main className="mx-auto -mt-10 flex max-w-7xl flex-col-reverse justify-start gap-y-10 px-6 lg:mt-0 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 xl:gap-x-44">
            <p className="flex-shrink-0 border-l-[6px] border-l-orange-500 pl-6 lg:w-[400px]">
              The Natural Capital Primer is a collaborative project by the Macdoch Foundation and La
              Trobe University. Our team comprises experts in environmental science, sustainability,
              and communication, all dedicated to making natural capital an integral part of public
              knowledge and business practices.
            </p>
            <p className="text-2xl lg:text-4xl">
              We must collectively value, measure, and manage nature in order to reverse its
              long-term decline and live within our planetary boundaries.
            </p>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
