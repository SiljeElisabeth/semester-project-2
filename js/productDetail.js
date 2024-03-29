import { apiProducts } from "./utils/api.js";
import { createHtmlProductDetail } from "./components/createHtmlDetail.js";
import { createNav } from "./components/createNav.js";
import { goBack } from "./utils/goBack.js";
const backBtn = document.querySelector(".fa-angle-left");

createNav();

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const singleProduct = apiProducts + "/" + id;

(async function fetchProducts() {
  try {
    const response = await fetch(singleProduct);
    const product = await response.json();

    createHtmlProductDetail(product);
  } catch (error) {
    console.log(error);
  }
})();

backBtn.addEventListener("click", goBack);
