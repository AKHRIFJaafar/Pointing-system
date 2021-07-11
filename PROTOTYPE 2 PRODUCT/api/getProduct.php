<?php
require_once '../js/productsManager.php';

        $getProductsManager = null;
        $getProductsManager = new productsManager();    
        $getProducts = $getProductsManager->getList();
        print_r(json_encode($getProducts));
?>