import { DailyAverage } from "../types/types";
import useDate from "../hooks/useDate";

interface props {
  shownDay: DailyAverage;
  dayIndex: number;
  handleShowDetail: (day: number) => void;
  dayDate: string;
}

export default function DayBlock({
  shownDay,
  dayIndex,
  handleShowDetail,
  dayDate,
}: props) {
  const { formatDate } = useDate();
  return (
    <div key={dayIndex} className="w-[100%] mx-4">
      <div
        className="mx-auto border-2 border-slate-300 padding-4 rounded-2xl cursor-pointer"
        onClick={() => handleShowDetail(dayIndex)}
      >
        <div className="p-4">
          <div className="w-fit mx-auto border-b border-slate-300 pb-1.5 mb-4">
            {formatDate(dayDate)}
          </div>
          <div className="flex w-[100%]">
            <div className="w-[40%] mx-auto">
              <img
                className="w-[80%] h-[80%] max-w-[8rem] max-h-[8rem] rounded-3xl bg-blue-300 mr-8"
                src={`${shownDay.condition.icon}`}
              ></img>
            </div>
            <div className="mx-4 w-[60%]">
              <div className="text-lg mb-2 w-full">
                {shownDay.condition.text}
              </div>
              <div className="flex">
                <div className="w-[80%]">Chance of Rain: </div>
                <div className="w-[20%]">{shownDay.daily_chance_of_rain}%</div>
              </div>
              <div className="flex">
                <div className="w-[80%]">Max Temp:</div>
                <span className="w-[20%]">
                  {shownDay.maxtemp_c}&deg;{"C"}
                </span>
              </div>
              <div className="flex">
                <div className="w-[80%]">Min Temp:</div>
                <span className="w-[20%]">
                  {shownDay.mintemp_c}&deg;{"C"}
                </span>
              </div>
              <div className="flex">
                <div className="w-[80%]">Humidity:</div>
                <span className="w-[20%]">{shownDay.avghumidity}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
