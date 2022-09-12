const mainNav = document.querySelector("#main-nav");
const smallNav = document.querySelector("#smallnav-container");

import { getExistingProduct } from "../utils/storage.js";

const cart = getExistingProduct();

export function createNav() {
  const pathname = document.location;

  mainNav.innerHTML = `<a href="index.html">
                            <img src="img/logo.png" id="main-logo" />
                       </a>
                        <ul>
                            <li><a class="${
                              pathname === "/index.html" ? "active" : ""
                            }" href="index.html">Home</a></li>
                            <li><a href="products.html" class="${
                              pathname === "/products.html" ? "active" : ""
                            }">Shop</a></li>
                            <li><a href="login.html" class="${
                              pathname === "/login.html" ? "active" : ""
                            }">Login</a></li>
                            <li>
                                <a href="cart.html" id="big-cart" class=" ${
                                  pathname === "/cart.html" ? "active" : ""
                                }"
                                ><img class="shopping-icon" src="img/iconCapital.png"
                                /></a>
                            </li>
                        </ul>`;
  smallNav.innerHTML = `<input type="checkbox" id="hamburger-check" />
                        <label for="hamburger-check" class="hamburger-button">
                          <div role="nav" id="sidebar-nav">
                            <ul>
                                <p>X</p>
                                <li>
                                  <a class="${
                                    pathname === "/index.html" ? "active" : ""
                                  }" href="index.html">Home
                                  </a>
                                </li>
                                <li>
                                  <a href="products.html" class="${
                                    pathname === "/products.html"
                                      ? "active"
                                      : ""
                                  }">Shop
                                  </a>
                                </li>
                                <li>
                                  <a href="login.html" class="${
                                    pathname === "/login.html" ? "active" : ""
                                  }">Login
                                  </a>
                                </li>
                                <li>
                                    <a href="cart.html" class="${
                                      pathname === "/cart.html" ? "active" : ""
                                    }">Cart
                                    </a>
                                </li>
                            </ul>
                          </div>
                        </label>

                        <div class="smallscreen-nav-container">
                            <a href="index.html">
                              <img class="small-logo" src="img/logosmall.png" alt="small logo"/>
                            </a>
                            
                          <div class="cart-icon-container">
                              <a id="small-cart" href="cart.html">
                                <img
                                    class="shopping-icon"
                                    src="/img/iconblack.png"
                                    alt="shopping cart icon"/>
                              </a>
                            </div>
                        </div>
                        <div class="overlay"></div>`;

  (function cartCounter() {
    const bigCart = document.querySelector("#big-cart");
    const smallCart = document.querySelector("#small-cart");

    const counter = cart.length;

    bigCart.innerHTML = `<img class="shopping-icon" 
                          src="img/iconCapital.png"
                          alt="shopping cart icon"/>
                          ${counter}`;
    smallCart.innerHTML = `<img
                            class="shopping-icon"
                            src="/img/iconblack.png"
                            alt="shopping cart icon"/>
                            ${counter}`;
  })();
}
