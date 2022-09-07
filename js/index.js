import { apiProducts } from "./utils/api.js";
import { homeBannerApi } from "./utils/api.js";
import { createHtmlHome } from "./components/createHtml.js";

(async function fetchProducts() {
  try {
    const response = await fetch(apiProducts);
    const products = await response.json();

    const responsebanner = await fetch(homeBannerApi);
    const homeBanner = await responsebanner.json();

    createHtmlHome(products, homeBanner);
  } catch (error) {
    console.log(error);
  }
})();
