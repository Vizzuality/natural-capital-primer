import Header from "@/components/header";
import DayInLifeMarquee from "@/components/day-in-life-cta/marquee";
import { FC } from "react";
import InfiniteSlideDownAnimation from "@/components/animations/infinite-slide-down";
import ArrowSlide from "@/icons/arrow-slide.svg";

const Intro: FC = () => (
  <div className="flex min-h-min w-full flex-col justify-between gap-y-10 bg-black pb-16 lg:h-screen">
    <div className="relative z-10">
      <Header menuVariant="white" logo="white-color" />
    </div>
    <div className="relative flex w-full items-center justify-center lg:h-[30vh] lg:px-20">
      <DayInLifeMarquee />
    </div>
    <div className="w-full">
      <div className="mx-auto flex max-w-7xl items-end justify-between px-6 lg:px-20">
        <div className="text-center text-lg text-white lg:max-w-[480px] lg:text-left lg:text-xl">
          This is a short story about Julie,{" "}
          <span className="text-orange">
            which highlights our everyday reliance on natural capital through the products we use.
          </span>
        </div>
        <div className="hidden w-28 flex-col gap-y-5 text-white xl:flex">
          <div className="h-28 w-28 rounded-full border border-white/20">
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
  </div>
);

export default Intro;
