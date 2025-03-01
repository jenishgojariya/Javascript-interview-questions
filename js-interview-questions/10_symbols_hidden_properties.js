
// Symbols & Hidden Properties

// Question: How can we create truly private object properties?

const SECRET = Symbol("secret");

const user = {
    name: "Alice",
    [SECRET]: "Hidden Data",
};

console.log(user.SECRET); // ?
console.log(user[SECRET]); // ?

// Explanation:
// Symbols provide unique, non-enumerable object properties.
