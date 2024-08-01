"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import DayInLifeMarquee from "@/components/day-in-life-cta/marquee";

const DayInLifeCTA: FC = () => {
  return (
    <div className="overflow-hidden bg-black py-11 text-white lg:py-20">
      <div className="flex flex-col items-center gap-8 lg:gap-6">
        <div className="relative w-full">
          <DayInLifeMarquee />
        </div>
        <div className="flex flex-col items-center gap-8 px-6 lg:gap-6 lg:px-20">
          <div className="max-w-[650px] text-center lg:text-xl lg:tracking-tight">
            A short story which highlights the everyday reliance on natural capital through the
            products we use.
          </div>
          <Button asChild variant="white" className="w-[200px] text-center">
            <Link href="/key-concepts/product-story">
              <HoverRepeatAnimation>Discover the Story</HoverRepeatAnimation>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DayInLifeCTA;
