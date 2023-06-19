const button = document.getElementById('button');
button.addEventListener('click', updateButton);

const myText = document.getElementById('mytext');




function updateButton() { 
  if(button.value === 'Start machine') {
    button.value = 'Stop machine'
    myText.textContent = 'The machine has started!'

    const newParagraph = document.createElement("div")
    newParagraph.textContent = "Ceci est mon nouveau paragraph"
    
    const parentElement = document.getElementById('parent')
    parentElement.appendChild(newParagraph)
  } else {
    button.value = 'Start machine'
    myText.textContent = 'The machine is stopped !'
  }

}

