import Link from "next/link"
import Greeting from "./Greeting"

const ChartHeader = () => {
  return (
    <div className="chartheader">
      <div className="left">
        <Greeting />
        <p>Check out your dashboard summary</p>
      </div>
      <div className="right">
        <Link href="/view-analytics">View analytics</Link>
      </div>
    </div>
  )
}

export default ChartHeader