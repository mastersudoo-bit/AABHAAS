import React from "react";
import { Card, CardContent } from "@/components/ui/card";
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
  // Mock health data
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
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
      <h1 className="text-3xl font-bold col-span-full mb-4">Medical Fitness Dashboard</h1>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">BMI Distribution</h2>
          <Pie data={bmiData} />
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Physical Activity (hrs/week)</h2>
          <Bar data={activityData} />
        </CardContent>
      </Card>

      <Card className="col-span-full">
        <CardContent>
          <h2 className="text-xl font-semibold mb-2">Health Summary</h2>
          <ul className="list-disc pl-6 space-y-1">
            <li>Average BMI: 23.4 (Normal)</li>
            <li>Resting Heart Rate: 68 bpm</li>
            <li>Blood Pressure: 118/76 mmHg</li>
            <li>Sleep Duration: 7.5 hrs/night</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
