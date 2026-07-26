// ======================================
// DESKTOP SIDEBAR TOGGLE
// ======================================

const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");
const mainContent = document.querySelector(".main-content");

if (menuToggle && sidebar && mainContent) {

    menuToggle.addEventListener("click", () => {

        sidebar.classList.toggle("collapsed");
        mainContent.classList.toggle("expanded");

    });

}

// ======================================
// EDIT PROFILE BUTTON
// ======================================

const editBtn = document.querySelector(".edit-btn");

if (editBtn) {

    editBtn.addEventListener("click", () => {

        alert("✏️ Edit Profile feature will be added soon.");

    });

}

// ======================================
// RESUME BUTTON
// ======================================

const resumeBtn = document.querySelector(".resume-btn");

if (resumeBtn) {

    resumeBtn.addEventListener("click", () => {

        alert("📄 Resume Upload feature coming soon.");

    });

}
// ======================================
// PROFILE COMPLETION ANIMATION
// ======================================

const progressBar = document.querySelector(".progress-bar");

if (progressBar) {

    const percentage = 85;

    progressBar.style.width = "0%";

    setTimeout(() => {

        progressBar.style.width = percentage + "%";

    }, 300);

}

// ======================================
// SOCIAL LINKS
// ======================================

const socialLinks = document.querySelectorAll(".social-links a");

socialLinks.forEach(link => {

    link.addEventListener("click", function (e) {

        e.preventDefault();

        alert("🌐 Social links will be added soon!");

    });

});

// ======================================
// SKILLS HOVER EFFECT
// ======================================

const skills = document.querySelectorAll(".skills span");

skills.forEach(skill => {

    skill.addEventListener("click", () => {

        alert("Skill: " + skill.innerText);

    });

});
// ======================================
// CHANGE PROFILE PICTURE
// ======================================

const profileImage = document.querySelector(".profile-left img");

if (profileImage) {

    profileImage.style.cursor = "pointer";

    profileImage.addEventListener("click", () => {

        const input = document.createElement("input");

        input.type = "file";
        input.accept = "image/*";

        input.onchange = function () {

            const file = input.files[0];

            if (!file) return;

            const reader = new FileReader();

            reader.onload = function (e) {

                profileImage.src = e.target.result;

                localStorage.setItem(

                    "profileImage",

                    e.target.result

                );

            };

            reader.readAsDataURL(file);

        };

        input.click();

    });

}

// ======================================
// LOAD SAVED PROFILE IMAGE
// ======================================

const savedImage = localStorage.getItem("profileImage");

if (savedImage && profileImage) {

    profileImage.src = savedImage;

}

// ======================================
// RESUME UPLOAD
// ======================================

if (resumeBtn) {

    resumeBtn.addEventListener("click", () => {

        const input = document.createElement("input");

        input.type = "file";

        input.accept = ".pdf,.doc,.docx";

        input.onchange = function () {

            const file = input.files[0];

            if (!file) return;

            localStorage.setItem(

                "resumeName",

                file.name

            );

            alert("✅ Resume Uploaded: " + file.name);

        };

        input.click();

    });

}

// ======================================
// SHOW SAVED RESUME NAME
// ======================================

const savedResume = localStorage.getItem("resumeName");

if (savedResume) {

    console.log("Uploaded Resume:", savedResume);

}