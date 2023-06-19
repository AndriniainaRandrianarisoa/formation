<!-- ECHEC ...
Vérifier que le checkbox des privacy Poalicy est bien selectionné. Si non, indiquer à l’utilisateur via un message 
qu’il doit selectionner l’élement pour que le formulaire soit traité. 
  ligne 91 à 95

Faire en sorte qu’en cas d’erreur, les champs renseignés contiennent toujours la valeur mise par l’utilisateur.
  OK

Vérifier que le phone comporte bien 10 caractères pas plus / pas moins. 
  Pas eu le temps, tentative avec un max length, qui n'a rien donné

Vérifier qu’un course type a été séléctionné
  Même problème qu'avec la checkbox, tentative en ligne 82

Si le course Type renseigné est : short Course, indiquer à l’utilisateur qu’il n’y en a plus de disponible 
  Tentative en ligne 84

Si les données soumisent au formulaire passe toutes les vérifications. Indiquer un message de succès et vider le formulaire des données initiallement saisie par l’utilisateur
  Pas eu le temps

-->
<?php

$name = $email = $phone = $password = null;

if (!empty($_POST)) {
  $name = $_POST['name'];
  $email = $_POST['email'];
  $phone = $_POST['phone'];
  $password = $_POST['password'];

  echo '<pre>';
    var_dump($_POST);
    echo '</pre>';
}





?>
<!DOCTYPE html>
<html>
  <head>
    <title>Educational registration form</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link href="./style.css" rel ="stylesheet">
  </head>

  <body>
    <div class="main-block">
      <div class="left-part">
        <i class="fas fa-graduation-cap"></i>
        <h1>Register to our courses</h1>
        <p>W3docs provides free learning materials for programming languages like HTML, CSS, Java Script, PHP etc.</p>
        <div class="btn-group">
          <a class="btn-item" href="https://www.w3docs.com/learn-html.html">Learn HTML</a>
          <a class="btn-item" href="https://www.w3docs.com/quiz/#">Select Quiz</a>
        </div>
      </div>
      <form method="post">
        <div class="title">
          <i class="fas fa-pencil-alt"></i> 
          <h2>Register here</h2>
        </div>
        <div class="info">
          <input class="fname" type="text" name="name" placeholder="Full name" value="<?php echo !empty($_POST) ? $name: '' ; ?>">
          <input type="email" name="email" placeholder="Email" value="<?php echo !empty($_POST) ? $email: '' ; ?>">
          <input type="number" name="phone" placeholder="Phone number" value="<?php echo !empty($_POST) ? $phone: '' ; ?>">
          <input type="password" name="password" placeholder="Password" value="<?php echo !empty($_POST) ? $password: '' ; ?>">
          <select name ="select">
            <option value="course-type" selected>Course type*</option>
            <option value="short-courses">Short courses</option>
            <option value="featured-courses">Featured courses</option>
            <option value="undergraduate">Undergraduate</option>
            <option value="diploma">Diploma</option>
            <option value="certificate">Certificate</option>
            <option value="masters-degree">Masters degree</option>
            <option value="postgraduate">Postgraduate</option>
            <?php
              if ($_POST['select'] === "Course type") {
            echo ('<p class="notChecked"> "Veuillez sélectionner une option" <p>');}
              if ($_POST['select'] === "short Course"){
                echo ('<p class="notChecked"> "Plus dispo" <p>');}
            ?>
          </select>
        </div>
        <div class="checkbox">
          <input type="checkbox" name="checkbox"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">Privacy Poalicy for W3Docs.</a></span>
            <script> if (!document.getElementsByName("checkbox").checked)
              <?php
                  echo('<p class="notChecked"> Please accept our Privacy Policy </p>');
              ?>
          </script>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  </body>
</html>