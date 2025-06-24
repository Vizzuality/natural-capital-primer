import { CaseStudy } from "@/payload-types";

export const extractTextFromCaseStudyIntroduction = (
  caseStudyIntroduction?: CaseStudy["introduction"],
) => {
  try {
    return (
      caseStudyIntroduction?.root?.children.reduce((acc, curr) => {
        if (curr.type !== "paragraph") return acc;
        const text =
          curr.children && Array.isArray(curr.children)
            ? curr?.children?.map((child) => {
                if (child.children && Array.isArray(child.children)) {
                  return (
                    child.children
                      .map((grandChild: { text?: string }) => grandChild.text)
                      ?.join("") || ""
                  );
                } else if (typeof child.text === "string") {
                  return child.text || "";
                }
                return "";
              })
            : [];
        return acc + (text ? text.join(" ") : "");
      }, "") || ""
    );
  } catch (error) {
    console.error("Error extracting text from case study introduction:", error);
    return "";
  }
};
