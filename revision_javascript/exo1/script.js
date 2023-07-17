// let tableau = [
//   {
//     nom: "Stylo",
//     couleur: "Bleu",
//     prix: 2.5
//   },
//   {
//     nom: "Tulipe",
//     couleur: "Rouge",
//     prix: 4.99
//   },
//   {
//     nom: "Clé USB",
//     couleur: "blue",
//     prix: 12.0
//   },

//   {
//     nom: "Lunettes de soleil",
//     couleur: "Vert",
//     prix: 19.99
//   }
// ];

// // let tableau2 = [
// //   0, "élément 1",
// //   1, "élément 2",
// //   2, "élément 3",
// //   3, "élément 4",
// //   4, "élément 5"
// // ];
// // console.log("🚀 ~ file: script.js:33 ~ tableau2:", tableau2[1])

// let tableau3 = [1, 2, 3, 4, 5];

// for (let index = 0; index < tableau.length; index++) {
//   console.log("coucou", index, tableau[index].couleur)
// }

// for (let index of tableau) {
//   console.log("🚀 ~ file: script.js:41 ~ index:", index)
//   //console.log(tableau[index].couleur)
// }

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzza");
    } else if (i % 3 === 0) {
      console.log("Fizza");
    } else if (i % 5 === 0) {
      console.log("Buzza");
    } else {
      console.log(i);
    }
  }
}

function test(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      i = "Fizz";
      console.log("Fizz");
    } else if (i % 5 == 0) {
      console.log("Buzz");
    } else if (i % 15 == 0) {
      console.log("FizzBuzz");
    } else {
      console.log("coucou");
    }
  }
}

// Exemple d'utilisation avec un nombre donné (par exemple, 20)
//fizzBuzz(20);
test(20);
