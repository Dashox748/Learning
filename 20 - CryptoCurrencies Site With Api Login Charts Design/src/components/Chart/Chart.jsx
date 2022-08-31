import { Line } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler,
} from "chart.js";
ChartJS.register(
  Title,
  Tooltip,
  LineElement,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  Filler
);

function Chart({cryptoName}) {

  useEffect(() => {
    axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${cryptoName}/market_chart?vs_currency=usd&days=30&interval=daily`
      )
      .then((response) => {
        let newDatasPrice = [];
        let newDateLength = [];
        response.data.prices.map((price) =>
          price.filter((price, index) => {
            if (index % 2 !== 0) {
              newDatasPrice.push(Math.round(price * 1000) / 1000);
            } else if (index % 2 === 0) {
              newDateLength.push(new Date(price).getDate());
            }
          })
        );
        setData({
          labels: newDateLength,
          datasets: [
            {
              label: cryptoName,
              data: newDatasPrice,
              backgroundColor: "red",
              borderColor: "red",
              tension: 0.4,
              showLine: true,
            },
          ],
        });
      });
  }, [cryptoName]);

  const [data, setData] = useState({
    labels: [],
    datasets: [
      {
        label: "Graph",
        data: [],
        backgroundColor: "red",
        borderColor: "red",
        tension: 0.4,
        showLine: true,
      },
    ],
  });

  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Line data={data}>Hello</Line>
    </div>
  );
}

export default Chart;
