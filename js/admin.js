const viewBtn = document.querySelector("#view");
const addBtn = document.querySelector("#add");
const addForm = document.querySelector("#add-form");
const messageContainer = document.querySelector(".message-container");

import { createNav } from "./components/createNav.js";
import { viewTab, addTab } from "./utils/tabs.js";
import { createHtmlAdmin } from "./components/createHtmlAdmin.js";
import { apiProducts } from "./utils/api.js";
import { getToken } from "./utils/storage.js";
import { submitAddForm } from "./utils/handleAdminForms.js";
import { displayMessage } from "./utils/displayMessage.js";

createNav();

viewBtn.addEventListener("click", viewTab);
addBtn.addEventListener("click", addTab);

const token = getToken();
const noToken = token.length === 0;

(async function fetchProducts() {
  messageContainer.innerHTML = "";
  try {
    const response = await fetch(apiProducts);
    const products = await response.json();

    createHtmlAdmin(products);

    if (noToken) {
      document.location.href = "index.html";
    }
  } catch (error) {
    displayMessage("error", "an error has occurred", ".message-container");
    console.log(error);
  }
})();

addForm.addEventListener("submit", submitAddForm);
