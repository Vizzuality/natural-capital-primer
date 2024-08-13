import { useEffect, useState, MutableRefObject } from "react";

export const useSplitText = (
  text: string,
  containerRefs: MutableRefObject<HTMLDivElement[]>,
  windowWidth: number,
) => {
  const [lines, setLines] = useState<string[]>([]);
  const [lineHeight, setLineHeight] = useState<number>(0);

  useEffect(() => {
    if (typeof text !== "string") {
      console.warn(
        "RevealLines component must have a single child with a react node containing a string value",
      );
      return undefined;
    }

    if (!containerRefs?.current) return;
    const ref = Array.isArray(containerRefs.current)
      ? containerRefs.current[0]
      : containerRefs.current;

    const words = text.split(" ");
    let tempLine = "";
    const tempLines: string[] = [];

    // Create a span element to measure text width
    const testSpan = document.createElement("span");
    testSpan.style.visibility = "hidden";
    testSpan.style.whiteSpace = "nowrap";
    ref.appendChild(testSpan);
    const containerWidth = ref.clientWidth;
    words.forEach((word, index) => {
      const testLine = tempLine + word + " ";
      testSpan.innerText = testLine;
      if (testSpan.offsetWidth > containerWidth) {
        // Line exceeds container's width, push the current line
        tempLines.push(tempLine.trim());
        tempLine = word + " ";
      } else {
        // Continue building the line
        tempLine = testLine;
      }
      setLineHeight(parseInt(window.getComputedStyle(testSpan).lineHeight, 10));
      // If it's the last word, push the final line
      if (index === words.length - 1) {
        tempLines.push(tempLine.trim());
      }
    });

    // Clean up the test span
    ref.removeChild(testSpan);
    setLines(tempLines);
  }, [text, containerRefs, windowWidth]);

  return { lines, lineHeight };
};
