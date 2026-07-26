// ==========================================
// SKILLLINK NEPAL DASHBOARD
// dashboard.js
// PART 1
// Sidebar + Navigation + Responsive Layout
// ==========================================

document.addEventListener("DOMContentLoaded", () => {

    // =====================================
    // ELEMENTS
    // =====================================

    const sidebar = document.getElementById("sidebar");
    const overlay = document.getElementById("overlay");
    const menuToggle = document.getElementById("menuToggle");
    const mainContent = document.getElementById("mainContent");

    const menuItems = document.querySelectorAll(".menu-item");

    // =====================================
    // OPEN SIDEBAR
    // =====================================

    function openSidebar() {

        if (window.innerWidth <= 992) {

            sidebar.classList.add("show");
            overlay.classList.add("show");

        }

    }

    // =====================================
    // CLOSE SIDEBAR
    // =====================================

    function closeSidebar() {

        sidebar.classList.remove("show");

        overlay.classList.remove("show");

    }

    // =====================================
    // DESKTOP SIDEBAR
    // =====================================

    function toggleDesktopSidebar() {

        sidebar.classList.toggle("collapsed");

        mainContent.classList.toggle("expanded");

    }

    // =====================================
    // MENU BUTTON
    // =====================================

    if (menuToggle) {

        menuToggle.addEventListener("click", () => {

            if (window.innerWidth <= 992) {

                if (sidebar.classList.contains("show")) {

                    closeSidebar();

                } else {

                    openSidebar();

                }

            } else {

                toggleDesktopSidebar();

            }

        });

    }

    // =====================================
    // OVERLAY CLICK
    // =====================================

    if (overlay) {

        overlay.addEventListener("click", closeSidebar);

    }

    // =====================================
    // WINDOW RESIZE
    // =====================================

    window.addEventListener("resize", () => {

        if (window.innerWidth > 992) {

            closeSidebar();

        }

    });

    // =====================================
    // ACTIVE SIDEBAR MENU
    // =====================================

    menuItems.forEach(item => {

        item.addEventListener("click", () => {

            menuItems.forEach(menu => {

                menu.classList.remove("active");

            });

            item.classList.add("active");

            if (window.innerWidth <= 992) {

                closeSidebar();

            }

        });

    });

    // =====================================
    // GREETING
    // =====================================

    const greeting = document.getElementById("greeting");

    if (greeting) {

        const hour = new Date().getHours();

        let message = "Good Evening";

        if (hour < 12) {

            message = "Good Morning";

        }

        else if (hour < 17) {

            message = "Good Afternoon";

        }

        greeting.innerHTML = `${message}, <span id="displayUsername">Sushil</span>`;

    }

    // =====================================
    // DATE
    // =====================================

    const currentDate = document.getElementById("currentDate");

    if (currentDate) {

        const options = {

            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"

        };

        currentDate.textContent =
            new Date().toLocaleDateString("en-US", options);

    }

    console.log("✅ Part 1 Loaded");

});
// ======================================
// JOB DATABASE
// ======================================

const jobs = [

{
    id:1,

    title:"Frontend Developer",

    company:"Leading Edge Software",

    location:"Birtamode",

    salary:"NPR 35,000",

    type:"Full Time",

    category:"IT",

    experience:"1+ Years",

    icon:"fa-laptop-code",

    skills:[
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Git"
    ],

    description:
    "We are looking for a passionate Frontend Developer who can build beautiful, responsive and modern user interfaces using HTML, CSS and JavaScript.",

    responsibilities:[
        "Develop responsive web interfaces",
        "Collaborate with backend developers",
        "Fix UI bugs",
        "Optimize website performance",
        "Write clean reusable code"
    ],

    requirements:[
        "HTML & CSS",
        "JavaScript",
        "React",
        "Git & GitHub",
        "Good communication skills"
    ]
},

{
    id:2,

    title:"Graphic Designer",

    company:"Pixel Studio",

    location:"Damak",

    salary:"NPR 30,000",

    type:"Full Time",

    category:"Design",

    experience:"Freshers",

    icon:"fa-palette",

    skills:[
        "Photoshop",
        "Illustrator",
        "Canva",
        "Figma"
    ],

    description:
    "Creative Graphic Designer required to create social media graphics, branding materials and marketing designs.",

    responsibilities:[
        "Design posters",
        "Create logos",
        "Design social media posts",
        "Work with marketing team"
    ],

    requirements:[
        "Adobe Photoshop",
        "Illustrator",
        "Creativity",
        "Portfolio"
    ]
},

{
    id:3,

    title:"Restaurant Manager",

    company:"Himalayan Cafe",

    location:"Birtamode",

    salary:"NPR 40,000",

    type:"Full Time",

    category:"Restaurant",

    experience:"2+ Years",

    icon:"fa-mug-hot",

    skills:[
        "Leadership",
        "Inventory",
        "Customer Service"
    ],

    description:
    "Manage restaurant operations, employees and customer satisfaction.",

    responsibilities:[
        "Manage staff",
        "Inventory control",
        "Customer handling",
        "Daily reporting"
    ],

    requirements:[
        "Restaurant Experience",
        "Leadership",
        "Communication"
    ]
},

{
    id:4,

    title:"Marketing Officer",

    company:"ABC Digital",

    location:"Jhapa",

    salary:"NPR 28,000",

    type:"Part Time",

    category:"Marketing",

    experience:"1 Year",

    icon:"fa-bullhorn",

    skills:[
        "Facebook Ads",
        "SEO",
        "Content Writing"
    ],

    description:
    "Looking for a Marketing Officer to handle online campaigns and customer engagement.",

    responsibilities:[
        "Run Ads",
        "Handle Social Media",
        "Increase Brand Awareness"
    ],

    requirements:[
        "Digital Marketing",
        "SEO",
        "Communication"
    ]
},

{
    id:5,

    title:"Cashier",

    company:"Coffee Corner",

    location:"Birtamode",

    salary:"NPR 22,000",

    type:"Full Time",

    category:"Restaurant",

    experience:"Freshers",

    icon:"fa-cash-register",

    skills:[
        "POS",
        "Communication",
        "Customer Service"
    ],

    description:
    "Handle customer payments and maintain billing records accurately.",

    responsibilities:[
        "Billing",
        "Cash Handling",
        "Customer Service"
    ],

    requirements:[
        "Basic Computer Knowledge",
        "Honesty",
        "Communication"
    ]
}

];

