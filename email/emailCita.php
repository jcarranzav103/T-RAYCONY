<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $para = "citas@rayconycr.com";
  $asunto = "Nueva cita";
  $mensaje = "Se ha agendado una nueva cita:\n\n";
  $mensaje .= "Servicio: " . $_POST["servicio"] . "\n";
  $mensaje .= "Nombre: " . $_POST["nombre"] . "\n";
  $mensaje .= "Correo: " . $_POST["correo"] . "\n";
  $mensaje .= "Fecha de la cita: " . $_POST["fecha"] . "\n";
  $mensaje .= "Hora de la cita: " . $_POST["hora"] . "\n";

  $headers = "From: remitente@example.com\r\n";
  $headers .= "Reply-To: remitente@example.com\r\n";
  $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

  if (mail($para, $asunto, $mensaje, $headers)) {
    echo "El correo electrónico se envió correctamente.";
  } else {
    echo "Hubo un error al enviar el correo electrónico.";
  }
}
?>

