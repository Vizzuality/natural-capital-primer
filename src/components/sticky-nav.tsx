"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";
import { Button } from "@/components/ui/button";
import { cva, VariantProps } from "class-variance-authority";
import { AnimatePresence, motion } from "framer-motion";

const navVariants = cva("flex justify-end", {
  variants: {
    variant: {
      default: "gap-x-11",
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

const StickyNav: FC<StickyNavProp> = ({ title, items, activeItem, variant }) => {
  return (
    <AnimatePresence>
      {!!activeItem && (
        <motion.div
          className="hidden w-full xl:fixed xl:top-0 xl:z-50 xl:block xl:bg-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-x-5 px-20">
            <div className="flex-grow text-xl">
              <Button
                type="button"
                variant="transparent"
                size="auto"
                onClick={() => window.scrollTo({ top: 0 })}
              >
                {title}
              </Button>
            </div>
            <ul
              role="navigation"
              aria-label="Page navigation"
              className={cn(navVariants({ variant }))}
            >
              {items.map(({ key, value }) => (
                <li key={key}>
                  <Link
                    href={`#${key}`}
                    className={cn("block border-b-2 p-2.5 transition-colors", {
                      "border-b-black text-black": key === activeItem,
                      "border-b-transparent text-black/50": key !== activeItem,
                    })}
                  >
                    {value}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyNav;
