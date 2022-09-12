import { apiProducts } from "./utils/api.js";
import { createHtmlProducts } from "./components/createHtmlProducts.js";
import { searchProducts } from "./components/search.js";
import { createNav } from "./components/createNav.js";

createNav();

(async function fetchProducts() {
  try {
    const response = await fetch(apiProducts);
    const products = await response.json();

    createHtmlProducts(products);
    searchProducts(products);
  } catch (error) {
    console.log(error);
  }
})();
