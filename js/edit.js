import { createNav } from "./components/createNav.js";
import { goBack } from "./utils/goBack.js";
import { apiProducts } from "./utils/api.js";
import { createHtmlEdit } from "./components/createHtmlEdit.js";
import { submitEditForm } from "./utils/handleEdit.js";
import { getToken } from "./utils/storage.js";

const backBtn = document.querySelector(".fa-angle-left");
const editForm = document.querySelector("#edit-form");

createNav();

backBtn.addEventListener("click", goBack);

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
const singleProduct = apiProducts + "/" + id;

const token = getToken();
const noToken = token.length === 0;

if (noToken) {
  document.location.href = "index.html";
}

(async function fetchProducts() {
  try {
    const response = await fetch(singleProduct);
    const product = await response.json();

    createHtmlEdit(product);
  } catch (error) {
    console.log(error);
  }
})();

editForm.addEventListener("submit", submitEditForm);
