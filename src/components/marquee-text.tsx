"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const MarqueeText = ({
  text,
  className,
  duration = 15,
}: {
  text: string;
  className?: string;
  duration?: number;
}) => {
  return (
    <motion.div
      className={cn("relative inline-block w-fit overflow-hidden whitespace-nowrap", className)}
      initial={{ x: "60%" }} // Start off-screen to the left
      animate={{ x: "-110%" }} // End off-screen to the right
      transition={{
        x: {
          duration, // Duration of one loop
          repeat: Infinity, // Loop indefinitely
          repeatType: "loop", // Loop type
          ease: "linear", // Constant speed
        },
      }}
    >
      {text}
    </motion.div>
  );
};

export default MarqueeText;
