// Scope in JavaScript refers to the current context of code
// which determines variable accessibility
// Global variables are found declared outside of a block. 
// Local variables are found declared inside of a block.

var a = 1; // a is 1
let b = 200; // b is 2
const c = 3; // c is 3

function add() { // function defined
    let result = a + b + c; // variable result is equal to a + b + c
    return result // result value is returned to the function call
} // end function block

let result = add(); // variable let is equal to the return of the add funciton
console.log(result); // send the result to the screen

// variable a, b and c are global scopes ... as they are defined outside of a function, block or module. 
// globally scoped variables can be access from anywhere in the application

function subtract() {
    let d = 4;
    var e = 99;
    return e + d - a;
}

let result1 = subtract()
console.log("from line 28: ", result1)

// let's try to get access to the variable d:

function multiply() {
    let f = 6;
    return f - d;
}

// console.log(multiply()); // error: the variable d is not defined. why? d is declared as a block scoped variable inside the subtract function.  and, because it is not global, no other parts of your application have access to it.

function divide() {
    let g = 7;
    let result = e / g;
    return result;
}

// console.log(divide());  // error. the variable e is not defined.  although e is declared in the subtract function as a function scoped variable, its value is only available in that function

// you want to stay away from declaring variable outside of functions, blocks or modules as they corrupt the global scope with unnecessary clutter.  your apps will run a bit slower as well due to memory usage of variables always having to 'stay on' and available for usage.