/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== Menu Show =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== Hide Show =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*=============== IMAGE GALLERY ===============*/
function imgGallery() {
  const mainImg = document.querySelector(".details__img"),
    smallImg = document.querySelectorAll(".details__small-img");

  smallImg.forEach((img) => {
    img.addEventListener("click", function () {
      mainImg.src = this.src;
    });
  });
}

imgGallery();

/*=============== SWIPER CATEGORIES ===============*/
let swiperCategories = new Swiper(".categories__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    350: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 6,
      spaceBetween: 24,
    },
  },
});

/*=============== SWIPER PRODUCTS ===============*/
let swiperProducts = new Swiper(".new__container", {
  spaceBetween: 24,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 24,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  },
});

/*=============== PRODUCTS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]"),
  tabsContents = document.querySelectorAll("[content]");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const target = document.querySelector(tab.dataset.target);

    tabsContents.forEach((tabsContent) => {
      tabsContent.classList.remove("active-tab");
    });

    target.classList.add("active-tab");

    tabs.forEach((tab) => {
      tab.classList.remove("active-tab");
    });

    tab.classList.add("active-tab");
  });
});

let cartCounter = 0;

// Function to update the cart counter
function updateCartCounter() {
  document.querySelector('.cart__counter').textContent = cartCounter;
}

// Add event listeners to the "Add to Cart" buttons
document.querySelectorAll('.action__btn.cart__btn').forEach((button) => {
  button.addEventListener('click', () => {
    cartCounter++;
    updateCartCounter();
  });
});
// Function to display the cart items
function displayCartItems() {
  const cartContents = document.querySelector('.cart__contents');
  const cartTable = document.createElement('table');
  cartTable.classList.add('cart__table');
  cartTable.innerHTML = `
    <thead>
      <tr>
        <th>Product</th>
        <th>Quantity</th>
        <th>Price</th>
        <th>Total</th>
        <th>Remove</th>
      </tr>
    </thead>
    <tbody>
    </tbody>
  `;
  cartContents.appendChild(cartTable);
  const tbody = cartTable.querySelector('tbody');
  cart.items.forEach((item, index) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${item.title}</td>
      <td>${item.quantity}</td>
      <td>${item.price}</td>
      <td>${item.quantity * item.price}</td>
      <td><button class="remove__btn" data-index="${index}">Remove</button></td>
    `;
    tbody.appendChild(row);
  });
}

// Call the displayCartItems function when the cart contents are toggled
document.querySelector('.cart__link').addEventListener('click', () => {
  const cartContents = document.querySelector('.cart__contents');
  if (cartContents.classList.contains('show')) {
    displayCartItems();
  }
});