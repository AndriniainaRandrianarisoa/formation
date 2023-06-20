// Récupération des éléments DOM
const inputTask = document.getElementById("inputTask");
const btnAdd = document.getElementById("btnAdd");
const taskList = document.getElementById("taskList");

// Écouteur d'événement pour ajouter une tâche
btnAdd.addEventListener("click", () => {
  const taskText = inputTask.value;
  if (taskText !== "") {
    const li = document.createElement("li");
    const taskNode = document.createTextNode(taskText);
    const btnDelete = document.createElement("button");
    btnDelete.textContent = "Supprimer";
    btnDelete.addEventListener("click", () => {
      li.remove();
    });
    li.appendChild(taskNode);
    li.appendChild(btnDelete);
    taskList.appendChild(li);
    inputTask.value = "";
  }
});
