<?php
require_once (__DIR__.'/../manager/PointageManager.php');

$pointage = new Pointage;
$pointage->setPresence($_POST["presence"]);
$pointage->setHeurePointage($_POST["heurePointage"]);



$updatePointagesManager = null;
$updatePointageManager =  new PointageManager(); 
$updatePointageQuery = $updatePointageManager->update($pointage);
?>