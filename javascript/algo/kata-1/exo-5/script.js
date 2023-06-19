function isPalindrome(chaine) {
  // Convertir la chaîne en minuscules et enlever les espaces
  chaine = chaine.toLowerCase().replace(/\s/g, '');
  
  // Inverser la chaîne
  var chaineInverse = chaine.split('').reverse().join('');
  
  // Comparer la chaîne initiale avec la chaîne inversée
  if (chaine === chaineInverse) {
    return true;
  } else {
    return false;
  }
}