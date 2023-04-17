<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  // Obtiene los datos del formulario
  $servicio = $_POST["servicio"];
  $nombre = $_POST["nombre"];
  $correo = $_POST["correo"];
  $fecha = $_POST["fecha"];
  $hora = $_POST["hora"];

  // Crea el mensaje del correo electrónico
  $mensaje = "Servicio: $servicio\n";
  $mensaje .= "Nombre: $nombre\n";
  $mensaje .= "Correo: $correo\n";
  $mensaje .= "Fecha: $fecha\n";
  $mensaje .= "Hora: $hora\n";

  // Envia el correo electrónico
  $destinatario = "info@rayconycr.com";
  $asunto = "Nueva cita para servicio de $servicio";
  mail($destinatario, $asunto, $mensaje);

  // Redirecciona a una página de confirmación
  header("Location: confirmacion.html");
  exit();
}
?>
