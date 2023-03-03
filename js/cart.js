import { createNav } from "./components/createNav.js";
import { getFromStorage } from "./utils/storage.js";
import { handleCartRemove } from "./utils/handleCart.js";
import { storageKey } from "./utils/storage.js";
import { goBack } from "./utils/goBack.js";
import { displayMessage } from "./utils/displayMessage.js";

const backBtn = document.querySelector(".fa-angle-left");
const cartContainer = document.querySelector(".cart-grid");
const cartSummary = document.querySelector(".total-container");

createNav();

const currentCart = getFromStorage(storageKey);
let total = 0;

if (currentCart.length === 0) {
  displayMessage("message", "Your cart is empty", ".message-container");
}

currentCart.forEach((cartItems) => {
  console.log(cartItems);
  cartContainer.innerHTML += `  <a href="product-detail.html?id=${cartItems.id}">
                                  <img src="${cartItems.image}" /> 
                                </a>
                                <div class="cart-info">
                                  <h2>${cartItems.title}</h2>
                                  <p>$${cartItems.price}</p>
                                </div>
                                <div class="remove-item">
                                  <button class="cart-remove-btn" id="remove-cart-item" data-id="${cartItems.id}">Remove item</button>
                                </div>`;

  total += parseInt(cartItems.price);

  cartSummary.innerHTML = `  <h3>Total:</h3>
                            <h4>$${total}</h4>`;

  const removeBtn = document.querySelectorAll("#remove-cart-item");

  removeBtn.forEach((removeBtns) => {
    removeBtns.addEventListener("click", handleCartRemove);
  });
});

backBtn.addEventListener("click", goBack);
