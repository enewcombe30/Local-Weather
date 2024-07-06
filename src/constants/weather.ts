import { Weather } from "../types/types";

export const defaultWeather: Weather = {
  location: {
    name: "",
    region: "",
    country: "",
    localtime: "",
  },
  current: {
    tempC: 0,
    condition: { text: "", icon: "" },
    windMph: 0,
    windDir: "",
    feelsLikeC: "",
    windGustMph: "",
    lastUpdated: "",
  },
};
