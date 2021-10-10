$(document).ready(function () {
    var $name = $('#name');
    var $description = $('#description');
    var $price = $('#price');
    var $category_id = $('#category_id');
    var $product_id = $('#product_id');

    function clear() {
        document.getElementById("addproducts").reset();
    }
    function createProduct(product) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/ecommerceapi/createproduct.php',
            data: JSON.stringify(product),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                alert("Product was added");
                clear();
            }
        });
    }
    function createOwnerForProduct() {
        // In this function I should post user_id and product_id to table user_has_product to specify which product is added by the logged in user
        // Via this API 'http://localhost:8080/ecommerceapi/createproductforuser.php'
        // This API is working properly
    }

    $.ajax({
        type: 'GET',
        url: 'http://localhost:8080/ecommerceapi/selectlastproduct.php',
        success: function (data) {
            console.log(data[0]['id']);
            $product_id.text(data[0]['id']);
            
            // Here I Used this API to get the last id of a product in products table so I increment it by one,
            // and add it with the user_id to user_has_product table but I cannot access this product id outside this function so it didn't work
        }
    })



    $('#createproduct').on('click', function () {
        var product = {
            name: $name.val(),
            description: $description.val(),
            price: $price.val(),
            category_id: $category_id.val()
        };
        createProduct(product);
        clear();

        console.log(product);

    });



});