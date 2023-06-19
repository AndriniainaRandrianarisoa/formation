<!-- AJOUT DU PHP -->

<?php 
//Vérifier que le checkbox des privacy Policy est bien selectionné. 
//Si non, indiquer à l'utilisateur via un message qu’il doit selectionner 
//l’élement pour que le formulaire soit traité.
$validation = null;
if(!isset($_POST['checkbox'])) {
    $validation = "Veuillez accepter les CGU";
}
//Faire en sorte qu’en cas d’erreur, les champs renseignés continennent 
//toujours la valeur mise par l’utilisateur.
if (!empty($_POST)) {
  $fullname = $_POST['fullname'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
}
//Vérifier que le phone comporte bien 10 caractères pas plus / pas moins. 
$phonelen = strlen ($_POST['phone']);
if ($phonelen !== 10) {
  echo '<script>alert("Numéro de téléphone invalide")</script>';
}
//Vérifier qu’un course type a été séléctionné
$list = $_POST['liste'];
if ($list == "course-type") {
    echo('<script>alert("Cours invalide")</script>');
}

//Si le course Type renseigné est : short Course, indiquer 
//à l’utilisateur qu’il n’y en a plus de disponible
if ($list == "short-courses") {
  echo('<script>alert("Cours complet, veuillez choisir un autre cours")</script>');
}
//Si les données soumisent au formulaire passe toutes les vérifications. 
//Indiquer un message de succès et vider le formulaire des données initiallement 
//saisie par l’utilisateur
if ($phonelen == 10 && !empty($_POST) && $list !== "short-courses" && $list == "course-type" && isset($_POST['checkbox'])){
  echo('<script>alert("Inscription prise en compte !")</script>');
  $fullname="Full name";
  $email="Email";
  $phone="Phone number";
  $password="Password";
}

//Vérifier que le password est égal ou supérieur à 6 caractères. 
$passwordlen = strlen ($_POST['password']);
if ($passwordlen < 6) {
  echo('<script>alert("Mot de passe trop court ! Minimum : 6 caractères")</script>');
}
?>