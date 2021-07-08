<?php
require_once '../manager/productsManager.php';

        $productsManager = null;
        $productsManager = new productsManager();    
        $products = $productsManager->getList();
        print_r(json_encode($products));
?>
  