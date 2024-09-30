import { ForwardedRef, forwardRef } from "react";
import { useTransform, useScroll } from "framer-motion";
import { Button } from "@/components/ui/button";
import { GLOSSARY_TERMS } from "./data";
import { SectionType } from "./data";
import Image from "next/image";
import CaretDown from "@/svgs/caret-down.svg";
import { cn } from "@/lib/utils";
import AudioIconOn from "@/svgs/audio-icon-on.svg";
import AudioIconOff from "@/svgs/audio-icon-off.svg";
import BackgroundVideo from "@/components/bg-video";

import { motion } from "framer-motion";
import useMediaQuery from "@/hooks/use-media-query";

export interface SectionProps {
  id: string;
  data: SectionType;
  inView: boolean;
  soundOn: boolean;
  setSoundOn: (value: boolean) => void;
}

const BACKGROUND_BY_COLOR: Record<SectionType["color"], string> = {
  orange: "bg-orange",
  "orange-dark": "bg-orange-500",
  blue: "bg-blue-500",
  turquoise: "bg-turquoise",
  purple: "bg-purple",
  lime: "bg-lime",
  pink: "bg-pink",
};

const BORDER_BY_COLOR: Record<SectionType["color"], string> = {
  orange: "border-orange",
  "orange-dark": "border-orange-500",
  blue: "border-blue-500",
  turquoise: "border-turquoise",
  purple: "border-purple",
  lime: "border-lime",
  pink: "border-pink",
};

const Section = (
  {
    id,
    data: {
      title,
      mainImageURL,
      videoURL,
      color,
      story,
      question,
      processes,
      glossary,
      importance,
    },
    inView,
    soundOn,
    setSoundOn,
  }: SectionProps,
  ref: ForwardedRef<HTMLDivElement>,
) => {
  const { scrollYProgress } = useScroll({
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    target: ref,
  });

  const isDesktopLg = useMediaQuery("(min-width: 1024px)", false);

  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 8000;

  const imageAnimation = {
    height: useTransform(scrollYProgress, [0, 0.3], [465, 800]),
    width: useTransform(scrollYProgress, [0, 0.3], [1024, windowWidth]),
  };

  return (
    <section id={id} className="relative mb-10" ref={ref}>
      <div className={cn("relative", BACKGROUND_BY_COLOR[color])}>
        <BackgroundVideo src={videoURL} soundOn={soundOn} sectionInView={inView} />
        <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 lg:px-20 lg:pb-16 lg:pt-36">
          <div className="z-10 flex max-w-[826px] flex-col gap-5 lg:gap-10">
            <h2 className="text-2xl lg:text-4.5xl">{title}</h2>
            <div className="inline-flex items-center justify-start gap-3">
              <Button
                type="button"
                variant="transparent"
                className="flex cursor-pointer gap-3 p-0 lg:gap-2"
                onClick={() => setSoundOn(!soundOn)}
              >
                <>
                  {soundOn ? (
                    <AudioIconOff
                      className="h-[52px] w-[52px] rounded-full bg-black lg:h-11 lg:w-11"
                      aria-hidden
                    />
                  ) : (
                    <AudioIconOn
                      className="h-[52px] w-[52px] rounded-full bg-black lg:h-11 lg:w-11"
                      aria-hidden
                    />
                  )}
                  <span>Click to turn sound {soundOn ? "off" : "on"}</span>
                </>
              </Button>
            </div>
          </div>
        </div>
        <div className="relative h-[185px] w-full lg:h-[460px]">
          <motion.div
            className="absolute right-0 top-0 z-10 h-full w-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${mainImageURL})`,
              ...(isDesktopLg ? imageAnimation : {}),
            }}
          />
        </div>
      </div>
      <div className="relative z-10 mx-auto -mt-7 w-full max-w-7xl px-6 lg:mt-[250px] lg:px-20">
        <div className="bg-black p-6 text-lg text-white lg:p-14 lg:text-xl">{story}</div>
      </div>
      <div className="mx-auto mt-14 w-full max-w-7xl px-6 lg:mt-20 lg:px-20">
        <h3 className="text-2xl lg:text-4xl">{question}</h3>
      </div>
      <div className="mx-auto mt-6 flex max-w-7xl flex-col gap-6 px-6 lg:mt-14 lg:flex-row lg:justify-between lg:gap-24 lg:px-20">
        <ul className="flex max-w-[480px] shrink-0 flex-grow flex-col gap-7">
          {processes.map((process, index) => (
            <li
              key={process.title}
              className="grid grid-cols-[theme(width.28)_auto] items-stretch gap-x-7 gap-y-4 lg:grid-cols-[219px_auto] lg:grid-rows-[72px_auto] lg:gap-x-10"
            >
              <Image
                width={219}
                height={210}
                src={process.image}
                alt={process.description}
                className="h-28 w-28 lg:row-span-2 lg:h-[210px] lg:w-[219px]"
              />
              <div className={cn("border-t-[6px] pt-5", BORDER_BY_COLOR[color])}>
                <p className="text-lg lg:text-xl">{process.title}</p>
              </div>
              <div className="col-span-2 flex items-center justify-between gap-8 lg:col-span-1 lg:flex-col lg:items-start">
                <p>{process.description}</p>
                {index + 1 < processes.length && <CaretDown className="h-4 w-6 shrink-0" />}
              </div>
            </li>
          ))}
        </ul>

        <div className="flex max-w-[480px] flex-grow flex-col gap-6 lg:gap-14">
          <div>
            <p className="text-lg lg:text-xl">Glossary</p>
            <div className="mt-6 flex flex-col gap-3 lg:mt-10">
              {glossary.map((term) => (
                <p key={term}>
                  <span className="font-bold">{GLOSSARY_TERMS[term].title}:</span>{" "}
                  <span>{GLOSSARY_TERMS[term].description}</span>
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-lg lg:text-xl">Importance</p>
            <div className="mt-6 text-lg lg:mt-10 lg:text-xl">{importance}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default forwardRef(Section);
