<?php
function d($data)
{
    echo '<pre>';
    var_dump($data);
    echo '</pre>';
}

$tick = null;

if (!isset($_POST['checkbox'])) {
    $tick = 'Veuillez accepter les CGU';
}

if (!empty($_POST)) {
    $fullname = $_POST['fullname'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $password = $_POST['password'];
}

$phoneLength = strlen($phone);
if ($phoneLength !== 10) {
    echo ('<script>alert("Numéro de téléphone invalide")</script>');
}

$selector = $_POST['selector'];
if ($selector == "course-type") {
    echo ('<script>alert("Veuillez sélectionner un cours")</script>');
} else if ($selector == "short-courses") {
    echo ('<script>alert("Indisponible, plus de place, veuillez choisir un autre cours")</script>');
}

// Si les données soumisent au formulaire passe toutes les vérifications. Indiquer un message de succès 
// et vider le formulaire des données initiallement saisie par l’utilisateur

// if (!empty($_POST) && $phoneLength == 10 && isset($_POST['checkbox']) && $selector !== "course-type" && $selector !== "short-courses") {
//     echo ('<script>alert("Formulaire envoyé avec succès")</script>');
//     $fullname = 'Fullname';
//     $email = 'Email';
//     $phone = 'Phone number';
//     $password = 'Password';
// }


// $passwordLength = strlen($password);
// if ($passwordLength < 6) {
//     echo ('<script>alert("Numéro de téléphone invalide")</script>');
// }