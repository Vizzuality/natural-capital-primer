import { PropsWithChildren } from "react";
import { EasingDefinition, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const ANIMATION_EASE: EasingDefinition = "linear";

const MarqueeAnimation = ({
  children,
  duration = 15,
  className,
}: PropsWithChildren<{ duration?: number; className?: string }>) => {
  return (
    <div className={cn("relative overflow-hidden", className)}>
      <motion.div
        className="relative top-0 w-fit whitespace-nowrap"
        initial={{ left: "100%", transform: "translateX(0%)" }}
        animate={{ left: "0%", transform: "translateX(-100%)" }}
        transition={{
          duration, // Duration of one loop
          repeat: Infinity, // Loop indefinitely
          repeatType: "loop", // Loop type
          ease: ANIMATION_EASE, // Constant speed
        }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default MarqueeAnimation;
