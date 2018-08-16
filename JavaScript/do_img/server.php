<?php

$_GET['op']();

function doImg()
{
    $base64 = $_POST['img'];
    if (strstr($base64,",")){
        $base64 = explode(',',$base64)[1];
    }
    file_put_contents('./'.uniqid().'.jpg',base64_decode($base64));

    echo json_encode(['result' => 'success']);
}