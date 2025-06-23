import Image from "next/image";

import { RichText } from "@/components/rich-text";
import CaseStudiesKeyInsights from "@/components/case-studies/key-insights";
import { isMediaImage } from "@/lib/utils";
import RelatedCaseStudy from "@/components/case-studies/related-case-study";
import ScrollDownToDiscover from "@/components/scroll-down-to-discover";
import Footer from "@/components/footer";
import LearnMoreButton from "@/components/case-studies/learn-more-button";

import "../page.css"; // Import global styles
import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getCaseStudies, getCaseStudy } from "@/cms/service/case-studies";
import { extractTextFromCaseStudyIntroduction } from "./utils";

export async function generateStaticParams() {
  const caseStudies = await getCaseStudies();

  return caseStudies.map((cs) => ({
    slug: cs.id,
  }));
}

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const slug = (await params).slug;

  // fetch post information
  const caseStudy = await getCaseStudy(slug);
  const description = extractTextFromCaseStudyIntroduction(caseStudy?.introduction);

  return {
    title: caseStudy?.title,
    description,
  };
}

const CaseStudiesPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  const caseStudy = await getCaseStudy(slug);

  const caseStudies = await getCaseStudies();

  if (!caseStudy) {
    notFound();
  }

  const image = isMediaImage(caseStudy?.image) ? caseStudy.image : null;

  const relatedCaseStudies = caseStudies.filter((cs) => cs.id !== caseStudy.id).slice(0, 3);

  return (
    <div>
      <div
        className="case-study mx-auto mt-[174px] max-w-7xl space-y-20 px-6 text-xl lg:px-20"
        style={
          {
            // declare case study color css variable
            "--case-study-color": caseStudy.color || "#f0f0f0",
          } as React.CSSProperties
        }
      >
        <div className="relative">
          <h1 className="mb-10 text-5xl font-medium">{caseStudy.title}</h1>
          <RichText data={caseStudy.introduction} />
          <ScrollDownToDiscover />
        </div>
        <div className="pb-16">
          <div className="absolute left-0 h-[520px] w-full bg-[var(--case-study-color)] sm:min-h-[60vh]"></div>
          <div className="relative right-0 top-16 z-10 h-[547px] w-[calc(100vw-60px)] overflow-hidden sm:min-h-[62vh]">
            <Image
              src={image?.url || ""}
              alt={image?.alt || "Case Study Image"}
              width={1180}
              height={547}
              priority
              className="h-auto w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-20">
          {caseStudy.content.map((content) => {
            return <RichText key={content.id} data={content.content} />;
          })}
        </div>
        <div className="flex border-t-2 border-[var(--case-study-color)] py-6">
          <h4 className="flex-1 shrink-0 text-[var(--case-study-color)]">Key insights</h4>
          <ul className="flex-[2.5] divide-y divide-dashed">
            {caseStudy.key_insights?.map((insight) => (
              <CaseStudiesKeyInsights key={insight.id} keyInsight={insight.insight} />
            ))}
          </ul>
        </div>
        <div className="border-t-2 border-[var(--case-study-color)] py-6 pb-[84px]">
          <h2>
            See <span className="text-[var(--case-study-color)]">Related Case Studies</span>
          </h2>
          {!!relatedCaseStudies.length && (
            <div className="grid grid-cols-3 gap-10 pt-20">
              {relatedCaseStudies.map((cs) => (
                <RelatedCaseStudy key={cs.id} caseStudy={cs} />
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="bg-orange-500">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-20 lg:px-20">
          <h2 className="max-w-[860px] text-center">
            Learn more about Natural Capital, Climate & Biodiversity
          </h2>
          <LearnMoreButton />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudiesPage;
