// exo-1 

function sommeTableau(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme;
}

// var tableau = [456,20,148,2,1,69,87];
// console.log(sommeTableau(tableau)); // affiche 783

// const sum = [1, 2, 3].reduce((partialSum, a) => partialSum + a, 0);
// console.log(sum); // 6

// exo-2

function moyenneTableau(tableau) {
  var somme = 0;
  for (var i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  var moyenne = somme / tableau.length;
  return moyenne;
}
// var tableau = [14,18,6,2,14,14,32];
// console.log(moyenneTableau(tableau)); // affiche 14

// exo-3

function maxTableau(tableau) {
  var max = tableau[0];
  for (var i = 1; i < tableau.length; i++) {
    if (tableau[i] > max) {
      max = tableau[i];
    }
  }
  return max;
}
// var tableau = [5, 10, 2, 8, 3];
// console.log(maxTableau(tableau)); // affiche 10

// exo-4 

function rechercheElement(tableau, element) {
  for (var i = 0; i < tableau.length; i++) {
    if (tableau[i] === element) {
      return true;
    }
  }
  return false;
}

// var tableau = [1, 3, 5, 7, 9];
// var element1 = 5;
// var element2 = 6;
// console.log(rechercheElement(tableau, element1)); // affiche true
// console.log(rechercheElement(tableau, element2)); // affiche false