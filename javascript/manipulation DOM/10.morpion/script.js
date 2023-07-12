let players = ["X", "O"];
let tourPlayer = players[0];
let resultat = "";

let board = document.getElementById("board");
let p = document.createElement("p");
p.textContent = `C'est au joueur ${tourPlayer} de commencer`;
board.appendChild(p);

let divCell = document.getElementsByClassName("cell");
divCell[0].textContent = " ";
divCell[1].textContent = "  ";
divCell[2].textContent = "   ";
divCell[3].textContent = "    ";
divCell[4].textContent = "     ";
divCell[5].textContent = "      ";
divCell[6].textContent = "       ";
divCell[7].textContent = "        ";
divCell[8].textContent = "         ";

function play(cell) {
  // if (tourPlayer === players[0]) {
  //   cell.textContent = players[0];
  //   tourPlayer = players[1];
  //   p.textContent = `C'est au joueur ${tourPlayer}`;
  // } else {
  //   cell.textContent = players[1];
  //   tourPlayer = players[0];
  //   p.textContent = `C'est au joueur ${tourPlayer}`;
  // }

  let one = document.getElementById("cellOne").textContent;
  // console.log(one);
  let two = document.getElementById("cellTwo").textContent;
  // console.log(two);
  let three = document.getElementById("cellThree").textContent;
  let four = document.getElementById("cellFour").textContent;
  let five = document.getElementById("cellFive").textContent;
  let six = document.getElementById("cellSix").textContent;
  let seven = document.getElementById("cellSeven").textContent;
  let eight = document.getElementById("cellEight").textContent;
  let nine = document.getElementById("cellNine").textContent;

  if (
    (one === two && one === three) ||
    (four === five && four === six) ||
    (seven === eight && seven === nine) ||
    (one === five && one === nine) ||
    (three === five && three === seven) ||
    (one === four && one === seven) ||
    (two === five && two === eight) ||
    (three === six && three === nine)
  ) {
    if (tourPlayer == players[0]) {
      resultat = players[1];
    } else {
      resultat = players[0];
    }
    alert(`${resultat} a gagné`);
  } else {
    console.log("coucou", tourPlayer);
  }
}
