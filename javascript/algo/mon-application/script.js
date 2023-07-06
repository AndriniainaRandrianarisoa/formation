// ***** declaration de variable
let = 0;
let number2 = 0;
let resultat = 0;
let operateur = "";

number1 = 1;

if (number1 !== 8) {
  console.log("SDghDSFH");
}

// let num = 0
// let str = ""
// let bol = false

// ma premiere fonction

// ma fonction va servire a fficher sur le navigateur
function affiche() {
  document.write(`${number1} ${operateur} ${number2} = ${resultat}`);
}

// ***** instructions

function execute() {
  // un modal s’ouvre pour demander un premier chiffre
  number1 = parseInt(prompt("Veuillez saisir votre premier chiffre"));

  // si ce n'est pas une valeur valide arrete le programme et renvois un erreur, sinon tu continue
  // je teste ma premiere valeur
  if (isNaN(number1)) {
    //m si c'est pas ok je renvois une erreur
    alert("Renseignez une valeur valide");
  } else {
    // sinon je continue
    // un modal s’ouvre pour demander un deuxieme chiffre
    number2 = parseInt(prompt("Veuillez saisir votre deuxieme chiffre"));
    // je teste ma deuxieme valeur
    if (isNaN(number2)) {
      alert("Renseignez une valeur valide");
    } else {
      // je continue
      operateur = prompt("Veuillez saisir votre operateur");
      console.log("🚀 ~ file: script.js:30 ~ operateur:", operateur);

      if (operateur == "+") {
        resultat = number1 + number2;
        affiche();
      } else if (operateur == "-") {
        resultat = number1 - number2;
        affiche();
      } else if (operateur == "*") {
        resultat = number1 * number2;
        affiche();
      } else if (operateur == "/") {
        if (number2 == 0) {
          alert("pas possible");
        } else {
          resultat = number1 / number2;
        }
        affiche();
      } else {
        alert("pas operateur disponible");
      }

      // if ( operateur != "+" && operateur != "-" && operateur != "*" && operateur != "/") {
      //   console.log(operateur)
      //   alert("popot c'est opas  bon ")
      // } else {
      //   if (operateur == "+") {
      //     resultat = number1 + number2;
      //   } else if (operateur == "-") {
      //     resultat = number1 - number2;
      //   } else if (operateur == "*") {
      //     resultat = number1 * number2;
      //   } else {
      //     if (number2 == 0) {
      //       alert("pas possible");
      //     } else {
      //       resultat = number1 / number2;
      //     }
      //   }
      //   document.write(`${number1} ${operateur} ${number2} = ${resultat}`);
      // }
    }
  }
}
function prout() {
  console.log("pipi")
}

// instructions
execute()
prout()