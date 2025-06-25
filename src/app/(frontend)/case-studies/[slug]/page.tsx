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
import { getAppSettings } from "@/cms/service/app-settings";

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

  const enableCaseStudies = await getAppSettings().then(
    (settings) => settings?.enableCaseStudies === "true",
  );

  if (!caseStudy || !enableCaseStudies) {
    notFound();
  }

  const image = isMediaImage(caseStudy?.image) ? caseStudy.image : null;

  const relatedCaseStudies = caseStudies.filter((cs) => cs.id !== caseStudy.id).slice(0, 3);
  // relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-y-10 p-6 pb-0 lg:gap-y-14 lg:px-20 lg:pt-36
  return (
    <div>
      <div
        className="case-study mx-auto max-w-7xl space-y-10 px-6 pt-6 text-xl sm:space-y-20 lg:px-20 lg:pt-36"
        style={
          {
            // declare case study color css variable
            "--case-study-color": caseStudy.color || "#f0f0f0",
          } as React.CSSProperties
        }
      >
        <div className="relative">
          <h1 className="mb-10 text-[52px] font-medium leading-none sm:text-5xl">
            {caseStudy.title}
          </h1>
          <RichText data={caseStudy.introduction} />
          <ScrollDownToDiscover />
        </div>
        <div className="pb-10 sm:pb-16">
          <div className="absolute left-0 h-[300px] w-full bg-[var(--case-study-color)] sm:h-[520px] sm:min-h-[60vh]"></div>
          <div className="relative right-0 top-6 z-10 h-[300px] overflow-hidden sm:top-16 sm:h-[547px] sm:min-h-[62vh] sm:w-[calc(100vw-60px)]">
            <Image
              src={image?.url || ""}
              alt={image?.alt || "Case Study Image"}
              width={1180}
              height={547}
              priority
              className="h-full w-full object-cover object-center"
            />
          </div>
        </div>
        <div className="space-y-10 sm:space-y-20">
          {caseStudy.content.map((content) => {
            return <RichText key={content.id} data={content.content} />;
          })}
        </div>
        <div className="border-t-2 border-[var(--case-study-color)] py-6 sm:flex">
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
            <div className="grid gap-10 pt-10 sm:grid-cols-3 sm:pt-20">
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
