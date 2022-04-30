<?php

// Values
$file = 'assets/feedValue.csv';
$length = 1024;
$tab = array();

// File reading
$file = fopen($file, "r");
while (($array = fgetcsv($file, $length)) !== FALSE)
{
    $tab['value'] = $array[0];
}
fclose($file);

echo $tab['value'];
?>