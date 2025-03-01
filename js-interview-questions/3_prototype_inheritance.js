
// Prototype & Prototypal Inheritance

// Question: How does prototypal inheritance work here?

function Person(name) {
    this.name = name;
}

Person.prototype.sayHello = function() {
    console.log("Hello, my name is " + this.name);
};

const person1 = new Person("Alice");
person1.sayHello(); // ?

// Explanation:
// Every function has a prototype, and objects created with 'new' inherit from it.
