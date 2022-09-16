const username = document.querySelector(".username");
const password = document.querySelector(".password");
const passwordError = document.querySelector(".password-error");
const usernameError = document.querySelector(".username-error");
const messageContainer = document.querySelector(".message-container");

import { displayMessage } from "./displayMessage.js";
import { baseApi } from "./api.js";
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
  const authUrl = baseApi + "auth/local";
  const data = JSON.stringify({ identifier: username, password: password });

  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
    },
  };

  try {
    const response = await fetch(authUrl, options);
    const json = await response.json();

    console.log(json);
    messageContainer.innerHTML = "";

    if (json.user) {
      saveToken(json.jwt);
      saveUser(json.user);

      location.href = "admin.html";
    }
    if (json.error) {
      displayMessage("warning", "Invalid login details", ".message-container");
    }
  } catch (error) {
    console.log(error);
  }
}
