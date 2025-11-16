import React, { useEffect, useState } from "react";
import WeatherCard from "./WeatherCard";

const PopularCities = () => {
  const [weatherData, setWeatherData] = useState([]);
  const cities = ["New York", "London", "Tokyo", "Paris", "Sydney", "Casablanca"];
  const apiKey = "50125c23cc02daf927baf57603776551";

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const responses = await Promise.all(
          cities.map((city) =>
            fetch(
              `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
            )
              .then((res) => res.json())
              .catch((err) => {
                console.error(`Error fetching ${city}:`, err);
                return null;
              })
          )
        );
        // Filter out any null/error responses
        setWeatherData(responses.filter((data) => data && data.cod === 200));
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 pb-8">
      <h2 className="font-bold mb-8 text-center text-4xl text-white drop-shadow-lg">
        🌍 Popular Cities
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {weatherData.map((data, index) => (
          <WeatherCard key={index} weather={data} isPopular={true} />
        ))}
      </div>
    </div>
  );
};

export default PopularCities;
