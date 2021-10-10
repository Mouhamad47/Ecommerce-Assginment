$(document).ready(function () {
    var $user_token = localStorage.getItem('id');
    var $firstlastname = $('#firstlastname');
    var $date_of_creation = $('#date_of_creation');
    var $firstname_content = localStorage.getItem('firstname');
    var $lastname_content = localStorage.getItem('lastname');
    var $date_of_creation_content = localStorage.getItem('date_of_creation');
    $firstlastname.text($firstname_content + ' ' + $lastname_content);
    $date_of_creation.text('Joined since ' + $date_of_creation_content);

    function fillTheTable(name, date_of_creation, category_name) {
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

        initialrow.appendChild(myTd1);
        initialrow.appendChild(myTd2);
        tableBody.appendChild(initialrow);

    }
    function getPurchasedItems($user_token){
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/ecommerceapi/selectpurchased.php?user_token=' + $user_token,
            success: function (data) {
                // console.log(data[0]['name']);
                for (i = 0; i < data.length; i++) {
                    fillTheTable(data[i]['name'],data[i]['date_of_creation'],data[i]['category_name']);
                }
            }
        })
    }
    function logOut(){
        localStorage.clear();
        window.location.href = 'login.html';
    }

    getPurchasedItems($user_token);
    
    $('#logout').on('click', logOut);



    





});