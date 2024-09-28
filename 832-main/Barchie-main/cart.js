// Initialize cart array
let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Function to add item to cart
function addToCart(product) {
    cart.push(product);
    updateCartCount();
    saveCart();
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    if (cartCount) {
        cartCount.textContent = cart.length;
    }
}

// Function to save cart to localStorage
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// Function to load and display cart items (for cart.html)
function displayCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalAmount = document.getElementById('total-amount');
    
    if (cartItemsContainer && totalAmount) {
        let total = 0;
        cartItemsContainer.innerHTML = '';

        cart.forEach((item, index) => {
            const itemElement = document.createElement('div');
            itemElement.innerHTML = `
                <p>${item.name} - $${item.price}</p>
                <button onclick="removeFromCart(${index})">Remove</button>
            `;
            cartItemsContainer.appendChild(itemElement);
            total += parseFloat(item.price);
        });

        totalAmount.textContent = total.toFixed(2);
    }
}

// Function to remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
    displayCartItems();
    updateCartCount();
}

// Add event listeners to "Add to Cart" buttons
document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            const product = {
                id: button.dataset.productId,
                name: button.dataset.productName,
                price: button.dataset.productPrice
            };
            addToCart(product);
        });
    });

    // Update cart count on page load
    updateCartCount();

    // If on cart page, display cart items
    if (window.location.pathname.includes('cart.html')) {
        displayCartItems();
    }
});