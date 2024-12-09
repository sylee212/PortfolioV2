import "./styles/styles.css";


// makes the function and runs the function only when the document is fully loaded
// uses lambda expression
document.addEventListener("DOMContentLoaded", () => {

    // gets the container where the stars will be
    // .page means any element with the class "page"
    const shootingStarsContainer = document.querySelector(".page");
  
    function createShootingStar() {
        // Create a star element
        const star = document.createElement("span");

        // adds a class to the element called shooting-star,
        // if already exist, will be used, else create a new class 
        // star.classList.add("shooting-star");
  
        // Randomize position and animation properties
        const startLeft = Math.random() * 100; // Random start position (0 to 100% of the screen width)
        const delay = Math.random() * 5; // Random delay (0 to 5 seconds)
        const duration = 3 + Math.random() * 5; // Random duration (3 to 8 seconds)
  
        // Apply styles
        // ${} is a template literal
        star.style.top = 0; 
        star.style.left = `${startLeft}vw`; // Random left position
        star.style.animationDelay = `${delay}s`;
        star.style.animationDuration = `${duration}s`;
  
        // Append the star to the container
        shootingStarsContainer.appendChild(star);
  
        // Remove the star after the animation ends
        // uses delay + duration to remove the child 
        setTimeout(() => {
            shootingStarsContainer.removeChild(star);
        }, (delay + duration) * 1000);
    }
  
    // Continuously create stars at random intervals
    // calls a function every 300 milliseconds
    // setInterval( function , duration in between miliseconds )
    setInterval(createShootingStar, 300); // Adjust the interval for more/less frequent stars
  });
  