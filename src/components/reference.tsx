import {
  Tooltip,
  TooltipArrow,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { REFERENCES } from "@/app/references/data";
import { addPropsToLink, cn } from "@/lib/utils";

export interface ReferenceProps {
  id: number;
  color: "green" | "blue" | "orange" | "pink";
  className?: string;
}

const BG_COLORS: Record<ReferenceProps["color"], string> = {
  green: "bg-green-500",
  blue: "bg-blue-500",
  orange: "bg-orange-500",
  pink: "bg-pink",
};

const TEXT_COLORS: Record<ReferenceProps["color"], string> = {
  green: "text-green-500",
  blue: "text-blue-500",
  orange: "text-orange-500",
  pink: "text-pink",
};

const Reference = ({ id, color, className }: ReferenceProps) => {
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
          <span className="sr-only">Reference </span>
          <sup className={className}>[{id + 1}]</sup>
        </TooltipTrigger>
        <AnimatePresence>
          {tooltipOpen && (
            <TooltipContent
              size="sm"
              className="inline-flex w-[430px] max-w-[100vw] gap-4 rounded-xl border border-black/10 bg-white p-5"
            >
              <div
                className={cn({
                  "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-xs font-bold text-white":
                    true,
                  [BG_COLORS[color]]: true,
                })}
              >
                {id + 1}
              </div>
              <p>
                {addPropsToLink(REFERENCES[id], {
                  className: cn({
                    underline: true,
                    [TEXT_COLORS[color]]: true,
                  }),
                })}
              </p>
              <TooltipArrow width={16} height={8} className="relative -top-px fill-white" />
            </TooltipContent>
          )}
        </AnimatePresence>
      </Tooltip>
    </TooltipProvider>
  );
};

export default Reference;
