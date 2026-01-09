const shirts = document.querySelectorAll('.hero-images img');

shirts.forEach((shirt, index) => {
  shirt.style.animation = `float 4s ease-in-out ${index * 0.3}s infinite`;
});

document.querySelectorAll('.expand-arrow').forEach(button => {
  button.addEventListener('click', () => {
    const section = button.closest('.store-section');
    section.classList.toggle('expanded');
  });
});
const productCards = document.querySelectorAll(".product-card");

productCards.forEach(card => {
  card.addEventListener("click", () => {
    const params = new URLSearchParams({
      id: card.dataset.id,
      name: card.dataset.name,
      price: card.dataset.price,
      image: card.dataset.image,
      description: card.dataset.description
    });

    window.location.href = `product.html?${params.toString()}`;
  });
});
