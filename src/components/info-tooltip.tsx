"use client";

import Info from "@/svgs/info.svg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const InfoTooltip = ({
  title,
  content,
  className,
  theme = "light",
}: {
  title?: string;
  content: string;
  className?: string;
  theme?: "light" | "dark";
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger
          className="group rounded-full ring-offset-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1"
          onClick={(e) => {
            // Allow touch users to open the tooltips
            e.preventDefault();
            setTooltipOpen(true);
          }}
        >
          <Info
            aria-label="Info"
            className={cn(className, {
              "text-black": theme === "light",
              "text-white": theme === "dark",
            })}
          />
        </TooltipTrigger>
        <AnimatePresence>
          {tooltipOpen && (
            <TooltipContent
              size="sm"
              className="inline-flex min-w-[335px] max-w-[335px] flex-col gap-4 rounded-xl border border-black/10 bg-white p-5"
            >
              {title && <div className="font-bold">{capitalize(String(title))}</div>}
              <div>{content}</div>
            </TooltipContent>
          )}
        </AnimatePresence>
      </Tooltip>
    </TooltipProvider>
  );
};

export default InfoTooltip;
