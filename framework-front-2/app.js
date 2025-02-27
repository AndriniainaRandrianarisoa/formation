// Initialiser notre framework
const productMap = createMap("#productContainer");

// Fonction pour afficher les produits
function renderProducts() {
  productMap.map(products, (product) => {
    return productMap.createElement(
      "div",
      {
        class: "product-card",
        "data-id": product.id
      },
      `
                <div class="product-image">${product.category}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">${product.price.toFixed(2)} €</div>
                <div class="${
                  product.stock < 5
                    ? "product-stock low-stock"
                    : "product-stock"
                }">
                    Stock: ${product.stock} unité${product.stock > 1 ? "s" : ""}
                </div>
                <button 
                    class="add-to-cart" 
                    onclick="addToCart('${product.id}')"
                >
                    Ajouter au panier
                </button>
            `
    );
  });
}

// Fonction pour ajouter au panier
function addToCart(productId) {
  const product = products.find((p) => p.id === parseInt(productId));
  if (product) {
    alert(`Produit ajouté : ${product.name}`);
  }
}

// Initialiser l'affichage
document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
});
