let health1 = 100;
let health2 = 100;
let isGameStarted = false;

function attack(player) {
  if (!isGameStarted) {
    alert("Veuillez commencer la partie d'abord !");
    return;
  }

  const opponent = player === 1 ? 2 : 1;
  const damage = Math.floor(Math.random() * 21) + 30;

  if (player === 1) {
    health2 -= damage;
    document.getElementById("health2").textContent = health2;
    announceAttack(player, damage);
    if (health2 <= 0) endGame(1);
  } else {
    health1 -= damage;
    document.getElementById("health1").textContent = health1;
    announceAttack(player, damage);
    if (health1 <= 0) endGame(2);
  }

  document.getElementById(`attack${player}`).style.display = "none";
  document.getElementById(`attack${opponent}`).style.display = "block";
}

function announceAttack(player, damage) {
  const message = `Joueur ${player} attaque avec ${damage} points !`;
  const announcement = document.createElement("p");
  announcement.textContent = message;
  document.getElementById("announcements").appendChild(announcement);
}

function startGame() {
  health1 = 100;
  health2 = 100;
  isGameStarted = true;
  document.getElementById("health1").textContent = health1;
  document.getElementById("health2").textContent = health2;
  document.getElementById("attack1").style.display = "block";
  document.getElementById("attack2").style.display = "none";
  document.getElementById("result").style.display = "none";
  document.getElementById("announcements").innerHTML = ""; // Clear previous announcements
}

function endGame(winner) {
  isGameStarted = false;
  document.getElementById(
    "result"
  ).textContent = `Le joueur ${winner} a gagné !`;
  document.getElementById("result").style.display = "block";
  document.getElementById("attack1").style.display = "none";
  document.getElementById("attack2").style.display = "none";
}
