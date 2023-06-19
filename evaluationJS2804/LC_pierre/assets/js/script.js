/* Ouvre un modal pour demander de saisir un nombre
de lettre souhaitez entre 3 et 7*/
document.write("<h1>Comparateur de mot</h1>")
document.write("Ouvre un modal pour demander de saisir un nombre de lettre souhaitez entre 3 et 7")



let text

text = String(prompt('Saisir un texte entre 3 et 7 caractères : '));

if (text.length >= 3 && text.length <= 7) {
    console.log(text)
    document.write("<br>VRAI "+text+" est bien un texte comprenant entre 3 et 7 caractères")
    alert('Bravo le texte est bien compris entre 3 et 7 caractères');
}
else{
    document.write("<br>FAUX "+text+" n'est pas un texte comprenant entre 3 et 7 caractères")
    prompt('Saisir à nouveau un texte, car le précédent n\'est pas compris entre 3 et 7 caractères')
}


