import { createNav } from "./components/createNav.js";
import { submitForm } from "./utils/handleLogin.js";
const loginForm = document.querySelector(".login-container");

createNav();

loginForm.addEventListener("submit", submitForm);
