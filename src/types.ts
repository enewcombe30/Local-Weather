interface Weather {
  location: UserLocation;
  current: CurrentWeather;
}

type UserLocation = {
  name: string;
  region: string;
  country: string;
  localtime: string;
};

type CurrentWeather = {
  tempC: number;
  condition: Condition;
  windMph: number;
  windDir: string;
  feelsLikeC: string;
  windGustMph: string;
};

type Condition = {
  text: string;
  icon: string;
};
