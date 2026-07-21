const form = document.getElementById("loginForm");
const username = document.getElementById("username");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");



showPassword.addEventListener("change", function () {

    if (showPassword.checked) {
        password.type = "text";
    } else {
        password.type = "password";
    }

});



form.addEventListener("submit", function (event) {

    event.preventDefault();

    const user = username.value.trim();
    const pass = password.value.trim();

    if (user === "" || pass === "") {
        alert("Please fill all fields.");
        return;
    }

    const saveInfo = confirm("Do you want to save your login information?");

    if (saveInfo) {
        localStorage.setItem("username", user);
    }

    window.location.href = "welcome.html";

});