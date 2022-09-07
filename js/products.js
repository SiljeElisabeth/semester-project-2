import { apiProducts } from "./utils/api.js";

(async function fetchProducts() {
  try {
    const response = await fetch(apiProducts);
    const products = await response.json();

    createHtmlProducts(products);
  } catch (error) {
    console.log(error);
  }
})();

const productGridContainer = document.querySelector(".product-grid-container");

export async function createHtmlProducts(products) {
  console.log(products);
  products.forEach(function (product) {
    console.log(product.id);
    productGridContainer.innerHTML += `  <a href="product-detail.html?id=${product.id}">
                                          <div class="card mb-3">
                                            <img
                                              src="${product.image.url}"
                                              class="card-img-top card-img"
                                              alt="..."
                                            />
                                            <div class="card-body">
                                              <h5 class="card-title">${product.title}</h5>
                                              <p class="card-text">${product.price}</p>
                                            </div>
                                          </div>
                                          </a>`;
  });
}
