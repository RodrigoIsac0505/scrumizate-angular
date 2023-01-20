<?php 

header('Content-Type: application/json');

include("Conexion.php"); 
include("ProcesosEstudiantes.php");
include("ProcesosJuego.php");

$ep = $_GET['ep'];

if($ep == 'login'){
    $u=$_GET['u'];
    $p=$_GET['p'];
    Login($u,$p);
}else if($ep == 'preguntas'){
    $d=$_GET['d'];
    PreguntasRespuestas( $d);
}else if ($ep == 'puntaje'){
    $ID = $_GET['ID'];  
    $Puntaje = $_GET['score'];
    SubirPuntaje($ID,$Puntaje);
}else if ($ep == 'allpreguntas'){
    AllPreguntas();
}else if ($ep == 'addpregunta'){
    $id=$_GET['ID'];
    $d= $_GET['Dificultad'];
    $p= $_GET['Pregunta'];
    $rc= $_GET['R_Correcta'];
    $ri1= $_GET['R_Incorrecta1'];
    $ri2=$_GET['R_Incorrecta2'];
    $ri3= $_GET['R_Incorrecta3'];
    AddPregunta($id,$d,$p,$rc,$ri1,$ri2,$ri3);
}else if ($ep == 'deletepregunta'){
    $ID = $_GET['ID']; 
    DeletePregunta($ID);
}else if ($ep == 'allusuarios'){
    AllUsuarios();
}else if ($ep == 'deleteusuario'){
    $ID = $_GET['ID_usuario'];
    DeleteUsuarios($ID);
}else if ($ep == 'addusuario'){
    $id=$_GET['ID_usuario'];
    $fn=$_GET['firstname'];
    $ln=$_GET['lastname'];
    $e= $_GET['email'];
    $t= $_GET['type'];
    AddUser($id,$fn,$ln,$e,$t);
}else if($ep == 'rankings'){
    Rankings();
}else if($ep == 'addjugador'){
    $id=$_GET['ID_usuario'];
    $u=$_GET['username'];
    $p=$_GET['psswd'];
    addjugador($id,$u,$p);
}


function Login($u,$p){
    $juegoDb = new ProcesosEstudiantes();
    $user = $juegoDb->Login($u,$p);
    echo json_encode($user);
}


function PreguntasRespuestas($d){
    $juegoDb = new ProcesosJuego();
    $preguntas = $juegoDb->ObtenerPreguntas($d);
    print json_encode($preguntas);
}

function SubirPuntaje($ID,$Puntaje){
    $Usuario = new ProcesosEstudiantes();
    $Score = $Usuario->ActualizarPuntaje($ID,$Puntaje);
    if($Score){
        print json_encode($Score);
      }else{
        print json_encode($Score);
      }
}

function AllPreguntas(){
    $juegoDb = new ProcesosJuego();
    $preguntas = $juegoDb->AllPreguntas();
    print json_encode($preguntas);
}

function AddPregunta($id,$d,$p,$rc,$ri1,$ri2,$ri3){
    $juegoDb = new ProcesosJuego();
    $preguntas = $juegoDb->AddPregunta($id,$d,$p,$rc,$ri1,$ri2,$ri3);
    print json_encode($preguntas);
}

function DeletePregunta($ID){
    $juegoDb = new ProcesosJuego();
    $preguntas = $juegoDb->DeletePregunta($ID);
    print json_encode($preguntas);
}

function AllUsuarios(){
    $juegoDb = new ProcesosEstudiantes();
    $usuario = $juegoDb->AllUsuarios();
    print json_encode($usuario);
}

function DeleteUsuarios($ID){
    $juegoDb = new ProcesosEstudiantes();
    $Usuario = $juegoDb->DeleteUsuarios($ID);
    print json_encode($Usuario);
}

function AddUser($id,$fn,$ln,$e,$t){
    $juegoDb = new ProcesosEstudiantes();
    $user = $juegoDb->AddUser($id,$fn,$ln,$e,$t);
    print json_encode($user);
}

function Rankings(){
    $juegoDb = new ProcesosJuego();
    $user = $juegoDb->Rankings();
    echo json_encode($user);
}

function addjugador($id,$u,$p){
    $juegoDb = new ProcesosEstudiantes();
    $user = $juegoDb->Addjugador($id,$u,$p);
    print json_encode($user);
}
?>