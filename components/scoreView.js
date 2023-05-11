import Confetti from "react-confetti";
import questions from "@/constants/quiz_content";

export default function ScoreView({
  handleResetClick,
  score,
  setViewIncorrectQuestions,
  questions,
}) {
  const goodScore = score / questions.length >= 0.8;
  const confettiColors = [
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
  ];

  return (
    <>
      {goodScore && (
        <div
          className="fixed top-0 left-0 w-screen h-screen z-50"
          style={{ pointerEvents: "none" }}
        >
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={2000}
            recycle={false}
            colors={confettiColors} // Set the custom colors
          />
        </div>
      )}
      <div className="p-6 border border-slate-500 rounded-3xl text-center w-full mx-2 sm:w-3/4 lg:w-1/2 bg-slate-900 backdrop-blur-lg bg-opacity-40 text-slate-300">
        <div>{goodScore ? "Congratulations!" : "Better luck next time!"}</div>
        <div>
          Your score is {score} out of {questions.length}
        </div>
        <div
          className="border rounded-lg w-1/2 md:w-3/4 border-slate-400 mx-auto mt-2"
          onClick={() => setViewIncorrectQuestions(true)}
        >
          View Incorrect Questions
        </div>
        <div
          className="border rounded-lg w-1/2 md:w-3/4 border-slate-400 mx-auto mt-2"
          onClick={handleResetClick}
        >
          Try again
        </div>
      </div>
    </>
  );
}
