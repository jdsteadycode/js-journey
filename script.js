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


/*
  DAY 6: Math Object 1️⃣ 
*/

// 1️⃣ What will Math.floor(4.9) return?
console.log(Math.floor(4.9));   // 4

// 2️⃣ How do you generate a random number between 1 and 10 using the Math object?
function getRandom(min, max){

  // 1 - 10
  return Math.floor(Math.random() * (max - min + 1)) + min;
  
  // WORK:
  // input (1, 10)
  // (10 - 1 + 1)  =>  10
  // Math.random() * 10 -> i.e., it will return 0 - 9 but not 10
  //  + 1 i.e., now it will return 1 -> 10
}

// 3️⃣ What does Math.abs(-7) return, and why?
console.log(Math.abs(-7));  // 7.
/*
`ANS.) the abs() method returns +ve value of any integer which -ve, Because it just removes negativity`
*/

// 4️⃣ How can you round 5.4 o the nearest integer using the Math object?
/*
  ANS: two ways.
  1. round() to rounds randomly to the closest integer
  2. ceil() rounds up (-->) to the closest integer
  3. floor() rounds down (<--) to the closest integer
*/
console.log(Math.round(5.4));

// 5️⃣ What is the difference between Math.trunc(4.9) and Math.floor(4.9)?
// trunc() - latest addition by ECMA international ES6+
//  it returns integer part of given input irrespective of it's decimal place
// floor() - rounds down integer value closest to it!


// 6️⃣ What will Math.pow(2, 3) return?
// Math.pow(2, 3) -> pow() method gives 1st input power as 2nd input.
// Thus it would give exponentiation as 2 ** 3 -> 8.
console.log(Math.pow(2, 3));

// NOTE: recommended to use ES6+ addition -> `**` operator.



/*
  DAY 7: Truthy ✅ & Falsy ❎ Values in JavaScript
*/

// 7️⃣ Which of the following is falsy in JavaScript? 0, "hello", {}, undefined, [], false ?
// ANS: Falsy Values ❎ are 0, undefined, false.

// 8️⃣ What is the output of Boolean(" ") in JavaScript?
// ANS: true because " " or ' ' or ` ` contains a white-space.
// Thus, A whitespace is considered as an character in a string so it's a Truthy Value ✅

// 9️⃣ Will "0" (a string) be treated as truthy or falsy?
// "0" will be obviously treated as Truthy Value ✅.
// Just like in question 8️⃣, Any character placed inside string or string literal is considered as an valid character which are Truthy by-default!

// 🔟 What happens when you use !!value in JavaScript?
// It will give negate or reverse the Boolean Value  **twice** i.e., strict Boolean Value conversion.
// But let's assume it contains a value like '0' (Falsy Value ❎)
// Here double-negation operator `!!` is used to check whether value is Falsy ❎ || Truthy ✅.
// It would return `false` as EX:!0 -> true then, !true is false.


// 1️⃣1️⃣ What is the output of Boolean([])?
// It returns `true` as empty [], {} i.e., objects and arrays are considered as Truthy Values ✅.


// 1️⃣2️⃣ How does JavaScript evaluate the following: if (null) { console.log("Truthy"); } else { console.log("Falsy"); }?
// As if condition wouldn't satisy "null" as true this is because `null` is by-default Falsy Value ❎.
// It would trigger the else block hence, `Falsy` ✅.


/*
  DAY 8: Comparison Operators in JavaScript 🚀
*/

// 1️⃣3️⃣ What is the difference between == and === in JavaScript?
/*
 ANS.
  `==` operator - simple equality check operator. It cross checks the value of the given expressions.
  It converts type implicitly to match the expressions, this is initiated behind-the-scenes by JS Engine
  Thus output can be in-appropriate.

  `===` operator - strict equality check operator. It cross checks the value as well as type of given expressions.
  It doesn't implicitly converts type of the expression. Thus, output seems reliable here.

  NOTE: `===` is recommended over `==` operator due to accurate and reliable output!
*/

// 1️⃣4️⃣ What will 5 == "5" return and why?
// ANS: true.
/*
  Because of `==` operator (simple equality check).
  As `==` operator just checks the value of expressions given & An JS Engine coverts "5" -> 5 implicitly behind the scenes.
  Thus output is `true`, which is inappropriate logically.

  NOTE: To use `===` operator as mentioned above in question 13.
*/

// 1️⃣5️⃣ What is the output of true == 1?
// ANS. true.
/*
  This because expressions where in first one `true` is a Truthy Value ✅ And, `1` is also Truthy Value ✅.
  Thus `==` operator check if both values match or not! With an implicit type conversion intiated by JS Engine behind-the-scenes.
  Thus, as both are Truthy it returns Boolean `true`.
*/


// 1️⃣6️⃣ What happens when you compare null >= 0 in JavaScript?
// ANS. true
/*
  `>=` greater than and equal to operator checks if given expression is larger than the other and also additionally checks if it's equal or not!
  And, JS Engine implicitly converts value of `null` to 0.
  Thus 0 >= 0 results to Boolean true.

  NOTE: comparison operators work slight differently than logical operators so here value gets converted to different one to be compared!
*/


// 1️⃣7️⃣ What will NaN === NaN return?
// ANS. false
/*
  Because, NaN is Falsy Value ❎ that isn't equal to itself.
  So it returns Boolean false.
*/

// 1️⃣8️⃣ What is the result of "5" > 3 in JavaScript, and why?
// ANS. true.
/*
  `>` - greater than operator. 
  It checks if given expression is larger than the other or not! 
  Also JS Engine does implicit type coversion for the expression if needed!
  As "5" -> 5 so, 5 > 3 which is true.
  Thus it returns Boolean true. 
*/


