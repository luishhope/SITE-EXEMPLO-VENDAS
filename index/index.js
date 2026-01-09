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
