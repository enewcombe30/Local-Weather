import React from "react";
import { useEffect, useState } from "react";
import useWeather from "./hooks/useWeather";
import { DailyWeather, Day } from "./types/types";
import DayBlock from "./components/DayBlock";
import { defaultWeather } from "./constants/weather";

function App() {
  const { forecast } = useWeather();
  const [dayByHours, setDayByHour] = useState<DailyWeather[]>(
    defaultWeather.forecast.forecastday[0].hour
  );
  const date = new Date();
  const hours = date.getHours();
  const hasForecast = forecast && forecast.forecastday.length > 1;

  // Use getHours to get current weather from forecast hours instead of current weather

  // create renderdays function

  // console.log("forecast in app", forecast);

  // function renderForecast() {
  //   const day =
  //     hasForecast &&
  //     forecast.forecastday.map((day, dayIndex) => {
  //       const hasDayData = day && day.hour[0].time !== undefined;
  //       if (!hasDayData) {
  //         console.error(
  //           `Day data not available or incomplete for index ${dayIndex}`
  //         );
  //         return null;
  //       }
  //       const hourly =
  //         hasDayData &&
  //         day.hour.map((hour, hourIndex) => {
  //           console.log(hour, "hour");
  //           <>
  //             <div key={hourIndex}>{hour.time}</div>
  //             <div>{hour.feelslike_c}</div>
  //             {/* <DayBlock shownDay={hour} key={hourIndex} /> */}
  //           </>;
  //         });
  //       console.log("day", day);
  //       return (
  //         <div key={dayIndex}>
  //           <div className="inline m-8 w-fit h-fit">{day.date}</div>
  //           {hourly}
  //         </div>
  //       );
  //     });
  //   return day;
  // }
  function renderForecast() {
    if (!hasForecast || !Array.isArray(forecast.forecastday)) {
      console.error("Forecast is not available or is not an array");
      return null; // or return some fallback UI
    }

    const days = forecast.forecastday.map((day, dayIndex) => {
      const hasDayData =
        day &&
        day.hour &&
        day.hour.length > 0 &&
        day.hour[0].time !== undefined;
      if (!hasDayData) {
        console.error(
          `Day data not available or incomplete for index ${dayIndex}`
        );
        return null;
      }

      const hourly = day.hour.map((hour, hourIndex) => {
        console.log(hour, "hour");
        return (
          <React.Fragment key={hourIndex}>
            {/* <div>{hour.time}</div>
            <div>{hour.feelslike_c}</div> */}
            <DayBlock shownDay={hour} />
          </React.Fragment>
        );
      });

      console.log("day", day);
      return (
        <div key={dayIndex}>
          <div className="inline m-8 w-fit h-fit">{day.date}</div>
          {hourly}
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
      {renderForecast()}
    </div>
  );
}

export default App;
