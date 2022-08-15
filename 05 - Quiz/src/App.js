import "./App.css";
import { useState } from "react";
import {questions} from "./questions";

function App() {
  const [end, setEnd] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [score, setScore] = useState(0);

  const handleButton = (isCorrect) => {
    if (isCorrect === true) {
      setScore(score + 1);
    }
    const newQuestionNumber = questionNumber + 1;
    if (newQuestionNumber > questions.length - 1) {
      setEnd(true);
      return;
    }
    setQuestionNumber(newQuestionNumber);
  };
  const reset = () => {
    setEnd(false);
    setScore(0);
    setQuestionNumber(0);
  };

  return (
    <div className="quiz__container">
      {end ? (
        <div className="quiz__container-score">
          Your Score: {score}/{questions.length}
          <button onClick={reset}>Reset Quiz</button>
        </div>
      ) : (
        <>
          <div className="quiz__container-question">
            <h1>
              question {questionNumber + 1}/{questions.length}
            </h1>
            <h2>{questions[questionNumber].questionText}</h2>
          </div>
          <div className="quiz__container-answers">
            {questions[questionNumber].answerOptions.map((event) => (
              <button
                onClick={() => {
                  handleButton(event.isCorrect);
                }}
              >
                {event.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
