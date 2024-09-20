import { FC } from "react";
import Image from "next/image";
import InfoTooltip from "@/components/info-tooltip";
import { IndustryUseCasesTabContent } from "./types";

const EcosystemTab: FC<IndustryUseCasesTabContent["ecosystem"]> = ({
  content1,
  content2,
  content3,
  image1,
  image2,
  image3,
  imageText,
  industriesRelyOnText,
  directIndustries,
  indirectIndustries,
  insights,
}) => {
  return (
    <>
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
    </>
  );
};

export default EcosystemTab;
