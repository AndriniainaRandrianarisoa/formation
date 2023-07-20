const urlTasks = `https://dummyjson.com/todos`;

// Fonction pour get la liste de taches
function getAllTasks() {
  fetch(urlTasks)
    .then((response) => response.json())
    .then((data) => {
      console.log("🚀 ~ file: script.js:9 ~ .then ~ data:", data);

      for (const element of data.todos) {
        let taskList = document.getElementById("taskList");
        let li = document.createElement("li");
        li.innerHTML = `<span>${element.todo}</span><button class="delete" onclick="deleteTask(${element.id})">Supprimer</button> <button style='background-color: blue'>Detail</button>`;
        taskList.appendChild(li);
      }
    })
    .catch((error) => {
      console.log("Une erreur s'est produite :", error);
    });
}

// Fonction pour ajouter une nouvelle tâche
function addTask() {
  var taskInput = document.getElementById("taskInput");
  var taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Veuillez entrer une tâche valide !");
    return;
  }

  var taskList = document.getElementById("taskList");
  var li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span><button class="delete" onclick="deleteTask(this)">Supprimer</button> <button style='background-color: blue'>Detail</button>`;
  taskList.appendChild(li);

  taskInput.value = "";
}

// Fonction pour modifier une tâche
function editTask(button) {
  var li = button.parentElement;
  var taskText = li.querySelector("span").innerText;
  var newTaskText = prompt("Modifier la tâche :", taskText);

  if (newTaskText !== null && newTaskText.trim() !== "") {
    li.querySelector("span").innerText = newTaskText.trim();
  }
}

// Fonction pour supprimer une tâche
function deleteTask(button) {
  var li = button.parentElement;
  li.remove();
}

getAllTasks();

// const deleteTask = async(test, id) => {
//   const urlForAddTask = `https://dummyjson.com/todos/${id}`
//   const response = await fetch(urlForAddTask);
//   var li = test.parentElement;
//   li.remove();
// }

const getRandom = async () => {
  const urlForgetRandom = `https://dummyjson.com/todos`;
  const response = await fetch(urlForAddTask);
};

getRandom();
