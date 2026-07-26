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

// ======================================
// GET APPLICATIONS
// ======================================

];

let applications = JSON.parse(

    localStorage.getItem("applications")

) || [];

const applicationsContainer = document.getElementById("applicationsContainer");

const applicationCount = document.getElementById("applicationCount");

const emptyState = document.getElementById("emptyState");
// ======================================
// DISPLAY APPLICATIONS
// ======================================

function displayApplications(){

    applicationsContainer.innerHTML = "";

    applicationCount.innerHTML = `${applications.length} Applications`;

    if(applications.length === 0){

        emptyState.style.display = "block";

        applicationsContainer.style.display = "none";

        return;

    }

    emptyState.style.display = "none";

    applicationsContainer.style.display = "grid";

    applications.forEach(application=>{

        applicationsContainer.innerHTML += `

        <div class="application-card">

            <div class="company-logo">

                <i class="fa-solid ${application.icon}"></i>

            </div>

            <h3>${application.title}</h3>

            <p>

                <i class="fa-solid fa-building"></i>

                ${application.company}

            </p>

            <p>

                <i class="fa-solid fa-location-dot"></i>

                ${application.location}

            </p>

            <p>

                <i class="fa-solid fa-money-bill"></i>

                ${application.salary}

            </p>

            <div class="status pending">

                🟡 Pending

            </div>

            <p class="applied-date">

                Applied on:

                ${application.date}

            </p>

            <div class="application-buttons">

                <button class="view-btn">

                    View Details

                </button>

                <button
                    class="remove-btn"
                    onclick="removeApplication(${application.id})"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            </div>

        </div>

        `;

    });

}

displayApplications();
// ======================================
// REMOVE APPLICATION
// ======================================

function removeApplication(jobId){

    applications = applications.filter(

        application => application.id !== jobId

    );

    localStorage.setItem(

        "applications",

        JSON.stringify(applications)

    );

    displayApplications();

}

// ======================================
// VIEW DETAILS BUTTON
// ======================================

document.addEventListener("click",function(e){

    if(e.target.classList.contains("view-btn")){

        alert("🚀 Job Details feature will be added in the next update.");

    }

});
// ======================================
// SIDEBAR TOGGLE
// ======================================

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        sidebar.classList.toggle("show-sidebar");

    });

}
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