"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface QuizData {
  key: string;
  colorClass: string;
  chapterName: string;
  questions: {
    title: React.ReactNode;
    options: string[];
    answer: number;
    images: string[];
  }[];
}

const QuizButton = ({
  children,
  isRight,
  isActive,
  onMouseEnter,
  onMouseLeave,
  onClick,
  ...props
}: {
  children: React.ReactNode;
  isRight: boolean;
  isActive: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  onClick: () => void;
  props?: { [key: string]: unknown };
}) => (
  <Button
    variant="outline-white"
    className={cn(
      "flex gap-[10px] border-grey-400 py-[5px] pl-[5px] pr-[15px] hover:border-white",
      {
        "bg-black text-white": !isActive,
        "bg-green-500 text-black": isActive && isRight,
        "bg-orange text-black": isActive && !isRight,
      },
    )}
    onMouseEnter={onMouseEnter}
    onMouseLeave={onMouseLeave}
    onClick={onClick}
    {...props}
  >
    <span
      className={cn("flex h-8 w-8 items-center justify-center rounded-full border", {
        "border-white": !isActive,
        "text-black": isActive,
      })}
    >
      {isActive && <span className="h-[10px] w-[10px] rounded-full bg-black" />}
    </span>
    {children}
  </Button>
);
const Quiz = ({ data }: { data: QuizData }) => {
  const { key, colorClass, chapterName, questions } = data;
  const question = questions[0];
  const { title, options, images } = question;
  const [hoveredOption, setHoveredOption] = useState<number | null>(null);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  return (
    <div className="relative mx-6 mb-10 flex w-full max-w-7xl flex-col overflow-hidden bg-black lg:mb-20 lg:pt-[77px]">
      <div className="absolute right-0 top-0 mt-[60px] h-full w-full">
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
      <div className="z-10 flex flex-col gap-8 text-white lg:mx-[53px] lg:max-w-[835px] lg:pb-[73px]">
        <div className="flex gap-5">
          <span>Check your Understanding</span>
          <div className="text-grey-400">|</div>
          <span className={colorClass}>{chapterName}</span>
        </div>
        <h3 className="text-4.5xl">{title}</h3>
        <div className="flex gap-5">
          {options.map((option, index) => (
            <QuizButton
              key={`button-${key}`}
              onMouseEnter={() => setHoveredOption(index)}
              onMouseLeave={() => setHoveredOption(null)}
              isRight={question.answer === index}
              isActive={selectedOption === index}
              onClick={() => setSelectedOption(index)}
            >
              {option}
            </QuizButton>
          ))}
        </div>
      </div>
      <div className="text-sm flex h-16 w-full items-center border-t border-dashed border-t-grey-400 px-[60px] py-5 text-white">
        We won’t use this collected data in any way, except having an overview of the content
        experience.
      </div>
    </div>
  );
};

export default Quiz;
