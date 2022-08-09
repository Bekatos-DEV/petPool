<?php
include "config.php";
$input= file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$userName= $data['userName'];
$userMail=$data['userMail'];
$userPassword = $data['userPassword'];
$confirm = $data['confirm'];

$query = mysqli_query($con,"INSERT INTO User (userName,userMail,userPassword,confirm) VALUES ('$userName','$userMail','$userPassword','$confirm') ");

if($query)
{
    http_response_code(201);
    $message['status'] = "Success";
}else {
    http_response_code(422);
    $message['status']="Error";
    echo $data;
}
echo json_encode($message);
echo mysqli_error($con);
?>