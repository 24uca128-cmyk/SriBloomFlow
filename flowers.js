/* =========================================================
   BLOOMFLOW - FLOWERS PAGE JAVASCRIPT
   Sivakasi Flower Shop
   Prices: Flowers per 100g / Lotus per piece
            Maalai per 1 maalai
   ========================================================= */


/* =========================================================
   PRODUCT DATABASE
   IDs MUST MATCH flower-details.html
   ========================================================= */

let products = [

    /* ================= FLOWERS ================= */

    {
        id: 1,
        name: "Mallipoo",
        category: "flowers",
        type: "flower",
        price: 120,
        unit: "100g",
        image: "images/jas.jpg",
        rating: 4.9,
        badge: "Best Seller",
        tagline: "Fresh and highly fragrant local jasmine flowers."
    },

    {
        id: 2,
        name: "Mullai",
        category: "flowers",
        type: "flower",
        price: 100,
        unit: "100g",
        image: "images/mullai.jpg",
        rating: 4.8,
        badge: "Popular",
        tagline: "Fresh and delicate Mullai flowers."
    },

    {
        id: 3,
        name: "Samanthi",
        category: "flowers",
        type: "flower",
        price: 30,
        unit: "100g",
        image: "images/marigold.jpg",
        rating: 4.7,
        badge: "Fresh",
        tagline: "Bright yellow Samanthi flowers for every occasion."
    },

    {
        id: 4,
        name: "Sevanthi",
        category: "flowers",
        type: "flower",
        price: 40,
        unit: "100g",
        image: "images/sevanthi.jpg",
        rating: 4.7,
        badge: "Popular",
        tagline: "Beautiful fresh Sevanthi flowers in vibrant shades."
    },

    {
        id: 5,
        name: "Kanakambaram",
        category: "flowers",
        type: "flower",
        price: 100,
        unit: "100g",
        image: "images/kanakambaram_loose.jpg",
        rating: 4.8,
        badge: "Traditional",
        tagline: "Bright orange fresh loose Kanakambaram flowers."
    },

    {
        id: 6,
        name: "Pichi",
        category: "flowers",
        type: "flower",
        price: 90,
        unit: "100g",
        image: "images/pichi.jpg",
        rating: 4.8,
        badge: "Fragrant",
        tagline: "Soft and fragrant Pichi flowers, freshly selected."
    },

    {
        id: 7,
        name: "Arali",
        category: "flowers",
        type: "flower",
        price: 30,
        unit: "100g",
        image: "images/arali.jpg",
        rating: 4.5,
        badge: "Traditional",
        tagline: "Traditional Arali flowers suitable for prayers."
    },

    {
        id: 8,
        name: "Hibiscus",
        category: "flowers",
        type: "flower",
        price: 40,
        unit: "100g",
        image: "images/hibiscus.jpg",
        rating: 4.6,
        badge: "Fresh",
        tagline: "Fresh vibrant Hibiscus flowers."
    },

    {
        id: 9,
        name: "Lotus",
        category: "flowers",
        type: "flower",
        price: 50,
        unit: "1 piece",
        image: "images/lotus.jpg",
        rating: 4.9,
        badge: "Sacred",
        tagline: "Fresh Lotus flower, perfect for prayers and decoration."
    },

    {
        id: 10,
        name: "Gerbera",
        category: "flowers",
        type: "flower",
        price: 50,
        unit: "100g",
        image: "images/gerbera.jpg",
        rating: 4.7,
        badge: "Vibrant",
        tagline: "Colorful and beautiful Gerbera flowers."
    },

    {
        id: 11,
        name: "Rose",
        category: "flowers",
        type: "flower",
        price: 40,
        unit: "100g",
        image: "images/rose.jpg",
        rating: 4.8,
        badge: "Romantic",
        tagline: "Fresh roses with beautiful color and fragrance."
    },


    /* ================= MAALAI ================= */

    {
        id: 12,
        name: "Mallipoo Maalai",
        category: "maalai",
        type: "maalai",
        price: 450,
        unit: "1 piece",
        image: "images/mallipoo maalai.jpg",
        rating: 4.9,
        badge: "Best Seller",
        tagline: "Traditional fragrant Mallipoo Maalai."
    },

    {
        id: 13,
        name: "Rose Maalai",
        category: "maalai",
        type: "maalai",
        price: 650,
        unit: "1 piece",
        image: "images/rose maalai.jpg",
        rating: 4.9,
        badge: "Premium",
        tagline: "Elegant Rose Maalai for special occasions."
    },

    {
        id: 14,
        name: "Samanthi Maalai",
        category: "maalai",
        type: "maalai",
        price: 400,
        unit: "1 piece",
        image: "images/samanthi maalai.jpg",
        rating: 4.8,
        badge: "Traditional",
        tagline: "Fresh Samanthi Maalai for celebrations."
    },

    {
        id: 15,
        name: "Sambangi Maalai",
        category: "maalai",
        type: "maalai",
        price: 450,
        unit: "1 piece",
        image: "images/sambangi.jpg",
        rating: 4.8,
        badge: "Fragrant",
        tagline: "Beautiful and aromatic Sambangi Maalai."
    },

    {
        id: 16,
        name: "Petals Maalai",
        category: "maalai",
        type: "maalai",
        price: 550,
        unit: "1 piece",
        image: "images/petals maalai.jpg",
        rating: 4.7,
        badge: "Premium",
        tagline: "Colorful decorative flower-petal Maalai."
    },

    {
        id: 17,
        name: "Ooty Rose Maalai",
        category: "maalai",
        type: "maalai",
        price: 650,
        unit: "1 piece",
        image: "images/ooty rose maalai.jpg",
        rating: 4.9,
        badge: "Premium",
        tagline: "Elegant Ooty Rose Maalai for special events."
    },

    {
        id: 18,
        name: "Lotus Maalai",
        category: "maalai",
        type: "maalai",
        price: 550,
        unit: "1 piece",
        image: "images/Lotus.jpg",
        rating: 4.8,
        badge: "Sacred",
        tagline: "Beautiful Lotus Maalai for traditional occasions."
    },

    {
        id: 19,
        name: "Gerbera Maalai",
        category: "maalai",
        type: "maalai",
        price: 500,
        unit: "1 piece",
        image: "images/gerbera.jpg",
        rating: 4.7,
        badge: "Vibrant",
        tagline: "Colorful Gerbera flower Maalai."
    },

    {
        id: 20,
        name: "Orchid Maalai",
        category: "maalai",
        type: "maalai",
        price: 850,
        unit: "1 piece",
        image: "images/orchid.jpg",
        rating: 4.9,
        badge: "Luxury",
        tagline: "Premium Orchid Maalai for elegant celebrations."
    },

    {
        id: 21,
        name: "Vetriver Maalai",
        category: "maalai",
        type: "maalai",
        price: 350,
        unit: "1 piece",
        image: "images/vetriver.jpg",
        rating: 4.6,
        badge: "Traditional",
        tagline: "Traditional fragrant Vetriver Maalai."
    },

    {
        id: 22,
        name: "Cardamom Maalai",
        category: "maalai",
        type: "maalai",
        price: 500,
        unit: "1 piece",
        image: "images/cardamom.jpg",
        rating: 4.6,
        badge: "Special",
        tagline: "Special traditional Cardamom Maalai."
    },

    {
        id: 23,
        name: "Rose and Sevanthi Maalai",
        category: "maalai",
        type: "maalai",
        price: 600,
        unit: "1 piece",
        image: "images/rose and sevanthi.jpg",
        rating: 4.8,
        badge: "Popular",
        tagline: "Beautiful combination of Rose and Sevanthi flowers."
    },

    {
        id: 24,
        name: "Mayilliragu Maalai",
        category: "maalai",
        type: "maalai",
        price: 750,
        unit: "1 piece",
        image: "images/mayilmaalai.jpg",
        rating: 4.8,
        badge: "Special",
        tagline: "Traditional decorative Mayilliragu Maalai."
    },

    {
        id: 25,
        name: "Vaadamalli Maalai",
        category: "maalai",
        type: "maalai",
        price: 450,
        unit: "1 piece",
        image: "images/Vadamalli.webp",
        rating: 4.7,
        badge: "Traditional",
        tagline: "Beautiful traditional Vaadamalli Maalai."
    },

    {
        id: 26,
        name: "Kanakambaram Maalai",
        category: "maalai",
        type: "maalai",
        price: 350,
        unit: "1 piece",
        image: "images/kanakambaram.jpg",
        rating: 4.8,
        badge: "Traditional",
        tagline: "Bright orange traditional hand-crafted Kanakambaram garland."
    },

    {
        id: 27,
        name: "Royal Mullai Maalai",
        category: "maalai",
        type: "maalai",
        price: 480,
        unit: "1 piece",
        image: "images/mullaiaaram.jpg",
        rating: 4.9,
        badge: "Auspicious",
        tagline: "Traditional fragrant fresh Mullai sacred floral maalai."
    }

];


