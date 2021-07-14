<?php
require_once (__DIR__.'/../manager/OuvriersManager.php');

        $OuvriersManager = null;
        $getOuvriersManager = new OuvriersManager();    
        $getOuvriers = $getOuvriersManager->getList();
        print_r(json_encode($getOuvriers));
?>