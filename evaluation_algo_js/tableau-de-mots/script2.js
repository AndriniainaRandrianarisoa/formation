let arr = [];

function reverseString(str) {
  return str.split("").reverse().join("");
}

function displayArray() {
  let list = "";
  for (let i = 0; i < arr.length; i++) {
    let word = arr[i];
    let reversed = reverseString(word);
    let length = word.length;
    list += word + " (" + reversed + ", " + length + ")" + "<br>";
  }
  document.write(list);
}

function addWord() {
  let word = prompt("Entrez un mot :");
  if (word === null) {
    return; // annuler
  }
  if (word === "" || /^\d+$/.test(word)) {
    alert("Veuillez saisir un mot valide.");
    addWord();
  } else {
    arr.push(word);
    if (arr.length == maxLength) {
      alert("Le tableau est plein.");
      displayArray();
    } else {
      addWord();
    }
  }
}

let maxLength;
while (true) {
  maxLength = prompt("Entrez la longueur du tableau (entre 3 et 5) :");
  if (maxLength === null) {
    break; // annuler
  }
  if (/^\d+$/.test(maxLength) && maxLength >= 3 && maxLength <= 5) {
    addWord();
    break;
  } else {
    alert("Veuillez saisir un nombre entre 3 et 5.");
  }
}
