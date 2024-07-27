import { Weather } from "../types/types";

export const defaultWeather: Weather = {
  location: {
    name: "",
    region: "",
    country: "",
    localtime: "",
  },
  forecast: {
    forecastday: [
      {
        date: "",
        hour: [
          {
            temp_c: 0,
            condition: { text: "", icon: "" },
            wind_mph: 0,
            wind_dir: "",
            feelslike_c: 0,
            gust_mph: 0,
            time: "13",
          },
        ],
      },
    ],
  },
};
