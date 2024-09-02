var cart = document.querySelector('.cart');


function openCart() {
    cart.classList.add("active")
}

function closeCart() {
    cart.classList.remove("active")
}

/*To add items to cart */
var items_in_cart = document.querySelector(".items_in_cart");
let product_cart = [];

function addToCart(id, btn) {
    product_cart.push(document.getElementById);
    btn.classList.add("active")
}

//change item image
let bigimage = document.getElementById("bigimg");
function changeimg(img)
{
    bigimage.src = img;
}
