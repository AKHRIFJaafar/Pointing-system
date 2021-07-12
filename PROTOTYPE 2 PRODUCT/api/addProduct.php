<?php
require_once '../manager/productsManager.php';

$product = new Product();
$product->setName($_POST["productname"]);
$product->setColor($_POST["productcolor"]);

$addProductManager = null;
$addProductManager =  new productsManager(); 
$addProductQuery = $addProductManager->add($product);

?>