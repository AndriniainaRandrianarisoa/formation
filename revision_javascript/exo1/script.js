let maVoiture = {
  annee: "",
  model: "",
  fabricant: "",
};

maVoiture.color = "blue";

maVoiture = {
  annee: "",
  model: {
    ford: {
      mustang: [
        {
          name: "123",
          disponible: {
            free: ["9", "1", "5"],
          },
        },
        { name: "456", disponible: "1" },
        { name: "789", disponible: "7" },
      ],
      pontiac: "pas vendu",
    },
  },
  fabricant: "",
  color: ["blue", "green", "black"],
};

function searchValue(mustangArray) {
  console.log(
    "🚀 ~ file: script.js:31 ~ searchValue ~ mustangArray:",
    mustangArray
  );
  const resultat = mustangArray.find((voiture) => voiture.disponible === "1");
  console.log("🚀 ~ file: script.js:43 ~ searchValue ~ resultat:", resultat);
  //   for (var i = 0; i < mustangArray.length; i++) {
  //     console.log(
  //       "🚀 ~ file: script.js:32 ~ searchValue ~ mustangArray:",
  //       mustangArray[i]
  //     );
  // console.log(mustangArray[i].disponible.free);
  // for (var j = 0; j < mustangArray[i].disponible.free.length; j++) {
  //   console.log(mustangArray[i].disponible.free[j]);
  // }
  // if (mustangArray[i].disponible === "1") {
  //   document.write(
  //     `la mustang de nom est ${mustangArray[i].name} et il reste en stock ${mustangArray[i].disponible} voiture`
  //   );
  // }

  //}
}

const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element) => element > 10);

searchValue(maVoiture.model.ford.mustang);

// for (i = 0; i < maVoiture.model.ford.mustang.length; i++) {
//   console.log(
//     "🚀 ~ file: script.js:3 ~ maVoiture:",
//     maVoiture.model.ford.mustang[i]
//   );
// }

//console.log("mustange", maVoiture.model.ford.mustang);
