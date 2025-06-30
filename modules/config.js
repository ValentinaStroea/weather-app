// modules/config.js

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
    sunrise: 1718521800, // timestamp simulare
    sunset: 1718573400   // timestamp simulare
  }
};
