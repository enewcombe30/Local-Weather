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
  const { formatDate, formatDateTime } = useDate();
  const { remainingHours } = useHourlyForecast();

  const [dayByHour, setDayByHour] = useState<DailyWeather[]>(
    defaultWeather.forecast.forecastday[0].hour
  );
  const [showHourlyForecast, setShowHourlyForecast] = useState<boolean>(false);

  function setForecast(selectedDay: number) {
    // add open hourly modal to this function or create new function to set forecast and display hourly modal
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

  function renderForecast() {
    const hasForecast = forecast && forecast.forecastday.length > 0;

    const days =
      hasForecast &&
      forecast.forecastday.map((day, dayIndex) => {
        // Change DayBlock to the below code
        return (
          <div key={dayIndex}>
            <div
              className="w-fit mx-auto border-2 border-slate-300 padding-4 rounded-2xl"
              onClick={() => handleShowHourly(dayIndex)}
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

  function renderForecastDetail() {
    const detail = dayByHour.map((hour, hourIndex) => {
      const isFirst = hourIndex === 0;
      return (
        <div key={hourIndex} className="m-auto">
          <div
            className={`min-w-[5rem] w-full my-2 text-slate-600 text-sm px-4 ${
              !isFirst && "border-l border-slate-500"
            }`}
          >
            <img className="mx-auto w-fit" src={hour.condition.icon}></img>
            <div className="mx-auto w-fit">
              {hour.temp_c}&deg;{"C"}
            </div>
            <div className="mx-auto w-fit">{hour.chance_of_rain}%</div>
            <div className="mx-auto w-fit">{formatDateTime(hour.time)}</div>
          </div>
        </div>
      );
    });
    return detail;
  }

  return (
    <div className="w-screen h-screen bg-slate-200 px-[10%]">
      <div className="mx-auto w-[90%]">
        <div className="mx-auto ">
          <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
            Local Weather App
          </div>
          <div className="mx-auto flex space-x-[2.5rem] w-full">
            {renderForecast()}
          </div>
          <div className="mx-auto my-[4rem] h-[10rem] w-full border-2 border-slate-300 padding-4 rounded-2xl flex overflow-scroll">
            {renderForecastDetail()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
