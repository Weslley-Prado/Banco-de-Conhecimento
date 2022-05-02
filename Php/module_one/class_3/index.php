<?php
   // First way to create a array
   $name = array('Weslley','Laisa', 'Prado');
   //Acessing a array
   echo "This name belong to a array: " .$name[0];
   echo "<br/>";
   echo "This name belong to a array too: " .$name[2];

   // Second way to create a array

   $name[] = 'Weslley';
   $name[] = 'Laisa';
   $name[] = 'Prado';

   // Third way to create a array
   $array = ['Weslley', 'Laisa', 'Prado'];

   echo "this is a array " .$array
?>