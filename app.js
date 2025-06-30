// app.js
import { getCurrentWeather } from './modules/weather-service.js';
import {
  elements,
  showLoading,
  hideLoading,
  showError,
  displayWeather,
  getCityInput,
  clearInput
} from './modules/ui-controller.js';

// Validează numele orașului
const isValidCity = (city) => {
  return city.length >= 2 && /^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/.test(city);
};

const handleSearch = async () => {
  const city = getCityInput();

  if (!isValidCity(city)) {
    showError("Introduceți un oraș valid (minim 2 litere, fără cifre).");
    return;
  }

  showLoading();

  try {
    const data = await getCurrentWeather(city);
    hideLoading();
    displayWeather(data);
    clearInput();
  } catch (error) {
    hideLoading();
    showError("A apărut o eroare la căutarea vremii.");
  }
};

const setupEventListeners = () => {
  elements.searchBtn.addEventListener('click', handleSearch);

  elements.cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });
};

// Inițializare aplicație
setupEventListeners();

// Opțional: afișează vremea pentru un oraș default la pornire
handleSearch("București");
