const choices = ["pierre", "feuille", "ciseau"];

function askChifoumi() {
    let choosenItem = prompt("pierre feuille ou ciseau?");
    return choosenItem;
}

function checkAnswer() {
    let answer ="";
    while (!choices.includes(answer)) {
        if (answer == null) {
            alert(`Partie annulée`);
            break;
        }
        answer = askChifoumi();
    }
    return answer;
}

function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function chifoumi() {
    let answer= checkAnswer();
    let computerSelection = computerChoice();

    if(answer == computerSelection){
        document.getElementById("replayButton").style.display = "block";
       return alert('égalité');
    }
    if(answer == "pierre"){
        computerSelection == "feuille"? alert(`T'es un looser j'ai choisi ${computerSelection}`) : alert("Félicitations");
    }
    if(answer == "feuille"){
        computerSelection == "ciseau"? alert(`T'es un looser j'ai choisi ${computerSelection}`) : alert("Félicitations");
    }
    if(answer == "ciseau"){
        computerSelection == "pierre"? alert(`T'es un looser j'ai choisi ${computerSelection}`) : alert("Félicitations");
    }
    document.getElementById("replayButton").style.display = "block";
}

chifoumi();

function replay() {
    // Réinitialisation des variables utilisées
    answer = "";
    computerSelection = "";
      
    // Masquer le bouton "Rejouer"
    document.getElementById("replayButton").style.display = "none";
    chifoumi();
  }
