// modification html element
// importer ton element html dans ton script
const title = document.querySelector("#myHeading");
const buttonTitle = document.querySelector("#buttonTitle");
console.log("🚀 ~ file: script.js:5 ~ buttonTitle:", buttonTitle);
// implementer une action sur mon element html
buttonTitle.addEventListener("click", changeTitle);
let click = 0;


 
function changeTitle() {
  if (click == 0) {
    click = click + 1;
    title.innerHTML = "coucou";
  } else if (click == 1) {
    click = click + 1;
    title.innerHTML = "on est au tour 1";
  } else if (click == 2) {
    click = click + 1;
    title.innerHTML = "on est au tour 2";
  } else {
    click = click + 1;
    title.innerHTML = "on est au tour 3";
  }
}



// // modification html elemenrt
// const buttonTitle = document.getElementById("buttonTitle")
// buttonTitle.addEventListener('click',changeTitle)
// const title = document.getElementById("myHeading")

// function changeTitle() {
//   title.innerHTML  = "coucou"
// }

// // modification attribut
// const buttonImg = document.getElementById("buttonImg")
// buttonImg.addEventListener('click',changeImg)
// const image = document.getElementById("myImage")

// function changeImg() {
//   //image.src = "https://www.espritdog.com/wp-content/uploads/2021/08/bouledogue-francais-header-fiche-de-race.png"
//   image.setAttribute('src','https://www.espritdog.com/wp-content/uploads/2021/08/bouledogue-francais-header-fiche-de-race.png' )
// }

// // modification attribut
// const circle = document.getElementById("circle")
// circle.addEventListener('click', changeStyle)

// function changeStyle() {
//   circle.style.backgroundColor = "red"
//   circle.style.borderColor = "black"
// }