/* =========================================================
   VARIABLES
   ========================================================= */

let selectedCategory = "all";
let searchQuery = "";

let currentDetailsProductId = null;
let currentDetailsQuantity = 1;
let currentReviewRating = 5;


/* =========================================================
   DOM ELEMENTS
   ========================================================= */

const grid = document.getElementById("products-grid");

function getSearchInput() {
    return document.getElementById("flower-search") || document.getElementById("search-input");
}
const searchInput = getSearchInput();

const cartDrawer = document.getElementById("cart-drawer");
const cartOverlay = document.getElementById("cart-overlay");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const header =
    document.querySelector("header");


/* =========================================================
   FORMAT PRICE
   ========================================================= */

function formatPrice(price) {
    return `₹${Number(price).toFixed(2)}`;
}


/* =========================================================
   FORMAT UNIT
   ========================================================= */

function getUnitText(product) {
    if (product.type === "maalai" || product.category === "maalai" || (product.unit && product.unit.includes("maalai")) || (product.unit && product.unit.includes("piece"))) {
        return "per piece";
    }
    return `per ${product.unit}`;
}


/* =========================================================
   STAR HTML
   ========================================================= */

function createStars(rating) {

    let html = "";

    const fullStars = Math.floor(rating);
    const hasHalf = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {

        if (i < fullStars) {

            html +=
                '<i class="fa-solid fa-star"></i>';

        } else if (
            i === fullStars &&
            hasHalf
        ) {

            html +=
                '<i class="fa-solid fa-star-half-stroke"></i>';

        } else {

            html +=
                '<i class="fa-regular fa-star"></i>';
        }
    }

    return html;
}


/* =========================================================
   SMART SEARCH MATCHING
   ========================================================= */

function matchesSearch(product, rawQuery) {
    if (!rawQuery || !rawQuery.trim()) return true;
    const q = rawQuery.trim().toLowerCase();

    // Normalize Tamil phonetic variants & common search terms
    const normalizedQ = q
        .replace(/kanagabaram/g, 'kanakambaram')
        .replace(/kanagambaram/g, 'kanakambaram')
        .replace(/kanaga/g, 'kanaka')
        .replace(/malligai/g, 'mallipoo')
        .replace(/mallaipoo/g, 'mallipoo')
        .replace(/garlands?/g, 'maalai');

    const name = (product.name || '').toLowerCase();
    const tagline = (product.tagline || '').toLowerCase();
    const cat = (product.category || '').toLowerCase();
    const type = (product.type || '').toLowerCase();

    // Direct match with query or normalized text
    if (name.includes(q) || tagline.includes(q) || name.includes(normalizedQ) || tagline.includes(normalizedQ)) {
        return true;
    }

    // Category keyword matching (e.g. 'loose' shows loose flowers, 'maalai' shows garlands)
    if ((q.includes('loose') || q.includes('uthiri') || q.includes('flower')) && cat === 'flowers') {
        return true;
    }
    if ((q.includes('maalai') || q.includes('garland') || q.includes('malai') || q.includes('aaram')) && cat === 'maalai') {
        return true;
    }

    // Cross-synonym matches
    if ((q.includes('kanakambaram') || q.includes('kanagabaram') || q.includes('crossandra')) && name.includes('kanakambaram')) {
        return true;
    }
    if ((q.includes('mullai') || q.includes('juhi')) && name.includes('mullai')) {
        return true;
    }
    if ((q.includes('mallipoo') || q.includes('jasmine') || q.includes('malli')) && (name.includes('malli') || name.includes('jas'))) {
        return true;
    }

    return false;
}

/* =========================================================
   RENDER PRODUCTS
   ========================================================= */

