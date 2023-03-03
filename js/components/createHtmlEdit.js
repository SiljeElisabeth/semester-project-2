const editTitle = document.querySelector("#edit-title");
const editPrice = document.querySelector("#edit-price");
const editDescription = document.querySelector("#edit-description");
const editImg = document.querySelector("#edit-image");
const editId = document.querySelector("#edit-id");
const editFeatured = document.querySelector("#edit-featured");
const imagePreview = document.querySelector(".img-preview");
import { deleteProduct } from "../utils/handleDelete.js";

export function createHtmlEdit(product) {
  editTitle.value = product.title;
  editPrice.value = product.price;
  editImg.value = product.image;
  editDescription.value = product.description;
  editId.value = product.id;

  if (product.featured) {
    editFeatured.checked = product.featured;
  }

  imagePreview.innerHTML = `<img src="${editImg.value}" alt="purse"> `;
  deleteProduct(product.id);
}
