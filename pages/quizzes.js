import Head from "next/head";
import Navigation from "@/components/navigation";
import React, { useState, useEffect } from "react";
import QuizView from "@/components/quizView";
import ScoreView from "@/components/scoreView";
import cacheQuiz from "@/constants/quiz_content";
import IncorrectQuestionsView from "@/components/incorrectQuestionView";

export default function Quizzes() {
  const [animalInput, setAnimalInput] = useState("");
  const [result, setResult] = useState();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isQuizOver, setIsQuizOver] = useState(false);
  const [viewIncorrectQuestions, setViewIncorrectQuestions] = useState(false);
  const [score, setScore] = useState(0);
  const [incorrectQuestions, setIncorrectQuestions] = useState([]);
  const [selectedQuizType, setSelectedQuizType] = useState("");

  const handleAnswerClick = (isCorrect) => {
    const selectedQuizQuestions = getQuestionsForSelectedQuizType();
    if (isCorrect) {
      setScore(score + 1);
    } else {
      setIncorrectQuestions([
        ...incorrectQuestions,
        selectedQuizQuestions[currentQuestion],
      ]);
    }
    const next = currentQuestion + 1;
    if (next < selectedQuizQuestions.length) {
      setCurrentQuestion(next);
    } else {
      setIsQuizOver(true);
    }
  };

  const incorrectQuestionsText = incorrectQuestions.map((q) => q.question);
  const incorrectQuestionsString = incorrectQuestionsText.join(" | ");

  console.log(incorrectQuestionsString);

  const handleResetClick = () => {
    setScore(0);
    setIncorrectQuestions([]);
    setCurrentQuestion(0);
    setIsQuizOver(false);
  };

  const handleQuizTypeSelection = (quizType) => {
    setSelectedQuizType(quizType);
  };

  const getQuestionsForSelectedQuizType = () => {
    switch (selectedQuizType) {
      case "cacheQuiz":
        return cacheQuiz;
      case "processorDatapathQuiz":
        return processorDatapathQuizQuestions;
      default:
        return [];
    }
  };

  return (
    <>
      <Head>
        <title>Quizzes - Computer Architecture Project</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="bg-medium bg-fixed bg-center bg-cover min-h-screen">
          <Navigation />
          <div className="h-40"></div>
          <div className="flex justify-center">
            {selectedQuizType === "" ? (
              <div className="p-6 border border-slate-500 rounded-3xl text-center w-full mx-2 sm:w-3/4 lg:w-1/2 bg-slate-900 backdrop-blur-lg bg-opacity-40 text-slate-300">
                <h2 className="text-xl font-bold mb-4">Quizzes</h2>
                <button
                  className="border w-4/5 rounded-lg border-slate-400 mx-auto mt-2 p-2 hover:border-sky-300 hover:text-sky-300 hover:font-bold hover:border-2"
                  onClick={() => handleQuizTypeSelection("cacheQuiz")}
                >
                  Caches
                </button>
                <button
                  className="border w-4/5 rounded-lg border-slate-400 mx-auto mt-2 p-2 hover:border-sky-300 hover:text-sky-300 hover:font-bold hover:border-2"
                  onClick={() =>
                    handleQuizTypeSelection("processorDatapathQuiz")
                  }
                >
                  Processor Datapath
                </button>
              </div>
            ) : viewIncorrectQuestions ? (
              <IncorrectQuestionsView incorrectQuestions={incorrectQuestions} />
            ) : isQuizOver ? (
              <ScoreView
                handleResetClick={handleResetClick}
                score={score}
                setViewIncorrectQuestions={setViewIncorrectQuestions}
              />
            ) : (
              <QuizView
                questions={getQuestionsForSelectedQuizType()}
                currentQuestion={currentQuestion}
                handleAnswerClick={handleAnswerClick}
              />
            )}
          </div>
        </div>
      </main>
    </>
  );
}
