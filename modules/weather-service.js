// modules/weather-service.js
import { MOCK_DATA } from './config.js';

// Simulează apelul către un API real
export const getCurrentWeather = async (city) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1s

    const updatedData = {
      ...MOCK_DATA,
      name: city
    };

    return updatedData;
  } catch (error) {
    throw new Error("Eroare la obținerea vremii.");
  }
};

export const getWeatherByCoords = async (lat, lon) => {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1s

    const updatedData = {
      ...MOCK_DATA,
      name: `Lat: ${lat}, Lon: ${lon}`
    };

    return updatedData;
  } catch (error) {
    throw new Error("Eroare la obținerea vremii după coordonate.");
  }
};
