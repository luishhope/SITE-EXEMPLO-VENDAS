/* PARAMS */
const params = new URLSearchParams(window.location.search);

/* PRODUTO */
const product = {
  id: params.get("id"),
  name: params.get("name"),
  price: Number(params.get("price")),
  image: params.get("image"),
  description: params.get("description"),
  size: "M",
  quantity: 1
};

/* ELEMENTOS */
const productImage = document.getElementById("productImage");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");
const productDescription = document.getElementById("productDescription");

const qtyInput = document.getElementById("quantity");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");

const addToCartBtn = document.querySelector(".add-to-cart");
const toast = document.getElementById("toast");

/* RENDER */
productImage.src = product.image;
productName.textContent = product.name;
productPrice.textContent = `R$ ${product.price.toFixed(2)}`;
productDescription.textContent = product.description;

/* TAMANHO */
document.querySelectorAll(".size-options button").forEach(btn => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".size-options button")
      .forEach(b => b.classList.remove("active"));

    btn.classList.add("active");
    product.size = btn.dataset.size;
  });
});

/* QUANTIDADE */
plusBtn.onclick = () => {
  qtyInput.value++;
  product.quantity = Number(qtyInput.value);
};

minusBtn.onclick = () => {
  if (qtyInput.value > 1) {
    qtyInput.value--;
    product.quantity = Number(qtyInput.value);
  }
};

qtyInput.addEventListener("change", () => {
  if (qtyInput.value < 1) qtyInput.value = 1;
  product.quantity = Number(qtyInput.value);
});

/* TOAST */
let toastTimer;

function showToast(message) {
  clearTimeout(toastTimer);

  toast.textContent = message;

  // reset animação
  toast.classList.remove("show");
  void toast.offsetWidth; // força reflow

  toast.classList.add("show");

  toastTimer = setTimeout(() => {
    toast.classList.remove("show");
  }, 2000);
}

/* ADD AO CARRINHO (SEM DUPLICAR) */
addToCartBtn.onclick = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const existingItem = cart.find(
    item => item.id === product.id && item.size === product.size
  );

  if (existingItem) {
    existingItem.quantity += product.quantity;
  } else {
    cart.push({ ...product });
  }

  localStorage.setItem("cart", JSON.stringify(cart));

  showToast("Seu produto foi adicionado ao carrinho");
};
