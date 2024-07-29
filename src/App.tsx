import React from "react";
import useWeather from "./hooks/useWeather";
import useDate from "./hooks/useDate";
import DayBlock from "./components/DayBlock";

function App() {
  const { forecast } = useWeather();
  const { formatDate } = useDate();

  // Use getHours to get current weather from forecast hours instead of current weather
  function renderForecast() {
    const hasForecast = forecast && forecast.forecastday.length > 1;
    if (!hasForecast || !Array.isArray(forecast.forecastday)) {
      console.error("Forecast is not available or is not an array");
      return null; // or return some fallback UI
    }

    const days = forecast.forecastday.map((day, dayIndex) => {
      const hourly = day.hour.map((hour, hourIndex) => {
        // console.log(hour, "hour");
        return (
          <React.Fragment key={hourIndex}>
            <div className="inline w-fit mx-auto">
              <DayBlock shownDay={hour} />
            </div>
          </React.Fragment>
        );
      });

      // Example usage
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
