import LineChart from './LineChart'
import DoughnutChart  from './DoughnutChart'
import CircleChart from './CircleChart';
import Link from 'next/link'
import { GB, NG, DE, GH, FI } from "country-flag-icons/react/3x2";
import { FcGoogle } from "react-icons/fc";
import FacebookIcon from './FacebookIcon';
import InstagramIcon from './InstagramIcon';
import LinkedInIcon from './LinkedinIcon';

const countryFlags = {
  Nigeria: {
    flag: <NG />,
    color: "#599eea",
  },
  Germany: {
    flag: <DE />,
    color: "#844ff6",
  },
  Finland: {
    flag: <FI />,
    color: "#0fb77a",
  },
  Ghana: {
    flag: <GH />,
    color: "#fab70a",
  },
  "United Kingdom": {
    flag: <GB />,
    color: "#f09468",
  },
}

const socialIcons = {
  google: {
    icon: <FcGoogle />,
    color: "#599eea",
  },
  instagram: {
    icon: <InstagramIcon />,
    color: "#844ff6",
  },
  facebook: {
    icon: <FacebookIcon />,
    color: "#0fb77a",
  },
  linkedin: {
    icon: <LinkedInIcon />,
    color: "#fab70a",
  }
}

async function fetchData() {
  const res = await fetch('https://fe-task-api.mainstack.io/')
  // await new Promise((resolve => setTimeout(resolve, 1000))) //wait 1 second

  const data = await res.json()
  return data
}

const Charts = async() => {
  const data = await fetchData();
  // const perc = data.top_locations.map(({percent}) => percent);
  const locations = data.top_locations
  const sources = data.top_sources
  return (
    <div>
      <LineChart className="cards"/>
      <br />
      <div className="card-container">
        <div className="cards">
          <div className="card-top">
            <h3>Top Locations</h3>
            <Link href="/view">View full reports</Link>
          </div>
          <div className="card-main">
            <div className="card-text">
              {locations.map((location) => (
                <div className="locations">
                  <span className='flag'>
                    {countryFlags[location.country].flag}
                  </span>
                  <span className='c-text'>{location.country}</span>{" "}
                  <span className='l-text'>{location.percent}%</span>
                  <div className="dot" style={{
                    backgroundColor: countryFlags[location.country].color,
                  }}></div>
                </div>
              ))}
            </div>
            <DoughnutChart />
          </div>
        </div>
        <div className="cards">
          <div className="card-top">
            <h3>Top Referral source</h3>
            <Link href="/view">View full reports</Link>
          </div>
          <div className="card-main">
            <div className="card-text">
              {sources.map((source) => (
                <div className="locations">
                  <span className='icon'>
                    {socialIcons[source.source].icon}
                  </span>
                  <span className='c-text'>{source.source}</span>{" "}
                  <span className='l-text'>{source.percent}%</span>
                  <div className="dot" style={{
                    backgroundColor: socialIcons[source.source].color,
                  }}></div>
                </div>
              ))}
            </div>
            <CircleChart />
          </div>
        </div>
      </div>
    </div>
    
  
  )
}

export default Charts