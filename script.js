// =========================
// Get HTML Elements
// =========================

const loginContainer = document.querySelector(".login-container");
const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const usernameError = document.getElementById("usernameError");

const rememberMe = document.getElementById("rememberMe");
const togglePassword = document.getElementById("togglePassword");
const themeToggle = document.getElementById("themeToggle");
const loginButton = document.getElementById("loginButton");
const toast = document.getElementById("toast");


// =========================
// Toast Notification
// =========================

function showToast(message, type) {

    toast.textContent = message;

    toast.className = `toast show ${type}`;

    setTimeout(() => {

        toast.className = "toast";

    }, 3000);

}


// =========================
// Shake Animation
// =========================

function shakeElement(element) {

    element.classList.remove("shake");

    void element.offsetWidth;

    element.classList.add("shake");

}


// =========================
// Load Saved Username
// =========================

const savedUsername = localStorage.getItem("username");

if (savedUsername) {

    username.value = savedUsername;
    rememberMe.checked = true;

}


// =========================
// Load Saved Theme
// =========================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';

} else {

    themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';

}


// =========================
// Password Toggle
// =========================

togglePassword.addEventListener("click", () => {

    const icon = togglePassword.querySelector("i");

    if (password.type === "password") {

        password.type = "text";
        icon.className = "fa-solid fa-eye-slash";

    } else {

        password.type = "password";
        icon.className = "fa-solid fa-eye";

    }

});


// =========================
// Live Validation
// =========================

username.addEventListener("input", () => {

    usernameError.textContent = "";

});

password.addEventListener("input", () => {

    usernameError.textContent = "";

});


// =========================
// Login Form
// =========================

form.addEventListener("submit", function (event) {

    event.preventDefault();

    usernameError.textContent = "";

    const user = username.value.trim();
    const pass = password.value.trim();

    // Username Validation

    if (user === "") {

        usernameError.textContent = "Username is required.";

        showToast("Username is required.", "error");

        shakeElement(loginContainer);

        username.focus();

        return;

    }

    // Password Validation

    if (pass === "") {

        showToast("Password is required.", "error");

        shakeElement(loginContainer);

        password.focus();

        return;

    }

    // Loading Button

    loginButton.classList.add("loading");
    loginButton.disabled = true;

    // Remember Username

    if (rememberMe.checked) {

        localStorage.setItem("username", user);

    } else {

        localStorage.removeItem("username");

    }

    // Success Message

    showToast("Login Successful!", "success");

    setTimeout(() => {

        window.location.href = "welcome.html";

    }, 2000);

});


// =========================
// Dark Mode Toggle
// =========================

themeToggle.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if (document.body.classList.contains("dark-mode")) {

        icon.className = "fa-solid fa-sun";

        localStorage.setItem("theme", "dark");

    } else {

        icon.className = "fa-solid fa-moon";

        localStorage.setItem("theme", "light");

    }

});