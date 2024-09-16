import { PropsWithChildren, useEffect } from "react";
import { EasingDefinition, Variants, motion, useAnimationControls } from "framer-motion";

const ANIMATION_EASE: EasingDefinition = "linear";
const ANIMATION_DURATION = 1;
const ANIMATION_DELAY = 1.5;

const contentAnimation: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: "105%", // Added an extra 5% as a buffer
    transition: {
      ease: ANIMATION_EASE,
      duration: ANIMATION_DURATION,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: ANIMATION_DELAY,
    },
  },
};

const duplicatedContentAnimation: Variants = {
  initial: {
    y: "-105%", // Added an extra 5% as a buffer
    opacity: 0,
  },
  animate: {
    y: ["-105%", 0],
    opacity: [0, 0, 1],
    transition: {
      y: {
        times: [0, 1],
        ease: ANIMATION_EASE,
        duration: ANIMATION_DURATION,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: ANIMATION_DELAY,
      },
      opacity: {
        times: [0, 0.5, 1],
        ease: ANIMATION_EASE,
        duration: ANIMATION_DURATION,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: ANIMATION_DELAY,
      },
    },
  },
};

const InfiniteSlideDownAnimation = ({ children }: PropsWithChildren) => {
  const controls = useAnimationControls();

  useEffect(() => {
    controls.start("animate");
  }, [controls]);

  return (
    <motion.div className="relative h-full overflow-hidden">
      <motion.div
        className="absolute h-full"
        aria-hidden
        variants={duplicatedContentAnimation}
        initial="initial"
        animate={controls}
      >
        {children}
      </motion.div>
      <motion.div
        className="relative h-full"
        variants={contentAnimation}
        initial="initial"
        animate={controls}
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default InfiniteSlideDownAnimation;
