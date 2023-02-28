import React, { useContext } from 'react'
import WeatherContext from '../../context/WeatherContext'
const Button = () => {
  const ctx = useContext(WeatherContext)
  return (
    <button type="submit" onClick={ctx.fetchResultsHandler}>
      Ara
    </button>
  )
}

export default Button
