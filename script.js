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

/* 
  DAY4: IN-DEPTH ABOUT VARIABLES 'n' STUFF 
*/

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



/*
  DAY 5: String - Methods and Property 🔍
*/

// #Level 01 - Warm-up [basics]
/*
  1. Accessing Characters:

  - Given the string const word = "JavaScript";, write code to:
  - Get the first character.
  - Get the last character using a dynamic approach.
  - Get the third character.

  2. String Length:

  - For const netflixSerie = "Stranger Things Part:IV";, find:
  - The total number of characters.
  - The difference between the length of netflixSerie and the string "Stranger Things I".
*/

// 1.
// A word consisting `String`
const word = "JavaScript";

// fetch `1st`, `last`, `3rd` element/ char!
console.log(`
  Word: ${word}
  First Character: ${word[0]}
  Last Character: ${word[word.length - 1]}
  Third Character: ${word[2]}
`);


// 2.
// A serie consisting `String`
const netflixSerie = "Stranger Things Part:IV";

// total chars, and difference b|w `"Stranger Things I"`
console.log(`
  Netflix TV SHOW: ${netflixSerie}
  length: ${netflixSerie.length}
  difference b|w ${netflixSerie} & ${"Stranger Things I"}: ${((netflixSerie.length) - ("Stranger Things I".length))} Char's
`);


// #Level 02 - Methods Without Arguments
/*
  3. Case Conversion:

  - Convert the String "smile II" into uppercase
  - Convert the String "Lionel Messi" into lowercase

  4. Trim Methods:

  - Given the string " Sharp Corporates Ltd.    ":
  - trim()
  - trimStart()
  - trimEnd()

  -> Print the results of each and explain their difference.
*/

// 3.
// movie as `String`
const horrorHit = "smile II";

// capitalized via `toUpperCase()`
console.log(`
  Best Horror Genres of 2024: ${horrorHit.toUpperCase()}
`);

// legend as `String`
const goat = "Lionel Messi";

// small-case via `toLowerCase()`
console.log(`
  Greatest of All Time: ${goat.toLowerCase()}
`);


// 4.
// industry as `String`
const industry = "        Sharp Corporates Ltd.       ";

// cleaned String via `trim(), trimStart(), trimEnd()`
console.log(` 
  *OUTPUT*
   - via trim(): ${industry.trim()}
   - via trimStart(): ${industry.trimStart()}
   - via trimEnd(): ${industry.trimEnd()}

  *DIFFERENCE*
  - trim() is built-in method which cleans the whitespaces from both the beginning and ending sides. But, not intermediate ones!

  - trimStart() is identical to trim() But, does only clean the whitespaces from the start.

  - trimEnd() is method() that cleans up the whitespaces from the end.
`);


// #Level 03 - Methods With Arguments
/*
  5. Includes & IndexOf:

  - For const sentence = "Cristiano Ronaldo And Marco Van Basten are some of the dealiest Center Forwards of all time!";:

    - Check if the word "Van" exists in the sentence.
    - Find the index of the word "Marco".
    - What happens when you search for the word "basten"?

  6. Replace Methods:

  - Replace all occurrences of "o" with "u" in the string "Good Morning!".
  - Replace the first occurrence of "o" with "@".

  7. Concat:

  - Merge "Frontend" and "Development" with a hyphen (-) in between using concat().

*/

// 5.
// sentence as `String`
const sentence = "Cristiano Ronaldo And Marco Van Basten are some of the dealiest Center Forwards of all time!";

// `Van` is present in the sentence or not?
// via `includes()` - returns boolean value in return..
console.log(`
  Sentence: ${sentence}
  "Van" present? ${sentence.includes("Van")}
`);

// fetch `location` of "Marco"
// via indexOf() - returns corresponding indice otherwise, -1!
console.log(`
  Sentence: ${sentence}
  index-position of "Marco": ${sentence.indexOf("Marco")}
`);

// "basten" is there or not!
// via includes() - returns boolean value in return..
// or via search() - returns index-positon otherwise, -1
console.log(`
  Sentence: ${sentence}
  "basten" present? ${sentence.search("basten")} via "search()"
  "basten" present? ${sentence.includes("basten")} via "includes()"
`);


// 6.
// message as `String`
const greeting = "Good Morning!";

// "o" -> "u" i.e., all occurences
// via replaceAll() method
console.log(`
  New Message: ${greeting.replaceAll("o", "u")}
`);

// "o" -> "@" first occurence only!
// via replace() method
console.log(`
  Updated Message: ${greeting.replace("o", "@")}
`);


// 7.
// Joining "Frontend" and "Development" with a hyphen (-) in between using concat().
console.log(`
  JavaScript is good choice for ${"Frontend".concat("-", "Development")} seeing it's relevancy in the market!  
`);


// #Level 04: Advanced Challenges
/*
  8. Padding for Formatting and Security:

  - Mask the first 12 characters of the credit card number "1234567890123456" using padStart().

  - Format the number 123 as a 5-digit number by adding leading zeros (000123).

  9. Character Codes:

  - For const char = "A";, find the ASCII code using charCodeAt().

  - Write a function that takes a string and returns the sum of ASCII codes for all characters.

  10. Split:

  - Split "apple,banana,grape" into an array of fruits.

  - Split "Hello World!" into individual characters.

  11. Substring vs Slice:

  - For the string "JavaScript":

    - Extract "Java" using substring.
    
    - Extract "Script" using slice.
    
   - Compare the outputs when using negative indices.
*/

// 8.
// credit-card as `String`
const creditCardNo = "1234567890123456";

// last 4-digits
const lastFourDigits = creditCardNo.slice(-4);

// encapsulate number
const maskedNo = lastFourDigits.padStart(12, "*");
console.log(`$20,000 was credited to your credit-card number: ${maskedNo}`);

// Format the number 123 as a 5-digit number by adding leading zeros (00123).
const number = "123";

// encapsulate number
const maskedNumber = number.padStart(5, "0");
console.log(`OTP : ${maskedNumber}`);

// 9.
// A Character
const char = "A";

// It's ASCII code
console.log(`Character: ${char} & it's ASCII Code: ${char.charCodeAt()}`);

// handle `sum`
let sum = 0;

// () -> returns sum of ASCII char(s)
function fetchSumOfASCII(arg){

  // `for` loop to iterate the given String
  for(let i = 0; i < arg.length; i ++) {

    // console.log(arg[i]);   **debug-log

    // evaluate `sum` of all code
    sum += arg.charCodeAt([i]);
  }

  // return total.
  return sum;
}

// output the sum
console.log(fetchSumOfASCII("Lionel Messi"));

// 10.
// `fruits` as String
const fruits = "apple,banana,grape";

// Array of Fruits
const fruitArray = fruits.split(",");
console.log(fruitArray);

// A String
const countryCapital = "New Delhi";

// splitting `String` into single's char(s) as Array.
const capitalChars = countryCapital.split("");
console.log(capitalChars);

// 11.
// A String
const language = "JavaScript";

// `Java` via substring()
console.log(`language: ${language} substring: ${language.substring(0, 4)} via substring()`);

// `Script` via slice()
console.log(`language: ${language} substring: ${language.slice(-6)} via slice()`);

// ** Basic Difference **
/*
  slice() - it works with -ve indexes
  substring() - it doesn't work with -ve indexes. As if -ve index are given then it'd be treated as 0 (zero)

  i.e, "Hello".substring(-5, 5) // Hello Here - -5 or any -ve index will be treated as 0 || (zero).
  Whereas, "Hello".slice(-5) // Hello
*/