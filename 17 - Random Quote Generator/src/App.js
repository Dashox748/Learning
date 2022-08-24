import axios from "axios";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [advice, setAdivce] = useState();
  const [clicked, setClicked] = useState(false);

  // without useEffect method
  // const generateQoute = () => {
  //   axios.get("https://api.adviceslip.com/advice").then((response) => {
  //     setAdivce(response.data.slip.advice);
  //   });
  // };
  useEffect(() => {
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      setAdivce(response.data.slip.advice);
    });
  }, [clicked]);
  return (
    <div className="App__container">
      <div>{advice}</div>

      <button
        onClick={() => {
          //Without useEffect Method
          // generateQoute();
          setClicked(!clicked);
        }}
      >
        Generate Qoute
      </button>
    </div>
  );
}

export default App;
