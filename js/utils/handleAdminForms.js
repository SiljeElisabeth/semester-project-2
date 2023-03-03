import { displayMessage } from "./displayMessage.js";
import { apiProducts } from "./api.js";
import { getToken } from "./storage.js";
const addTitle = document.querySelector("#add-title");
const addForm = document.querySelector("#add-form");
const addPrice = document.querySelector("#add-price");
const addDescription = document.querySelector("#add-description");
const addFeatured = document.querySelector("#add-featured");
const addImageUrl = document.querySelector("#add-image-url");
const messageContainer = document.querySelector(".message-container");

export function submitAddForm(event) {
  event.preventDefault();

  messageContainer.innerHTML = "";

  const titleValue = addTitle.value.trim();
  const priceValue = parseFloat(addPrice.value);
  const descriptionValue = addDescription.value.trim();
  const featuredValue = addFeatured.checked;
  const imageUrlValue = addImageUrl.value;

  if (
    titleValue.length === 0 ||
    isNaN(priceValue) ||
    descriptionValue.length === 0 ||
    imageUrlValue.length === 0
  ) {
    displayMessage(
      "warning",
      "Please input proper values",
      ".message-container"
    );
  } else
    addProduct(
      titleValue,
      priceValue,
      descriptionValue,
      featuredValue,
      imageUrlValue
    );
}

async function addProduct(title, price, description, featured, imageUrl) {
  const productData = JSON.stringify({
    title: title,
    price: price,
    featured: featured,
    description: description,
    image_url: imageUrl,
  });

  const token = getToken();

  const options = {
    method: "POST",
    body: productData,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(apiProducts, options);
    const json = await response.json();
    console.log(json);

    if (json.id) {
      displayMessage("success", "Product created", ".message-container");
      addForm.reset();
    }

    if (json.error) {
      displayMessage("error", "An error has occurred", ".message-container");
      console.log(error);
    }
  } catch (error) {
    displayMessage("error", "An error has occurred", ".message-container");
    console.log(error);
  }
}
