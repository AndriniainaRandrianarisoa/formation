// Declaration de variables

let arr = [
  {
    name: "John",
    age: 25,
    occupation: "",
    location: "Paris",
    bonjour: [1, 2, 3, 5, 7]
  },

  { name: "Jane", age: "", occupation: "Engineer", location: "New York", bonjour: [1, 2, 3, 5, 7] },

  { name: "Bob", age: 30, occupation: "Developer", location: "", bonjour: [1, 2, 3, 5, 7] },

  { name: "Alice", age: "", occupation: "", location: "", bonjour: [1, 2, 3, 5, 7] }
];

let arr2 = [1, 3, 5, 7, 8, 9, 0];

// function
const myFunction = (test) => {
  if (test < 1) {
    alert("il faut qu'il soirt superieur");
  } else if (test > 3) {
    alert("il faut qu'il soit inferieur");
  } else if (test == "") {
    console.log("🚀 ~ file: script.js:24 ~ myFunction ~ test:", test);
    alert("il faut qu'il ne soit pas vide");
  } else {
    document.write(`votre chiffre est le ${test} `);
    //document.write("votre chiffre est le" + number + " " + number2 + " " + )
  }
};

// instruction
// let number = "";
// number = parseInt(prompt("Veuillez saisir un chiffre comprit entre 1 et 3"));
// console.log("🚀 ~ file: script.js:36 ~ number:", number);
// myFunction(number);

//arr.forEach(element => console.log(element.occupation))

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[i].bonjour.length; j++) {
    console.log(arr[i].bonjour[j]);
  }
}

// for(let i of arr) {
//   console.log(i.occupation)
// }
