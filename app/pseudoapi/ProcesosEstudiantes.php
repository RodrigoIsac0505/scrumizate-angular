<?php
    class ProcesosEstudiantes{

        function Login($u,$p){
            $con = new Conexion();
            $query="select a.ID,a.username,b.`type` from usuario_grupo_juego AS a 
                    join usuario AS b on 
                        a.ID_usuario=b.ID_usuario 
                            where a.username='{$u}' and a.psswd='{$p}'";

            $user = mysqli_query($con->Conectar(),$query);
            $countRows = mysqli_num_rows($user);
                if($countRows>0){
                    $datos = array();
                    while($row = mysqli_fetch_assoc($user)){
                        $datos[]=$row;
                    }
                    return $datos;
                }
                return [1];
        }

        function ActualizarPuntaje($ID ,$Puntaje){
            $con = new Conexion();
            $point=(double)$Puntaje;

            $query = "update usuario_grupo_juego set score = score + $point WHERE ID = $ID";
            return mysqli_query($con->Conectar(),$query);
        
        }

        function AllUsuarios(){
            $con = new Conexion();

            $allPreguntas = mysqli_query($con->Conectar(),"select * from usuario_grupo_juego WHERE ID_juego = 8");
            $countRows = mysqli_num_rows($allPreguntas);
                if($countRows>0){
                    $datos = array();
                    while($row = mysqli_fetch_assoc($allPreguntas)){
                        $datos[]=$row;
                    }
                    return $datos;
                }
                return [1];
        }

        function DeleteUsuarios($ID){
            $con = new Conexion();
            
            return mysqli_query($con->Conectar(),"delete from usuario_grupo_juego where ID_usuario = '{$ID}'");
           
        }

        function AddUser($id,$fn,$ln,$e,$t){
            $con = new Conexion();
            $tp=(int)$t;

            $query="insert into usuario(ID_usuario,firstname,lastname,email,type)
            values('{$id}','{$fn}','{$ln}','{$e}',$tp)";
        
            return mysqli_query($con->Conectar(),$query);
        }

        function addjugador($id,$u,$p){
            $con = new Conexion();

            $query="insert into usuario_grupo_juego(ID_usuario,ID_juego,ID_Grupo,username,psswd)
            values('{$id}',8,2,'{$u}','{$p}')";
            return mysqli_query($con->Conectar(),$query);
        }
    }
?>