// Créez un programme de chifoumi

// un modal s'ouvrira pour demander a l'utilisateur de choisir entre ces trois element : pierre, feuille, ciseau,

// une erreur s'affichera si le choix n'est pas valide,

// le programme continuera de lui demander de choisir tans que le choix n'est pas valide

// le programme choisira aléatoirement aussi un de ces trois éléments,

// si c'est l'utilisateur qui gagne, une alerte s'affichera pour lui dire félicitation, et si c'est 
// le programme qui gagne il dira que l'utilisateur est un looser

// window.prompt('Choisissez : pierre, feuille, ciseau');

let pierre = 'pierre';
let ciseau = 'ciseau';
let feuille = 'feuille';

let answer = prompt('Choisissez : pierre, feuille, ciseau');


console.log(answer);

// do {
//     alert('ERREUR');
//     prompt('Choisir parmi : pierre, papier, ciseau');
// } while (answer !== pierre || feuille || ciseau);

if(answer !== pierre || feuille || ciseau) {
    alert('ERREUR');
    do prompt('Choisir parmi : pierre, papier, ciseau');
    while (answer == pierre || feuille || ciseau)
}