<?php
require 'connection.php';

$user_token = ($_GET['user_token'] !== "") ? mysqli_real_escape_string($con, $_GET['user_token']) : false;
if (!$user_token) {
    return http_response_code(400);
}

$user_has_products = [];
// $sql = "SELECT *,p.id,p.name,c.name AS category_name from products p JOIN users_has_products uhp ON p.id = uhp.product_id JOIN categories c ON p.category_id =c.id  JOIN users u ON u.id = '" . $user_token . "'";
$sql = "SELECT p.id,p.name,p.date_of_creation,c.name AS category_name
        FROM
        products p
        JOIN categories c ON
        p.category_id = c.id
        JOIN users_has_products uhp ON
        uhp.product_id = p.id
        WHERE uhp.user_id = '" . $user_token . "'";
if ($result = mysqli_query($con, $sql)) {
    $i = 0;
    while ($row = mysqli_fetch_assoc($result)) {
        $user_has_products[$i]['id']               = $row['id'];
        $user_has_products[$i]['name']             = $row['name'];
        $user_has_products[$i]['date_of_creation'] = $row['date_of_creation'];
        $user_has_products[$i]['category_name']    = $row['category_name'];


        $i++;
    }

    echo json_encode($user_has_products);
} else {
    http_response_code(404);
}
