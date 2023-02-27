import React, { useState, useEffect, createContext } from "react";

//Initial Values
const WeatherContext = createContext({
  resultForecasts: [],
  resultLocations: [],
  name: "",
  cityChangeHandler: (event) => {},
  fetchResultsHandler: async () => {},
});

const API_Key = "f6b506eb8a024853a6f124125221606";

export const WeatherContextProvider = (props) => {
  const [resultForecasts, setResultForecasts] = useState([]);
  const [resultLocations, setResultLocations] = useState([]);
  const [name, setName] = useState("");
  const [error, setError] = useState(null);

  const cityChangeHandler = (event) => {
    event.preventDefault();
    const newName = event.target.value;
    setName(newName);
  };

  const fetchResultsHandler = async () => {
    setError(null);
    try {
      //GET Request
      if (name) {
        const response = await fetch(
          `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${name}&days=1&aqi=yes&alerts=yes`
        );

        if (!response.ok) {
          throw new Error("Something went wrong!");
        }

        const data = await response.json();

        const resultForecast = data.forecast.forecastday;
        const resultLocation = data.location;

        setResultForecasts([...resultForecasts, ...resultForecast]);
        setResultLocations([...resultLocations, { ...resultLocation }]);
      }
    } catch (error) {
      setError(error.message);
    }
  };
  useEffect(() => {
    const resultForecasts = JSON.parse(localStorage.getItem("resultForecasts"));
    if (resultForecasts) {
      setResultForecasts(resultForecasts);
    }
  }, []);

  useEffect(() => {
    const resultLocations = JSON.parse(localStorage.getItem("resultLocations"));
    if (resultLocations) {
      setResultLocations(resultLocations);
    }
  }, []);

  useEffect(() => {
    if (resultForecasts.length > 3) {
      let i = resultForecasts.length - 3;
      let deletedResultForecasts = resultForecasts.splice(0, i);

      setResultForecasts(resultForecasts);
      localStorage.setItem("resultForecasts", JSON.stringify(resultForecasts));
    } else {
      localStorage.setItem("resultForecasts", JSON.stringify(resultForecasts));
    }
  }, [resultForecasts]);

  useEffect(() => {
    if (resultLocations.length > 3) {
      let i = resultLocations.length - 3;
      let deletedResultLocations = resultLocations.splice(0, i);

      setResultLocations(resultLocations);
      localStorage.setItem("resultLocations", JSON.stringify(resultLocations));
    } else {
      localStorage.setItem("resultLocations", JSON.stringify(resultLocations));
    }
  }, [resultLocations]);

  return (
    <WeatherContext.Provider
      value={{
        resultForecasts: resultForecasts,
        resultLocations: resultLocations,
        name: name,
        fetchResultsHandler: fetchResultsHandler,
        cityChangeHandler: cityChangeHandler,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherContext;
