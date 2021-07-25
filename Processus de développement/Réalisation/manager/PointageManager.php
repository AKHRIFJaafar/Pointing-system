<?php
require_once(__DIR__.'/../model/Pointage.php');

class PointageManager {

	//get pointage 
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=systeme-pointage","root","12345");
		$stack = array();
		$req = "SELECT * FROM pointage RIGHT JOIN ouvriers ON pointage.idOuvrier = ouvriers.idOuvrier ORDER BY pointage.idPointage";


		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Pointage();
			$today = date("Y-m-d");
			$lastDay = date("Y-m-d", strtotime($row["heurePointage"]));
			if ($today > $lastDay) { $id="";  }
			else { $id = $row["idPointage"]; }
			$item->setIdPointage($id);
			$item->setIdOuvrier($row["idOuvrier"]);
			$item->setIdPointeur($row["idPointeur"]);
			$item->setHeurePointage(($today > $lastDay) ? "": $row["heurePointage"]);
			$item->setNombreHeure(($today > $lastDay) ? 0: $row["nombreHeure"]);
			$item->setPresence(($today > $lastDay) ? 0: $row["presence"]);
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
			printf($id);
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
			$updatePointageQuery->execute();		}
	}
		
}
?>