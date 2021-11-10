<?php
//include the two files
include_once('classes/sendmail.php');
include_once('config.php');

header("Access-Control-Allow-Origin: *");
$rest_json = file_get_contents("php://input");
$_POST = json_decode($rest_json, true);

if( empty($_POST['name']) && empty($_POST['email']) && empty($_POST['phone']) && empty($_POST['msg']) ) {
    echo json_encode(
        [
           "sent" => false,
           "message" => $SendMailEmptyerrorMessage
        ]
    );
    exit();
}

if ($_POST){
    //@important: Please change this before using
    http_response_code(200);
    $subject = 'JukonMedia.pl formularz kontaktowy: ' . $_POST['email'];
    $from = $_POST['email'];
    $message = "Imię: " . $_POST['name'] ."\r\n";
    $message .= "Telefon: " . $_POST['phone'] . "\r\n";
    $message .= "Wiadomość: " . $_POST['msg'];
    //Actual sending email
    $sendEmail = new Sender($adminEmail, $from, $subject, $message);
    $sendEmail->send();
} else {
 // tell the user about error
 echo json_encode(
     [
        "sent" => false,
        "message" => $SendMailFailederrorMessage
     ]
 );
}
