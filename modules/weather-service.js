// modules/weather-service.js
import { CONFIG, API_ENDPOINTS, ERROR_MESSAGES, MOCK_DATA } from './config.js';

// Construiește URL-ul API din endpoint + parametri
const buildUrl = (endpoint, params = {}) => {
  const url = new URL(`${CONFIG.API_BASE_URL}${endpoint}`);

  // Adaugă parametri universali și specifici
  url.searchParams.set('appid', CONFIG.API_KEY);
  url.searchParams.set('units', params.units || CONFIG.DEFAULT_UNITS);
  url.searchParams.set('lang', params.lang || CONFIG.DEFAULT_LANG);

  // Adaugă parametrii de căutare (ex: q=Cluj sau lat/lon)
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && key !== 'units' && key !== 'lang') {
      url.searchParams.set(key, value);
    }
  });

  return url.toString();
};

// Trimite cererea și gestionează erorile
const makeRequest = async (url) => {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 404) {
        throw new Error(ERROR_MESSAGES.CITY_NOT_FOUND);
      } else if (response.status === 401) {
        throw new Error(ERROR_MESSAGES.INVALID_KEY);
      } else {
        throw new Error(ERROR_MESSAGES.DEFAULT_ERROR);
      }
    }
    return await response.json();
  } catch (error) {
    if (error instanceof TypeError) {
      throw new Error(ERROR_MESSAGES.NETWORK_ERROR);
    }
    throw error;
  }
};

// Obține vremea pe baza orașului
export const getCurrentWeather = async (city, unit, lang) => {
  const url = buildUrl(API_ENDPOINTS.CURRENT_WEATHER, {
    q: city,
    units: unit,
    lang: lang
  });
  return await makeRequest(url);
};

// Obține vremea pe baza coordonatelor
export const getWeatherByCoords = async (lat, lon, unit, lang) => {
  const url = buildUrl(API_ENDPOINTS.CURRENT_WEATHER, {
    lat,
    lon,
    units: unit,
    lang: lang
  });
  return await makeRequest(url);
};

// Fallback: dacă API-ul pică, întoarce MOCK_DATA
export const getCurrentWeatherWithFallback = async (city, unit, lang) => {
  try {
    return await getCurrentWeather(city, unit, lang);
  } catch (error) {
    console.warn("Fallback activat:", error.message);
    return {
      ...MOCK_DATA,
      name: city,
      fallback: true,
      fallbackReason: error.message
    };
  }
};
