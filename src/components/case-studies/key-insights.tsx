"use client";

import RevealLines from "../animations/reveal-lines";

type CaseStudiesKeyInsightsProps = {
  keyInsight?: string;
};

const CaseStudiesKeyInsights = ({ keyInsight }: CaseStudiesKeyInsightsProps) => {
  return (
    <li className="py-5 first:pt-0 last:pb-0">
      <RevealLines>
        <p>{keyInsight}</p>
      </RevealLines>
    </li>
  );
};

export default CaseStudiesKeyInsights;
