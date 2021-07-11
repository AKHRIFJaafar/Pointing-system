<?php
require_once '../js/productsManager.php';

        $productsManager = null;
        $getProductsManager = new productsManager();    
        $getproducts = $getProductsManager->getList();
        print_r(json_encode($getproducts));
?>