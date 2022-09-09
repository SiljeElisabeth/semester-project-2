const searchInput = document.querySelector("#search");
import { createHtmlProducts } from "./createHtmlProducts.js";

export function searchProducts(products) {
  searchInput.onkeyup = function (event) {
    const searchValue = this.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
      if (
        product.title.toLowerCase().includes(searchValue) ||
        product.description.toLowerCase().includes(searchValue)
      ) {
        return true;
      }
    });
    createHtmlProducts(filteredProducts);
    console.log(filteredProducts);
  };
}
