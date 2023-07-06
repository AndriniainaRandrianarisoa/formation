// declarer vos variables
let number = 0
let number2 = 0
let number3 = 0
let tva1 = 0
let tva2 = 0
let tva3 = 0
let tva = 0.2


// creer vos fonctions 
function testNumber(chien) {
  if(chien != "") {
    console.log("caca")
  } else if(chien < 0) {
    console.log("caca")
  } else {
    console.log("coucou tu as reussi", chien)
  }
}

// creer vos fonctions 
function calculTva(number) {
  let result =  number * tva;
  return result
}


// donner vos instructions 

number = prompt("saisir un nombre");
testNumber(number)
tva1 = calculTva(number)

number2 = prompt("saisir un nombre");
testNumber(number2)
tva2 = calculTva(number2)

number3 = prompt("saisir un nombre")
testNumber(number3)
tva3 = calculTva(number3)

function afficheResult(reult) {
  document.write("adgesGH")
  document.write("adgesGH")
  document.write("adgesGH")
  document.write("adgesGH")
}