// ======================================
// ELEMENTS
// ======================================

const jobsContainer = document.getElementById("jobsContainer");

const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");

// ======================================
// DISPLAY JOBS
// ======================================

// ======================================
// DISPLAY JOBS
// ======================================

const jobsContainer = document.getElementById("jobsContainer");

function displayJobs(jobArray){

    if(!jobsContainer) return;

    jobsContainer.innerHTML = "";

    jobArray.forEach(job=>{

        const card = document.createElement("div");

        card.className = "job-card";

        card.innerHTML = `

            <h3>${job.title}</h3>

            <p>
                <i class="fa-solid fa-building"></i>
                ${job.company}
            </p>

            <p>
                <i class="fa-solid fa-location-dot"></i>
                ${job.location}
            </p>

            <p>
                <i class="fa-solid fa-money-bill"></i>
                ${job.salary}
            </p>

            <p>
                <i class="fa-solid fa-briefcase"></i>
                ${job.type}
            </p>

            <button class="apply-btn">

                View Details

            </button>

        `;

        card.addEventListener("click",()=>{

            openJobModal(job);

        });

        jobsContainer.appendChild(card);

    });

}

displayJobs(jobs);

displayJobs(jobs);

// ======================================
// SEARCH + FILTER
// ======================================

function filterJobs(){

    const keyword = searchInput.value.toLowerCase();

    const location = locationFilter.value;

    const category = categoryFilter.value;

    const filtered = jobs.filter(job=>{

        const matchKeyword =
            job.title.toLowerCase().includes(keyword) ||
            job.company.toLowerCase().includes(keyword);

        const matchLocation =
            location === "" ||
            job.location === location;

        const matchCategory =
            category === "" ||
            job.category === category;

        return (
            matchKeyword &&
            matchLocation &&
            matchCategory
        );

    });

    displayJobs(filtered);

}

// ======================================
// EVENTS
// ======================================

searchInput?.addEventListener("keyup",filterJobs);

locationFilter?.addEventListener("change",filterJobs);

categoryFilter?.addEventListener("change",filterJobs);

searchBtn?.addEventListener("click",filterJobs);

// ======================================
// DASHBOARD COUNTERS
// ======================================

function animateCounter(id,target){

    const element=document.getElementById(id);

    if(!element) return;

    let current=0;

    const increment=Math.ceil(target/80);

    const timer=setInterval(()=>{

        current+=increment;

        if(current>=target){

            current=target;

            clearInterval(timer);

        }

        element.textContent=current.toLocaleString();

    },20);

}

window.addEventListener("load",()=>{

    animateCounter("jobCount",1248);

    animateCounter("companyCount",186);

    animateCounter("candidateCount",8420);

    animateCounter("applicationCount",325);

});
// ======================================
// NOTIFICATION PANEL
// ======================================

const notificationBtn = document.getElementById("notificationBtn");
const notificationPanel = document.getElementById("notificationPanel");

if(notificationBtn && notificationPanel){

    notificationBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        notificationPanel.classList.toggle("show");

    });

    document.addEventListener("click",(e)=>{

        if(
            !notificationPanel.contains(e.target) &&
            !notificationBtn.contains(e.target)
        ){

            notificationPanel.classList.remove("show");

        }

    });

}

// ======================================
// DARK MODE
// ======================================

const themeBtn = document.getElementById("dashboardTheme");

const body = document.body;

const savedTheme = localStorage.getItem("dashboardTheme");

if(savedTheme === "dark"){

    body.classList.add("dark");

}

themeBtn?.addEventListener("click",()=>{

    body.classList.toggle("dark");

    if(body.classList.contains("dark")){

        localStorage.setItem("dashboardTheme","dark");

    }else{

        localStorage.setItem("dashboardTheme","light");

    }

});

