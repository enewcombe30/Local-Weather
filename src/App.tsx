import useWeather from "./hooks/useWeather";

function App() {
  const { currentWeather } = useWeather();
  const tempInC = currentWeather.current.tempC;
  console.log("current", currentWeather);
  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-fit mx-auto py-[4rem]">Local Weather App</div>
      <div className="flex">
        <div className="ml-[8rem] w-fit">
          <div className="w-[24rem] flex">
            <div className="w-[5rem]">Location </div>
            <div className="w-[19rem]">{`: ${currentWeather.location.name}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[5rem]">Area</div>
            <div className="w-[19rem]">{`: ${currentWeather.location.region}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[5rem]">Country</div>
            <div className="w-[19rem]">{`: ${currentWeather.location.country}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[5rem]">Local time </div>
            <div className="w-[19rem]">{`: ${currentWeather.location.localtime}`}</div>
          </div>
        </div>
        <div className="ml-[8rem] w-fit">
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Condition </div>
            <div className="w-[18rem]">{`: ${currentWeather.current.condition.text}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Temp C</div>
            <div className="w-[18rem]">{`: ${tempInC}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Feels Like</div>
            <div className="w-[18rem]">{`: ${currentWeather.current.feelsLikeC}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Wind Dir </div>
            <div className="w-[18rem]">{`: ${currentWeather.current.windDir}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Wind Speed</div>
            <div className="w-[18rem]">{`: ${currentWeather.current.windMph}`}</div>
          </div>
          <div className="w-[24rem] flex text-xs">
            <div className="w-[6rem]">Last Updated</div>
            <div className="w-[18rem]">{`: ${currentWeather.current.lastUpdated}`}</div>
          </div>
        </div>
      </div>

      <div></div>
    </div>
  );
}

export default App;
