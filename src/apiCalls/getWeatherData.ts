// weather related api calls

async function getCurrentWeather() {
  const response = await fetch(
    "https://api.weatherapi.com/v1/current.json?key=5499d80408a04c04904102247240607&q=London&aqi=no"
  );
  const data = await response.json();
  return data;
}

export { getCurrentWeather };
