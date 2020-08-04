// from html
const
    // html querys
    laptopButton = document.getElementById('laptop'),
    mouseButton = document.getElementById('mouse'),
    totalPriceSpan = document.getElementById('totalPrice'),
    // document constants
    laptopPrice = 299.99,
    mousePrice = 14.99;

var
    cart = 0;

// init
totalPriceSpan.innerHTML = cart;

// event listener
laptopButton.addEventListener('click', addLaptopCart);
function addLaptopCart() {
    cart += laptopPrice;
    console.info('added laptop in the cart')
    totalPriceSpan.innerHTML = cart;
}

mouseButton.addEventListener('click', addMouseCart);
function addMouseCart() {
    cart += mousePrice;
    console.info('added mouse in the cart')
    totalPriceSpan.innerHTML = cart;
}