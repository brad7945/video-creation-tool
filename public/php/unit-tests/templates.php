<?php

// Report all PHP errors (see changelog)
error_reporting(E_ALL);

$username = "root";
$password = "collier336";
$hostname = "localhost"; 
$dbname = "video-creation-tool";

//connection to the database
$dbhandle = mysql_connect($hostname, $username, $password) or die("Unable to connect to MySQL");

//select a database to work with
$selected = mysql_select_db($dbname,$dbhandle) or die("Could not select examples");

// get params to build where clause
$contentType = $_GET['contentType'];
$duration = $_GET['duration'];

$where = " WHERE ";
$duration = " ";

if (isset($contentType)) {
	if ($contentType == "videos") {
		$where .= "images = 0 AND videos > 0";
	} else if ($contentType == "images") {
		$where .= "images > 0 AND videos = 0";
	} else {
		$where .= "videos > 0 AND images > 0";
	} 
}

if (isset($_GET['duration'])) {
	if(isset($contentType)) {
		$where .= " AND ";
	}

	$where .= " duration = '".$_GET['duration']."'";
}

$sql = "select * from template t inner join template_meta_master tmm on name = title".$where." ORDER BY t.id asc";

//execute the SQL query and return records
$result = mysql_query($sql);

//
$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}

header('Content-type: application/json; charset=utf-8');

echo json_encode($rows);

?>