import './Component.css'


const Main = ({weather}) => {
    const icon = {
        "01d":'./Assets/clear.png',
        "01n":'./Assets/clear.png',
        "02d":'./Assets/cloud.png',
        "02n":'./Assets/cloud.png',
        "03d":'./Assets/cloud.png',
        "03n":'./Assets/cloud.png',
        "04d":'./Assets/drizzle.png',
        "04n":'./Assets/drizzle.png',
        "09d":'./Assets/rain.png',
        "09n":'./Assets/rain.png',
        "010d":'./Assets/rain.png',
        "010n":'./Assets/rain.png',
        "013d":'./Assets/snow.png',
        "013n":'./Assets/snow.png',

    }
  return (
    <div className="main-component">
        <div className="temp">
            <img src={`${icon[weather.weather[0].icon] || './Assets/clear.png'}`} height={150} alt="" />
            <h1>{weather.main.temp}°C</h1>
            <h2>{weather.name}</h2>
        </div>
        <div className="more-info">
            <div className="humidity">
                <img src='./Assets/humidity.png' height={30} alt="" />
                <div className="humidity-detail">
                    <h4>{weather.main.humidity}%</h4>
                    <h4>Humidity</h4>

                </div>
                <div className="wind">
                    <img src="./Assets/wind.png" height={30} alt="" />
                    <div className="wind-detail">
                        <h4>{weather.wind.speed}Km/hr</h4>
                        <h4>Wind Speed</h4>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main