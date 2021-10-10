$(document).ready(function () {

    var $user_id = localStorage.getItem('id');
    function buildList(id, name, category, date_of_creation, description, price) {
        let row = document.getElementById("listrow");

        let abovelist = document.createElement("div");
        abovelist.className = "col-lg-12 col-md-8";

        let list = document.createElement("div");
        list.className = "ad-listing-list mt-20";
        let div1 = document.createElement("div");
        div1.className = "row p-lg-3 p-sm-5 p-4";

        let div2 = document.createElement("div");
        div2.className = "col-lg-4 align-self-center";

        let image1 = document.createElement("img");
        image1.src = "emptycart.svg";
        image1.className = "img-fluid";
        div2.appendChild(image1);
        div1.appendChild(div2);

        let div3 = document.createElement("div");
        div3.className = "col-lg-8";

        let div4 = document.createElement("div");
        div4.className = "row";

        let div5 = document.createElement("div");
        div5.className = "col-lg-6 col-md-10";

        let div6 = document.createElement("div");
        div6.className = "ad-listing-content";


        let div7 = document.createElement("div");
        let anchor1 = document.createElement("a");
        anchor1.textContent = name;
        anchor1.className = "font-weight-bold ptitle";
        div7.appendChild(anchor1);

        let ul1 = document.createElement("ul");
        ul1.className = "list-inline mt-2 mb-3";

        let li1 = document.createElement("li");
        li1.className = "ist-inline-item pdetails";
        li1.innerHTML = '<a> <i class="fa fa-folder-open-o"></i> ' + category + '</a>';
        let li2 = document.createElement("li");
        li2.className = "ist-inline-item pdetails";
        li2.innerHTML = '<a><i class="fa fa-calendar"></i> ' + date_of_creation + '</a>';
        ul1.appendChild(li1);
        ul1.appendChild(li2);

        let p1 = document.createElement("p");
        p1.className = "pr-5 pdescription";
        p1.textContent = description;
        let p2 = document.createElement("p");
        p2.textContent = "$" + price;
        p2.className = "pprice"

        div6.appendChild(div7);
        div6.appendChild(ul1);
        div6.appendChild(p1);
        div6.appendChild(p2);

        div5.appendChild(div6);

        let div8 = document.createElement("div");
        div8.className = "col-lg-6 align-self-center";

        let div9 = document.createElement("div");
        div9.className = "product-ratings float-lg-right pb-3";
        let button1 = document.createElement("button");
        button1.className = "btn btn-primary";
        button1.textContent = "Order Now";
        button1.id = "order";
        button1.dataset.id = id;


        div9.appendChild(button1);
        div8.appendChild(div9);
        div4.appendChild(div5);
        div4.appendChild(div8);
        div3.appendChild(div4);
        div1.appendChild(div3);

        list.appendChild(div1);
        abovelist.appendChild(list);
        row.appendChild(abovelist);


    }
    function showAllProducts() {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:8080/ecommerceapi/selectproducts.php',
            success: function (data) {
                console.log(data);
                for (i = 0; i < data.length; i++) {
                    buildList(data[i]['id'], data[i]['name'], data[i]['category_name'], data[i]['date_of_creation'], data[i]['description'], data[i]['price']);
                }
            }
        })
    }
    showAllProducts();
    function purchase(info) {
        $.ajax({
            type: 'POST',
            url: 'http://localhost:8080/ecommerceapi/purchase.php',
            data: JSON.stringify(info),
            dataType: "json",
            contentType: "application/json",
            success: function () {
                alert("You Ordered Successfully");
            }
        })
    }

    $(document.body).on('click', '#order', function () {
        var $product_id = $(this).data("id");
        var info = {
            user_id: $user_id,
            product_id: $product_id
        }
        purchase(info);
        console.log(info);

    });




});