
// Hoisting

// Question: What will be logged?

console.log(foo);
var foo = "Hello";

console.log(bar);
let bar = "World";

// Explanation:
// 'var' variables are hoisted but initialized as undefined.
// 'let' and 'const' are hoisted but not initialized (Temporal Dead Zone).
