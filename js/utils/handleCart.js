import { getFromStorage, saveToStorage } from "./storage.js";
import { storageKey } from "./storage.js";

const currentCart = getFromStorage(storageKey);

export function handleCart() {
  this.classList.toggle("remove-from-cart");
  this.classList.toggle("add-to-cart");

  const title = this.dataset.title;
  const img = this.dataset.img;
  const price = this.dataset.price;
  const id = this.dataset.id;

  const itemExsist = currentCart.find((cartItem) => cartItem.id === id);

  if (!itemExsist) {
    const cartItem = {
      title: title,
      img: img,
      price: price,
      id: id,
    };
    currentCart.push(cartItem);
    saveToStorage(storageKey, currentCart);
  } else {
    const newCart = currentCart.filter((cartItem) => cartItem.id !== id);
    saveToStorage(storageKey, newCart);
  }
  location.reload();
}

export function handleCartRemove() {
  const id = this.dataset.id;

  const itemExsist = currentCart.find((cartItem) => cartItem.id === id);

  if (itemExsist) {
    const newCart = currentCart.filter((cartItem) => cartItem.id !== id);
    saveToStorage(storageKey, newCart);
  }
  location.reload();
}
