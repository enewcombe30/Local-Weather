import { useState } from "react";
import { DailyWeather } from "../types/types";
import { defaultWeather } from "../constants/weather";
import useHourlyForecast from "./useHourlyForecast";
import useWeather from "./useWeather";

export default function useForecast() {
  const { remainingHours } = useHourlyForecast();
  const { forecast } = useWeather();

  const [dayByHour, setDayByHour] = useState<DailyWeather[]>(
    defaultWeather.forecast.forecastday[0].hour
  );
  const [showHourlyForecast, setShowHourlyForecast] = useState<boolean>(false);

  function setForecast(selectedDay: number) {
    if (forecast && selectedDay === 0) {
      const todayForecast = remainingHours(forecast.forecastday[0].hour);
      return setDayByHour(todayForecast);
    }
    return setDayByHour(forecast.forecastday[selectedDay].hour);
  }

  function handleShowHourly(selectedDay: number) {
    setForecast(selectedDay);
    setShowHourlyForecast(true);
  }

  return {
    handleShowHourly,
    showHourlyForecast,
    dayByHour,
    setForecast,
    forecast,
  };
}
