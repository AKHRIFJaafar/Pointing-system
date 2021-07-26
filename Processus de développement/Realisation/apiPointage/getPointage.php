<?php
require_once (__DIR__.'/../manager/PointageManager.php');

        $PointageManager = null;
        $getPointageManager = new PointageManager();    
        $getPointage = $getPointageManager->getList();
        print_r(json_encode($getPointage));
?>