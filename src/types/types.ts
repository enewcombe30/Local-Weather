export type Forecast = {
  weather: Weather;
  day: number;
};

export type Weather = {
  location: UserLocation;
  forecast: ForecastDays;
};
export type ForecastDays = {
  forecastDays: DailyWeather[];
};

export type UserLocation = {
  name: string;
  region: string;
  country: string;
  localtime: string;
};

export type DailyWeather = {
  temp_c: number;
  condition: Condition;
  wind_mph: number;
  wind_dir: string;
  feelslike_c: number;
  gust_mph: number;
  last_updated: string;
};

export type Condition = {
  text: string;
  icon: string;
};
