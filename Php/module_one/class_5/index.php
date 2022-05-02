<?php
 $var1 = "Weslley";
 $var2=$var1;
 $var3 = 27;
 if($var1==$var2)
 {
 	echo '<div style= "width:300px; height: 300px; background-color:red"> The variables are same</div>';

 } else {
 	echo "The variables is not same";
 }

 if(($var1==$var2)&&($var2==$var3))
 {
 	echo "It is true";
 } else
 {
 	echo "It is false <br/>";
 }

  if(($var1==$var2)||($var2==$var3))
 {
 	echo "It is true";
 } else
 {
 	echo "It is false";
 }

 // Looping

 for ($counter = 0; $counter<10; $counter++)
 {
 	echo "Hello World";
    echo "<hr>";
 }

 $count =  0;
  while($count<10)
  {
  	echo "The life is good";
  	echo "<hr>";
    $count++;
  }

  do
  {
    echo "Hello World";
    echo "<br/>";
    $count++;
  }while($count<10)
?>