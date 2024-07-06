import { useState, useEffect } from "react";
import { getCurrentWeather } from "../apiCalls/getWeatherData";
import { Weather } from "../types/types";
import { defaultWeather } from "../constants/weather";

export default function useWeather() {
  const [currentWeather, setCurrentWeather] = useState<Weather>(defaultWeather);

  useEffect(() => {
    getCurrentWeather().then((data) => setCurrentWeather(data));
  }, []);

  return { currentWeather };
}
