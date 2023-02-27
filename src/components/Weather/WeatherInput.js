import React, { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
const WeatherInput = () => {
  const ctx = useContext(WeatherContext)

  return (
    <section>
      <div>
        <input
          value={ctx.name}
          onChange={ctx.cityChangeHandler}
          type="text"
          id="input"
          placeholder="Enter a city name..."
          autoComplete="on"
        ></input>
      </div>
    </section>
  )
}

export default WeatherInput
