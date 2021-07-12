<?php
require_once '../manager/productsManager.php';

        $getProductsManager = null;
        $getProductsManager = new productsManager();    
        $getProducts = $getProductsManager->getList();
        print_r(json_encode($getProducts));
?>