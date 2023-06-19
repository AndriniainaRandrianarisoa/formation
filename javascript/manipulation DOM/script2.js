const button = document.getElementById('button');
const paragraph = document.getElementById('mytext');
button.addEventListener('click', updateButton);

const newP = document.createElement()


function updateButton() {
  if (button.value === 'Start machine') {
    button.value = 'Stop machine';
    paragraph.textContent = 'The machine has started!';
  } else {
    button.value = 'Start machine';
    paragraph.textContent = 'The machine is stopped.';
  }
}


function insert() {
  const newP = document.createElement('p')
  let newText = document.createTextNode('coucoucou')
  // Ajoute le parpagraphe comme premier enfant de newP
  newP.prepend(newtext)
  // Ajoute le parpagraphe comme dernier enfant de newP
  newP.append(newtext)

}