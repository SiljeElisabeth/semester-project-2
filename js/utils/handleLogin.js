const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordError = document.querySelector(".password-error");
const usernameError = document.querySelector(".username-error");
const messageContainer = document.querySelector(".message-container");

import { displayMessage } from "./displayMessage.js";
import { apiLogin } from "./api.js";
import { saveToken, saveUser } from "./storage.js";

export function submitForm(event) {
  event.preventDefault();

  const usernameValue = username.value.trim();
  const passwordValue = password.value.trim();

  passwordError.innerHTML = "";
  usernameError.innerHTML = "";

  if (usernameValue.length === 0) {
    displayMessage("error", "Please enter your username", ".username-error");
  }
  if (passwordValue.length === 0) {
    displayMessage("error", "Please enter your password", ".password-error");
  }

  login(usernameValue, passwordValue);
}

async function login(username, password) {
  const options = {
    method: "POST",
    body: JSON.stringify({
      username: "user1",
      password: "pass123",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(apiLogin, options);
    const json = await response.json();
    console.log(json);

    messageContainer.innerHTML = "";

    if (json.accessToken) {
      saveToken(json.accessToken);
      location.href = "admin.html";
    }
    if (json.error) {
      displayMessage("warning", "Invalid login details", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}

async function getUsers() {
  fetch("https://fakestoreapi.com/users")
    .then((res) => res.json())
    .then((json) => console.log(json));
}

getUsers();
