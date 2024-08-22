"use client";
import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { cn } from "@/lib/utils";
import QuizButton from "./quiz-button";
import { Button } from "@/components/ui/button";
import Caret from "@/icons/caret-right.svg";
import HoverRepeatAnimation from "@/components/animations/hover-repeat";

const AnsweredAnimation = dynamic(() => import("./answered-animation"), {
  ssr: false,
});

export interface QuizData {
  key: string;
  color: "green" | "orange" | "blue";
  colorClass: string;
  chapterName: string;
  questions: {
    title: React.ReactNode;
    options: string[];
    answer: number;
  }[];
}

const Quiz = ({ data }: { data: QuizData }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [quizQuestion, setQuizQuestion] = useState<number>(0);
  const [waitForNext, setWaitForNext] = useState<boolean>(false);
  const [playAnimation, setPlayAnimation] = useState<boolean>(false);

  const { key, colorClass, chapterName, questions, color } = data;
  const question = questions[quizQuestion];
  const { title, options, answer } = question;

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    if (playAnimation) {
      timeoutId = setTimeout(() => {
        setPlayAnimation(false);
      }, 1500);
    }

    return () => clearTimeout(timeoutId);
  }, [playAnimation, quizQuestion]);

  const handleNext = (quizQuestion: number) => {
    setSelectedOption(null);
    setPlayAnimation(false);
    setWaitForNext(false);
    setQuizQuestion(quizQuestion < 2 ? quizQuestion + 1 : 0);
  };

  const isRight = selectedOption === answer;
  return (
    <div className="relative flex w-full max-w-7xl flex-col overflow-hidden bg-black pt-10 lg:mb-20 lg:pt-0">
      <AnsweredAnimation isRight={isRight} visible={playAnimation} color={color} />
      <div className="relative mb-[15px] flex w-full justify-between lg:mb-0 lg:mt-[77px]">
        <div className="z-10 mx-6 flex w-full flex-col gap-6 text-white lg:ml-[53px] lg:mr-0 lg:max-w-[860px] lg:gap-8 lg:pb-[73px]">
          <div className="flex flex-col gap-2 lg:flex-row lg:gap-5">
            <span className="flex items-center gap-3">
              Check your Understanding
              <span className="h-px flex-1 bg-white lg:hidden"></span>
            </span>
            <div className="hidden text-grey-400 lg:block">|</div>
            <span className={cn("flex gap-1 text-white", colorClass)}>
              <span className="hidden lg:block">0{quizQuestion + 1}-03</span>
              {chapterName}
            </span>
          </div>
          <h3 className="text-2xl tracking-tight lg:text-4.5xl">{title}</h3>
          <div className="flex flex-wrap gap-5">
            {options.map((option, index) => (
              <QuizButton
                key={`${key}-${index}`}
                isRight={answer === index}
                isActive={selectedOption === index || (waitForNext && answer === index)}
                onClick={() => {
                  setSelectedOption(index);
                  setWaitForNext(true);
                  setPlayAnimation(true);
                }}
                disabled={waitForNext}
              >
                {option}
              </QuizButton>
            ))}
          </div>
        </div>
      </div>
      <div className="text-sm mt-6 flex w-full flex-col-reverse items-center justify-between gap-4 border-t border-dashed border-t-grey-400 px-6 pb-10 pt-6 text-white lg:mt-0 lg:h-[84px] lg:flex-row lg:px-[53px] lg:py-[30px]">
        We don’t collect your answers. We want to provide a learning experience.
        {waitForNext && (
          <Button
            variant="outline-white"
            onClick={() => handleNext(quizQuestion)}
            className="relative px-12 py-[10px] max-lg:w-full"
          >
            {quizQuestion < 2 ? (
              <>
                Next
                <Caret className="absolute right-4 rotate-180" />
              </>
            ) : (
              <HoverRepeatAnimation>Start Again</HoverRepeatAnimation>
            )}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Quiz;
