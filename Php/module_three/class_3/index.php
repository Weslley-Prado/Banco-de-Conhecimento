<?php

  class Pai{

  	public function showBye(){
  		echo "Bye";
  	}
  }

// Classe filha herda dados da Classe Pai
  final class Filha extends Pai{
  	public function showHello(){
  		echo "Hello World";
  	}
  }


  $pai = new Pai;

  $pai -> showBye();
  echo '<br/>';
  $filha = new Filha;
  $filha->showHello();

echo '<br/>';
//Exemplo da herança herdada da classe Pai pela classe Filha, final representa a última classe que não transmite herança
$filha -> showBye();

?>