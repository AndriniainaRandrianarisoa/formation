let tableau = [
  {
    nom: "Stylo",
    couleur: "Bleu",
    prix: 2.5
  },
  {
    nom: "Carnet",
    couleur: "Rouge",
    prix: 4.99
  },
  {
    nom: "Clé USB",
    couleur: "blue",
    prix: 12.0
  },
  { 
    nom: "Lunettes de soleil",
    couleur: "Vert",
    prix: 19.99
  }
];

//console.log(tableau[2].couleur)


for (let index = 0; index < tableau.length; index++) {
console.log("boucle1", tableau[index].couleur)
}


for(let index of tableau) {
  console.log("boucle2", index.couleur)
  //console.log(tableau[index].couleur)
}

