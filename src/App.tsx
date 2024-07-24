import useWeather from "./hooks/useWeather";
import DayBlock from "./components/DayBlock";

function App() {
  const { currentWeather } = useWeather();
  const date = new Date();
  const hours = date.getHours();
  // Use getHours to get current weather from forecast hours instead of current weather
  console.log("weather", currentWeather.forecast.forecastDays);

  function renderDays() {
    const days = currentWeather.forecast.forecastDays.map((day, index) => {
      console.log(`Day ${index + 1}`, day);
      return (
        <>
          <DayBlock shownDay={day} />
        </>
      );
    });
    return days;
  }

  return (
    <div className="w-screen h-screen bg-slate-200">
      <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
        Local Weather App
      </div>
      <div>
        {/* <div className="w-fit mx-auto">
          <div className="w-fit text-4xl pt-2 pb-0.5">{`${currentWeather.location.name}`}</div>
          <div className="w-fit mx-auto text-slate-400">{`${currentWeather.location.region}`}</div>
        </div>
        <div className="w-fit mx-auto">
          <div className="w-fit text-slate-400">{`${currentWeather.location.country}`}</div>
        </div> */}
        <>{renderDays()}</>
      </div>
    </div>
  );
}

export default App;
