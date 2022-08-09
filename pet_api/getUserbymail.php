<?php
include "config.php";
$data = array();
$userMail = $_GET['userMail'];
$query = mysqli_query($con,"SELECT * FROM User WHERE userMail = '$userMail' ");
while($row=mysqli_fetch_object($query))
{
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);
?>