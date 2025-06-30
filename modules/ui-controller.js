// modules/ui-controller.js
export const elements = {
  cityInput: document.querySelector('#city-input'),
  searchBtn: document.querySelector('#search-btn'),
  loading: document.querySelector('#loading'),
  error: document.querySelector('#error'),
  weatherDisplay: document.querySelector('#weather-display'),
  cityName: document.querySelector('#city-name'),
  temperature: document.querySelector('#temperature'),
  weatherIcon: document.querySelector('#weather-icon'),
  description: document.querySelector('#description'),
  humidity: document.querySelector('#humidity'),
  pressure: document.querySelector('#pressure'),
  wind: document.querySelector('#wind'),
  visibility: document.querySelector('#visibility'),
  sunrise: document.querySelector('#sunrise'),
  sunset: document.querySelector('#sunset'),
  unitSelect: document.querySelector('#unit-select'),
  langSelect: document.querySelector('#lang-select')
};

// Format timp din timestamp Unix
const formatTime = (timestamp) => {
  const date = new Date(timestamp * 1000);
  return date.toLocaleTimeString('ro-RO', {
    hour: '2-digit',
    minute: '2-digit'
  });
};

export const showLoading = () => {
  elements.loading.classList.remove('hidden');
  elements.error.classList.add('hidden');
  elements.weatherDisplay.classList.add('hidden');
};

export const hideLoading = () => {
  elements.loading.classList.add('hidden');
};

export const showError = (msg) => {
  elements.error.textContent = msg;
  elements.error.classList.remove('hidden');
  elements.weatherDisplay.classList.add('hidden');
};

export const displayWeather = (data) => {
  elements.cityName.textContent = data.name;
  updateTemperatureDisplay(data.main.temp, elements.unitSelect.value);
  elements.description.textContent = data.weather[0].description;
  elements.weatherIcon.textContent = '🌤️'; // sau imagine

  elements.humidity.textContent = `Umiditate: ${data.main.humidity}%`;
  elements.pressure.textContent = `Presiune: ${data.main.pressure} hPa`;
  elements.wind.textContent = `Vânt: ${(data.wind.speed * 3.6).toFixed(1)} km/h`;
  elements.visibility.textContent = `Vizibilitate: ${data.visibility / 1000} km`;
  elements.sunrise.textContent = `Răsărit: ${formatTime(data.sys.sunrise)}`;
  elements.sunset.textContent = `Apus: ${formatTime(data.sys.sunset)}`;

  elements.weatherDisplay.classList.remove('hidden');
};

export const getCityInput = () => elements.cityInput.value.trim();

export const clearInput = () => {
  elements.cityInput.value = '';
};

// Afișează temperatura cu simbolul corespunzător
export const updateTemperatureDisplay = (temp, unit) => {
  const symbol = unit === 'imperial' ? '°F' : '°C';
  elements.temperature.textContent = `${temp}${symbol}`;
};

// Salvează preferințele în localStorage
export const saveUserPreferences = (unit, lang) => {
  localStorage.setItem('unit', unit);
  localStorage.setItem('lang', lang);
};

// Încarcă preferințele din localStorage
export const loadUserPreferences = () => {
  return {
    unit: localStorage.getItem('unit') || 'metric',
    lang: localStorage.getItem('lang') || 'ro'
  };
};

// (Opțional) Setează valorile în dropdown-uri la pornire
export const setPreferenceControls = ({ unit, lang }) => {
  elements.unitSelect.value = unit;
  elements.langSelect.value = lang;
};

