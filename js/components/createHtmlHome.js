const featuredGrid = document.querySelector(".ftd-grid");
const loader = document.querySelector(".loader");

export async function createHtmlHome(products) {
  loader.style.display = "none";

  for (let i = 0; i < products.length; i++) {
    featuredGrid.innerHTML += `<a class="featured-card" href="product-detail.html?id=${products[i].id}">
                                  <div class="card mb-3">
                                    <img
                                    src="${products[i].image}"
                                    class="card-img-top card-img"
                                    alt="purse"
                                    />
                                    <div class="card-body">
                                    <h2 class="card-title">${products[i].title}</h2>
                                    <p class="card-text">$${products[i].price}</p>
                                    </div>
                                   </div>
                                </a>`;
  }
}
