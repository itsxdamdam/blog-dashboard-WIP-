import Link from "next/link";
import dayjs from 'dayjs';


console.log();

async function fetchData() {
  const res = await fetch('https://fe-task-api.mainstack.io/')
  const data = await res.json()
  return data
}

async function get1Day() {
  const data = await fetchData()
  // console.log(data);
  // const views = Object.keys(data.graph_data.view).map((date => dayjs(date).format("DD MMM")));
  const views = Object.entries(data.graph_data.views)
  // const linedata = Object.values(data.graph_data.views)
  const oneDay = Math.floor(Math.random() * 10)
  const label = views[oneDay][0]
  const view = views[oneDay][1]
  

}

get1Day()

const Filter = async() => {
  const data = await fetchData()

  return (
    <div className="filter">
      <button className="btn">1 Day</button>
      <button className="btn">3 Days</button>
      <button className="btn">7 Days</button>
      <button className="btn">30 Days</button>
      <button className="btn active">All Time</button>
      <button className="btn">Custom Date</button>
    </div>
  )
}

export default Filter