let cart = [];
function addToCart(productName, price, quantity) {
    const existingProductIndex = cart.findIndex(item => item.productName === productName);
    if (existingProductIndex !== -1) {
      cart[existingProductIndex].quantity += quantity;
    } else {
      cart.push({productName, price, quantity });
    }
  updateCartDisplay();
}
function removeFromCart(productName) {
  const productNameIndex = cart.findIndex(item => item.productName === productName);   
    if (productNameIndex !== -1) {
        cart.splice(productNameIndex, 1);
    }
  updateCartDisplay();
}
function calculateTotalPrice() {
    let totalPrice = 0;
    cart.forEach(item => {
        totalPrice += item.price * item.quantity;
    });
    return totalPrice;
}
function updateCartDisplay() {
    const cartCountElement = document.getElementById("cart-count");
    const cartTotalElement = document.getElementById("cart-total");
    const cartItemsContainer = document.getElementById("cart-items");
    let totalCount = 0;
    let totalPrice = 0;

    // Clear the existing content of the cart items container
    cartItemsContainer.innerHTML = "";

    // Iterate over each item in the cart
    cart.forEach(item => {
        totalCount += item.quantity;
        totalPrice += item.price * item.quantity;

        // Create a new <div> element for each item
        const itemDiv = document.createElement("div");
        itemDiv.classList.add("cart-item");

        // Set the inner HTML of the item <div> to display the item details
        itemDiv.innerHTML = `
            <p><strong>Product:</strong> ${item.productName}</p>
            <p><strong>Price:</strong> £${item.price.toFixed(2)}</p>
            <p><strong>Quantity:</strong> ${item.quantity}</p>
        `;

        // Append the item <div> to the cart items container
        cartItemsContainer.appendChild(itemDiv);
    });

    // Update the total count and total price
    cartCountElement.textContent = totalCount;
    cartTotalElement.textContent = totalPrice.toFixed(2);

    // Update the cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart)); 
}
document.addEventListener("DOMContentLoaded", function() {
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
    updateCartDisplay();
  }
});
function getCartData() {
    let totalCount = 0;
    let totalPrice = 0;
    cart.forEach(item => {
      totalCount += item.quantity;
      totalPrice += item.price * item.quantity;
    });
    return { totalCount, totalPrice };
  }
function handleAddToCart(event) {
    const productName = document.getElementById("product-name").value;
    const price = parseFloat(document.getElementById("product-price").value); 
    const quantity = parseInt(document.getElementById("quantity").value); 
    addToCart(productName, price, quantity);
    updateCartDisplay(); // <-- Add this line
    event.preventDefault();
}
document.addEventListener("DOMContentLoaded", function() {
    // Check if the document is already loaded
    if (document.readyState === 'loading') {
        // If the document is still loading, wait for it to be fully loaded
        document.addEventListener('DOMContentLoaded', addClearBasketEventListener);
    } else {
        // If the document is already loaded, directly call the function to add event listener
        addClearBasketEventListener();
    }
});

function addClearBasketEventListener() {
    const clearBasketButton = document.getElementById("clearBasketBtn"); // Select button with ID 'clearBasketBtn'
    if (clearBasketButton) {
        clearBasketButton.addEventListener("click", function() {
            clearCart(); 
        });
    } else {
        console.log("Clear basket button not found!");
    }
}
function clearCart() {
    cart = [];  
    updateCartDisplay();  
}