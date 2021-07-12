<?php
require_once '../manager/productsManager.php';

$product = new Product;
$product->setId($_POST["id"]);
$product->setName($_POST["productname"]);
$product->setColor($_POST["productcolor"]);

$updateProductsManager = null;
$updateProductManager =  new productsManager(); 
$updateProductQuery = $updateProductManager->update($product);
?>