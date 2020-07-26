
// Geoge Polya - 1945 (how to solve it)

/*
U - understand the problem
P - plan the problem (pseudo code)
S - solve the problem
R - review the solution
*/

const x = 1;
const y = 1;
const z = 1;

if (x === y && y === z) {
    console.log("x, y, and z all have a value of 1");
}

// if x is the same as y AND y is the same as z, do the following ...

if (x === y && y >= z) {
    console.log( "line 22: x, y, and z all have a value of 1");
}

if (x === y && y > z) {
    console.log("this should not show, as the question is false");
} else {
    console.log("line 28: y and z both hold 1 as their value. the statement, is therefore, false.")
}

if (x === 1 || x !== 1 || x === 1) {
    console.log("line 32: at least one of these conditions is true")
} else {
    console.log("neither of these conditions is true")
}

let myStatement = !(1 === 1); // normally true, but ! gives the opposite
console.log("from line 38: ", myStatement);

myStatement = !(1 !== 1); // normally false, but ! gives the opposite
console.log("from line 41: ", myStatement);