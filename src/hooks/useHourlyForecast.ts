import { DailyWeather } from "../types/types";
export default function useHourlyForecast() {
  function remainingHours(forecastHours: DailyWeather[]) {
    const now = new Date();

    return forecastHours.filter((hourly) => {
      const hourTime = new Date(hourly.time.replace(" ", "T"));
      return hourTime > now;
    });
  }
  return { remainingHours };
}
