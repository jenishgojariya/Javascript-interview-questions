
// Event Loop & Microtasks

// Question: Why does "Synchronous 1" appear before "setTimeout"?

console.log("Synchronous 1");

setTimeout(() => console.log("setTimeout"), 0);

Promise.resolve().then(() => console.log("Promise resolved"));

console.log("Synchronous 2");

// Explanation:
// Event loop processes synchronous code first, then microtasks (like Promises), then macro-tasks (like setTimeout).
