import useWeather from "../hooks/useWeather";

export default function DayBlock() {
  const { currentWeather } = useWeather();
  // add formatter to return days date
  return (
    <div className="w-fit mx-auto">
      <div className="w-fit mx-auto">
        <div className="w-fit text-4xl pt-2 pb-0.5">{`${currentWeather.location.name}`}</div>
        <div className="w-fit mx-auto text-slate-400">{`${currentWeather.location.region}`}</div>
      </div>
      <div className="w-fit mx-auto">
        <div className="w-fit text-slate-400">{`${currentWeather.location.country}`}</div>
      </div>
      <div className="w-fit flex mx-auto text-xs text-slate-400">
        {/* <div className="w-fit">{`${dayName()}`}</div> */}
      </div>
      <div className="my-[2rem]">
        <img
          className="w-[10rem] h-[10rem] bg-blue-300 rounded-full m-auto"
          src={`${currentWeather.current.condition.icon}`}
        ></img>
      </div>
      <div className="w-fit mx-auto">
        <div className="w-fit mx-auto flex text-3xl">
          {`${currentWeather.current.condition.text}`}
        </div>
        <div className="mx- w-fit">
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Temp C</div>
            <div className="w-[18rem]">
              {`: ${currentWeather.current.temp_c} `}&deg;{"C"}
            </div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Feels Like</div>
            <div className="w-[18rem]">
              {`: ${currentWeather.current.feelslike_c} `}&deg;{"C"}
            </div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Wind Dir </div>
            <div className="w-[18rem]">{`: ${currentWeather.current.wind_dir}`}</div>
          </div>
          <div className="w-[24rem] flex">
            <div className="w-[6rem]">Wind Speed</div>
            <div className="w-[18rem]">{`: ${currentWeather.current.wind_mph} mph`}</div>
          </div>
        </div>
        <div className="w-fit flex text-xs">
          <div className="w-[6rem]">Last Updated</div>
          <div className="w-[18rem]">{`: ${currentWeather.current.last_updated}`}</div>
        </div>
      </div>
    </div>
  );
}
