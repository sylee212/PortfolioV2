import "./styles/styles.css";

// Runs the function only when the document is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all sections with the class "page"
    // gets the container where the stars will be
    // .page means any element with the class "page"
    // document.querySelector(".page"),     selects the first matching element 
    // document.getElementByID("page"),     selects the first element that matches the ID
    // document.querySelectorAll(".page"),  selects all elements that match the css selector, returns a static list, means if got changes, the list wont update
    // document.getElementsByClassName(".page"),  selects all elements that match the class, returns a live list that updates with the DOM
    const shootingStarsContainerList = document.getElementsByClassName("page");

    // Function to create a shooting star
    function createShootingStar(container) {
        const star = document.createElement("span");

        // adds a class to the element called shooting-star,
        // if already exist, will be used, else create a new class 
        // star.classList.add("shooting-star");
        star.classList.add("shooting-star"); // Adds the shooting star class for styling

        // Randomize position and animation properties
        const startLeft = Math.random() * 100; // Random left position
        const delay = Math.random() * 5; // Random delay (0 to 5 seconds)
        const duration = 3 + Math.random() * 5; // Random duration (3 to 8 seconds)

        // Apply styles
        // ${} is a template literal
        star.style.top = "0"; 
        star.style.left = `${startLeft}vw`; 
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
        star.style.zIndex = "1";

        // Append the star to the current container
        container.appendChild(star);

        // Remove the star after the animation ends
        // uses delay + duration to remove the child 
        setTimeout(() => {
            container.removeChild(star);
        }, (delay + duration) * 1000);
    }

    // Loop through all "page" elements and create shooting stars
    for (let i = 0; i < shootingStarsContainerList.length; i++) {
        const container = shootingStarsContainerList[i];
        setInterval(() => createShootingStar(container), 300); // Adjust interval here
    }
});

import self_picture from "./assets/img/me-background-free.png";

// about me page //
const self_img = document.getElementById("self-image");
self_img.src = self_picture;

// projects page //
import project1 from "./assets/img/project1.jpg";
import project2 from "./assets/img/project2.jpg";
import project3 from "./assets/img/project3.jpg";

const project1_img = document.getElementById("project-image1");
const project2_img = document.getElementById("project-image2");
const project3_img = document.getElementById("project-image3");

project1_img.src = project1;
project2_img.src = project2;    
project3_img.src = project3;


// experience page //
const experience1_img = document.getElementById("experience-image1");
experience1_img.src = project1;


// contact me page //
import github_icon from "./assets/img/github-icon.png";
import linkedin_icon from "./assets/img/linkedin-icon.png";
import gmail_icon from "./assets/img/gmail-icon.png";

const github_img = document.getElementById("github-icon");
github_img.src = github_icon;

const linkedin_img = document.getElementById("linkedin-icon");
linkedin_img.src = linkedin_icon;

const gmail_img = document.getElementById("gmail-icon");
gmail_img.src = gmail_icon;


// contact me page //
import resume from "./assets/files/Resume.pdf";

const githubLink = document.getElementById("github-link");
githubLink.href = "https://github.com/sylee212";

const linkedinLink = document.getElementById("linkedin-link");
linkedinLink.href = "https://www.linkedin.com/in/yuan-lee-81ba222b6/";

const gmailLink = document.getElementById("gmail-link");
// opens gmail and goes to mail page
// https://mail.google.com/mail/?view=cm
// reciepient 
// to=
// subject
// su=
gmailLink.href = "https://mail.google.com/mail/?view=cm&to=singyuan212@gmail.com&su=Regarding%20your%20resume";

const resumeLink = document.getElementById("resume-link");
resumeLink.href = resume;

// to check if the app is runing in what mode

const text = `##### App is running in ${process.env.NODE_ENV || "development"} mode.`;
document.getElementById("test").innerHTML = text;