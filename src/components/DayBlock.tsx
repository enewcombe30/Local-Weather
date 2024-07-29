import { DailyWeather } from "../types/types";
import useDate from "../hooks/useDate";

interface props {
  shownDay: DailyWeather;
}

export default function DayBlock({ shownDay }: props) {
  // add formatter to return hour instead of date
  const { formatDateTime } = useDate();
  const formattedHour = formatDateTime(shownDay.time);
  return (
    <div>
      {shownDay && (
        <div className="w-fit mx-auto my-[2rem]">
          <div className="w-fit flex mx-auto text-xs text-slate-400"></div>
          <div className="w-fit mx-auto flex text-xl">{`${formattedHour}`}</div>
          <img
            className="w-[5rem] h-[5rem] bg-blue-300 rounded-full mx-auto my-2"
            src={`${shownDay.condition.icon}`}
          ></img>
          <div className="w-[12rem] mx-auto">
            <div className="w-fit mx-auto text-xl mb-[1rem]">
              {`${shownDay.condition.text}`}
            </div>
            <div className="mx-auto w-[12rem]">
              <div className="w-[12rem] flex">
                <div className="w-[6rem]">Temp C</div>
                <div className="w-[6rem]">
                  {`: ${shownDay.temp_c} `}&deg;{"C"}
                </div>
              </div>
              <div className="w-[12rem] flex">
                <div className="w-[6rem]">Feels Like</div>
                <div className="w-[6rem]">
                  {`: ${shownDay.feelslike_c} `}&deg;{"C"}
                </div>
              </div>
              <div className="w-12rem] flex">
                <div className="w-[6rem]">Wind Dir </div>
                <div className="w-[6rem]">{`: ${shownDay.wind_dir}`}</div>
              </div>
              <div className="w-[12rem] flex">
                <div className="w-[6rem]">Wind Speed</div>
                <div className="w-[6rem]">{`: ${shownDay.wind_mph} mph`}</div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
