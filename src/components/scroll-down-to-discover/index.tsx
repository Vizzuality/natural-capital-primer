"use client";

import ArrowSlide from "@/icons/arrow-slide.svg";
import InfiniteSlideDownAnimation from "../animations/infinite-slide-down";
import { cn } from "@/lib/utils";

type ScrollDownToDiscoverProps = {
  className?: string;
};
const ScrollDownToDiscover = ({ className }: ScrollDownToDiscoverProps) => {
  return (
    <div
      className={cn(
        "ScrollDownToDiscover absolute bottom-0 right-0 hidden w-28 flex-col gap-y-5 xl:flex",
        className,
      )}
    >
      <div className="h-28 w-28 rounded-full border border-black/20">
        <InfiniteSlideDownAnimation>
          <div className="flex h-28 w-28 items-center justify-center">
            <ArrowSlide className="h-6 w-6" />
          </div>
        </InfiniteSlideDownAnimation>
      </div>
      <p className="text-center text-base opacity-30">Scroll down to discover</p>
    </div>
  );
};

export default ScrollDownToDiscover;
