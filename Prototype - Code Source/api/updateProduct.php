<?php
require_once '../manager/productsManager.php';

$product=null;
$deleteproductsManager = null;
$deleteProductManager =  new productsManager(); 
$deleteProductQuery = $deleteProductManager->update($_POST["id"], $product);
?>