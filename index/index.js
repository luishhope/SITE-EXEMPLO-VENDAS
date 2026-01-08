const shirts = document.querySelectorAll('.hero-images img');

shirts.forEach((shirt, index) => {
  shirt.style.animation = `float 4s ease-in-out ${index * 0.3}s infinite`;
});
