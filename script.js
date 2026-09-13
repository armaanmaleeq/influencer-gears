let cartCount = 0;

// Filter products by category with crisp active button styling
function filterCategory(category, btnElement) {
  // Reset button styles
  const buttons = document.querySelectorAll(".category-btn");
  buttons.forEach((btn) => {
    btn.className =
      "category-btn bg-white hover:bg-gray-100 text-[#111827] font-medium text-sm px-5 py-2.5 rounded-full border border-gray-200 transition-all duration-200";
  });

  // Highlight target active button
  if (btnElement) {
    btnElement.className =
      "category-btn active bg-[#d82b6b] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md transition-all duration-200";
  }

  // Show/Hide items based on filter category
  const items = document.querySelectorAll(".product-item");
  items.forEach((item) => {
    if (category === "all" || item.classList.contains(category)) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

// High-Contrast Interactive Cart Toast Handler
function addToCart(productName) {
  cartCount++;
  document.getElementById("cart-badge").innerText = cartCount;

  // Remove any existing toast
  const oldToast = document.getElementById("cart-toast");
  if (oldToast) oldToast.remove();

  // High contrast toast banner
  const toast = document.createElement("div");
  toast.id = "cart-toast";
  toast.className =
    "fixed bottom-6 right-6 bg-[#111827] text-white text-xs font-bold px-5 py-3.5 rounded-xl shadow-2xl z-50 flex items-center space-x-3 border border-gray-700 animate-bounce";
  toast.innerHTML = `<i class="fa-solid fa-circle-check text-emerald-400 text-base"></i><span>Added "${productName}" to cart!</span>`;
  document.body.appendChild(toast);

  setTimeout(() => {
    if (toast) toast.remove();
  }, 3500);
}

// Contact Form Handler
function handleContactSubmit(e) {
  e.preventDefault();
  document.getElementById("contact-success").classList.remove("hidden");
  e.target.reset();
  setTimeout(() => {
    document.getElementById("contact-success").classList.add("hidden");
  }, 4000);
}

// Newsletter Handler
function handleNewsletter(e) {
  e.preventDefault();

  const toast = document.createElement("div");
  toast.className =
    "fixed bottom-6 right-6 bg-[#111827] text-white text-xs font-bold px-5 py-3.5 rounded-xl shadow-2xl z-50 flex items-center space-x-3 border border-gray-700";
  toast.innerHTML = `<i class="fa-solid fa-paper-plane text-pink-400 text-base"></i><span>Thank you for subscribing!</span>`;
  document.body.appendChild(toast);

  e.target.reset();

  setTimeout(() => {
    toast.remove();
  }, 3500);
}
