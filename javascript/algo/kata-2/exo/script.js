// exo-1 

function triDecroissant(tableau) {
  tableau.sort(function(a, b) {
    return b - a;
  });
  return tableau;
}
// console.log(triDecroissant([4, 2, 7, 1, 3])); // affiche [7, 4, 3, 2, 1]
// console.log(triDecroissant([10, -5, 20, 8, 0])); // affiche [20, 10, 8, 0, -5]

// exo-2

function produitTableau(tableau) {
  var produit = 1;
  for (var i = 0; i < tableau.length; i++) {
    produit *= tableau[i];
  }
  return produit;
}
// console.log(produitTableau([2, 3, 4])); // affiche 24
// console.log(produitTableau([1, 2, 3, 4, 5])); // affiche 120

// exo-3

function premierUnique(tableau) {
  for (var i = 0; i < tableau.length; i++) {
    var element = tableau[i];
    if (tableau.indexOf(element) === i ) {
      return element;
    }
  }
  return undefined;
}

function premierUnique2(tableau) {
  const occurrences = {};
  for (const element of tableau) {
    if (occurrences[element]) {
      occurrences[element]++;
    } else {
      occurrences[element] = 1;
    }
  }
  
  for (const element of tableau) {
    if (occurrences[element] === 1) {
      return element;
    }
  }
}



console.log("test",premierUnique2([2, 3, 2, 4, 5, 4, 3])); // affiche 5
//console.log(premierUnique([1, 2, 3, 4, 5,1])); // affiche 1
// console.log(premierUnique([1, 2, 3, 3, 2, 1])); // affiche undefined

// exo-4 

function supprimerProprietesVides(objet) {
  for (var cle in objet) {
    if (objet[cle] === "" || objet[cle] === null || objet[cle] === undefined) {
      delete objet[cle];
    }
  }
  return objet;
}

// var objet = {a: 1, b: "", c: null, d: undefined, e: "non vide"};
// console.log(supprimerProprietesVides(objet)); // affiche {a: 1, e: "non vide"}