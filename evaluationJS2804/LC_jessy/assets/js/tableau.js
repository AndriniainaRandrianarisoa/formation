const words = [
    ["tue", "lit", "mur", "nez", "pie"],
    ["ride", "bras", "mure", "nids"],
    ["chien", "fleur", "pomme", "sable", "table"],
    ["banane", "cheval", "maison", "soleil", "tomate"],
    ["abricot", "cerise", "ordinateur", "papillon", "requin"]
];

let answer = prompt('Veuillez saisir un chiffre entre 2 et 5'); 
console.log(answer);
        while (answer < '2' || answer > '5') {
            prompt('Veuillez saisir un chiffre entre 2 et 5');
            break;
        } 
    