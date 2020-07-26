/*
What is this?
The JavaScript this keyword refers to the object it belongs to.

It has different values depending on where it is used:
1. In a method, this refers to the owner object.
2. Alone, this refers to the global object.
3. In a function, in strict mode, this is undefined.
4. In a function, this refers to the global object.
- In an event, this refers to the element that received the event.
- Methods like call(), and apply() can refer this to any object.

'this' in a Method:
In an object method, this refers to the "owner" of the method, the person object. The person object is the owner of the fullName method.

*/

// 1.

let person = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());

/*
2. 

'this' Alone: When used alone, the owner is the Global object, so this refers to the Global object. In a browser window the Global object is [object Window]:

Example:

*/

let a = this;
console.log(a);

/*
3. In strict mode, when used alone, this also refers to the Global object [object Window]:
*/

"use strict";
let b = this;
console.log(b)

/* 
4. this in a Function (Default). In a JavaScript function, the owner of the function is the default binding for this. So, in a function, this refers to the Global object.
*/

function myFunction() {
    return this;
}

console.log(myFunction())

/*
5.
'this' in Event Handlers. In HTML event handlers, 'this' refers to the HTML element that received the event, ie, the button clicked:

Example
<button onclick="this.style.display='none'">
  Click to Remove Me!
</button>

*/

/*

Object Method Binding
In these examples, this is the person object (The person object is the "owner" of the function):

Example
let person1 = {
  firstName  : "John",
  lastName   : "Doe",
  id         : 5566,
  myFunction : function() {
    return this;
  }
};

*/

const person1 = {
    firstName  : "John",
    lastName   : "Doe",
    id         : 5566,
    myFunction : function() {
      return this;
    }
};

console.log(person1.myFunction());

var person2 = {
    firstName: "John",
    lastName : "Doe",
    id       : 5566,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
};

console.log(person2.fullName());

/*

Explicit Function Binding: 
- The call() and apply() methods are predefined JavaScript methods.
- They can both be used to call an object method with another object as argument.

In the example below, when calling person1.fullName with person2 as argument, this will refer to person2 (the contents), even if it is a method of person1:

Example
var person1 = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}
var person2 = {
  firstName:"John",
  lastName: "Doe",
}
person1.fullName.call(person2);  // Will return "John Doe"

*/