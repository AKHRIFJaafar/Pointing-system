<?php
 
 require_once (__DIR__.'/../config/database.php');
 require_once (__DIR__.'/../objects/Pointeur.php');
 
$database = new Database();
$db = $database->getConnection();
 
$pointeur = new Pointeur($db);
 
// set pointeur property values
$pointeur->email = $_POST['email'];
$pointeur->password = base64_encode($_POST['password']);
$pointeur->lastname = $_POST['lastname'];
$pointeur->created = date('Y-m-d H:i:s');
 
// create the pointeur
if($pointeur->signup()){
    header('location:../../login.html');
}
else{
    $pointeur_arr=array(
        "status" => false,
        "message" => "email already exists!"
    );
}
print_r(json_encode($pointeur_arr));
?>