// Récupérer les éléments HTML nécessaires
const taskInput = document.getElementById("task");
const addBtn = document.getElementById("add-btn");

//je veux savoir au moment ou il fait la saisie dans le input combien de caractere sont dedans
// je met l'action pou rregarder dans le input la saisie
taskInput.addEventListener("input", (event) => {
  console.log(taskInput.value.length);
  // je teste si la saisie est superieur a 1
  if (taskInput.value.length >= 1) {
    console.log("prout");
    addBtn.classList.toggle("add-btn-block");
  } else {
    addBtn.classList.toggle("add-btn");
  }
});



addBtn.addEventListener("click", (event) => {
  // je teste si la saisie est superieur a 3
  if (taskInput.value.length < 3) {
    console.log("prout");
    // je fais apparaitre mon alert
  } else {
    // je fais disparaitre le message d'alerte
    // je fais le traitement pour ajouter une nouvelle tache
  }
});


