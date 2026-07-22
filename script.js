// =========================
// Get HTML Elements
// =========================

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const rememberMe = document.getElementById("rememberMe");
const togglePassword = document.getElementById("togglePassword");
const themeToggle = document.getElementById("themeToggle");

// =========================
// Load Saved Username
// =========================

if (username && rememberMe) {
    const savedUsername = localStorage.getItem("username");

    if (savedUsername) {
        username.value = savedUsername;
        rememberMe.checked = true;
    }
}

// =========================
// Show / Hide Password
// =========================

if (togglePassword && password) {

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

}

// =========================
// Login Form
// =========================

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();
        const loginButton = document.getElementById("loginButton");

loginButton.classList.add("loading");
loginButton.disabled = true;

        const user = username.value.trim();
        const pass = password.value.trim();

        if (!user || !pass) {
            alert("Please fill all fields.");
            return;
        }

        if (rememberMe.checked) {
            localStorage.setItem("username", user);
        } else {
            localStorage.removeItem("username");
        }

       setTimeout(() => {

    window.location.href = "welcome.html";

}, 2000);

    });

}

// =========================
// Dark Mode
// =========================

if (themeToggle) {

    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        themeToggle.textContent =
            document.body.classList.contains("dark-mode") ? "☀️" : "🌙";

    });

}