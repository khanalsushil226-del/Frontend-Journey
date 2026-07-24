// ===================================
// SIDEBAR ACTIVE MENU
// ===================================

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {

            menu.classList.remove("active");

        });

        item.classList.add("active");

    });

});
// ===================================
// SIDEBAR ANIMATION
// ===================================

const menuItems = document.querySelectorAll(".menu-item");

const indicator = document.querySelector(".menu-indicator");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        document.querySelector(".menu-item.active")
            .classList.remove("active");

        item.classList.add("active");

        indicator.style.top = item.offsetTop + "px";

    });

});
window.addEventListener("load",()=>{

    const active=document.querySelector(".menu-item.active");

    indicator.style.top=active.offsetTop+"px";

});