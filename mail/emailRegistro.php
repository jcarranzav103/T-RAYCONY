<?php
// Check for empty fields
if(empty($_POST['name'])             ||
   empty($_POST['birthdate'])        ||
   empty($_POST['age'])              ||
   empty($_POST['phone'])            ||
   empty($_POST['email'])            ||
   empty($_POST['income_range'])     ||
   empty($_POST['academic_degree'])  ||
   empty($_POST['gender'])           ||
   empty($_POST['message'])          ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
   $name = strip_tags(htmlspecialchars($_POST['name']));
   $email_address = strip_tags(htmlspecialchars($_POST['email']));
   $phone = strip_tags(htmlspecialchars($_POST['phone']));
   $message = strip_tags(htmlspecialchars($_POST['message']));
   $birthdate = strip_tags(htmlspecialchars($_POST['birthdate']));
   $age = strip_tags(htmlspecialchars($_POST['age']));   
   $income_range = strip_tags(htmlspecialchars($_POST['income_range']));
   $academic_degree = strip_tags(htmlspecialchars($_POST['academic_degree']));
   // $gender = strip_tags(htmlspecialchars($_POST['gender']));
 
   
// Create the email and send the message
$to = 'registro@rayconycr.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Mensaje del sitio web de :  $name";
$email_body = "Tu has recibido un mensaje desde la pagina de RayCony CR.\n\n"."Acá los detalles:\n\nNombre: $name\n\nFecha de cumpleaños: $birthdate\n\nEdad: $age\n\nTeléfono: $phone\n\nCorreo: $email_address\n\nRango de salario: $income_range\n\nGrado academico: $academic_degree\n\nGenero: $gender\n\nMensaje:\n$message";
$headers = "From: noreply@rayconycr.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";  
$headers .= "Content-Type: text/html; charset=UTF-8\n"; 
mail($to,$email_subject,$email_body,$headers);
return true;         
?>