// ===================================
// SIDEBAR TOGGLE
// ===================================

const menuToggle = document.getElementById("menuToggle");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const mainContent = document.getElementById("mainContent");

// Toggle Sidebar
if (menuToggle) {

    menuToggle.addEventListener("click", () => {

        if (window.innerWidth <= 992) {

            sidebar.classList.toggle("show");

            if (overlay) {
                overlay.classList.toggle("show");
            }

        } else {

            sidebar.classList.toggle("collapsed");

            if (mainContent) {
                mainContent.classList.toggle("expanded");
            }

        }

    });

}

// Close sidebar when clicking overlay
if (overlay) {

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("show");
        overlay.classList.remove("show");

    });

}


// ===================================
// ACTIVE SIDEBAR MENU
// ===================================

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {

    item.addEventListener("click", () => {

        menuItems.forEach(menu => {

            menu.classList.remove("active");

        });

        item.classList.add("active");

        // Close sidebar automatically on mobile
        if (window.innerWidth <= 992) {

            sidebar.classList.remove("show");

            if (overlay) {
                overlay.classList.remove("show");
            }

        }

    });

});


// ===================================
// JOB DATABASE
// ===================================

const jobs = [

{
    title: "Frontend Developer",
    company: "Leading Edge Software",
    location: "Birtamode",
    salary: "NPR 35,000",
    type: "Full Time",
    category: "IT"
},

{
    title: "Graphic Designer",
    company: "Pixel Studio",
    location: "Damak",
    salary: "NPR 30,000",
    type: "Full Time",
    category: "Design"
},

{
    title: "Restaurant Manager",
    company: "Himalayan Cafe",
    location: "Birtamode",
    salary: "NPR 40,000",
    type: "Full Time",
    category: "Restaurant"
},

{
    title: "Cashier",
    company: "Coffee Corner",
    location: "Birtamode",
    salary: "NPR 22,000",
    type: "Full Time",
    category: "Restaurant"
},

{
    title: "Marketing Officer",
    company: "ABC Digital",
    location: "Jhapa",
    salary: "NPR 28,000",
    type: "Part Time",
    category: "Marketing"
}

];


// ===================================
// DISPLAY JOBS
// ===================================

const jobsContainer = document.getElementById("jobsContainer");

function displayJobs(jobArray) {

    if (!jobsContainer) return;

    jobsContainer.innerHTML = "";

    jobArray.forEach(job => {

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
                Apply Now
            </button>
        `;

        jobsContainer.appendChild(card);

    });

}

displayJobs(jobs);