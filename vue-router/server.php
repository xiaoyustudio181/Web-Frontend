<?php
header("Access-Control-Allow-Origin:*");
header("Access-Control-Allow-Methods:GET,POST");

include_once 'pdo.php';
$M = new PDOModel();

$_GET['op']();

function getPersons()
{
    global $M;
    $result = $M->query("select * from `persons`;")->fetchAll();
    json(true, 'all persons', $result);
}

function getPerson()
{
    global $M;
    $result = $M->query("select * from `persons` where `id`={$_POST['id']};")->fetchAll()[0];
    json(true, 'one person', $result);
}

function insertPerson()
{
    global $M;
    $result = $M->execute("insert into `persons`(`name`,`gender`,`age`,`hometown`,`hobbies`) values('{$_POST['name']}',{$_POST['gender']},{$_POST['age']},'{$_POST['hometown']}','{$_POST['hobbies']}');");
    json(true, 'inserted 1 person', $result);
}

function updatePerson()
{
    global $M;
    $result = $M->execute("update persons set `name`='{$_POST['name']}',`age`={$_POST['age']},`gender`={$_POST['gender']},`hometown`='{$_POST['hometown']}',`hobbies`='{$_POST['hobbies']}' where id={$_POST['id']};");
    json(true, 'updated 1 person', $result);
}

function deletePerson()
{
    global $M;
    $result = $M->execute("delete from persons where id={$_POST['id']};");
    json(true, 'deleted 1 person', $result);
}

/*
 * @describe 输出json数据
 * */
function json($isOk, $message, $data)
{
    $result = [
        'result' => $isOk ? 'success' : 'error',
        'message' => $message,
        'data' => $data
    ];
    echo json_encode($result);
}
