const addToCartButtons = document.querySelectorAll(".add-to-cart");
const cartItemsList = document.getElementById("cart-items");

const cart = [];

addToCartButtons.forEach((button, index) => {
    button.addEventListener("click", () => {
        const productName = button.getAttribute("data-product");
        const productPrice = parseFloat(button.getAttribute("data-price"));
        const product = { name: productName, price: productPrice };

        cart.push(product);
        updateCartItems();
    });
});

function updateCartItems() {
    cartItemsList.innerHTML = "";

    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.className = "cart-item";
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(listItem);
    });
}
