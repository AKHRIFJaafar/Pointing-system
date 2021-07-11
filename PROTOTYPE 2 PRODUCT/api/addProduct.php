<?php
require_once '../js/productsManager.php';

$product = new Product();
$product->setFirst($_POST["productname"]);
$product->setLast($_POST["productcolor"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>