function renderProducts() {

    if (!grid) return;

    grid.innerHTML = "";

    const isSearching = searchQuery.trim().length > 0;

    const filteredProducts =
        products.filter(product => {
            const searchMatch = matchesSearch(product, searchQuery);
            if (!searchMatch) return false;

            // When searching across terms, if "all" is active, display both loose and maalai
            if (!isSearching) {
                return selectedCategory === "all" || product.category === selectedCategory;
            }

            // If a specific category tab is explicitly clicked, restrict to that category
            if (selectedCategory !== "all") {
                return product.category === selectedCategory;
            }

            return true;
        });


    if (filteredProducts.length === 0) {

        grid.innerHTML = `
            <div class="no-results">

                <i class="fa-solid fa-magnifying-glass-minus"></i>

                <h3>No flowers found</h3>

                <p>
                    Try searching for another flower
                    or maalai.
                </p>

            </div>
        `;

        return;
    }


    filteredProducts.forEach(product => {

        const card =
            document.createElement("div");

        card.className =
            "product-card animate-fade";

        const unitHTML = `
            <span class="product-unit">
                ${getUnitText(product)}
            </span>
        `;


        card.innerHTML = `

            <div class="img-container">

                <img
                    src="${product.image}"
                    alt="${product.name}"
                    onclick="openDetailsModal(${product.id})"
                    style="cursor:pointer;"
                    onerror="this.src='images/flower-placeholder.jpg'"
                >

                <button
                    class="favorite-btn"
                    onclick="toggleFavorite(this, '${product.name}')"
                    aria-label="Add to wishlist"
                >
                    <i class="fa-regular fa-heart"></i>
                </button>

            </div>


            <div class="product-info">

                <div class="category-name">
                    ${
                        product.type === "maalai"
                            ? "Flower Garland (Maalai)"
                            : "Fresh Loose Flower"
                    }
                </div>


                <h3
                    onclick="openDetailsModal(${product.id})"
                    style="cursor:pointer;"
                >
                    ${product.name}
                </h3>


                <p class="tagline">
                    ${product.tagline}
                </p>


                <div class="stars">

                    ${createStars(product.rating)}

                    <span>
                        (${product.rating})
                    </span>

                </div>


                <div class="price-row">

                    <div class="price-container">

                        <span class="price">
                            ${formatPrice(product.price)}
                        </span>

                        ${unitHTML}

                    </div>


                    <button
                        class="add-to-cart-btn"
                        onclick="
                            addToCart(
                                ${product.id}
                            )
                        "
                    >
                        <i class="fa-solid fa-cart-plus"></i>
                        Add to Cart
                    </button>

                </div>

            </div>
        `;


        grid.appendChild(card);

    });

}


/* =========================================================
   SEARCH
   ========================================================= */

function handleFlowerSearch(query) {
    searchQuery = (query || "").trim().toLowerCase();

    // Toggle clear search button visibility
    const clearBtn = document.getElementById("clear-search-btn");
    if (clearBtn) {
        clearBtn.style.display = searchQuery.length > 0 ? "inline-flex" : "none";
    }

    // If user starts typing a search query and was locked into a specific category,
    // switch tab to "all" so they see both loose and maalai for that flower
    if (searchQuery.length > 0 && selectedCategory !== "all") {
        selectedCategory = "all";
        const buttons = document.querySelectorAll(".filter-btn");
        buttons.forEach(btn => {
            if (btn.dataset.category === "all") {
                btn.classList.add("active");
            } else {
                btn.classList.remove("active");
            }
        });
    }

    renderProducts();
}

function clearSearch() {
    const input = getSearchInput();
    if (input) {
        input.value = "";
        input.focus();
    }
    handleFlowerSearch("");
}

function focusSearchInput() {
    const input = getSearchInput();
    if (!input) return;

    input.focus();
    input.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

function focusSearch() {
    focusSearchInput();
}

// Expose functions globally for inline HTML event handlers
window.handleFlowerSearch = handleFlowerSearch;
window.clearSearch = clearSearch;
window.focusSearch = focusSearch;
window.focusSearchInput = focusSearchInput;

function initSearchListeners() {
    const input = getSearchInput();
    if (!input) return;

    input.removeEventListener("input", onSearchInputEvent);
    input.addEventListener("input", onSearchInputEvent);

    input.removeEventListener("keydown", onSearchKeyDownEvent);
    input.addEventListener("keydown", onSearchKeyDownEvent);
}

function onSearchInputEvent(e) {
    handleFlowerSearch(e.target.value);
}

function onSearchKeyDownEvent(e) {
    if (e.key === "Escape") {
        clearSearch();
    }
}

initSearchListeners();


/* =========================================================
   CATEGORY FILTER
   ========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        function () {

            filterButtons.forEach(btn => {

                btn.classList.remove("active");

            });


            this.classList.add("active");


            selectedCategory =
                this.dataset.category;


            renderProducts();
        }
    );

});





/* =========================================================
   CART
   ========================================================= */

function toggleCart(isOpen) {

    if (!cartDrawer || !cartOverlay) return;


    if (isOpen) {

        cartDrawer.classList.add("open");

        cartOverlay.classList.add("open");

        document.body.style.overflow =
            "hidden";

    } else {

        cartDrawer.classList.remove("open");

        cartOverlay.classList.remove("open");

        document.body.style.overflow =
            "";
    }

}

function openCart() {
    toggleCart(true);
}

function closeCart() {
    toggleCart(false);
}


/* =========================================================
   ADD TO CART
   ========================================================= */

function addToCart(productId, quantity = 1, customWeight = null, customPrice = null) {

    const product =
        products.find(
            p => Number(p.id) === Number(productId)
        );

    if (!product) {
        console.error("Product not found:", productId);
        return;
    }

    let cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];

    const weightLabel = customWeight || (product.type === 'maalai' ? '1 piece' : (product.unit === '1 piece' ? '1 piece' : '100g'));
    const itemPrice = customPrice !== null ? Number(customPrice) : Number(product.price);
    const itemKey = `${product.id}_${weightLabel}`.toLowerCase();

    const existing = cart.find(item => 
        (item.itemKey && item.itemKey === itemKey) ||
        (Number(item.productId || item.id) === Number(product.id) && (item.weight === weightLabel || (!item.weight && weightLabel === '100g')))
    );

    if (existing) {
        existing.quantity += Number(quantity);
        existing.itemTotal = Number(existing.price) * existing.quantity;
    } else {
        cart.push({
            id: product.id,
            productId: product.id,
            itemKey: itemKey,
            name: product.name,
            price: itemPrice,
            unitPrice: Number(product.price),
            unit: product.unit,
            weight: weightLabel,
            image: product.image,
            quantity: Number(quantity),
            itemTotal: itemPrice * Number(quantity)
        });
    }

    localStorage.setItem(
        "bloomflow_cart",
        JSON.stringify(cart)
    );

    updateCartUI();

    showToast(
        `🌸 ${quantity > 1 ? quantity + ' × ' : ''}${weightLabel} ${product.name} added to cart!`
    );
}


