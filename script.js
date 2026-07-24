// =========================
// Get HTML Elements
// =========================
const usernameIcon = document.getElementById("usernameIcon");
const passwordIcon = document.getElementById("passwordIcon");
const loginContainer = document.querySelector(".login-container");

const form = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

const rememberMe = document.getElementById("rememberMe");
const togglePassword = document.getElementById("togglePassword");

const themeToggle = document.getElementById("themeToggle");
const loginButton = document.getElementById("loginButton");

const toast = document.getElementById("toast");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");


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
// Show / Hide Password
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
// Username Live Validation
// =========================

if (username.value.trim().length < 4) {

    usernameError.textContent =
        "Username must be at least 4 characters.";

    usernameIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    usernameIcon.style.color = "#dc3545";

} else {

    usernameError.textContent = "";

    usernameIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';

    usernameIcon.style.color = "#28a745";

}


// =========================
// Password Validation +
// Strength Meter
// =========================

if (value.length < 8) {

    passwordError.textContent =
        "Password must be at least 8 characters.";

    passwordIcon.innerHTML =
        '<i class="fa-solid fa-circle-xmark"></i>';

    passwordIcon.style.color = "#dc3545";

} else {

    passwordError.textContent = "";

    passwordIcon.innerHTML =
        '<i class="fa-solid fa-circle-check"></i>';

    passwordIcon.style.color = "#28a745";

}

    // Strength Meter

    let strength = 0;

    if (value.length >= 8) strength++;
    if (/[A-Z]/.test(value)) strength++;
    if (/[0-9]/.test(value)) strength++;
    if (/[^A-Za-z0-9]/.test(value)) strength++;

    switch (strength) {

        case 0:

            strengthBar.style.width = "0%";
            strengthText.textContent = "";

            break;

        case 1:

            strengthBar.style.width = "25%";
            strengthBar.style.background = "#dc3545";

            strengthText.textContent = "Weak";
            strengthText.style.color = "#dc3545";

            break;

        case 2:

            strengthBar.style.width = "50%";
            strengthBar.style.background = "#fd7e14";

            strengthText.textContent = "Fair";
            strengthText.style.color = "#fd7e14";

            break;

        case 3:

            strengthBar.style.width = "75%";
            strengthBar.style.background = "#ffc107";

            strengthText.textContent = "Good";
            strengthText.style.color = "#ffc107";

            break;

        case 4:

            strengthBar.style.width = "100%";
            strengthBar.style.background = "#28a745";

            strengthText.textContent = "Strong";
            strengthText.style.color = "#28a745";

            break;

    }

});


// =========================
// Login Form Validation
// =========================

form.addEventListener("submit", function(event){

    event.preventDefault();

    usernameError.textContent = "";
    passwordError.textContent = "";

    const user = username.value.trim();
    const pass = password.value.trim();

    if(user === ""){

        usernameError.textContent = "Username is required.";

        showToast("Username is required.","error");

        shakeElement(loginContainer);

        username.focus();

        return;

    }

    if(pass === ""){

        passwordError.textContent = "Password is required.";

        showToast("Password is required.","error");

        shakeElement(loginContainer);

        password.focus();

        return;

    }

    loginButton.classList.add("loading");
    loginButton.disabled = true;

    if(rememberMe.checked){

        localStorage.setItem("username",user);

    }else{

        localStorage.removeItem("username");

    }

    showToast("Login Successful!","success");

    setTimeout(()=>{

        window.location.href="welcome.html";

    },2000);

});


// =========================
// Dark Mode Toggle
// =========================

themeToggle.addEventListener("click",()=>{

    document.body.classList.toggle("dark-mode");

    const icon = themeToggle.querySelector("i");

    if(document.body.classList.contains("dark-mode")){

        icon.className="fa-solid fa-sun";

        localStorage.setItem("theme","dark");

    }else{

        icon.className="fa-solid fa-moon";

        localStorage.setItem("theme","light");

    }

});