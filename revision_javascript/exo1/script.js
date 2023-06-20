let tableau = [
  {
    nom: "Stylo",
    couleur: "Bleu",
    prix: 2.5
  },
  {
    nom: "Tulipe",
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

// let tableau2 = [
//   0, "élément 1",
//   1, "élément 2",
//   2, "élément 3",
//   3, "élément 4",
//   4, "élément 5"
// ];
// console.log("🚀 ~ file: script.js:33 ~ tableau2:", tableau2[1])

let tableau3 = [1, 2, 3, 4, 5];

for (let index = 0; index < tableau.length; index++) {
  console.log("coucou", index, tableau[index].couleur)
}


for (let index of tableau) {
  console.log("🚀 ~ file: script.js:41 ~ index:", index)
  //console.log(tableau[index].couleur)
}


