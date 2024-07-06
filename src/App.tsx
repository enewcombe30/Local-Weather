import { useState, useEffect } from "react";
import { getCurrentWeather } from "./apiCalls/getWeatherData";
import { Weather } from "./types/types";

function App() {
  const [currentWeather, setCurrentWeather] = useState<Weather>();
  useEffect(() => {
    getCurrentWeather();
  }, []);

  console.log(getCurrentWeather());

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-fit mx-auto py-[4rem]">Local Weather App</div>
    </div>
  );
}

export default App;
