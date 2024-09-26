import { FC } from "react";
import Image from "next/image";
import InfoTooltip from "@/components/info-tooltip";
import { IndustryUseCasesTabContent } from "./types";
import RevealLines from "@/components/animations/reveal-lines";
import Parallax from "@/components/animations/parallax";

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
      <div className="mt-5 flex flex-col gap-6 lg:items-center lg:gap-5">{content1}</div>
      <div className="lg:pt-5">
        <Parallax heightClasses="h-[390px] lg:h-[550px]" containerHeightPercentageMobile={200}>
          <Image
            className="h-auto w-full max-w-none"
            src={image1.src}
            alt=""
            width={image1.width}
            height={image1.height}
          />
        </Parallax>
      </div>
      <div className="relative z-10 -mt-10 bg-black text-white lg:-mt-40 lg:ml-14 lg:w-[calc(100%_-_theme(spacing.14))]">
        <div className="flex flex-col p-6 text-lg lg:p-14 lg:text-xl">{imageText}</div>
      </div>
      <div className="relative mb-10 mt-10 flex flex-col justify-between gap-10 text-pretty tracking-tight sm:gap-0 lg:mb-0 lg:flex-row lg:items-end lg:gap-4">
        <div className="max-w-[395px]">{content2}</div>
        <Image
          src={image2.src}
          alt=""
          className="translate-x-8 self-end sm:-mt-32 lg:mt-0 lg:translate-x-0"
          width={image2.width}
          height={image2.height}
        />
      </div>
      <div className="mb-10 flex flex-col justify-start gap-y-8 border-t-2 border-t-green-500 pt-6 lg:mb-0 lg:mt-10 lg:flex-row lg:items-stretch lg:justify-between lg:gap-x-10 xl:gap-x-40">
        <div className="flex flex-shrink-0 flex-col gap-y-6 lg:w-[475px] xl:gap-y-20">
          <h3 className="text-lg text-green-500 lg:text-xl">
            Many industries rely directly or indirectly on {industriesRelyOnText}.
          </h3>
          <Parallax
            heightClasses="flex-grow lg:h-auto hidden lg:block"
            containerHeightPercentageMobile={200}
          >
            <Image
              className="h-auto w-full max-w-none object-cover"
              src={image3.src}
              alt=""
              width={image3.width}
              height={image3.height}
            />
          </Parallax>
        </div>
        <div className="flex flex-grow flex-col gap-6 lg:gap-11">
          <div className="flex flex-col">
            <div className="mb-[10px] font-bold">
              Industry that directly relies on {industriesRelyOnText}
            </div>
            <ul className="flex flex-col gap-4 py-[10px]">
              {directIndustries.map(({ title, tooltip }) => (
                <li key={title} className="flex items-start justify-between">
                  {title}
                  <InfoTooltip content={tooltip} />
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col">
            <div className="mb-[10px] font-bold">
              Industry that indirectly relies on {industriesRelyOnText}
            </div>
            <ul className="flex flex-col gap-4 py-[10px]">
              {indirectIndustries.map(({ title, tooltip }) => (
                <li key={title} className="flex items-start justify-between">
                  {title}
                  <InfoTooltip content={tooltip} />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-2xl lg:mt-11 lg:text-4xl">{content3}</div>
      <div className="mb-10 flex flex-col justify-start gap-y-4 border-t-2 border-t-green-500 pt-6 lg:mb-0 lg:mt-10 lg:flex-row lg:items-start lg:justify-between lg:gap-x-10">
        <h3 className="flex-shrink-0 text-lg text-green-500 lg:w-[350px] lg:text-xl">
          Key insights
        </h3>
        <ul className="flex flex-grow flex-col gap-y-6 divide-y divide-dashed lg:gap-y-5">
          {insights.map((insight) => (
            <li key={insight} className="pt-5">
              <RevealLines>
                <p className="max-w-[600px]">{insight}</p>
              </RevealLines>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default EcosystemTab;
