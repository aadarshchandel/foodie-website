// SHOW USER NAME
if (window.location.pathname.includes("menu.html")) {
    let name = localStorage.getItem("userName");
    if (name) {
        document.getElementById("welcomeUser").innerText = "Welcome, " + name + " 👋";
    }
}// 🔐 PROTECT MENU PAGE (ADD THIS AT TOP)

if (window.location.pathname.includes("menu.html")) {
    if (!localStorage.getItem("isLoggedIn")) {
        alert("❌ Please login first!");
        window.location.href = "auth.html";
    }
}

// LOGIN SYSTEM
let loggedIn = false;

function login() {
    loggedIn = true;
    alert("✅ Logged In Successfully!");
}

function logout() {
    loggedIn = false;
    alert("✅ Logged Out Successfully!");
}

// SECTION CONTROL
function showSection(section) {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('admin').classList.add('hidden');

    if (section === 'admin' && !loggedIn) {
        alert("❌ Please login first!");
        return;
    }

    document.getElementById(section).classList.remove('hidden');
}

// FOOD DATA
let foods = [
    {name:"Pizza", price:250, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1600891964599-f61ba0e24092"},
    {name:"Burger", price:120, rating:"⭐⭐⭐", img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
    {name:"Dosa", price:80, rating:"⭐⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1589308078059-be1415eab4c3"},
    {name:"Idli", price:60, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1626074353765-517a681e40be"},
    {name:"Paneer", price:220, rating:"⭐⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7"},
    {name:"Biryani", price:200, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"},
    {name:"Samosa", price:20, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1601050690597-df0568f70950"},
    {name:"Jalebi", price:100, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1630409346824-4f0e7b080087"},
    {name:"Poha", price:50, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1625944230935-1c5c0c2e8c9d"},
    {name:"Vada Pav", price:40, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1606755962773-d324e2b67f73"},
    {name:"Chole Bhature", price:150, rating:"⭐⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1626132647523-66a1d8e9a8d5"},
    {name:"Pav Bhaji", price:130, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1626078299035-5c1b5a7c3c7a"},
    {name:"Kachori", price:30, rating:"⭐⭐⭐", img:"https://images.unsplash.com/photo-1627308594190-a1a0f7b86a23"},
    {name:"Dal Tadka", price:140, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1625944525903-b6f5dc9d6b4d"},
    {name:"Roti", price:20, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1617196034183-421b4917c92d"},
    {name:"Fried Rice", price:160, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1603133872878-684f208fb84b"},
    {name:"Noodles", price:140, rating:"⭐⭐⭐", img:"https://images.unsplash.com/photo-1617191519005-8e3f6c7a7f77"},
    {name:"Ice Cream", price:90, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1563805042-7684c019e1cb"},
    {name:"Gulab Jamun", price:80, rating:"⭐⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1601050690117-94f5f6fa4c3d"},
    {name:"Rasgulla", price:90, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec"},
    {name:"Tea", price:20, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},
    {name:"Coffee", price:40, rating:"⭐⭐⭐⭐", img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"}
];

// DISPLAY MENU
function displayMenu() {
    let menuList = document.getElementById("menuList");
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

// ORDER FUNCTION
function orderFood(index) {
    let qty = document.getElementById("qty" + index).value;
    alert("🛒 Ordered " + qty + " x " + foods[index].name);
}

// ADMIN FUNCTIONS
function addFood() {
    let name = document.getElementById("foodName").value;
    let price = document.getElementById("foodPrice").value;
    let rating = document.getElementById("foodRating").value;

    if (!name || !price || !rating) {
        alert("❌ Fill all fields!");
        return;
    }

    foods.push({
        name, price, rating,
        img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836"
    });

    displayMenu();
    alert("✅ Food Added!");
}

function deleteFood() {
    foods.pop();
    displayMenu();
    alert("❌ Last Food Removed!");
}

// TOGGLE LOGIN ↔ SIGNUP
function toggleForm() {
    document.getElementById("loginForm").classList.toggle("hidden");
    document.getElementById("signupForm").classList.toggle("hidden");
}



// SIGNUP
function handleSignup() {
    let name = document.getElementById("signupName").value;
    let email = document.getElementById("signupEmail").value;
    let password = document.getElementById("signupPassword").value;

    if (!name || !email || !password) {
        alert("❌ Fill all fields!");
        return;
    }

    localStorage.setItem("userName", name); // ✅ store name
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);
    localStorage.setItem("isLoggedIn", "true");

    window.location.href = "menu.html";
}


// LOGIN
function handleLogin() {
    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {
        localStorage.setItem("isLoggedIn", "true");

        alert("✅ Login Successful!");
        window.location.href = "menu.html";
    } else {
        alert("❌ Invalid credentials!");
    }
}

        // 🔥 REDIRECT (VERY IMPORTANT)
        window.location.href = "menu.html";

   
// LOGOUT FUNCTION
function logoutUser() {
    localStorage.removeItem("isLoggedIn");
    alert("👋 Logged Out!");

    window.location.href = "auth.html"; // ✅ update here
}


// 🔐 PROTECT MENU PAGE
if (window.location.pathname.includes("menu.html")) {
    let isLoggedIn = localStorage.getItem("isLoggedIn");

    if (!isLoggedIn) {
        alert("❌ Please login first!");
        window.location.href = "login.html";
    }
}


// ✅ SIGNUP FUNCTION
function handleSignup() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (!name || !email || !password) {
        alert("❌ Please fill all fields!");
        return;
    }

    // Save user data
    localStorage.setItem("userEmail", email);
    localStorage.setItem("userPassword", password);

    // IMPORTANT: Auto login after signup
    localStorage.setItem("isLoggedIn", "true");

    alert("✅ Signup Successful!");

    // 🔥 Redirect to MENU PAGE
    window.location.href = "menu.html";
}


// ✅ LOGIN FUNCTION
function handleLogin() {
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let savedEmail = localStorage.getItem("userEmail");
    let savedPassword = localStorage.getItem("userPassword");

    if (email === savedEmail && password === savedPassword) {

        // Save login status
        localStorage.setItem("isLoggedIn", "true");

        alert("✅ Login Successful!");

        // 🔥 Redirect to MENU PAGE
        window.location.href = "menu.html";

    } else {
        alert("❌ Invalid Email or Password!");
    }
}


// ✅ LOGOUT FUNCTION
function logoutUser() {
    localStorage.removeItem("isLoggedIn");

    alert("👋 Logged Out Successfully!");

    // Redirect to login page
    window.location.href = "login.html";
}


function updateCart() {
    let cartItems = document.getElementById("cartItems");
    let count = document.getElementById("cartCount");
    let totalPrice = document.getElementById("totalPrice");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, i) => {
        total += item.price;

        cartItems.innerHTML += `
        <div class="cart-item">
            <span>${item.name}</span>
            <span>₹${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${i})">X</button>
        </div>`;
    });

    count.innerText = cart.length;
    totalPrice.innerText = total;
}

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

function goToCheckout() {
    localStorage.setItem("cartData", JSON.stringify(cart));
    window.location.href = "checkout.html";
}


function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("active");
}
// INITIAL LOAD
displayMenu();
