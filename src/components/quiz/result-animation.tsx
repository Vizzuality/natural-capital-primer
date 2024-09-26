import { motion } from "framer-motion";
import Correct from "@/svgs/correct.svg";
import Wrong from "@/svgs/wrong.svg";
import { cn } from "@/lib/utils";
import { ForwardedRef, forwardRef, useMemo } from "react";

export interface ResultAnimationProps {
  correctAnswers: number;
  totalAnswers: number;
  color: "green" | "blue" | "orange";
}

const ANIMATE_PATH_PROPS = {
  initial: { pathLength: 0 },
  animate: { pathLength: 1 },
  transition: {
    duration: 1,
    ease: "easeIn",
  },
};
const STROKE_COLOR_CLASS: Record<ResultAnimationProps["color"], string> = {
  green: "stroke-green-500",
  orange: "stroke-orange-500",
  blue: "stroke-blue-450",
};
const TEXT_COLOR_CLASS: Record<ResultAnimationProps["color"], string> = {
  green: "text-green-500",
  orange: "text-orange-500",
  blue: "text-blue-450",
};

const ResultAnimation = (
  { correctAnswers, totalAnswers, color }: ResultAnimationProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const passingGrade = useMemo(
    () => correctAnswers / totalAnswers > 0.5,
    [correctAnswers, totalAnswers],
  );

  const textClass = useMemo(() => TEXT_COLOR_CLASS[color], [color]);
  const strokeClass = useMemo(
    () => (passingGrade ? STROKE_COLOR_CLASS[color] : "stroke-red"),
    [color, passingGrade],
  );

  const desktopAnimation = (
    <div className="relative hidden h-[226px] w-[226px] items-center justify-center lg:flex">
      <div className="relative mt-6 flex items-center justify-center text-center text-white">
        <motion.div
          className="absolute -top-[44px] w-[30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {passingGrade ? <Correct className={textClass} /> : <Wrong />}
        </motion.div>
        <motion.span
          className="w-[130px]"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1, type: "spring", bounce: 0.15, damping: 15 }}
        >
          {correctAnswers}/{totalAnswers} of your answers were correct
        </motion.span>
      </div>
      <motion.svg className="absolute left-0 top-0 h-full w-full">
        <motion.path
          className="fill-none stroke-grey-400"
          strokeWidth="3"
          d="M 0, 3 m 110, 0 a 110,110 0 1,1 0,220 a 110,110 0 1,1  1,-220"
        ></motion.path>
        <motion.path
          className={cn("fill-none", strokeClass)}
          {...ANIMATE_PATH_PROPS}
          strokeWidth="3"
          d="M 0, 3 m 110, 0 a 110,110 0 1,1 0,220 a 110,110 0 1,1  1,-220"
        ></motion.path>
      </motion.svg>
    </div>
  );

  const mobileAnimation = (
    <div className="relative flex w-[110px] items-center justify-center text-center text-white lg:hidden">
      <motion.div
        className="absolute -top-[44px]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {passingGrade ? <Correct className={textClass} /> : <Wrong />}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, type: "spring", bounce: 0.15, damping: 15 }}
      >
        {correctAnswers}/{totalAnswers} of your answers were correct
      </motion.span>
    </div>
  );

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-10 flex h-full w-full items-center justify-center bg-black/90"
    >
      {mobileAnimation}
      {desktopAnimation}
    </div>
  );
};

export default forwardRef(ResultAnimation);
