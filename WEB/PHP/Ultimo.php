<?php
$servername = "localhost";
$user = "root";
$password = "";
$dbname = "caminoseguro";

$conn = new mysqli($servername, $user, $password, $dbname);

if($conn -> connect_error){
    die("Conexion fallida: ".$conn->connect_error);
}

if($_SERVER["REQUEST_METHOD"] == "POST")
{
    
    $Nombre = limpiar_datos($_POST["Nombre"]);
    $Apellidos = limpiar_datos($_POST["Apellidos"]);
    $Correo_Electronico = limpiar_datos($_POST["Correo_Electronico"]);
    $Contrasena = limpiar_datos($_POST["Contrasena"]);
    $Codigo_postal = limpiar_datos($_POST["Codigo_postal"]);
    $Numero_Telefono = limpiar_datos($_POST["Numero_Telefono"]);
    $DNI = limpiar_datos($_POST["DNI"]);
    $Direccion = limpiar_datos($_POST["Direccion"]);

    $fecha_de_registro = date("Y-m-d");

    $sql = "INSERT INTO usuario (Nombre, Correo_Electronico, Contrasena, Codigo_postal, Numero_Telefono, DNI, Direccion, Apellidos, fecha_de_registro) VALUES (?,?,?,?,?,?,?,?,?)";
    $stmt = $conn->prepare($sql);
    
    $stmt->bind_param("sssssssss", $Nombre, $Correo_Electronico, $Contrasena, $Codigo_postal, $Numero_Telefono, $DNI, $Direccion, $Apellidos, $fecha_de_registro);
    
if($stmt ->execute()){
    //tienes que cambiar la direcion por el tuyo sino tendras un error 
    header("Location: https://Localhost/WEB/HTML/index.html");
    exit();
}else{
    echo "Error: ".$sql."<br>" .$conn->error;
}
}

$conn -> close();

function limpiar_datos($dato){
    $dato = htmlspecialchars($dato);
    $dato = stripcslashes($dato);
    $dato = trim($dato);

    return $dato;
}