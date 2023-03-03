const viewContainer = document.querySelector("#tab-view-container");

export function createHtmlAdmin(products) {
  products.forEach((product) => {
    viewContainer.innerHTML += ` <div class="tab-view-item">
                                    <hr>
                                    <h4>Name: ${product.title}</h4>
                                    <p>Price: ${product.price}</p>
                                    <div class="edit-cta-container">
                                    <a href="edit.html?id=${product.id}" id="edit" class="edit-cta">Edit</a>
                                    </div>
                                    <div class="descript-img-container">
                                    <p><strong>Description:</strong>${product.description}
                                    </p>
                                    <img src=${product.image}   
                                    alt="purse" 
                                    />
                                    </div>
                                </div>`;
  });
}
