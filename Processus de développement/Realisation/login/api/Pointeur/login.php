<?php
// include database and object files
require_once (__DIR__.'/../config/database.php');
require_once (__DIR__.'/../objects/Pointeur.php');

 
// get database connection
$database = new Database();
$db = $database->getConnection();
 
// prepare user object
$pointeur = new Pointeur($db);
// set ID property of pointeur to be edited
$pointeur->email = isset($_GET['email']) ? $_GET['email'] : die();
$pointeur->password = base64_encode(isset($_GET['password']) ? $_GET['password'] : die());
// read the details of pointeur to be edited
$stmt = $pointeur->login();
if($stmt->rowCount() > 0){
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);
   
    header('location:../../../index.html');
  
}
else{

    header('location:../../../index.html');
 
}
// make it json format
print_r(json_encode($pointeur_arr));
?>