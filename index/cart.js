const container = document.getElementById("cartItems");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCart() {
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `
      <p class="empty-cart">Seu carrinho está vazio.</p>
    `;
    totalEl.textContent = "R$ 0,00";
    return;
  }

  let total = 0;

  cart.forEach((item, index) => {
    const price = Number(item.price);
    const subtotal = price * item.quantity;
    total += subtotal;

    const div = document.createElement("div");
    div.className = "cart-item";

    div.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      
      <div class="cart-info">
        <h2>${item.name}</h2>
        <span>Tamanho: ${item.size}</span>
        <span>Quantidade: ${item.quantity}</span>
        <div class="price">R$ ${subtotal.toFixed(2)}</div>
      </div>

      <div class="cart-actions">
        <button class="remove-btn" data-index="${index}">
          Remover
        </button>
      </div>
    `;

    container.appendChild(div);
  });

  totalEl.textContent = `R$ ${total.toFixed(2)}`;
document.getElementById("totalFinal").textContent = `R$ ${total.toFixed(2)}`;


  bindRemoveButtons();
}

function bindRemoveButtons() {
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const index = btn.dataset.index;
      cart.splice(index, 1);
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCart();
    });
  });
}

renderCart();

document.querySelector(".checkout-btn").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  window.location.href = "checkout.html";
});
