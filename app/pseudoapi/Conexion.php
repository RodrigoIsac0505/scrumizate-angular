<?php
   DEFINE("DB_HOST","loclhost");
   DEFINE("DB_USER","fisc");
   DEFINE("DB_PASS","");
   DEFINE("DB_PORT","");
   DEFINE("DB_NAME","fisc_games");

   /*DEFINE("DB_HOST","localhost");
   DEFINE("DB_USER","root");
   DEFINE("DB_PASS","root");
   DEFINE("DB_NAME","fisc_games");*/


    class Conexion{
        function Conectar(){
            return mysqli_connect(DB_HOST,DB_USER,DB_PASS,DB_NAME,DB_PORT);
        }
    }    

?>
