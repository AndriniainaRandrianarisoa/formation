
// ************ declaration de mes variables   ***********

let number1
let number2
let result 

// ************j'execute mes instructions  ***********


// 1- je recupere mes valeurs 
number1 = prompt("Veuillez saisir le premier nombre")
number2 = prompt("Veuillez saisir le deuxieme nombre")

// if(number1 > 10) {
//   alert('Votre nombre ne doit pas etre superieur a 10')
// } else {
//   number2 = parseInt(prompt("Veuillez saisir le deuxieme nombre"))
//   if(number2 > 10) {
//     alert('Votre nombre ne doit pas etre superieur a 10')
//   } else {
//     result = number1 + number2
//   }
// }


// 2- je test mes variables 
if(number1 > 10 || number2 > 10) {
  // si c'est pas ok 
  alert('Votre nombre ne doit pas etre superieur a 10')
} else {
  // sinon soi c'est ok 
  // je fais mon calcul 
  result = number1 + number2
  // j'affiche sur le navigateur
  document.write(number1 + " "+ "+" + number2 + "=" + result)
  document.write(`${number1} + ${number2} = ${result}`)
}



