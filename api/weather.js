export default async function handler(req, res) {
  const { location } = req.query;
  const apiKey = process.env.OPENWEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;
  
  const response = await fetch(url);
  const data = await response.json();
  res.status(response.status).json(data);
}