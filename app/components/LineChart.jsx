"use client"
import { useState, useEffect } from "react"
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

const data = {
  labels: [],
  datasets: [
    {
      label: "My label",
      fill: true,
      data: [],
      borderWidth: 2,
      pointRadius: 3,
      borderColor: "rgb(255, 84, 3)",
      backgroundColor: "rgba(255, 83, 3, 0.116)",
    },
  ],
}

const options = {
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
}



const LineChart = async (props) => {
  const [lineData, setLineData] = useState(data)
  const [filter, setFilter] = useState("All Time")

  const data_d = props.data

  const labels = Object.keys(data_d.graph_data.views).map((date => dayjs(date).format("DD MMM")));
  
  const linedata = Object.values(data_d.graph_data.views)

  const filterData = Object.entries(data_d.graph_data.views)

  // let filtering = Math.floor(Math.random() * 10)
  // let filtering = Math.floor(Math.random() * 10)
  // let filterdata = linedata[0]

  // console.log(filtering)
  // console.log(filterdata)

  useEffect(() => {
    const updateChart = () => {
      const updatedData = {
        ...lineData,
        labels: labels,
        datasets: [
          {
            ...lineData.datasets[0],
            labels: labels,
            data: linedata
          },
        ],
      }
      setLineData(updatedData)
    }
    updateChart()
  }, [filter])

  const handleFilterChange = (event) => {
    let filterdata;
    if (filter === "1 day") {
      const filtering = Math.floor(Math.random() * 10)
      filterdata = linedata[filtering]
      console.log(filterdata);
    } else if (filter === "3 days") {
      filterdata = linedata.slice(0, 3)
      console.log(filterdata);
    } else if (filter === "7 days") {
      filterdata = linedata.slice(0, 7)
      console.log(filterdata)
    }



    setFilter(event.target.value)
    const updateFilterChart = {
    ...lineData,
    labels: labels,
      datasets: [
        {
          ...lineData.datasets[0],
          labels: labels,
          data: filterdata
        },
      ],
    }
    setLineData(updateFilterChart)
    // const filterData = {
    //   ...lineData,
    //   labels: labels,
    //   datasets: [
    //     {
    //       ...lineData.datasets[0],
    //       data: filterdata
    //     },
    //   ],
    // }
  
    // setLineData(updatedData)
  }


  // console.log(lineData);

  return (
    <div>
      <div className="filter" value={filter}>
        <option value="1 day" className="btn" onClick={handleFilterChange}>1 Day</option>
        <option value="3 days" className="btn" onClick={handleFilterChange}>3 Days</option>
        <option value="7 days" className="btn" onClick={handleFilterChange}>7 Days</option>
        <option value="30 days" className="btn" onClick={handleFilterChange}>30 Days</option>
        <option value="All time" className="btn" onClick={handleFilterChange}>All Time</option>
        <option className="btn">Custom Date</option>
      </div>
      <div className="line-card">
        <div className="line-chart-top">
          <h2 className="line-text-margin">Page Views</h2>
          <Link href='/information'>
            <AiOutlineInfoCircle className="line-top-txt"/>
          </Link>        
        </div>
        <p className="line-top-txt line-text-margin">All time</p>
        <h1>{Math.max(...linedata)}</h1>
        <Line data={lineData} options={options}/>
      </div>
    </div>
  )
}

export default LineChart