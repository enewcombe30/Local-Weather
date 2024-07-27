import { useEffect, useState } from "react";
import useWeather from "./hooks/useWeather";
import { Day } from "./types/types";

function App() {
  const { forecast } = useWeather();
  const date = new Date();
  const hours = date.getHours();
  // Use getHours to get current weather from forecast hours instead of current weather

  // create renderdays function

  console.log("forecast in app", forecast);

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
        Local Weather App
      </div>
      <div>
        <div>{}</div>
        <div className="w-fit mx-auto">
          <div className="w-fit text-4xl pt-2 pb-0.5">{`${forecast?.forecastday[0].date}`}</div>
          <div className="w-fit mx-auto text-slate-400">{`${forecast?.forecastday[0].hour[0].temp_c}`}</div>
        </div>
        <div className="w-fit mx-auto">
          <div className="w-fit text-slate-400">{`${forecast?.forecastday[0].hour[1].time}`}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
