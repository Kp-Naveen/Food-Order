let cart = [];
const cartItems = document.getElementById('cart-items');
const totalElement = document.getElementById('total');

function addToCart(productName, price) {
  cart.push({ productName, price });
  updateCart();
}

function updateCart() {
  cartItems.innerHTML = '';
  let totalPrice = 0;

  cart.forEach(item => {
    const listItem = document.createElement('li');
    listItem.textContent = `${item.productName} - ${item.price}`;
    cartItems.appendChild(listItem);
    totalPrice += item.price;
  });

  totalElement.textContent = `Total Bill: ${totalPrice.toFixed(2)}`;
}

function checkout() {
  alert(`Thank you for your Order! \n        Enjoy your Food!!`);
  cart= [];
  let totalPrice = 0;
  updateCart();
}