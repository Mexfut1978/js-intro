const array1 = ["a", "b", "c", "d"]  // use constants first, declared once, can't be changed good within {} (block scoped)

for (let i = 0; i < array1.length; i++) { // use let second, declared once, good within {} (block scoped)
    let result = "letter " + array1[i];
    console.log(result)
}

var person = "Samuel";
let age = 22; // use this last, good within {} of a function (function scoped), can be declared more than once
age = 49; // age is redeclared

console.log(person + " is " + age);

for (let i = 0; i < 10; i++) {
    console.log('number: ' + i)
}

console.log(i)