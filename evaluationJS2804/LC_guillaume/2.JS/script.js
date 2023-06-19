// 2. Remplissage de tableau

// Écrivez  un programme qui exécute ces instructions :
// un modal s'ouvre pour demander un chiffre qui correspond a la longueur d'un tableau, compris entre 2 et 5
// une alerte s'ouvre si le chiffre est en dehors de cette limite ou invalide,

// ensuite une suite de modal vont s'ouvrir pour que l'utilisateur renseigne un mot, 
// chaque mot sera inséré dans le tableau jusqu'à ce que la longueur maximal du tableau soit atteint, 
// une alerte lui dira que le tableau est plein,

//A FAIRE
// Il affichera une erreur si on saisi un chiffre ou une valeur vide, et on doit continuer a demander de saisir un mot
// A FAIRE

// Quand le tableau est plein, on devra afficher sur le navigateur la liste de tous les mots  
// avec a coté le mot mis a l'envers et la longueur de ce mot,

// l'utilisateur doit pouvoir arreter a tout moment en appuyant sur annuler

const allowedLength = [2, 3, 4, 5];
let lengthChoices = allowedLength.join('-')
//Premier prompt pour saisir la longeur du tableau
let myArrayLength = window.prompt("Veuillez saisir la longueur de votre tableau parmis : " + lengthChoices);

  if (!allowedLength.some(element => element ==myArrayLength)){
    alert("Saisie invalide");
  }

let myArray = []
  while (myArray.length<(myArrayLength)){
    let newWord = window.prompt("Veuillez saisir un mot qui sera ajouté à votre tableau. Il vous reste " + (myArrayLength-myArray.length) + " mots à saisir");
    
    //Insérer une alerte si chiffre ou vide

    //J'insère mes mots dans un nouveau tableau
    myArray.push(newWord);
    console.log(myArray);
  }
  if (myArray.length=myArrayLength){
    alert("Le tableau est plein");
  }

  //Pour chaque valeur , je la renvoie, ainsi qu'à l'envers et le nombre de caractères contenus
for(i=0;i<myArray.length;i++){
  let myWord = myArray[i];
  document.write("le mot : " + myWord + " donne à l'envers " + myWord.split('').reverse().join('') + " et contient " + myWord.length + " caractères.<br>");
}