"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Parallax from "@/components/animations/parallax";

const Outro = () => (
  <div className="relative bg-black">
    <Parallax heightClasses="absolute w-full h-full block" containerHeightPercentageMobile={200}>
      <Image
        className="h-auto w-full max-w-none object-cover"
        src="/assets/natural-capital-in-daily-life-background.png"
        alt=""
        width={1240}
        height={504}
      />
    </Parallax>
    <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center gap-y-6 p-6 py-12 pt-10 text-white lg:gap-y-11 lg:px-20 lg:py-20">
      <p className="max-w-[815px] text-center text-lg lg:text-xl">
        By following Julie&apos;s day, we see how deeply intertwined our lives are with natural
        capital. Every product and service we use depends on these vital resources, highlighting the
        importance of protecting and managing them sustainably for the planetary well-being of
        current and future generations.
      </p>
      <div className="flex flex-col items-center gap-5">
        <p className="text-center">
          Dive deeper into the Natural Capital Primer to understand key concepts:
        </p>
        <div className="flex w-full flex-col gap-2 lg:flex-row">
          <Button asChild variant="outline-white" size="md">
            <Link href="/key-concepts#assets">
              <HoverRepeatAnimation>Natural Capital Assets</HoverRepeatAnimation>
            </Link>
          </Button>
          <Button asChild variant="outline-white" size="md">
            <Link href="/key-concepts#flows-of-services">
              <HoverRepeatAnimation>Flows of Services</HoverRepeatAnimation>
            </Link>
          </Button>
          <Button asChild variant="outline-white" size="md">
            <Link href="/key-concepts#dependencies-and-impacts">
              <HoverRepeatAnimation>Dependencies and Impacts</HoverRepeatAnimation>
            </Link>
          </Button>
          <Button asChild variant="outline-white" size="md">
            <Link href="/industry-use-cases">
              <HoverRepeatAnimation>Industry Use Cases</HoverRepeatAnimation>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  </div>
);

export default Outro;
