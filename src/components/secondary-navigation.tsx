"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { cva, VariantProps } from "class-variance-authority";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";

const navVariants = cva("flex justify-end", {
  variants: {
    variant: {
      default: "gap-x-7",
      condensed: "gap-x-5",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface StickyNavItem {
  key: string;
  value: string;
}

export type StickyNavProp = {
  title: string;
  items: StickyNavItem[];
  activeItem: StickyNavItem["key"] | null;
} & VariantProps<typeof navVariants>;

const NAVIGATION_ANIMATION_DURATION = 0.3;
const NAVIGATION_EASING_FUNCTION = "easeOut";
const NAVIGATION_VARIANTS = {
  visible: { y: 0 },
  hidden: { y: "-53px" },
};

const MotionButton = motion(Button);

const SecondaryNavigation: FC<StickyNavProp> = ({ title, items, activeItem, variant }) => {
  const [visible, setVisible] = useState(true);
  const { scrollY } = useScroll();
  const previousScrollYRef = useRef(0);

  useMotionValueEvent(scrollY, "change", (value) => {
    if (value < previousScrollYRef.current) {
      setVisible(true);
    } else if (value > 106 && value > previousScrollYRef.current) {
      setVisible(false);
    }

    previousScrollYRef.current = value;
  });

  return (
    <motion.div
      className="hidden w-full border-b border-b-black xl:fixed xl:top-[53px] xl:z-40 xl:block xl:bg-white"
      variants={NAVIGATION_VARIANTS}
      animate={visible ? "visible" : "hidden"}
      transition={{
        ease: NAVIGATION_EASING_FUNCTION,
        duration: NAVIGATION_ANIMATION_DURATION,
      }}
    >
      <div className="mx-auto flex h-[52px] max-w-7xl items-stretch justify-between gap-x-5 px-20">
        <div className="flex flex-grow items-stretch text-xl">
          <AnimatePresence>
            {!visible && (
              <MotionButton
                type="button"
                variant="transparent"
                size="auto"
                className="text-[24px] font-bold leading-[36px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {title}
              </MotionButton>
            )}
          </AnimatePresence>
        </div>
        <ul role="navigation" aria-label="Page navigation" className={cn(navVariants({ variant }))}>
          {items.map(({ key, value }) => (
            <li key={key}>
              <Link
                href={`#${key}`}
                className={cn(
                  "flex h-full items-center border-b-2 text-sm transition-colors hover:text-grey-300",
                  {
                    "border-b-black": key === activeItem,
                    "border-b-transparent": key !== activeItem,
                  },
                )}
              >
                {value}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default SecondaryNavigation;
