
// 'this' Keyword & Binding

// Question: What will 'this' refer to in each case?

const obj = {
    name: "JavaScript",
    method: function () {
        console.log(this.name);
    },
};

const func = obj.method;
func(); // ?

obj.method(); // ?

// Explanation:
// The value of 'this' depends on how the function is called.
