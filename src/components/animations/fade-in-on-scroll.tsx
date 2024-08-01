import { useState } from "react";
import { motion, useMotionValueEvent, useScroll, useTransform } from "framer-motion";

const FadeInOnScroll: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);

  // Transform scrollY value to a boolean indicating whether the page is scrolled
  const isScrolledThreshold = useTransform(scrollY, [0, window.innerHeight], [false, true]);

  const handleIsScrolledChange = (value: boolean) => {
    setIsScrolled(value);
  };

  useMotionValueEvent(isScrolledThreshold, "change", handleIsScrolledChange);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: isScrolled ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default FadeInOnScroll;
