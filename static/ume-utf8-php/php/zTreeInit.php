<?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "dbztdocument";
    
    // 创建连接
    $conn = new mysqli($servername, $username, $password, $dbname);
    $conn->query("SET NAMES utf8");
    
    // 检测连接
    if ($conn->connect_error) {
        die("连接失败: " . $conn->connect_error);
    } 
    $sql = "SELECT id, pId, name FROM zTree";
    $result = $conn->query($sql);


    if($result->num_rows >0) {
        while($row = $result->fetch_assoc()) {
            $list[] = array('id'=>$row['id'],'pId'=>$row['pId'],'name'=>$row['name']);
        } 
    } else {
        echo "0 结果";
    }
    header("Content-type: text/json; charset=utf-8");
    echo json_encode($list);
    $conn->close();
?>