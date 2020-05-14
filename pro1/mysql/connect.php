<?php
    $host = "localhost";
    $user = "webs";
    $pw = "Forever0!";
    $dbName = "webs";
    $dbConnect = new mysqli($host, $user, $pw, $dbName);
    $dbConnect->set_charset("utf8");

    if(mysqli_connect_errno()){
        echo "connect false<br>";
        echo mysqli_connect_errno();
    } else {
        echo "connect succes<br>";
    }
?>

