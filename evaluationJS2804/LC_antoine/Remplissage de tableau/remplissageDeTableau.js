// Écrivez  un programme qui exécute ces instructions :

// un modal s'ouvre pour demander un chiffre qui correspond a la longueur d'un tableau, compris entre 2 et 5

// une alerte s'ouvre si le chiffre est en dehors de cette limite ou invalide,

// ensuite une suite de modal vont s'ouvrir pour que l'utilisateur renseigne un mot, chaque mot sera inséré dans le tableau jusqu'à ce que la longueur maximal du tableau soit atteint, une alerte lui dira que le tableau est plein,

// Il affichera une erreur si on saisi un chiffre ou une valeur vide, et on doit continuer a demander de saisir un mot

// Quand le tableau est plein, on devra afficher sur le navigateur la liste de tous les mots  avec a coté le mot mis a l'envers et la longueur de ce mot,

// l'utilisateur doit pouvoir arreter a tout moment en appuyant sur annuler
const restartBtn = document.getElementById("restartBtn");
restartBtn.addEventListener("click", () => {
    fillTheArray();
});

function askForANumber() {
    let choosenNumber = 0;
    while (choosenNumber < 2 || choosenNumber > 5 || isNaN(parseInt(choosenNumber))) {
        // l'utilisateur doit pouvoir arreter a tout moment en appuyant sur annuler
        if (choosenNumber == null) {
            document.getElementById("message").innerHTML = `Opération annulée`;
            break;
        }
        if(choosenNumber ==0){
            choosenNumber = prompt("Donnez un chiffre qui doit être entre 2 et 5");
        }
        if (isNaN(parseInt(choosenNumber))) {
            choosenNumber = prompt("Ce n'est pas un chiffre. Vous devez donner un chiffre qui doit être entre 2 et 5");
        }
        else {
            choosenNumber = prompt("Attention vous devez saisir un chiffre compris entre 2 et 5");
        }
    }
    return choosenNumber;
}


function promptTheArray(array) {
    for (const key in array) {
        document.getElementById("message").innerHTML += `<p>le mot choisi est : ${array[key]}`;
        document.getElementById("message").innerHTML += ` le mot retourné est : ${array[key].split("").reverse().join("")}`;
        document.getElementById("message").innerHTML += ` Sa longueur est de : ${array[key].length} lettres </p>`;
    }
}

function fillTheArray() {
    let choosenNumber = askForANumber();
    let array = [];
    while (array.length < choosenNumber) {
        let newWord = prompt("Renseignez un mot à ajouter");
        if(newWord.length>0){
            array.push(newWord);
        }
    }
    return promptTheArray(array);
}

fillTheArray();