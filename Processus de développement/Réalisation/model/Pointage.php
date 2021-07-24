<?php

class Pointage implements JsonSerializable {
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
			 'telephone' => $this->_telephone
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

}
?>