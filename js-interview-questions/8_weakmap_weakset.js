
// WeakMap & WeakSet

// Question: Why is WeakMap useful for memory management?

const weakMap = new WeakMap();
let obj = {};

weakMap.set(obj, "Some Value");
obj = null;

// Explanation:
// WeakMap keys are weakly held, preventing memory leaks.
