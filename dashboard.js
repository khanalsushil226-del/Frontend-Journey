// ======================================
// SIDEBAR
// ======================================

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

            mainContent.classList.toggle("expanded");

        }

    });

}

// Overlay Close

if (overlay) {

    overlay.addEventListener("click", () => {

        sidebar.classList.remove("show");

        overlay.classList.remove("show");

    });

}

// Close sidebar after resize

window.addEventListener("resize", () => {

    if (window.innerWidth > 992) {

        sidebar.classList.remove("show");

        if (overlay) {

            overlay.classList.remove("show");

        }

    }

});
// ======================================
// JOB DATABASE
// ======================================

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
                Apply Now
            </button>

        `;

        jobsContainer.appendChild(card);

    });

}

displayJobs(jobs);
// ======================================
// SEARCH & FILTERS
// ======================================

const searchInput = document.getElementById("searchInput");
const locationFilter = document.getElementById("locationFilter");
const categoryFilter = document.getElementById("categoryFilter");
const searchBtn = document.getElementById("searchBtn");

// Filter Jobs

function filterJobs(){

    const keyword = searchInput.value.toLowerCase();

    const location = locationFilter.value;

    const category = categoryFilter.value;

    const filteredJobs = jobs.filter(job=>{

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

    displayJobs(filteredJobs);

}

// ======================================
// EVENTS
// ======================================

if(searchInput){

    searchInput.addEventListener("keyup",filterJobs);

}

if(locationFilter){

    locationFilter.addEventListener("change",filterJobs);

}

if(categoryFilter){

    categoryFilter.addEventListener("change",filterJobs);

}

if(searchBtn){

    searchBtn.addEventListener("click",filterJobs);

}

// ======================================
// DASHBOARD COUNTERS
// ======================================

const jobCount = document.getElementById("jobCount");
const companyCount = document.getElementById("companyCount");
const candidateCount = document.getElementById("candidateCount");
const applicationCount = document.getElementById("applicationCount");

if(jobCount){

    jobCount.textContent = jobs.length;

}

if(companyCount){

    companyCount.textContent = "186";

}

if(candidateCount){

    candidateCount.textContent = "8420";

}

if(applicationCount){

    applicationCount.textContent = "325";

}

// ======================================
// PAGE LOADED
// ======================================

console.log("✅ Dashboard Loaded Successfully");
// ======================================
// NOTIFICATION PANEL
// ======================================

const notificationBtn = document.getElementById("notificationBtn");
const notificationPanel = document.getElementById("notificationPanel");

if(notificationBtn){

    notificationBtn.addEventListener("click",(e)=>{

        e.stopPropagation();

        notificationPanel.classList.toggle("show");

    });

}

// Close when clicking anywhere else

document.addEventListener("click",(e)=>{

    if(

        notificationPanel &&
        !notificationPanel.contains(e.target) &&
        !notificationBtn.contains(e.target)

    ){

        notificationPanel.classList.remove("show");

    }

});