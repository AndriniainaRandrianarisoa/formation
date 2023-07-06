let numero = "12345";

let number = 0;

number = Number(prompt("ton numero"));
console.log("🚀 ~ file: script.js:7 ~ number:", number);

if (number == 0) {
  alert("ne doit pas etre vide");
} else if (!number) {
  alert("Doit etre un chiffre");
} else {
  // si le numero est bon je lui dit que c;est ok avec une alerte
  // if(number == numero) {
  //   alert('bienvenu')
  // } else {
  //   alert('pas valide karai')
  // }
  number == numero ? alert("bienvenu") : alert("pas valide karai");
}

switch (number) {
  case number == 0:
    alert("ne doit pas etre vide");
    break;
  case !number:
    alert("Doit etre un chiffre")
    break;
  default:
    if (number == numero) {
      alert("bienvenu");
    } else {
      alert("pas valide karai");
    }
}


