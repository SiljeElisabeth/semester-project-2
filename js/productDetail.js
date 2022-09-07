import { apiProducts } from "./utils/api.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

console.log(id);

const singleProduct = apiProducts + "/" + id;

(async function fetchProducts() {
  try {
    const response = await fetch(singleProduct);
    const products = await response.json();

    createHtmlProductDetail(products);
  } catch (error) {
    console.log(error);
  }
})();

const productContainer = document.querySelector(".product-item");
const descriptionBox = document.querySelector(".description-box");

export async function createHtmlProductDetail(product) {
  productContainer.innerHTML = `<img src="${product.image.url}" />
                                <h3>${product.title}</h3>
                                <p>${product.price}</p>`;
  descriptionBox.innerHTML = ` <h4>Description:</h4>
                                <p>
                                ${product.description}
                                </p>`;
}
