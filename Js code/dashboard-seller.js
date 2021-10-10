$(document).ready(function () {
    var $user_token = localStorage.getItem('id');
    var $firstlastname = $('#firstlastname');
    var $date_of_creation = $('#date_of_creation');
    var $firstname_content = localStorage.getItem('firstname');
    var $lastname_content = localStorage.getItem('lastname');
    var $date_of_creation_content = localStorage.getItem('date_of_creation');
    $firstlastname.text($firstname_content + ' ' + $lastname_content);
    $date_of_creation.text('Joined since ' + $date_of_creation_content);

    function fillTheTable(id, name, date_of_creation, category_name) {
        let tableBody = document.getElementById("tbody");
        let initialrow = document.createElement("tr");
        //First Td
        let myTd1 = document.createElement("td");
        myTd1.className = "product-details";
        let header1 = document.createElement("h3");
        header1.className = "title";
        header1.textContent = name;
        let span1 = document.createElement("span");
        let strong1 = document.createElement("strong");
        strong1.textContent = "Posted on :"
        let time1 = document.createElement("time");
        time1.textContent = date_of_creation;
        span1.appendChild(strong1);
        span1.appendChild(time1);
        let span2 = document.createElement("span");
        span2.innerHTML = '<strong>Status</strong>Active';
        span2.className = "status active";
        myTd1.appendChild(header1);
        myTd1.appendChild(span1);
        myTd1.appendChild(span2);

        //Second Td
        let myTd2 = document.createElement("td");
        myTd2.className = "product-category";
        let span3 = document.createElement("span");
        span3.className = "categories";
        span3.textContent = category_name;
        myTd2.appendChild(span3);

        let myTd3 = document.createElement("td");
        myTd3.className = "action";

        let button1 = document.createElement("button");
        button1.className = "btn btn-danger";
        button1.textContent = "Delete";
        button1.id = "deleteorder";
        button1.dataset.id = id;
        button1.dataset.toggle = "modal";
        button1.dataset.target = "#deleteaccount";

        myTd3.appendChild(button1);


        initialrow.appendChild(myTd1);
        initialrow.appendChild(myTd2);
        initialrow.appendChild(myTd3);
        tableBody.appendChild(initialrow);

    }
    // In this function the delete API is working but due to CORS policy the request has been blocked
    function deleteProduct($product_id) {
        $.ajax({
            type: 'DELETE',
            url: 'http://localhost:8080/ecommerceapi/deleteproduct.php?product_id' + $product_id,

            success: function () {
                alert("Your Process is Done");
            }
        });
    }

    function showProducts($user_token) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/ecommerceapi/selectownedproduct.php?user_token=' + $user_token,
            success: function (data) {
                // console.log(data[0]['name']);
                for (i = 0; i < data.length; i++) {
                    fillTheTable(data[i]['id'], data[i]['name'], data[i]['date_of_creation'], data[i]['category_name']);
                }
                console.log(data);
            }
        })
    }
    function logOut() {
        localStorage.clear();
        window.location.href = 'login.html';
    }

    showProducts($user_token);



    $(document.body).on('click', '#deleteorder', function () {
        var $product_id = $(this).data("id");
        $(document.body).on('click', "#confirmdelete", function () {
            deleteProduct($product_id);
        });

    })
    $('#logout').on('click', logOut);


});