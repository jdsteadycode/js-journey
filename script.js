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


/*
  DAY 10: Decision Making in JavaScript (IF Statement) 🎯
*/

// 1️⃣ What is the output of the following code?
/*
    if (5 > 2) {
      console.log("JavaScript is awesome!");
    }
*/
/*
 ANS && Justification.
  Here, inside the IF condition (5 > 2) which is true.
  As If statement normally satisifies true or truthy values.
  Thus, it would log the `JavaScript is awesome!`.
*/


// 2️⃣ What will be the output of the following code?
/*
  if (0) {
    console.log("This will print!");
  }
  console.log("End of script");

*/
/*
 ANS && Justification.
   Here, inside the If condition it has `0` which is a Falsy Value. & As If only satisfies the Truthy/ true values.
   Thus it would skip it and just log `End of Script`. (As it's outside the If condition thus ignored**)
*/


// 3️⃣ What will be the output of the following code?
/*
  if (" ") {
    console.log("Hello, World!");
  }
  console.log("Script continues...");


*/
/*
 ANS && Justification.
   Here, inside the If condition it has " " (which has white-space character!) & it's a Truthy Value.
   & If statement always satisfies the Truthy Values so it would execute or log `Hello, World!`.
   And, after JS Engine logs `Script Continues...` (As it's outside the If-scope)!
*/


// 4️⃣ What will be the output of the following code?
/*
  let num = -10;
  if (num) {
    console.log("Number is valid!");
  }
  console.log("Check complete.");

*/
/*
 ANS && Justification.
   Here we have a number i.e., -10 inside `num`.
   As `-10` is a Truthy Value and it's inside the If statement so it logs `Number is valid!`
   And after this, JS Engine logs `Check Complete`.
*/


// 5️⃣ What will be the output of the following code?
/*
  let data = null;
  if (data) {
    console.log("Data exists!");
  }
  console.log("Process finished.");

*/
/*
 ANS && Justification.
   Here we have `data` consisting of `null`.
   Where `null` is a Falsy Value this means inside above If Statement condition it wouldn't satisfy thus un-executed.
   Then, JS Engine logs `Process finished` (As it's outside the scope of If Statement)
*/


// 6️⃣ What will be the output of the following code?
/*
  if ("false") {
    console.log("Truthy value!");
  }
  console.log("Execution completed.");

*/
/*
 ANS && Justification.
   Here inside the If statement condition we've "false" (A String) which is a Truthy Value.
   So here If condition would be satisfied and logged `Truthy value!`.
   And after than JS Engine logs `Execution completed`.
*/


// 7️⃣ What will be the output of the following code?
/*
  if (undefined) {
    console.log("Executed!");
  }
  console.log("Code running...");

*/
/*
 ANS && Justification.
   Here inside the If statement condition we've `undefined`, Since it's a Falsy Value.
   If condition won't be satisfied there thus execution would be skipped.
   And, JS Engine would simply log `Code running...`.
*/


// 8️⃣ What will be the output of the following code?
/*
  if ("0") {
    console.log("Valid input!");
  }
  console.log("Script executed!");


*/
/*
 ANS && Justification.
   Here inside the If statement condition we've `0`. Thus, Any String is Truthy Value.
   So If statement would satisfy the condition and log the `Valid input` in console.
   And after then, JS Engine would execute `Script Executed`.
*/


// 9️⃣ What will be the output of the following code?
/*
  if (NaN) {
    console.log("Number accepted!");
  }
  console.log("Checking done!");

*/
/*
 ANS && Justification.
   Here inside the If statement condition we've `NaN` which is a Falsy Value.
   Thus, If Statement wouldn't satisfy the condition and skip the execution.
   And after JS Engine would log `Checking done`.
*/


// 🔟 What will be the output of the following code?
/*
  if (!NaN) {
    console.log("Falsy Value");
  }
  console.log("Executed code...");

*/
/*
 ANS && Justification.
   Here inside the If statement condition we've `!NaN` as NaN is a Falsy Value.
   But, it has negated using `!` this reverses the Boolean value (`false -> true`).
   Thus, If Statement would satisfy the condition and log `Falsy Value`.
   And after JS Engine would log Executed code...`.
*/



/*
  DAY 11: Optimizing Decision Making in JavaScript (else-if & else) 🎯
*/

// 1️⃣ What is the output of the following code?
/*
    let num = 10;

    if (num > 10) {
      console.log("Greater than 10");
    } else if (num === 10) {
      console.log("Exactly 10");
    } else {
      console.log("Less than 10");
    }

    console.log("Check complete");

*/
/*
 ANS && Justification.
  Output: Exactly 10. Check Complete
  As as `num` is `10`. So 1st condition of If Statement is skipped (10 not > 10).
  Then, JS Engine goes to 2nd condition which gets satisfied as (10 === 10) and executes the code beneath (`Exactly 10`).
  Then it jumps out of IF-Else-If-Else block and just logs `check complete` to console.
*/


