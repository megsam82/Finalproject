// Subscribe Alert Function
function subscribeAlert() {
    alert("Thank you for subscribing.");
}

// Add to Cart - Uses sessionStorage
function addToCart(itemName, price) {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    // Store both the name and the price of the item
    cart.push({ name: itemName, price: price });
    sessionStorage.setItem("cart", JSON.stringify(cart));
    alert("Item added to the cart");
}

// View Cart - Displays items in sessionStorage
function viewCart() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    let cartList = cart.length
        ? cart.map(item => `${item.name} - $${item.price}`).join("\n")
        : "Cart is empty.";
    alert("Your Cart:\n" + cartList);
}

// Clear Cart - Empties sessionStorage
function clearCart() {
    if (sessionStorage.getItem("cart")) {
        sessionStorage.removeItem("cart");
        alert("Cart cleared");
    } else {
        alert("No items to clear.");
    }
}

// Process Order - Clears sessionStorage and displays a message
function processOrder() {
    let cart = JSON.parse(sessionStorage.getItem("cart")) || [];
    if (cart.length === 0) {
        alert("Cart is empty.");
    } else {
        sessionStorage.removeItem("cart");
        alert("Thank you for your order.");
    }
}

// Contact Form Submission - Uses localStorage
function submitForm(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let message = document.getElementById("message").value;
    
    if (name && message) {
        localStorage.setItem("customerName", name);
        localStorage.setItem("customerMessage", message);
        alert("Thank you for your message. Your information has been saved.");
    } else {
        alert("Please fill in all fields.");
    }
}
