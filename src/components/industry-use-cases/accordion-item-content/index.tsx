"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import Image from "next/image";
import InfoTooltip from "@/components/info-tooltip";

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
  dependencies: unknown;
  impacts: unknown;
}

export interface AccordionItemsContentType {
  constructions: AccordionItemContentType;
  food: AccordionItemContentType;
}

const AccordionItemContent = ({
  ecosystem,
}: {
  ecosystem: AccordionItemsContentType["constructions"]["ecosystem"];
  dependencies: AccordionItemsContentType["constructions"]["dependencies"];
  impacts: AccordionItemsContentType["constructions"]["impacts"];
}) => {
  const [tab, setTab] = useState("ecosystem");
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
  } = ecosystem;
  return (
    <div className="flex w-full flex-col">
      <Tabs value={tab} onValueChange={setTab}>
        <TabsList className="mg:px-0 mx-6 mb-[20px] flex-col rounded-[26px] lg:mb-5 lg:flex-row">
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
                        <InfoTooltip content={tooltip} />
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex min-w-full flex-col lg:min-w-[344px]">
                  <div className="mb-[10px] font-bold">
                    Industry that indirectly relies on forests
                  </div>
                  <ul className="flex flex-col gap-4 py-[10px]">
                    {indirectIndustries.map(({ title, tooltip }) => (
                      <li key={title} className="flex justify-between">
                        {title}
                        <InfoTooltip content={tooltip} />
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
      </Tabs>
    </div>
  );
};

export default AccordionItemContent;
