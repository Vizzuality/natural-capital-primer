"use client";

import { FC } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";

const DayInLifeCTA: FC = () => {
  return (
    <div className="relative flex h-[520px] w-full max-w-7xl items-center bg-black bg-[url(/assets/key-concepts-climate-change-a-day-cta-background.png)] bg-right bg-no-repeat px-[60px] lg:h-[584px]">
      <div className="flex max-w-[801px] flex-col items-start gap-16">
        <div className="flex flex-col gap-10 text-white">
          <div className="text-[52px] leading-[52px] lg:text-[100px] lg:leading-[92px]">
            A Day in the Life
          </div>
          <div className="text-base leading-normal lg:max-w-[703px] lg:text-[44px] lg:leading-[48px]">
            A short story which highlights the everyday reliance on natural capital through the
            products we use.
          </div>
        </div>
        <Button variant="white" asChild>
          <Link href="/a-day-in-the-life">
            <HoverRepeatAnimation>Discover the Story</HoverRepeatAnimation>
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default DayInLifeCTA;
