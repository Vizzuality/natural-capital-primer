"use client";
import { FC } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedUnderlineProps {
  children: React.ReactNode;
  className?: string;
}

const AnimatedUnderline: FC<AnimatedUnderlineProps> = ({ children, className }) => {
  return (
    <motion.div className={cn("group relative", className)}>
      {children}
      <motion.div className="absolute bottom-0 left-0 -mt-0.5 h-px w-full origin-left -translate-y-0.5 scale-x-0 transform bg-white transition-transform group-hover:scale-x-100" />
    </motion.div>
  );
};

export default AnimatedUnderline;