/* =========================================================
   UPDATE CART QUANTITY
   ========================================================= */

function updateQuantity(itemKeyOrId, newQuantity) {

    let cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];

    const item = cart.find(product =>
        (product.itemKey && String(product.itemKey) === String(itemKeyOrId)) ||
        Number(product.productId || product.id) === Number(itemKeyOrId)
    );

    if (!item) return;

    item.quantity = parseInt(newQuantity);

    if (item.quantity <= 0) {
        cart = cart.filter(product =>
            !( (product.itemKey && String(product.itemKey) === String(itemKeyOrId)) ||
               Number(product.productId || product.id) === Number(itemKeyOrId) )
        );
    } else {
        item.itemTotal = Number(item.price) * item.quantity;
    }

    localStorage.setItem(
        "bloomflow_cart",
        JSON.stringify(cart)
    );

    updateCartUI();
}


/* =========================================================
   REMOVE FROM CART
   ========================================================= */

function removeFromCart(itemKeyOrId) {

    let cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];

    const targetItem = cart.find(p =>
        (p.itemKey && String(p.itemKey) === String(itemKeyOrId)) ||
        Number(p.productId || p.id) === Number(itemKeyOrId)
    );

    cart = cart.filter(item =>
        !( (item.itemKey && String(item.itemKey) === String(itemKeyOrId)) ||
           Number(item.productId || item.id) === Number(itemKeyOrId) )
    );

    localStorage.setItem(
        "bloomflow_cart",
        JSON.stringify(cart)
    );

    updateCartUI();

    showToast(
        `🌸 ${targetItem ? targetItem.name : "Product"} removed from cart.`
    );
}


/* =========================================================
   UPDATE CART UI
   ========================================================= */

