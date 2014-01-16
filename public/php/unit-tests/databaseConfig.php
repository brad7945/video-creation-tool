<?php

/* Set up to work on Dave's local */
$username = "root";
$password = "collier336";
$hostname = "localhost"; 
$dbname = "video-creation-tool";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db($dbname,$dbhandle) or die("Could not select examples");

?>