import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

const Dashboard = () => {
  const bmiData = {
    labels: ["Underweight", "Normal", "Overweight", "Obese"],
    datasets: [
      {
        label: "BMI Distribution",
        data: [5, 20, 10, 3],
        backgroundColor: ["#36A2EB", "#4BC0C0", "#FFCE56", "#FF6384"],
      },
    ],
  };

  const activityData = {
    labels: ["Running", "Cycling", "Swimming", "Yoga", "Walking"],
    datasets: [
      {
        label: "Weekly Hours",
        data: [4, 2, 1.5, 3, 2.5],
        backgroundColor: "rgba(75,192,192,0.6)",
      },
    ],
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "1rem" }}>Medical Fitness Dashboard</h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "2rem" }}>
        <div style={{ flex: 1, minWidth: 300 }}>
          <h2 style={{ fontSize: "1.25rem" }}>BMI Distribution</h2>
          <Pie data={bmiData} />
        </div>

        <div style={{ flex: 1, minWidth: 300 }}>
          <h2 style={{ fontSize: "1.25rem" }}>Physical Activity (hrs/week)</h2>
          <Bar data={activityData} />
        </div>
      </div>

      <div style={{ marginTop: "2rem" }}>
        <h2 style={{ fontSize: "1.25rem" }}>Health Summary</h2>
        <ul>
          <li>Average BMI: 23.4 (Normal)</li>
          <li>Resting Heart Rate: 68 bpm</li>
          <li>Blood Pressure: 118/76 mmHg</li>
          <li>Sleep Duration: 7.5 hrs/night</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
