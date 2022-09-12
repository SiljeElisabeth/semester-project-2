const productContainer = document.querySelector(".product-item");
const descriptionBox = document.querySelector(".description-box");
import { handleClick } from "../utils/handleClick.js";
import { getExistingProduct } from "../utils/storage.js";
import { createNav } from "./createNav.js";
createNav();

const cart = getExistingProduct();

export async function createHtmlProductDetail(product) {
  let buttonClass = "add-to-cart";
  let buttonText = "Add to cart";

  const doesItemExist = cart.find((item) => {
    return parseInt(item.id) === product.id;
  });

  if (doesItemExist) {
    buttonClass = "remove-from-cart";
    buttonText = "Remove from cart";
  }
  productContainer.innerHTML = `<img src="${product.image.url}" />
                                <h3>${product.title}</h3>
                                <p>$${product.price}</p> 
                                <div class="cta-container">
                                  <button id="add-to-cart" data-id="${product.id}" data-img="${product.image.url}" data-title="${product.title}" data-price="${product.price}" class="${buttonClass}">${buttonText}</button>
                                </div>`;

  descriptionBox.innerHTML = ` <h4>Description:</h4>
                                <p>
                                ${product.description}
                                </p>`;

  const addToCart = document.querySelector("#add-to-cart");

  addToCart.addEventListener("click", handleClick);
}
