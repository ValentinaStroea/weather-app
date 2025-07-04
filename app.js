// app.js
import { getCurrentWeather } from './modules/weather-service.js';
import {
  elements,
  showLoading,
  hideLoading,
  showError,
  displayWeather,
  getCityInput,
  clearInput,
  saveUserPreferences,
  loadUserPreferences,
  setPreferenceControls
} from './modules/ui-controller.js';

let currentCity = "București"; // orașul activ
let preferences = loadUserPreferences(); // încarcă preferințele salvate

// Refă căutarea cu orașul curent și preferințele actuale
const fetchWeather = async (city) => {
  showLoading();
  try {
    const data = await getCurrentWeather(city, preferences.unit, preferences.lang);
    hideLoading();
    displayWeather(data);
  } catch (error) {
    hideLoading();
    showError("A apărut o eroare la căutarea vremii.");
  }
};

// Verifică dacă orașul introdus este valid
const isValidCity = (city) => {
  return city.length >= 2 && /^[a-zA-ZăâîșțĂÂÎȘȚ\s-]+$/.test(city);
};

// Buton sau Enter
const handleSearch = async () => {
  const city = getCityInput();
  if (!isValidCity(city)) {
    showError("Introduceți un oraș valid (minim 2 litere, fără cifre).");
    return;
  }
  currentCity = city;
  await fetchWeather(city);
  clearInput();
};

// Ascultă evenimente UI
const setupEventListeners = () => {
  elements.searchBtn.addEventListener('click', handleSearch);

  elements.cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  });

  // Când se schimbă unitățile
  elements.unitSelect.addEventListener('change', () => {
    preferences.unit = elements.unitSelect.value;
    saveUserPreferences(preferences.unit, preferences.lang);
    fetchWeather(currentCity);
  });

  // Când se schimbă limba
  elements.langSelect.addEventListener('change', () => {
    preferences.lang = elements.langSelect.value;
    saveUserPreferences(preferences.unit, preferences.lang);
    fetchWeather(currentCity);
  });
};

// Inițializare aplicație
const init = () => {
  setPreferenceControls(preferences); // setează UI cu preferințele salvate
  setupEventListeners();
  document.getElementById("city-input").value = currentCity;
  fetchWeather(currentCity); // caută la pornire
};

init();

