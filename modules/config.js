// modules/config.js

// Detectăm automat mediul în care rulează aplicația
const isProduction = import.meta.env.MODE === 'production';

if (!isProduction && !import.meta.env?.VITE_API_KEY) {
  console.warn("⚠️ VITE_API_KEY nu este definit în .env – se va folosi cheia fallback.");
}


// Exportăm opțional dacă vrei să le folosești în altă parte
export const ENVIRONMENT = isProduction ? "production" : "development";
export const isProd = isProduction;

// Config global al aplicației
export const CONFIG = {
  API_KEY: import.meta.env?.VITE_API_KEY || 'default_fallback_key',
  ENVIRONMENT: import.meta.env?.VITE_ENV || 'development',
  API_BASE_URL: 'https://api.openweathermap.org/data/2.5',
  DEFAULT_UNITS: 'metric',
  DEFAULT_LANG: 'ro',
  MAX_HISTORY_ITEMS: 10,
  STORAGE_KEYS: {
    SEARCH_HISTORY: 'weather_search_history',
    USER_PREFERENCES: 'weather_user_prefs',
  },
  LOGGING: {
    ENABLED: !isProduction,
    LEVEL: isProduction ? 'warn' : 'info',
    MAX_LOGS: 100,
  }
};


// Endpoints API externe
export const API_ENDPOINTS = {
  CURRENT_WEATHER: '/weather'
};

// Date simulate fallback (folosit dacă nu avem internet)
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

// Mesaje pentru diverse tipuri de erori
export const ERROR_MESSAGES = {
  CITY_NOT_FOUND: "Orașul nu a fost găsit.",
  NETWORK_ERROR: "Verifică conexiunea la internet.",
  DEFAULT_ERROR: "A apărut o eroare necunoscută.",
  INVALID_KEY: "Cheie API invalidă sau lipsă."
};

