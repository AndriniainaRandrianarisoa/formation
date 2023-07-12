function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value;

  // Votre clé d'API météo
  const apiKey = '5c8204014d894e7c8b291108231107';

  // URL de l'API météo (remplacez 'API_KEY' par votre clé d'API réelle)
  // const apiUrl = `https://api.exemple.com/weather?city=${cityName}&appid=${apiKey}`;
  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${cityName}&aqi=yes`

  // Appel à l'API météo avec fetch
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      console.log(data.current)
      // Affichage des données météo
      const weatherDataElement = document.getElementById('weatherData');
      weatherDataElement.innerHTML = `
        <h2>${cityName}</h2>
        <p class="weatherData">Température : ${data.current.temp_c}°C</p>
        <p>Humidité : ${data.current.humidity}%</p>
        <p>Indice UV : ${data.current.uv}%</p>
        <p>Humidité : ${data.current.humidity}%</p>
      `;
    })
    .catch(error => {
      console.log('Une erreur s\'est produite :', error);
    });
}
