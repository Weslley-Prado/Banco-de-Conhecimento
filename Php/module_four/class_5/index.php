<?php
	
	$pdo = new PDO('mysql:host=localhost;dbname=modulo_8','root','');

	$id = 3;

	//OR funciona como `ou`
	//AND funciona como `e`

	$sql = $pdo->prepare("DELETE FROM `clientes`  WHERE id = 5");

	if($sql->execute()){
		echo 'Conteúdo deletado';
	}

?>