"use client";

import Info from "@/svgs/info.svg";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const InfoTooltip = ({
  title,
  content,
  className,
}: {
  title?: string;
  content: string;
  className?: string;
}) => {
  const [tooltipOpen, setTooltipOpen] = useState(true);

  return (
    <TooltipProvider>
      <Tooltip delayDuration={0} open={tooltipOpen} onOpenChange={setTooltipOpen}>
        <TooltipTrigger className="group rounded-full ring-offset-transparent focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-black focus-visible:ring-offset-1">
          <Info aria-label="Info" className={className} />
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
