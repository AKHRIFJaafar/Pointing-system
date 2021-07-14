<?php
require_once (__DIR__.'/../manager/OuvriersManager.php');

$ouvrier = new Ouvrier();
$ouvrier->setNomOuvrier($_POST["nomOuvrier"]);
$ouvrier->setNumCIN($_POST["numCIN"]);
$ouvrier->setPrixHeure($_POST["prixHeure"]);
$ouvrier->setCategorie($_POST["categorie"]);
$ouvrier->setTelephone($_POST["telephone"]);
$ouvrier->setNomChantier($_POST["nomChantier"]);

$addOuvrierManager = null;
$addOuvrierManager =  new OuvriersManager(); 
$addOuvrierQuery = $addOuvrierManager->add($ouvrier);

?>