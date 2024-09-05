import { DailyWeather } from "../types/types";
import useDate from "../hooks/useDate";

interface Props {
  hourIndex: number;
  hour: DailyWeather;
  isFirst: boolean;
}

export default function DayDetail({ hourIndex, hour, isFirst }: Props) {
  const { formatDateTime } = useDate();
  return (
    <div key={hourIndex} className="my-auto">
      <div
        className={`min-w-[5rem] w-full my-2 text-slate-600 text-sm px-4 mx-auto ${
          !isFirst && "border-l border-slate-500"
        }`}
      >
        <img className="mx-auto w-fit" src={hour.condition.icon}></img>
        <div className="mx-auto w-fit">
          {hour.temp_c}&deg;{"C"}
        </div>
        <div className="mx-auto w-fit">{hour.chance_of_rain}%</div>
        <div className="mx-auto w-fit">{formatDateTime(hour.time)}</div>
      </div>
    </div>
  );
}
