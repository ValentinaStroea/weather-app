// modules/logger.js

import { CONFIG } from "./config.js";

const levels = {
  debug: 0,
  info: 1,
  warn: 2,
  error: 3,
};

export class Logger {
  constructor() {
    this.logs = [];
    this.enabled = CONFIG.LOGGING.ENABLED;
    this.level = levels[CONFIG.LOGGING.LEVEL] ?? 1;
    this.maxLogs = CONFIG.LOGGING.MAX_LOGS;
  }

  debug(message, data = null) {
    if (this.level <= levels.debug) this._log("debug", message, data);
  }

  info(message, data = null) {
    if (this.level <= levels.info) this._log("info", message, data);
  }

  warn(message, data = null) {
    if (this.level <= levels.warn) this._log("warn", message, data);
  }

  error(message, error = null) {
    if (this.level <= levels.error) {
      const fullMessage = error?.stack || error?.message || error;
      this._log("error", message, fullMessage);
    }
  }

  _log(level, message, data) {
    if (!this.enabled) return;
    const timestamp = new Date().toLocaleTimeString();
    const logEntry = {
      timestamp,
      level,
      message,
      data,
    };

    this.logs.push(logEntry);
    if (this.logs.length > this.maxLogs) {
      this.logs.shift(); // elimină cel mai vechi
    }

    // Afișează în consolă (opțional)
    console[level](`[${timestamp}] [${level.toUpperCase()}] ${message}`, data);
  }

  getLogs() {
    return this.logs;
  }

  clearLogs() {
    this.logs = [];
  }

  show() {
    console.table(this.logs);
  }
}

export const logger = new Logger();

window.logs = {
  show: () => logger.show(),
  clear: () => logger.clearLogs(),
  get: () => logger.getLogs(),
};
