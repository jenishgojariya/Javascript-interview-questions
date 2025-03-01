
// Currying & Partial Application

// Question: How can we create a function that takes one argument at a time?

function multiply(a) {
    return function (b) {
        return a * b;
    };
}

const double = multiply(2);
console.log(double(5)); // ?

// Explanation:
// Currying transforms a function so arguments are passed one at a time.
