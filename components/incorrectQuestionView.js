export default function IncorrectQuestionsView({ incorrectQuestions }) {
  return (
    <div className="p-6 border border-slate-500 rounded-3xl text-center w-full mx-2 sm:w-3/4 lg:w-1/2 bg-slate-900 backdrop-blur-lg bg-opacity-40 text-slate-300">
      <ul>
        {incorrectQuestions.map((q, index) => (
          <li key={index}>{q.question}</li>
        ))}
      </ul>
    </div>
  );
}
