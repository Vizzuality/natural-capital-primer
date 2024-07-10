import { PropsWithChildren } from "react";
import { EasingDefinition, Variants, motion } from "framer-motion";
import Arrow from "@/icons/arrow.svg";

const ANIMATION_EASE: EasingDefinition = "linear";
const ANIMATION_DURATION = 0.15;

const contentAnimation: Variants = {
  rest: {
    x: 0,
    transition: { ease: ANIMATION_EASE, duration: ANIMATION_DURATION },
  },
  hover: {
    x: "30px",
    transition: { ease: ANIMATION_EASE, duration: ANIMATION_DURATION },
  },
};

const arrowAnimation: Variants = {
  rest: {
    opacity: 0,
    transition: { ease: ANIMATION_EASE, duration: ANIMATION_DURATION },
  },
  hover: {
    opacity: 1,
    transition: { ease: ANIMATION_EASE, duration: ANIMATION_DURATION },
  },
};

const ArrowSlideAnimation = ({ children }: PropsWithChildren) => {
  return (
    <motion.div initial="rest" whileHover="hover" animate="rest" className="relative">
      <motion.div className="absolute top-0.5" aria-hidden variants={arrowAnimation}>
        <Arrow className="h-5 w-5" />
      </motion.div>
      <motion.div className="" variants={contentAnimation}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ArrowSlideAnimation;
