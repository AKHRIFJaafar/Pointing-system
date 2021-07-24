<?php
require_once (__DIR__.'/../manager/PointageManager.php');

$pointage = new Pointage;
$pointage->setIDPointage($_POST["idPointage"]);
$pointage->setPresence($_POST["presence"]);
$pointage->setHeurePointage($_POST["heurePointage"]);
$pointage->setNombreHeure($_POST["nombreHeure"]);

$updatePointagesManager = null;
$updatePointageManager =  new PointageManager(); 
$updatePointageQuery = $updatePointageManager->update($pointage);
?>