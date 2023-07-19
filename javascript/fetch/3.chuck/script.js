// je declare mes variables
let arrayIdJokes = [];
const urlRandom = `https://api.chucknorris.io/jokes/random`;
const urlCategory = `https://api.chucknorris.io/jokes/categories`;
let currentIndex = 0;

// je recupere mes elements html
let article = document.getElementById("article");
let pJoke = document.createElement("p");
let btnPrev = document.getElementById("previous");
let btnNext = document.getElementById("next");
btnPrev.style.display = "none";
let categoriesList = document.getElementById("choix");

function getRandomJoke() {
  fetch(urlRandom)
    .then((response) => response.json())
    .then((data) => {
      randomJoke(data);
      arrayIdJokes.push(data.id);
    })
    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
}

function getCategories() {
  fetch(urlCategory)
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ file: script.js:31 ~ .then ~ data:", data);
      for (const element of data) {
        let category = document.createElement("option");
        category.textContent = `${element}`;
        categoriesList.appendChild(category);
      }
    })
    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
}

// Affichage de la blague
function randomJoke(joke) {
  pJoke.textContent = `'' ${joke.value}`;
  article.appendChild(pJoke);
}

const prevJoke = () => {
  currentIndex--;
  if (currentIndex <= 0) {
    btnPrev.style.display = "none";
  } else {
    btnPrev.style.display = "block";
    const idToSearch = arrayIdJokes[currentIndex];
    getJokeById(idToSearch);
  }
};

const nextJoke = () => {
  currentIndex++;
  currentIndex == 0
    ? (btnPrev.style.display = "none")
    : (btnPrev.style.display = "block");
  if (currentIndex == arrayIdJokes.length) {
    getRandomJoke();
  } else {
    const idToSearch = arrayIdJokes[currentIndex];
    getJokeById(idToSearch);
  }
};

const getJokeById = (id) => {
  const urlById = `https://api.chucknorris.io/jokes/${id}`;
  fetch(urlById)
    .then((response) => response.json())
    .then((data) => {
      randomJoke(data);
    })
    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
};

const validerSelection = () => {
  var category = document.getElementById("choix").value;
  fetch(`https://api.chucknorris.io/jokes/random?category=${category}`)
    .then((response) => response.json())
    .then((data) => {
      randomJoke(data);
      arrayIdJokes.push(data.id);
    })
    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
};

// j'affecte des actions a mes elements html
btnPrev.addEventListener("click", prevJoke);
btnNext.addEventListener("click", nextJoke);

// j'execute mes fonctions
getRandomJoke();
getCategories();
