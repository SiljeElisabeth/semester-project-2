import { getToken } from "./storage.js";
import { apiProducts } from "./api.js";
import { displayMessage } from "./displayMessage.js";

export function deleteProduct(id) {
  const deleteContainer = document.querySelector(".delete-container");

  deleteContainer.innerHTML = `<button id="delete" class="delete-cta">Delete</button>`;
  const deleteBtn = document.querySelector("#delete");

  deleteBtn.onclick = async function () {
    const doDelete = confirm("Are you sure you want to delete this product?");
    console.log(doDelete);
    if (doDelete) {
      const url = apiProducts + "/" + id;

      const token = getToken();

      const options = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const response = await fetch(url, options);
        const json = await response.json();

        location.href = "admin.html";
      } catch (error) {
        displayMessage("error", "an error has occured", ".message-container");
        console.log(error);
      }
    }
  };
}
