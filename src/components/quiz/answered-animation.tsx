import Correct from "@/svgs/correct.svg";
import Wrong from "@/svgs/wrong.svg";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const AnsweredAnimation = ({ isRight = false }: { isRight: boolean }) => {
  const animatePathProps = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  };
  return (
    <div className="relative flex h-[226px] w-[226px] items-center justify-center">
      <div className="flex flex-col items-center">
        <div className="relative mt-6 flex items-center justify-center text-center text-white">
          <motion.div
            className="absolute -top-[44px] w-[30px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {isRight ? <Correct /> : <Wrong />}
          </motion.div>
          <motion.span
            className="w-[130px]"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.1, type: "spring", bounce: 0.15, damping: 15 }}
          >
            {isRight ? (
              <span>
                The answer <br /> was correct!.
              </span>
            ) : (
              <span>
                Don’t worry! <br /> We will help you.
              </span>
            )}
          </motion.span>
        </div>
      </div>
      <motion.svg className="absolute left-0 top-0 h-full w-full">
        <motion.path
          className="fill-none stroke-grey-400"
          strokeWidth="3"
          d="M 0, 3 m 110, 0 a 110,110 0 1,1 0,220 a 110,110 0 1,1  1,-220"
        ></motion.path>
        <motion.path
          className={cn("fill-none", {
            "stroke-green-500": isRight,
            "stroke-red": !isRight,
          })}
          {...animatePathProps}
          strokeWidth="3"
          d="M 0, 3 m 110, 0 a 110,110 0 1,1 0,220 a 110,110 0 1,1  1,-220"
        ></motion.path>
      </motion.svg>
    </div>
  );
};
export default AnsweredAnimation;
