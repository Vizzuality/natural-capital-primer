import { motion, AnimatePresence } from "framer-motion";
import { useRef, FC, Children, cloneElement, isValidElement, useEffect, useState } from "react";
import { useSplitText } from "./use-split-text";
import { cn } from "@/lib/utils";

interface RevealLinesProps {
  children: React.ReactNode;
  splitChars?: boolean;
  delay?: number;
  duration?: number;
}

const isReactElement = (child: React.ReactNode): child is React.ReactElement => {
  return isValidElement(child);
};

// Receives only one node ('div', 'p', ...) containing a string value and animates it line by line or char by char
const RevealLines: FC<RevealLinesProps> = ({
  children,
  splitChars = false,
  delay = 0.1,
  duration = 0.4,
}) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const childrenRef = useRef<HTMLDivElement[]>([]);

  const childElements = Children.toArray(children).filter(isReactElement);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const { lines, lineHeight } = useSplitText(
    childElements[0].props.children as string,
    childrenRef,
    windowWidth,
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
      <motion.div
        style={{ height: splitChars ? lineHeight : totalHeight }}
        whileInView={splitChars ? "start" : undefined}
        viewport={{ once: true }}
        className={cn({
          "overflow-hidden": splitChars,
        })}
        variants={splitChars ? item : undefined}
        initial={splitChars ? { y: lineHeight } : undefined}
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
        {/* Div created just to get the refs to calculate the children lines and lineHeight */}
        <div className="invisible h-0" aria-hidden="true">
          {childElements.map((child, index) =>
            cloneElement(child as React.ReactElement, {
              ref: (ref: HTMLDivElement) => (childrenRef.current[index] = ref),
            }),
          )}
        </div>
        {splittedText.map((text, index) => (
          <span
            key={`text-${text}-${index}`}
            className={cn("overflow-hidden", {
              block: !splitChars,
              "inline-block": splitChars,
            })}
            style={{ height: `${lineHeight}px` }}
          >
            <motion.div
              key={index}
              whileInView="start"
              // Only show the effect once
              viewport={{ once: true }}
              initial={{ y: lineHeight }}
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
