import React from "react";
import { useState } from "react";
import useWeather from "./hooks/useWeather";
import useDate from "./hooks/useDate";
import useHourlyForecast from "./hooks/useHourlyForecast";
import DayBlock from "./components/DayBlock";
import { DailyWeather } from "./types/types";
import { defaultWeather } from "./constants/weather";

function App() {
  const { forecast } = useWeather();
  const { formatDate } = useDate();
  const { remainingHours } = useHourlyForecast();

  const [dayByHour, setDayByHour] = useState<DailyWeather[]>(
    defaultWeather.forecast.forecastday[0].hour
  );

  function setForecast(selectedDay: number) {
    // add open hourly modal to this function or create new function to set forecast and display hourly modal
    console.log(selectedDay);
    if (forecast && selectedDay === 0) {
      const todayForecast = remainingHours(forecast.forecastday[0].hour);
      return setDayByHour(todayForecast);
    }
    return setDayByHour(forecast.forecastday[selectedDay].hour);
  }

  function renderForecast() {
    const hasForecast = forecast && forecast.forecastday.length > 0;
    if (!hasForecast || !Array.isArray(forecast.forecastday)) {
      console.error("Forecast is not available or is not an array");
      return null;
    }

    const days = forecast.forecastday.map((day, dayIndex) => {
      // Change DayBlock to the below code
      return (
        <div key={dayIndex}>
          <div
            className="w-fit mx-auto border-2 border-slate-300 padding-4 rounded-2xl"
            onClick={() => setForecast(dayIndex)}
          >
            <div className="p-4">
              <div className="w-fit mx-auto border-b border-slate-300 pb-1.5 mb-4">
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
                  <div className="text-lg mb-2">{day.day.condition.text}</div>
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
              </div>
            </div>
          </div>
        </div>
      );
    });
    return days;
  }

  return (
    <div className="w-screen h-screen bg-slate-200 px-[3rem]">
      <div className="mx-auto w-fit">
        <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
          Local Weather App
        </div>
        <div className="flex mx-auto my-4 space-x-[2.5rem]">
          {renderForecast()}
        </div>
        <div className="my-[4rem] w-full h-[8rem] border-2 border-slate-300 padding-4 rounded-2xl"></div>
      </div>
    </div>
  );
}

export default App;
