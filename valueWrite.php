<?php

// Values
$file = 'assets/feedValue.csv';
$length = 1024;

// Get form values
$value = htmlspecialchars($_POST['value']);

// Array construction
if (is_numeric($value)){
	$array = array(
		array($value)
	);
}

// File writing
if (!empty($value) && is_numeric($value)){
	if ($f = @fopen($file, 'w')) {
        foreach ($array as $line) {
			fputcsv($f, $line);
		}
		fclose($f);
	}
}

?>