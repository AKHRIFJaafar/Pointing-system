<?php
require_once '../js/productsManager.php';


$deleteProductsManager = null;
$deleteProductManager =  new productsManager(); 
$deleteProductQuery = $deleteProductManager->delete($_POST["id"]);
?>