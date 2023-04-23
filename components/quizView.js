import questions from "../constants/quiz_content";

export default function QuizView({
  questions,
  currentQuestion,
  handleAnswerClick,
}) {
  return (
    <div className="border-2 border-black rounded-3xl text-center w-3/4 sm:w-1/2">
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
              className="border-2 rounded-lg w-64 border-black mt-4"
            >
              {text}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
