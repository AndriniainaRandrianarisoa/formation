function getWeather() {
  // Votre clé d'API météo
  const apiKey = "5c8204014d894e7c8b291108231107";

  // URL de l'API météo (remplacez 'API_KEY' par votre clé d'API réelle)
  // const apiUrl = `https://api.exemple.com/weather?city=${cityName}&appid=${apiKey}`;
  const apiUrl = `https://jsonplaceholder.typicode.com/users`;

  // Appel à l'API météo avec fetch
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const weatherDataElement = document.getElementById("weatherData");
      for (let element of data) {
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
    <div class='user-card'> <h2> ${element.name} ${element.username}</h2> 

  <p>Téléphone : ${element.phone}</p>
    
    </div>`;
        // Ajout de l'élément <div> à la liste des utilisateurs
        weatherDataElement.appendChild(userDiv);
      }
    })

    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
}

getWeather();
