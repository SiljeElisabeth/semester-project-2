const productContainer = document.querySelector(".product-item");
const descriptionBox = document.querySelector(".description-box");
import { handleClick } from "../productDetail.js";
import { getExistingProduct } from "../utils/storage.js";
const smallCart = document.querySelector(".cart-icon-container a");
const bigCart = document.querySelector(".cart-list-item a");

const cart = getExistingProduct();

export async function createHtmlProductDetail(product) {
  const doesProductExist = cart.find((cartItem) => {
    console.log(cartItem.id, product.id);
    return cartItem.id === product.id;
  });

  const counter = cart.length;

  if (doesProductExist) {
    bigCart.innerHTML = counter;
  }

  productContainer.innerHTML = `<img src="${product.image.url}" />
                                <h3>${product.title}</h3>
                                <p>${product.price}</p> 
                                <div class="cta-container">
                                  <button data-id="${product.id}" data-img="${product.image.url}" data-title="${product.title}" data-price="${product.price}" class="add-to-cart">Add to cart</button>
                                </div>`;

  descriptionBox.innerHTML = ` <h4>Description:</h4>
                                <p>
                                ${product.description}
                                </p>`;

  const addToCart = document.querySelector(".add-to-cart");

  addToCart.addEventListener("click", handleClick);
}
