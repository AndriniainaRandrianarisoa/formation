// 1.Comparateur de mot

// Créez un programme qui exécute les étapes suivantes :
// Ouvre un modal pour demander de saisir un nombre de lettre souhaitez entre 3 et 7
// Une erreur s'affiche si il saisie un nombre en dehors de 3 et 7 et si c'est une valeur invalide
// Il devra recommencer la saisie tans que le chiffre n'est pas valide
// En fonction de la longueur sélectionnée, un deuxième modal s'ouvrira et 
// affichera une liste de mots qu'il aura chercher dans le tableau qui correspond au nombre de lettre qu'il a sélectionné
// Dans ce modal il choisira et saisira un mot parmi les propositions
// Une erreur s'affiche si :
// Le mot saisie ne correspond pas aux propositions
// Le programme devra continuer a lui demander de choisir tans que le résultat n'est pas correct
// On affichera sur le navigateur si le résultat est correct le mot choisie avec cette phrase => Félicitation, le mot choisi est :
// L'utilisateur pourra arrêter à tout moment le jeu en cliquant sur annuler, une alerte disant "Opération annulée" devra s'afficher
// voici le tableau a utiliser : 

  const words = [ 
    ["tue", "lit", "mur", "nez", "pie"],
    ["ride", "bras", "mure", "nids"],
    ["chien", "fleur", "pomme", "sable", "table"], 
    ["banane", "cheval", "maison", "soleil", "tomate"],
    ["abricot", "cerise", "ordinateur", "papillon", "requin"]
  ];
  const allowedNumbers =[3, 4, 5, 6, 7];
  let numberChoices = allowedNumbers.join('-')
  //première saisie, on vérifie si non valide, on entre dans une boucle while
  let a = window.prompt("Veuillez saisir un nombre de lettres parmi : " + numberChoices);
  //si on annule le prompt
  if (a===null){
    alert("Opération annulée");
  }
  while (!allowedNumbers.some(element => element ==a)){
    alert("Nombre entrée invalide. Ce nombre doit être parmi : " + numberChoices);
    let b = window.prompt("Veuillez saisir un nombre de lettres parmi : " + numberChoices);
    a=b;
    //si on annule le prompt
    if (a===null){alert("Opération annulée")}
  }
  //On identifie les mots valides
  let chosenList = words[a-3];
  let wordsChoices = chosenList.join(' ');
  //deuxième saisie, on vérifie si non valide, on entre dans une boucle while
  let c = window.prompt("Veuillez choisir un nomre parmi : " + wordsChoices);
  //si on annule le prompt
  if (c===null){alert("Opération annulée")}
  while (!chosenList.some(element => element ==c)){
    alert("Mot entré invalide. Veuillez choisir un nomre parmi : " + wordsChoices);
    let d = window.prompt("Veuillez choisir un nomre parmi : " + wordsChoices);
    c=d;
    //si on annule le prompt
    if (c===null){alert("Opération annulée")}
  }
  if (chosenList.find(element => element == c)){
    document.write("Félicitation, le mot choisi est : "+c);
  }