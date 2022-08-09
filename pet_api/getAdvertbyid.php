<?php
include "config.php";
$data = array();
$id= $_GET['id'];
$query = mysqli_query($con,"SELECT Advert.id,Advert.advert_id,Advert.age,Advert.title,Advert.description,Advert.photo,Advert.date,Advert.user_id,Gender.genderName,Race.raceName FROM Advert INNER JOIN Gender ON Advert.gender_id=Gender.id INNER JOIN Race ON Advert.race_id=Race.id WHERE Advert.id= $id ");
while($row=mysqli_fetch_object($query))
{
    $data[]=$row;
}
echo json_encode($data);
echo mysqli_error($con);
?>