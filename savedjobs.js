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
// GET SAVED JOBS
// ======================================

let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];

const savedJobsContainer = document.getElementById("savedJobsContainer");

const savedCount = document.getElementById("savedCount");

const emptyState = document.getElementById("emptyState");
// ======================================
// DISPLAY SAVED JOBS
// ======================================

function displaySavedJobs(){

    savedJobsContainer.innerHTML = "";

    const savedJobList = jobs.filter(job =>
        savedJobs.includes(job.id)
    );

    savedCount.innerHTML = `${savedJobList.length} Jobs Saved`;

    if(savedJobList.length === 0){

        emptyState.style.display = "block";

        savedJobsContainer.style.display = "none";

        return;

    }

    emptyState.style.display = "none";

    savedJobsContainer.style.display = "grid";

    savedJobList.forEach(job=>{

        savedJobsContainer.innerHTML += `

        <div class="job-card">

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
                    class="remove-btn"
                    onclick="removeSavedJob(${job.id})"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        </div>

        `;

    });

}

displaySavedJobs();
// ======================================
// REMOVE SAVED JOB
// ======================================

function removeSavedJob(jobId){

    // Remove the job from the savedJobs array
    savedJobs = savedJobs.filter(id => id !== jobId);

    // Update Local Storage
    localStorage.setItem(

        "savedJobs",

        JSON.stringify(savedJobs)

    );

    // Refresh the page
    displaySavedJobs();

}

// ======================================
// APPLY BUTTON
// ======================================

document.addEventListener("click",function(e){

    if(e.target.classList.contains("apply-btn")){

        alert("🎉 Application Submitted Successfully!");

    }

});