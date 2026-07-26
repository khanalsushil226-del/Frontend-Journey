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
    icon:"fa-laptop-code"
},

{
    id:2,
    title:"Graphic Designer",
    company:"Pixel Studio",
    location:"Damak",
    salary:"NPR 30,000",
    type:"Full Time",
    category:"Design",
    icon:"fa-palette"
},

{
    id:3,
    title:"Restaurant Manager",
    company:"Himalayan Cafe",
    location:"Birtamode",
    salary:"NPR 40,000",
    type:"Full Time",
    category:"Restaurant",
    icon:"fa-mug-hot"
},

{
    id:4,
    title:"Marketing Officer",
    company:"ABC Digital",
    location:"Jhapa",
    salary:"NPR 28,000",
    type:"Part Time",
    category:"Marketing",
    icon:"fa-bullhorn"
},

{
    id:5,
    title:"Accountant",
    company:"Global Finance",
    location:"Kathmandu",
    salary:"NPR 45,000",
    type:"Full Time",
    category:"Finance",
    icon:"fa-calculator"
},

{
    id:6,
    title:"UI/UX Designer",
    company:"Creative Studio",
    location:"Pokhara",
    salary:"NPR 38,000",
    type:"Remote",
    category:"Design",
    icon:"fa-pen-ruler"
}

];

// ======================================
// LOCAL STORAGE
// ======================================

let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

// ======================================
// DISPLAY JOBS
// ======================================

const jobsContainer = document.getElementById("jobsContainer");

const jobCount = document.getElementById("jobCount");

function displayJobs(jobArray){

    jobsContainer.innerHTML="";

    jobCount.innerHTML=`${jobArray.length} Jobs Found`;

    jobArray.forEach(job=>{

        jobsContainer.innerHTML += `

<div class="job-card" onclick="showJob(${jobs.indexOf(job)})">

<div class="company-logo">

<i class="fa-solid ${job.icon}"></i>

</div>

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

<div class="job-tags">

<span>${job.type}</span>

<span>${job.category}</span>

</div>

<div class="job-buttons">

<button class="apply-btn">

Apply Now

</button>

<button

class="save-btn"

onclick="toggleSave(${job.id},event)"

>

<i class="${
savedJobs.includes(job.id)
? "fa-solid"
: "fa-regular"
} fa-heart"></i>

</button>

</div>

</div>

`;

    });

}

displayJobs(jobs);
// ======================================
// SEARCH
// ======================================

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", filterJobs);

// ======================================
// FILTERS
// ======================================

const locationFilter = document.getElementById("locationFilter");

const categoryFilter = document.getElementById("categoryFilter");

const typeFilter = document.getElementById("typeFilter");

locationFilter.addEventListener("change", filterJobs);

categoryFilter.addEventListener("change", filterJobs);

typeFilter.addEventListener("change", filterJobs);

// ======================================
// FILTER FUNCTION
// ======================================

function filterJobs(){

    const keyword = searchInput.value.toLowerCase();

    const location = locationFilter.value;

    const category = categoryFilter.value;

    const type = typeFilter.value;

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

        const matchType =

            type === "" ||

            job.type === type;

        return (

            matchKeyword &&

            matchLocation &&

            matchCategory &&

            matchType

        );

    });

    displayJobs(filtered);

}

// ======================================
// SAVE JOB
// ======================================

function toggleSave(jobId,event){

    // Prevent opening the modal when heart is clicked
    event.stopPropagation();

    if(savedJobs.includes(jobId)){

        savedJobs = savedJobs.filter(id => id !== jobId);

    }else{

        savedJobs.push(jobId);

    }

    localStorage.setItem(

        "savedJobs",

        JSON.stringify(savedJobs)

    );

    filterJobs();

}
// ======================================
// JOB DETAILS MODAL
// ======================================

const jobModal = document.getElementById("jobModal");

const modalContent = document.getElementById("modalContent");

const closeModal = document.getElementById("closeModal");

function showJob(index){

    const job = jobs[index];

    modalContent.innerHTML = `

        <div class="company-logo">

            <i class="fa-solid ${job.icon}"></i>

        </div>

        <h2>${job.title}</h2>

        <h3>${job.company}</h3>

        <br>

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

            <i class="fa-solid fa-layer-group"></i>

            ${job.category}

        </p>

        <br>

        <h3>Job Description</h3>

        <p>

            We are looking for a passionate <strong>${job.title}</strong>
            who is willing to grow with our company.
            The ideal candidate should have excellent communication,
            teamwork, problem-solving skills, and a strong willingness to learn.

        </p>

        <br>

        <h3>Requirements</h3>

        <ul>

            <li>✔ Good communication skills</li>

            <li>✔ Positive attitude</li>

            <li>✔ Basic computer knowledge</li>

            <li>✔ Team player</li>

            <li>✔ Willing to learn new technologies</li>

        </ul>

        <br>

        <button class="apply-btn" onclick="applyJob(event,'${job.title}')">

            Apply Now

        </button>

    `;

    jobModal.classList.add("show");

}

// ======================================
// APPLY BUTTON
// ======================================

function applyJob(event, jobTitle){

    event.stopPropagation();

    const job = jobs.find(j => j.title === jobTitle);

    let applications = JSON.parse(localStorage.getItem("applications")) || [];

    // Check if already applied
    const alreadyApplied = applications.some(app => app.id === job.id);

    if(alreadyApplied){

        alert("⚠️ You have already applied for this job.");

        return;

    }

    applications.push({

        ...job,

        date: new Date().toLocaleDateString()

    });

    localStorage.setItem(

        "applications",

        JSON.stringify(applications)

    );

    alert("🎉 Application Submitted Successfully!");

    jobModal.classList.remove("show");

    window.location.href = "applications.html";

}odal.classList.remove("show");

}

// ======================================
// CLOSE MODAL
// ======================================

closeModal.addEventListener("click",()=>{

    jobModal.classList.remove("show");

});

// ======================================
// CLOSE WHEN CLICKING OUTSIDE
// ======================================

window.addEventListener("click",(e)=>{

    if(e.target===jobModal){

        jobModal.classList.remove("show");

    }

});
// ======================================
// DESKTOP SIDEBAR TOGGLE
// ======================================

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

menuToggle.addEventListener("click", () => {

    sidebar.classList.toggle("collapsed");

    mainContent.classList.toggle("expanded");

});