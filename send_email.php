<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *'); 
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer-master/src/Exception.php';
require 'PHPMailer-master/src/PHPMailer.php';
require 'PHPMailer-master/src/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = htmlspecialchars($_POST['email']);
    $name = htmlspecialchars($_POST['name']);
    $message = htmlspecialchars($_POST['message']);

    $mail = new PHPMailer(true);
    try {
        // Настройки SMTP
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';    
        $mail->SMTPAuth   = true;
        $mail->Username   = 'changingliveshh@gmail.com';    // Email
        $mail->Password   = '';   // key
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587;

        $mail->setFrom($email, $name);
        $mail->addAddress('1ff1eeff@gmail.com');

        $mail->isHTML(true);
        $mail->Subject = 'New request from changingliveshh.com';
        $mail->Body = "Name: $name<br>Email: $email<br>Message: $message";

        $mail->send();
        echo json_encode(['status' => 'success']);
        
    } catch (Exception $e) {        
        echo json_encode([
            'status' => 'error',
            'message' => 'Failed to send: ' . $e->getMessage()
        ]);
    }
} else {
    echo json_encode(['status' => 'error', 'message' => 'Неверный запрос']);
}
?>