"use strict";

const whatsappNumber = "213557235850";

const socialLinks = {
  whatsapp: "https://wa.me/213557235850",
  instagram: "https://www.instagram.com/riox_ads?igsh=aDFkMDczMzY1cnRv",
  facebook: "https://www.facebook.com/profile.php?id=61572103543791",
  telegram: "https://t.me/+213557235850"
};

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

const policies = {
  privacy: {
    title: "سياسة الخصوصية",
    content: `
      <p>
        تهدف سياسة الخصوصية هذه إلى توضيح طريقة تعامل Riox Store dz مع معلومات العملاء
        عند الاستفسار أو طلب الاشتراكات الرقمية. الموقع الحالي هو واجهة Front-End فقط،
        ولا يحتوي على قاعدة بيانات أو نظام تسجيل دخول أو نظام دفع إلكتروني.
      </p>

      <h3>1. المعلومات التي قد نطلبها</h3>
      <ul>
        <li>اسم المنتج أو الاشتراك المطلوب.</li>
        <li>مدة الاشتراك المطلوبة.</li>
        <li>الإيميل الشخصي أو الحساب المطلوب للتفعيل حسب نوع المنتج.</li>
        <li>إثبات الدفع بعد الاتفاق على طريقة الدفع.</li>
        <li>أي معلومات ضرورية فقط لإتمام التفعيل.</li>
      </ul>

      <h3>2. معلومات لا نطلبها</h3>
      <ul>
        <li>لا نطلب كلمات المرور إلا إذا كانت طريقة التفعيل تتطلب ذلك ويتم توضيح الأمر قبل الدفع.</li>
        <li>لا نطلب بيانات بطاقات بنكية داخل الموقع.</li>
        <li>لا نطلب معلومات شخصية غير مرتبطة بالطلب.</li>
        <li>لا نطلب إرسال وثائق شخصية إلا إذا كان هناك سبب واضح ومقبول يتم شرحه للعميل.</li>
      </ul>

      <h3>3. استخدام المعلومات</h3>
      <p>
        تستخدم المعلومات فقط لتأكيد الطلب، معرفة الباقة المناسبة، تنفيذ التفعيل،
        متابعة حالة الاشتراك، وحل أي مشكلة مرتبطة بالخدمة.
      </p>

      <h3>4. مشاركة المعلومات</h3>
      <p>
        لا يتم بيع معلومات العملاء أو مشاركتها لأغراض إعلانية. قد يتم استخدام بعض المعلومات
        فقط عند الحاجة لتنفيذ التفعيل حسب طبيعة الاشتراك وطريقة التفعيل المتاحة.
      </p>

      <h3>5. حماية العميل</h3>
      <ul>
        <li>يتم تأكيد السعر والتفاصيل قبل الدفع.</li>
        <li>يتم توضيح طريقة التفعيل قبل إتمام الطلب.</li>
        <li>يتم طلب أقل قدر ممكن من المعلومات.</li>
        <li>يتم التواصل عبر القنوات الرسمية الموضحة في الموقع.</li>
      </ul>

      <h3>6. ملاحظة مهمة</h3>
      <p>
        هذه النسخة من الموقع للعرض والتواصل فقط، ولا تحفظ بيانات المستخدمين داخل الموقع.
        أي بيانات يتم إرسالها تكون عبر وسائل التواصل مثل واتساب حسب رغبة العميل.
      </p>
    `
  },

  terms: {
    title: "الشروط والأحكام",
    content: `
      <p>
        باستخدامك لموقع Riox Store dz أو تواصلك معنا لطلب أي اشتراك رقمي،
        فأنت توافق على قراءة وفهم الشروط التالية.
      </p>

      <h3>1. طبيعة الخدمة</h3>
      <p>
        Riox Store dz متجر جزائري متخصص في توفير اشتراكات رقمية مختارة.
        الموقع لا يقدم ألعاباً، ولا IPTV، ولا شحن ألعاب، ولا منتجات عشوائية.
      </p>

      <h3>2. الأسعار والتوفر</h3>
      <ul>
        <li>الأسعار المعروضة قابلة للتغيير حسب توفر الاشتراك ومدة الباقة.</li>
        <li>يتم تأكيد السعر النهائي عبر واتساب قبل الدفع.</li>
        <li>قد يكون بعض المنتجات متاحاً حالياً أو قريباً حسب التوفر.</li>
      </ul>

      <h3>3. التفعيل</h3>
      <ul>
        <li>طريقة التفعيل تختلف حسب نوع المنتج والباقة المتوفرة.</li>
        <li>يتم شرح طريقة التفعيل للعميل قبل إتمام الطلب.</li>
        <li>يجب على العميل إرسال المعلومات المطلوبة بشكل صحيح لتجنب التأخير.</li>
      </ul>

      <h3>4. الدفع</h3>
      <p>
        طرق الدفع المتاحة تشمل CCP، بريدي موب، فليكسي، Binance وRedotPay.
        يتم تأكيد الطريقة المناسبة مع العميل قبل إتمام الطلب.
      </p>

      <h3>5. مسؤولية العميل</h3>
      <ul>
        <li>إرسال معلومات صحيحة وواضحة.</li>
        <li>التأكد من الإيميل أو الحساب قبل إرساله.</li>
        <li>عدم تغيير بيانات الحساب أثناء عملية التفعيل إلا بعد التنسيق معنا.</li>
        <li>الاحتفاظ بإثبات الدفع لحين تأكيد الطلب.</li>
      </ul>

      <h3>6. حدود المسؤولية</h3>
      <p>
        لا نستخدم عبارات مثل مدى الحياة أو مضمون للأبد. الضمان يكون حسب نوع الباقة
        وطريقة التفعيل ويتم توضيحه قبل الدفع.
      </p>
    `
  },

  refund: {
    title: "سياسة الضمان والاسترجاع",
    content: `
      <p>
        تهدف هذه السياسة إلى توضيح طريقة التعامل مع الضمان، المشاكل، والاسترجاع
        في الاشتراكات الرقمية.
      </p>

      <h3>1. الضمان</h3>
      <ul>
        <li>الضمان يختلف حسب نوع الاشتراك وطريقة التفعيل.</li>
        <li>يتم توضيح مدة وشروط الضمان قبل الدفع.</li>
        <li>الضمان لا يعني أن الخدمة مضمونة للأبد.</li>
      </ul>

      <h3>2. متى يتم الدعم أو التعويض؟</h3>
      <ul>
        <li>إذا لم يتم تفعيل الاشتراك بعد تأكيد الدفع.</li>
        <li>إذا حدث خلل مرتبط بطريقة التفعيل خلال فترة الضمان المتفق عليها.</li>
        <li>إذا كان المنتج غير متوفر بعد الدفع، يتم الاتفاق على حل مناسب.</li>
      </ul>

      <h3>3. حالات قد لا يشملها الضمان</h3>
      <ul>
        <li>تغيير العميل لبيانات الحساب بعد التفعيل بدون تنسيق.</li>
        <li>مخالفة شروط المنصة الأصلية من طرف العميل.</li>
        <li>إرسال معلومات خاطئة أو ناقصة تسببت في مشكلة التفعيل.</li>
        <li>انتهاء مدة الاشتراك أو انتهاء فترة الضمان المتفق عليها.</li>
      </ul>

      <h3>4. الاسترجاع</h3>
      <p>
        لأن المنتجات رقمية ويتم تفعيلها حسب الطلب، فإن الاسترجاع يعتمد على حالة الطلب.
        إذا لم يبدأ التفعيل بعد، يمكن دراسة الإلغاء. أما بعد التفعيل، فيتم التعامل حسب
        نوع المشكلة وشروط الباقة.
      </p>

      <h3>5. الحلول الممكنة</h3>
      <ul>
        <li>إعادة التفعيل عند توفر الشروط.</li>
        <li>استبدال الباقة عند إمكانية ذلك.</li>
        <li>تقديم توضيح أو دعم مباشر لحل المشكلة.</li>
        <li>الاتفاق على حل مناسب حسب الحالة.</li>
      </ul>
    `
  },

  delivery: {
    title: "سياسة التفعيل والتسليم",
    content: `
      <p>
        يتم تفعيل الاشتراكات الرقمية بعد تأكيد التوفر، الاتفاق على طريقة الدفع،
        واستلام المعلومات المطلوبة من العميل.
      </p>

      <h3>1. مدة التفعيل</h3>
      <p>
        غالباً من 10 دقائق إلى 24 ساعة حسب نوع المنتج، الضغط، توفر الباقة،
        وصحة المعلومات المرسلة من العميل.
      </p>

      <h3>2. أسباب التأخير الممكنة</h3>
      <ul>
        <li>ضغط الطلبات.</li>
        <li>تأخر تأكيد الدفع.</li>
        <li>نقص أو خطأ في معلومات العميل.</li>
        <li>تغير توفر الباقة.</li>
        <li>الحاجة لتأكيد إضافي قبل التفعيل.</li>
      </ul>

      <h3>3. معلومات مطلوبة غالباً</h3>
      <ul>
        <li>اسم المنتج المطلوب.</li>
        <li>مدة الاشتراك المطلوبة.</li>
        <li>الإيميل أو الحساب حسب نوع التفعيل.</li>
        <li>إثبات الدفع.</li>
      </ul>

      <h3>4. قبل الدفع</h3>
      <p>
        يتم تأكيد السعر، المدة، طريقة التفعيل، المتطلبات، والضمان عبر واتساب.
        لا يتم اعتبار الطلب مؤكداً إلا بعد الاتفاق الواضح بين الطرفين.
      </p>

      <h3>5. بعد التفعيل</h3>
      <p>
        يتم إبلاغ العميل بإتمام التفعيل، ويمكنه طلب الدعم في حال وجود مشكلة مرتبطة
        بالتفعيل حسب شروط الضمان الخاصة بالباقة.
      </p>
    `
  }
};

