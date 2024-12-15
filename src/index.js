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

const self_img = document.getElementById("self-image");
self_img.src = self_picture;