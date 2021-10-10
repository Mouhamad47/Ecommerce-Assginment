<?php
require 'connection.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);


    // Validate.
    if (trim($request->name) == ''  || $request->description == '' || $request->price == null|| $request->category_id == null) {
        return http_response_code(400);
    }

    // Sanitize.
    $name               = mysqli_real_escape_string($con, trim($request->name));
    $description        = mysqli_real_escape_string($con, trim($request->description));
    $price              = mysqli_real_escape_string($con, trim($request->price));
    $category_id        = mysqli_real_escape_string($con, trim($request->category_id));
    $date_of_creation   = date("Y-m-d");
    // Create.
    $sql = "INSERT INTO products VALUES (null,'$name','$description','$price','$category_id','$date_of_creation')";

    if (mysqli_query($con, $sql)) {
        http_response_code(201);
        $category = [
            'id'                => mysqli_insert_id($con),
            'name'              => $name,
            'description'       => $description,
            'price'             => $price,
            'category_id'       => $category_id,
            'date_of_creation'  => $date_of_creation,







        ];
        echo json_encode($category);
    } else {
        http_response_code(422);
    }
}
