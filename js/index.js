import { apiHomeProducts } from "./utils/api.js";
import { createHtmlHome } from "./components/createHtmlHome.js";
import { createNav } from "./components/createNav.js";

createNav();

(async function fetchProducts() {
  try {
    const response = await fetch(apiHomeProducts);
    const products = await response.json();
    createHtmlHome(products);
  } catch (error) {
    console.log(error);
  }
})();
