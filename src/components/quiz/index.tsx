"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import QuizButton from "./quiz-button";
import useMediaQuery from "@/hooks/use-media-query";
import { Button } from "@/components/ui/button";
import Caret from "@/icons/caret-right.svg";
import AnsweredAnimation from "./answered-animation";

const AnsweredAnimationMobile = dynamic(() => import("./answered-animation-mobile"), {
  ssr: false,
});

export interface QuizData {
  key: string;
  colorClass: string;
  chapterNumber: string;
  chapterName: string;
  questions: {
    title: React.ReactNode;
    options: string[];
    answer: number;
    images?: string[];
  }[];
}

const Quiz = ({ data }: { data: QuizData }) => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizQuestion, setQuizQuestion] = useState<number>(0);
  const [waitForNext, setWaitForNext] = useState<boolean>(false);
  const [playMobileAnimation, setPlayMobileAnimation] = useState<boolean>(false);

  const { key, colorClass, chapterNumber, chapterName, questions } = data;
  const question = questions[quizQuestion];
  const { title, options, images, answer } = question;
  const isMobile = useMediaQuery("not (min-width: 1024px)", false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (isMobile && playMobileAnimation) {
      timeoutId = setTimeout(() => {
        setPlayMobileAnimation(false);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [playMobileAnimation, quizQuestion, isMobile]);

  const handleNext = () => {
    setSelectedOption(null);
    setWaitForNext(false);
    setQuizQuestion(quizQuestion + 1);
  };

  const isRight = selectedOption === answer;
  return (
    <div className="flex w-full max-w-7xl flex-col overflow-hidden bg-black pt-10 lg:mb-20 lg:pt-[77px]">
      <AnsweredAnimationMobile isRight={isRight} visible={playMobileAnimation} />
      <div className="relative mb-[15px] flex w-full justify-between">
        <div className="z-10 mx-6 flex flex-col gap-6 text-white lg:ml-[53px] lg:mr-0 lg:max-w-[835px] lg:gap-8 lg:pb-[73px]">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
            <span className="flex items-center gap-3">
              Check your Understanding
              <span className="h-px flex-1 bg-white lg:hidden"></span>
            </span>
            <div className="hidden text-grey-400 lg:block">|</div>
            <span className={cn("flex gap-1 text-white", colorClass)}>
              <span className="hidden lg:block">
                {chapterNumber}-0{quizQuestion + 1}
              </span>
              {chapterName}
            </span>
          </div>
          <h3 className="text-2xl tracking-tight lg:text-4.5xl">{title}</h3>
          <div className="flex flex-wrap gap-5">
            {options.map((option, index) => (
              <QuizButton
                key={`${key}-${index}`}
                onMouseEnter={() => setHoveredOption(index)}
                onMouseLeave={() => setHoveredOption(null)}
                isRight={answer === index}
                isActive={selectedOption === index}
                onClick={() => {
                  setSelectedOption(index);
                  setWaitForNext(true);
                  if (isMobile) {
                    setPlayMobileAnimation(true);
                  }
                }}
                disabled={waitForNext}
              >
                {option}
              </QuizButton>
            ))}
          </div>
        </div>
        {waitForNext ? (
          <div className="hidden h-full min-w-[357px] justify-center pt-[60px] lg:flex">
            <AnsweredAnimation isRight={isRight} />
          </div>
        ) : (
          !!images && (
            <div className="hidden h-full min-w-[357px] pt-[90px] lg:block">
              <Image
                alt=""
                src={images[0]}
                className={cn("absolute -right-2 top-0 transition-all duration-200", {
                  "blur-sm": hoveredOption !== null && hoveredOption !== 0,
                })}
                width="202"
                height="195"
              />
              <Image
                alt=""
                src={images[1]}
                className={cn("absolute right-[187px] top-[150px] transition-all duration-200", {
                  "blur-sm": hoveredOption !== null && hoveredOption !== 1,
                })}
                width="168"
                height="163"
              />
              <Image
                alt=""
                src={images[2]}
                className={cn("absolute right-[50px] top-[231px] transition-all duration-200", {
                  "blur-sm": hoveredOption !== null && hoveredOption !== 2,
                })}
                width="113"
                height="109"
              />
            </div>
          )
        )}
      </div>
      <div className="text-sm mt-6 flex w-full flex-col-reverse items-center justify-between gap-4 border-t border-dashed border-t-grey-400 px-6 pb-10 pt-6 text-white lg:mt-0 lg:h-[84px] lg:flex-row lg:px-[53px] lg:py-[30px]">
        We won’t use this collected data in any way, except having an overview of the content
        experience.
        {waitForNext && quizQuestion < 2 && (
          <Button
            variant="outline-white"
            onClick={handleNext}
            className="relative px-12 py-[10px] max-lg:w-full"
          >
            Next
            <Caret className="absolute right-4 rotate-180" />
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
