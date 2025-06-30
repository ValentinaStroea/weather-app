// modules/config.js

// Date simulate pentru fallback (ex: când nu ai internet)
export const MOCK_DATA = {
  name: "București",
  main: {
    temp: 22,
    feels_like: 21,
    humidity: 56,
    pressure: 1012
  },
  weather: [
    {
      description: "cer senin",
      icon: "01d"
    }
  ],
  wind: {
    speed: 3.6
  },
  visibility: 10000,
  sys: {
    sunrise: 1718521800,
    sunset: 1718573400
  }
};

// Setări globale API
export const CONFIG = {
  API_KEY: '5f36f75093fbb00698a5cff9dfeda7f8',
  API_BASE_URL: 'https://api.openweathermap.org/data/2.5',
  DEFAULT_UNITS: 'metric',
  DEFAULT_LANG: 'ro'
};

// Endpoint-uri disponibile
export const API_ENDPOINTS = {
  CURRENT_WEATHER: '/weather'
};

// Mesaje pentru erori
export const ERROR_MESSAGES = {
  CITY_NOT_FOUND: "Orașul nu a fost găsit.",
  NETWORK_ERROR: "Verifică conexiunea la internet.",
  DEFAULT_ERROR: "A apărut o eroare necunoscută.",
  INVALID_KEY: "Cheie API invalidă sau lipsă."
};