const state = {
  filter: "all",
  search: "",
  cart: []
};

const productsGrid = document.getElementById("productsGrid");
const searchToggle = document.getElementById("searchToggle");
const searchPanel = document.getElementById("searchPanel");
const siteSearch = document.getElementById("siteSearch");
const clearSearch = document.getElementById("clearSearch");
const menuToggle = document.getElementById("menuToggle");
const drawer = document.getElementById("drawer");
const cartToggle = document.getElementById("cartToggle");
const cartCount = document.getElementById("cartCount");
const cartModal = document.getElementById("cartModal");
const cartPreview = document.getElementById("cartPreview");
const closeCartModal = document.getElementById("closeCartModal");
const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");
const closeProductModal = document.getElementById("closeProductModal");
const policyModal = document.getElementById("policyModal");
const policyModalContent = document.getElementById("policyModalContent");
const closePolicyModal = document.getElementById("closePolicyModal");
const scrollTop = document.getElementById("scrollTop");

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function getProduct(id) {
  return products.find((product) => product.id === id);
}

function getFallbackText(name) {
  const words = String(name).trim().split(/\s+/);
  if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
  return `${words[0][0] || ""}${words[1][0] || ""}`.toUpperCase();
}

function getBadgeClass(badge) {
  if (badge === "الأكثر طلباً") return "hot";
  if (badge === "عرض خاص") return "special";
  if (badge === "قريباً") return "soon";
  return "";
}

