
// modification html elemenrt 
const buttonTitle = document.getElementById("buttonTitle")
buttonTitle.addEventListener('click',changeTitle)
const title = document.getElementById("myHeading")

function changeTitle() {
  title.innerHTML  = "coucou"
}
  
// modification attribut
const buttonImg = document.getElementById("buttonImg")
buttonImg.addEventListener('click',changeImg)
const image = document.getElementById("myImage")

function changeImg() {
  //image.src = "https://www.espritdog.com/wp-content/uploads/2021/08/bouledogue-francais-header-fiche-de-race.png"
  image.setAttribute('src','https://www.espritdog.com/wp-content/uploads/2021/08/bouledogue-francais-header-fiche-de-race.png' )
}



// modification attribut
const circle = document.getElementById("circle")
circle.addEventListener('click', changeStyle)

function changeStyle() {
  circle.style.backgroundColor = "red"
  circle.style.borderColor = "black"
}