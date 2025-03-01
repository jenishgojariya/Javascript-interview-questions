
// Execution Context & Call Stack

// Question: What will be the output of this code? Explain why.

function first() {
    console.log("First function");
    second();
}

function second() {
    console.log("Second function");
    third();
}

function third() {
    console.log("Third function");
}

first();

// Explanation:
// JavaScript follows a Last In, First Out (LIFO) call stack mechanism.
// Understand how the call stack works by tracing function calls.
