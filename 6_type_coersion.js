// type coercion

const num1 = 2; // number 
const num2 = '2'; // string
let sum = num1 + num2;  // the value num1 was coerced (implicitly converted) into a string
console.log('from line 6: ', sum); // 22
console.log(typeof(sum)); // string

// = assignment, ie x = 7
// == comparing values 7 == 7 (true), 7 == '7' (true)
// === compares values and types: 7 === 7 (true), BUT 7 === '7' (false)

if (num1 == num2) {  // equal? why or why not?
    console.log('from line 10, these items are equal')
} else {
    console.log('these items are not equal')
}

if (num1 === num2) {  // equal? why or why not?
    console.log('from line 15: these items are equal')
} else if ( num1 == 5) {
    console.log('from line 18: these items are not equal')
} else {
    console.log('nevermind')
}


/*

lines 19 - 23 (pseudo code)

if number 1's value matches (equals) that of number 2
console log ('something')
else 
console log something else


*/

// '=' is used to assign a value to a variable

// '==' checks equality, not type
// '===' checks both equality and type

if (num1 != num2) {  // if num1 is not equal to num2 <==> if this statement is true
    console.log('these items are not equal') // print this
} else { // else
    console.log('line 48: these items are equal') // print this
}

if (num1 !== num2) {  // if num1 is not equal to num2 <==> if this statement is true
    console.log('line 52: these items are not equal') // print this
} else { // else
    console.log('these items are equal') // print this
}

// '!=' checks for inequality, not type
// '!==' checks for both inequality and type

if ('house' == 'House') {
    console.log(' line 61: this statement is false')
} else {
    console.log('line 63: this statement is true')
}

if ('car' !== 'Car') {
    console.log('this statement is true')
} else {
    console.log('this statement is false')
}

let num = 2
num = 3