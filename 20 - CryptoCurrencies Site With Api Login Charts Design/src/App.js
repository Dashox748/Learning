import "./App.css";
import Header from "./containers/Header/Header";
import Navbar from "./containers/Navbar/Navbar";
import Content from "./containers/Content/Content";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [crypto, setCrypto] = useState("bitcoin");
  const [data, setData] = useState([]);
  const [trending, setTrending] = useState([]);
  useEffect(() => {
    let endpoints = [
      `https://api.coingecko.com/api/v3/coins/${crypto}?localization=false&tickers=false&market_data=true&community_data=false&developer_data=true&sparkline=false`,
      "https://api.coingecko.com/api/v3/search/trending",
      "https://api.github.com/users/ejirocodes/followers",
      "https://api.github.com/users/ejirocodes/following",
    ];
    axios
      .all(endpoints.map((endpoint) => axios.get(endpoint)))
      .then((data) => {
        setData(data[0].data);
        setTrending(data[1].data);
      })

      .catch((error) => {
        console.log("error " + error);
      });
  }, [crypto]);

  const changeDisplayCrypto = (toWhatCrypto) => {
    setCrypto(toWhatCrypto);
  };
  console.log(data);
  return (
    <div className="App__container">
      <Header />
      <div style={{ display: "flex", height: "100%" }}>
        <Navbar changeCrypto={changeDisplayCrypto} />
        {data.length !== 0 ? (
          <Content
            cryptoName={
              data.id.charAt(0).toUpperCase() + data.id.slice(1).toLowerCase()
            }
            img={data.image.small}
            cryptoCurrentPrice={data.market_data.current_price.usd}
            cryptoChangePriceCurrency={data.market_data.price_change_24h}
            cryptoChangePricePercentage={
              data.market_data.price_change_percentage_24h
            }
            cryptoSymbol={data.symbol}
            cryptoRank={data.coingecko_rank}
            cryptoMarketCap={data.market_data.market_cap.usd}
            trending={trending.coins}
          />
        ) : null}
      </div>
    </div>
  );
}

export default App;
