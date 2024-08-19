import { motion, AnimatePresence } from "framer-motion";
import Correct from "@/svgs/correct.svg";
import Wrong from "@/svgs/wrong.svg";

const AnsweredAnimationMobile = ({
  visible,
  isRight = false,
}: {
  visible: boolean;
  isRight: boolean;
}) => {
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="answered-animation-mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0 z-50 flex h-full w-full items-center justify-center bg-black/90 lg:hidden"
        >
          <div className="relative flex w-[110px] items-center justify-center text-center text-white">
            <motion.div
              className="absolute -top-[44px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              {isRight ? <Correct /> : <Wrong />}
            </motion.div>
            <motion.span
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.1, type: "spring", bounce: 0.15, damping: 15 }}
            >
              {isRight ? "The answer was correct!" : "Don’t worry! We will help you."}
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AnsweredAnimationMobile;
