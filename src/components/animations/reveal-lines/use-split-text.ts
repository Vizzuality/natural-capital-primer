import { useEffect, useState, MutableRefObject } from "react";
import ReactDOMServer from "react-dom/server";

const extractWord = (content: string | React.ReactNode) => {
  if (typeof content === "string") {
    return content.split(" ");
  }

  if (Array.isArray(content)) {
    return content
      .map((item) => {
        if (typeof item === "string") {
          return item.split(" ");
        }
        return item;
      })
      .flat();
  }

  return [];
};

export const useSplitText = (
  text: string | React.ReactNode,
  containerRefs: MutableRefObject<HTMLDivElement[]>,
  windowWidth: number,
) => {
  const [lines, setLines] = useState<(string | React.ReactNode)[][]>([]);
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (!containerRefs?.current) return;
    const ref = Array.isArray(containerRefs.current)
      ? containerRefs.current[0]
      : containerRefs.current;

    const words = extractWord(text);
    let tempLine: (string | React.ReactNode)[] = [];
    const tempLines: (string | React.ReactNode)[][] = [];

    // Create a span element to measure text width
    const testSpan = document.createElement("span");
    testSpan.style.visibility = "hidden";
    testSpan.style.whiteSpace = "nowrap";
    ref.appendChild(testSpan);
    const containerWidth = ref.clientWidth;

    words.forEach((word, index) => {
      const isString = typeof word === "string";
      const testLine = [...tempLine, isString ? word + " " : word];

      testSpan.innerHTML = testLine
        .map((item) =>
          typeof item === "string"
            ? item
            : ReactDOMServer.renderToStaticMarkup(item as React.ReactElement),
        )
        .join("");

      if (testSpan.offsetWidth > containerWidth) {
        // Line exceeds container's width, push the current line
        tempLines.push(tempLine);
        tempLine = [isString ? word + " " : word];
      } else {
        // Continue building the line
        tempLine = testLine;
      }

      setLineHeight(parseInt(window.getComputedStyle(testSpan).lineHeight, 10));

      // If it's the last word, push the final line
      if (index + 1 === words.length) {
        tempLines.push(tempLine);
      }
    });

    // Clean up the test span
    ref.removeChild(testSpan);
    setLines(tempLines);
  }, [text, containerRefs, windowWidth]);

  return { lines, lineHeight };
};
