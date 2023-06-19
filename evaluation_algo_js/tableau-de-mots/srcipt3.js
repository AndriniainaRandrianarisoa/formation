const words = [
  ["tue", "lit", "mur", "nez", "pie"],
  ["ride", "bras", "mure", "nids"],
  ["chien", "fleur", "pomme", "sable", "table"],
  ["banane", "cheval", "maison", "soleil", "tomate"],
  ["abricot", "cerise", "ordinateur", "papillon", "requin"],
];

function askLength() {
  let length = "";
  while (true) {
    length = prompt("Saisissez un nombre entre 3 et 7 :");
    if (length === null) {
      return null; // L'utilisateur a annulé l'opération
    }
    if (!isNaN(length) && length >= 3 && length <= 7) {
      break; // La saisie est valide
    }
    alert("Saisie invalide ! Veuillez saisir un nombre entre 3 et 7.");
  }
  return parseInt(length);
}

function filterWordsByLength(words, length) {
  return words.filter((wordList) => wordList[0].length === length);
}

function selectWordFromList(words) {
  let validWords = words.join(", ");
  let selectedWord = "";
  while (true) {
    selectedWord = prompt(`Choisissez un mot parmi : ${validWords}`);
    if (selectedWord === null) {
      return null; // L'utilisateur a annulé l'opération
    }
    if (words.includes(selectedWord)) {
      break; // La saisie est valide
    }
    alert("Saisie invalide ! Veuillez choisir un mot de la liste.");
  }
  return selectedWord;
}

let length = askLength();
if (length === null) {
  alert("Opération annulée !");
} else {
  let filteredWords = filterWordsByLength(words, length);
  let selectedWord = selectWordFromList(filteredWords[0]);
  if (selectedWord === null) {
    alert("Opération annulée !");
  } else {
    document.write(`Le mot choisi est : ${selectedWord}`);
  }
}
