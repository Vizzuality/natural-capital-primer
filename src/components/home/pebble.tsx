"use client";

import { motion, MotionValue, useTransform } from "framer-motion";
import desktopData from "@/data/home-pebbles-animations-desktop.json";
import mobileData from "@/data/home-pebbles-animations-mobile.json";
import useMediaQuery from "@/hooks/use-media-query";
import { FC, useCallback } from "react";

export interface PebbleProps {
  /** Index of the pebble */
  index: number;
  /** Vertical scroll progress */
  scrollYProgress: MotionValue<number>;
}

const Pebble: FC<PebbleProps> = ({ index, scrollYProgress }) => {
  const isMobile = useMediaQuery("not (min-width: 768px)", false);

  const getKey = useCallback(
    (property: string) => `pb${index}_${property}` as keyof typeof desktopData,
    [index],
  );
  const getData = useCallback(
    <T,>(property: string) => (isMobile ? mobileData : desktopData)[getKey(property)] as T[],
    [getKey, isMobile],
  );

  const path = useTransform<number[], string>(
    scrollYProgress,
    desktopData.keyframe,
    getData<string>("path"),
  );

  const width = useTransform<number[], string>(
    scrollYProgress,
    desktopData.keyframe,
    getData<string>("width"),
  );

  const height = useTransform<number[], string>(
    scrollYProgress,
    desktopData.keyframe,
    getData<string>("height"),
  );

  const scale = useTransform<number[], number>(
    scrollYProgress,
    desktopData.keyframe,
    getData<number>("scale"),
  );

  const top = useTransform<number[], string>(
    scrollYProgress,
    desktopData.keyframe,
    getData<string>("top"),
  );

  const right = useTransform<number[], string>(
    scrollYProgress,
    desktopData.keyframe,
    getData<string>("right"),
  );

  const opacity = useTransform<number[], number>(
    scrollYProgress,
    desktopData.keyframe,
    getData<number>("opacity"),
  );

  const color = useTransform<number[], string>(
    scrollYProgress,
    desktopData.keyframe,
    getData<string>("color"),
  );

  const bgOpacity = useTransform<number[], number>(
    scrollYProgress,
    desktopData.keyframe,
    getData<number>("bg_opacity"),
  );

  return (
    <motion.div
      className="absolute right-0 top-0 -translate-y-1/2 mix-blend-multiply"
      style={{
        width,
        height,
        opacity,
      }}
    >
      <svg width="0" height="0">
        <defs>
          <clipPath id={`pebble-clip-${index}`}>
            <motion.path d={path} />
          </clipPath>
        </defs>
      </svg>
      <motion.div
        className="absolute"
        style={{
          clipPath: `url(#pebble-clip-${index})`,
          width,
          height,
          scale,
          top,
          right,
          backgroundColor: color,
        }}
      >
        <motion.div
          className="h-full w-full bg-[length:120%_120%] bg-center"
          style={{
            backgroundImage: `url(/assets/home-pebble-${index}.png)`,
            opacity: bgOpacity,
          }}
        />
      </motion.div>
    </motion.div>
  );
};

export default Pebble;
