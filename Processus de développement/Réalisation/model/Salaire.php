<?php

class Salaire implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			'idPointage' => $this->_idPointage,
			'idOuvrier' => $this->_idOuvrier,
			 'idPointeur' => $this->_idPointeur,
             'heurePointage' => $this->_heurePointage,
             'nombreHeure' => $this->_nombreHeure,
			 'presence' => $this->_presence,
			 'nomOuvrier' => $this->_nomOuvrier,
			 'telephone' => $this->_telephone,
			 'nombreJour' => $this->_nombreJour,
			 'totalHeure' => $this->_totalHeure,
			 'prixHeure' => $this->_prixHeure,
			 'categorie' => $this->_categorie,


        );
    }
	private $_idPointage;
	private $_idOuvrier;
	private $_idPointeur;
	private $_heurePointage;
	private $_nombreHeure;
	private $_presence;
	private $_nomOuvrier;
	private $_telephone;
	private $_nombreJour;
	private $_totalHeure;
	private $_prixHeure;
	private $_categorie;


	
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getIdPointage() { return $this->_idPointage; }
		public function getIdOuvrier() { return $this->_idOuvrier; }
		public function getIdPointeur() { return $this->_idPointeur; }
		public function getHeurePointage() { return $this->_heurePointage; }
		public function getNombreHeure() { return $this->_nombreHeure; }
		public function getPresence() { return $this->_presence; }
		public function getNombreJour() { return $this->_nombreJour; }
		public function getTotalHeure() { return $this->_totalHeure; }
		public function getPrixHeure() { return $this->_prixHeure; }
		public function getCategorie() { return $this->_categorie; }


		public function setIdPointage($idPointage){
			$this->_idPointage = (int) $idPointage;
		}
		
		public function setIdOuvrier($idOuvrier){
			$this->_idOuvrier = (int) $idOuvrier;
		}

		public function setIdPointeur($idPointeur){	
					$this->_idPointeur = $idPointeur;
			
		}
		public function setHeurePointage($heurePointage){
					$this->_heurePointage = $heurePointage;
		}

		public function setNombreHeure($nombreHeure){
				$this->_nombreHeure = $nombreHeure;
		}

		public function setPresence($presence){
					$this->_presence = $presence;
		}

		public function setNomOuvrier($nomOuvrier){	
			$this->_nomOuvrier = $nomOuvrier;
}

public function setTelephone($telephone){	
	$this->_telephone = $telephone;
}
public function setNombreJour($nombreJour){	
	$this->_nombreJour = $nombreJour;
}
public function setTotalHeure($totalHeure){	
	$this->_totalHeure = $totalHeure;
}
public function setprixHeure($prixHeure){	
	$this->_prixHeure = $prixHeure;
}
public function setCategorie($categorie){	
	$this->_categorie = $categorie;
}
}
?>