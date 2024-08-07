import { PropsWithChildren } from "react";
import { EasingDefinition, Variants, motion } from "framer-motion";

const ANIMATION_EASE: EasingDefinition = "linear";
const ANIMATION_DURATION = 0.15;
const transition = { ease: ANIMATION_EASE, duration: ANIMATION_DURATION };

const contentAnimation: Variants = {
  animate: {
    x: "105%", // Added an extra 5% as a buffer
    opacity: 0,
    transition,
  },
};

const duplicatedContentAnimation: Variants = {
  animate: {
    x: "105%", // Added an extra 5% as a buffer
    opacity: 1,
    transition,
  },
};

const HorizontalHoverRepeatAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div className="relative w-full overflow-hidden">
      <motion.div
        className="absolute"
        initial={{
          x: "-105%",
          opacity: 0,
        }}
        aria-hidden
        variants={duplicatedContentAnimation}
      >
        {children}
      </motion.div>
      <motion.div
        className="relative"
        initial={{
          x: "35%",
          opacity: 1,
        }}
        variants={contentAnimation}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default HorizontalHoverRepeatAnimation;
