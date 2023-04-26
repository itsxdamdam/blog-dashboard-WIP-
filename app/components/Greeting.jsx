

const Greeting = () => {
  const date = new Date();
  const hours = date.getHours()
  let greet;

  const name ="Blessing"

  if (hours < 12) {
    greet = `morning ${name}, ⛅`
  } else if (hours >= 12 && hours <= 17) {
    greet = `afternoon ${name}, ☀️`
  } else {
    greet = `evening ${name}, 🌙`
  }
  return (
    <div>
      <h2>Good {greet}</h2>
    </div>
  )
}

export default Greeting