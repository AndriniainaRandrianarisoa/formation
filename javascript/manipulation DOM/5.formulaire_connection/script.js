// dans mon html mon cache mon mesage d'alert avec mon css en lui donnant un display none, cree une class ou le message apparait

// jre recupere le formnulaire parce que l'action submit est sur le formulaire
const myForm = document.querySelector('form') 
// je recupere chaque champs de mon formaulaire
const username = document.querySelector('#username');
const password = document.querySelector('#password');


let myInformation = {
  id : "user", 
  mdp: "pass"
}

// let id = "user"
// let pass = 'pass'

// j'ai mis un ecouteru d'ebenement sur mon formulaire 
myForm.addEventListener('submit', function(event) {
  event.preventDefault()
  // je test si j'arrive bien a entrer dans ma fonction et que mon evenenement fonctionne
  // je teste que je recupere bien mes info dans le formulaire 

  if((myInformation.id != username.value && myInformation.mdp != password.value) || (myInformation.id != username.value || myInformation.mdp != password.value)) {
    //je vide les valeurs dans le champs 
    username.value = ''
    password.value = ''

    // j'affiche mon message d'alerte en changant la classe de mon message en supprimant le display none
    
  }
})

