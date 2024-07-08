import { useState, useEffect } from "react";
import { getCurrentWeather } from "../apiCalls/getWeatherData";
import { Weather } from "../types/types";
import { defaultWeather } from "../constants/weather";

export default function useWeather() {
  const [currentWeather, setCurrentWeather] = useState<Weather>(defaultWeather);
  const [currentLocation, setCurrentLocation] = useState<string>("");

  async function getCityName(
    latitude: number,
    longitude: number
  ): Promise<string> {
    const apiKey = "AIzaSyAEQMxozLdtGTawHLtQecMaUvb-sMXVWBI";
    const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key=${apiKey}`;

    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "OK") {
        const results = data.results;
        for (const result of results) {
          if (result.types.includes("locality")) {
            return result.address_components[0].long_name;
          }
        }
        return "City not found";
      } else {
        throw new Error(data.status);
      }
    } catch (error) {
      console.error("Error fetching the city name: ", error);
      return "Error fetching city name";
    }
  }

  // Function to get the user's location and then get the city name
  function getUserLocationAndCity(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeolocationPosition) => {
          const latitude = position.coords.latitude;
          const longitude = position.coords.longitude;

          const cityName = await getCityName(latitude, longitude);
          setCurrentLocation(cityName);
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

  console.log(currentLocation);

  useEffect(() => {
    currentLocation !== "" &&
      getCurrentWeather(currentLocation).then((data) =>
        setCurrentWeather(data)
      );
  }, [currentLocation]);

  return { currentWeather };
}
