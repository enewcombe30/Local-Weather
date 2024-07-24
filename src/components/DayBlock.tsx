import { DailyWeather, UserLocation } from "../types/types";

interface props {
  shownDay: DailyWeather;
}

export default function DayBlock({ shownDay }: props) {
  // add formatter to return days date

  return (
    <div>
      {shownDay && (
        <div className="w-fit mx-auto">
          <div className="w-fit flex mx-auto text-xs text-slate-400">
            {/* <div className="w-fit">{`${dayName()}`}</div> */}
          </div>
          <div className="my-[2rem]">
            <img
              className="w-[10rem] h-[10rem] bg-blue-300 rounded-full m-auto"
              src={`${shownDay.condition.icon}`}
            ></img>
          </div>
          <div className="w-fit mx-auto">
            <div className="w-fit mx-auto flex text-3xl">
              {`${shownDay.condition.text}`}
            </div>
            <div className="mx- w-fit">
              <div className="w-[24rem] flex">
                <div className="w-[6rem]">Temp C</div>
                <div className="w-[18rem]">
                  {`: ${shownDay.temp_c} `}&deg;{"C"}
                </div>
              </div>
              <div className="w-[24rem] flex">
                <div className="w-[6rem]">Feels Like</div>
                <div className="w-[18rem]">
                  {`: ${shownDay.feelslike_c} `}&deg;{"C"}
                </div>
              </div>
              <div className="w-[24rem] flex">
                <div className="w-[6rem]">Wind Dir </div>
                <div className="w-[18rem]">{`: ${shownDay.wind_dir}`}</div>
              </div>
              <div className="w-[24rem] flex">
                <div className="w-[6rem]">Wind Speed</div>
                <div className="w-[18rem]">{`: ${shownDay.wind_mph} mph`}</div>
              </div>
            </div>
            <div className="w-fit flex text-xs">
              <div className="w-[6rem]">Last Updated</div>
              <div className="w-[18rem]">{`: ${shownDay.last_updated}`}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
