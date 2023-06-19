// 3.Chifoumi
// Créez un programme de chifoumi , avec trois valeur, pierre, feuille, ciseau.
// La pierre est plus forte que le ciseau, le ciseau est plus fort que le papier 
// et le papier est plus fort que la pierre,

// un modal s'ouvrira pour demander a l'utilisateur de choisir entre ces trois element : 
// pierre, feuille, ciseau,

// une erreur s'affichera si le choix n'est pas valide,

// le programme continuera de lui demander de choisir tans que le choix n'est pas valide

// le progamme choisira aleatoirement aussi un de ces trois elements,

// si c'est l'utilisateur qui gagne, une alert s'affichera pour lui dire felicitation, 
// et si c'est le programme qui gagne il dira que l'utilisateur est un looser

let choices =["pierre", "feuille", "ciseaux"]
let possibleChoices = choices.join(' - ')
let myChoice = window.prompt("Veuillez choisir votre arme parmi : " + possibleChoices);
let aINumber = Math.floor(Math.random() *(choices.length));
let aIChoice = choices[aINumber];
  // console.log(aIChoice);

while (!choices.some(element => element==myChoice)){
  alert("Mot entré invalide. Veuillez choisir votre arme parmi : " + possibleChoices);
  let a = window.prompt("Veuillez choisir votre arme parmi : " + possibleChoices);
  myChoice=a;
}

if (myChoice==aIChoice){
  alert("Egalité, retente ta chance");
}
else {
  let myNumber = choices.findIndex(element => element == myChoice);
  let resultNumber = (myNumber-aINumber);

  // console.log(resultNumber);
  if (resultNumber == -1 || resultNumber == 2){
    alert("Looser");
  }
  else alert("Félicitations");
}
