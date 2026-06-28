import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
} from "chart.js";
import { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip
);

export default function TradingChart() {
    const [chartValue, setChartValue] = useState([
        
      ])

  const api =  fetch('https://api.frankfurter.dev/v1/2026-06-01..?base=USD&symbols=EUR')
    useEffect(()=>{
        async function fetchChart (){
       const chartRes = await api
       if(!chartRes.ok){
        throw new Error ("failed to fetch chart")
       }
       const chartData = await chartRes.json()
       Object.entries(chartData.rates).forEach(([date, rates]) => {
    console.log(date);      // 2026-01-01
    console.log(rates.EUR); // 0.85
    setChartValue([...chartValue,rates.EUR])
    console.log(chartValue);
    
});
       
    }
    fetchChart()
    })
  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },
    },

    interaction: {
      intersect: false,
      mode: "index",
    },

    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          color: "#666",
        },
      },

      y: {
        grid: {
          color: "rgba(255,255,255,.05)",
        },
        ticks: {
          color: "#666",
        },
      },
    },
  };

  const chartData = {
  labels: [...Array(70).keys()],
  datasets: [
    {
      data: chartValue,
      borderColor: "#D6FF2A",
      backgroundColor: (context) => {
        const { ctx, chartArea } = context.chart;

        if (!chartArea) return null;

        const gradient = ctx.createLinearGradient(
          0,
          chartArea.top,
          0,
          chartArea.bottom
        );

        gradient.addColorStop(0, "rgba(208,255,38,0.6)");
        gradient.addColorStop(1, "rgba(208,255,38,0)");

        return gradient;
      },
      fill: true,
      tension: 0.25,
      pointRadius: 0,
      borderWidth: 2,
    },
  ],
};

return <Line data={chartData} options={options} />;
}