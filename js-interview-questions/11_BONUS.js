// ===============================================
// 📌 BONUS: ADVANCED JAVASCRIPT INTERVIEW QUESTIONS
// ===============================================
// This file contains some of the trickiest JavaScript interview questions.
// Solve them to test your deep understanding of JavaScript concepts!

// Function to run all questions
function runAll() {
  question1();
  question2();
  question3();
  question4();
  question5();
  question6();
  question7();
  question8();
  question9();
  question10();
}

// ***********************************************
// 🔹 1. TYPE COERCION & OPERATORS
// ***********************************************
function question1() {
  console.log("🔹 Question 1: Type Coercion & Operators");
  console.log(1 + "1" - 1); // ?
  console.log(true + false); // ?
}

// ***********************************************
// 🔹 2. CHECKING EMPTY OBJECTS
// ***********************************************
function question2() {
  console.log("🔹 Question 2: Checking Empty Objects");
  const obj = {};
  console.log(Object.keys(obj).length === 0); // Best way?
}

// ***********************************************
// 🔹 3. VARIABLE REFERENCE & MUTABILITY
// ***********************************************
function question3() {
  console.log("🔹 Question 3: Reference vs Value");
  let a = { x: 1 },
    b = a;
  b.x = 2;
  console.log(a.x); // ?
}

// ***********************************************
// 🔹 4. SETTIMEOUT & CLOSURES
// ***********************************************
function question4() {
  console.log("🔹 Question 4: Asynchronous SetTimeout");
  for (var i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000);
  }
}

// ***********************************************
// 🔹 5. PROTOTYPAL INHERITANCE
// ***********************************************
function question5() {
  console.log("🔹 Question 5: Prototypal Inheritance");
  function Person(name) {
    this.name = name;
  }
  Person.prototype.sayHello = function () {
    console.log("Hello, my name is " + this.name);
  };
  const p1 = new Person("Alice");
  p1.sayHello();
}

// ***********************************************
// 🔹 6. CALL, APPLY, AND BIND
// ***********************************************
function question6() {
  console.log("🔹 Question 6: Call, Apply, Bind");
  function greet(name) {
    console.log(`Hello, ${name}`);
  }
  greet.call(null, "Alice");
  greet.apply(null, ["Bob"]);
  const boundGreet = greet.bind(null, "Charlie");
  boundGreet();
}

// ***********************************************
// 🔹 7. UNEXPECTED TYPE CONVERSIONS
// ***********************************************
function question7() {
  console.log("🔹 Question 7: Unexpected Type Conversions");
  console.log([] + []); // ?
  console.log([] + {}); // ?
  console.log({} + []); // ?
}

// ***********************************************
// 🔹 8. SYMBOLS & PRIVATE PROPERTIES
// ***********************************************
function question8() {
  console.log("🔹 Question 8: Symbols & Private Properties");
  const SECRET = Symbol("secret");
  const user = { name: "Alice", [SECRET]: "Hidden Data" };
  console.log(user.SECRET); // ?
  console.log(user[SECRET]); // ✅ Correct way
}

// ***********************************************
// 🔹 9. EVENT LOOP & ASYNC BEHAVIOR
// ***********************************************
function question9() {
  console.log("🔹 Question 9: Event Loop & Async Behavior");
  console.log("Start");
  setTimeout(() => console.log("setTimeout"), 0);
  Promise.resolve().then(() => console.log("Promise resolved"));
  console.log("End");
}

// ***********************************************
// 🔹 10. BONUS: FUNCTIONAL PROGRAMMING
// ***********************************************
function question10() {
  console.log("🔹 Question 10: Functional Programming - Currying");
  const multiply = (a) => (b) => a * b;
  const double = multiply(2);
  console.log(double(5)); // ?
}
