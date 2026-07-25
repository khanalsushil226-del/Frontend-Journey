// ===================================
// SKILLLINK JOB DATABASE
// ===================================

const jobs = [

{
    id:1,
    title:"Frontend Developer",
    company:"Leading Edge Software",
    location:"Birtamode",
    salary:"NPR 35,000",
    type:"Full Time",
    category:"IT"
},

{
    id:2,
    title:"Graphic Designer",
    company:"Pixel Studio",
    location:"Damak",
    salary:"NPR 30,000",
    type:"Full Time",
    category:"Design"
},

{
    id:3,
    title:"Restaurant Manager",
    company:"Himalayan Cafe",
    location:"Birtamode",
    salary:"NPR 40,000",
    type:"Full Time",
    category:"Restaurant"
},

{
    id:4,
    title:"Cashier",
    company:"Coffee Corner",
    location:"Birtamode",
    salary:"NPR 22,000",
    type:"Part Time",
    category:"Restaurant"
},

{
    id:5,
    title:"Marketing Officer",
    company:"ABC Digital",
    location:"Jhapa",
    salary:"NPR 28,000",
    type:"Full Time",
    category:"Marketing"
}

];



// ===================================
// JOB CONTAINER
// ===================================

const jobsContainer = document.getElementById("jobsContainer");



// ===================================
// DISPLAY JOBS
// ===================================

function displayJobs(jobArray){

    jobsContainer.innerHTML="";

    jobArray.forEach(job=>{

        jobsContainer.innerHTML += `

        <div class="job-card">

            <h2>${job.title}</h2>

            <div class="company">

                <i class="fa-solid fa-building"></i>

                <span>${job.company}</span>

            </div>

            <div class="location">

                <i class="fa-solid fa-location-dot"></i>

                <span>${job.location}</span>

            </div>

            <div class="salary">

                <i class="fa-solid fa-money-bill"></i>

                <span>${job.salary}</span>

            </div>

            <span class="job-type">

                ${job.type}

            </span>

            <div class="job-actions">

                <button class="save-btn">

                    <i class="fa-regular fa-bookmark"></i>

                </button>

                <button class="apply-btn">

                    Apply Now

                </button>

            </div>

        </div>

        `;

    });

}



// ===================================
// INITIAL LOAD
// ===================================

displayJobs(jobs);