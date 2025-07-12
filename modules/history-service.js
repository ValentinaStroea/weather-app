import { CONFIG } from './config.js';
import { logger } from './logger.js';

export class HistoryService {
  constructor() {
    this.storageKey = CONFIG.STORAGE_KEYS.SEARCH_HISTORY;
    this.maxItems = CONFIG.MAX_HISTORY_ITEMS;
  }

  addLocation(weatherData) {
    try {
      const history = this._loadFromStorage();

      const city = weatherData.name;
      const country = weatherData.sys?.country || '';
      const coordinates = weatherData.coord || {};
      const timestamp = Date.now();

      const existingIndex = history.findIndex(
        (item) => item.city.toLowerCase() === city.toLowerCase()
      );

      if (existingIndex !== -1) {
        const [existing] = history.splice(existingIndex, 1);
        history.unshift({ ...existing, timestamp });
      } else {
        const newLocation = { city, country, coordinates, timestamp };
        history.unshift(newLocation);
      }

      if (history.length > this.maxItems) {
        history.pop(); // elimină cea mai veche locație
      }

      this._saveToStorage(history);
      logger.info(`Locație adăugată în istoric: ${city}`, { city, country });
    } catch (error) {
      logger.error('Eroare la salvarea locației în istoric', error);
    }
  }

  getHistory() {
    return this._loadFromStorage();
  }

  removeLocation(city) {
    const history = this._loadFromStorage();
    const updated = history.filter(
      (item) => item.city.toLowerCase() !== city.toLowerCase()
    );
    this._saveToStorage(updated);
    logger.info(`Locație ștearsă din istoric: ${city}`);
  }

  clearHistory() {
    this._saveToStorage([]);
    logger.info('Istoricul de căutări a fost golit.');
  }

  _saveToStorage(history) {
    try {
      localStorage.setItem(this.storageKey, JSON.stringify(history));
    } catch (error) {
      logger.error('Eroare la scrierea în localStorage', error);
    }
  }

  _loadFromStorage() {
    try {
      const stored = localStorage.getItem(this.storageKey);
      return stored ? JSON.parse(stored) : [];
    } catch (error) {
      logger.error('Eroare la citirea din localStorage', error);
      return [];
    }
  }
}

export const historyService = new HistoryService();
