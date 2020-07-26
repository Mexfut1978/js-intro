let length = 2200;                                                          // number
let structure = "house";                                                    // string
let myObject = {
    length: length, 
    structure: structure, 
    price: '$176, 000'};                                                    // object
let iOwn = true;                                                            // boolean (true or false)
let name = "Ed";      // the variable is undefined (no value has been assigned to the variable) and is set by JS
let myNullVariable = null;    // the variable exists but no value is currently associated with it and is set by the developer


console.log("The length is " + length); // concat

console.log("I own a " + structure);
// dot naming convention
let mySentence = "My " + 
    myObject.structure + " is " + 
    myObject.length + " square feet, and I bought it for " + 
    myObject.price + "!";

console.log(mySentence);

console.log("line 23: " + name);

console.log("this null variable is ready for use: " + myNullVariable)

// Dynamic data types

let x;
console.log("line 30: x is " + typeof(x));

x = 5;
console.log("x is a " + typeof(x));

x = "x";
console.log("x is a " + typeof(x));

console.log('iOwn is of type ' + typeof(iOwn));

let v = null
console.log(v)