// 2️⃣ What will be the output of the following code?
/*
  let score = 75;

  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else {
    console.log("Grade: F");
  }

  console.log("Evaluation done");


*/
/*
 ANS && Justification.
   Output: Grade C. Evaluation done.
    As as `score` is `75`. So 1st condition of If Statement is skipped (75 not >= 90).
    Also JS Engine would skip the 2nd condition (75 >= 80).
    Then, JS Engine goes to 3rd condition which gets satisfied as (75 >= 70) and executes the code beneath (`Grade C`).
    Then it jumps out of IF-Else-If-Else block and just logs `Evaluation done.` to console.
*/


// 3️⃣ What will be the output of the following code?
/*
  let temperature = 32;

  if (temperature > 40) {
    console.log("It's very hot!");
  } else if (temperature > 30) {
    console.log("It's warm.");
  } else if (temperature > 20) {
    console.log("It's cool.");
  } else {
    console.log("It's cold.");
  }

  console.log("Weather check complete.");

*/
/*
 ANS && Justification.
   Output: It's warm. Weather check complete.
    As as `temperature` is `32`. So 1st condition of If Statement is skipped (32 not > 40).
    Then, JS Engine goes to 2nd condition which gets satisfied as (32 > 30) and executes the code beneath (`It's warm.`).
    Then it jumps out of IF-Else-If-Else block and just logs `Weather check complete` to console.
*/


// 4️⃣ What will be the output of the following code?
/*
  let age = 15;

  if (age >= 18) {
    console.log("Eligible to vote");
  } else if (age >= 13) {
    console.log("Teenager");
  } else {
    console.log("Child");
  }

  console.log("Age check complete.");


*/
/*
 ANS && Justification.
   Output: Teenager. Age check complete.
    As as `age` is `15`. So 1st condition of If Statement is skipped (15 not >= 18).
    Then, JS Engine goes to 2nd condition which gets satisfied as (15 >= 13) and executes the code beneath (`Teenager.`).
    Then it jumps out of IF-Else-If-Else block and just logs `Age check complete` to console.
*/


// 5️⃣ What will be the output of the following code?
/*
  let num = -5;

  if (num > 0) {
    console.log("Positive number");
  } else if (num < 0) {
    console.log("Negative number");
  } else {
    console.log("Zero");
  }

  console.log("Number check complete.");


*/
/*
 ANS && Justification.
   Output: Negative number. Number check complete.
    As as `num` is `-5`. So 1st condition of If Statement is skipped (-5 not > 0).
    Then, JS Engine goes to 2nd condition which gets satisfied as (-5 < 0) and executes the code beneath (`Negative number.`).
    Then it jumps out of IF-Else-If-Else block and just logs `Number check complete` to console.
*/

// 6️⃣ What will be the output of the following code?
/*
  let speed = 120;

  if (speed < 60) {
    console.log("Slow");
  } else if (speed <= 100) {
    console.log("Moderate speed");
  } else {
    console.log("Fast");
  }

  console.log("Speed check complete.");


*/
/*
 ANS && Justification.
   Output: Fast. Speed check complete.
    As as `speed` is `120`. So 1st condition of If Statement is skipped (120 not < 60).
    Also JS Engine skips the 2nd condition as (120 not <= 100).
    Lastly the, JS Engine just goes to `else` block and executes the code beneath (`Fast`)
    Then it jumps out of IF-Else-If-Else block and just logs `Speed check complete` to console.
*/


// 7️⃣ What will be the output of the following code?
/*
  let battery = 50;

  if (battery > 80) {
    console.log("Battery full");
  } else if (battery > 30) {
    console.log("Battery medium");
  } else {
    console.log("Battery low");
  }

  console.log("Battery check complete.");


*/
/*
 ANS && Justification.
   Output: Battery medium. Battery check complete.
    As as `battery` is `50`. So 1st condition of If Statement is skipped (50 not > 80).
    Then, JS Engine goes to 2nd condition which gets satisfied as (50 > 30) and executes the code beneath (`Battery medium`).
    Then it jumps out of IF-Else-If-Else block and just logs `Battery check complete` to console.
*/



/*
  DAY 12: Learning Nested If-Else Statements in JavaScript 🎯 🎯
*/

// 1️⃣ What is the output of the following code?
/*
    let num = 8;

    if (num > 5) {
        if (num % 2 === 0) {
            console.log("Even and greater than 5");
        } else {
            console.log("Odd and greater than 5");
        }
    } else {
        console.log("5 or less");
    }
    console.log("Check done.");

*/
/*
 ANS && Justification.
  Output: Evem and greater than 5. Check done.
  As as `num` is `8`. So 1st condition of If Statement is satisfied (8 > 5). 
  Then JS Engine goes inside it and sees nested condition (8 % 2 === 0) which is also `true` thus it executes the code (`Even and greater than 5`).
  Then it instantly jumps out of IF-Else-If-Else block and just logs `Check done` to console.
*/


