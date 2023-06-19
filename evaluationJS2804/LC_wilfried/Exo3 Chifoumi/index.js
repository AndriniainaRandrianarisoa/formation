const playButton = document.getElementById("playButton");
const gameModal = document.getElementById("gameModal");
const closeButton = gameModal.querySelector(".close");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");

playButton.addEventListener("click", () => {
  gameModal.style.display = "block";
});

closeButton.addEventListener("click", () => {
  gameModal.style.display = "none";
});

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.dataset.choice;
    if (userChoice === "pierre" || userChoice === "feuille" || userChoice === "ciseau") {
      const computerChoice = computerPlay();
      const gameResult = playRound(userChoice, computerChoice);
      result.textContent = gameResult;
    } else {
      alert("Gros tricheur, la vrai règle c'est pierre, feuille et ciseau.");
    }
  });
});

function computerPlay() {
  const choices = ["pierre", "feuille", "ciseau"];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function playRound(userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    return alert("Egalité ! :3");
  } else if ((userChoice === "pierre" && computerChoice === "ciseau") ||
             (userChoice === "feuille" && computerChoice === "pierre") ||
             (userChoice === "ciseau" && computerChoice === "feuille")) {
    return alert("Well played!");
  } else {
    return alert("Ahaha looser!");
  }
}

