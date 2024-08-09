import { useRef } from "react";
import { useTransform, useScroll, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { LEGEND_TERMS, GLOSSARY_TERMS } from "./data";
import { SectionType } from "./data";
import Image from "next/image";
import Pebble from "@/svgs/pebble.svg";
import CaretDown from "@/svgs/caret-down.svg";
import InfoTooltip from "@/components/info-tooltip";
import { cn } from "@/lib/utils";
import AudioIconOn from "@/svgs/audio-icon-on.svg";
import AudioIconOff from "@/svgs/audio-icon-off.svg";
import BackgroundVideo from "@/components/bg-video";

const CENTER_CLASSES = "mx-auto flex max-w-7xl px-6 lg:pl-20";
const ADJUSTMENT_LEFT_MARGIN = "lg:ml-[220px]";

import { motion } from "framer-motion";

const Section = ({
  section: {
    id,
    title,
    mainImageURL,
    mainImageMobileURL,
    videoURL,
    bgClass,
    story,
    question,
    processes,
    legend,
    glossary,
    SvgIcon,
    importance,
  },
  sectionRef,
  soundOn,
  setSoundOn,
  renderMobileMenu,
}: {
  section: SectionType;
  sectionRef: React.RefObject<HTMLDivElement>;
  soundOn: boolean;
  setSoundOn: (value: boolean) => void;
  renderMobileMenu: ({ id }: { id: string }) => React.ReactElement;
}) => {
  const scrollSectionRef = useRef(null);
  const sectionInView = useInView(sectionRef, { margin: "-100px 0px 0px -500px" });
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  });
  const windowWidth = typeof window !== "undefined" ? window.innerWidth : 8000;

  const imageAnimation = {
    marginTop: useTransform(scrollYProgress, [0, 0.4], [0, 360]),
    height: useTransform(scrollYProgress, [0, 0.4], [465, 800]),
    width: useTransform(scrollYProgress, [0, 0.4], [1024, windowWidth]),
  };

  const pebbleAnimation = {
    y: useTransform(scrollYProgress, [0, 0.3], [0, -500]),
  };
  return (
    <section id={id} className={`${bgClass} relative text-black`} ref={sectionRef}>
      {renderMobileMenu({ id })}
      <div
        className="relative z-10 mx-auto max-w-7xl"
        id={`section-scroll-${id}`}
        ref={scrollSectionRef}
      >
        <div className="h-[657px] max-h-[657px] px-6 lg:h-[800px] lg:max-h-[800px] lg:px-20 lg:pt-[163px]">
          <div className="z-10 flex h-[220px] max-w-[826px] flex-col gap-5 lg:gap-10">
            <h2 className="text-2xl lg:text-4.5xl">{title}</h2>
            <div className="inline-flex items-center justify-start gap-3">
              <Button
                variant="transparent"
                className="flex cursor-pointer gap-3 p-0 lg:gap-2"
                onClick={() => setSoundOn(!soundOn)}
              >
                <>
                  {soundOn ? (
                    <AudioIconOff className="h-[52px] w-[52px] rounded-full bg-black lg:h-11 lg:w-11" />
                  ) : (
                    <AudioIconOn className="h-[52px] w-[52px] rounded-full bg-black lg:h-11 lg:w-11" />
                  )}
                  <span>Click to turn sound {soundOn ? "off" : "on"}</span>
                </>
              </Button>
            </div>
          </div>
        </div>
      </div>
      <BackgroundVideo src={videoURL} soundOn={soundOn} sectionInView={sectionInView} />
      <div className="relative z-10 h-0 w-full bg-white px-6 lg:z-0 lg:h-[700px] lg:bg-cover lg:bg-no-repeat lg:px-20">
        <div
          className={cn(
            ADJUSTMENT_LEFT_MARGIN,
            "absolute -top-[425px] flex max-h-[465px] min-h-[465px] w-full justify-end lg:-top-[365px] lg:right-0 lg:mx-auto lg:h-full",
          )}
        >
          {/* Animated desktop image */}
          <motion.div
            style={{
              backgroundImage: `url(${mainImageURL})`,
              ...imageAnimation,
            }}
            className="hidden lg:block lg:min-h-full lg:w-[1024px] lg:bg-cover"
          />
          {/* Animated Pebble */}
          <motion.div
            className="absolute -top-[90px] right-[56px] lg:-top-[165px] lg:right-[112px]"
            style={{ ...pebbleAnimation }}
          >
            <Pebble className="h-[163px] w-[158px] text-black lg:h-[250px] lg:w-[258px]" />
            <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
              <SvgIcon className="max-lg:h-16 max-lg:w-16" />
            </div>
          </motion.div>
        </div>
      </div>
      <div className="relative flex w-full flex-col justify-start gap-y-10 bg-white pb-[68px] pt-10 text-black lg:gap-y-6 lg:pt-[360px]">
        {/* Blue story div mobile with image */}
        <div className="mx-auto -mt-[485px] block max-w-7xl pl-6 lg:hidden">
          <Image
            alt=""
            height={485}
            width={351}
            className="max-h-[485px] min-h-full w-full object-cover lg:hidden"
            src={mainImageMobileURL}
          />
          <div className="flex flex-col justify-center bg-black px-6 py-10 text-white lg:ml-[220px] lg:gap-8 lg:p-[60px]">
            <div className="max-w-[915px] pb-8 text-2xl lg:text-4xl">{story}</div>
            <div>{question}</div>
          </div>
        </div>
        {/* Blue story div laptop */}
        <div className={cn("absolute bottom-[calc(100%-280px)] hidden w-full lg:flex")}>
          <div className="mx-auto flex w-full max-w-7xl px-6 lg:pl-20">
            <div className="flex flex-col justify-center bg-black p-[60px] text-white lg:ml-20 xl:ml-[220px] xl:w-[980px]">
              <div className="max-w-[915px] pb-8 text-4xl">{story}</div>
              <div>{question}</div>
            </div>
          </div>
        </div>
        <div className={cn(CENTER_CLASSES, "w-full lg:mb-[68px] lg:gap-x-16")}>
          <div className="divide-x-black flex flex-col items-end gap-10 lg:ml-20 lg:flex-row xl:ml-[220px]">
            <ul className="flex h-[489px] w-full flex-col justify-around py-7 lg:h-[676px] lg:border-r lg:border-dashed lg:border-r-black lg:pr-[69px]">
              {processes.map((process, i) => (
                <>
                  <li
                    key={`process-${process.image} `}
                    className="flex flex-col items-center gap-[25px] lg:min-w-[472px]"
                  >
                    <div className="flex w-full items-center">
                      <div className="relative flex h-0 items-center justify-center">
                        <div className="h-[148px] w-[146px] min-w-[146px] lg:h-[204px] lg:w-[202px] lg:min-w-[202px]">
                          {process.borderColorClass && (
                            <Pebble
                              className={`h-[148px] w-[146px] lg:h-[204px] lg:w-[202px] ${process.borderColorClass} `}
                            />
                          )}
                          <div className="absolute inset-0 flex w-full items-center justify-center">
                            <Image
                              alt=""
                              height={179}
                              width={181}
                              className="z-10 hidden h-[181px] max-h-[181px] w-[179px] max-w-[179px] object-cover lg:block"
                              src={process.image}
                            />
                            <Image
                              alt=""
                              height={129}
                              width={127}
                              className="z-10 block h-[129px] max-h-[129px] w-[127px] max-w-[127px] object-cover lg:hidden"
                              src={process.image}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="text-normal ml-10 flex flex-col justify-center gap-3 leading-7 lg:text-xl">
                        <div className="font-bold">{process.title}</div>
                        <div>{process.description}</div>
                      </div>
                    </div>
                  </li>
                  {i < processes.length - 1 && (
                    <div className="flex h-[17px] w-full pl-[196px] lg:pl-[250px]">
                      <CaretDown className="max-lg:h-[18px]" />
                    </div>
                  )}
                </>
              ))}
            </ul>
            <div className="flex h-fit">
              <div className="border-t border-solid border-t-black">
                <div className="divide-y-black flex flex-col space-y-5 divide-y divide-dashed">
                  {legend && (
                    <div className="pt-10 lg:pt-5">
                      <div className="mb-3">Legend</div>
                      {legend.map((term) => (
                        <div key={`legend-${term} `} className="flex items-center gap-2">
                          <span
                            className={`block h-1.5 w-[17px] rounded-[29px] ${LEGEND_TERMS[term].colorClass} `}
                          />
                          <span>{LEGEND_TERMS[term].title}</span>
                          <InfoTooltip
                            title={String(term)}
                            content={LEGEND_TERMS[term].infoTooltip}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="pt-10 lg:pt-5">
                    <div className="mb-3">Glossary</div>
                    <div className="flex flex-col gap-3">
                      {glossary.map((term) => (
                        <p key={`glossary - ${term} `} className="inline">
                          <span className="font-bold">{GLOSSARY_TERMS[term].title}: </span>
                          <span>{GLOSSARY_TERMS[term].description}</span>
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn(CENTER_CLASSES, "w-full flex-col")}>
          <div className="max-lg:border-t max-lg:border-t-black max-lg:pt-10 lg:ml-20 xl:ml-[220px]">
            <div className="inline-flex w-full items-center gap-5 pb-3 lg:pb-10">
              <span>Importance</span>
              <span className="hidden h-px w-full bg-black lg:block"></span>
            </div>
            <p className="text-xl">{importance}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section;
