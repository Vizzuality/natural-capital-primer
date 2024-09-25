import { FC } from "react";
import Image from "next/image";
import RevealLines from "@/components/animations/reveal-lines";
import { IndustryUseCasesTabContent } from "./types";
import { cn } from "@/lib/utils";
import Parallax from "@/components/animations/parallax";

const ImpactsTab: FC<IndustryUseCasesTabContent["impacts"]> = ({ content1, image1, list }) => {
  return (
    <>
      <div className="mt-5 flex flex-col gap-6 lg:items-center lg:gap-5">{content1}</div>
      <div className="mt-10 lg:mt-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {list.map(({ title, text }, index) => (
            <div key={title} className="flex flex-col gap-y-6 lg:gap-y-10">
              <div>
                <RevealLines splitChars>
                  <p className="text-4.2xl text-green-500 lg:text-5xl">
                    {(index + 1).toString().padStart(2, "0")}
                  </p>
                </RevealLines>
                <h4 className="text-lg lg:text-xl">{title}</h4>
              </div>
              <p className="max-w-[475px] flex-grow lg:min-h-[170px] lg:flex-grow-0">{text}</p>
            </div>
          ))}
          <div
            className={cn({
              "lg:col-span-2": list.length % 3 === 0 || list.length % 3 === 1,
            })}
          >
            <Parallax heightClasses="min-h-[403px] lg:h-full" containerHeightPercentageMobile={200}>
              <Image
                className="h-auto w-full max-w-none object-cover object-center"
                src={image1.src}
                alt=""
                width={image1.width}
                height={image1.height}
              />
            </Parallax>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImpactsTab;
