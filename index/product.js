const params = new URLSearchParams(window.location.search);

const product = {
  id: params.get("id"),
  name: params.get("name"),
  price: params.get("price"),
  image: params.get("image"),
  description: params.get("description"),
  size: "M",
  quantity: 1
};

document.getElementById("productImage").src = product.image || "";
document.getElementById("productName").textContent = product.name || "";
document.getElementById("productPrice").textContent = `R$ ${product.price}`;
document.getElementById("productDescription").textContent = product.description || "";

/* TAMANHO */
document.querySelectorAll(".size-options button").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".size-options button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    product.size = btn.dataset.size;
  });
});

/* QUANTIDADE */
const qtyInput = document.getElementById("quantity");

document.getElementById("plus").onclick = () => {
  qtyInput.value++;
  product.quantity = Number(qtyInput.value);
};

document.getElementById("minus").onclick = () => {
  if (qtyInput.value > 1) {
    qtyInput.value--;
    product.quantity = Number(qtyInput.value);
  }
};

qtyInput.addEventListener("change", () => {
  if (qtyInput.value < 1) qtyInput.value = 1;
  product.quantity = Number(qtyInput.value);
});

/* CARRINHO */
document.querySelector(".add-to-cart").addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));

  alert("Produto adicionado ao carrinho!");
});
