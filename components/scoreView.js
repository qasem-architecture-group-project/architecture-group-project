import React from "react";
import Confetti from "react-confetti";

export default function ScoreView({ handleResetClick, score }) {
  const goodScore = score >= 1; // Set your own condition for a good score
  const confettiColors = [
    "#FFBE0B",
    "#FB5607",
    "#FF006E",
    "#8338EC",
    "#3A86FF",
  ];

  return (
    <div>
      {goodScore && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          numberOfPieces={2000}
          recycle={false}
          colors={confettiColors} // Set the custom colors
        />
      )}
      <h1>{goodScore ? "Congratulations!" : "Better luck next time!"}</h1>
      <p>Your score is {score} out of 5</p>
      <button onClick={handleResetClick}>Try again</button>
    </div>
  );
}
