<?php
require_once '../js/productsManager.php';

$product = new Product;
$product->setId($_POST["id"]);
$product->setFirst($_POST["productname"]);
$product->setLast($_POST["productcolor"]);

$updateProductsManager = null;
$updateProductManager =  new productsManager(); 
$updateProductQuery = $updateProductManager->update($product);
?>