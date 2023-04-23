import questions from "../constants/quiz_content";

export default function QuizView({
  questions,
  currentQuestion,
  handleAnswerClick,
}) {
  return (
    <div className="p-6 border border-slate-500 rounded-3xl text-center w-full mx-2 sm:w-3/4 lg:w-1/2 bg-slate-900 backdrop-blur-lg bg-opacity-40 text-slate-300">
      <div className="">
        <span>
          Question {currentQuestion + 1} / {questions.length}
        </span>
      </div>
      <div className="">{questions[currentQuestion].question}</div>

      <div className="">
        {questions[currentQuestion].answers.map(({ text, isCorrect }) => (
          <div key={text}>
            <button
              onClick={() => handleAnswerClick(isCorrect)}
              className="border rounded-lg w-full md:w-3/4 border-slate-400 mt-4 py-2"
            >
              {text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
