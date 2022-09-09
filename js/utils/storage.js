export function getExistingProduct() {
  const cart = localStorage.getItem("cartItem");
  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

export function saveCart(cart) {
  localStorage.setItem("cartItem", JSON.stringify(cart));
}
