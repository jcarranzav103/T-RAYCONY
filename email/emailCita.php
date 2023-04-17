<?php
// Check for empty fields
if (
    empty($_POST['name']) ||
    empty($_POST['email']) ||
    empty($_POST['date']) ||
    empty($_POST['time']) ||
    empty($_POST['service']) ||
    !filter_var($_POST['email'],
        FILTER_VALIDATE_EMAIL)
) {
    echo "No arguments Provided!";
    return false;
}

$name = strip_tags(htmlspecialchars($_POST['name']));
$service = strip_tags(htmlspecialchars($_POST['service']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$date = strip_tags(htmlspecialchars($_POST['date']));
$time = strip_tags(htmlspecialchars($_POST['time']));

// Create the email and send the message
$to = 'citas@rayconycr.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Nueva cita para:  $name";
$email_body = "Ha recibido una solicitud de cita.\n\n" . "Áca los detalles:\n\nServicio: $service\n\nNombre: $name\n\nEmail: $email_address\n\nFecha: $date\n\nHora:\n$time";
$headers = "From: noreply@rayconycr.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
mail($to, $email_subject, $email_body, $headers);
return true;
?>