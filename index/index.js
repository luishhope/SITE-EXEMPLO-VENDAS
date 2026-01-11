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
// SCROLL SUAVE PARA CATEGORIA
const categoryButtons = document.querySelectorAll(".category-item");

categoryButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const targetId = btn.dataset.target;
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }

    // opcional: destacar botão ativo
    categoryButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
  });
});
// SCROLL SUAVE PARA LINKS DE CATEGORIA DO FOOTER
document.querySelectorAll('.footer-col ul li a[data-target]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.dataset.target;
    const section = document.getElementById(targetId);

    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
