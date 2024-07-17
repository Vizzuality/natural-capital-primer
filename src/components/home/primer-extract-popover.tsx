"use client";

import { Button } from "@/components/ui/button";
import Manual from "@/icons/manual.svg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import useMediaQuery from "@/hooks/use-media-query";
import { Popover, PopoverContent, PopoverPortal, PopoverTrigger } from "@/components/ui/popover";
import Link from "next/link";

const PrimerExtractPopover = () => {
  const [tooltipOpen, setTooltipOpen] = useState(true);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const isMobile = useMediaQuery("not (min-width: 1024px)", false);

  return (
    <TooltipProvider>
      <Popover open={popoverOpen} onOpenChange={setPopoverOpen}>
        <Tooltip delayDuration={0} open={tooltipOpen} onOpenChange={setTooltipOpen}>
          <PopoverTrigger asChild>
            <TooltipTrigger asChild>
              <Button className="pointer-events-auto h-[72px] w-[72px] rounded-full">
                <span className="sr-only">See Primer Extract</span>
                <Manual aria-hidden="true" />
              </Button>
            </TooltipTrigger>
          </PopoverTrigger>
          <AnimatePresence>
            {tooltipOpen && (
              <TooltipContent
                forceMount
                variant="pill"
                size="sm"
                side="left"
                sideOffset={10}
                className="text-xs"
                asChild
              >
                <motion.div
                  initial={{ opacity: 0, x: isMobile ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: isMobile ? -50 : 50 }}
                  transition={{ duration: 0.3 }}
                >
                  From the primer…
                </motion.div>
              </TooltipContent>
            )}
          </AnimatePresence>
          <PopoverPortal forceMount>
            <AnimatePresence>
              {popoverOpen && (
                <PopoverContent
                  forceMount
                  side="top"
                  align={isMobile ? "start" : "end"}
                  sideOffset={44}
                  avoidCollisions={false}
                  asChild
                >
                  <motion.div
                    className="w-[330px] rounded-[30px] bg-gradient-to-b from-green-500 from-50% via-green-500 via-50% to-white to-50%"
                    initial={{ opacity: 0, y: 100 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 100 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="mt-7 px-5">From the Primer</p>
                    <p className="mt-4 px-5 text-2xl">Environmental and Ecosystem Assets Chapter</p>
                    <div className="relative mt-4 overflow-hidden rounded-[20px] bg-white p-5 shadow-lg">
                      <div className="pointer-events-none·absolute·inset-0·top-20·bg-gradient-to-b·from-transparent" />
                      <p>
                        Natural capital assets includes both environmental assets and ecosystem
                        assets. Environmental assets are the individual components of the
                        biophysical environment (e.g. water, minerals, soil, plants, animals) and
                        ecosystem assets are areas of a specific ecosystem type in which individual
                        environmental assets interact and function as a discrete unit
                      </p>
                      <Link
                        href="/key-concepts/assets"
                        className="absolute bottom-5 left-1/2 block -translate-x-1/2 text-center text-xs font-bold uppercase underline"
                      >
                        Discover this Chapter
                      </Link>
                    </div>
                  </motion.div>
                </PopoverContent>
              )}
            </AnimatePresence>
          </PopoverPortal>
        </Tooltip>
      </Popover>
    </TooltipProvider>
  );
};

export default PrimerExtractPopover;
