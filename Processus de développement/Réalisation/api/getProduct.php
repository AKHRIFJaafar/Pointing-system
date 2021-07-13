<?php
require_once(__DIR__.'/../manager/productsManager.php');

        $productsManager = null;
        $getProductsManager = new productsManager();    
        $getproducts = $getProductsManager->getList();
        print_r(json_encode($getproducts));
?>