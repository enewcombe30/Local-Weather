export type Weather = {
  location: UserLocation;
  current: CurrentWeather;
};

export type UserLocation = {
  name: string;
  region: string;
  country: string;
  localtime: string;
};

export type CurrentWeather = {
  tempC: number;
  condition: Condition;
  windMph: number;
  windDir: string;
  feelsLikeC: string;
  windGustMph: string;
  lastUpdated: string;
};

export type Condition = {
  text: string;
  icon: string;
};
