const params = new URLSearchParams(window.location.search);

const product = {
  id: params.get("id"),
  name: params.get("name"),
  price: params.get("price"),
  image: params.get("image"),
  description: params.get("description")
};

document.getElementById("productImage").src = product.image || "";
document.getElementById("productName").textContent = product.name || "Produto";
document.getElementById("productPrice").textContent = product.price ? `R$ ${product.price}` : "";
document.getElementById("productDescription").textContent = product.description || "";

document.querySelector(".add-to-cart").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Produto adicionado ao carrinho!");
});
