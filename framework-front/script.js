// C'EST ICI que vous mettez l'initialisation
const map = createMap('#monConteneur');


// Votre code qui utilise le framework
const fruits = ['banane', 'B', 'C'];


// Votre code qui utilise le framework
fruits.map(données, (item) => {
  return map.createElement('div', {}, item);
});