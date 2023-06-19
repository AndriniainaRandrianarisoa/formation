<!-- Basé sur le formulaire html suivant : 

Si les données soumisent au formulaire passe toutes les vérifications. Indiquer un message de succès et vider le formulaire des données initiallement saisie par l’utilisateur -->



<?php
$errors = [];
if (!empty($_POST)) {
    $fullname = trim($_POST['fullname']);
    $email = trim($_POST['email']);
    $phone = trim($_POST['phone']);
    $password = trim($_POST['password']);
    $course_type = $_POST['course-type'];
}
?>

<!DOCTYPE html>
<html>

<head>
    <title>Educational registration form</title>
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
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
        <form action="/" method="post">
            <div class="title">
                <i class="fas fa-pencil-alt"></i>
                <h2>Register here</h2>
            </div>
            <div class="info">
                <input class="fname" type="text" name="fullname" placeholder="Full name" value="<?php if (!empty($_POST)) : echo $fullname;
                                                                                                endif; ?>">
                <input type="text" name="email" placeholder="Email" value="<?php if (!empty($_POST)) : echo $email;
                                                                            endif; ?>">
                <?php
                if (isset($_POST['email']) && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
                    echo "<p style='color:red'>L'adresse email n'est pas valide.</p>";
                    array_push($errors, 'email');
                } ?>
                <input type="text" name="phone" placeholder="Phone number" value="<?php if (!empty($_POST)) : echo $phone;
                                                                                    endif; ?>">
                <?php
                if (isset($_POST['phone']) && strlen($phone) != 10) {
                    echo "<p style='color:red'>Le numéro de téléphone doit comporter 10 chiffres</p>";
                    array_push($errors, 'phone');
                } ?>
                <input type="password" name="password" placeholder="Password" value="<?php if (!empty($_POST)) : echo $password;
                                                                                        endif; ?>">
                <?php
                if (isset($_POST['password']) && !preg_match('/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/', $password)) {
                    echo "<p style='color:red'>Le mot de passe doit contenir au moins une lettre et un chiffre et avoir une longueur minimale de 6 caractères</p>";
                    array_push($errors, 'password');
                } ?>

                <select name="course-type" value="<?php if (!empty($_POST)) : echo $course_type;
                                                    endif; ?>">
                    <option value="course-type" selected>Course type*</option>
                    <option value="short-courses">Short courses</option>
                    <option value="featured-courses">Featured courses</option>
                    <option value="undergraduate">Undergraduate</option>
                    <option value="diploma">Diploma</option>
                    <option value="certificate">Certificate</option>
                    <option value="masters-degree">Masters degree</option>
                    <option value="postgraduate">Postgraduate</option>
                </select>
                <?php
                if (isset($_POST['course-type']) && $_POST['course-type'] == "course-type") {
                    echo "<p style='color:red'>Vous devez sélectionner un type de cours</p>";
                    array_push($errors, 'course-type');
                }
                if (isset($_POST['course-type']) && $_POST['course-type'] == "short-courses") {
                    echo "<p style='color:red'>Ce cours n'est plus disponible</p>";
                    array_push($errors, 'course-type');
                }
                ?>
            </div>
            <div class="checkbox">
                <input type="checkbox" name="checkbox"><span>I agree to the <a href="https://www.w3docs.com/privacy-policy">Privacy Poalicy for W3Docs.</a></span>
                <?php if (!empty($_POST) && !isset($_POST['checkbox'])) {
                    echo "<p style='color:red'>Vous devez accépter en cochant la case</p>";
                    array_push($errors, 'checkbox');
                } ?>
            </div>
            <button type="submit" href="/">Submit</button>
            <?php
            if (isset($_POST['fullname']) && isset($_POST['email']) && isset($_POST['phone']) && isset($_POST['password']) && isset($_POST['course-type']) && empty($errors)) {
                $fullname = '';
                $email = '';
                $phone = '';
                $password = '';
                $course_type = "course-type";
                echo "<p style='color:green'>Formulaire soumis avec succès!</p>";
            }
            ?>
        </form>
    </div>
</body>

</html>