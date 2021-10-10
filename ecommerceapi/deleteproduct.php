<?php

require 'connection.php';

// Extract, valproduct_idate and sanitize the product_id.
$product_id = ($_GET['product_id'] !== null && $_GET['product_id'] > 0) ? mysqli_real_escape_string($con, $_GET['product_id']) : false;

if (!$product_id) {
    return http_response_code(400);
}

// Delete.
$sql = "DELETE FROM products WHERE id =" . $product_id;

if (mysqli_query($con, $sql)) {
    http_response_code(204);
} else {
    return http_response_code(422);
}
