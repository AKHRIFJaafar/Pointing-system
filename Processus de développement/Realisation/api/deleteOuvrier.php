<?php
require_once (__DIR__.'/../manager/OuvriersManager.php');


$deleteOuvriersManager = null;
$deleteOuvrierManager =  new OuvriersManager(); 
$deleteOuvrierQuery = $deleteOuvrierManager->delete($_POST["idOuvrier"]);
?>