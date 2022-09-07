const featuredGrid = document.querySelector(".ftd-grid");
const newsContainer = document.querySelector(".news-container");
const bannerContainer = document.querySelector(".home-banner-container");

export async function createHtmlHome(products, banner) {
  bannerContainer.innerHTML = ` <img
                                        src="${banner.hero_banner.url}"
                                        class="img-fluid"
                                        alt="${banner.hero_banner.alternativeText}"
                                    />`;

  for (let i = 0; i < products.length; i++) {
    if (i === 4) {
      break;
    }
    if (products[i].featured === true) {
      console.log(i);
      featuredGrid.innerHTML += `<div class="card mb-3">
                                    <img
                                    src="${products[i].image.url}"
                                    class="card-img-top card-img"
                                    alt="${products[i].image.alternativeText}"
                                    />
                                    <div class="card-body">
                                    <h5 class="card-title">${products[i].title}</h5>
                                    <p class="card-text">$${products[i].price}</p>
                                    </div>
                                </div>`;
    }
  }

  newsContainer.innerHTML = `<h2>News</h2>
                                    <img
                                    src="${products[1].image.url}"
                                    class="img-fluid"
                                    alt="Tan bag"
                                    />`;
}
