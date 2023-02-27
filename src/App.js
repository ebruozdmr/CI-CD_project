import React from 'react'

import WeatherInput from './components/Weather/WeatherInput'
import Button from './components/UI/Button'
import WeatherResults from './components/Weather/WeatherResults/WeatherResults'
import { WeatherContextProvider } from './context/WeatherContext'

import './dist/css/App.css'
import './dist/css/media.css'
/* Deneme 2 */
const App = () => {
  return (
    <WeatherContextProvider>
      <section>
        <WeatherInput id="city"></WeatherInput>

        <Button id="button"></Button>
      </section>
      <section>
        <WeatherResults id="result"></WeatherResults>
      </section>
    </WeatherContextProvider>
  )
}

export default App
