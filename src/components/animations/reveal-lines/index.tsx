import { motion, AnimatePresence } from "framer-motion";
import { useRef, FC, Children, cloneElement, isValidElement } from "react";
import { useSplitText } from "./use-split-text";
import { cn } from "@/lib/utils";

interface RevealLinesProps {
  children: React.ReactNode;
  splitChars?: boolean;
  heightOffset?: number;
  delay?: number;
  duration?: number;
}

// Receives only one node ('div', 'p', ...) containing a string value and animates it line by line or char by char
const RevealLines: FC<RevealLinesProps> = ({
  children,
  splitChars = false,
  heightOffset = 0,
  delay = 0.1,
  duration = 0.4,
}) => {
  const childrenRef = useRef<HTMLDivElement[]>([]);

  const isReactElement = (child: React.ReactNode): child is React.ReactElement => {
    return isValidElement(child);
  };
  const childElements = Children.toArray(children).filter(isReactElement);

  const { lines, lineHeight } = useSplitText(
    childElements[0].props.children as string,
    childrenRef,
  );

  const item = {
    start: { y: 0 },
  };

  // Get the className of the first child element
  const className = childElements?.[0].props.className;

  const splittedChars = lines?.[0]?.length ? lines?.[0]?.split("") : lines;
  const splittedText = splitChars ? splittedChars : lines;
  const totalHeight = lineHeight * splittedText.length;

  return (
    <AnimatePresence>
      <div className="invisible h-0" aria-hidden="true">
        {Children.toArray(children)
          .filter((child) => isValidElement(child))
          .map((child, index) =>
            cloneElement(child as React.ReactElement, {
              ref: (ref: HTMLDivElement) => (childrenRef.current[index] = ref),
            }),
          )}
      </div>
      <motion.div
        style={{ height: splitChars ? lineHeight - heightOffset : totalHeight }}
        whileInView={splitChars ? "start" : undefined}
        viewport={{ once: true }}
        className={cn({
          "overflow-hidden": splitChars,
        })}
        variants={splitChars ? item : undefined}
        initial={splitChars ? { y: lineHeight - heightOffset } : undefined}
        transition={
          splitChars
            ? {
                delay,
                duration,
                ease: "easeInOut",
              }
            : undefined
        }
      >
        {splittedText.map((text, index) => (
          <span
            key={index}
            className={cn("overflow-hidden", {
              block: !splitChars,
              "inline-block": splitChars,
            })}
            style={{ height: `${lineHeight - heightOffset}px` }}
          >
            <motion.div
              key={index}
              whileInView="start"
              // Only show the effect once
              viewport={{ once: true }}
              initial={{ y: lineHeight - heightOffset }}
              transition={{
                delay: delay * index,
                duration,
                ease: "easeInOut",
              }}
              variants={item}
              className={className}
            >
              {text}
            </motion.div>
          </span>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};

export default RevealLines;