// ======================================
// GREETING
// ======================================

const greeting = document.getElementById("greeting");

const currentHour = new Date().getHours();

let greetingText = "";

if(currentHour < 12){

    greetingText = "Good Morning";

}
else if(currentHour < 17){

    greetingText = "Good Afternoon";

}
else{

    greetingText = "Good Evening";

}

const username =
localStorage.getItem("username") || "Sushil";

if(greeting){

    greeting.innerHTML = `
        ${greetingText},
        <span id="displayUsername">
            ${username}
        </span>
    `;

}

// ======================================
// CURRENT DATE
// ======================================

const dateElement = document.getElementById("currentDate");

const options = {

    weekday:"long",

    year:"numeric",

    month:"long",

    day:"numeric"

};

const today = new Date().toLocaleDateString(

    "en-US",

    options

);

if(dateElement){

    dateElement.textContent = today;

}

// ======================================
// LOGOUT
// ======================================

const logoutBtn = document.getElementById("logoutBtn");

logoutBtn?.addEventListener("click",()=>{

    const confirmLogout = confirm(

        "Are you sure you want to logout?"

    );

    if(confirmLogout){

        window.location.href = "login.html";

    }

});

// ======================================
// PAGE LOADED
// ======================================

console.log("✅ SkillLink Dashboard Loaded Successfully");
// ======================================
// PROFILE DROPDOWN
// ======================================

const profileMini = document.querySelector(".profile-mini");

if(profileMini){

    profileMini.style.cursor = "pointer";

    profileMini.addEventListener("click",()=>{

        window.location.href="profile.html";

    });

}

// ======================================
// TOAST NOTIFICATION
// ======================================

function showToast(message){

    let toast = document.querySelector(".toast");

    if(!toast){

        toast = document.createElement("div");

        toast.className = "toast";

        document.body.appendChild(toast);

    }

    toast.textContent = message;

    toast.classList.add("show");

    setTimeout(()=>{

        toast.classList.remove("show");

    },3000);

}

// ======================================
// APPLY BUTTONS
// ======================================

document.addEventListener("click",(e)=>{

    if(e.target.classList.contains("apply-btn")){

        showToast("🎉 Application Submitted Successfully!");

    }

});

// ======================================
// PAGE FADE IN
// ======================================

window.addEventListener("load",()=>{

    document.body.classList.add("loaded");

});

// ======================================
// SCROLL TO TOP BUTTON
// ======================================

const scrollBtn = document.createElement("button");

scrollBtn.innerHTML = `<i class="fa-solid fa-arrow-up"></i>`;

scrollBtn.className = "scroll-top";

document.body.appendChild(scrollBtn);

window.addEventListener("scroll",()=>{

    if(window.scrollY > 350){

        scrollBtn.classList.add("show");

    }else{

        scrollBtn.classList.remove("show");

    }

});

scrollBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ======================================
// FINAL INITIALIZATION
// ======================================

console.log("================================");

console.log(" SkillLink Nepal Dashboard");

console.log(" Dashboard Ready");

console.log("================================");
// ======================================
// JOB DETAILS MODAL
// ======================================

const jobModal = document.getElementById("jobModal");

const modalContent = document.getElementById("modalContent");

const closeModal = document.getElementById("closeModal");

function openJobModal(job){

    modalContent.innerHTML = `

        <div class="modal-company">

            <i class="fa-solid ${job.icon}"></i>

            <div>

                <h2>${job.title}</h2>

                <h4>${job.company}</h4>

            </div>

        </div>

        <div class="modal-info">

            <p>
                <i class="fa-solid fa-location-dot"></i>
                ${job.location}
            </p>

            <p>
                <i class="fa-solid fa-money-bill"></i>
                ${job.salary}
            </p>

            <p>
                <i class="fa-solid fa-briefcase"></i>
                ${job.type}
            </p>

            <p>
                <i class="fa-solid fa-user-clock"></i>
                ${job.experience}
            </p>

        </div>

        <div class="modal-section">

            <h3>Job Description</h3>

            <p>${job.description}</p>

        </div>

        <div class="modal-section">

            <h3>Responsibilities</h3>

            <ul>

                ${job.responsibilities.map(item=>`<li>${item}</li>`).join("")}

            </ul>

        </div>

        <div class="modal-section">

            <h3>Requirements</h3>

            <ul>

                ${job.requirements.map(item=>`<li>${item}</li>`).join("")}

            </ul>

        </div>

        <div class="modal-section">

            <h3>Skills</h3>

            <div class="skill-tags">

                ${job.skills.map(skill=>`<span>${skill}</span>`).join("")}

            </div>

        </div>

        <div class="modal-buttons">

            <button class="save-job">

                ❤️ Save Job

            </button>

            <button class="apply-job">

                Apply Now

            </button>

        </div>

    `;

    jobModal.classList.add("show");

}

if(closeModal){

    closeModal.addEventListener("click",()=>{

        jobModal.classList.remove("show");

    });

}

window.addEventListener("click",(e)=>{

    if(e.target===jobModal){

        jobModal.classList.remove("show");

    }

});