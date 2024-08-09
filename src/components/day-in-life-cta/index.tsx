"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import ImageCarousel from "@/components/image-carousel";

const DayInLifeCTA: FC = () => {
  return (
    <div className="relative mx-6 mb-10 flex h-[520px] w-full max-w-7xl items-start justify-start overflow-hidden bg-black p-6 lg:mb-20 lg:h-[545px] lg:items-center lg:px-[60px]">
      <ImageCarousel
        images={[
          {
            src: "/assets/day-in-life-cta-illustration.png",
          },
          {
            src: "/assets/day-in-life-cta-illustration-2.png",
          },
          {
            src: "/assets/day-in-life-cta-illustration-3.png",
          },
          {
            src: "/assets/day-in-life-cta-illustration-4.png",
          },
        ]}
        alt=""
        className="absolute -bottom-20 -right-12 h-[279px] w-[276px] lg:-right-[200px] lg:top-1/2 lg:h-[602px] lg:w-[597px] lg:-translate-y-1/2"
      />
      <div className="z-10 flex max-w-[801px] flex-col items-start gap-16">
        <div className="flex flex-col gap-10 text-white">
          <div className="text-[52px] leading-[52px] lg:text-[100px] lg:leading-[92px]">
            A Day in the Life
          </div>
          <div className="text-base leading-normal lg:max-w-[703px] lg:text-[44px] lg:leading-[48px]">
            A short story which highlights the everyday reliance on natural capital through the
            products we use.
          </div>
        </div>
        <Button size="lg" variant="white" className="px-6" asChild>
          <Link href="/a-day-in-the-life">
            <HoverRepeatAnimation>Discover the Story</HoverRepeatAnimation>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DayInLifeCTA;
