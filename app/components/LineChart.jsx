"use client"
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js"

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
)
import { Line } from "react-chartjs-2"
import dayjs from 'dayjs';
import { AiOutlineInfoCircle } from "react-icons/ai";
import Link from "next/link";


async function fetchData() {
  const res = await fetch('https://fe-task-api.mainstack.io/')
  // await new Promise((resolve => setTimeout(resolve, 1000))) //wait 1 second

  const data = await res.json()

  return data
}

const LineChart = async() => {
  const data = await fetchData();
  const labels = Object.keys(data.graph_data.views).map((date => dayjs(date).format("DD MMM")));
  
  const linedata = Object.values(data.graph_data.views)

  return (
    <div className="line-card">
      <div className="line-chart-top">
        <h2 className="line-text-margin">Page Views</h2>
        <Link href='/information'>
          <AiOutlineInfoCircle className="line-top-txt"/>
        </Link>        
      </div>
      <p className="line-top-txt line-text-margin">All time</p>
      <h1>{Math.max(...linedata)}</h1>
      <Line 
        data={{
          labels,
          datasets: [
            {
              fill: true,
              data: linedata,
              borderWidth: 2,
              pointRadius: 3,
              borderColor: "rgb(255, 84, 3)",
              backgroundColor: "rgba(255, 83, 3, 0.116)",
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              display: false,
            },
            title: {
              display: false,
            },
          },
          scales: {
            x: {
              offset: true,
              grid: {
                display: false,
              },
              ticks: {
                // color: "#56616B",
              },
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 20,
              },
            },
          },
        }}
        />
    </div>
  )
}

export default LineChart