function updateCartUI() {

    const cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];

    const container = document.getElementById("cart-items");
    const navCount = document.getElementById("cart-count");
    const drawerCount = document.getElementById("cart-item-count");

    if (!container) return;

    const totalCount = cart.reduce(
        (sum, item) => sum + Number(item.quantity || 1),
        0
    );

    if (navCount) {
        navCount.textContent = totalCount;
        navCount.style.display = totalCount > 0 ? "inline-flex" : "none";
    }

    const bottomBadge = document.getElementById("bottom-cart-count");
    if (bottomBadge) {
        bottomBadge.textContent = totalCount;
        bottomBadge.style.display = totalCount > 0 ? "inline-flex" : "none";
    }

    if (drawerCount) {
        drawerCount.textContent = totalCount;
    }

    container.innerHTML = "";

    if (cart.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 45px 20px;">
                <i class="fa-solid fa-basket-shopping" style="font-size: 45px; color: #f2b8ca; margin-bottom: 15px; display:block;"></i>
                <h4 style="font-size: 18px; color: #4a2837; margin-bottom: 8px;">🌸 Your cart is empty</h4>
                <p style="font-size: 13px; color: #88787f; margin-bottom: 20px;">
                    Select your favorite flowers in Grams or Kg and add them here!
                </p>
                <button class="shop-now-drawer-btn" onclick="toggleCart(false)" style="padding: 10px 24px; background: #8e4585; color: white; border: none; border-radius: 25px; font-size: 13px; font-weight: 600; cursor: pointer;">
                    Shop Flowers Now
                </button>
            </div>
        `;

        updateCartTotals(0);
        return;
    }

    let subtotal = 0;

    cart.forEach(item => {
        const unitPrice = Number(item.price);
        const itemQty = Number(item.quantity || 1);
        const itemTotal = unitPrice * itemQty;
        const itemIdentifier = item.itemKey || item.productId || item.id;
        const isPiece = item.weight && (item.weight.toLowerCase().includes('piece') || item.weight.toLowerCase().includes('maalai') || item.weight.toLowerCase().includes('bouquet'));
        const unitIcon = isPiece ? '📿' : '⚖️';
        const weightBadge = item.weight ? `<span style="display:inline-block; font-size:11px; background:#fdf0f5; color:#8e4585; padding:2px 8px; border-radius:12px; font-weight:600; margin-top:2px;">${unitIcon} ${item.weight}</span>` : '';

        subtotal += itemTotal;

        const itemElement = document.createElement("div");
        itemElement.className = "cart-item";

        itemElement.innerHTML = `
            <img
                src="${item.image}"
                alt="${item.name}"
                onerror="this.src='images/flower-placeholder.jpg'"
            >

            <div class="cart-item-details">
                <h4 style="font-size: 14px; font-weight: 600; color: #30292d; margin-bottom: 2px;">
                    ${item.name}
                </h4>

                ${weightBadge}

                <span class="unit-price" style="display:block; font-size: 12px; color: #88787f; margin-top: 3px;">
                    ${formatPrice(item.price)} each
                </span>

                <div class="quantity-controls" style="margin-top: 6px;">
                    <button onclick="updateQuantity('${itemIdentifier}', ${itemQty - 1})">
                        -
                    </button>

                    <span>
                        ${itemQty}
                    </span>

                    <button onclick="updateQuantity('${itemIdentifier}', ${itemQty + 1})">
                        +
                    </button>
                </div>
            </div>

            <div class="cart-item-right" style="text-align: right;">
                <strong style="color: #8e4585; font-size: 15px;">
                    ${formatPrice(itemTotal)}
                </strong>

                <i
                    class="fa-regular fa-trash-can remove-item-btn"
                    onclick="removeFromCart('${itemIdentifier}')"
                    title="Remove item"
                    style="cursor: pointer; color: #bcaaa4; margin-top: 10px; display: block;"
                ></i>
            </div>
        `;

        container.appendChild(itemElement);
    });

    updateCartTotals(subtotal);
}


/* =========================================================
   CART TOTALS
   ========================================================= */

function updateCartTotals(subtotal) {

    const subtotalElement =
        document.getElementById(
            "cart-subtotal"
        );


    const totalElement =
        document.getElementById(
            "cart-total"
        );


    if (subtotalElement) {

        subtotalElement.textContent =
            formatPrice(subtotal);
    }


    if (totalElement) {

        totalElement.textContent =
            formatPrice(subtotal);
    }
}


/* =========================================================
   CHECKOUT
   ========================================================= */

function goToCheckout() {
    checkout();
}

function checkout() {
    const cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];

    if (cart.length === 0) {
        showToast("Your cart is empty. Please add flowers to proceed!");
        return;
    }

    const activeUser = JSON.parse(localStorage.getItem("bloomflow_active_user"));
    if (!activeUser) {
        showToast("Please log in first to continue with your order!");
        setTimeout(() => {
            window.location.href = "login.html?redirect=checkout.html";
        }, 700);
        return;
    }

    window.location.href = "checkout.html";
}


/* =========================================================
   FAVORITES / WISHLIST MANAGEMENT
   ========================================================= */

function getWishlist() {
    try {
        const stored = JSON.parse(localStorage.getItem("bloomflow_wishlist"));
        if (!Array.isArray(stored)) return [];
        return stored;
    } catch (e) {
        return [];
    }
}

function saveWishlist(wishlist) {
    localStorage.setItem("bloomflow_wishlist", JSON.stringify(wishlist));
    updateWishlistCount();
    renderWishlist();
    loadWishlistState();
}

function toggleFavorite(button, productName) {
    let wishlist = getWishlist();
    const product = products.find(p => p.name.toLowerCase() === productName.toLowerCase()) || {
        id: Date.now(),
        name: productName,
        price: 50,
        unit: '100g',
        image: 'images/flower-placeholder.jpg',
        category: 'Fresh Flowers'
    };

    // Check by name or id
    const existingIndex = wishlist.findIndex(item => 
        (typeof item === 'string' && item.toLowerCase() === productName.toLowerCase()) ||
        (typeof item === 'object' && item.name && item.name.toLowerCase() === productName.toLowerCase())
    );

    const icon = button ? button.querySelector("i") : null;

    if (existingIndex === -1) {
        wishlist.push({
            id: product.id,
            name: product.name,
            price: Number(product.price),
            unit: product.unit || '100g',
            image: product.image,
            category: product.type === 'maalai' ? 'Flower Garland' : 'Fresh Flower'
        });

        if (icon) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "#e91e63";
            icon.style.transform = "scale(1.3)";
            setTimeout(() => { icon.style.transform = "scale(1)"; }, 250);
        }

        showToast(`❤️ ${product.name} saved to your Wishlist!`);
    } else {
        wishlist.splice(existingIndex, 1);

        if (icon) {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "";
        }

        showToast(`${product.name} removed from Wishlist.`);
    }

    saveWishlist(wishlist);
}

function updateWishlistCount() {
    const wishlist = getWishlist();
    const count = wishlist.length;

    const navBadge1 = document.getElementById("wishlist-count");
    if (navBadge1) {
        navBadge1.textContent = count;
        navBadge1.style.display = count > 0 ? "inline-flex" : "none";
    }

    const navBadge2 = document.getElementById("nav-wishlist-count");
    if (navBadge2) {
        navBadge2.textContent = count;
        navBadge2.style.display = count > 0 ? "inline-flex" : "none";
    }

    const drawerCount = document.getElementById("wishlist-drawer-count");
    if (drawerCount) {
        drawerCount.textContent = count;
    }
}

function openWishlist() {
    renderWishlist();
    const drawer = document.getElementById("wishlist-drawer");
    const overlay = document.getElementById("wishlist-overlay");
    if (drawer) drawer.classList.add("open");
    if (overlay) overlay.classList.add("open");
    document.body.style.overflow = "hidden";
}

function closeWishlist() {
    const drawer = document.getElementById("wishlist-drawer");
    const overlay = document.getElementById("wishlist-overlay");
    if (drawer) drawer.classList.remove("open");
    if (overlay) overlay.classList.remove("open");
    document.body.style.overflow = "";
}

function renderWishlist() {
    const container = document.getElementById("wishlist-items-container");
    if (!container) return;

    const wishlist = getWishlist();
    updateWishlistCount();

    if (wishlist.length === 0) {
        container.innerHTML = `
            <div class="empty-cart" style="text-align: center; padding: 50px 20px;">
                <i class="fa-regular fa-heart" style="font-size: 48px; color: #f48fb1; margin-bottom: 15px; display: block;"></i>
                <h3 style="font-size: 18px; color: #59434d; margin-bottom: 8px;">Your Wishlist is Empty</h3>
                <p style="font-size: 13px; color: #8c7d83;">Tap the heart icon on any flower to save your favorites here!</p>
            </div>
        `;
        const moveAllBtn = document.getElementById("wishlist-move-all-btn");
        if (moveAllBtn) moveAllBtn.style.display = "none";
        return;
    }

    const moveAllBtn = document.getElementById("wishlist-move-all-btn");
    if (moveAllBtn) moveAllBtn.style.display = "block";

    container.innerHTML = wishlist.map(item => {
        const name = typeof item === 'object' ? item.name : item;
        const prod = products.find(p => p.name.toLowerCase() === name.toLowerCase()) || (typeof item === 'object' ? item : {
            id: 1,
            name: name,
            price: 50,
            unit: '100g',
            image: 'images/flower-placeholder.jpg'
        });

        return `
            <div class="wishlist-item">
                <img src="${prod.image}" alt="${prod.name}" onclick="openDetailsModal(${prod.id})" onerror="this.src='images/flower-placeholder.jpg'">
                <div class="wishlist-item-details">
                    <h4 onclick="openDetailsModal(${prod.id})">${prod.name}</h4>
                    <span class="wishlist-price">${formatPrice(prod.price)} <small style="font-size:11px; color:#888;">/ ${prod.unit || '100g'}</small></span>
                </div>
                <div class="wishlist-item-actions">
                    <button class="wishlist-add-btn" onclick="moveWishlistItemToCart('${prod.name}')" title="Move to Cart">
                        <i class="fa-solid fa-cart-plus"></i> Add
                    </button>
                    <button class="wishlist-remove-btn" onclick="removeFromWishlist('${prod.name}')" title="Remove">
                        <i class="fa-solid fa-trash-can"></i>
                    </button>
                </div>
            </div>
        `;
    }).join("");
}

function removeFromWishlist(productName) {
    let wishlist = getWishlist();
    wishlist = wishlist.filter(item => {
        const name = typeof item === 'object' ? item.name : item;
        return name.toLowerCase() !== productName.toLowerCase();
    });
    saveWishlist(wishlist);
    showToast(`${productName} removed from Wishlist.`);
}

function moveWishlistItemToCart(productName) {
    const prod = products.find(p => p.name.toLowerCase() === productName.toLowerCase());
    if (prod) {
        addToCart(prod.id);
    } else {
        let cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];
        cart.push({
            id: Date.now(),
            productId: Date.now(),
            name: productName,
            price: 50,
            unit: '100g',
            image: 'images/flower-placeholder.jpg',
            quantity: 1
        });
        localStorage.setItem("bloomflow_cart", JSON.stringify(cart));
        updateCartUI();
        showToast(`🛒 ${productName} moved to cart!`);
    }

    removeFromWishlist(productName);
}

function addAllWishlistToCart() {
    const wishlist = getWishlist();
    if (wishlist.length === 0) return;

    let cart = JSON.parse(localStorage.getItem("bloomflow_cart")) || [];

    wishlist.forEach(item => {
        const name = typeof item === 'object' ? item.name : item;
        const prod = products.find(p => p.name.toLowerCase() === name.toLowerCase()) || (typeof item === 'object' ? item : null);
        
        if (prod) {
            const existing = cart.find(c => c.name.toLowerCase() === prod.name.toLowerCase());
            if (existing) {
                existing.quantity += 1;
            } else {
                cart.push({
                    id: prod.id,
                    productId: prod.id,
                    name: prod.name,
                    price: Number(prod.price),
                    unit: prod.unit || '100g',
                    image: prod.image,
                    quantity: 1
                });
            }
        }
    });

    localStorage.setItem("bloomflow_cart", JSON.stringify(cart));
    updateCartUI();
    saveWishlist([]);
    closeWishlist();
    openCart();
    showToast(`🌸 All items moved to cart successfully!`);
}

/* =========================================================
   LOAD WISHLIST STATE ON CARDS
   ========================================================= */

function loadWishlistState() {
    const wishlist = getWishlist();
    const savedNames = wishlist.map(item => (typeof item === 'object' ? item.name : item).toLowerCase());

    document.querySelectorAll(".favorite-btn").forEach(button => {
        const name = button.closest(".product-card")?.querySelector("h3")?.textContent?.trim()?.toLowerCase();

        const icon = button.querySelector("i");
        if (icon && name && savedNames.includes(name)) {
            icon.classList.remove("fa-regular");
            icon.classList.add("fa-solid");
            icon.style.color = "#e91e63";
        } else if (icon) {
            icon.classList.remove("fa-solid");
            icon.classList.add("fa-regular");
            icon.style.color = "";
        }
    });

    updateWishlistCount();
}


/* =========================================================
   FLOWER DETAILS NAVIGATION
   ========================================================= */

function openDetailsModal(productId) {
    if (!productId) return;
    window.location.href = `flower-details.html?id=${encodeURIComponent(productId)}`;
}


/* =========================================================
   PRODUCT DESCRIPTION
   ========================================================= */

function getProductDescription(product) {

    const descriptions = {

        Mallipoo:
            "Fresh local Mallipoo flowers known for their beautiful white buds and strong fragrance. Perfect for hair decoration, pooja, weddings and traditional occasions.",

        Mullai:
            "Fresh Mullai flowers with a soft natural fragrance. A traditional choice for hair decoration, pooja and special occasions.",

        Samanthi:
            "Bright and fresh Samanthi flowers commonly used for decoration, pooja and festive occasions.",

        Sevanthi:
            "Fresh Sevanthi blooms available in beautiful vibrant shades. Suitable for decoration, pooja and functions.",

        Kanakambaram:
            "Traditional bright orange Kanakambaram flowers known for their attractive appearance and long-lasting freshness.",

        Pichi:
            "Beautiful fragrant Pichi flowers carefully selected for freshness. Ideal for traditional hair decoration and special occasions.",

        Arali:
            "Fresh Arali flowers traditionally used for pooja and religious purposes.",

        Hibiscus:
            "Fresh vibrant Hibiscus flowers suitable for pooja, traditional use and decoration.",

        Lotus:
            "Fresh Lotus flower with beautiful natural petals. Commonly used for pooja, temple offerings and traditional decoration.",

        Gerbera:
            "Bright and colorful Gerbera flowers perfect for bouquets, decoration and celebrations.",

        Rose:
            "Fresh roses with attractive petals and natural fragrance. Perfect for romantic occasions, bouquets and decoration.",

        "Mallipoo Maalai":
            "Beautifully hand-strung Mallipoo Maalai made with fresh fragrant jasmine flowers.",

        "Rose Maalai":
            "Elegant Rose Maalai carefully arranged for weddings, celebrations and special occasions.",

        "Samanthi Maalai":
            "Fresh Samanthi Maalai made with vibrant flowers for traditional ceremonies and celebrations.",

        "Sambangi Maalai":
            "Fragrant Sambangi Maalai with beautiful fresh blooms, suitable for traditional functions.",

        "Petals Maalai":
            "Decorative Maalai created using colorful flower petals for special celebrations.",

        "Ooty Rose Maalai":
            "Premium Ooty Rose Maalai with elegant roses arranged beautifully for special occasions.",

        "Lotus Maalai":
            "Traditional Lotus Maalai made with fresh Lotus flowers for pooja and ceremonial occasions.",

        "Gerbera Maalai":
            "Colorful Gerbera Maalai arranged beautifully for celebrations and decorative purposes.",

        "Orchid Maalai":
            "Premium Orchid Maalai designed for elegant weddings, functions and special celebrations.",

        "Vetriver Maalai":
            "Traditional fragrant Vetriver Maalai with a refreshing natural aroma.",

        "Cardamom Maalai":
            "Special traditional Cardamom Maalai prepared for ceremonial and cultural occasions.",

        "Rose and Sevanthi Maalai":
            "Beautiful combination of fresh roses and Sevanthi flowers arranged into an attractive Maalai.",

        "Mayilliragu Maalai":
            "Traditional decorative Mayilliragu Maalai suitable for special cultural and ceremonial occasions.",

        "Vaadamalli Maalai":
            "Beautiful Vaadamalli Maalai made with fresh traditional flowers for celebrations and ceremonies."
    };


    return (
        descriptions[product.name] ||
        `Fresh ${product.name} carefully selected and prepared by BloomFlow for your special occasions.`
    );
}


/* =========================================================
   CLOSE DETAILS MODAL
   ========================================================= */

function closeDetailsModal(event) {

    const modal =
        document.getElementById(
            "details-modal-overlay"
        );


    if (!modal) return;


    if (
        event === null ||
        event.target === modal
    ) {

        modal.classList.remove(
            "show"
        );


        setTimeout(() => {

            modal.style.display =
                "none";

        }, 300);


        document.body.style.overflow =
            "";


        currentDetailsProductId =
            null;
    }
}


/* =========================================================
   DETAILS QUANTITY
   ========================================================= */

function changeDetailsQty(change) {

    const qtyElement =
        document.getElementById(
            "details-qty"
        );


    if (!qtyElement) return;


    let quantity =
        parseInt(
            qtyElement.textContent
        ) || 1;


    quantity =
        Math.max(
            1,
            quantity + change
        );


    currentDetailsQuantity =
        quantity;


    qtyElement.textContent =
        quantity;
}


/* =========================================================
   ADD DETAILS PRODUCT TO CART
   ========================================================= */

function detailsAddToCart(productId) {

    const product =
        products.find(
            p =>
                Number(p.id) ===
                Number(productId)
        );


    if (!product) return;


    addToCart(
        product.id,
        currentDetailsQuantity
    );


    closeDetailsModal(null);
}


/* =========================================================
   REVIEWS DATABASE
   ========================================================= */

const defaultReviews = {

    1: [
        {
            name: "Customer",
            rating: 5,
            text: "Very fresh and fragrant Mallipoo.",
            date: "2026-08-20"
        }
    ],

    2: [
        {
            name: "Customer",
            rating: 5,
            text: "Fresh Mullai and good quality.",
            date: "2026-08-20"
        }
    ],

    12: [
        {
            name: "Customer",
            rating: 5,
            text: "Beautiful Mallipoo Maalai.",
            date: "2026-08-20"
        }
    ]
};


/* =========================================================
   RENDER REVIEWS
   ========================================================= */

function renderReviewsList(productId) {

    const container =
        document.getElementById(
            "reviews-list"
        );


    if (!container) return;


    container.innerHTML = "";


    let reviews =
        JSON.parse(
            localStorage.getItem(
                "bloomflow_reviews"
            )
        ) || {};


    if (!reviews[productId]) {

        reviews[productId] =
            defaultReviews[productId] || [];

        localStorage.setItem(
            "bloomflow_reviews",
            JSON.stringify(reviews)
        );
    }


    const productReviews =
        reviews[productId];


    if (
        !productReviews ||
        productReviews.length === 0
    ) {

        container.innerHTML = `

            <p
                style="
                    font-size:13.5px;
                    color:#888;
                    font-style:italic;
                "
            >
                No reviews yet.
                Be the first to review this product!
            </p>

        `;

        return;
    }


    productReviews.forEach(review => {

        let stars = "";


        for (
            let i = 1;
            i <= 5;
            i++
        ) {

            stars +=
                i <= review.rating
                    ? '<i class="fa-solid fa-star"></i>'
                    : '<i class="fa-regular fa-star"></i>';
        }


        const card =
            document.createElement("div");


        card.className =
            "review-card";


        card.innerHTML = `

            <div class="review-header">

                <span class="reviewer-name">
                    ${review.name}
                </span>

                <div class="review-stars">
                    ${stars}
                </div>

            </div>

            <p class="review-text">
                ${review.text}
            </p>

        `;


        container.appendChild(card);

    });
}


/* =========================================================
   REVIEW RATING
   ========================================================= */

function setReviewRating(rating) {

    currentReviewRating =
        rating;


    const stars =
        document.querySelectorAll(
            "#rating-stars-input i"
        );


    stars.forEach(
        (star, index) => {

            if (index < rating) {

                star.classList.remove(
                    "fa-regular"
                );

                star.classList.add(
                    "fa-solid"
                );

                star.classList.add(
                    "active"
                );

            } else {

                star.classList.remove(
                    "fa-solid"
                );

                star.classList.remove(
                    "active"
                );

                star.classList.add(
                    "fa-regular"
                );
            }
        }
    );
}


/* =========================================================
   RESET REVIEW FORM
   ========================================================= */

function resetReviewForm() {

    const text =
        document.getElementById(
            "review-text"
        );


    if (text) {

        text.value = "";
    }


    setReviewRating(5);
}


/* =========================================================
   SUBMIT REVIEW
   ========================================================= */

function submitReview(event) {

    event.preventDefault();


    if (!currentDetailsProductId)
        return;


    const activeUser =
        JSON.parse(
            localStorage.getItem(
                "bloomflow_active_user"
            )
        );


    const name =
        activeUser?.name ||
        "Anonymous Customer";


    const text =
        document
            .getElementById(
                "review-text"
            )
            ?.value
            ?.trim();


    if (!text) {

        showToast(
            "Please write your review."
        );

        return;
    }


    let reviews =
        JSON.parse(
            localStorage.getItem(
                "bloomflow_reviews"
            )
        ) || {};


    if (!reviews[currentDetailsProductId]) {

        reviews[currentDetailsProductId] =
            [];
    }


    reviews[currentDetailsProductId]
        .push({

            name: name,

            rating:
                currentReviewRating,

            text: text,

            date:
                new Date()
                    .toISOString()
                    .split("T")[0]
        });


    localStorage.setItem(
        "bloomflow_reviews",
        JSON.stringify(reviews)
    );


    showToast(
        "Review submitted successfully!"
    );


    renderReviewsList(
        currentDetailsProductId
    );


    resetReviewForm();
}


/* =========================================================
   TOAST
   ========================================================= */

function showToast(message) {

    const container =
        document.getElementById(
            "toast-container"
        );


    if (!container) return;


    const toast =
        document.createElement("div");


    toast.className =
        "toast";


    toast.innerHTML = `

        <i class="fa-solid fa-circle-check"></i>

        <span>
            ${message}
        </span>

    `;


    container.appendChild(
        toast
    );


    setTimeout(() => {

        toast.classList.add(
            "show"
        );

    }, 10);


    setTimeout(() => {

        toast.classList.remove(
            "show"
        );


        setTimeout(() => {

            toast.remove();

        }, 300);

    }, 2500);
}


/* =========================================================
   NAVBAR AUTH
   ========================================================= */

function updateNavbarAuth() {

    try {

        const activeUser =
            JSON.parse(
                localStorage.getItem(
                    "bloomflow_active_user"
                )
            );


        const navIcons =
            document.querySelector(
                ".nav-icons"
            );


        if (!navIcons) return;


        const loginButton =
            navIcons.querySelector(
                ".login-btn"
            );


        if (
            activeUser &&
            loginButton
        ) {

            const firstName =
                activeUser.name
                    ? activeUser.name
                        .split(" ")[0]
                    : "Account";


            loginButton.outerHTML = `

                <a
                    href="profile.html"
                    class="login-btn"
                    style="
                        display:flex;
                        align-items:center;
                        gap:6px;
                        padding:8px 16px;
                    "
                >

                    <i
                        class="fa-regular fa-circle-user"
                    ></i>

                    ${firstName}

                </a>


                <a
                    href="#"
                    onclick="logoutUser(event)"
                    title="Sign Out"
                    style="
                        color:inherit;
                        font-size:16px;
                        margin-left:5px;
                        display:inline-flex;
                        align-items:center;
                    "
                >

                    <i
                        class="fa-solid fa-right-from-bracket"
                    ></i>

                </a>

            `;
        }

    } catch (error) {

        console.error(
            "Navbar auth error:",
            error
        );
    }
}


/* =========================================================
   LOGOUT
   ========================================================= */

function logoutUser(event) {

    if (event) {

        event.preventDefault();
    }


    localStorage.removeItem(
        "bloomflow_active_user"
    );


    window.location.reload();
}


/* =========================================================
   HEADER SCROLL
   ========================================================= */

function setupHeaderScroll() {

    if (!header) return;


    window.addEventListener(
        "scroll",
        function () {

            if (window.scrollY > 50) {

                header.classList.add(
                    "scrolled"
                );

            } else {

                header.classList.remove(
                    "scrolled"
                );
            }

        }
    );
}


/* =========================================================
   URL PARAMETERS
   ========================================================= */

function handleURLParameters() {

    const params =
        new URLSearchParams(
            window.location.search
        );


    const category =
        params.get(
            "category"
        );


    const focusSearch =
        params.get(
            "focusSearch"
        );


    const openCart =
        params.get(
            "openCart"
        );


    if (category) {

        const decodedCategory =
            decodeURIComponent(
                category
            )
            .toLowerCase();


        const categoryMap = {

            mallipoo:
                "flowers",

            mullai:
                "flowers",

            samanthi:
                "flowers",

            sevanthi:
                "flowers",

            kanakambaram:
                "flowers",

            pichi:
                "flowers",

            arali:
                "flowers",

            hibiscus:
                "flowers",

            lotus:
                "flowers",

            gerbera:
                "flowers",

            rose:
                "flowers",

            "mallipoo maalai":
                "maalai",

            "rose maalai":
                "maalai",

            "samanthi maalai":
                "maalai",

            "sambangi maalai":
                "maalai",

            "petals maalai":
                "maalai",

            "ooty rose maalai":
                "maalai",

            "lotus maalai":
                "maalai",

            "gerbera maalai":
                "maalai",

            "orchid maalai":
                "maalai",

            "vetriver maalai":
                "maalai",

            "cardamom maalai":
                "maalai",

            "rose and sevanthi maalai":
                "maalai",

            mayilmaalai:
                "maalai",

            "mayil maalai":
                "maalai",

            "vaadamalli maalai":
                "maalai"
        };


        selectedCategory =
            categoryMap[
                decodedCategory
            ] || "all";


        filterButtons.forEach(
            button => {

                button.classList.remove(
                    "active"
                );


                if (
                    button.dataset.category ===
                    selectedCategory
                ) {

                    button.classList.add(
                        "active"
                    );
                }
            }
        );
    }


    if (
        focusSearch ===
        "true"
    ) {

        setTimeout(() => {

            focusSearchInput();

        }, 400);
    }


    if (
        openCart ===
        "true"
    ) {

        setTimeout(() => {

            toggleCart(true);

        }, 400);
    }

    const openWishlistParam = params.get("openWishlist");
    if (openWishlistParam === "true") {
        setTimeout(() => {
            openWishlist();
        }, 400);
    }
}


/* =========================================================
   WISHLIST NAV ICON
   ========================================================= */

function setupWishlistIcon() {
    const wishlistIcon = document.getElementById("wishlist-icon");
    if (wishlistIcon) {
        wishlistIcon.addEventListener("click", function (e) {
            e.preventDefault();
            openWishlist();
        });
    }
}


/* =========================================================
   INITIALIZE
   ========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    async function () {

        setupHeaderScroll();

        updateNavbarAuth();

        handleURLParameters();

        setupWishlistIcon();

        initSearchListeners();

        renderProducts();

        updateCartUI();

        loadWishlistState();

        // Connect to MongoDB Backend if available
        if (window.BloomAPI && window.BloomAPI.products) {
            try {
                const res = await window.BloomAPI.products.getAll();
                if (res.ok && res.data && res.data.data && res.data.data.length > 0) {
                    products = res.data.data;
                    renderProducts();
                    console.log("🌸 Loaded", products.length, "fresh flowers from MongoDB!");
                }
            } catch (err) {
                console.warn("MongoDB products fetch:", err);
            }
        }

    }
);


/* =========================================================
   CROSS-PAGE CART UPDATE
   ========================================================= */

/* =========================================================
   MOBILE NAVIGATION DRAWER
   ========================================================= */

function toggleMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileNavBackdrop');
    if (drawer && backdrop) {
        const isOpen = drawer.classList.contains('open');
        if (isOpen) {
            closeMobileMenu();
        } else {
            drawer.classList.add('open');
            backdrop.classList.add('open');
            document.body.style.overflow = 'hidden';
        }
    }
}

function closeMobileMenu() {
    const drawer = document.getElementById('mobileNavDrawer');
    const backdrop = document.getElementById('mobileNavBackdrop');
    if (drawer) drawer.classList.remove('open');
    if (backdrop) backdrop.classList.remove('open');
    document.body.style.overflow = '';
}

// Update authentication button in desktop navbar and mobile drawer
function updateFlowersNavbarAuth() {
    try {
        const activeUser = JSON.parse(localStorage.getItem('bloomflow_active_user'));
        const navActions = document.querySelector('.nav-actions');
        if (activeUser && navActions) {
            const loginBtn = navActions.querySelector('.desktop-login-btn') || navActions.querySelector('.login-btn');
            if (loginBtn) {
                const firstName = (activeUser.name || 'User').split(' ')[0];
                loginBtn.outerHTML = `
                    <a href="profile.html" class="login-btn desktop-login-btn" style="display:inline-flex; align-items:center; gap:6px; padding:8px 15px;">
                        <i class="fa-regular fa-circle-user"></i> ${firstName}
                    </a>
                `;
            }
        }
    } catch (e) {
        console.error(e);
    }
}

document.addEventListener('DOMContentLoaded', updateFlowersNavbarAuth);