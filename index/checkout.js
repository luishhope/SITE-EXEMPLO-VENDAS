const cart = JSON.parse(localStorage.getItem("cart")) || [];

const summaryItems = document.getElementById("summaryItems");
const summaryTotal = document.getElementById("summaryTotal");

let total = 0;

cart.forEach(item => {
  const div = document.createElement("div");
  const subtotal = item.price * item.quantity;
  total += subtotal;

  div.textContent = `${item.name} (${item.quantity}x)`;
  summaryItems.appendChild(div);
});

summaryTotal.textContent = `R$ ${total.toFixed(2)}`;

document.getElementById("checkoutForm").addEventListener("submit", e => {
  e.preventDefault();

  localStorage.removeItem("cart"); // limpa carrinho fake
  window.location.href = "succes.html";
});
