import { useEffect, useState } from 'react'
import weatherService from '/src/services/weather'

const Weather = ({info, search}) => {
    const [weather, setWeather] = useState({})
    
    useEffect(() => {
        weatherService
        .getWeather(info.capital)
        .then(response => {
            setWeather(response.data.current)
        })
    },[search, info.capital])


    if (!weather.condition) return null
    return(            
    <div>
        <h2>Weather in {info.capital}</h2>
        <div>Temperature {weather.temp_c}°C</div>
        <div>{weather.condition.text}</div>
        <img src={weather.condition.icon} alt={weather.condition.text} />
        <div>Wind: {weather.wind_kph} k/ph </div>
    </div>
    )
}

export default Weather