/*
  DAY 9: Logical Operators in JavaScript ⚡
*/

// 1️⃣ What is the output of the following code?
/*
  console.log(true && 0);   //0
  console.log(false || "Hello");  // "Hello"
  console.log(!"");   // true
*/
/*
 ANS && Justification.
  console.log(true && 0) -> 0 
  This happens as `&&` Operator assesses Truthy and Falsy Values.
  And, as here `&&` Operator returns Truthy Value only if both values or expressions are Truthy or true.
  As if here 0 is the Falsy Value it straightaway returns `Falsy Value`.

  //. 2
  console.log(false || "Hello") -> "Hello"
  Here Logical `||` Operator also assesses the Truthy and Falsy Value But, in a different way.
  As, here it would return Truthy Value even if there's only one Truthy Value or a Falsy Value.
  So it returns "Hello".

  //. 3
  console.log(!"") -> true.
  `!` is Logical Not or Negation Operator as, it reverses the Boolean Truthy || Falsy value and returns the reversed Boolean Value.
  So here As "" is a Falsy Value Thus, !"" returns it's opposite i.e., True or Truthy Value.

  NOTE: logical operators do work for Truthy & Falsy Values...
*/


// 2️⃣ What is the output of the following code?
/*
  console.log(null || undefined);   // undefined
  console.log(1 && null && "Hello");    // null
  console.log(false || 0 || "");    // ""
*/
/*
 ANS && Justification.
  console.log(null || undefined);   // undefined
  As '||' Operator checks for atleast one Truthy Value in whole input expression.
  So, it goes to second input value to see whether if it's Truthy Value or true.
  Since As it finds both are Falsy Values [null & undefined] So, it prints second Falsy Value.

  //. 2
  console.log(1 && null && "Hello");    // null
  Here Logical `&&` Operator also assesses the Truthy and Falsy Value.
  As, here it would return Truthy Value if all are Truthy Value or True.
  Since, As here one value `null` is a Falsy Value thus, it would return null.

  //. 3
  console.log(false || 0 || "");    // ""
  As '||' Operator checks for atleast one Truthy Value in whole input expression.
  Here, as all are Falsy Values so when goes to see one by one and doesn't find a Truthy Value.
  It returns last Falsy Value i.e, ""

  NOTE: logical operators do work for Truthy & Falsy Values...
*/


// 3️⃣ What will be the output of the following? [Nullish Coalescing Operator `??`]
/* 
  console.log(0 ?? "Default");  // 0
  console.log(null ?? "Default");   // "Default"
  console.log(undefined ?? "Fallback");   "Fallback"
*/

/*
 ANS && Justification.
  console.log(0 ?? "Default");  -> 0
  As '??' Operator only checks for a null or undefined value.
  Here above, 0 isn't null || undefined so it returns 0.
  Because 0 is just a Falsy Value.

  //. 2
  console.log(null ?? "Default");   -> "Default"
  As '??' Operator only checks for a null or undefined value.
  Here above, null is one of the special values. Thus, it goes to next value and returns "Default"
  Because "Default" is just a Truthy Value.

  //. 3
  console.log(undefined ?? "Fallback");   -> "Fallback"
  As '??' Operator only checks for a null or undefined value.
  Here above, undefined is one of the special values. Thus, it goes to next value and returns "Fallback"
  Because "Fallback" is just a Truthy Value.
*/

// 4️⃣ Output ?
/*
  console.log(null ?? 0 ?? "Fallback");   // 0
  console.log(undefined ?? "" ?? "Text");   // ""

*/

/*
  Answer & Justification:
  console.log(null ?? 0 ?? "Fallback") -> 0
  Here `??` Operator checks only for special values [null, undefined].
  So here it goes from start --> 
  null ?? 0 → 0 (because null is ignored, 0 stays).
  0 ?? "Fallback" → 0 (since 0 is NOT null or undefined, it stays).

  // 2.
  console.log(undefined ?? "" ?? "Text") -> ""
  Here `??` Operator checks only for special values [null, undefined].
  So here it goes from start --> 
  undefined ?? "" → "" (because undefined is ignored).
  "" ?? "Text" → "" (because empty string is NOT null or undefined).

*/



// 5️⃣ Output ?
/*
  console.log("Text" && false && 42); // false
*/

/*
  Answer & Justification:
  console.log("Text" && false && 42) -> false
  Here Logical `&&` Operator also assesses the Truthy and Falsy Value.
  As, here it would return Truthy Value if all are Truthy Value or True.
  Since, As here one value `false` is a Falsy Value thus, it would return false.

*/


// 6️⃣ Output ?
/*
  console.log(0 || NaN || "Hello"); // "Hello"
*/
/*
  Answer & Justification:
  console.log(0 || NaN || "Hello");  -> "Hello"
  As '||' Operator checks for atleast one Truthy Value in whole input expression.
  Here, as all are Falsy Values Except last one "Hello" [Any valid String] so when goes to see one by one it finds "Hello".
  It returns last Value which is Truthy i.e, "Hello"

*/


// 7️⃣ Output ?
/*
  console.log("" && 5 || "JavaScript");   // JavaScript
*/
/*
  Answer & Justification:
  console.log("" && 5 || "JavaScript"); -> JavaScript
  As above contains two Logical Operators one by one i.e., [&&, ||].
  Here JS Engine begins from start,
  And it finds first expression as ("" && 5) -> it returns "" As `&&` Operator checks for the any one falsy value.
  Then second expression ("" || "JavaScript") -> it finally returns output as "JavaScript" As `||` Operator only checks for one Truthy Value.

*/