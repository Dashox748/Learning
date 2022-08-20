import axios from "axios";
import { useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [location, setLocation] = useState("");
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&lang=pl&units=metric&appid=dd210c000020e9994ffe7c0f71c8097d`;

  const searchLocation = (event) => {
    if (event.key === "Enter") {
      axios.get(url).then((response) => {
        setData(response.data);
        setLocation("");
      });
    }
  };
  return (
    <div className="App">
      <div className="input-placment">
        <input
          placeholder="Wpisz miasto"
          value={location}
          onKeyDown={searchLocation}
          onChange={(event) => {
            setLocation(event.target.value);
          }}
        />
      </div>
      <div className="data__placment">
        <div className="data__placment-main">
          <h1>{data.name}</h1>
          {data.main ? <h2>{data.main.temp} °c</h2> : null}
        </div>
        <div className="data__placment-desc">
          {data.weather ? <h1>{data.weather[0].description}</h1> : null}

        </div>
        <div className="data__placment-more">
          <div>Cisnienie{data.main ? <h2>{data.main.pressure}hPa</h2> : null}</div>
          <div>Odczuwalna {data.main ? <h2>{data.main.feels_like}</h2> : null}</div>


        </div>
      </div>
    </div>
  );
}

export default App;
