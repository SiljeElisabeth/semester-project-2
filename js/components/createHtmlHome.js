const featuredGrid = document.querySelector(".ftd-grid");
const newsContainer = document.querySelector(".news-container");
const bannerContainer = document.querySelector(".home-banner-container");

export async function createHtmlHome(products, banner) {
  bannerContainer.innerHTML = ` <img
                                        src="${banner.hero_banner.url}"
                                        class="img-fluid"
                                        alt="${banner.hero_banner.alternativeText}"
                                    />`;

  const featuredProducts = products.filter(checkFeatured);

  function checkFeatured(products) {
    return products.featured === true;
  }
  for (let i = 0; i < featuredProducts.length; i++) {
    if (i === 4) {
      break;
    }
    featuredGrid.innerHTML += `<a class="featured-card" href="product-detail.html?id=${featuredProducts[i].id}">
                                  <div class="card mb-3">
                                    <img
                                    src="${featuredProducts[i].image_url}"
                                    class="card-img-top card-img"
                                    alt="purse"
                                    />
                                    <div class="card-body">
                                    <h5 class="card-title">${featuredProducts[i].title}</h5>
                                    <p class="card-text">$${featuredProducts[i].price}</p>
                                    </div>
                                   </div>
                                </a>`;
  }

  const newProduct = products[products.length - 1].image_url;

  newsContainer.innerHTML = `<h2>News</h2>
                                    <img
                                    src="${newProduct}"
                                    class="img-fluid"
                                    alt="purse"
                                    />`;
}
