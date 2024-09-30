"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
export interface BackgroundVideoProps {
  src: string;
  fallbackImage?: string;
  soundOn?: boolean;
  sectionInView?: boolean;
  className?: string;
  fallbackClassName?: string;
}

const BackgroundVideo = ({
  src,
  fallbackImage,
  soundOn = false,
  sectionInView = false,
  className,
  fallbackClassName,
}: BackgroundVideoProps) => {
  return (
    <div
      className={cn("absolute inset-0 h-full w-full bg-cover bg-center", fallbackClassName)}
      style={
        fallbackImage
          ? {
              backgroundImage: `url(${fallbackImage})`,
            }
          : {}
      }
    >
      <AnimatePresence>
        {sectionInView && (
          <motion.video
            src={src}
            autoPlay
            loop
            muted={!soundOn}
            playsInline
            className={cn(
              "pointer-events-none h-full w-full object-cover object-center motion-reduce:hidden",
              className,
            )}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundVideo;
