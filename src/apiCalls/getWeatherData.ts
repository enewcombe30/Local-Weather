const OpenGateApiKey = process.env.REACT_APP_API_KEY;

async function getUserLocation(latitude: number, longitude: number) {
  const response = await fetch(
    `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OpenGateApiKey}`
  );
  console.log(OpenGateApiKey);
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

export { getWeatherForecast, getUserLocation };
