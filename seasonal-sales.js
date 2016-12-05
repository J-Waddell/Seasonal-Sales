console.log('here i am!');

var newRequest = new XMLHttpRequest()

newRequest.addEventListener ("load", showProducts)
newRequest.open ("GET", products.json)
newRequest.send ()

