"use client";

import { FC } from "react";
import ImageCarousel from "@/components/image-carousel";
import MarqueeAnimation from "@/components/animations/marquee";

const DayInLifeMarquee: FC = () => {
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="pebble-clip-mobile">
            <path d="m12.724 80.264c5.6185-16.736 44.944-52.032 63.905-67.589 16.524-10.483 39.832-21.952 104.79 1.2514 64.96 23.204 51.419 82.494 65.196 122.89 13.777 40.393-47.03 87.37-60.325 96.112-13.165 8.656-21.004 10.394-49.272 16.66l-0.837 0.185c-28.952 6.418-46.982-6.257-87.369-27.387-40.387-21.13-45.058-77.79-47.761-90.282-2.7027-12.492 4.647-30.916 11.67-51.836z" />
          </clipPath>
          <clipPath id="pebble-clip-desktop">
            <path d="m16.458 104.22c7.2749-21.67 58.195-67.372 82.746-87.515 21.395-13.573 51.576-28.424 135.69 1.6203 84.112 30.045 66.578 106.81 84.417 159.12s-60.896 113.13-78.11 124.45c-17.046 11.208-27.196 13.458-63.798 21.572l-1.084 0.24c-37.488 8.31-60.833-8.102-113.13-35.462-52.294-27.36-58.342-100.72-61.841-116.9s6.0171-40.031 15.111-67.119z" />
          </clipPath>
        </defs>
      </svg>
      {/* White marquee */}
      <div className="absolute top-1/2 z-10 w-full -translate-y-1/2">
        <MarqueeAnimation>
          <p className="text-[52px] text-white lg:text-[85px]">
            A Day in the Life ⎯ A Day in the Life ⎯ A Day in the Life
          </p>
        </MarqueeAnimation>
      </div>
      {/* Orange masked marquee */}
      <div
        className="absolute top-1/2 z-20 flex w-full -translate-y-1/2 flex-col items-center justify-center"
        aria-hidden="true"
      >
        <div className="h-[224px] w-[227px] [clip-path:_url(#pebble-clip-mobile)] lg:h-[321px] lg:w-[325px] lg:[clip-path:_url(#pebble-clip-desktop)]">
          <MarqueeAnimation className="absolute left-0 top-1/2 w-full -translate-y-1/2">
            <p className="text-[52px] text-orange lg:text-[85px]">
              A Day in the Life ⎯ A Day in the Life ⎯ A Day in the Life
            </p>
          </MarqueeAnimation>
        </div>
      </div>
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
        className="mx-auto h-[224px] w-[227px] lg:h-[321px] lg:w-[325px]"
      />
    </>
  );
};

export default DayInLifeMarquee;
