<?php
require_once (__DIR__.'/../manager/productsManager.php');

$deleteProductsManager = null;
$deleteProductManager =  new productsManager(); 
$deleteProductQuery = $deleteProductManager->delete($_POST["id"]);
?>