
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `/api/weather?location=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod === 200) {
                locationElement.textContent = data.name;
                temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
                descriptionElement.textContent = data.weather[0].description;
            } else {
                locationElement.textContent = "City not found or API error!";
                temperatureElement.textContent = "";
                descriptionElement.textContent = "";
                console.error("API error:", data.message);
            }
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}
