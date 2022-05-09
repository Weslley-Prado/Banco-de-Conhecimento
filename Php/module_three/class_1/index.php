<?php
class Pessoa
{
	private $name = "Weslley Prado";
	private $idade = "23";
	private $massa = "95 kg";

	private function crescer() {
		$this->comer;
	}
	private function comer(){
		echo "All child needs to eat";
	}


}

$pessoa = new Pessoa;
$pessoa->crescer();
 ?>