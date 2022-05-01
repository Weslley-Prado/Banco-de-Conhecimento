<?php
          //This variable show the name of the server
          echo "This name server: " .$_SERVER['SERVER_NAME']   ;
          echo '<br/>';
          // This variable show where  the respository is localized
          echo "This is folder server: " .$_SERVER['DOCUMENT_ROOT'];
          echo "<br/>"; 

          $name = 'Weslley Prado';// type of string
          $age = 27; // type of int number
          $price = 10.06;// type of double number
          $bool = true ; // type of boolean
          //Constant
          define('NAME_CONSTANT','CONSTANT');

          echo "My name's: "  .$name; 
          echo "<br/>"; 
          echo "My age: " .$age; 
          echo "<br/>";
          echo "This is a number:" .$price; 
          echo "<br/>";
          echo "This is boolean expression: " .$bool; 
          echo "<br/>";
          echo "Hi, I can't to be altered, because I am a " .NAME_CONSTANT;
   


?>