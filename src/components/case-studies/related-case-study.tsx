import Image from "next/image";
import Link from "next/link";

import { isMediaImage } from "@/lib/utils";
import { CaseStudy } from "@/payload-types";

import { RichText } from "../rich-text";

type RelatedCaseStudyProps = {
  caseStudy: CaseStudy;
};
const RelatedCaseStudy = ({ caseStudy }: RelatedCaseStudyProps) => {
  const image = isMediaImage(caseStudy?.image) ? caseStudy.image : null;
  const introduction = {
    ...caseStudy.introduction,
    root: {
      ...caseStudy.introduction.root,
      children: [caseStudy.introduction.root.children?.[0]], // Limit to first paragraph
    },
  };

  return (
    <div className="flex flex-col space-y-9">
      <div>
        <Link className="flex gap-8" href={`/case-studies/${caseStudy.id}`}>
          <div className="shrink-0">
            <Image
              src={image?.url || ""}
              alt={image?.alt || "Case Study Image"}
              width={108}
              height={108}
              priority
              className="h-[108px] w-[108px] object-cover object-center"
            />
          </div>
          <h3 className="border-t-[6px] border-t-[var(--case-study-color)] text-xl">
            {caseStudy.title}
          </h3>
        </Link>
      </div>
      <div className="flex-1 text-base">
        <RichText data={introduction} />
      </div>
      <div>
        <Link
          href={`/case-studies/${caseStudy.id}`}
          className="text-base uppercase underline underline-offset-2"
        >
          See Case study
        </Link>
      </div>
    </div>
  );
};

export default RelatedCaseStudy;
