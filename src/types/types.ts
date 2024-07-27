export type Forecast = {
  weather: Weather;
  day: number;
};

export type Weather = {
  location: UserLocation;
  forecast: ForecastDay;
};

export type ForecastDay = {
  forecastday: Day[];
};

export type UserLocation = {
  name: string;
  region: string;
  country: string;
  localtime: string;
};

export type Day = {
  date: string;
  hour: DailyWeather[];
};

export type DailyWeather = {
  temp_c: number;
  condition: Condition;
  wind_mph: number;
  wind_dir: string;
  feelslike_c: number;
  gust_mph: number;

  time: string;
};

export type Condition = {
  text: string;
  icon: string;
};
