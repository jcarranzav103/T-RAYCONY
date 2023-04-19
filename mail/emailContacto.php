<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'info@rayconycr.com'; // Add your email address inbetween the '' replacing yourname@yourdomain.com - This is where the form will send a message to.
$email_subject = "Website Contact Form:  $name";
$email_body = "<html><body>";
$email_body .= "<h2>You have received a new message from your website contact form:</h2>";
$email_body .= "<p><strong>Name:</strong> $name</p>";
$email_body .= "<p><strong>Email:</strong> $email_address</p>";
$email_body .= "<p><strong>Phone:</strong> $phone</p>";
$email_body .= "<p><strong>Message:</strong> $message</p>";
$email_body .= "</body></html>";$headers = "From: noreply@rayconycr.com\n"; // This is the email address the generated message will be from. We recommend using something like noreply@yourdomain.com.
$headers .= "Reply-To: $email_address";
$headers .= "Cc: $email_address\n"; // Add the user's email address to the "Cc" field to send a copy to them  
$headers .= "MIME-Version: 1.0\n";
$headers .= "Content-Type: text/html; charset=UTF-8\n"; 
mail($to,$email_subject,$email_body,$headers);
return true;         
?>