"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";
import Image from "next/image";
import { motion } from "framer-motion";

const IMAGES = [
  "/assets/natural-capital-in-daily-life-illustration-22.png",
  "/assets/natural-capital-in-daily-life-illustration-23.png",
  "/assets/natural-capital-in-daily-life-illustration-24.png",
  "/assets/natural-capital-in-daily-life-illustration-25.png",
  "/assets/natural-capital-in-daily-life-illustration-26.png",
  "/assets/natural-capital-in-daily-life-illustration-27.png",
  "/assets/natural-capital-in-daily-life-illustration-28.png",
];

const MotionImage = motion.create(Image);

const DayInLifeCTA: FC = () => {
  const [currentFrame, setCurrentFrame] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentFrame((prevFrame) => (prevFrame + 1) % IMAGES.length);
    }, 4000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative bg-black">
      {IMAGES.map((image, index) => (
        <MotionImage
          key={image}
          src={image}
          alt=""
          fill
          className="absolute object-cover"
          initial={{ opacity: 0 }}
          animate={{ opacity: currentFrame === index ? 1 : 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
      ))}
      <div className="bg-pure-black/40 relative z-10 py-20 lg:py-[140px]">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-6 lg:px-20">
          <div className="flex flex-col items-center gap-6">
            <div className="flex flex-col items-center gap-6 text-white lg:max-w-[830px]">
              <h2 className="text-center text-4xl text-white lg:text-4.5xl">
                Natural Capital in Daily Life
              </h2>
              <div className="text-center text-base lg:text-2xl">
                A short story which highlights the everyday reliance on natural capital through the
                products we use.
              </div>
            </div>
            <Button size="lg" variant="yellow" asChild>
              <Link href="/natural-capital-in-daily-life">
                <HoverRepeatAnimation>Discover the Story</HoverRepeatAnimation>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayInLifeCTA;
