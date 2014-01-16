<?php

// Report all PHP errors
error_reporting(E_ALL);

// db config
require "databaseConfig.php";

/* 
	this api takes 4 optional parameters

	@param contentType 	values ['images, videos, any']
	@param duration    	values ['15, 30, 45, 60']
	@param category    	values ['Professional, Industrial, Retail, Home Improvement, Restaurants, Automotive, Generic']
	@param tags    	   	values ['Fast, Slow, Medium']

*/

$params = array();

if (isset($_GET['contentType'])) {
	
	if ($_GET['contentType'] == "images") { // check to see if content type was images only

		array_push($params, "images > 0 AND videos = 0");

	} else if ($_GET['contentType'] == "videos") { // check to see if content type was videos only

		array_push($params, "images = 0 AND videos > 0");

	} else  { // default to any

		array_push($params, "");

	}

}

if (isset($_GET['duration'])) {

	
	if ($_GET['duration'] == "any") {

		array_push($params, "duration > 0");

	} else {

		array_push($params, 'duration='.$_GET['duration']);

	}

}

/*
if (isset($_GET['category'])) {
	
}

if (isset($_GET['tag'])) {
	
}
*/

// declare where variable
$where = "";

// counter stuff
$counter = 0;
if (count($params) > 0) {
	$where .= " WHERE ";
}

// build where clause 
foreach ($params as $value) {
	if ($counter < count($params) - 1) {
		$where .= $value." AND ";	
	} else {
		$where .= $value;
	}
	$counter ++;
}

// final SQL string
$sql = "select * from template t inner join template_meta_master tmm on name = title ".$where." ORDER BY t.id asc";

//execute the SQL query and return records
$result = mysql_query($sql);

// build array of output
$rows = array();
while($r = mysql_fetch_assoc($result)) {
    $rows[] = $r;
}

header('Content-type: application/json; charset=utf-8');

echo json_encode($rows);

?>