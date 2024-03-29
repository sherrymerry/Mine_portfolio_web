document.addEventListener('DOMContentLoaded', function() {

    countdown('.counter', 0, 120);
    countdown('.number1', 0, 100);
    countdown('.number2', 0, 1200);
    countdown('.number3', 0, 1200);
    countdown('.number4', 1, 500);

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
    }, 90); // Adjust speed by changing the interval (50ms here)
}






