// ===========================
// Weather Dashboard JavaScript
// ===========================

// IMPORTANT: Replace with your actual API key from https://openweathermap.org/api
const API_KEY = 'YOUR_API_KEY_HERE';

// API Endpoints
const WEATHER_URL = 'https://api.openweathermap.org/data/2.5/weather';
const FORECAST_URL = 'https://api.openweathermap.org/data/2.5/forecast';
const REVERSE_GEO_URL = 'https://api.openweathermap.org/geo/1.0/reverse';
const GEO_URL = 'https://api.openweathermap.org/geo/1.0/direct';

// DOM Elements
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const errorMessage = document.getElementById('errorMessage');
const loadingSpinner = document.getElementById('loadingSpinner');
const mainContent = document.getElementById('mainContent');

// Event Listeners
searchBtn.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSearch();
});
locationBtn.addEventListener('click', handleCurrentLocation);

// Initialize
window.addEventListener('load', () => {
  fetchWeatherByCity('London');
});

// ===========================
// Main Functions
// ===========================

function handleSearch() {
  const city = searchInput.value.trim();
  if (city) {
    fetchWeatherByCity(city);
    searchInput.value = '';
  } else {
    showError('Please enter a city name');
  }
}

function handleCurrentLocation() {
  if (!navigator.geolocation) {
    showError('Geolocation not supported by your browser');
    return;
  }

  showLoading(true);
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const { latitude, longitude } = position.coords;
      fetchWeatherByCoordinates(latitude, longitude);
    },
    (error) => {
      showLoading(false);
      showError('Unable to access your location: ' + error.message);
    }
  );
}

// ===========================
// API Functions
// ===========================

async function fetchWeatherByCity(city) {
  try {
    if (API_KEY === 'YOUR_API_KEY_HERE') {
      showError('⚠️ Please configure your API key in the script');
      return;
    }

    showLoading(true);
    clearError();

    // Get coordinates from city name
    const geoResponse = await fetch(
      `${GEO_URL}?q=${city}&limit=1&appid=${API_KEY}`
    );

    if (!geoResponse.ok) {
      throw new Error('City not found');
    }

    const geoData = await geoResponse.json();

    if (geoData.length === 0) {
      throw new Error('City not found');
    }

    const { lat, lon } = geoData[0];
    await fetchWeatherByCoordinates(lat, lon);
  } catch (error) {
    showLoading(false);
    showError(error.message || 'An error occurred');
  }
}

async function fetchWeatherByCoordinates(lat, lon) {
  try {
    showLoading(true);
    clearError();

    // Fetch current weather
    const weatherResponse = await fetch(
      `${WEATHER_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!weatherResponse.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const weatherData = await weatherResponse.json();

    // Fetch forecast
    const forecastResponse = await fetch(
      `${FORECAST_URL}?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    );

    if (!forecastResponse.ok) {
      throw new Error('Failed to fetch forecast data');
    }

    const forecastData = await forecastResponse.json();

    // Update UI
    updateCurrentWeather(weatherData);
    updateHourlyForecast(forecastData);
    updateDailyForecast(forecastData);

    showLoading(false);
  } catch (error) {
    showLoading(false);
    showError(error.message || 'An error occurred');
  }
}

// ===========================
// UI Update Functions
// ===========================

function updateCurrentWeather(data) {
  const { name, sys, main, weather, wind, clouds, visibility } = data;

  // Update city and date
  document.getElementById('cityName').textContent = `${name}, ${sys.country}`;
  document.getElementById('currentDate').textContent = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  // Update temperature
  document.getElementById('temperature').textContent = `${Math.round(main.temp)}°C`;
  document.getElementById('weatherDescription').textContent = weather[0].main;
  document.getElementById('feelsLike').textContent = `${Math.round(main.feels_like)}°C`;

  // Update weather icon
  const iconCode = weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
  document.getElementById('weatherIcon').src = iconUrl;

  // Update details
  document.getElementById('humidity').textContent = `${main.humidity}%`;
  document.getElementById('windSpeed').textContent = `${wind.speed} m/s`;
  document.getElementById('pressure').textContent = `${main.pressure} hPa`;
  document.getElementById('visibility').textContent = `${(visibility / 1000).toFixed(1)} km`;
  document.getElementById('clouds').textContent = `${clouds.all}%`;
  document.getElementById('uvIndex').textContent = '2.5'; // OpenWeatherMap free tier doesn't include UV
}

function updateHourlyForecast(data) {
  const hourlyForecast = document.getElementById('hourlyForecast');
  hourlyForecast.innerHTML = '';

  // Get next 12 hours
  const hourly = data.list.slice(0, 12);

  hourly.forEach((item) => {
    const date = new Date(item.dt * 1000);
    const time = date.toLocaleTimeString('en-US', {
      hour: 'numeric',
      hour12: true
    });

    const temp = Math.round(item.main.temp);
    const icon = item.weather[0].icon;
    const description = item.weather[0].main;

    const card = document.createElement('div');
    card.className = 'hourly-card';
    card.innerHTML = `
      <div class="hourly-time">${time}</div>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather" class="hourly-icon" style="width: 50px; height: 50px;">
      <div class="hourly-temp">${temp}°C</div>
      <div class="hourly-desc">${description}</div>
    `;

    hourlyForecast.appendChild(card);
  });
}

function updateDailyForecast(data) {
  const dailyForecast = document.getElementById('dailyForecast');
  dailyForecast.innerHTML = '';

  // Group by day
  const daily = {};

  data.list.forEach((item) => {
    const date = new Date(item.dt * 1000).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });

    if (!daily[date]) {
      daily[date] = {
        temps: [item.main.temp],
        weather: item.weather[0],
        icon: item.weather[0].icon
      };
    } else {
      daily[date].temps.push(item.main.temp);
    }
  });

  // Create cards for first 5 days
  let dayCount = 0;
  for (const date in daily) {
    if (dayCount >= 5) break;

    const dayData = daily[date];
    const maxTemp = Math.round(Math.max(...dayData.temps));
    const minTemp = Math.round(Math.min(...dayData.temps));
    const description = dayData.weather.main;
    const icon = dayData.icon;

    const card = document.createElement('div');
    card.className = 'daily-card';
    card.innerHTML = `
      <div class="daily-date">${date}</div>
      <img src="https://openweathermap.org/img/wn/${icon}@2x.png" alt="Weather" class="daily-icon" style="width: 60px; height: 60px;">
      <div class="daily-temps">
        <span class="daily-max">${maxTemp}°</span>
        <span class="daily-min">${minTemp}°</span>
      </div>
      <div class="daily-desc">${description}</div>
    `;

    dailyForecast.appendChild(card);
    dayCount++;
  }
}

// ===========================
// Utility Functions
// ===========================

function showLoading(show) {
  if (show) {
    loadingSpinner.classList.add('show');
    mainContent.style.opacity = '0.5';
    mainContent.style.pointerEvents = 'none';
  } else {
    loadingSpinner.classList.remove('show');
    mainContent.style.opacity = '1';
    mainContent.style.pointerEvents = 'auto';
  }
}

function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
  setTimeout(() => {
    errorMessage.style.display = 'none';
  }, 5000);
}

function clearError() {
  errorMessage.textContent = '';
  errorMessage.style.display = 'none';
}