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
            <path d="m19.7144 124.8414c8.7143-25.9577 69.7097-80.7025 99.1185-104.8311 25.6283-16.2586 61.781-34.0481 162.5382 1.9409 100.7548 35.9898 79.7514 127.9439 101.1201 190.6042s-72.9451 135.5144-93.5652 149.0742c-20.4188 13.4257-32.5771 16.1209-76.4213 25.8403l-1.2985.2875c-44.9055 9.9543-72.8697-9.7051-135.5144-42.4787-62.6411-32.7736-69.8858-120.6489-74.0771-140.0303s7.2077-47.9517 18.1009-80.3994z" />
          </clipPath>
        </defs>
      </svg>
      {/* White marquee */}
      <div className="pointer-events-none absolute top-1/2 z-10 w-full -translate-y-1/2">
        <MarqueeAnimation>
          <p className="text-[52px] text-white lg:text-[85px]">
            A Day in the Life ⎯ A Day in the Life ⎯ A Day in the Life
          </p>
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
        className={`${heightClass} ${widthClass} mx-auto`}
      />
    </>
  );
};

export default DayInLifeMarquee;
