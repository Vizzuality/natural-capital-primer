"use client";

import { FC } from "react";
import ImageCarousel from "@/components/image-carousel";
import MarqueeAnimation from "@/components/animations/marquee";

const DayInLifeMarquee: FC = () => {
  const heightClass = "h-[251px] lg:h-[386px]";
  const widthClass = "w-[248px] lg:w-[382px]";

  return (
    <>
      <svg width="0" height="0">
        <defs>
          <clipPath id="pebble-clip-mobile">
            <path d="m12.724 80.264c5.6185-16.736 44.944-52.032 63.905-67.589 16.524-10.483 39.832-21.952 104.79 1.2514 64.96 23.204 51.419 82.494 65.196 122.89 13.777 40.393-47.03 87.37-60.325 96.112-13.165 8.656-21.004 10.394-49.272 16.66l-0.837 0.185c-28.952 6.418-46.982-6.257-87.369-27.387-40.387-21.13-45.058-77.79-47.761-90.282-2.7027-12.492 4.647-30.916 11.67-51.836z" />
          </clipPath>
          <clipPath id="pebble-clip-desktop">
            <path d="m19 124.2c8.8-26 70-80.9 99.4-105.1 25.7-16.3 62-34.1 163.1 1.9 101 36.1 79.9 128.4 101.4 191.2 21.4 62.8-73.2 135.9-93.9 149.5-20.4 13.5-32.6 16.2-76.6 25.9l-1.3 0.3c-45.1 10-73.1-9.7-135.9-42.6-62.8-32.9-70.1-121-74.3-140.4-4.2-19.5 7.2-48.1 18.1-80.7z" />
          </clipPath>
        </defs>
      </svg>
      {/* White marquee */}
      <div className="pointer-events-none absolute top-1/2 z-10 w-full -translate-y-1/2">
        <MarqueeAnimation>
          <div className="text-[52px] text-white lg:text-[85px]">
            <h1 className="inline">Natural Capital in Daily Life</h1> ⎯ Natural Capital in Daily
            Life ⎯ Natural Capital in Daily Life
          </div>
        </MarqueeAnimation>
      </div>
      {/* Orange masked marquee */}
      <div
        className="pointer-events-none absolute top-1/2 z-20 flex w-full -translate-y-1/2 flex-col items-center justify-center"
        aria-hidden="true"
      >
        <div
          className={`${heightClass} ${widthClass} [clip-path:_url(#pebble-clip-mobile)] lg:[clip-path:_url(#pebble-clip-desktop)]`}
        >
          <MarqueeAnimation className="absolute left-0 top-1/2 w-full -translate-y-1/2">
            <p className="text-[52px] text-orange lg:text-[85px]">
              Natural Capital in Daily Life ⎯ Natural Capital in Daily Life ⎯ Natural Capital in
              Daily Life
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
        className={`${heightClass} ${widthClass} mx-auto`}
      />
    </>
  );
};

export default DayInLifeMarquee;
