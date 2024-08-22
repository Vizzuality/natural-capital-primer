import { motion, AnimatePresence } from "framer-motion";
import Correct from "@/svgs/correct.svg";
import Wrong from "@/svgs/wrong.svg";
import { cn } from "@/lib/utils";

const AnsweredAnimationMobile = ({
  visible,
  isRight = false,
  color,
}: {
  visible: boolean;
  isRight: boolean;
  color: "green" | "orange" | "blue";
}) => {
  const animatePathProps = {
    initial: { pathLength: 0 },
    animate: { pathLength: 1 },
    transition: {
      duration: 1,
      ease: "easeIn",
    },
  };
  const strokeColorClass = {
    green: "stroke-green-500",
    orange: "stroke-orange-500",
    blue: "stroke-blue-450",
  };
  const textColorClass = {
    green: "text-green-500",
    orange: "text-orange-500",
    blue: "text-blue-450",
  };
  const textClass = textColorClass[color];
  const strokeClass = isRight ? strokeColorClass[color] : "stroke-red";

  const desktopAnimation = (
    <div className="relative hidden h-[226px] w-[226px] items-center justify-center lg:flex">
      <div className="relative mt-6 flex items-center justify-center text-center text-white">
        <motion.div
          className="absolute -top-[44px] w-[30px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {isRight ? <Correct className={textClass} /> : <Wrong />}
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
      <motion.svg className="absolute left-0 top-0 h-full w-full">
        <motion.path
          className="fill-none stroke-grey-400"
          strokeWidth="3"
          d="M 0, 3 m 110, 0 a 110,110 0 1,1 0,220 a 110,110 0 1,1  1,-220"
        ></motion.path>
        <motion.path
          className={cn("fill-none", strokeClass)}
          {...animatePathProps}
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
        {isRight ? <Correct className={textClass} /> : <Wrong />}
      </motion.div>
      <motion.span
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.1, type: "spring", bounce: 0.15, damping: 15 }}
      >
        {isRight ? "The answer was correct!" : "Don’t worry! We will help you."}
      </motion.span>
    </div>
  );

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="answered-animation-mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-30 flex h-full w-full items-center justify-center bg-black/90"
        >
          {mobileAnimation}
          {desktopAnimation}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnsweredAnimationMobile;
