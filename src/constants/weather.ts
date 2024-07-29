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
            humidity: 1,
            chance_of_rain: 0,
            uv: 0,
            condition: { text: "", icon: "" },
            wind_mph: 0,
            feelslike_c: 0,
            time: "13",
          },
        ],
      },
    ],
  },
};
