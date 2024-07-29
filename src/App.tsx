import React from "react";
import useWeather from "./hooks/useWeather";
import useDate from "./hooks/useDate";
import DayBlock from "./components/DayBlock";
import { DailyWeather } from "./types/types";

function App() {
  const { forecast } = useWeather();
  const { formatDate } = useDate();

  function renderForecast() {
    const hasForecast = forecast && forecast.forecastday.length > 0;
    if (!hasForecast || !Array.isArray(forecast.forecastday)) {
      console.error("Forecast is not available or is not an array");
      return null;
    }

    const remainingHours = (forecastHours: DailyWeather[]) => {
      const now = new Date();

      return forecastHours.filter((hourly) => {
        const hourTime = new Date(hourly.time.replace(" ", "T"));
        return hourTime > now;
      });
    };

    const days = forecast.forecastday.map((day, dayIndex) => {
      const hourlyForecast =
        dayIndex === 0 ? remainingHours(day.hour) : day.hour;
      console.log(hourlyForecast);
      const hourly = hourlyForecast.map((hour, hourIndex) => {
        return (
          <React.Fragment key={hourIndex}>
            <div className="inline w-fit mx-auto">
              <DayBlock shownDay={hour} />
            </div>
          </React.Fragment>
        );
      });

      return (
        <div className="mx-auto w-fit h-fit flex" key={dayIndex}>
          <div className="w-fit mx-auto border-2 border-slate-300 padding-4 rounded-2xl">
            <div className="p-4">
              <div className="w-fit mx-auto border-b border-slate-300 pb-1.5">
                {formatDate(day.date)}
              </div>
              <div className="w-[12rem] overflow-x-auto overflow-hidden no-scrollbar">
                <div className="flex w-fit">{hourly}</div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return days;
  }

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
        Local Weather App
      </div>
      <div className="flex">{renderForecast()}</div>
    </div>
  );
}

export default App;
