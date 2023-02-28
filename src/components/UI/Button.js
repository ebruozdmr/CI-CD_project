import React, { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
const Button = () => {
  const ctx = useContext(WeatherContext)
  return (
    <button type="submit" onClick={ctx.fetchResultsHandler}>
      Araaaaa
    </button>
  )
}

export default Button
