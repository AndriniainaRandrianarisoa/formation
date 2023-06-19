function changeText() {
  alert("cououcouou")

}

function changeColor() {
  console.log("coucou style")
 const test =  document.getElementsByClassName("circle")
 console.log("🚀 ~ file: script.js:9 ~ changeColor ~ test:", test)

}

function changeImage() {
  console.log("coucou image")
  document.getElementById('myImage').src = "https://www.espritdog.com/wp-content/uploads/2021/08/bouledogue-francais-header-fiche-de-race.png";
}

function changeImage2() {
  console.log("coucou image2")
  const myImage = document.getElementById('myImage');
  const myNewImage = "https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwjOkti0sJL-AhXqTaQEHTqsC_wQ1bUFegQIEhAA&url=https%3A%2F%2Ffr.123rf.com%2Fimages-libres-de-droits%2Fchien_fou.html&usg=AOvVaw3IyPSzcK43AJ1IPBPBlfXy";
  myImage.setAttribute('src',myNewImage )
}

let list = document.getElementById("myList") 
console.log("🚀 ~ file: script.js:26 ~ list:", list.lastChild)
let index = 1
function addItem(params) {
  
  console.log(params)
  // je cree une balise li 
  let li = document.createElement("li")
  // je cree un parametre text html 
  let text = document.createTextNode(params+index)
  // je cree un enfant de li qui sera text
  li.appendChild(text);
  if(params == 'bonjour') {
    index +=1
    list.appendChild(li)
   
  } else {
    console.log("prout")
  }

  //document.getElementById()
}

function removeItem() {
  // je cree une liste avec  liste myList
  //let list = document.getElementById("myList") 
  // retire le dernier element 
  list.removeChild(list.lastChild)
}
