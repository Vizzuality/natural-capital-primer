"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import InfoTooltip from "@/components/info-tooltip";
import RevealLines from "@/components/animations/reveal-lines";
import { usePrevious } from "@uidotdev/usehooks";
import useMediaQuery from "@/hooks/use-media-query";

export interface AccordionItemContentType {
  ecosystem: {
    content1: React.ReactElement;
    content2: React.ReactElement;
    image1: string;
    image2: string;
    image3: string;
    imageText: string;
    industriesRelyOnText: string;
    directIndustries: {
      title: string;
      tooltip: string;
    }[];
    indirectIndustries: {
      title: string;
      tooltip: string;
    }[];
    insights: string[];
  };
  dependencies: { content1: React.ReactElement };
  impacts: {
    content1: React.ReactElement;
    content2: React.ReactElement;
    image1: string;
    list: {
      title: string;
      text: string;
    }[];
  };
}

export interface AccordionItemsContentType {
  constructions: AccordionItemContentType;
  food: AccordionItemContentType;
}

const EcosystemTabContent = ({ data }: { data: AccordionItemContentType["ecosystem"] }) => {
  const {
    content1,
    image1,
    imageText,
    content2,
    image2,
    industriesRelyOnText,
    directIndustries,
    indirectIndustries,
    image3,
    insights,
  } = data;
  return (
    <TabsContent value="ecosystem" className="flex flex-col gap-y-10 text-black">
      <div className="mt-5 flex flex-col gap-6 px-6 lg:gap-5 lg:px-0">{content1}</div>
      <div className="px-6 lg:px-0">
        <Image
          className="min-h-[388px] object-cover max-lg:w-full"
          src={image1}
          alt=""
          width={685}
          height={388}
        />
        <div className="flex w-full -translate-y-[71px] justify-end text-white">
          <div className="max-w-[724px] bg-black p-6 lg:p-10">{imageText}</div>
        </div>
      </div>
      <div className="relative -mt-[71px] flex flex-col justify-between gap-10 text-pretty tracking-tight lg:flex-row lg:items-end lg:gap-4">
        <div className="max-w-[395px] px-6 lg:px-0">{content2}</div>
        <Image
          src={image2}
          alt=""
          className="translate-x-8 self-end lg:translate-x-0"
          width={373}
          height={375}
        />
      </div>
      <div>
        <div className="flex flex-col gap-5 bg-orange px-6 py-[40px] lg:p-[50px]">
          <div className="max-w-[642px] text-2xl lg:text-4xl">
            Many industries rely directly or indirectly on {industriesRelyOnText}.
          </div>
          <div className="flex flex-col flex-wrap gap-6 border-t border-t-black/20 pt-[20px] lg:flex-row lg:gap-11 lg:pt-[30px]">
            <div className="flex min-w-full flex-col lg:min-w-[344px]">
              <div className="mb-[10px] font-bold">
                Industry that directly relies on {industriesRelyOnText}
              </div>
              <ul className="flex flex-col gap-4 py-[10px]">
                {directIndustries.map(({ title, tooltip }) => (
                  <li key={title} className="flex justify-between">
                    {title}
                    <InfoTooltip content={tooltip} className="group-hover:fill-orange-hover" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex min-w-full flex-col lg:min-w-[344px]">
              <div className="mb-[10px] font-bold">Industry that indirectly relies on forests</div>
              <ul className="flex flex-col gap-4 py-[10px]">
                {indirectIndustries.map(({ title, tooltip }) => (
                  <li key={title} className="flex justify-between">
                    {title}
                    <InfoTooltip content={tooltip} className="group-hover:fill-orange-hover" />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <Image
          className="min-h-[300px] w-full object-cover"
          src={image3}
          alt=""
          width={871}
          height={300}
        />
      </div>
      <div className="mb-10 flex flex-grow flex-col gap-10 px-6 lg:mb-0 lg:px-0">
        <div className="flex items-center gap-3">
          <h2>Key insights</h2>
          <div className="grow border-t border-t-grey-500"></div>
        </div>
        <ol className="flex max-w-[540px] list-decimal-leading-zero flex-col gap-y-6 pl-9 lg:gap-y-5">
          {insights.map((insight) => (
            <li key={insight}>{insight}</li>
          ))}
        </ol>
      </div>
    </TabsContent>
  );
};

const DependenciesTabContent = ({ data }: { data: AccordionItemContentType["dependencies"] }) => {
  const { content1 } = data;

  return (
    <TabsContent value="dependencies" className="flex flex-col text-black lg:gap-y-10">
      <div className="mt-5 flex flex-col gap-6 px-6 lg:gap-5 lg:px-0">{content1}</div>
      {/* WIP image and text. Replace with chart */}
      <div className="relative w-full">
        <Image
          className="mx-6 min-h-[388px] w-[calc(100%-48px)] max-lg:object-contain lg:mx-0 lg:w-full"
          src="/assets/industry-cases-construction-dependencies-wip.png"
          alt=""
          width={830}
          height={583}
        />
        <div className="absolute inset-0 left-12 top-1/2 h-fit w-full -rotate-12 text-3xl">
          Interactive chart coming soon
        </div>
      </div>
    </TabsContent>
  );
};

const ImpactsTabContent = ({ data }: { data: AccordionItemContentType["impacts"] }) => {
  const { content1, content2, image1, list } = data;
  return (
    <TabsContent value="impacts" className="flex flex-col gap-y-10 text-black">
      <div className="mt-5 flex flex-col gap-6 px-6 lg:gap-5 lg:px-0">{content1}</div>
      <div className="mx-6 lg:mx-0">
        <ul className="flex flex-col gap-6 bg-orange px-6 py-[40px] lg:gap-20 lg:p-[50px]">
          {list.map(({ title, text }, index) => (
            <li key={title} className="flex flex-col gap-3 lg:gap-10">
              <div className="flex flex-col gap-3 lg:gap-2">
                <RevealLines splitChars>
                  <div className="text-[52px] leading-9 lg:text-5xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                </RevealLines>
                <RevealLines>
                  <h3 className="max-w-[642px] text-2xl lg:text-4xl">{title}</h3>
                </RevealLines>
              </div>
              <RevealLines>
                <div className="max-w-[642px]">{text}</div>
              </RevealLines>
            </li>
          ))}
        </ul>
        <Image
          className="min-h-[403px] w-full object-cover"
          src={image1}
          alt=""
          width={831}
          height={403}
        />
      </div>
      <div className="mx-6 mb-10 flex max-w-[831px] gap-6 lg:mx-0 lg:mb-0">
        <div className="w-1.5 self-stretch bg-orange" />
        <div className="w-[654px]">{content2}</div>
      </div>
    </TabsContent>
  );
};

type TabKeys = "ecosystem" | "dependencies" | "impacts";

const AccordionItemContent = ({
  ecosystem,
  dependencies,
  impacts,
}: {
  ecosystem: AccordionItemsContentType["constructions"]["ecosystem"];
  dependencies: AccordionItemsContentType["constructions"]["dependencies"];
  impacts: AccordionItemsContentType["constructions"]["impacts"];
}) => {
  const [tab, setTab] = useState<TabKeys>("ecosystem");
  const previousTab = usePrevious(tab);
  const handleTabChange = (value: string) => {
    setTab(value as TabKeys);
  };

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDesktop = useMediaQuery("(min-width: 1024px)", false);

  // Scroll to the top of the accordion's content when the accordion is expanded or its active tab
  // is changed
  useEffect(() => {
    const scrollTop = () => containerRef.current?.scrollIntoView({ behavior: "smooth" });

    if (!isDesktop) {
      return;
    }

    // `previousTab` is `null` when the accordion is expanded and has a value when the user switched
    // tab
    if (previousTab === null) {
      // The accordion expand/collapse in 200ms so the timeout must be at least 200ms
      setTimeout(scrollTop, 250);
    } else {
      setTimeout(scrollTop, 0);
    }
  }, [isDesktop, tab, previousTab]);

  return (
    <div className="flex w-full flex-col lg:scroll-mt-[200px]" ref={containerRef}>
      <Tabs value={tab} onValueChange={handleTabChange} className="relative">
        <div className="z-20 mb-[20px] bg-white min-[585px]:top-[271px] lg:sticky lg:top-[198px] lg:mb-5 lg:pt-6 xl:top-[210px]">
          <TabsList className="mx-6 flex-col rounded-[26px] lg:mx-0 lg:flex-row">
            <TabsTrigger value="ecosystem" className="w-full">
              Ecosystem
            </TabsTrigger>
            <TabsTrigger value="dependencies" className="w-full">
              Dependencies
            </TabsTrigger>
            <TabsTrigger value="impacts" className="w-full">
              Impacts
            </TabsTrigger>
          </TabsList>
        </div>
        <EcosystemTabContent data={ecosystem} />
        <DependenciesTabContent data={dependencies} />
        <ImpactsTabContent data={impacts} />
      </Tabs>
    </div>
  );
};

export default AccordionItemContent;
