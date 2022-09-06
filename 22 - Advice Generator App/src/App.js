import "./App.css";
import Slider from "./components/images/pattern-divider-desktop.svg";
import Dice from "./components/images/icon-dice.svg";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState([]);
  const [roll, setRoll] = useState(false);
  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip));
  }, [roll]);

  return (
    <div className="app__container">
      <h1>Advice #{advice.id}</h1>
      <p>"{advice.advice}"</p>
      <img src={Slider} />
      <div
        className="dice"
        onClick={() => {
          setRoll(!roll);
        }}
      >
        <img src={Dice} />
      </div>
    </div>
  );
}

export default App;
