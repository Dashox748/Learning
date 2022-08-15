import "./App.css";
import { useState } from "react";

function App() {
  const [temperature, setTemperature] = useState(12);

  const plus = () => {
    setTemperature(prevState => prevState+1);
  };
  const minus = () => {
    setTemperature(prevState => prevState-1);
  };
  return (
    <div className="temperature__container">
      <div className="temperature__container-padding">
        <div className="temperature__container-display">{temperature}*c</div>
        <div className="temperature__container-change">
          <button onClick={()=>{
            setTemperature(prevState => prevState+1);
          }}>+</button>
          <button onClick={minus}>-</button>
        </div>
      </div>
    </div>
  );
}

export default App;
