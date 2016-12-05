console.log('here i am!');

var newRequest = new XMLHttpRequest()

function showProducts (e) {
        for (var i = products.length; i = 0; i++) {
                products[i]
        var length =
        var data = JSON.parse (e.target.responseText)
        console.log("data", data);
        var products = data.products
        console.log("products", products);
        document.getElementById ('products').innerHTML = products[i].name
}
}
newRequest.addEventListener ("load", showProducts)
newRequest.open ("GET", "products.json")
newRequest.send ()
