<?php

require 'connection.php';

$last_products = [];
$sql = "SELECT id FROM products ORDER BY id DESC LIMIT 1";

if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $last_products[$i]['id']                     = $row['id'];



        $i++;
    }

    echo json_encode($last_products);
} else {
    http_response_code(404);
}
