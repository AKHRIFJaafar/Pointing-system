<?php
require_once(__DIR__.'/../model/Ouvrier.php');

class OuvriersManager {

	//get ouvriers 
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
		$stack = array();
		$req = "SELECT * FROM ouvriers";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Ouvrier();
			$item->setIdOuvrier($row["idOuvrier"]);
			$item->setNomOuvrier($row["nomOuvrier"]);
			$item->setNumCIN($row["numCIN"]);
			$item->setPrixHeure($row["prixHeure"]);
			$item->setCategorie($row["categorie"]);
			$item->setTelephone($row["telephone"]);
			$item->setNomChantier($row["nomChantier"]);

			array_push($stack, $item);
		}
		return $stack;

	}
//Add ouvrier
		public function add($ouvrier){
			$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
			$req = "INSERT INTO `ouvriers`(`idOuvrier`,`nomOuvrier`, `numCIN`,`prixHeure`,`categorie`,`telephone`,`nomChantier`) VALUES (:idOuvrier,:nomOuvrier,:numCIN,:prixHeure,:categorie,:telephone,:nomChantier)";

			$addOuvrierQuery = $dbh ->prepare($req);
			$addOuvrierQuery -> bindParam(":idOuvrier",$ouvrier->getIdOuvrier(),PDO::PARAM_STR);	
			$addOuvrierQuery -> bindParam(":nomOuvrier",$ouvrier->getNomOuvrier(),PDO::PARAM_STR);
            $addOuvrierQuery -> bindParam(":numCIN",$ouvrier->getNumCIN(),PDO::PARAM_STR);
            $addOuvrierQuery -> bindParam(":prixHeure",$ouvrier->getPrixHeure(),PDO::PARAM_STR);
            $addOuvrierQuery -> bindParam(":categorie",$ouvrier->getCategorie(),PDO::PARAM_STR);
			$addOuvrierQuery -> bindParam(":telephone",$ouvrier->getTelephone(),PDO::PARAM_STR);
			$addOuvrierQuery -> bindParam(":nomChantier",$ouvrier->getNomChantier(),PDO::PARAM_STR);

			$addOuvrierQuery->execute();
        }
		// delete ouvrier

		public function delete($id){
	
			$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
			$req = "DELETE FROM ouvriers WHERE idOuvrier = $id";
			$deleteOuvrier = $dbh->prepare($req);
            $deleteOuvrier->execute();
        }


		// update ouvrier		
		public function update($ouvrier){
			$id = $ouvrier->getIdOuvrier();
			$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
			$req = "UPDATE ouvriers SET nomOuvrier = :nomOuvrier,numCIN = :numCIN,prixHeure = :prixHeure,categorie = :categorie,telephone = :telephone,nomChantier = :nomChantier WHERE idOuvrier = $id";
			$updateOuvrierQuery = $dbh ->prepare($req);
			$updateOuvrierQuery -> bindParam(":nomOuvrier",$ouvrier->getNomOuvrier(),PDO::PARAM_STR);
            $updateOuvrierQuery -> bindParam(":numCIN",$ouvrier->getNumCIN(),PDO::PARAM_STR);
            $updateOuvrierQuery -> bindParam(":prixHeure",$ouvrier->getPrixHeure(),PDO::PARAM_STR);
            $updateOuvrierQuery -> bindParam(":categorie",$ouvrier->getCategorie(),PDO::PARAM_STR);
			$updateOuvrierQuery -> bindParam(":telephone",$ouvrier->getTelephone(),PDO::PARAM_STR);
            $updateOuvrierQuery -> bindParam(":nomChantier",$ouvrier->getNomChantier(),PDO::PARAM_STR);

			$updateOuvrierQuery->execute();
        }
}
?>