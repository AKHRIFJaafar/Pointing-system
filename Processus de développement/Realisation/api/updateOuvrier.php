<?php
require_once (__DIR__.'/../manager/OuvriersManager.php');

$ouvrier = new Ouvrier;
$ouvrier->setIdOuvrier($_POST["idOuvrier"]);
$ouvrier->setNomOuvrier($_POST["nomOuvrier"]);
$ouvrier->setNumCIN($_POST["numCIN"]);
$ouvrier->setPrixHeure($_POST["prixHeure"]);
$ouvrier->setCategorie($_POST["categorie"]);
$ouvrier->setTelephone($_POST["telephone"]);
$ouvrier->setNomChantier($_POST["nomChantier"]);

$updateOuvriersManager = null;
$updateOuvrierManager =  new OuvriersManager(); 
$updateOuvrierQuery = $updateOuvrierManager->update($ouvrier);
?>