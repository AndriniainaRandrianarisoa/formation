const startButton = document.getElementById("startButton");
const lengthModal = document.getElementById("lengthModal");
const lengthInput = document.getElementById("lengthInput");
const lengthButton = document.getElementById("lengthButton");
const closeButton = lengthModal.querySelector(".close");
const wordModal = document.getElementById("wordModal");
const wordList = document.getElementById("wordList");
const wordInput = document.getElementById("wordInput");
const wordButton = document.getElementById("wordButton");

let selectedWords = [];

startButton.addEventListener("click", () => {
  lengthModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  lengthModal.style.display = "none";
});

lengthButton.addEventListener("click", () => {
  const length = lengthInput.value;
  if (length >= 2 && length <= 5) {
    selectedWords = new Array(length);
    showWordModal();
  } else {
    alert("Veuillez saisir un chiffre entre 2 et 5.");
  }
});

function showWordModal() {
  wordModal.style.display = "block";
}

function hideWordModal() {
  wordModal.style.display = "none";
}

function addWordToList(word) {
  const li = document.createElement("li");
  li.innerText = word;
  wordList.appendChild(li);
}


wordButton.addEventListener("click", () => {
  const word = wordInput.value.trim();
  if (word !== "") {
    const index = selectedWords.indexOf(undefined);
    if (index === -1) {  //  faut le changer avec le nombre donné par le user
      alert("Le tableau est plein.");
    } else {
      selectedWords[index] = word;
      addWordToList(word);
      wordInput.value = "";
      if (index === selectedWords.length - 1) {  //  faut le changer avec le nombre donné par le user ou ici
        hideWordModal();
      }
    }
  }
});


