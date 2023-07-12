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
      const weatherDataElement = document.getElementById("userList");
      for (let element of data) {
        const userDiv = document.createElement("tr");
        userDiv.innerHTML = `
        <td >${element.id} </td>
        <td >${element.name} </td>
        <td> ${element.username}</td>`;
        weatherDataElement.appendChild(userDiv);
      }
    })

    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
}

getWeather();
