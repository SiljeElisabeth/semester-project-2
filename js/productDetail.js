import { apiProducts } from "./utils/api.js";
import { createHtmlProductDetail } from "./components/createHtmlDetail.js";
import { createNav } from "./components/createNav.js";
import { handleClick } from "./utils/handleClick.js";

createNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
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
