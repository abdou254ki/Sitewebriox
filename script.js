"use strict";

const whatsappNumber = "213557235850";

const products = [
  {
    id: "chatgpt-plus",
    name: "ChatGPT Plus",
    category: "ai",
    categoryLabel: "الذكاء الاصطناعي",
    price: "1600 دج",
    duration: "شهر واحد / 1 Mois",
    badge: "الأكثر طلباً",
    image: "assets/products/chatgpt.png",
    shortDescription: "اشتراك ذكاء اصطناعي للكتابة، الدراسة، البرمجة وصناعة المحتوى.",
    description: "ChatGPT Plus يساعدك في الكتابة، الدراسة، البرمجة، التسويق، توليد الأفكار وصناعة المحتوى بشكل أسرع وأكثر احترافية.",
    features: [
      "مناسب للطلاب وصناع المحتوى",
      "يساعد في الكتابة والتلخيص والبرمجة",
      "مناسب للتسويق والأفكار",
      "دعم مباشر بعد الشراء"
    ],
    activation: "يتم التفعيل على الحساب الشخصي الخاص بالزبون حسب الطريقة المتوفرة، ويتم توضيح التفاصيل عبر واتساب قبل إتمام الطلب.",
    requiredFromClient: [
      "الحساب الشخصي أو البريد حسب طريقة التفعيل",
      "مدة الاشتراك المطلوبة",
      "إثبات الدفع"
    ],
    deliveryTime: "من 10 دقائق إلى 24 ساعة حسب الضغط والتوفر.",
    warranty: "ضمان حسب نوع الباقة وطريقة التفعيل.",
    note: "يتم تأكيد كل تفاصيل الاشتراك مع العميل عبر واتساب قبل الدفع."
  },
  {
    id: "gemini-pro",
    name: "Gemini Pro",
    category: "ai",
    categoryLabel: "الذكاء الاصطناعي",
    price: "2000 دج",
    duration: "شهر واحد",
    badge: "متوفر",
    image: "assets/products/gemini.png",
    shortDescription: "اشتراك ذكاء اصطناعي من Google للبحث، الكتابة، التلخيص وتنظيم الأفكار.",
    description: "Gemini Pro مناسب للبحث، التلخيص، الكتابة، الدراسة وتنظيم الأفكار، ويساعدك في إنجاز مهامك اليومية بطريقة أسرع.",
    features: [
      "مناسب للدراسة والعمل",
      "يساعد في التلخيص والبحث",
      "مفيد في الكتابة وتنظيم الأفكار",
      "تفعيل على الإيميل الشخصي"
    ],
    activation: "يتم التفعيل على الإيميل الشخصي الخاص بالزبون حسب الطريقة المتوفرة.",
    requiredFromClient: [
      "الإيميل الشخصي",
      "مدة الاشتراك المطلوبة",
      "إثبات الدفع"
    ],
    deliveryTime: "من 10 دقائق إلى 24 ساعة حسب الضغط والتوفر.",
    warranty: "ضمان حسب نوع الباقة وطريقة التفعيل.",
    note: "يتم تأكيد التفاصيل عبر واتساب قبل الدفع."
  },
  {
    id: "canva-pro",
    name: "Canva Pro",
    category: "design",
    categoryLabel: "التصميم والمونتاج",
    price: "700 دج",
    duration: "12 شهر",
    badge: "عرض خاص",
    image: "assets/products/canva.png",
    shortDescription: "اشتراك تصميم احترافي للمنشورات، الإعلانات، الشعارات والعروض التقديمية.",
    description: "Canva Pro مناسب للتصميم، المنشورات، الإعلانات، الشعارات، العروض التقديمية ومحتوى السوشيال ميديا.",
    features: [
      "قوالب احترافية",
      "أدوات تصميم متقدمة",
      "مناسب لأصحاب المتاجر وصناع المحتوى",
      "تفعيل على الإيميل الشخصي"
    ],
    activation: "يتم التفعيل على الإيميل الشخصي الخاص بالزبون حسب الباقة المتوفرة.",
    requiredFromClient: [
      "إيميل Canva أو الإيميل الشخصي",
      "مدة الاشتراك المطلوبة",
      "إثبات الدفع"
    ],
    deliveryTime: "من 10 دقائق إلى 24 ساعة حسب الضغط والتوفر.",
    warranty: "ضمان حسب نوع الباقة وطريقة التفعيل.",
    note: "يتم تأكيد التفاصيل عبر واتساب قبل الدفع."
  },
  {
    id: "capcut-pro",
    name: "CapCut Pro",
    category: "design",
    categoryLabel: "التصميم والمونتاج",
    price: "السعر عند التواصل",
    duration: "يتم تحديدها لاحقاً",
    badge: "قريباً",
    image: "assets/products/capcut.png",
    shortDescription: "اشتراك مونتاج مناسب لصناعة فيديوهات Reels وTikTok وYouTube Shorts.",
    description: "CapCut Pro مناسب للمونتاج وصناعة فيديوهات قصيرة واحترافية للسوشيال ميديا مثل Reels وTikTok وYouTube Shorts.",
    features: [
      "مناسب لصناع المحتوى",
      "أدوات مونتاج احترافية",
      "قوالب وتأثيرات مميزة",
      "التفاصيل تحدد عبر واتساب"
    ],
    activation: "طريقة التفعيل سيتم تحديدها لاحقاً حسب الباقة المتوفرة.",
    requiredFromClient: [
      "سيتم تحديد المطلوب لاحقاً",
      "التواصل عبر واتساب لمعرفة التفاصيل"
    ],
    deliveryTime: "يتم تحديدها حسب التوفر.",
    warranty: "ضمان حسب نوع الباقة وطريقة التفعيل.",
    note: "هذا المنتج يمكن تعديله لاحقاً من ناحية السعر والمدة وطريقة التفعيل."
  }
];

