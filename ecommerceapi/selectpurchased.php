<?php
require 'connection.php';

$user_token = ($_GET['user_token'] !== "") ? mysqli_real_escape_string($con, $_GET['user_token']) : false;
if (!$user_token) {
    return http_response_code(400);
}

$purchased_products = [];
// $sql = "SELECT *,p.name,c.name AS category_name from products p JOIN purchase pu ON p.id =pu.product_id JOIN categories c ON p.category_id =c.id  JOIN users u ON u.id = '" . $user_token . "'";
$sql = "SELECT p.id,p.name,p.date_of_creation,c.name AS category_name
        FROM
        products p
        JOIN categories c ON
        p.category_id = c.id
        JOIN purchase pu ON
        pu.product_id = p.id
        WHERE pu.user_id = '" . $user_token . "'";

if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $purchased_products[$i]['id']               = $row['id'];
        $purchased_products[$i]['name']             = $row['name'];
        $purchased_products[$i]['date_of_creation'] = $row['date_of_creation'];
        $purchased_products[$i]['category_name']    = $row['category_name'];


        $i++;
    }

    echo json_encode($purchased_products);
} else {
    http_response_code(404);
}
