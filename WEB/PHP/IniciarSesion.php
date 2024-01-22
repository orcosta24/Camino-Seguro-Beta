<?php
$servername = "localhost";
$user = "root";
$password = "";
$dbname = "caminoseguro";

$conn = new mysqli($servername, $user, $password, $dbname);

if ($conn->connect_error) {
    die("Conexion fallida: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $Correo_Electronico = limpiar_datos($_POST["Correo_Electronico"]);
    $Contrasena = limpiar_datos($_POST["Contrasena"]);

    $query = "SELECT * FROM usuario WHERE Correo_Electronico = '$Correo_Electronico' AND Contrasena = '$Contrasena'";
    $result = $conn->query($query);

    if ($result->num_rows > 0) {
        header("location: https://localhost/WEB/HTML/index.html");
        exit(); // Make sure to exit after redirection
    } else {
        echo "Login failed. Invalid email or password.";
    }
}

function limpiar_datos($data)
{
    // You should implement your data cleaning logic here.
    // For example, you can use mysqli_real_escape_string or other methods.
    return $data;
}
?>