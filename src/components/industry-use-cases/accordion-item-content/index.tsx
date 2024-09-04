"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState, useRef, useEffect, useCallback } from "react";
import Image from "next/image";
import InfoTooltip from "@/components/info-tooltip";
import RevealLines from "@/components/animations/reveal-lines";
import { usePrevious } from "@uidotdev/usehooks";
import useMediaQuery from "@/hooks/use-media-query";
import DesktopChart from "../desktop-chart";

export interface AccordionItemContentType {
  ecosystem: {
    content1: React.ReactElement;
    content2: React.ReactElement;
    content3: React.ReactElement;
    image1: {
      src: string;
      width: number;
      height: number;
    };
    image2: {
      src: string;
      width: number;
      height: number;
    };
    image3: {
      src: string;
      width: number;
      height: number;
    };
    imageText: React.ReactNode;
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
  dependencies: { content1: React.ReactElement; chartData: [number, number][] };
  impacts: {
    content1: React.ReactElement;
    image1: {
      src: string;
      width: number;
      height: number;
    };
    list: {
      title: string;
      text: string;
    }[];
  };
}

export interface AccordionItemsContentType {
  constructions: AccordionItemContentType;
  tourism: AccordionItemContentType;
  food: AccordionItemContentType;
}

const EcosystemTabContent = ({
  data,
}: {
  data: AccordionItemContentType["ecosystem"];
  open: boolean;
}) => {
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
    content3,
    insights,
  } = data;
  return (
    <TabsContent
      value="ecosystem"
      // `forceMount` and the class `data-[state=inactive]:hidden` are used together to make sure
      // there are not scroll jumps when switching from one tab to another so that we can
      // programmatically scroll to the top of the tab
      className="flex flex-col gap-y-10 text-black data-[state=inactive]:hidden"
      forceMount
    >
      <div className="mt-5 flex flex-col gap-6 px-6 lg:gap-5 lg:px-0">{content1}</div>
      <div className="px-6 lg:px-0">
        <Image
          className="min-h-[388px] object-cover max-lg:w-full"
          src={image1.src}
          alt=""
          width={image1.width}
          height={image1.height}
        />
        <div className="flex w-full -translate-y-[71px] justify-end text-white">
          <div className="flex max-w-[724px] flex-col gap-5 bg-black p-6 lg:p-10">{imageText}</div>
        </div>
      </div>
      <div className="relative -mt-[71px] flex flex-col justify-between gap-10 text-pretty tracking-tight sm:gap-0 lg:flex-row lg:items-end lg:gap-4">
        <div className="max-w-[395px] px-6 lg:px-0">{content2}</div>
        <Image
          src={image2.src}
          alt=""
          className="translate-x-8 self-end sm:-mt-32 lg:mt-0 lg:translate-x-0"
          width={image2.width}
          height={image2.height}
        />
      </div>
      <div>
        <div className="flex flex-col gap-5 bg-orange px-6 py-[40px] lg:p-[50px]">
          <div className="max-w-[642px] text-2xl lg:text-4xl xl:max-w-none">
            Many industries rely directly or indirectly on {industriesRelyOnText}.
          </div>
          <div className="flex flex-col gap-6 border-t border-t-black/20 pt-5 md:flex-row md:gap-11 md:pt-8 lg:flex-col lg:pt-5 xl:flex-row xl:pt-8">
            <div className="flex flex-1 flex-col">
              <div className="mb-[10px] font-bold">
                Industry that directly relies on {industriesRelyOnText}
              </div>
              <ul className="flex flex-col gap-4 py-[10px]">
                {directIndustries.map(({ title, tooltip }) => (
                  <li key={title} className="flex items-start justify-between">
                    {title}
                    <InfoTooltip content={tooltip} className="group-hover:fill-orange-hover" />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-1 flex-col">
              <div className="mb-[10px] font-bold">
                Industry that indirectly relies on {industriesRelyOnText}
              </div>
              <ul className="flex flex-col gap-4 py-[10px]">
                {indirectIndustries.map(({ title, tooltip }) => (
                  <li key={title} className="flex items-start justify-between">
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
          src={image3.src}
          alt=""
          width={image3.width}
          height={image3.height}
        />
      </div>
      <div className="mx-6 mb-10 flex max-w-[831px] gap-6 lg:mx-0 lg:mb-0">
        <div className="w-1.5 self-stretch bg-orange" />
        <div className="w-[654px]">{content3}</div>
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

const DependenciesTabContent = ({
  data,
  open,
}: {
  data: AccordionItemContentType["dependencies"];
  open: boolean;
}) => {
  const { content1, chartData } = data;

  const [width, setWidth] = useState<number>(836);
  const chartContainerRef = useRef<HTMLDivElement>(null);

  const isDesktop = useMediaQuery("(min-width: 1024px)", true);

  useEffect(() => {
    const resizeHandler = () => {
      if (chartContainerRef.current) {
        setWidth(chartContainerRef.current.offsetWidth);
      }
    };

    if (open) {
      resizeHandler();
    }

    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, [open]);

  return (
    <TabsContent
      value="dependencies"
      // `forceMount` and the class `data-[state=inactive]:hidden` are used together to make sure
      // there are not scroll jumps when switching from one tab to another so that we can
      // programmatically scroll to the top of the tab
      className="flex flex-col gap-y-10 pb-10 text-black data-[state=inactive]:hidden lg:pb-0"
      forceMount
    >
      <div className="mt-5 flex flex-col gap-6 px-6 lg:gap-5 lg:px-0">{content1}</div>
      <div className="px-6 lg:px-0">
        <div ref={chartContainerRef} className="relative w-full">
          {(chartData.length === 0 || !isDesktop) && (
            <>
              <Image
                className="mx-6 w-[calc(100%-48px)] max-lg:object-contain max-lg:pb-10 max-lg:pt-12 lg:mx-0 lg:min-h-[388px] lg:w-full"
                src="/assets/industry-cases-construction-dependencies-wip.png"
                alt=""
                width={830}
                height={583}
              />
              <div className="absolute inset-0 left-12 top-1/2 h-fit w-full -rotate-12 text-3xl">
                Interactive chart coming soon
              </div>
            </>
          )}
          {chartData.length > 0 && isDesktop && <DesktopChart width={width} data={chartData} />}
        </div>
      </div>
    </TabsContent>
  );
};

const ImpactsTabContent = ({
  data,
}: {
  data: AccordionItemContentType["impacts"];
  open: boolean;
}) => {
  const { content1, image1, list } = data;
  return (
    <TabsContent
      value="impacts"
      // `forceMount` and the class `data-[state=inactive]:hidden` are used together to make sure
      // there are not scroll jumps when switching from one tab to another so that we can
      // programmatically scroll to the top of the tab
      className="flex flex-col gap-y-10 text-black data-[state=inactive]:hidden"
      forceMount
    >
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
          src={image1.src}
          alt=""
          width={image1.width}
          height={image1.height}
        />
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
  const handleTabChange = useCallback((value: string) => {
    setTab(value as TabKeys);
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const isDesktopLg = useMediaQuery("(min-width: 1024px)", false);
  const isDesktopXl = useMediaQuery("(min-width: 1280px)", false);

  // Scroll to the top of the accordion's content when the accordion is expanded or its active tab
  // is changed
  useEffect(() => {
    if (!isDesktopLg) {
      return;
    }

    // `previousTab` is `null` when the accordion is expanded and has a value when the user switched
    // tab
    if (previousTab === null) {
      // The accordion expand/collapse in 200ms so the timeout must be at least 200ms
      setTimeout(() => containerRef.current?.scrollIntoView({ behavior: "smooth" }), 250);
    } else {
      const { top } = containerRef.current?.getBoundingClientRect() ?? { top: 0 };
      // The `210` and `198` values match the `top` values of the the `TabList`'s container below
      const scroll = top - (isDesktopXl ? 210 : 198);
      window.scrollBy({ top: scroll, behavior: "instant" });
    }
  }, [isDesktopLg, isDesktopXl, tab, previousTab]);

  return (
    <div className="flex w-full flex-col lg:scroll-mt-[200px]" ref={containerRef}>
      <Tabs value={tab} onValueChange={handleTabChange} className="relative">
        <div className="z-20 mb-[20px] bg-white min-[585px]:top-[271px] lg:sticky lg:top-[198px] lg:mb-5 lg:pt-6 xl:top-[210px]">
          <TabsList className="mx-6 flex-col rounded-[26px] md:flex-row lg:mx-0">
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
        <EcosystemTabContent data={ecosystem} open={tab === "ecosystem"} />
        <DependenciesTabContent data={dependencies} open={tab === "dependencies"} />
        <ImpactsTabContent data={impacts} open={tab === "impacts"} />
      </Tabs>
    </div>
  );
};

export default AccordionItemContent;
