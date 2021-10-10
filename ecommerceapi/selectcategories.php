<?php

/**
 * Returns the list of client.
 */
require 'connection.php';

$categories = [];
$sql = "SELECT *  FROM categories";

if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $categories[$i]['id']      = $row['id'];
        $categories[$i]['name']    = $row['name'];

        $i++;
    }

    echo json_encode($categories);
} else {
    http_response_code(404);
}
