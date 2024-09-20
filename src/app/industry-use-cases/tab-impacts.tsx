import { FC } from "react";
import Image from "next/image";
import RevealLines from "@/components/animations/reveal-lines";
import { IndustryUseCasesTabContent } from "./types";

const ImpactsTab: FC<IndustryUseCasesTabContent["impacts"]> = ({ content1, image1, list }) => {
  return (
    <>
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
    </>
  );
};

export default ImpactsTab;
