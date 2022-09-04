import "./content.css";
import Up from "../../data/img/up.png";
import Down from "../../data/img/down.png";
import Chart from "../../components/Chart/Chart";
import TrendingCurrency from "../../components/TrendingCurrency/TrendingCurrency";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";

function Content({
  cryptoName,
  img,
  cryptoCurrentPrice,
  cryptoChangePriceCurrency,
  cryptoChangePricePercentage,
  cryptoSymbol,
  cryptoRank,
  cryptoMarketCap,
  trending,
  findCrypto,
  searched,
  cryptoList,
  changeCrypto,
}) {
  const columns = [
    { field: "id", headerName: "Id", width: 60 },
    {
      field: "col1",
      headerName: "Icon",
      width: 100,
      renderCell: (params) => (
        <img src={params.value} style={{ width: "40px" }} />
      ),
    },
    {
      field: "col2",
      headerName: "Name",
      width: 270,
      renderCell: (params) => (
        <span
          onClick={() => {
            changeCrypto(params.value);
          }}
        >
          {params.value.split("-").join(" ")}
        </span>
      ),
    },
    { field: "col3", headerName: "Symbol", width: 120 },
    { field: "col4", headerName: "Market Cap Rank", width: 150 },
  ];
  return (
    <>
      {searched ? (
        <div className="content__container-finded">
          <div style={{ height: 500, width: 1000 }}>
            <DataGrid rows={cryptoList} columns={columns} />
          </div>
        </div>
      ) : (
        <div className="content__container">
          {searched ? <div></div> : null}
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
            <div className="center">
              <h2>{cryptoName} Market Cap</h2>
              <h3>{cryptoMarketCap}$</h3>
            </div>
            <div className="center">
              <h2>{cryptoName} Rank</h2>
              <h3>{cryptoRank}</h3>
            </div>
          </div>
          <div className="content__container-graphs">
            <h2> CryptoCurrency Analytics</h2>
            <Chart
              cryptoName={
                cryptoName.charAt(0).toLowerCase() +
                cryptoName.slice(1).toLowerCase()
              }
            />
          </div>
          <div className="trending__container">
            <h2>
              Top-5 trending coins searched by users in the last 24 hours{" "}
            </h2>
            {trending.map((crypto, index) => {
              return index < 5 ? (
                <TrendingCurrency
                  img={crypto.item.small}
                  cryptoName={crypto.item.id}
                />
              ) : null;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Content;
