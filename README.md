# 🌤️ Weather App

A minimal, responsive weather lookup app that fetches real-time weather data for any city using the OpenWeatherMap API, with the API key secured via a Vercel serverless function.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)

## ✨ Features

- 🔍 Search current weather by city name
- 🌡️ Displays live temperature in °C
- ☁️ Shows weather condition description (e.g., "clear sky", "light rain")
- ⚠️ Graceful error handling for invalid city names or API failures
- 📱 Clean, responsive card-style UI with a frosted-glass background effect
- 🔒 API key kept server-side via a Vercel serverless function (never exposed to the browser)

## 🛠️ Tech Stack

| Layer      | Technology                                |
|------------|--------------------------------------------|
| Structure  | HTML5                                       |
| Styling    | CSS3 (Flexbox, box-shadow, rgba transparency) |
| Logic      | Vanilla JavaScript (Fetch API)              |
| Backend    | Vercel Serverless Function                  |
| Data       | [OpenWeatherMap API](https://openweathermap.org/api) |

## 📁 Project Structure
weather-app/
├── api/
│   └── weather.js   # Serverless function, keeps API key server-side
├── index.html       # Markup and layout
├── style.css        # Styling and visual design
├── script.js        # Fetch logic and DOM updates
└── README.md

## 🚀 Getting Started

### Prerequisites

- A free API key from [OpenWeatherMap](https://openweathermap.org/api)
- A [Vercel](https://vercel.com) account (free tier works)

### Setup

1. Clone the repository
```bash
git clone https://github.com/dasaridevi123/weather-app.git
cd weather-app
```

2. Deploy to Vercel
   - Import the repo at [vercel.com/new](https://vercel.com/new)
   - Under **Environment Variables**, add:
     - Name: `OPENWEATHER_API_KEY`
     - Value: your OpenWeatherMap API key
   - Click **Deploy**

3. Open the live URL Vercel provides and start searching

> 🔒 The API key is never exposed in the frontend — `script.js` calls `/api/weather`, and the serverless function in `api/weather.js` attaches the key server-side before calling OpenWeatherMap.

## 🧭 Usage

1. Type a city name into the input field (e.g., `Rourkela`, `London`, `Tokyo`)
2. Click **Search**
3. View the city name, current temperature, and weather description

## 🔮 Roadmap / Ideas for Improvement

- [ ] Add loading state/spinner during fetch
- [ ] Add 5-day forecast view
- [ ] Support unit toggle (°C / °F)
- [ ] Add weather icons based on condition
- [ ] Add geolocation-based "Use my location" button
- [ ] Debounce/validate input before triggering search

## 🙋 Author

Built by **Dasari Devi** — [GitHub](https://github.com/dasaridevi123) · [LinkedIn](https://www.linkedin.com/in/devi-dasari-ab2729374/)