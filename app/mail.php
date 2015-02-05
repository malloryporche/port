<?php  $user_name = $_POST['user_name'];
 $user_email = $_POST['user_email'];
 $message = $_POST['message'];
 $formcontent = "From: $name /n Message: $message";
 $recipient = "malloryburke@gmail.com";
 $subject = "From your Contact Form";
$mailheader = "From: $user_email /r/n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
echo "Thank you!  Your response has been recorded.";
?>
