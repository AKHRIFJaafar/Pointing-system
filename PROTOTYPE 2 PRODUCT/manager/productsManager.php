<?php
require_once('../model/Product.php');

class productsManager {
	//get Products
	public function getList(){
		$dbh = new PDO("mysql:host=localhost;dbname=product","root","12345");
		$stack = array();
		$req = "SELECT * FROM products";
		$result = $dbh->query($req)->fetchAll();
		foreach ($result as $row){
			$item = new Product();
			$item->setId($row["id"]);
			$item->setName($row["productname"]);
			$item->setColor($row["productcolor"]);
			array_push($stack, $item);
		}
		return $stack;

	}
//Add Product
		public function add($product){
			$dbh = new PDO("mysql:host=localhost;dbname=product","root","12345");
			$req = "INSERT INTO `products`(`id`,`productname`, `productcolor`) VALUES (:id,:productname,:productcolor)";

			$addProductQuery = $dbh ->prepare($req);
			$addProductQuery -> bindParam(":id",$product->getId(),PDO::PARAM_STR);	
			$addProductQuery -> bindParam(":productname",$product->getName(),PDO::PARAM_STR);
            $addProductQuery -> bindParam(":productcolor",$product->getColor(),PDO::PARAM_STR);
			$addProductQuery->execute();
        }
		// delete product

		public function delete($id){
			$dbh = new PDO("mysql:host=localhost;dbname=product","root","12345");

			$req = "DELETE FROM products WHERE id = $id";
			$deleteProduct = $dbh->prepare($req);
            $deleteProduct->execute();
        }
		// update product		
		public function update($product){
			$id = $product->getId();
			$dbh = new PDO("mysql:host=localhost;dbname=product","root","12345");
			$req = "UPDATE products SET productname = :productname,productcolor = :productcolor WHERE id = $id";
			$updateProductQuery = $dbh ->prepare($req);
			$updateProductQuery -> bindParam(":productname",$product->getName(),PDO::PARAM_STR);
            $updateProductQuery -> bindParam(":productcolor",$product->getColor(),PDO::PARAM_STR);
			$updateProductQuery->execute();
        }
}
?>