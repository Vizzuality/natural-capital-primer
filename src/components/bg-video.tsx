"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
export interface BackgroundVideoProps {
  src: string;
  soundOn?: boolean;
  sectionInView?: boolean;
  className?: string;
}

const BackgroundVideo = ({
  src,
  soundOn = false,
  sectionInView = false,
  className,
}: BackgroundVideoProps) => {
  return (
    <AnimatePresence>
      {sectionInView && (
        <motion.video
          src={src}
          autoPlay
          loop
          muted={!soundOn}
          playsInline
          className={cn(
            "pointer-events-none absolute inset-0 h-full w-full object-cover object-center motion-reduce:hidden",
            className,
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />
      )}
    </AnimatePresence>
  );
};

export default BackgroundVideo;
