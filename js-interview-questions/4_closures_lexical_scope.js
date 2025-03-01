
// Closures & Lexical Scope

// Question: Why does 'count' persist between calls?

function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}

const increment = counter();
increment(); // ?
increment(); // ?

// Explanation:
// A closure retains access to variables in its lexical scope even after the function execution ends.
