## 🚀 Getting Started

### Prerequisites

- A free API key from [OpenWeatherMap](https://openweathermap.org/api)
- Any modern browser
- (Optional) A local dev server like VS Code's Live Server extension, since some browsers block `fetch` on `file://` URLs

### Setup

1. Clone the repository
```bash
   git clone https://github.com/<your-username>/weather-app.git
   cd weather-app
```

2. Add your API key

   Open `script.js` and replace the `apiKey` value with your own key:
```js
   const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
```


3. Open `index.html` in your browser, or serve it locally:
```bash
   npx live-server
```

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

Built by **Dasari Devi** — [GitHub](https://github.com/dasaridevi123/weather-app) · [LinkedIn](hhttps://www.linkedin.com/in/devi-dasari-ab2729374/)