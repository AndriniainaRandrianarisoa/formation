// Sélection des éléments du DOM
const form = document.getElementById('userForm');
const userList = document.getElementById('userList');


form.addEventListener('submit', function(event) {
  event.preventDefault(); // Empêche le rechargement de la page

  // Récupération des valeurs des champs du formulaire
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const email = document.getElementById('email').value;

  // Appel d'une fonction pour ajouter un utilisateur
  addUser(firstName, lastName, email);

  // Réinitialisation du formulaire
  form.reset();
    // Appel de la fonction pour ajouter le gestionnaire d'événements de suppression d'utilisateur
  addDeleteButtonEvent();
});


function addUser(firstName, lastName, email) {
  // Création d'un nouvel élément <div> pour afficher les informations de l'utilisateur
  const userDiv = document.createElement('div');
  userDiv.innerHTML = `
    <p>Nom : ${lastName}</p>
    <p>Prénom : ${firstName}</p>
    <p>Adresse e-mail : ${email}</p>
    <button class="deleteButton">Supprimer</button>
  `;

  // Ajout d'une classe au nouvel élément pour le styliser avec CSS
  userDiv.classList.add('user');

  // Ajout de l'élément <div> à la liste des utilisateurs
  userList.appendChild(userDiv);
}


// Fonction pour ajouter le gestionnaire d'événements de suppression d'utilisateur
function addDeleteButtonEvent() {
  // Sélection de tous les boutons de suppression d'utilisateur
  const deleteButtons = document.getElementsByClassName('deleteButton');

  // Boucle à travers tous les boutons pour ajouter un gestionnaire d'événements
  for (let i = 0; i < deleteButtons.length; i++) {
    const deleteButton = deleteButtons[i];
    deleteButton.addEventListener('click', function() {
      // Suppression de l'élément parent (l'élément <div> contenant les informations de l'utilisateur)
      const userDiv = deleteButton.parentNode;
      userDiv.remove();
    });
  }
}


