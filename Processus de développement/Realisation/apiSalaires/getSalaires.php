<?php
require_once (__DIR__.'/../manager/SalairesManager.php');

        $SalairesManager = null;
        $getSalairesManager = new SalairesManager();    
        $getSalaires = $getSalairesManager->getSalaires();
        print_r(json_encode($getSalaires));
?>