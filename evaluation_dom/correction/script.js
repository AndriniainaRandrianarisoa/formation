// CONSIGNE A
function generer() {
  // Générer un nombre aléatoire entre 1 et 100
  var nombreAleatoire = Math.floor(Math.random() * 100) + 1;
  // Générer un code couleur hexadécimal aléatoire
  var codeCouleur = "#" + Math.floor(Math.random() * 0xffffff).toString(16);
  // Afficher le nombre aléatoire et appliquer la couleur générée
  var resultat = document.getElementById("resultat");
  resultat.innerHTML = nombreAleatoire;
  resultat.style.color = codeCouleur;
}

// CONSIGNE B
const addTaskBtn = document.querySelector("#add-task");
const taskInput = document.querySelector("#task-input");
const taskList = document.querySelector("#task-list");
const taskListDone = document.querySelector("#task-list-done");
const removeAllTaskBtn = document.querySelector("#remove-all-task");
const addAllDoneBtn = document.querySelector("#add-all-done");

addTaskBtn.addEventListener("click", function () {
  let task = taskInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.innerHTML = task;
    taskList.appendChild(li);
    taskInput.value = "";
  }
});

removeAllTaskBtn.addEventListener("click", function () {
  //   taskList.innerHTML = "";
  //   taskListDone.innerHTML = "";
  while (taskList.firstChild) {
    taskList.firstChild.remove();
  }
});

addAllDoneBtn.addEventListener("click", function () {
  while (taskList.firstChild) {
    const taskItems = taskList.querySelector("li");
    taskListDone.appendChild(taskItems);
  }
});
