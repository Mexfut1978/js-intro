console.log(1+1);  // 2
console.log(1-1);  // 0
console.log(1*2);  // 2
console.log(1/2);  // 0.5
console.log(9 % 5); // 4 (modulus references the remainder of the division)
console.log(Math.pow(2, 3)); // 8 (2 to the power of 3)
console.log(Math.round(6.5)); // 7 (6.5 is rounded to the nearest whole number)
console.log(Math.floor(6.99)) // 6 (floor always rounds down)
console.log(Math.ceil(5.0001)) // 6 (ceil always rounds up)

const foot = 12; // 1 foot is 12 inches
const yard = 3;  // 1 yard is 3 feet

// let's make use of lines 6 and 7 to figure out how may inches are in a yard

let inches = yard * foot;
console.log("1 yard " + "equals " + inches + " inches.");

