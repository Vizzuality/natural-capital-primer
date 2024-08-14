import Correct from "@/svgs/correct.svg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnsweredAnimation = ({ quizQuestion }: { quizQuestion: number }) => {
  const animatePathProps = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: {
      duration: 0.5,
      ease: "easeIn",
    },
  };
  return (
    <div className="relative flex h-[226px] w-[226px] items-center justify-center">
      <div className="flex flex-col items-center gap-2">
        <div className="relative mt-6 flex w-[110px] items-center justify-center text-center text-white">
          <motion.div
            className="absolute -top-[44px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            <Correct />
          </motion.div>
          <motion.span
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, type: "spring", bounce: 0.15, damping: 15 }}
          >
            The answer was correct!
          </motion.span>
        </div>
      </div>
      <motion.svg className="absolute left-0 top-0 h-full w-full">
        <motion.path
          className={cn("fill-none", {
            "stroke-green-500": quizQuestion === 0,
            "stroke-grey-400": quizQuestion !== 0,
          })}
          {...(quizQuestion === 0 ? animatePathProps : {})}
          strokeWidth="3"
          d="M 113 3 A 110 110 0 0 1 208.26279441628827 168"
        ></motion.path>
        <motion.path
          className={cn("fill-none", {
            "stroke-green-500": quizQuestion === 1,
            "stroke-grey-400": quizQuestion !== 1,
          })}
          strokeWidth="3"
          {...(quizQuestion === 1 ? animatePathProps : {})}
          d="M 208.26279441628827 168  A 110 110 0 0 1 17.73720558371174 168"
        ></motion.path>
        <motion.path
          className={cn("fill-none", {
            "stroke-green-500": quizQuestion === 2,
            "stroke-grey-400": quizQuestion !== 2,
          })}
          strokeWidth="3"
          {...(quizQuestion === 2 ? animatePathProps : {})}
          d="M 17.73720558371174 168 A 110 110 0 0 1 112.99999999999999 3"
        ></motion.path>
      </motion.svg>
    </div>
  );
};
export default AnsweredAnimation;
