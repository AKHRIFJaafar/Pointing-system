<?php

class Product implements JsonSerializable {
	public function jsonSerialize()
    {
        return array(
			 'id' => $this->_id,
             'productname' => $this->_productname,
             'productcolor' => $this->_productcolor,
        );
    }
	private $_id;
	private $_productname;
	private $_productcolor;

	
	public function __construct() {
	
	}
	// public function __construct($data) {
	// 	$this->fill($data);
	// }
		public function getId() { return $this->_id; }
		public function getName() { return $this->_productname; }
		public function getColor() { return $this->_productcolor; }


		public function setId($id){
			$this->_id = (int) $id;
		}

		public function setName($productname){	
					$this->_productname = $productname;
			
		}
		public function setColor($productcolor){
					$this->_productcolor = $productcolor;
		}

}
?>