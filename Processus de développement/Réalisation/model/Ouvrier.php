<?php

class Ouvrier implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'idOuvrier' => $this->_idOuvrier,
             'nomOuvrier' => $this->_nomOuvrier,
             'numCIN' => $this->_numCIN,
             'prixHeure' => $this->_prixHeure,
             'categorie' => $this->_categorie,
			 'telephone' => $this->_telephone,
			 'nomChantier' => $this->_nomChantier,
        );
    }
	private $_idOuvrier;
	private $_nomOuvrier;
	private $_numCIN;
	private $_prixHeure;
	private $_categorie;
	private $_telephone;
	private $_nomChantier;

	
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getIdOuvrier() { return $this->_idOuvrier; }
		public function getNomOuvrier() { return $this->_nomOuvrier; }
		public function getNumCIN() { return $this->_numCIN; }
		public function getPrixHeure() { return $this->_prixHeure; }
		public function getCategorie() { return $this->_categorie; }
		public function getTelephone() { return $this->_telephone; }
		public function getNomChantier() { return $this->_nomChantier; }


		public function setIdOuvrier($idOuvrier){
			$this->_idOuvrier = (int) $idOuvrier;
		}

		public function setNomOuvrier($nomOuvrier){	
					$this->_nomOuvrier = $nomOuvrier;
			
		}
		public function setNumCIN($numCIN){
					$this->_numCIN = $numCIN;
		}

		public function setPrixHeure($prixHeure){
				$this->_prixHeure = $prixHeure;
		}

		public function setCategorie($categorie){
					$this->_categorie = $categorie;
		}
		public function setTelephone($telephone){
			$this->_telephone = $telephone;
}
public function setNomChantier($nomChantier){
	$this->_nomChantier = $nomChantier;
}

}
?>