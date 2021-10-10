$(document).ready(function (){
    var $first_name         = $('#first_name');
    var $last_name          = $('#last_name');
    var $email              = $('#email');
    var $phone_number       = $('#phone_number')
    var $password           = $('#password');
    var $confirm_password   = $('#confirm_password');
    var $role               = $('#role');
    var $register_form      = $('#registration');

    if($register_form.length){
        $register_form.validate({
            rules:{
                first_name:{
                    required: true
                },
                last_name:{
                    required: true
                },
                email:{
                    required: true
                },
                phone_number:{
                    required: true
                },
                password:{
                    required : true
                },
                confirm_password:{
                    required: true,
                    equalTo: '#password'
                }

            },
            messages:{
                first_name:{
                    required: 'First name is mandatory'
                },
                last_name:{
                    required : 'Last name is mandatory'
                }
            }
        });
    }
    function clear(){
        document.getElementById("registration").reset();
    }

    $('#register').on('click',function(){
        var info = {
            first_name  : $first_name.val(),
            last_name   : $last_name.val(),
            email       : $email.val(),
            phone_number: $phone_number.val(),
            password    : $password.val(),
            role        : $role.val()
        };
        console.log(info);
        $.ajax({
            type:'POST',
            url: 'http://localhost:8080/ecommerceapi/signup.php',
            data: JSON.stringify(info),
            dataType:"json",
            contentType:"application/json",
            success: function(){
                alert("You are registered");
                clear();
            }
        });

    });



    
});