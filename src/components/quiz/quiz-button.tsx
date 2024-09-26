import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ForwardedRef, forwardRef } from "react";
import Check from "@/svgs/check.svg";
import { AnimatePresence, motion } from "framer-motion";

export interface QuizButtonProps {
  children: React.ReactNode;
  state: "default" | "disabled" | "highlighted";
  color: "green" | "blue" | "orange";
  onClick: () => void;
}

const QuizButton = (
  { children, state, color, onClick }: QuizButtonProps,
  ref: ForwardedRef<HTMLButtonElement>,
) => (
  <Button
    ref={ref}
    type="button"
    variant="outline-white"
    className={cn(
      "flex gap-[10px] border-grey-400 py-[5px] pl-[5px] pr-[15px] hover:border-white",
      {
        "bg-black text-white": state !== "highlighted",
        "bg-green-500 text-black": state === "highlighted" && color === "green",
        "bg-blue-500 text-black": state === "highlighted" && color === "blue",
        "bg-orange-500 text-black": state === "highlighted" && color === "orange",
      },
    )}
    onClick={onClick}
    disabled={state === "disabled"}
  >
    <span
      className={cn("flex h-8 w-8 items-center justify-center rounded-full border", {
        "border-white": state !== "highlighted",
        "text-black": state === "highlighted",
      })}
    >
      <AnimatePresence>
        {state === "highlighted" && (
          <motion.span
            className="rounded-full p-1.5 text-black"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            aria-hidden
          >
            <Check className="h-5 w-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </span>
    {children}
  </Button>
);

export default forwardRef(QuizButton);
