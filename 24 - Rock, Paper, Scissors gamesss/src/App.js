import { useState } from "react";
import "./App.css";
import GameContainer from "./components/GameContainer/GameContainer";
import Header from "./components/Header/Header";
import Rules from "./components/Rules/Rules";

function App() {
  const possibilities = ["rock", "paper", "scissors"];
  const [showResult, setShowResult] = useState(false);
  const [pick, setPick] = useState("");
  const [botPick, setBotPick] = useState("");
  const [winner, setWinner] = useState("");
  const [score, setScore] = useState(0);

  const whatPick = (choice) => {
    const random =
      possibilities[Math.floor(Math.random() * possibilities.length)];
    setBotPick(random);
    if (
      (choice === "paper" && random === "paper") ||
      (choice === "rock" && random === "rock") ||
      (choice === "scissors" && random === "scissors")
    ) {
      setWinner("draw");
    } else if (
      (choice === "paper" && random === "rock") ||
      (choice === "rock" && random === "scissors") ||
      (choice === "scissors" && random === "paper")
    ) {
      setScore(score + 1);
      setWinner("YOU WON");
    } else if (
      (choice === "rock" && random === "paper") ||
      (choice === "scissors" && random === "rock") ||
      (choice === "paper" && random === "scissors")
    ) {
      setWinner("YOU LOSE");
      setScore(score - 1);
    }
    setPick(choice);
    setShowResult(true);
  };
  const reset = () => {
    setShowResult(false);
  };

  return (
    <div className="app__container">
      <Header score={score} />
      <GameContainer
        showResult={showResult}
        whatPick={whatPick}
        choice={pick}
        winner={winner}
        reset={reset}
        botPick={botPick}
      />
    </div>
  );
}

export default App;
