<?php

    class ProcesosJuego{

        function ObtenerPreguntas($d){
            $con = new Conexion();

            $allPreguntas = mysqli_query($con->Conectar(),"SELECT * FROM scru_pregunta where Dificultad=$d");
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

        function AllPreguntas(){
            $con = new Conexion();

            $allPreguntas = mysqli_query($con->Conectar(),"SELECT * FROM scru_pregunta");
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

        function AddPregunta($id,$d,$p,$rc,$ri1,$ri2,$ri3){
            $con = new Conexion();
            if($id){
                $query="update scru_pregunta set Dificultad = $d, Pregunta='{$p}',R_Incorrecta1='{$ri1}',
                R_Incorrecta2='{$ri2}',R_Incorrecta3='{$ri3}',R_Correcta='{$rc}' where ID= $id";

                return mysqli_query($con->Conectar(),$query);
            }else{
                $query="insert into scru_pregunta(Dificultad,Pregunta,R_Incorrecta1,R_Incorrecta2,R_Incorrecta3,R_Correcta)
                values('{$d}','{$p}','{$rc}','{$ri1}','{$ri2}','{$ri3}')";

                return mysqli_query($con->Conectar(),$query);
            }
        }

        function DeletePregunta($ID){
            $con = new Conexion();
            $ID_P=(int)$ID;

            return mysqli_query($con->Conectar(),"delete from scru_pregunta where ID=$ID_P");
           
        }

        function Rankings(){
            $con = new Conexion();

            $allPreguntas = mysqli_query($con->Conectar(),"select * from usuario_grupo_juego where score > 0 and  Id_juego = 8 order by score desc");
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

    }
    
?>