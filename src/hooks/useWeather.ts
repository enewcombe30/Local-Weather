import { useState, useEffect } from "react";
import {
  getWeatherForecast,
  getUserLocation,
} from "../apiCalls/getWeatherData";
import { Weather, ForecastDay } from "../types/types";
import { defaultWeather } from "../constants/weather";

export default function useWeather() {
  const [weatherForecast, setWeatherForecast] =
    useState<Weather>(defaultWeather);
  const [forecast, setForecast] = useState<ForecastDay>(
    defaultWeather.forecast
  );
  const [currentLocation, setCurrentLocation] = useState<string>("");

  // Function to get the user's location and then get the city name
  function getUserLocationAndCity(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const location = await getUserLocation(latitude, longitude);
          const cityName = location.results[0].components.city;

          const formattedCityName =
            location.results.length >= 1 ? cityName.toLowerCase() : "london";

          // const cityName = await getCityName(latitude, longitude);
          setCurrentLocation(formattedCityName);
        },
        (error: GeolocationPositionError) => {
          console.error(`Error Code: ${error.code}, Message: ${error.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 5000,
          maximumAge: 0,
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser");
    }
  }

  getUserLocationAndCity();

  useEffect(() => {
    currentLocation !== "" &&
      getWeatherForecast(currentLocation).then((data) =>
        setWeatherForecast(data)
      );
  }, [currentLocation]);

  useEffect(() => {
    weatherForecast &&
      weatherForecast.forecast &&
      setForecast(weatherForecast.forecast);
  }, [weatherForecast]);

  return { currentLocation, forecast };
}
