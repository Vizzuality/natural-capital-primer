"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import QuizButton from "./quiz-button";
import AnsweredAnimation from "./answered-animation";
import AnsweredAnimationMobile from "./answered-animation-mobile";

export interface QuizData {
  key: string;
  colorClass: string;
  chapterNumber: string;
  chapterName: string;
  questions: {
    title: React.ReactNode;
    options: string[];
    answer: number;
    images: string[];
  }[];
}

const Quiz = ({ data }: { data: QuizData }) => {
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizQuestion, setQuizQuestion] = useState<number>(0);
  const [playAnsweredAnimation, setPlayAnsweredAnimation] = useState<boolean>(false);

  const { key, colorClass, chapterNumber, chapterName, questions } = data;
  const question = questions[quizQuestion];
  const { title, options, images } = question;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (playAnsweredAnimation && quizQuestion < 2) {
      timeoutId = setTimeout(() => {
        setSelectedOption(null);
        setPlayAnsweredAnimation(false);
        setQuizQuestion(quizQuestion + 1);
      }, 3000);
    }

    return () => clearTimeout(timeoutId);
  }, [playAnsweredAnimation, quizQuestion]);

  return (
    <div className="flex w-full max-w-7xl flex-col overflow-hidden bg-black pt-10 lg:mb-20 lg:pt-[77px]">
      <AnsweredAnimationMobile visible={playAnsweredAnimation} />
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
                isRight={question.answer === index}
                isActive={selectedOption === index}
                onClick={() => {
                  setSelectedOption(index);
                  setPlayAnsweredAnimation(true);
                }}
              >
                {option}
              </QuizButton>
            ))}
          </div>
        </div>
        {playAnsweredAnimation ? (
          <div className="hidden h-full min-w-[357px] justify-center pt-[60px] lg:flex">
            <AnsweredAnimation quizQuestion={quizQuestion} />
          </div>
        ) : (
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
        )}
      </div>
      <div className="text-sm mt-6 flex w-full items-center border-t border-dashed border-t-grey-400 px-6 pb-10 pt-6 text-white lg:mt-0 lg:h-16 lg:px-[53px] lg:py-5">
        We won’t use this collected data in any way, except having an overview of the content
        experience.
      </div>
    </div>
  );
};

export default Quiz;
