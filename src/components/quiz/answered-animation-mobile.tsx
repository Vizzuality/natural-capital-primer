import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import Correct from "@/svgs/correct.svg";

const AnsweredAnimationMobile = ({ visible }: { visible: boolean }) => {
  return createPortal(
    <AnimatePresence>
      {visible && (
        <motion.div
          key="answered-animation-mobile"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex h-full w-full items-center justify-center bg-black/90 lg:hidden"
        >
          <div className="relative flex w-[110px] items-center justify-center text-center text-white">
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
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default AnsweredAnimationMobile;