function getWhatsAppLink(product) {
  const message = `مرحبا Riox Store dz، أريد طلب اشتراك:
المنتج: ${product.name}
المدة: ${product.duration}
السعر: ${product.price}
أريد معرفة التوفر وطريقة التفعيل.`;

  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
}

function imageFallback(image) {
  const fallback = image.nextElementSibling;
  image.style.display = "none";
  if (fallback) fallback.classList.add("show");
}

function setupImages(root = document) {
  root.querySelectorAll(".js-product-image").forEach((image) => {
    image.addEventListener("error", () => imageFallback(image));

    if (image.complete && image.naturalWidth === 0) {
      imageFallback(image);
    }
  });

  const heroLogo = document.querySelector(".logo-box img");
  if (heroLogo) {
    heroLogo.addEventListener("error", () => {
      heroLogo.style.display = "none";
    });
  }
}

function renderProducts() {
  const text = state.search.trim().toLowerCase();

  const filtered = products.filter((product) => {
    const categoryMatch = state.filter === "all" || product.category === state.filter;
    const searchMatch =
      product.name.toLowerCase().includes(text) ||
      product.categoryLabel.toLowerCase().includes(text);

    return categoryMatch && searchMatch;
  });

  if (!filtered.length) {
    productsGrid.innerHTML = `<div class="empty-state">لا توجد منتجات مطابقة للبحث الحالي.</div>`;
    return;
  }

  productsGrid.innerHTML = filtered.map((product) => {
    const badgeClass = getBadgeClass(product.badge);
    const whatsappLink = getWhatsAppLink(product);

    return `
      <article class="product-card reveal visible">
        <span class="product-badge ${badgeClass}">${escapeHTML(product.badge)}</span>

        <div class="product-image">
          <img class="js-product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" />
          <span class="image-fallback">${escapeHTML(getFallbackText(product.name))}</span>
        </div>

        <span class="product-category">${escapeHTML(product.categoryLabel)}</span>
        <h3>${escapeHTML(product.name)}</h3>
        <div class="product-price">${escapeHTML(product.price)}</div>
        <p class="product-duration">${escapeHTML(product.duration)}</p>
        <p class="product-desc">${escapeHTML(product.shortDescription)}</p>

        <div class="product-actions">
          <button class="btn btn-outline js-details" type="button" data-id="${escapeHTML(product.id)}">عرض التفاصيل</button>
          <a class="btn btn-whatsapp" href="${whatsappLink}" target="_blank" rel="noopener">طلب عبر واتساب</a>
          <button class="btn btn-primary js-add-cart" type="button" data-id="${escapeHTML(product.id)}">إضافة للسلة</button>
        </div>
      </article>
    `;
  }).join("");

  setupImages(productsGrid);

  productsGrid.querySelectorAll(".js-details").forEach((button) => {
    button.addEventListener("click", () => openProductModal(button.dataset.id));
  });

  productsGrid.querySelectorAll(".js-add-cart").forEach((button) => {
    button.addEventListener("click", () => addToCart(button.dataset.id));
  });
}

