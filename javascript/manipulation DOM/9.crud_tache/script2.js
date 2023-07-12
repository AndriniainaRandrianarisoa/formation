// Récupérer les éléments HTML nécessaires
const maxTasksInput = document.getElementById('max-tasks');
const taskInput = document.getElementById('task');
const addBtn = document.getElementById('add-btn');
const errorMessage = document.getElementById('error-message');
const taskList = document.getElementById('task-list');

// Variables pour suivre le nombre de tâches ajoutées
let taskCount = 0;
let maxTasks = 0;

// Fonction pour afficher une alerte d'erreur
function showError(message) {
  errorMessage.textContent = message;
  errorMessage.style.display = 'block';
}

// Fonction pour ajouter une tâche à la liste
function addTask() {
  const task = taskInput.value.trim();
  if (task.length < 3) {
    showError('La tâche doit contenir au moins 3 lettres.');
    return;
  }

  const li = document.createElement('li');
  li.textContent = task;
  taskList.appendChild(li);

  taskInput.value = '';
  taskCount++;

  if (taskCount >= maxTasks) {
    addBtn.style.display = 'none';
    const resetBtn = document.createElement('button');
    resetBtn.textContent = 'Réinitialiser';
    resetBtn.addEventListener('click', resetApp);
    addBtn.parentNode.replaceChild(resetBtn, addBtn);
  }
}

// Fonction pour réinitialiser l'application
function resetApp() {
  taskCount = 0;
  maxTasks = 0;
  taskInput.value = '';
  addBtn.style.display = 'none';
  errorMessage.style.display = 'none';
  taskList.innerHTML = '';
  maxTasksInput.disabled = false;
  maxTasksInput.value = '';
  maxTasksInput.focus();
}

// Événement lorsqu'une valeur est saisie dans le champ du nombre maximal de tâches
maxTasksInput.addEventListener('input', function() {
  const value = parseInt(this.value);
  if (isNaN(value) || value < 1) {
    showError('Veuillez saisir un nombre valide supérieur à 0.');
    addBtn.style.display = 'none';
    maxTasks = 0;
  } else {
    errorMessage.style.display = 'none';
    addBtn.style.display = 'block';
    maxTasks = value;
    maxTasksInput.disabled = true;
  }
});

// Événement lorsqu'une valeur est saisie dans le champ de la tâche
taskInput.addEventListener('input', function() {
  const task = this.value.trim();
  if (task.length < 1) {
    addBtn.style.display = 'none';
  } else {
    addBtn.style.display = 'block';
  }
});

// Événement lorsqu'on clique sur le bouton Ajouter
addBtn.addEventListener('click', addTask);