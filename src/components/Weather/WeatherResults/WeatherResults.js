import React, { useContext } from 'react'
import '../../../style/WeatherResults.css'
import WeatherContext from '../../../context/WeatherContext'
import WeatherForecast from './WeatherForecast'
import WeatherName from './WeatherName'
const WeatherResults = () => {
  const ctx = useContext(WeatherContext)
  if (ctx.resultForecasts.length === 0) {
    return <p>Found no movies.</p>
  }
  /* DENEME */
  if (ctx.resultForecasts.length > 0 && ctx.resultLocations.length > 0) {
    return (
      <div>
        {ctx.resultForecasts.map((resultForecast, i) => (
          <ul key={ctx.resultLocations[i].name} className="results">
            <WeatherName name={ctx.resultLocations[i].name}></WeatherName>

            <WeatherForecast
              date={resultForecast.date}
              minTemp_c={resultForecast.day.mintemp_c}
              maxTemp_c={resultForecast.day.maxtemp_c}
              chanceOfRain={resultForecast.day.daily_chance_of_rain}
              maxWind_kph={resultForecast.day.maxwind_kph}
            />
          </ul>
        ))}
      </div>
    )
  }
}
export default WeatherResults
