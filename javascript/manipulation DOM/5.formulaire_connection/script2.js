// je recupere le formnulaire parce que l'action submit est sur le formulaire
const myForm = document.querySelector('form') 
// je recupere chaque champs de mon formaulaire
const username = document.querySelector('#username');
const password = document.querySelector('#password');
const title = document.querySelector('h1');
const chat = document.querySelector('.alertMessage');


let myInformation = {
  id : "user", 
  mdp: "pass"
}

myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Empêche le rechargement de la page

  console.log('Le formulaire a été soumis !', username.value,password.value);
  if(myInformation.id == username.value && myInformation.mdp == password.value) {
    alert('cest ok')

  } else {
    chat.classList.toggle('alertMessageShow');
    
  }
});


title.addEventListener('click', (event) => {
  title.innerHTML = "prout"
});