const state = {
  filter: "all",
  search: "",
  cartCount: 0
};

const productsGrid = document.getElementById("productsGrid");
const productSearch = document.getElementById("productSearch");
const filterButtons = document.querySelectorAll(".filter-btn");
const productModal = document.getElementById("productModal");
const modalBody = document.getElementById("modalBody");
const modalClose = document.getElementById("modalClose");
const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const searchBtn = document.getElementById("searchBtn");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const cartCount = document.getElementById("cartCount");
const brandLogo = document.getElementById("brandLogo");
const brandLogoFallback = document.getElementById("brandLogoFallback");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProductById(id) {
  return products.find((product) => product.id === id);
}

function getWhatsAppLink(product) {
  const message = `مرحبا Riox Store dz، أريد طلب اشتراك:
المنتج: ${product.name}
المدة: ${product.duration}
السعر: ${product.price}
أريد معرفة التوفر وطريقة التفعيل.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function getBadgeClass(badge) {
  if (badge === "الأكثر طلباً") return "hot";
  if (badge === "عرض خاص") return "special";
  if (badge === "قريباً") return "soon";
  return "";
}

function getFallbackText(name) {
  const cleanName = String(name).trim();
  if (!cleanName) return "Rx";

  const parts = cleanName.split(/\s+/);
  if (parts.length === 1) {
    return parts[0].slice(0, 2).toUpperCase();
  }

  return `${parts[0][0] || ""}${parts[1][0] || ""}`.toUpperCase();
}

function handleImageFallback(imageElement) {
  const fallback = imageElement.nextElementSibling;
  imageElement.classList.add("is-hidden");

  if (fallback) {
    fallback.classList.add("is-visible");
  }
}

function setupImageFallbacks(root = document) {
  const images = root.querySelectorAll(".js-product-image");

  images.forEach((image) => {
    image.addEventListener("error", () => handleImageFallback(image));

    if (image.complete && image.naturalWidth === 0) {
      handleImageFallback(image);
    }
  });
}

function renderProducts() {
  const normalizedSearch = state.search.trim().toLowerCase();

  const filteredProducts = products.filter((product) => {
    const matchesCategory = state.filter === "all" || product.category === state.filter;
    const matchesSearch = product.name.toLowerCase().includes(normalizedSearch);
    return matchesCategory && matchesSearch;
  });

  if (!filteredProducts.length) {
    productsGrid.innerHTML = `
      <div class="empty-state">
        لا توجد منتجات مطابقة للبحث الحالي.
      </div>
    `;
    return;
  }

  productsGrid.innerHTML = filteredProducts.map((product) => {
    const safeName = escapeHTML(product.name);
    const safeCategory = escapeHTML(product.categoryLabel);
    const safePrice = escapeHTML(product.price);
    const safeDuration = escapeHTML(product.duration);
    const safeBadge = escapeHTML(product.badge);
    const safeDescription = escapeHTML(product.shortDescription);
    const safeImage = escapeHTML(product.image);
    const safeFallback = escapeHTML(getFallbackText(product.name));
    const badgeClass = getBadgeClass(product.badge);
    const whatsappLink = getWhatsAppLink(product);

    return `
      <article class="product-card">
        <span class="product-badge ${badgeClass}">${safeBadge}</span>

        <div class="product-image-wrap">
          <img class="js-product-image" src="${safeImage}" alt="${safeName}" loading="lazy" />
          <span class="fallback-logo">${safeFallback}</span>
        </div>

        <span class="product-category">${safeCategory}</span>
        <h3>${safeName}</h3>
        <div class="product-price">${safePrice}</div>
        <p class="product-duration">${safeDuration}</p>
        <p class="product-desc">${safeDescription}</p>

        <div class="product-actions">
          <button class="btn btn-outline js-details-btn" type="button" data-id="${product.id}">
            عرض التفاصيل
          </button>
          <a class="btn btn-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener">
            طلب عبر واتساب
          </a>
        </div>
      </article>
    `;
  }).join("");

  setupImageFallbacks(productsGrid);

  document.querySelectorAll(".js-details-btn").forEach((button) => {
    button.addEventListener("click", () => {
      openProductModal(button.dataset.id);
    });
  });
}

function createListItems(items) {
  return items.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
}

function openProductModal(productId) {
  const product = getProductById(productId);

  if (!product) {
    return;
  }

  const whatsappLink = getWhatsAppLink(product);
  const safeName = escapeHTML(product.name);
  const safeImage = escapeHTML(product.image);
  const safeFallback = escapeHTML(getFallbackText(product.name));

  modalBody.innerHTML = `
    <div class="modal-layout">
      <div class="modal-product-media">
        <img class="js-product-image" src="${safeImage}" alt="${safeName}" />
        <span class="fallback-logo">${safeFallback}</span>
      </div>

      <div class="modal-info">
        <h2 id="modalTitle">${safeName}</h2>

        <div class="modal-meta">
          <span class="meta-pill">${escapeHTML(product.categoryLabel)}</span>
          <span class="meta-pill">${escapeHTML(product.badge)}</span>
          <span class="meta-pill">${escapeHTML(product.duration)}</span>
        </div>

        <div class="modal-price">${escapeHTML(product.price)}</div>
        <p class="modal-description">${escapeHTML(product.description)}</p>

        <div class="details-block">
          <h3>المميزات</h3>
          <ul>${createListItems(product.features)}</ul>
        </div>

        <div class="details-block">
          <h3>طريقة التفعيل</h3>
          <p>${escapeHTML(product.activation)}</p>
        </div>

        <div class="details-block">
          <h3>المطلوب من العميل</h3>
          <ul>${createListItems(product.requiredFromClient)}</ul>
        </div>

        <div class="details-block">
          <h3>مدة التسليم</h3>
          <p>${escapeHTML(product.deliveryTime)}</p>
        </div>

        <div class="details-block">
          <h3>الضمان</h3>
          <p>${escapeHTML(product.warranty)}</p>
        </div>

        <div class="details-block">
          <h3>ملاحظة مهمة</h3>
          <p>${escapeHTML(product.note)}</p>
        </div>

        <div class="modal-actions">
          <a class="btn btn-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener">
            طلب عبر واتساب
          </a>
          <button class="btn btn-outline" type="button" id="modalSecondClose">
            إغلاق
          </button>
        </div>
      </div>
    </div>
  `;

  productModal.hidden = false;
  document.body.classList.add("no-scroll");
  modalClose.focus();

  setupImageFallbacks(modalBody);

  const modalSecondClose = document.getElementById("modalSecondClose");
  if (modalSecondClose) {
    modalSecondClose.addEventListener("click", closeProductModal);
  }
}

function closeProductModal() {
  productModal.hidden = true;
  document.body.classList.remove("no-scroll");
  modalBody.innerHTML = "";
}

function updateCartCounter() {
  cartCount.textContent = String(state.cartCount);
}

function closeMobileMenu() {
  mainNav.classList.remove("active");
  menuToggle.setAttribute("aria-expanded", "false");
}

function toggleMobileMenu() {
  const isOpen = mainNav.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
}

function initFilters() {
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      state.filter = button.dataset.filter || "all";

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      renderProducts();
    });
  });
}

function initSearch() {
  productSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
  });

  searchBtn.addEventListener("click", () => {
    document.getElementById("subscriptions").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => productSearch.focus(), 450);
  });
}

function initModal() {
  modalClose.addEventListener("click", closeProductModal);

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) {
      closeProductModal();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !productModal.hidden) {
      closeProductModal();
    }
  });
}

function initMobileMenu() {
  menuToggle.addEventListener("click", toggleMobileMenu);

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMobileMenu);
  });

  document.addEventListener("click", (event) => {
    const clickedInsideHeader = event.target.closest(".site-header");

    if (!clickedInsideHeader && mainNav.classList.contains("active")) {
      closeMobileMenu();
    }
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const sign = button.querySelector("strong");

      if (!item || !sign) {
        return;
      }

      item.classList.toggle("active");
      sign.textContent = item.classList.contains("active") ? "−" : "+";
    });
  });
}

function initScrollTop() {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 520) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
}

function initLogoFallback() {
  if (!brandLogo || !brandLogoFallback) {
    return;
  }

  brandLogo.addEventListener("error", () => {
    brandLogo.style.display = "none";
    brandLogoFallback.style.display = "grid";
  });

  if (brandLogo.complete && brandLogo.naturalWidth === 0) {
    brandLogo.style.display = "none";
    brandLogoFallback.style.display = "grid";
  }
}

document.addEventListener("DOMContentLoaded", () => {
  initLogoFallback();
  updateCartCounter();
  renderProducts();
  initFilters();
  initSearch();
  initModal();
  initMobileMenu();
  initFaq();
  initScrollTop();
});
