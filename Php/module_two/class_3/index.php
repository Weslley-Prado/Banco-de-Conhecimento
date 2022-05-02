<?php


function showName() 
{
	$name = "Weslley";

	echo "<h1> My name is $name </h1> " ;
}

showName();

function showNameParam($name, $age)
{
	echo "<h2>My name is $name and age is $age </h2>";
}

showNameParam("Weslley", 27);

function true()
{
	return true;
}

true();
?>