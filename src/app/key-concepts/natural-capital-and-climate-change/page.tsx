"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";
import Caret from "@/icons/caret-right.svg";
import Link from "next/link";
import DayInLifeCTA from "@/components/day-in-life-cta";
import AnimatedUnderline from "@/components/animations/animated-underline";

export default function ClimateChange() {
  return (
    <>
      <div className="h-[430px] w-full bg-[url(/assets/key-concepts-climate-change-background.png)] bg-cover bg-no-repeat pb-10 lg:h-[642px] lg:pb-20">
        <div className="relative z-10">
          <Header logo="white" />
        </div>
      </div>
      <div className="-mt-[270px] pr-6 lg:pr-20 xl:w-[calc(100vw_-_((100vw_-_1280px)_/_2)_-_80px)] xl:pr-36">
        <main className="flex items-center bg-black px-6 py-4 lg:px-20 lg:py-6 xl:pl-[calc((100vw_-_1280px)_/_2_+_80px)]">
          <div className="flex flex-col gap-y-2 sm:flex-row sm:items-center sm:gap-x-3">
            <Link href="/key-concepts#role" className="flex items-center gap-3">
              <Caret className="h-3 text-white" />
              <AnimatedUnderline className="text-lg text-white">Back to content</AnimatedUnderline>
            </Link>
            <span className="hidden h-4 border border-r-white/15 sm:block"></span>
            <div className="text-lg text-turquoise">Natural Capital and Climate Change</div>
          </div>
        </main>
        <main className="flex flex-col gap-6 bg-turquoise px-6 py-10 lg:px-20 lg:py-20 xl:pl-[calc((100vw_-_1280px)_/_2_+_80px)]">
          <h1 className="text-2xl lg:text-4xl">
            The link between natural capital and climate change is inextricable
          </h1>
          <div>
            We will not achieve net zero emissions without actions that build natural capital (and
            biodiversity), and we cannot build natural capital while consuming resources
            (non-renewable and renewable) at a rate that maintains or exacerbates the climate
            crisis. This inter-dependence is at once both the greatest risk to the planet and the
            potential solution.
          </div>
        </main>
      </div>
      <div className="mx-auto max-w-7xl px-6 py-6 lg:px-20 lg:py-14">
        <div className="flex flex-col items-start gap-10 lg:gap-20">
          <div className="flex flex-col gap-6 self-start lg:max-w-[799px]">
            <div className="text-lg">Natural Capital and Climate Change</div>
            <div className="text-2xl tracking-tight lg:text-4xl">
              Nature-based strategies are the key to fighting both the climate and biodiversity
              extinction crises through:
            </div>
          </div>
          <div className="flex flex-col justify-start gap-y-6 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16">
            <div className="flex-shrink-0 lg:w-[220px]" />
            <div className="flex flex-grow flex-col gap-6 lg:max-w-[559px] lg:gap-20">
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-4.2xl text-turquoise lg:text-5xl">01</div>
                <div className="text-2xl lg:text-4xl">Reducing emissions</div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-4.2xl text-turquoise lg:text-5xl">02</div>
                <div className="text-2xl lg:text-4xl">Sequestering carbon</div>
              </div>
              <div className="flex w-full flex-col gap-3 lg:gap-5">
                <div className="text-4.2xl text-turquoise lg:text-5xl">03</div>
                <div className="text-2xl lg:text-4xl">Growing our natural capital asset base</div>
              </div>
              <div className="flex w-full gap-6">
                <div className="w-1.5 bg-turquoise" />
                <div className="max-w-[510px] grow basis-0">
                  Such actions are usually mutualistic –building natural capital increases carbon
                  sequestration and vice-versa – but care is needed to guard against perverse
                  outcomes where this may not occur.
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-turquoise bg-cover p-6 py-10 lg:bg-[url(/assets/key-concepts-biodiversity-background-2.png)] lg:p-10">
            <div className="flex flex-col gap-[25px]">
              <div className="max-w-[790px] text-balance text-2xl lg:text-4xl">
                It is imperative that businesses recognise and respond to this inter-dependence.
              </div>
              <div className="max-w-[790px]">
                <p>
                  To do so, they need to explicitly document their climate and nature-related
                  dependencies and impacts, and understand the links between the two.
                </p>
                <p>
                  Importantly, failure to consider and include natural capital in climate strategies
                  will ultimately be ineffective in improving their climate position and expose the
                  business to significant climate and nature-related risk.
                </p>
              </div>
            </div>
          </div>
          <div className="flex w-full justify-between gap-10 max-lg:flex-wrap-reverse">
            <div className="flex h-fit min-w-[394px] gap-6">
              <div className="w-1.5 min-w-1.5 bg-turquoise" />
              <div className="max-w-[364px]">
                Balancing economic growth with environmental sustainability and biodiversity
                conservation is a pressing challenge that demands collaborative and proactive
                solutions.
              </div>
            </div>
            <div className="max-w-[540px] text-2xl lg:text-4xl">
              Continuous research, policy development, and innovative business practices are crucial
              to better incorporate natural capital into climate strategies.
            </div>
          </div>
          <div className="mb-10 w-full">
            <DayInLifeCTA />
          </div>
        </div>
        <main className="-mx-6 flex flex-col justify-start gap-y-6 border-t border-dashed border-t-black p-6 lg:-mx-20 lg:flex-row lg:items-start lg:justify-between lg:gap-x-16 lg:px-20 lg:pt-20">
          <p className="hidden flex-shrink-0 lg:block lg:w-[220px]">
            Natural Capital and Climate Change
          </p>
          <div className="flex flex-grow flex-col gap-10">
            <div className="flex items-center gap-3">
              <h2>Key insights about this chapter</h2>
              <div className="grow border-t border-t-grey-500"></div>
            </div>
            <ol className="flex max-w-[540px] list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
              <li>
                Achieving net zero emissions and enhancing natural capital (like biodiversity) are
                closely linked goals essential for effectively addressing climate change.
              </li>
              <li>
                Nature-based strategies not only help combat climate change but also support
                biodiversity. It’s crucial to ensure these actions benefit each other without
                unintended consequences.
              </li>
              <li>
                Businesses need to recognize and manage their dependencies on natural resources.
                Understanding these connections is crucial for effective climate strategies and
                mitigating business and societal risks related to climate change and biodiversity
                loss.
              </li>
            </ol>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
