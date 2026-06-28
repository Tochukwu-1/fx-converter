// import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// 1. Register the required modules for a Line Chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChartComponent = () => {
  // 2. Define labels (X-axis) and datasets (Y-axis)
  const chartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Monthly Sales ($)',
        data: [1200, 1900, 3000, 5000, 4200, 6000],
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(192, 114, 75, 0.2)',
        tension: 0.2, // Smoothes out the line lines
      },
    ],
  };

  // 3. Define behavior and configuration options
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top', // Placements: 'top', 'bottom', 'left', 'right'
      },
      title: {
        display: true,
        text: 'Company Revenue Growth 2026',
      },
    },
  };

  return (
    <div style={{ width: '100%', margin: '0 auto', height: '100%' }}>
      <Line data={chartData} options={chartOptions} style={{ width: '100%', margin: '0 auto', height: '100%'}} />
    </div>
  );
};

export default LineChartComponent;
