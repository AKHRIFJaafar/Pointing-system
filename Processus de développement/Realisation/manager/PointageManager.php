<?php
require_once(__DIR__.'/../model/Pointage.php');

class PointageManager {

	//get pointage 
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
		$stack = array();
		$req = "SELECT * FROM pointage RIGHT JOIN ouvriers ON pointage.idOuvrier = ouvriers.idOuvrier ORDER BY pointage.heurePointage DESC ";

		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Pointage();
			$item->setIdPointage($row["idPointage"]);
			$item->setIdOuvrier($row["idOuvrier"]);
			$item->setIdPointeur($row["idPointeur"]);
			$item->setHeurePointage($row["heurePointage"]);
			$item->setNombreHeure($row["nombreHeure"]);
			$item->setPresence($row["presence"]);
			$item->setNomOuvrier($row["nomOuvrier"]);
			$item->setTelephone($row["telephone"]);

			array_push($stack, $item);
		}
		return $stack;
	}
	// update Pointage		
	public function update($pointage){
	
		$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");

		$id = $pointage->getIdPointage();

		if ($id) {
			if ($pointage->getPresence() ) {
				$req = "UPDATE pointage SET nombreHeure = :nombreHeure, heurePointage = sysdate(), presence = :presence WHERE idPointage = $id";
				$updatePointageQuery = $dbh ->prepare($req);
				$updatePointageQuery -> bindParam(":nombreHeure",$pointage->getNombreHeure(),PDO::PARAM_STR);
				$updatePointageQuery -> bindParam(":presence",$pointage->getPresence(),PDO::PARAM_STR);
			}else {
				$req = "UPDATE pointage SET nombreHeure = 0, presence = 0 WHERE idPointage = $id";
				$updatePointageQuery = $dbh ->prepare($req);
			}
			$updatePointageQuery->execute();
		} else {
			$req = "INSERT INTO pointage (idOuvrier, nombreHeure, heurePointage, presence) VALUES (:idOuvrier, :nombreHeure, sysdate(), :presence)";
			$updatePointageQuery = $dbh ->prepare($req);
			$updatePointageQuery -> bindParam(":idOuvrier",$pointage->getIdOuvrier(), PDO::PARAM_STR);
			$updatePointageQuery -> bindParam(":nombreHeure",$pointage->getNombreHeure(),PDO::PARAM_STR);
			$updatePointageQuery -> bindParam(":presence",$pointage->getPresence(),PDO::PARAM_STR);
			$updatePointageQuery->execute();		
		}
	}
		
}
?>