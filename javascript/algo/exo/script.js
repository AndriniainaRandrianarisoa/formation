let number1 = 1;
let number2 = 3;
let resultat = "";

// comparer ces deux nombres et donner dans une alert quel est le plus grand nombre

// si number 1 est plus grand que mnumber 2 alors alrt sinon number 2
if (number1 > number2) {
  resultat = "number1";
} else {
  resultat = "number2";
}

//window.alert(`le number le  plus grand est ${resultat}`  )

var monObjet = {
  propriete1: "Valeur 1",
  propriete2: 2,
  propriete3: {
    propriete1: "Valeur 1",
    propriete2: {
      propriete1: "Valeur 100",
      propriete2: [1,2,3,4,5,6]
    }
  }
};

document.write(`${monObjet.propriete3.propriete2.propriete2[4]}`);

// for(let index= 0; index < monObjet.propriete3.propriete2.propriete2.length; index++ ) {
//   console.log(monObjet.propriete3.propriete2.propriete2[index])
// }

// for(let element of monObjet.propriete3.propriete2.propriete2 ) {
//   console.log(element)
// }

// monObjet.propriete3.propriete2.propriete2.forEach(element => {
//   console.log(element)
// });


var tableauObjets = [
  { id: 1, nom: "Objet 1", valeur: 1 },
  { id: 2, nom: "Objet 2", valeur: 2 },
  { id: 3, nom: "Objet 3", valeur: 3 }
];



// ou l'id === 2
// const index = tableauObjets.findIndex((element) => element.id === 2)
// console.log("🚀 ~ file: script.js:53 ~ index:", index)

const index = tableauObjets.find((element) => element.id === 2)


index.nom = 'prout'

console.log("🚀 ~ file: script.js:53 ~ index:", index)

// map
// filter
