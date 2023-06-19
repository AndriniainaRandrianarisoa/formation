const startButton = document.getElementById("startButton");
const lengthModal = document.getElementById("lengthModal");
const lengthInput = document.getElementById("lengthInput");
const lengthButton = document.getElementById("lengthButton");
const closeButton = lengthModal.querySelector(".close");

startButton.addEventListener("click", () => {
  lengthModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  lengthModal.style.display = "none";
});

lengthButton.addEventListener("click", () => {
  const length = lengthInput.value;
  if (length >= 3 && length <= 7) {

    lengthModal.style.display = "block";
  } else {
    alert("Veuillez saisir un nombre entre 3 et 7.");
  }
});

const words = [ 
    ["tue", "lit", "mur", "nez", "pie"],
    ["ride", "bras", "mure", "nids"],
    ["chien", "fleur", "pomme", "sable", "table"], 
    ["banane", "cheval", "maison", "soleil", "tomate"],
    ["abricot", "cerise", "ordinateur", "papillon", "requin"]
  ];

  const wordModal = document.getElementById("wordModal");
  const wordList = document.getElementById("wordList");
  const wordInput = document.getElementById("wordInput");
  const wordButton = document.getElementById("wordButton");
  
  let selectedWords;
  
  startButton.addEventListener("click", () => {
    lengthModal.style.display = "block";
  });
  
  closeButton.addEventListener("click", () => {
    lengthModal.style.display = "none";
  });
  
  lengthButton.addEventListener("click", () => {
    const length = parseInt(lengthInput.value);
    if (length >= 3 && length <= 7) {
      selectedWords = words[length - 3];
      showWordModal();
    } else {  alert("Veuillez saisir un nombre entre 3 et 7.");
    lengthInput.value = "";
    lengthInput.focus();
    }
  });
  
  function showWordModal() {
    wordList.innerHTML = "";
    selectedWords.forEach(word => {
      const li = document.createElement("li");
      li.textContent = word;
      li.addEventListener("click", () => {
        wordInput.value = word;
      });
      wordList.appendChild(li);
    });
    wordModal.style.display = "block";
  }
  
  wordButton.addEventListener("click", () => {  
    const selectedWord = wordInput.value;
    if (selectedWords.includes(selectedWord)) {
      alert("Félicitations, le mot choisi est : " + selectedWord);  
      wordModal.style.display = "none";
    } else {
      alert("Veuillez choisir un mot parmi les propositions.");
      wordInput.value = "";
      wordInput.focus();
    }
  });  // donner 1 seule bonne réponse
  
  