const messageContainer = document.querySelector(".message-container");
const editTitle = document.querySelector("#edit-title");
const editPrice = document.querySelector("#edit-price");
const editDescription = document.querySelector("#edit-description");
const editImg = document.querySelector("#edit-image");
const editFeatured = document.querySelector("#edit-featured");
import { apiProducts } from "./api.js";
import { displayMessage } from "./displayMessage.js";
import { getToken } from "./storage.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

export function submitEditForm(event) {
  event.preventDefault();

  messageContainer.innerHTML = "";

  const titleValue = editTitle.value;
  const priceValue = editPrice.value;
  const descriptionValue = editDescription.value;
  const imageValue = editImg.value;
  const featuredValue = editFeatured.checked;

  if (
    titleValue.length === 0 ||
    priceValue.length === 0 ||
    descriptionValue.length === 0
  ) {
    displayMessage(
      "warning",
      "Please input proper values",
      ".message-container"
    );
  } else {
    updateProduct(
      titleValue,
      priceValue,
      descriptionValue,
      imageValue,
      featuredValue
    );
  }
}

async function updateProduct(title, price, description, image, featured) {
  const singleProduct = "https://fakestoreapi.com/carts" + id;

  const token = getToken();

  const data = JSON.stringify({
    title: title,
    price: price,
    description: description,
    image_url: image,
    featured: featured,
  });

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(singleProduct, options);
    const json = await response.json();

    if (json.updated_at) {
      displayMessage("success", "Product updated", ".message-container");
    }

    if (json.error) {
      displayMessage("error", json.error, ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
