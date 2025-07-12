// /api/weather.js
export default async function handler(req, res) {
  const apiKey = process.env.OPENWEATHER_KEY;
  const { city = "București", unit = "metric", lang = "ro" } = req.query;

  if (!city) {
    return res.status(400).json({ error: "City is required." });
  }

  try {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
      city
    )}&appid=${apiKey}&units=${unit}&lang=${lang}`;

    const response = await fetch(url);
    const data = await response.json();

    if (response.ok) {
      res.status(200).json(data);
    } else {
      res.status(response.status).json({ error: data.message || "Eroare API." });
    }
  } catch (err) {
    res.status(500).json({ error: "Eroare server." });
  }
}
