function addTwoNums(a, b) { // function definition that accepts two arguments
    return a + b;           // 
}
// passing - parameter
// function accepts an argument

console.log(addTwoNums(4, 7));

let subtractionResult = function subtractTwoNumbers(a, b) {
    return a - b
}

console.log(subtractionResult(2, 8));

let multiplyTwoNumbers = (a, b) => {
    return a * b;
}

console.log(multiplyTwoNumbers(7, 9));

let divideTwoNumbers = (a, b) => {
    console.log(a / b)
}

divideTwoNumbers(4, 2);

// const Login = () => {
//     return (
//         <div></div>
//     )
// }

function getFee(isMember) {
    return (isMember ? '$2.00' : '$10.00'); // ternary
}

console.log(getFee(true));
// expected output: "$2.00"

console.log(getFee(false));
// expected output: "$10.00"

// console.log(getFee(null));
// // expected output: "$10.00"