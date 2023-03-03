export const tokenKey = "token";
export const userKey = "user";
export const storageKey = "cart";

export function getFromStorage(key) {
  const cart = localStorage.getItem(key);
  if (!cart) {
    return [];
  } else {
    return JSON.parse(cart);
  }
}

export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

/* export function getUsername() {
  const user = getFromStorage(userKey);
  if (user) {
    return user.username;
  }
  return null;
} */

export function saveToken(token) {
  saveToStorage(tokenKey, token);
}

export function getToken() {
  return getFromStorage(tokenKey);
}

export function saveUser(user) {
  saveToStorage(userKey, user);
}

export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
