const apiEndpoint = 'https://api.openweathermap.org/data/2.5/weather';
const apiKey = '8b17d53e7dc02bbcf374040c6ccfa7fb';
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const locationElement = document.getElementById('location');
const weatherDescriptionElement = document.getElementById('weather-description');
const temperatureElement = document.getElementById('temperature');
const humidityElement = document.getElementById('humidity');
const windSpeedElement = document.getElementById('wind-speed');

searchButton.addEventListener('click', async () => {
  const location = searchInput.value.trim();
  if (location) {
    try {
      const response = await fetch(`${apiEndpoint}?q=${location}&appid=${apiKey}&units=metric`);
      const data = await response.json();
      const weatherDescription = data.weather[0].description;
      const temperature = data.main.temp;
      const humidity = data.main.humidity;
      const windSpeed = data.wind.speed;

      locationElement.textContent = location;
      weatherDescriptionElement.textContent = `Weather: ${weatherDescription}`;
      temperatureElement.textContent = `Temperature: ${temperature}°C`;
      humidityElement.textContent = `Humidity: ${humidity}%`;
      windSpeedElement.textContent = `Wind Speed: ${windSpeed} m/s`;
    } catch (error) {
      console.error(error);
    }
  }
});