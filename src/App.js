import React, { useEffect, useState } from "react";

export default function App() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState({});
  function handleChange(e) {
    setCity(e.target.value);
  }
  useEffect(() => {
    const API = "8ddfd983625f3f7f5e60ff5c5c8c3f0e";
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}`
    )
      .then((response) => response.json())
      .then((data) => {
        setWeatherData(data);
      });
  });
  return (
    <div>
      <input value={city} onChange={handleChange} />
      {weatherData.main && (
        <div>
          <p> Temperature : {weatherData.main.temp}</p>
          <p>Humidity : {weatherData.main.humidity}</p>
          <p> Feels like : {weatherData.main.feels_like} </p>
          <p>Description: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}
