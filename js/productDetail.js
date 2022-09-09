import { apiProducts } from "./utils/api.js";
import { createHtmlProductDetail } from "./components/createHtmlDetail.js";
import { getExistingProduct, saveCart } from "./utils/storage.js";

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

export function handleClick() {
  this.classList.toggle("remove-from-cart");
  this.classList.toggle("add-to-cart");

  const title = this.dataset.title;
  const img = this.dataset.img;
  const price = this.dataset.price;
  const id = this.dataset.id;

  const currentCart = getExistingProduct();

  const itemExsist = currentCart.find((cartItem) => cartItem.id === id);

  if (!itemExsist) {
    const cartItem = {
      title: title,
      img: img,
      price: price,
      id: id,
    };
    currentCart.push(cartItem);
    saveCart(currentCart);
  } else {
    const newCart = currentCart.filter((cartItem) => cartItem.id !== id);
    saveCart(newCart);
  }
}
