"use client"
import { 
  Chart as ChartJS, 
  ArcElement,
  Tooltip, 
  Legend 
} from "chart.js";
import { Doughnut } from "react-chartjs-2"

ChartJS.register(
  ArcElement, 
  Tooltip, 
  Legend
);

async function fetchData() {
  const res = await fetch('https://fe-task-api.mainstack.io/')

  const data = await res.json()

  return data
}

const CircleChart = async() => {
  const data = await fetchData();
  const perc = data.top_sources.map(({percent}) => percent);
  const labels = data.top_sources.map(({source}) => source);
  return (
    <div>
      <div className="dough">
        <Doughnut 
          height={200}
          width={250}
          data={{
            labels,
            datasets: [
              {
                labels: labels,
                data: perc,
                backgroundColor: [
                  'rgba(89, 158, 234, 1)',
                  'rgba(132, 79, 246, 1)',
                  'rgba(15, 183, 122, 1)',
                  'rgba(250, 183, 10, 1)',
                  'rgba(240, 148, 104, 1)'
                ],
                hoverOffset: 4
              }
            ]
          }}
          options={{
            responsive: true,
            cutout: 60,
            radius: 90,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
              title: {
                display: false,
              },
            },
          }}
        />
      </div>
      
    </div>
  )
}

export default CircleChart