function createList(items) {
  return items.map((item) => `<li>${escapeHTML(item)}</li>`).join("");
}

function openProductModal(productId) {
  const product = getProduct(productId);
  if (!product) return;

  productModalContent.innerHTML = `
    <div class="modal-product">
      <div class="modal-media">
        <img class="js-product-image" src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" />
        <span class="image-fallback">${escapeHTML(getFallbackText(product.name))}</span>
      </div>

      <div class="modal-info">
        <h2>${escapeHTML(product.name)}</h2>

        <div class="modal-pills">
          <span>${escapeHTML(product.categoryLabel)}</span>
          <span>${escapeHTML(product.badge)}</span>
          <span>${escapeHTML(product.duration)}</span>
        </div>

        <div class="modal-price">${escapeHTML(product.price)}</div>
        <p>${escapeHTML(product.description)}</p>

        <div class="detail-block">
          <h3>المميزات</h3>
          <ul>${createList(product.features)}</ul>
        </div>

        <div class="detail-block">
          <h3>طريقة التفعيل</h3>
          <p>${escapeHTML(product.activation)}</p>
        </div>

        <div class="detail-block">
          <h3>المطلوب من العميل</h3>
          <ul>${createList(product.requiredFromClient)}</ul>
        </div>

        <div class="detail-block">
          <h3>مدة التسليم</h3>
          <p>${escapeHTML(product.deliveryTime)}</p>
        </div>

        <div class="detail-block">
          <h3>الضمان</h3>
          <p>${escapeHTML(product.warranty)}</p>
        </div>

        <div class="detail-block">
          <h3>ملاحظة مهمة</h3>
          <p>${escapeHTML(product.note)}</p>
        </div>

        <div class="modal-actions">
          <a class="btn btn-whatsapp" href="${getWhatsAppLink(product)}" target="_blank" rel="noopener">طلب عبر واتساب</a>
          <button class="btn btn-primary" type="button" data-add-from-modal="${escapeHTML(product.id)}">إضافة للسلة</button>
        </div>
      </div>
    </div>
  `;

  productModal.hidden = false;
  document.body.classList.add("no-scroll");
  setupImages(productModalContent);

  const addButton = productModalContent.querySelector("[data-add-from-modal]");
  if (addButton) {
    addButton.addEventListener("click", () => addToCart(addButton.dataset.addFromModal));
  }
}

function closeModal(modal) {
  modal.hidden = true;
  document.body.classList.remove("no-scroll");
}

function openPolicy(policyId) {
  const policy = policies[policyId];
  if (!policy) return;

  policyModalContent.innerHTML = `
    <div class="policy-content">
      <h2>${escapeHTML(policy.title)}</h2>
      ${policy.content}
    </div>
  `;

  policyModal.hidden = false;
  document.body.classList.add("no-scroll");
}

