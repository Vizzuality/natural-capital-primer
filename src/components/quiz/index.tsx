"use client";
import { useState, useMemo, useCallback, useEffect } from "react";
import QuizButton from "./quiz-button";
import { Button } from "@/components/ui/button";
import Arrow from "@/icons/arrow.svg";
import ArrowRestart from "@/icons/arrow-restart.svg";
import { AnimatePresence, motion } from "framer-motion";
import ResultAnimation from "./result-animation";
import { sendAnalyticsEvent } from "@/lib/utils";

const MotionButton = motion.create(Button);
const MotionResultAnimation = motion.create(ResultAnimation);

export interface QuizProps {
  name: string;
  color: "green" | "orange" | "blue";
  questions: {
    title: React.ReactNode;
    options: string[];
    answer: number;
  }[];
}

const Quiz = ({ name, questions, color }: QuizProps) => {
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [userAnswers, setUserAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);

  const hexColor = useMemo(() => {
    if (color === "blue") {
      return "#6588FF";
    }

    if (color === "orange") {
      return "#FF5C21";
    }

    return "#37A24C";
  }, [color]);

  const question = useMemo(() => questions[questionIndex], [questionIndex, questions]);

  const correctAnswers = useMemo(() => userAnswers.filter(Boolean).length, [userAnswers]);

  const stopTransition = useCallback(() => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    setShowAnswer(false);
  }, [timeoutId]);

  const onClickAnswer = useCallback(
    (index: number) => {
      setShowAnswer(true);
      setUserAnswers((answers) => [...answers, index === question.answer]);

      const timeout = setTimeout(() => {
        if (questionIndex + 1 === questions.length) {
          setShowResults(true);
        } else {
          setShowAnswer(false);
          setQuestionIndex((index) => (index + 1 < questions.length ? index + 1 : index));
        }
      }, 3000);

      setTimeoutId(timeout);

      return () => stopTransition();
    },
    [question.answer, questionIndex, questions.length, stopTransition],
  );

  const onClickBack = useCallback(() => {
    stopTransition();
    setQuestionIndex((index) => (index > 0 ? index - 1 : index));
    setUserAnswers((answers) => answers.slice(0, -1));
  }, [stopTransition]);

  const onClickRestart = useCallback(() => {
    stopTransition();
    setQuestionIndex(0);
    setUserAnswers([]);
    setShowResults(false);
  }, [stopTransition]);

  useEffect(() => {
    if (showResults) {
      sendAnalyticsEvent(`Quiz ${name}: ${correctAnswers} / ${questions.length}`);
    }
  }, [name, showResults, correctAnswers, questions.length]);

  return (
    <div className="group relative flex w-full max-w-7xl flex-col bg-black p-6 md:p-10 lg:p-14">
      <AnimatePresence>
        {showResults && (
          <MotionResultAnimation
            correctAnswers={correctAnswers}
            totalAnswers={questions.length}
            color={color}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.1 }}
            exit={{ opacity: 0 }}
          />
        )}
      </AnimatePresence>
      <div className="flex flex-row justify-between gap-x-10">
        <div className="flex flex-shrink-0 gap-x-2.5">
          {questions.map((_, index) => (
            <motion.div
              key={index}
              className="h-2.5 rounded-full"
              initial={{ width: 10, backgroundColor: "#cbcdc8" }}
              animate={{
                width: questionIndex === index ? 34 : 10,
                backgroundColor: questionIndex === index ? hexColor : "#cbcdc8",
              }}
              exit={{ width: 10, backgroundColor: "#cbcdc8" }}
            />
          ))}
        </div>
        <p
          className="relative z-10 hidden max-w-[320px] border-r-2 pr-4 text-right text-xs text-white opacity-0 transition-opacity group-focus-within:opacity-100 group-hover:opacity-100 lg:block"
          style={{ borderColor: hexColor }}
        >
          We won’t use this collected data in any way, except for having an overview of the content
          experience.
        </p>
      </div>
      <div className="mt-6 lg:mt-10">
        <AnimatePresence>
          <motion.p
            key={questionIndex}
            initial={{ opacity: 0, position: "absolute" }}
            animate={{ opacity: !showResults ? 1 : 0, position: "static" }}
            exit={{ opacity: 0, position: "absolute" }}
          >
            <span className="mr-4 inline-block text-2xl text-white lg:text-4.5xl">
              Q{questionIndex + 1}
            </span>
            <span className="text-lg lg:text-xl" style={{ color: hexColor }}>
              {question.title}
            </span>
          </motion.p>
        </AnimatePresence>
      </div>
      <div className="relative mt-6 flex flex-col justify-between gap-3 lg:mt-12 lg:flex-row lg:gap-5">
        <AnimatePresence>
          <motion.div
            key={questionIndex}
            className="flex flex-wrap gap-3 lg:gap-5"
            initial={{ opacity: 0, position: "absolute" }}
            animate={{ opacity: !showResults ? 1 : 0, position: "static" }}
            exit={{ opacity: 0, position: "absolute" }}
          >
            {question.options.map((option, index) => (
              <QuizButton
                key={`${questionIndex}-${index}`}
                state={
                  !showAnswer ? "default" : index === question.answer ? "highlighted" : "disabled"
                }
                color={color}
                onClick={() => onClickAnswer(index)}
              >
                {option}
              </QuizButton>
            ))}
          </motion.div>
        </AnimatePresence>
        <div className="relative">
          <AnimatePresence>
            {!showResults && questionIndex > 0 && questionIndex + 1 <= questions.length && (
              <MotionButton
                type="button"
                variant="transparent"
                onClick={onClickBack}
                className="right-0 top-0 mt-8 gap-3 bg-white lg:mt-0 lg:bg-black lg:text-white"
                initial={{ opacity: 0, position: "absolute" }}
                animate={{ opacity: 1, position: "static" }}
                exit={{ opacity: 0, position: "absolute" }}
              >
                <Arrow className="h-6 w-6 rotate-180" aria-hidden />
                Back
              </MotionButton>
            )}
          </AnimatePresence>
        </div>
        <AnimatePresence>
          {showResults && (
            <MotionButton
              type="button"
              variant="white"
              onClick={onClickRestart}
              className="absolute bottom-0 right-0 z-10 gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArrowRestart className="h-6 w-6" aria-hidden />
              <span className="sr-only">Restart</span>
            </MotionButton>
          )}
        </AnimatePresence>
      </div>
      <p className="relative z-10 mt-8 text-xs text-white lg:hidden">
        We won’t use this collected data in any way, except for having an overview of the content
        experience.
      </p>
    </div>
  );
};

export default Quiz;
