// weather related api calls

async function getCurrentWeather(location: string) {
  const response = await fetch(
    // `https://api.weatherapi.com/v1/current.json?key=5499d80408a04c04904102247240607&q=${location}&aqi=no`
    `http://api.weatherapi.com/v1/forecast.json?key=5499d80408a04c04904102247240607&q=${location}&days=4&aqi=no&alerts=no`
  );
  const data = await response.json();
  return data;
}

async function getWeatherForecast(location: string) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=5499d80408a04c04904102247240607&q=${location}&days=3&aqi=no&alerts=no`
  );
  const data = await response.json();
  return data;
}

export { getCurrentWeather, getWeatherForecast };
