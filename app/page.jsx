"use client"
import ChartHeader from "./components/ChartHeader"
import Charts from "./components/Charts"
import LineChart from "./components/LineChart"


const Homepage = () => {
  return (
    <div>
      <ChartHeader />
      <Charts />
      <LineChart />
    </div>
  )
}

export default Homepage