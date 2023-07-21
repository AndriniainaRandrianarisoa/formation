let health1 = 100;
let health2 = 100;
//let isGameStarted = false;
document.getElementById("attack1").style.display = "none";
document.getElementById("attack2").style.display = "none";
const opponents = ["dragon", "chevalier"];

const getRandom = () => {
  return Math.floor(Math.random() * (1 - 0 + 1)) + 1;
};

function attack(player) {
  // if (!isGameStarted) {
  //   alert("Veuillez commencer la partie d'abord !");
  //   return;
  // }

  const opponent = player === 1 ? 2 : 1;

  // get random number 
  const damage = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

  if (player === 1) {
    health2 -= damage;
    document.getElementById("health2").textContent = health2;
    announceAttack(1, damage);
    document.getElementById(`attack${player}`).style.display = "none";
  document.getElementById(`attack${opponent}`).style.display = "inline-block";
    if (health2 <= 0) endGame(1);
  } else {
    health1 -= damage;
    document.getElementById("health1").textContent = health1;
    announceAttack(0, damage);
    document.getElementById(`attack${player}`).style.display = "none";
  document.getElementById(`attack${opponent}`).style.display = "inline-block";
    if (health1 <= 0) endGame(2);
  }

  
}

function announceAttack(player, damage) {
  const message = `Joueur ${opponents[player]} attaque avec ${damage} points !`;
  const announcement = document.createElement("p");
  announcement.textContent = message;
  document.getElementById("announcements").appendChild(announcement);
}

function startGame() {
  const first = getRandom();
  const second = first == 1 ? 2 : 1;
  //isGameStarted = true;
  document.getElementById("health1").textContent = health1;
  document.getElementById("health2").textContent = health2;
  document.getElementById(`attack${first}`).style.display = "inline-block";
  document.getElementById(`attack${second}`).style.display = "none";
  // Clear previous announcements and resul
  document.getElementById("result").style.display = "none";
  document.getElementById("announcements").innerHTML = "";
}

function endGame(winner) {
  document.getElementById("attack1").style.display = "none";
  document.getElementById("attack2").style.display = "none";

  if (winner == 1) {
    document.getElementById(
      "resultImage"
    ).innerHTML = `<img src="images/knight-winner.png" alt="" >`;
    document.getElementById("result").textContent = `Le chevalier a gagné !`;
  } else {
    document.getElementById(
      "resultImage"
    ).innerHTML = `<img src="images/dragon-winner.png" alt="" >`;
    document.getElementById("result").textContent = `Le dragon a gagné !`;
  }

  document.getElementById("result").style.display = "inline-block";
}
