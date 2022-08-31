import "./content.css";
import Up from "../../data/img/up.png";
import Down from "../../data/img/down.png";
import Chart from "../../components/Chart/Chart";
function Content({
  cryptoName,
  img,
  cryptoCurrentPrice,
  cryptoChangePriceCurrency,
  cryptoChangePricePercentage,
  cryptoSymbol,
    cryptoRank,
    cryptoMarketCap,
}) {




  return (
    <div className="content__container">
      <div className="content__container-info">
        <div className="crypto__display-name">
          <h2>
            {cryptoName}({cryptoSymbol})
          </h2>
          <img src={img} alt={cryptoName} />
        </div>
          <div>
            <h1>{cryptoCurrentPrice} $</h1>
            <p className="crypto__display-current-price">Current Price</p>
            <p className="crypto__display__percentage-usd">
              {cryptoChangePriceCurrency > 0 ? (
                <img src={Up} alt="" />
              ) : (
                <img src={Down} alt="" />
              )}
              <span className="crypto__display-current-usd">
                {cryptoChangePriceCurrency}
              </span>
              {cryptoChangePriceCurrency > 0 ? <span>+</span> : null}
              {cryptoChangePricePercentage}%
            </p>
          </div>
        <div className="center"><h2>{cryptoName} Market Cap</h2><h3>{cryptoMarketCap}$</h3></div>
        <div className="center"><h2>{cryptoName} Rank</h2><h3>{cryptoRank}</h3></div>
      </div>
      <div className="content__container-graphs">
        <Chart cryptoName={cryptoName.charAt(0).toLowerCase() + cryptoName.slice(1).toLowerCase()}/>

      </div>
    </div>
  );
}

export default Content;
