<?php
  include('example.php');

 $example = new Example();

 $example->var2  = "Hello, I am a public variable";
 echo $example->var2;
 echo '<br/>';

 Example::$var3 = "Hello, I am a static variable";
 echo Example::$var3;
 echo '<br/>';

 $example -> setVar1("Weslley");
 echo $example->pegVar1();
 ?>
 