<?php
require_once(__DIR__.'/../model/Salaire.php');

class SalairesManager {

	//get salaires 
	public function getSalaires(){
		$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
		$stack = array();
		$req = "SELECT *, (SELECT COUNT(*) FROM pointage p WHERE p.idOuvrier=o.idOuvrier) as nombreJour, (SELECT sum(p.nombreHeure) FROM pointage p WHERE p.idOuvrier=o.idOuvrier) as totalHeure FROM ouvriers o";

		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Salaire();
			$item->setIdPointage($row["idPointage"]);
			$item->setIdOuvrier($row["idOuvrier"]);
			$item->setIdPointeur($row["idPointeur"]);
			$item->setHeurePointage($row["heurePointage"]);
			$item->setNombreHeure($row["nombreHeure"]);
			$item->setPrixHeure($row["prixHeure"]);
			$item->setCategorie($row["categorie"]);
			$item->setPresence($row["presence"]);
			$item->setNomOuvrier($row["nomOuvrier"]);
			$item->setTelephone($row["telephone"]);
			$item->setNombreJour($row["nombreJour"]);
			$item->setTotalHeure($row["totalHeure"]);
			

			array_push($stack, $item);
		}
		return $stack;
	}
}
?>