// 2️⃣ What will be the output of the following code?
/*
 let temperature = 15;

  if (temperature > 30) {
      console.log("Hot day!");
  } else {
      if (temperature > 20) {
          console.log("Warm day!");
      } else {
          console.log("Cold day!");
      }
  }
  console.log("Weather checked.");



*/
/*
 ANS && Justification.
   Output: Cold day!. Weather checked.
    As as `temperature` is `15`. So 1st condition of If Statement is skipped (15 not > 30).
    Then, JS Engine goes inside `else` block as default.
    And it finds nested `if-else` in which If condition is not satisfied as (15 not > 20).
    So it executes the nested `else` block by default (`Cold day!`).
    Then it jumps out of IF-Else-If-Else block and just logs `Weather checked.` to console.
*/


// 3️⃣ What will be the output of the following code?
/*
  let marks = 85;

  if (marks >= 90) {
      console.log("Grade A");
  } else {
      if (marks >= 75) {
          console.log("Grade B");
          if (marks >= 80) {
              console.log("Good Performance");
          }
      } else {
          console.log("Grade C");
      }
  }
  console.log("Evaluation done.");


*/
/*
 ANS && Justification.
   Output: Grade B. Good performance. Evaluation done.
    As as `marks` is `85`. So 1st condition of If Statement is skipped (85 not >= 90).
    Then, JS Engine goes inside `else` block as default.
    And, it finds nested `if-else` in which If condition is satisfied as (85 > 75) thus it logs (`Grade B`).
    Again it finds a nested `if` block with satisfied condition (85 > 80) thus logs (`Good performance`).
    Then it jumps out of IF-Else-If-Else block and just logs `Evaluation done.` to console.
*/


// 4️⃣ What will be the output of the following code?
/*
  let value = -3;

  if (value >= 0) {
      console.log("Positive number");
      if (value % 2 === 0) {
          console.log("Even number");
      }
  } else {
      console.log("Negative number");
      if (value < -5) {
          console.log("Very low value");
      }
  }
  console.log("Check completed.");

*/
/*
 ANS && Justification.
   Output: Negative number. Check completed.
    As `value` is `-2`. So 1st condition of If Statement is skipped (-1 not >= 0).
    Then, JS Engine goes inside `else` block as default & logs (`Negative number`).
    And, it finds a nested `if` block with condition (-3 < -5) which is `false` so it skips it.
    Then it jumps out of IF-Else-If-Else block and just logs `Check completed.` to console.
*/


// 5️⃣ What will be the output of the following code?
/*
  let num = 20;

  if (num % 2 === 0) {
      console.log("Even number");
      if (num > 10) {
          console.log("Greater than 10");
      }
  } else {
      console.log("Odd number");
  }
  console.log("Number checked.");

*/
/*
 ANS && Justification.
   Output: Even number. Greater than 10. Number checked.
    As as `num` is `20`. So 1st condition of If Statement is satisfied (20 % 2 === 0) & logs (`Even number`).
    Then, JS Engine finds nested `if` block with condition (20 > 10) which is `true` thus it again logs (`Greater than 10`).
    Then it jumps out of IF-Else-If-Else block and just logs `Number checked.` to console.
*/

// 6️⃣ What will be the output of the following code?
/*
  let score = 95;

  if (score >= 90) {
      console.log("Excellent");
      if (score === 100) {
          console.log("Perfect Score!");
      }
  } else {
      console.log("Needs Improvement");
  }
  console.log("Evaluation finished.");


*/
/*
 ANS && Justification.
   Output: Excellent. Evaluation finished.
    As as `score` is `95`. So 1st condition of If Statement is satisfied (95 >= 90) hence, logs (`Excellent`).
    Then JS Engine goes finds a nested `if` block with condition (95 === 100) which is `false` so it instantly skips it.
    Then it jumps out of IF-Else block and just logs `Evaluation finished` to console.
*/


// 7️⃣ What will be the output of the following code?
/*
  let age = 10;

  if (age > 5) {
      console.log("Child");
      if (age > 12) {
          console.log("Teenager");
      } else {
          console.log("Still a kid");
      }
  } else {
      console.log("Toddler");
  }
  console.log("Age check done.");


*/
/*
 ANS && Justification.
   Output: Child. Still a kid. Age check done.
    As as `age` is `10`. So 1st condition of If Statement is satisfied (10 > 5) hence, logs (`Child`).
    Then JS Engine goes finds a nested `if-else` block where `if` condition (10 > 12) remains un-satisfied so it instantly skips it.
    Thus, it directly goes to nested `else` part and logs (`Still a kid`).
    Then it jumps out of IF-Else block and just logs `Age check done.` to console.
*/