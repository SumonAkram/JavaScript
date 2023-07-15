class Weather {
  constructor(city, temperature, description) {
    this.city = city;
    this.temperature = temperature;
    this.description = description;
  }
}

class WeatherApp {
  displayWeather(weather) {
    console.log(`City: ${weather.city}`);
    console.log(`Temperature: ${weather.temperature}°C`);
    console.log(`Description: ${weather.description}`);
  }
}

const weatherApp = new WeatherApp();

const currentWeather = new Weather("New York", 25.5, "Sunny");
weatherApp.displayWeather(currentWeather);

const anotherWeather = new Weather("London", 18.2, "Cloudy");
weatherApp.displayWeather(anotherWeather);
