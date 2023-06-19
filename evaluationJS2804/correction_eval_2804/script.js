function getRandomChoice() {
  // renvoie aléatoirement l'un des trois choix: pierre, papier ou ciseaux
  const choices = ["pierre", "papier", "ciseaux"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getUserChoice() {
  // ouvre une boîte de dialogue pour demander à l'utilisateur de choisir pierre, papier ou ciseaux
  let userChoice = prompt("Choisissez: pierre, papier ou ciseaux?");
  // continue de demander jusqu'à ce que l'utilisateur fasse un choix valide
  while (!isValidChoice(userChoice)) {
    userChoice = prompt("Choisissez: pierre, papier ou ciseaux?");
  }
  return userChoice;
}

function isValidChoice(choice) {
  // renvoie vrai si le choix est valide, faux sinon
  return choice === "pierre" || choice === "papier" || choice === "ciseaux";
}

function getResult(userChoice, computerChoice) {
  // renvoie le résultat de la partie
  if (userChoice === computerChoice) {
    return "égalité";
  } else if (
    (userChoice === "pierre" && computerChoice === "ciseaux") ||
    (userChoice === "papier" && computerChoice === "pierre") ||
    (userChoice === "ciseaux" && computerChoice === "papier")
  ) {
    return "vous avez gagné";
  } else {
    return "vous avez perdu";
  }
}

function playGame() {
  const userChoice = getUserChoice();
  const computerChoice = getRandomChoice();
  const result = getResult(userChoice, computerChoice);
  alert(
    `Vous avez choisi ${userChoice} et l'ordinateur a choisi ${computerChoice}. ${result}!`
  );
}

playGame();
