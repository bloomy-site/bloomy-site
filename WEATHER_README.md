# Weather Dashboard

A modern, responsive weather dashboard that fetches real-time weather data from the OpenWeatherMap API.

## 📋 Features

✅ **Current Weather Display**
- Temperature, feels like, weather description
- Humidity, wind speed, pressure
- Visibility and cloud coverage
- Beautiful weather icons

✅ **5-Day Forecast**
- Max/min temperatures
- Weather conditions
- Visual weather icons

✅ **Hourly Forecast**
- Next 12 hours of weather
- Temperature and conditions
- Horizontal scrollable layout

✅ **Search Functionality**
- Search by city name
- Get weather for current location (using geolocation)
- Auto-complete with error handling

✅ **Responsive Design**
- Mobile-friendly interface
- Gradient background
- Smooth animations and transitions

## 🚀 Setup Instructions

### 1. Get API Key
1. Visit https://openweathermap.org/api
2. Sign up for a free account
3. Get your free API key

### 2. Configure API Key
Open `weather-script.js` and replace `YOUR_API_KEY_HERE` with your actual API key:

```javascript
const API_KEY = 'your_actual_api_key_here';
```

### 3. File Structure
```
weather-dashboard/
├── weather-dashboard.html      # Main HTML file
├── weather-style.css           # CSS styling
├── weather-script.js           # JavaScript logic
└── README.md                   # This file
```

### 4. Run Locally
1. Open `weather-dashboard.html` in a web browser
2. Allow location access for current location feature
3. Search for any city or use current location button

## 📱 Usage

**Search by City:**
1. Type city name in the search box
2. Press Enter or click Search button
3. Weather data will display

**Get Current Location Weather:**
1. Click the "📍 Current Location" button
2. Allow browser permission to access location
3. Weather for your current location will load

## 🌐 API Details

Uses OpenWeatherMap API endpoints:
- `/weather` - Current weather data
- `/forecast` - 5-day forecast data
- `/geo` - Geocoding (convert city name to coordinates)

**API Limits (Free Plan):**
- 60 calls/minute
- 1,000,000 calls/month

## 🎨 Customization

### Colors
Edit the gradient in `weather-style.css`:
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

### Units
Change temperature units from Celsius to Fahrenheit:
```javascript
// In fetchWeatherByCoordinates function
units=imperial  // instead of metric
```

## 🔧 Browser Compatibility

- Chrome ✓
- Firefox ✓
- Safari ✓
- Edge ✓
- Mobile browsers ✓

## 📝 License

Free to use and modify.

## 🐛 Troubleshooting

**"API key not configured"** - Make sure to add your API key to `weather-script.js`

**"City not found"** - Try searching with the full city name or country code

**Location not working** - Check browser permissions for geolocation

**No data displaying** - Open browser console (F12) to see error messages