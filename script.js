/* 
    DAY-1: Variables scope and hoisting 
*/
// Question 1
var x = 10;

function test() {
  console.log(x);
  var x = 20;
}

test();

// Question 2
function test() {
    var a = 10;
    if (true) {
      var a = 20;
    }
    console.log(a);
  }
  
  test();
  

/* 
    DAY-2: More about Hoisting. 
*/

// Question 1
let x = 5;

function test() {
    console.log(x);
    let x = 10;
}

test();

// Question 2
function test() {
    if (true) {
        var a = 20;
    }
    console.log(a);
}

test();

// Question 3
let x = 10;

function example() {
    if (true) {
        let x = 20;
        console.log(x);
    }
}

example();
console.log(x);

// Question 4
var a = 5;

function test() {
    console.log(a);
    var a = 10;
    console.log(a);
}

test();

/* DAY4: IN-DEPTH ABOUT VARIABLES 'n' STUFF */
// Question 2: Hoisting
console.log(a);  
var a = 10;  
console.log(b);  
let b = 20;  

// Question 3: Scope and Re-declaration
var x = 5;  
let y = 10;  

{  
  var x = 15;  
  let y = 20;  
  console.log(x);  
  console.log(y);  
}  

console.log(x);  
console.log(y);  

// Question 4: Const and Mutability
const obj = { name: "Alice", age: 25 };
obj.age = 30;
obj = { name: "Bob", age: 40 };

console.log(obj);


// Question 5: Hoisting with let and const
console.log(a);
console.log(b);

let a = 5;
const b = 10;

// Question 6: const with Arrays and Objects
const arr = [1, 2, 3];
arr.push(4);
arr = [5, 6, 7];

console.log(arr);

// Question 7: Variable Scoping
var a = 10;

function test() {
  var a = 20;
  console.log(a);
}

test();
console.log(a);

// Question 8: Scope Chain and Lexical Environment
var a = 10;

function outer() {
  var a = 20;
  
  function inner() {
    console.log(a);
  }
  
  inner();
}

outer();

// Question 9: Function Scope & Closures
function outer() {
    var a = 10;
  
    function inner() {
      var b = 20;
      console.log(a + b);
    }
  
    return inner;
  }
  
  var func = outer();
  func();

// Question 10: Closures and the Lexical Environment
function outer() {
    var a = 1;
    function inner() {
      console.log(a);
    }
    return inner;
  }
  
  var func1 = outer();
  var func2 = outer();
  
  func1();
  func2();
  