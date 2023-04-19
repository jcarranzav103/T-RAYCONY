<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['birthdate'])     ||
   empty($_POST['age'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['email'])     ||
   empty($_POST['income_range'])     ||
   empty($_POST['academic_degree'])     ||
   empty($_POST['gender'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
   $name = strip_tags(htmlspecialchars($_POST['name']));
   $birthdate = strip_tags(htmlspecialchars($_POST['birthdate']));
   $age = strip_tags(htmlspecialchars($_POST['age']));
   $phone = strip_tags(htmlspecialchars($_POST['phone']));
   $email = strip_tags(htmlspecialchars($_POST['email']));
   $income_range = strip_tags(htmlspecialchars($_POST['income_range']));
   $academic_degree = strip_tags(htmlspecialchars($_POST['academic_degree']));
   $gender = strip_tags(htmlspecialchars($_POST['gender']));
   $message = strip_tags(htmlspecialchars($_POST['message']));

   
// Create the email and send the message
$to = 'registros@rayconycr.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Registro enviado por:  $name";
$email_body = "Has recibido una solicitud de registro con los siguientes detalles.\n\n";

$headers = " MIME-Version: 1.0" . "\r\n";
$headers .= " Content-Type: text/html; charset=UTF-8" . "\r\n";
$headers .= " From: noreply@rayconycr.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= " Reply-To: $email"; 
$headers .= " Cc: $email\n"; // Add the user's email address to the "Cc" field to send a copy to them  
mail($to,$email_subject,$email_body,$headers);
return true;         
?>