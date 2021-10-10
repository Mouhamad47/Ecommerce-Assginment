$(document).ready(function () {
    var $email = $('#email');
    var $password = $('#password');

    function logIn(info) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/ecommerceapi/login.php',
            data: JSON.stringify(info),
            dataType: "json",
            contentType: "application/json",
            success: function (data) {
                if (data[0]['role'] == 0) {
                    console.log(data);
                    window.location.href = 'dashboard-buyer.html';
                }
                else {

                    window.location.href = 'dashboard-seller.html';
                }

                localStorage.setItem('id', data[0]['id']);
                localStorage.setItem('firstname', data[0]['first_name']);
                localStorage.setItem('lastname', data[0]['last_name']);
                localStorage.setItem('role', data[0]['role']);
                localStorage.setItem('date_of_creation', data[0]['date_of_creation']);



            }
        })
    }

    $('#login').on('click', function () {
        var info = {
            email: $email.val(),
            password: $password.val()
        };
        logIn(info);

    });





});