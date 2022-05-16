<?php
 abstract class Teste{
 	public function func1(){
 		echo "Loading function 1";
 	}
 }

 class Principal extends Teste{

 }

 $principal = new Principal;
 $principal -> func1();

//  //Nota: classes abstratas só podem ser herdadas.
// abstract class TesteOne{
// 	public function abs1(){
// 		echo "Loading Function one";
// 	}


//     }
// }

// class Main extends TesteOne{
// 	    abstract function func2(){

// 	public function func2(){
// 		echo "Eu estou declarado oficialmente como um método abstrato";
// 	}
// }

// $main = new Main;
// $main -> abs1();


?>