const productGridContainer = document.querySelector(".product-grid-container");

export async function createHtmlProducts(products) {
  productGridContainer.innerHTML = "";

  products.forEach(function (product) {
    productGridContainer.innerHTML += `  <a href="product-detail.html?id=${product.id}">
                                            <div class="card mb-3">
                                              <img
                                                src="${product.image.url}"
                                                class="card-img-top card-img"
                                                alt="..."
                                              />
                                              <div class="card-body">
                                                <h5 class="card-title">${product.title}</h5>
                                                <p class="card-text">$${product.price}</p>
                                              </div>
                                            </div>
                                            </a>`;
  });
}
