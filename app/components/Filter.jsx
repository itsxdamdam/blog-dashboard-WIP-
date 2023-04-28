import Link from "next/link";

console.log(Math.floor(Math.random() * 10));

async function fetchData() {
  const res = await fetch('https://fe-task-api.mainstack.io/')
  const data = await res.json()
  return data
}

const Filter = async() => {
  const data = await fetchData()

  return (
    <div className="filter">
      <button className="btn">1 Day</button>
      <button className="btn">3 Days</button>
      <button className="btn">7 Days</button>
      <button className="btn">30 Days</button>
      <button className="btn">All Time</button>
      <button className="btn">Custom Date</button>
    </div>
  )
}

export default Filter