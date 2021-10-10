<?php

require 'connection.php';

$products = [];
$sql = "SELECT *,p.id,p.name, c.name AS category_name FROM products p JOIN categories c ON p.category_id = c.id ";

if($result = mysqli_query($con,$sql))
{
  $i = 0;
  while($row = mysqli_fetch_assoc($result))
  {
    $products[$i]['id']                     = $row['id'];
    $products[$i]['name']                   = $row['name'];
    $products[$i]['description']            = $row['description'];
    $products[$i]['price']                  = $row['price'];
    $products[$i]['category_id']            = $row['category_id'];
    $products[$i]['category_name']          = $row['category_name'];
    $products[$i]['date_of_creation']       = $row['date_of_creation'];


    $i++;
  }

  echo json_encode($products);
}
else
{
  http_response_code(404);
}?>