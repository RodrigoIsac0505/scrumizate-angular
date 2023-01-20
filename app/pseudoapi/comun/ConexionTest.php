
<?php

$host = 'mariadb-17648-0.cloudclusters.net';
$db   = 'juego';
$user = 'fisc';
$pass = 'fisc2021';
$port = "17664";
$charset = 'utf8mb4';


$dsn = "mysql:host=$host;dbname=$db;charset=$charset;port=$port";
//database_connection.php

$connect = new PDO($dsn, $user, $pass);

?>