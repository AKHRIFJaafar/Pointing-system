<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setFirst($_POST["Firstname"]);
$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>