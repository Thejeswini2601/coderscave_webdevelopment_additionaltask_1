let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


  menu.onclick = () =>{
      menu.classList.toggle('bx-x');
      navbar.classList.toggle('active');
  }

  window.onscroll = () => {
      menu.classList.remove('bx-x');
      navbar.classList.remove('active');
  }


  // JavaScript code to handle shopping cart functionality
  document.addEventListener('DOMContentLoaded', function() {
    const addToCartButtons = document.querySelectorAll('.addToCart');
    const cartItems = document.getElementById('cartItems');
    const checkoutBtn = document.getElementById('checkoutBtn');
    const buyBtn = document.getElementById('buyBtn');

    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(event) {
        event.preventDefault();
        this.style.backgroundColor = 'gray';
        const item = this.parentElement.parentElement;
        const itemName = item.querySelector('h4').innerText;
        const itemPrice = item.querySelector('h5').innerText;
        const cartItem = document.createElement('li');
        cartItem.innerText = `${itemName} - ${itemPrice}`;
        cartItems.appendChild(cartItem);
      });
    });
    
    const cartLink = document.getElementById('cartLink');
    cartLink.addEventListener('click', function(event) {
      event.preventDefault();
      cartItems.classList.toggle('show');
    });

    checkoutBtn.addEventListener('click', function() {
        // Clear all items from the cart
        cartItems.innerHTML = '';
      });

        
    buyBtn.addEventListener('click', function() {
        // Display a message and clear all items from the cart
        alert('Thanks for buying!');
        cartItems.innerHTML = '';
      });
  });
