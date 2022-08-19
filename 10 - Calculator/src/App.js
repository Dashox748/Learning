import "./App.css";
import { useState } from "react";

function App() {
  //operators
  const operator = ["/", "*", "-", "+", "."];
  const nmb = ["0","1", "2", "3", "4", "5","6","7","8","9"];

  //Create grid numbers(1-9) with values
  const numbersCreate = () => {
    const numbers = [];
    for (let i = 1; i < 10; i++) {
      numbers.push(
        <button value={i} key={i} onClick={() => addToEval(i.toString())}>
          {i}
        </button>
      );
    }
    return numbers;
  };
  //use states for display
  const [currentNumber, setCurrentNumber] = useState("");
  const [currentDynamicNumber, setCurrentDynamicNumber] = useState("");

  //functions
  const addToEval = (value) => {

    if (
      (operator.includes(value) &&
        operator.includes(currentNumber.slice(-1).toString())) ||
      (currentNumber.slice(-1) === "" && operator.includes(value))
    ) {
      return;
    }
    console.log(currentNumber.slice(currentNumber.length-2));
    if (currentNumber.slice(-1) === "0" && !value.includes(".")&& !nmb.includes(currentNumber[currentNumber.length-2]) ) {
      return;
    }
    setCurrentNumber(currentNumber + value);
    if (!operator.includes(value)) {
      setCurrentDynamicNumber(eval((currentNumber + value).toString()));
    }
  };
  const equal = () => {
    setCurrentNumber(currentDynamicNumber.toString());
  };
  const deleteLastNumber = () => {
    setCurrentNumber(currentNumber.slice(0, -1));
  };
  const clear = () => {
    setCurrentNumber("");
    setCurrentDynamicNumber("");
  };
  return (
    <div className="calculator__container">
      <div className="calculator__container-result">
        <div className="dynamic-result">{currentDynamicNumber}</div>
        <div className="current-result">{currentNumber}</div>
      </div>

      <button className="span-two" onClick={() => clear()}>
        AC
      </button>
      <button className="span-two" onClick={() => deleteLastNumber()}>
        DEL
      </button>
      <div className="numbers">{numbersCreate()}</div>
      <button onClick={() => addToEval("/")}>÷</button>
      <button onClick={() => addToEval("*")}>x</button>
      <button onClick={() => addToEval("-")}>-</button>
      <button onClick={() => addToEval("0")}>0</button>
      <button onClick={() => addToEval(".")}>.</button>
      <button onClick={() => equal()}>=</button>
      <button onClick={() => addToEval("+")}>+</button>
    </div>
  );
}

export default App;
