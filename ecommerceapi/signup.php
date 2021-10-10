<?php
require 'connection.php';

// Get the posted data.
$postdata = file_get_contents("php://input");

if (isset($postdata) && !empty($postdata)) {
    // Extract the data.
    $request = json_decode($postdata);


    // Validate.
    if (trim($request->first_name) == '' || $request->last_name  == '' || $request->email == '' || $request->phone_number == '' || $request->password == '' || $request->role == '') {
        return http_response_code(400);
    }

    // Sanitize.
    $first_name = mysqli_real_escape_string($con, trim($request->first_name));
    $last_name = mysqli_real_escape_string($con, trim($request->last_name));
    $email = mysqli_real_escape_string($con, trim($request->email));
    $phone_number = mysqli_real_escape_string($con, trim($request->phone_number));
    $password = mysqli_real_escape_string($con, trim($request->password));
    $hashed_password = hash('sha256', $password);
    $role = mysqli_real_escape_string($con, trim($request->role));
    $date_of_creation = date("Y-m-d");

    // Create.
    $sql = "INSERT INTO users VALUES (null,'$first_name','$last_name','$email','$phone_number','$hashed_password', '$role', '$date_of_creation')";
    // $x = $con->prepare("INSERT INTO users (first_name, last_name, email, password, role) VALUES (?, ?, ?, ?, ?)");
    // $x->bind_param("ssssi", $first_name, $last_name, $email, $hased_password, $role);
    // $x->execute();

    // $x->close();
    // $connection->close();
    // if (mysqli_query($con,true)) {
    if (mysqli_query($con, $sql)) {
       
        http_response_code(201);
        $user = [
            'id'            => mysqli_insert_id($con),
            'first_name'    => $first_name,
            'last_name'     => $last_name,
            'email'         => $email,
            'phone_nnumber' => $phone_number,
            'password'      => $hashed_password,
            'role'          => $role,
            'date_of_creation' => $date_of_creation
        ];
        
        echo json_encode($user);
    } else {
        http_response_code(422);
    }
}
