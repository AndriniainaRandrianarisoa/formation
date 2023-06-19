let choices = ["pierre", "feuille", "ciseau"];

function getUserChoice() {
  // demander et recuperer le choix de l'utilisateur
  let userChoice = "";
  userChoice = prompt("Choisissez: pierre, papier ou ciseaux?");
  test(userChoice);
  return userChoice;
}

function test(userChoice) {
  while (
    userChoice != "pierre" &&
    userChoice != "papier" &&
    userChoice != "ciseau"
  ) {
    alert("choix incompatible");
    userChoice = prompt("Choisissez: pierre, papier ou ciseaux?");
  }
}

function getRandomChoice() {
  // le programme doit choisir automatiquement une des valeurs entre pierre, feuille et ciseaux
  let randomIndex = Math.floor(Math.random() * choices.length);
  let test = choices[randomIndex];
  return test;
}

function getResult(userChoice, test) {
  //comparer la valeur de l'utilisateur et la valeurgenerer automatiquement
  if (userChoice === test) {
    alert("egalite");
  } else if (
    (userChoice === "pierre" && test === "ciseau") ||
    (userChoice === "papier" && test === "pierre") ||
    (userChoice === "ciseau" && test === "papier")
  ) {
    alert("JE GAGNE");
  } else {
    alert("JE perds");
  }
}

function playGame() {
  const userChoice = getUserChoice();
  console.log("🚀 ~ file: script.js:42 ~ playGame ~ userChoice:", userChoice);
}
// appe; de la fonction
playGame();
