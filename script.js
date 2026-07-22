// =========================
// Get HTML Elements
// =========================

const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");

const rememberMe = document.getElementById("rememberMe");
const togglePassword = document.getElementById("togglePassword");


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

    togglePassword.addEventListener("click", function () {

        if (password.type === "password") {

            password.type = "text";
            togglePassword.textContent = "🙈";

        } else {

            password.type = "password";
            togglePassword.textContent = "👁️";

        }

    });

}


// =========================
// Login Form
// =========================

if (form) {

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const user = username.value.trim();
        const pass = password.value.trim();

        if (user === "" || pass === "") {

            alert("Please fill all fields.");
            return;

        }

        const saveInfo = confirm("Do you want to save your login information?");

        if (saveInfo && rememberMe.checked) {

            localStorage.setItem("username", user);

        } else {

            localStorage.removeItem("username");

        }

        window.location.href = "welcome.html";

    });

}