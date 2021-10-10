<?php
require 'connection.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);


    // Validate.
    if (trim($request->user_id) == ''  || $request->product_id == '' ) {
        return http_response_code(400);
    }

    // Sanitize.
    $user_id          = mysqli_real_escape_string($con, trim($request->user_id));
    $product_id       = mysqli_real_escape_string($con, trim($request->product_id));
    $date_of_creation = date("Y-m-d");
    // Create.
    $sql = "INSERT INTO purchase VALUES ('$user_id','$product_id')";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
        $purchase = [
            'user_id'    => $user_id,
            'product_id' => $product_id,

        ];
        echo json_encode($purchase);
    } else {
        http_response_code(422);
    }
}
