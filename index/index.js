/* ANIMAÇÃO CAMISAS */
const shirts = document.querySelectorAll('.hero-images img');
shirts.forEach((shirt, index) => {
  shirt.style.animation = `float 4s ease-in-out ${index * 0.3}s infinite`;
});

/* EXPANDIR SEÇÕES */
document.querySelectorAll('.expand-arrow').forEach(button => {
  button.addEventListener('click', () => {
    button.closest('.store-section').classList.toggle('expanded');
  });
});

/* IR PARA PRODUTO */
document.querySelectorAll(".product-card").forEach(card => {
  card.addEventListener("click", () => {
    const params = new URLSearchParams(card.dataset);
    window.location.href = `product.html?${params.toString()}`;
  });
});

/* CONTADOR DO CARRINHO */
function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const count = cart.reduce((acc, item) => acc + item.quantity, 0);
  document.querySelector(".cart-count").textContent = count;
}

updateCartCount();
