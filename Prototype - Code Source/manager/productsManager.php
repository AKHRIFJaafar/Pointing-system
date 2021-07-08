<?php
require_once("manager.php");
require_once('../model/product.php');

class productsManager extends manager {
	public function get($id){
		$req = "SELECT * FROM former WHERE id=$id";
		$row = $this->executerRequete($req, array($id))->fetch();
		return new product($row);
	}
	
	public function getList(){
		$stack = array();
		$req = "SELECT * FROM former";
		$result = $this->executerRequete($req)->fetchAll();
		foreach ($result as $row){
			$item = new product($row);
			array_push($stack, $item);
		}
		return $stack;
	}
}
?>