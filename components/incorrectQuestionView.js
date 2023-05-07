import React, { useState, useEffect } from "react";

export default function IncorrectQuestionsView({ incorrectQuestions }) {
  const [results, setResults] = useState(
    Array(incorrectQuestions.length).fill("")
  );
  const [loading, setLoading] = useState(
    Array(incorrectQuestions.length).fill(false)
  ); // Add this state hook for loading indicators

  async function getQuestionExplanation(questionText, index) {
    setLoading((prevLoading) =>
      prevLoading.map((val, i) => (i === index ? true : val))
    ); // Set loading for the corresponding index

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionText }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw (
          data.error ||
          new Error(`Request failed with status ${response.status}`)
        );
      }

      setResults((prevResults) =>
        prevResults.map((result, i) =>
          i === index ? data.result.trimStart() : result
        )
      ); // Use functional update
    } catch (error) {
      console.error(error);
      alert(error.message);
    } finally {
      setLoading((prevLoading) =>
        prevLoading.map((val, i) => (i === index ? false : val))
      ); // Reset loading for the corresponding index
    }
  }

  return (
    <div className="p-6 border border-slate-500 rounded-3xl text-center w-full mx-2 sm:w-3/4 lg:w-1/2 bg-slate-900 backdrop-blur-lg bg-opacity-40 text-slate-300 mb-20">
      <ul>
        {incorrectQuestions.map((q, index) => (
          <li key={index}>
            <div className="my-4 font-bold">{q.question}</div>
            {!results[index] && (
              <div
                className="inline-block p-2 border rounded-lg border-slate-400 mx-auto"
                onClick={() => getQuestionExplanation(q.question, index)}
              >
                {loading[index] ? (
                  <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-sky-500"></div>
                ) : (
                  <div className="text-xs">Get Answer</div>
                )}
                {/* Display loading indicator */}
              </div>
            )}
            {results[index] && (
              <div>
                <p className="whitespace-pre-wrap pb-6 border-b">
                  {results[index]}
                </p>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
