🌤️ Weather App - Aplicație Meteo Modernă cu JavaScript

O aplicație web meteo completă, construită cu JavaScript modern (ES6+), HTML5 și CSS3. Oferă prognoza meteo pentru orice oraș din lume, cu salvare preferințe, fallback automat și interfață responsivă.

Demo Live | Cod sursă pe GitHub

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Weather API](https://img.shields.io/badge/API-OpenWeatherMap-orange)

Aceasta este o aplicație meteo simplă și intuitivă, construită cu **HTML**, **CSS** și **JavaScript**, care oferă informații despre vreme folosind API-ul de la [OpenWeatherMap](https://openweathermap.org/).

## Funcționalități

- 🔍 Căutare vreme după numele orașului
- 🌡️ Selectare unități: Celsius (°C) sau Fahrenheit (°F)
- 🌐 Selectare limbă: Română, Engleză sau Franceză
- 💾 Salvare preferințe în `localStorage`
- 🔄 Fallback cu date simulate în caz de eroare sau lipsă conexiune
- Istoric ultimele orașe căutate (max. 10)
- Tratament elegant al erorilor (API key invalid, oraș greșit etc.)

## 📸 Capturi ecran

| Căutare oraș | Preferințe utilizator |
|--------------|------------------------|
| ![search](./screenshots/search.png) | ![prefs](./screenshots/preferences.png) |

> *P.S.: Adaugă imaginile reale în folderul `screenshots/` din proiectul tău pentru a apărea corect aici.*

## Tehnologii utilizate
Frontend
- ✅ HTML5
- ✅ CSS3 (Flexbox + Gradiente)
- ✅ JavaScript ES6+ (modular, async/await)
APIs & Services
- ✅ OpenWeatherMap API
- ✅(opțional) IP Geolocation API pentru fallback
- ✅ API REST [OpenWeatherMap](https://openweathermap.org/)

## Tools & Workflow

Git + GitHub

GitHub Pages (deployment)

VS Code

🚀 Demo live

Aplicația este publicată și disponibilă online la:
https://valentinastroea.github.io/weather-app

📄 Structura proiectului

weather-app/
├── index.html              # Entry point
├── styles.css              # Styling global
├── app.js                  # Orchestrare principală
├── modules/
│   ├── config.js           # Config centralizat
│   ├── weather-service.js  # Comunicare cu API
│   ├── location-service.js # Locație GPS/IP (dacă se folosește)
│   ├── ui-controller.js    # Gestionare interfață
│   ├── history-service.js  # Istoric căutări
│   └── logger.js           # Logging & debugging
└── README.md

🧪 Screenshots

Căutare oraș

Preferințe utilizator





⚠️ Asigură-te că adaugi imaginile reale în folderul screenshots/ pentru ca acestea să fie afișate.

💪 Ce am învățat

Gestionarea cererilor API cu fetch și async/await

Modularizarea aplicațiilor JavaScript

Utilizarea localStorage pentru persistarea preferințelor

Tratamentul erorilor și fallback-ul automat pentru aplicații web

Publicarea aplicațiilor cu GitHub Pages

🌐 Cum rulezi aplicația local

Clonează proiectul:

git clone https://github.com/ValentinaStroea/weather-app.git

Deschide folderul:

cd weather-app

Rulează index.html direct în browser sau cu Live Server (VS Code).

Aplicația NU are nevoie de backend sau server local.

🎉 Deployment

Aplicația este publicată pe GitHub Pages. Pentru deployment:

Fă push pe ramura main

Accesează Settings > Pages > Source > main / root

Apare linkul public: https://username.github.io/weather-app

🏆 Achievements

🏢 Arhitectură modulară completă

🔎 API real integrat și tratament fallback

🚀 Publicare live în browser

🎨 UI intuitiv, responsive

📊 Testat offline / conexiune slabă

📖 Licență

Distribuit sub licența MIT. Poți folosi codul în scop educativ sau proiecte proprii.
