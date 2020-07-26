let x = 1;

if (x === 1) {
    console.log('x does equal 1')
} else {
    console.log('x does not equal 1')
}

const legalAge = 18;

const person1 = {
    name: 'Debbie',
    age: 19
}

if (person1.age > legalAge) {
    console.log(person1.name + ' is over the legal age'); 
} else {
    console.log(`${person1.name} is not over the legal age`);
}
let variableName = "name"
// 'this ' + variableName + ' that'
console.log(`this ${variableName} that`); // interpolation
a = 7
b = 8
console.log(`Fifteen is ${a + b}`);