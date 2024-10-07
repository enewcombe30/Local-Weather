import DayBlock from "./components/DayBlock";
import DayDetail from "./components/DayDetail";
import useForecast from "./hooks/useForecast";
import useWeather from "./hooks/useWeather";

function App() {
  const {
    showHourlyForecast,
    handleShowHourly,
    dayByHour,
    forecast,
    daySelected,
  } = useForecast();
  const { currentLocation } = useWeather();

  function renderForecast() {
    const hasForecast = forecast && forecast.forecastday.length > 0;

    const days =
      hasForecast &&
      forecast.forecastday.map((day, dayIndex) => {
        const dayDetailSelected = daySelected === dayIndex;
        return (
          <DayBlock
            shownDay={day.day}
            dayIndex={dayIndex}
            handleShowDetail={handleShowHourly}
            dayDate={day.date}
            isSelected={dayDetailSelected}
          />
        );
      });
    return days;
  }

  function renderForecastDetail() {
    const detail = dayByHour.map((hour, hourIndex) => {
      const isFirst = hourIndex === 0;
      return <DayDetail hourIndex={hourIndex} hour={hour} isFirst={isFirst} />;
    });
    return detail;
  }

  return (
    <div className="w-full h-screen bg-sky-100 px-[5%]">
      <div className="mx-auto w-[95%]">
        <div className="mx-auto ">
          <div className="w-fit mx-auto pb-[6rem] pt-[4rem] text-4xl">
            <div className="mb-4">My Weather App.</div>
            <div className="text-2xl text-slate-400 mx-auto w-fit">
              {currentLocation}
            </div>
          </div>
          <div className="mx-auto flex space-between w-full">
            {renderForecast()}
          </div>
          {showHourlyForecast && (
            <div className="mx-auto my-[4rem] h-[10rem] w-fit max-w-full border-2 border-slate-300 rounded-2xl flex overflow-scroll no-scrollbar">
              {renderForecastDetail()}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
