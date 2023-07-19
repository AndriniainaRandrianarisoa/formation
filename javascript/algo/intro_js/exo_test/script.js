// let prixHT = prompt("coucou");
// if (!prixHT) {
//   console.log("nan");
// } else if (prixHT < 5 || prixHT > 1000) {
//   alert("le chiffre n/est pas compris entre....");
// } else {
//   choix = prompt("Souhaitez vous ajouter une remise à votre prix");
//   console.log("🚀 ~ file: script.js:8 ~ choix:", choix);
//   if (choix === "") {
//     console.log("aucune donnée", choix);
//   } else if (choix == "yes" || choix == "oui") {
//     console.log("choix oui");
//     remise = prompt("indiquer votre remise :");
//     console.log("remise", remise);
//   } else if (choix == "no" || choix == "non") {
//     console.log(
//       "Aucune remise n'a été appliquée, votre prix est : ….. €",
//       choix
//     );
//     calcul();
//   } else {
//     console.log("finish");
//   }
// }
let test = (montantHt = prompt("coucou"));

if (test >= 5) {
  console.log("coucou");
} else {
  console.log("prout");
}
