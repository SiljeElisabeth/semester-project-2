const productContainer = document.querySelector(".product-item");
const descriptionBox = document.querySelector(".description-box");
import { handleCart } from "../utils/handleCart.js";
import { getFromStorage, storageKey } from "../utils/storage.js";

const cart = getFromStorage(storageKey);

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
  console.log(product);
  productContainer.innerHTML = `<img src="${product.image}" />
                                <h3>${product.title}</h3>
                                <p>$${product.price}</p> 
                                <div class="cta-container">
                                  <button id="add-to-cart" data-id="${product.id}" data-image="${product.image}" data-title="${product.title}" data-price="${product.price}" class="${buttonClass}">${buttonText}</button>
                                </div>`;

  descriptionBox.innerHTML = ` <h4>Description:</h4>
                                <p>
                                ${product.description}
                                </p>`;

  const addToCart = document.querySelector("#add-to-cart");

  addToCart.addEventListener("click", handleCart);
}
