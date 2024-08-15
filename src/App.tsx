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

    // move to hour;y dropdown
    const remainingHours = (forecastHours: DailyWeather[]) => {
      const now = new Date();

      return forecastHours.filter((hourly) => {
        const hourTime = new Date(hourly.time.replace(" ", "T"));
        return hourTime > now;
      });
    };

    const days = forecast.forecastday.map((day, dayIndex) => {
      // get daily averages here
      const hourlyForecast =
        dayIndex === 0 ? remainingHours(day.hour) : day.hour;
      // move to hourly dropdown
      const hourly = hourlyForecast.map((hour, hourIndex) => {
        return (
          <React.Fragment key={hourIndex}>
            <div className="inline w-fit mx-auto">
              <DayBlock shownDay={hour} />
            </div>
          </React.Fragment>
        );
      });
      // fomratted block
      return (
        <div className="mx-auto w-fit h-fit flex" key={dayIndex}>
          <div className="w-fit mx-auto border-2 border-slate-300 padding-4 rounded-2xl">
            <div className="p-4">
              <div className="w-fit mx-auto border-b border-slate-300 pb-1.5">
                {formatDate(day.date)}
              </div>
              <div className="w-[24rem] h-fit flex">
                <div className="w-[9rem]">
                  <img
                    className="w-[8rem] h-[8rem] bg-blue-300 rounded-full mr-8"
                    src={`${day.day.condition.icon}`}
                  ></img>
                </div>
                <div className="ml-8 w-[16rem]">
                  <div>{day.day.condition.text}</div>
                  <div className="w-[12rem] flex">
                    <div className="w-[8rem]">Chance of Rain: </div>
                    <div className="w-[4rem]">
                      {day.day.daily_chance_of_rain}%
                    </div>
                  </div>
                  <div className="w-[12rem] flex">
                    <div className="w-[8rem]">Max Temp:</div>
                    <span className="w-[4rem]">
                      {day.day.maxtemp_c}&deg;{"C"}
                    </span>
                  </div>
                  <div className="w-[12rem] flex">
                    <div className="w-[8rem]">Min Temp:</div>
                    <span className="w-[4rem]">
                      {day.day.mintemp_c}&deg;{"C"}
                    </span>
                  </div>
                  <div className="w-[12rem] flex">
                    <div className="w-[8rem]">Humidity:</div>
                    <span className="w-[4rem]">{day.day.avghumidity}%</span>
                  </div>
                </div>
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
