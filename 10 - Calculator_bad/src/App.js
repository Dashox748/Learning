import "./App.css";
import { useState } from "react";

function App() {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");
  const operators = ["/", "*", "-", "+"];
  const createDigits = () => {
    const digits = [];
    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          key={i}
          onClick={() => {
            updateCalc(i.toString());
          }}
        >
          {i}
        </button>
      );
    }
    return digits;
  };
  const updateCalc = (value) => {
    if (
      (operators.includes(value) && number === "") ||
      (operators.includes(value) && operators.includes(number.slice(-1)))
    ) {
      return;
    }
    setNumber(number + value);

    if (!operators.includes(value)) {
      setResult(eval(number + value).toString());
    }
  };
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{result}</div>
        <div className="current-operand">{number}</div>
      </div>
      <button
        className="span-two"
        onClick={() => {
          setNumber("");
          setResult("");
        }}
      >
        AC
      </button>
      <button onClick={()=>{
          setNumber(number.slice(0,-1))
          
      }}>DEL</button>
      <button
        onClick={() => {
          updateCalc("/");
        }}
      >
        ÷
      </button>
      <div className="grid-numbers">{createDigits()}</div>
      <button
        onClick={() => {
          updateCalc("*");
        }}
      >
        *
      </button>
      <button
        onClick={() => {
          updateCalc("+");
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          updateCalc("-");
        }}
      >
        -
      </button>
      <button onClick={() => updateCalc(".")}>.</button>
      <button onClick={() => updateCalc("0")}>0</button>
      <button
        className="span-two"
        onClick={() => {
          setNumber(eval(number).toString());
        }}
      >
        =
      </button>
    </div>
  );
}

export default App;
