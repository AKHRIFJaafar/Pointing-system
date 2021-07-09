<?php
require_once '../manager/productsManager.php';


$deleteproductsManager = null;
$deleteProductManager =  new productsManager(); 
$deleteProductQuery = $deleteProductManager->delete($_POST["id"]);
?>