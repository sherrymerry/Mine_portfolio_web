  
document.addEventListener('DOMContentLoaded', function() {
    window.addEventListener('scroll', function() {
        var counterElement = document.querySelector('.counter, .number1, .number2, .number3, .number4');
        var sectionOffsetTop = counterElement.getBoundingClientRect().top;
        var windowHeight = window.innerHeight;
        
        // Check if the section is in view
        if (sectionOffsetTop < windowHeight) {
            countdown('.counter', 0, 120);
            countdown('.number1', 0, 100);
            countdown('.number2', 0, 1200);
            countdown('.number3', 0, 1200);
            countdown('.number4', 1, 500);
        }
    });
});

function countdown(className, start, end) {
    let currentValue = start;
    let increment = (end - start) / 40; // Adjust speed by changing the divisor (40 here)
    let interval = setInterval(function() {
        currentValue += increment;
        document.querySelector(className).innerText = Math.round(currentValue).toLocaleString();
        if (currentValue >= end) {
            clearInterval(interval);
        }
    }, 70); // Adjust speed by changing the interval (50ms here)
}



// Add this JavaScript for toggling the mobile menu
// const menuToggle = document.querySelector('.menu-toggle');
// const navbar = document.getElementById('navbar');

// menuToggle.addEventListener('click', () => {
//     navbar.classList.toggle('show-menu');
// });



window.addEventListener('load', function () {
    var preloader = document.getElementById('preloader');
    preloader.style.display = 'none'; // Hide the preloader when the page is fully loaded
    document.body.style.overflow = 'auto'; // Enable scrolling after the page is loaded
});