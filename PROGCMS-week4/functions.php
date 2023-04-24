<?php

function bestands_check($string) {
    try
    {
        if ( !file_exists($string) ) {
            throw new Exception('Bestand niet gevonden.');
        }

    } catch ( Exception $ex ) {
        echo "Het bestand: {$string} is niet gelezen.<br>";
        echo $ex->getMessage();
    }
}

function lees_bestand($string) {
    $bestand = fopen($string, 'r');

    while(!feof($bestand)) {
        $blog_regel = fgets($bestand);
        echo $blog_regel, '<br>';
    }
    fclose($bestand);
}

$root = substr($_SERVER['SCRIPT_NAME'],
    0,
    strpos($_SERVER['SCRIPT_NAME'], '/public') + 7);
define("ROOT_URL", $root);

function url_path($path) {
    if($path[0] != '/') {
        $path = "/" . $path;
    }
    return ROOT_URL . $path;
}