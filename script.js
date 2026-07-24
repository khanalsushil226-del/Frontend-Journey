// ===================================
// GET HTML ELEMENTS
// ===================================
const form = document.getElementById("loginForm");

const username = document.getElementById("username");
const password = document.getElementById("password");

const usernameError = document.getElementById("usernameError");
const passwordError = document.getElementById("passwordError");

const usernameIcon = document.getElementById("usernameIcon");
const passwordIcon = document.getElementById("passwordIcon");

const rememberMe = document.getElementById("rememberMe");
const togglePassword = document.getElementById("togglePassword");
const themeToggle = document.getElementById("themeToggle");

const loginButton = document.getElementById("loginButton");

const toast = document.getElementById("toast");

const strengthBar = document.getElementById("strengthBar");
const strengthText = document.getElementById("strengthText");

const loginContainer = document.querySelector(".login-container");


// ===================================
// UTILITY FUNCTIONS
// ===================================

function showToast(message, type) {

    toast.textContent = message;
    toast.className = `toast show ${type}`;

    setTimeout(() => {

        toast.className = "toast";

    }, 3000);

}

function shakeElement(element) {

    element.classList.remove("shake");

    void element.offsetWidth;

    element.classList.add("shake");

}

function showError(element, message) {

    element.textContent = message;

}

function clearError(element) {

    element.textContent = "";

}

function setValid(icon) {

    icon.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    icon.style.color = "#198754";

}

function setInvalid(icon) {

    icon.innerHTML = '<i class="fa-solid fa-circle-xmark"></i>';
    icon.style.color = "#dc3545";

}


// ===================================
// LOAD LOCAL STORAGE
// ===================================

const savedUsername = localStorage.getItem("username");

if(savedUsername){

    username.value = savedUsername;
    rememberMe.checked = true;

}

const savedTheme = localStorage.getItem("theme");

if(savedTheme === "dark"){

    document.body.classList.add("dark-mode");

    themeToggle.innerHTML =
    '<i class="fa-solid fa-sun"></i>';

}else{

    themeToggle.innerHTML =
    '<i class="fa-solid fa-moon"></i>';

}


// ===================================
// SHOW / HIDE PASSWORD
// ===================================

togglePassword.addEventListener("click",()=>{

    const icon = togglePassword.querySelector("i");

    if(password.type==="password"){

        password.type="text";

        icon.className="fa-solid fa-eye-slash";

    }else{

        password.type="password";

        icon.className="fa-solid fa-eye";

    }

});


// ===================================
// USERNAME VALIDATION
// ===================================

function validateUsername(){

    const value = username.value.trim();

    if(value===""){

        showError(usernameError,"Username is required.");

        setInvalid(usernameIcon);

        return false;

    }

    if(value.length<4){

        showError(usernameError,
        "Username must be at least 4 characters.");

        setInvalid(usernameIcon);

        return false;

    }

    clearError(usernameError);

    setValid(usernameIcon);

    return true;

}

username.addEventListener("input",validateUsername);


// ===================================
// PASSWORD VALIDATION
// ===================================

function validatePassword(){

    const value=password.value;

    if(value===""){

        showError(passwordError,"Password is required.");

        setInvalid(passwordIcon);

        return false;

    }

    if(value.length<8){

        showError(passwordError,
        "Password must be at least 8 characters.");

        setInvalid(passwordIcon);

        return false;

    }

    clearError(passwordError);

    setValid(passwordIcon);

    return true;

}


// ===================================
// PASSWORD STRENGTH METER
// ===================================

password.addEventListener("input",()=>{

    validatePassword();

    const value=password.value;

    let strength=0;

    if(value.length>=8) strength++;

    if(/[A-Z]/.test(value)) strength++;

    if(/[0-9]/.test(value)) strength++;

    if(/[^A-Za-z0-9]/.test(value)) strength++;

    switch(strength){

        case 0:

            strengthBar.style.width="0%";
            strengthText.textContent="";

            break;

        case 1:

            strengthBar.style.width="25%";
            strengthBar.style.background="#dc3545";

            strengthText.textContent="Weak";
            strengthText.style.color="#dc3545";

            break;

        case 2:

            strengthBar.style.width="50%";
            strengthBar.style.background="#fd7e14";

            strengthText.textContent="Fair";
            strengthText.style.color="#fd7e14";

            break;

        case 3:

            strengthBar.style.width="75%";
            strengthBar.style.background="#ffc107";

            strengthText.textContent="Good";
            strengthText.style.color="#ffc107";

            break;

        case 4:

            strengthBar.style.width="100%";
            strengthBar.style.background="#198754";

            strengthText.textContent="Strong";
            strengthText.style.color="#198754";

            break;

    }

});


// ===================================
// LOGIN FORM
// ===================================

form.addEventListener("submit",(event)=>{

    event.preventDefault();

    const validUsername = validateUsername();
    const validPassword = validatePassword();

    if(!validUsername || !validPassword){

        shakeElement(loginContainer);

        showToast("Please fix the errors.","error");

        return;

    }

    loginButton.classList.add("loading");

    loginButton.disabled=true;

    if(rememberMe.checked){

        localStorage.setItem("username",username.value.trim());

    }else{

        localStorage.removeItem("username");

    }

    showToast("Login Successful!","success");

    setTimeout(()=>{

        window.location.href="dashboard.html";

    },2000);

});


// ===================================
// DARK MODE
// ===================================

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


// ===================================
// INITIALIZE VALIDATION
// ===================================

validateUsername();
validatePassword();