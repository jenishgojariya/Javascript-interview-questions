
// Debouncing & Throttling

// Question: How does debouncing improve performance?

function debounce(func, delay) {
    let timer;
    return function (...args) {
        clearTimeout(timer);
        timer = setTimeout(() => func(...args), delay);
    };
}

const log = debounce(() => console.log("Triggered!"), 500);
log();
log();
log(); // ?

// Explanation:
// Debouncing ensures the function is only executed after inactivity.
