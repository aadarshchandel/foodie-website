// ================= FOOD DATA =================

let foods = [
    {name:"Pizza", price:250, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"},
    {name:"Burger", price:120, rating:"⭐⭐⭐", img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
    {name:"Dosa", price:80, rating:"⭐⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3"},
    {name:"Idli", price:60, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be"},
    {name:"Paneer", price:220, rating:"⭐⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7"},
    {name:"Biryani", price:200, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"},
    {name:"Samosa", price:20, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950"}
];

// ================= DISPLAY MENU =================

function displayMenu() {
    let menuList = document.getElementById("menuList");

    if (!menuList) return;

    menuList.innerHTML = "";

    foods.forEach((food, index) => {
        menuList.innerHTML += `
        <div class="card">
            <img src="${food.img}" alt="${food.name}">
            <h3>${food.name}</h3>
            <p>₹${food.price}</p>
            <p>${food.rating}</p>
            <button onclick="addToCart(${index})">🛒 Add to Cart</button>
        </div>`;
    });
}

// ================= CART =================

let cart = [];

function addToCart(index) {
    cart.push(foods[index]);
    updateCart();
}

function removeFromCart(i) {
    cart.splice(i, 1);
    updateCart();
}

function toggleCart() {
    document.getElementById("cartPopup").classList.toggle("active");
}

function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let count = document.getElementById("cartCount");
    let totalPrice = document.getElementById("totalPrice");

    if (!cartItems || !count || !totalPrice) return;

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button onclick="removeFromCart(${i})">X</button>
        </div>`;
    });

    count.innerText = cart.length;
    totalPrice.innerText = total;
}

// ================= NAVBAR =================

function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}

// ================= INIT =================

window.onload = function () {
    displayMenu();
};
