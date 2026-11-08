const cart = [];

const cartToggle = document.getElementById("cart-toggle");
const cartContainer = document.getElementById("cart-container");
const closeCart = document.getElementById("close-cart");

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");

// Open cart
cartToggle.addEventListener("click", () => {
  cartContainer.classList.toggle("active");
});

// Close cart
closeCart.addEventListener("click", () => {
  cartContainer.classList.remove("active");
});

// Add products
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".product-card");

    const name = card.querySelector("h3").textContent;
    const price = Number(
      card.querySelector(".price").textContent.replace("$", ""),
    );

    cart.push({ name, price });

    updateCart();
  });
});

// Update cart
function updateCart() {
  cartItems.innerHTML = "";

  if (cart.length === 0) {
    cartItems.innerHTML = "<p>Your cart is empty.</p>";
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");

    div.className = "cart-item";

    const name = document.createElement("span");
    name.textContent = item.name + " - $" + item.price.toFixed(2);

    const removeButton = document.createElement("button");
    removeButton.className = "remove-item";
    removeButton.textContent = "Remove";

    removeButton.addEventListener("click", () => {
      cart.splice(index, 1);
      updateCart();
    });

    div.append(name, removeButton);
    cartItems.appendChild(div);
  });

  cartCount.textContent = cart.length;

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  cartTotal.textContent = total.toFixed(2);
}

// Checkout placeholder
document.getElementById("checkout").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  alert("Checkout is not available yet!");
});