function addToCart(productId) {
  const product = getProduct(productId);
  if (!product) return;

  state.cart.push(product);
  updateCart();
}

function updateCart() {
  cartCount.textContent = String(state.cart.length);

  if (!state.cart.length) {
    cartPreview.innerHTML = `<p>السلة فارغة حالياً.</p>`;
    return;
  }

  cartPreview.innerHTML = state.cart.map((product, index) => `
    <div class="cart-item-preview">
      <strong>${escapeHTML(index + 1)}. ${escapeHTML(product.name)}</strong>
      <p>${escapeHTML(product.price)} — ${escapeHTML(product.duration)}</p>
      <a class="btn btn-whatsapp" href="${getWhatsAppLink(product)}" target="_blank" rel="noopener">طلب هذا المنتج عبر واتساب</a>
    </div>
  `).join("");
}

function setFilter(filter) {
  state.filter = filter;

  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.classList.toggle("active", button.dataset.filter === filter);
  });

  renderProducts();
  document.getElementById("subscriptions").scrollIntoView({ behavior: "smooth" });
}

function toggleSearch() {
  const isHidden = searchPanel.hidden;
  searchPanel.hidden = !isHidden;

  if (isHidden) {
    setTimeout(() => siteSearch.focus(), 100);
  }
}

function openDrawer() {
  drawer.hidden = false;
  document.body.classList.add("no-scroll");
}

function closeDrawer() {
  drawer.hidden = true;
  document.body.classList.remove("no-scroll");
}

function initFilters() {
  document.querySelectorAll(".filter-btn").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter || "all"));
  });

  document.querySelectorAll(".js-category").forEach((button) => {
    button.addEventListener("click", () => setFilter(button.dataset.filter || "all"));
  });
}

function initSearch() {
  searchToggle.addEventListener("click", toggleSearch);

  siteSearch.addEventListener("input", (event) => {
    state.search = event.target.value;
    renderProducts();
    document.getElementById("subscriptions").scrollIntoView({ behavior: "smooth" });
  });

  clearSearch.addEventListener("click", () => {
    siteSearch.value = "";
    state.search = "";
    renderProducts();
    siteSearch.focus();
  });
}

function initDrawer() {
  menuToggle.addEventListener("click", openDrawer);

  drawer.querySelectorAll("[data-close-drawer]").forEach((element) => {
    element.addEventListener("click", closeDrawer);
  });

  drawer.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeDrawer);
  });
}

function initModals() {
  closeProductModal.addEventListener("click", () => closeModal(productModal));
  closePolicyModal.addEventListener("click", () => closeModal(policyModal));
  closeCartModal.addEventListener("click", () => closeModal(cartModal));

  productModal.addEventListener("click", (event) => {
    if (event.target === productModal) closeModal(productModal);
  });

  policyModal.addEventListener("click", (event) => {
    if (event.target === policyModal) closeModal(policyModal);
  });

  cartModal.addEventListener("click", (event) => {
    if (event.target === cartModal) closeModal(cartModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal(productModal);
      closeModal(policyModal);
      closeModal(cartModal);
      closeDrawer();
    }
  });

  document.querySelectorAll("[data-policy]").forEach((button) => {
    button.addEventListener("click", () => openPolicy(button.dataset.policy));
  });

  cartToggle.addEventListener("click", () => {
    updateCart();
    cartModal.hidden = false;
    document.body.classList.add("no-scroll");
  });
}

function initFaq() {
  document.querySelectorAll(".faq-question").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".faq-item");
      const sign = button.querySelector("b");
      if (!item || !sign) return;

      item.classList.toggle("open");
      sign.textContent = item.classList.contains("open") ? "−" : "+";
    });
  });
}

function initScrollTop() {
  window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("show", window.scrollY > 520);
  });

  scrollTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

function initRevealAnimations() {
  const elements = document.querySelectorAll(".reveal");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  elements.forEach((element) => observer.observe(element));
}

document.addEventListener("DOMContentLoaded", () => {
  renderProducts();
  updateCart();
  setupImages();
  initFilters();
  initSearch();
  initDrawer();
  initModals();
  initFaq();
  initScrollTop();
  initRevealAnimations();
});
