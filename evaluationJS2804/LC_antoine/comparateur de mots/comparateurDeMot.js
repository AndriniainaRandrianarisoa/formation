const words = [ 
  ["tue", "lit", "mur", "nez", "pie"],
  ["ride", "bras", "mure", "nids"],
  ["chien", "fleur", "pomme", "sable", "table"], 
  ["banane", "cheval", "maison", "soleil", "tomate"],
  ["abricot", "cerise", "ordinateur", "papillon", "requin"]
];

let wordLength;

function askAwordLength(){
  while(wordLength == undefined || !parseInt(wordLength) == NaN || wordLength<3 ||wordLength>7){
    wordLength = prompt("Saisissez un nombre de lettres entre 3 et 7");
    if (!parseInt(wordLength) == NaN) alert("Saisissez un nombre entre 3 et 7");
    if(wordLength > 7 || wordLength<3) alert("Plus grand que 3, plus petit que 7");
  }
  return wordLength;
}

wordLength = askAwordLength();

function getWordsByLength(words, wordLength) {
  const filteredWords = [];
  for (let i = 0; i < words.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      console.log(words[i][j]);
      if (words[i][j].length === parseInt(wordLength)) {
        filteredWords.push(words[i][j]);
        console.log(filteredWords);
      }
    }
  }
  console.log(filteredWords);
  return filteredWords;

}

filteredWords = getWordsByLength(words, wordLength);

function choosAwordIn(filteredWords){
  let choosenWord;
  while(!filteredWords.includes(choosenWord)){
    if(choosenWord !== "") {
      choosenWord = prompt(`Choisissez un mot parmis ${filteredWords.join(", ")}`);
    }
    else{
      choosenWord = prompt(`Le mot doit être choisi parmis ${filteredWords.join(", ")}`);
    }
  }
  return document.getElementById("message").innerHTML = `Félicitation, le mot choisi est : ${choosenWord}`;
}

choosAwordIn(filteredWords);