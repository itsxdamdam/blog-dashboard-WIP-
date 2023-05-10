"use client"
import Link from "next/link";
import dayjs from 'dayjs';
import { useState } from "react";


async function get1Day() {
  
  // console.log(data.graph_data.views);
  const views = Object.keys(data.graph_data.views).map((date => dayjs(date).format("DD MMM")));
  // console.log(views);
  const views2 = Object.entries(data.graph_data.views)
  // console.log(views2);

  // const linedata = Object.values(data.graph_data.views)
  const oneDay = Math.floor(Math.random() * 10)
  // console.log(oneDay);
  // const label = views[oneDay][0]
  // const view = views[oneDay][1]
  

}


const Filter = async(props) => {
  const [lineData, setLineData] = useState(data)
  const [ filter, setFilter ] = useState('All Time')
  const data = Object.entries(props.data.graph_data.views)
  const oneDay = Math.floor(Math.random() * 10)

  return (
    <div className="filter">
      <option value="1day" className="btn">1 Day</option>
      <option className="btn">3 Days</option>
      <option className="btn">7 Days</option>
      <option className="btn">30 Days</option>
      <option className="btn active">All Time</option>
      <option className="btn">Custom Date</option>
    </div>
  )
}

export default Filter