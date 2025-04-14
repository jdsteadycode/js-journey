# JavaScript Learning Journey - Answers

## Day 1: Variables and Scope

### Question 1:

**Answer:** `undefined`  
**Justification:**  
Hoisting moves the declaration of `x` to the top of the function scope, but its initialization happens at the point of assignment. Since the function-scoped `x` is hoisted and initialized with `undefined`, `console.log(x)` logs `undefined` before the value of `20` is assigned to it inside the function.

### Question 2:

**Answer:** `20`  
**Justification:**  
Since `var` is function-scoped, the second declaration of `a` inside the `if` block overwrites the first one. Therefore, when `console.log(a)` runs, it logs `20`, the final value assigned to `a` within the function scope.

---

## Day 2: More on Hoisting and Scope

### Question 1:

**Answer:** Error!  
**Justification:**  
You're trying to access a variable `x` that has been declared with `let` inside the function, but it's hoisted to the top of its block scope. Since `let` doesn't allow access before initialization (temporal dead zone), accessing it before its declaration results in an error.

### Question 2:

**Answer:** `20`  
**Justification:**  
In this case, `var` is function-scoped. Even though the declaration of `a` occurs inside the `if` block, it's accessible throughout the entire function, and the assignment of `20` is valid after the block. The variable `a` is logged as `20`.

### Question 3:

**Answer:**  
`20` (inside `example()`)  
`10` (outside `example()`)  
**Justification:**  
Inside the function `example()`, the `let` inside the block creates a new variable `x`, which is logged as `20`. The global `x` remains `10`, so when logged outside the function, it displays the global value `10`.

### Question 4:

**Answer:** `undefined`, then `10`  
**Justification:**  
Since `a` is hoisted inside the function, it is initialized with `undefined` before the assignment. When the function runs, it logs `undefined` initially and then assigns `10` to `a`, which is logged on the second `console.log(a)`.

---

## Day 4: In-depth on Variables Scopes and Hoisting

### Question 1:

**Question:** What is the correct way of declaring variables?

- A) `var name = "John";`
- B) `let name = "John";`
- C) `const name = "John";`
- D) All of the above

**Answer:**  
`D) All of the above`

**Justification:**  
There are three primary ways to declare variables in JavaScript: `var`, `let`, and `const`.

1. **`var`:**

   - This is the older way of declaring variables.
   - Variables declared with `var` can be accessed or used even before their declaration due to a process called **hoisting**. However, they are initialized with `undefined` until the code execution reaches the declaration.

2. **`let`:**

   - Introduced in **ES6 (2015)**, `let` is block-scoped and cannot be accessed before its declaration.
   - Attempting to use a `let` variable before declaration results in a `ReferenceError`.

3. **`const`:**
   - Also introduced in **ES6**, `const` is used for declaring variables that must remain constant.
   - Variables declared with `const` must be initialized at the time of declaration, and their values cannot be reassigned.

Each method has its use case, but modern JavaScript development prefers `let` and `const` over `var` due to their stricter scoping rules and predictable behavior.

### Question 2:

**Question:** What will the following code output?

```javascript
console.log(a);
var a = 10;
console.log(b);
let b = 20;
```

**Answer:**  
`undefined, ReferenceError`

**Justification:**

1. **First Log (`console.log(a);`):**

   - The variable `a` is declared using the `var` keyword.
   - Due to hoisting, the declaration of `a` is moved to the top during the execution phase. However, it is initialized with `undefined` until the actual assignment (`a = 10`) is reached in the code.
   - Therefore, the first log outputs `undefined`.

2. **Second Log (`console.log(b);`):**

   - The variable `b` is declared using the `let` keyword.
   - Although `let` declarations are also hoisted, they remain in a `temporal dead zone` from the start of the block until their declaration is encountered.
   - Accessing `b` before its declaration results in a `ReferenceError`.

### Question 3:

**Question:** What will the following code output?

```javascript
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
```

**Answer:**  
`15, 20, 15, 10`

**Justification:**

1. **Inside the block (`console.log(x);`):**

   - The variable `x` is declared using var. Since `var` has function scope (or global scope in this case) and not block scope, the value of `x` declared inside the block overrides the value of `x` outside the block.
   - Hence, `console.log(x);` inside the block outputs `15`.

2. **Inside the block (`console.log(y);`):**

   - The variable `y` is declared using `let`. Variables declared with let have block scope, so the `y` inside the block is a separate variable from the `y` outside the block.
   - The value of `y` inside the block is `20`, so `console.log(y);` inside the block outputs `20`.

3. **Outside the block (`console.log(x);`):**

   - Since `x` is declared using `var`, its value was overridden globally inside the block.
   - Therefore, `console.log(x);` outside the block outputs `15`.

4. **Outside the block (`console.log(y);`):**

   - The `y` declared with `let` inside the block is a separate variable and does not affect the `y` declared outside the block.
   - Hence, `console.log(y);` outside the block outputs the value assigned at the top, which is `10`.

### Question 4:

**Question:** What will the following code output?

```javascript
const obj = { name: "Alice", age: 25 };
obj.age = 30;
obj = { name: "Bob", age: 40 };

console.log(obj);
```

**Answer:**  
`TypeError: Assignment to a constant variable`

**Justification:**
The `const` keyword, introduced in ES6 (2015), is used to declare variables whose bindings cannot be reassigned. In the given code, the line `obj = { name: "Bob", age: 40 };` attempts to reassign the constant `obj`, which is not allowed. This results in a `TypeError`.

Although the reference binding of a `const` variable cannot be changed, the properties of objects declared with `const` can still be modified.

### Question 5:

**Question:** What will the following code output?

```javascript
console.log(a);
console.log(b);

let a = 5;
const b = 10;
```

**Answer:**  
`ReferenceError, ReferenceError.`

**Justification:**
Both `let` and `const` were introduced in the ES6 (2015+) ECMA Standards with specific restrictions, including hoisting and block-scoping. Due to hoisting, the declarations of `a` and `b` are moved to the top of their respective blocks. However, these variables remain in the **temporal dead zone** from the start of the block until their actual initialization.

Since we are attempting to access `a` and `b` before they are initialized, the JavaScript Engine throws a `ReferenceError` for both variables, as they are not accessible during the dead zone period. This restricts the access to them before their declaration and initialization.

Hence, the result is two `ReferenceError` exceptions.

### Question 6:

**Question:** What will the following code output?

```javascript
const arr = [1, 2, 3];
arr.push(4);
arr = [5, 6, 7];

console.log(arr);
```

**Answer:**  
`TypeError: Assignment to a constant variable.`

**Justification:**
The `const` keyword is used to declare a constant, and in this case, it is used to set the variable as an array. On the second line, using `push()` to add a value to the array at the 3rd index is perfectly fine because we are modifying the contents of the array, not reassigning the entire array.

However, the issue arises when we try to reassign the entire array to a new one with `[5, 6, 7]`. Since `const` makes the reference to the array immutable, we cannot assign a new array to the `const` variable. This results in a `TypeError` because `const` variables cannot be reassigned after their initial assignment.

It's important to note that while `const` prevents reassignment, we can still manipulate the contents of the array (e.g., using `push`, `pop`, `sort`, etc.).

### Question 7:

**Question:** What will the following code output?

```javascript
var a = 10;

function test() {
  var a = 20;
  console.log(a);
}

test();
console.log(a);
```

**Answer:**  
`20 10.`

**Justification:**
The `var` keyword is function-scoped, meaning it is not block-scoped like `let` or `const`. When the function `test()` is invoked, the value of `a` becomes `20` because `var` does not create a new copy of `a` inside the function (it uses the same `a` defined outside the function). Therefore, inside the function, `a` is `20`.

After the function call, when we invoke `console.log(a);` outside the function, it prints the original value of `a`, which is `10`. This happens because `a` is not re-declared inside the function scope; it retains its value from the outer scope.

Thus, the output is `20 10`.

### Question 8:

**Question:** What will the following code output?

```javascript
var a = 10;

function outer() {
  var a = 20;

  function inner() {
    console.log(a);
  }

  inner();
}

outer();
```

**Answer:**  
`20.`

**Justification:**
The global `a` starts with a value of `10`. Inside the `outer()` function, `var a = 20;` declares a local `a`, shadowing the global variable. The `inner()` function, called inside `outer()`, logs the value of `a` from the closest scope, which is `20` from `outer()`. The global `a` remains unchanged at `10`, but the value logged inside `inner()` is `20` due to lexical scoping.

### Question 9:

**Question:** What will the following code output?

```javascript
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
```

**Answer:**  
`30.`

**Justification:**
Inside the `outer()` function, `var a = 10;` declares a local variable `a` each time `outer()` is invoked, and it gets a value of `10`. Similarly, inside `inner()`, `var b = 20;` declares a local `b` with a value of `20`. The sum of `a` and `b` is `30`, which is logged inside `inner()`.

After `inner()` returns the value `30`, the returned value is logged by invoking the `outer()` function via `func()`. Therefore, the final output is `30`.

### Question 10:

**Question:** What will the following code output?

```javascript
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
```

**Answer:**  
`1 1.`

**Justification:**
Inside the `outer()` function, `a` is declared using `var`, making it function-scoped. Each time `outer()` is invoked, a new copy of `a` is created with the value `10`. Inside the `inner()` function, `a` is logged, so it returns `10` but still remains within the `outer()` function's scope.

Next, two named functions, `func1` and `func2`, both reference the `outer()` function. Invoking both functions simultaneously results in `1 1`, as each function call produces the same output.

---

## Day 5: String - Methods and Properties 🔍

## Level 01: Warm-up [Basics]

### 1. Accessing Characters

Given the string `const word = "JavaScript";`, write code to:

- Get the first character.
  **Answer:** `J`
- Get the last character using a dynamic approach.
  **Answer:** `t`
- Get the third character.
  **Answer:** `v`

### 2. String Length

For `const netflixSerie = "Stranger Things Part:IV";`, find:

- The total number of characters.
  **Answer:** `26`
- The difference between the length of `netflixSerie` and the string "Stranger Things I".
  **Answer:** `9`

---

## Level 02: Methods Without Arguments

### 3. Case Conversion

- Convert the string `"smile II"` into uppercase.
  **Answer:** `"SMILE II"`
- Convert the string `"Lionel Messi"` into lowercase.
  **Answer:** `"lionel messi"`

### 4. Trim Methods

Given the string `"        Sharp Corporates Ltd.       ":`

- Apply `trim()`.
  **Answer:** `"Sharp Corporates Ltd."`
- Apply `trimStart()`.
  **Answer:** `"Sharp Corporates Ltd.       "`
- Apply `trimEnd()`.
  **Answer:** `"        Sharp Corporates Ltd."`

**Explanation:**

- `trim()` removes spaces from both ends.
- `trimStart()` removes spaces from the beginning.
- `trimEnd()` removes spaces from the end.

---

## Level 03: Methods With Arguments

### 5. Includes & IndexOf

For `const sentence = "Cristiano Ronaldo And Marco Van Basten are some of the dealiest Center Forwards of all time!":`

- Check if the word "Van" exists in the sentence.
  **Answer:** `sentence.includes("Van")` returns `true`
- Find the index of the word "Marco".
  **Answer:** `sentence.indexOf("Marco")` returns `20`
- What happens when you search for the word "basten"?
  **Answer:** `sentence.includes("basten")` returns `false` because "basten" is case-sensitive and must be written as "Basten".

### 6. Replace Methods

- Replace all occurrences of `"o"` with `"u"` in the string `"Good Morning!"`.
  **Answer:** `"Guud Murning!"`
- Replace the first occurrence of `"o"` with `"@"`.
  **Answer:** `"G@od Morning!"`

### 7. Concat

Merge `"Frontend"` and `"Development"` with a hyphen (`-`) in between using `concat()`.
**Answer:** `"Frontend-Development"`

---

## Level 04: Advanced Challenges

### 8. Padding for Formatting and Security

- Mask the first 12 characters of the credit card number `"1234567890123456"` using `padStart()`.
  **Answer:** `"************3456"`
- Format the number `123` as a 5-digit number by adding leading zeros (`000123`).
  **Answer:** `"00123"`

### 9. Character Codes

- For `const char = "A";`, find the ASCII code using `charCodeAt()`.
  **Answer:** `65`
- Write a function that takes a string and returns the sum of ASCII codes for all characters.
  ```javascript
  fetchSumOfASCII(args){
       // go to `script.js` file to view code and test
  }
  ```

### 10. Split

- Split `"apple,banana,grape"` into an array of fruits.
  **Answer:** `"apple,banana,grape".split(",")` gives `["apple", "banana", "grape"]`
- Split `"New Delhi!"` into individual characters.
  **Answer:** `["N", "e", "w", " ", "D", "e", "l", "h", "i", "!"]`

### 11. Substring vs Slice

For the string `"JavaScript":`

- Extract `"Java"` using `substring()`.
  **Answer:** `"Java"`
- Extract `"Script"` using `slice()`.
  **Answer:** `"Script"`
- Compare the outputs, look for them in my script.js.
  **Comparision:**
  - `substring()` does not accept negative indices and treats them as `0`.
  - `slice()` accepts negative indices to count from the end.

---

## Notes:

- **Hoisting:** The process of moving variable declarations to the top of their respective scopes (either function or block scope).
- **Scope:** Variables declared with `var` are function-scoped, while variables declared with `let` or `const` are block-scoped, making them behave differently within loops or conditionals.
- **Temporal Dead Zone (TDZ):** Refers to the time between entering the scope and the initialization of a variable declared with `let` or `const`, where accessing it results in an error.

---

## Day 6: Math Object 🔢

### Question 1:

**Question:** What will `Math.floor(4.9)` return?

**Answer:**  
`4`

**Justification:**  
`Math.floor(param)` rounds down the value to the closest integer.

### Question 2:

**Question:** How do you generate a random number between `1` and `10` using the Math object?

**Answer:**

```javascript
function getRandom(min, max) {
  // 1 - 10
  return Math.floor(Math.random() * (max - min + 1)) + min;

  // WORK:
  // input (1, 10)
  // (10 - 1 + 1)  =>  10
  // Math.floor(Math.random() * 10) -> i.e., it will return 0 - 9 but not 10! (due to floor() -> rounds down to nearest integer i.e., ex: 0.888 -> 0, 1.9888 -> 1)
  //  + 1 i.e., now it will return 1 -> 10
}
```

**Justification:**  
`getRandom(min, max)` user-defined function that returns values between minimum and maximum But, both inclusive.

### Question 3:

**Question:** What does `Math.abs(-7)` return, and why?

**Answer:**  
`7`

**Justification:**  
`Math.abs(param)` returns positive value of any integer which negative, Because it just removes negativity.

### Question 4:

**Question:** How can you round 5.4 to it's nearest integer using the Math object?

**Answer:**

`Math.round(5.4) or Math.floor(5.4) // output: 5`

**Justification:**

```javascript
Math.round(param); // It rounds to it's closest integer value by checking decimal pt. i.e., if decimal pt is <= 4 then it rounds down else >=5 then it rounds up!
Math.floor(param); // It rounds down to it's closest integer value
```

### Question 5:

**Question:** What is the difference between `Math.trunc(4.9)` and `Math.floor(4.9)`?

**Answer:**

`4`

**Justification:**

```javascript
Math.trunc(param); // latest addition by ECMA international ES6+
//  it returns integer part of given input irrespective of it's decimal place.
Math.floor(param); // It rounds down to it's closest integer value
```

### Question 6:

**Question:** What will `Math.pow(2, 3)` return?

**Answer:**

`8`

**Justification:**

```javascript
Math.pow(2, 3); // Here, pow() method gives 1st input power as 2nd input.
// Thus it would give exponentiation as 2 ** 3 -> 8.

// NOTE: recommended to use ES6+ addition -> `**` operator.
```

---

## Day 7: Truthy ✅ & Falsy ❎ Values in JavaScript

### Question 7:

**Question:** Which of the following is falsy in JavaScript? `0, "hello", {}, undefined, [], false`?

**Answer:**  
`0, undefined, false`

**Justification:**  
` 0, -0, undefined, false, '', ``, "", NaN, null ` are by-default Falsy Values ❎.

### Question 8:

**Question:** What is the output of `Boolean(" ")` in JavaScript?

**Answer:**

`true`

**Justification:**  
Because `" ",  ' ', ` ` ` contains a white-space. Thus, A whitespace is considered as an character in a string so it's a Truthy Value ✅.

### Question 9:

**Question:** Will `"0"` (a string) be treated as truthy or falsy?

**Answer:**  
`No i.e., true`

**Justification:**  
Just like in `question 8️`, Any character placed inside string or string literal is considered as an valid character which are Truthy Value ✅ by-default!.

### Question 10:

**Question:** What happens when you use `!!value` in JavaScript?

**Answer:**

`returns an Boolean Value (true or false).`

**Justification:**

Let's assume it contains a value like `0` (a Falsy Value ❎). Here double-negation operator `!!` is used to check whether value is Falsy ❎ || Truthy ✅. It would return `false` as EX:!0 -> `true` then, !true is `false`.

### Question 11:

**Question:** What is the output of `Boolean([])`?

**Answer:**

`true i.e., (Truthy Value ✅)`

**Justification:**

It returns `true` as empty `[], {}` i.e., objects and arrays are considered as Truthy Values ✅.

### Question 12:

**Question:** How does JavaScript evaluate the following: `if (null) { console.log("Truthy"); } else { console.log("Falsy"); }`?

**Answer:**

`Falsy`

**Justification:**
As if condition wouldn't satisy `null` as true this is because `null` is by-default a Falsy Value ❎. Thus, It would trigger the else block hence, output: `Falsy` ✅.

---

## Day 8: Comparison Operators in JavaScript ❕❔

### Question 13:

**Question:** What is the difference between `==` and `===` in JavaScript?

**Answer & Justification:**
`==` operator - simple equality check operator. It cross checks the value of the given expressions.
It converts type implicitly to match the expressions, this is initiated behind-the-scenes by JS Engine
Thus output can be in-appropriate.

`===` operator - strict equality check operator. It cross checks the value as well as type of given expressions.
It doesn't implicitly converts type of the expression. Thus, output seems reliable here.

NOTE: `===` is recommended over `==` operator due to accurate and reliable output!

### Question 14:

**Question:** What will `5 == "5"` return and why?

**Answer:**

`true`

**Justification:**  
Because of `==` operator (simple equality check).
As `==` operator just matches the value of expressions given & JS Engine coverts `"5" -> 5` implicitly behind the scenes.
Thus output is `true`, which is inappropriate logically.

NOTE: To use `===` operator as mentioned above in question 13.

### Question 15:

**Question:** What is the output of `true == 1`?

**Answer:**  
`true`

**Justification:**  
This is because the expressions where in first one `true` is a Truthy Value ✅ And, `1` is also Truthy Value ✅.
Thus `==` operator check if both values match or not! With an implicit type conversion intiated by JS Engine behind-the-scenes.
Thus, as both are Truthy it returns Boolean `true`.

### Question 16:

**Question:** What happens when you compare `null >= 0` in JavaScript?

**Answer:**

`true`

**Justification:**

`>=` greater than and equal to operator checks if given expression is larger than the other and also additionally checks if it's equal or not!
And, JS Engine implicitly converts `null` to `0`.
Thus `0 >= 0` results to Boolean `true`.

NOTE: comparison operators work slight differently than logical operators so here value gets converted to different one to be compared!

### Question 17:

**Question:** What will `NaN === NaN` return?

**Answer:**

`false (NaN is weird)`

**Justification:**

Because, `NaN` is the only Falsy Value ❎ that isn't equal to itself.
So it returns Boolean `false`.

### Question 18:

**Question:** What is the result of `"5" > 3` in JavaScript, and why?

**Answer:**

`true`

**Justification:**
`>` - greater than operator.
It checks if given expression is larger than the other or not!
Also JS Engine does implicit type coversion for the expression if needed!
As `"5" -> 5` so, `5 > 3` which is `true`.
Thus it returns Boolean `true`.

---

## Day 9: Logical Operators in JavaScript 🤖

### Question 1:

**Question:** What is the output of the following code?

```javascript
console.log(true && 0);
console.log(false || "Hello");
console.log(!"");
```

**Answer & Justification:**
`console.log(true && 0)` -> `0`
This happens as `&&` Operator assesses `Truthy and Falsy` Values.
And, as here `&&` Operator returns Truthy Value only if both values or expressions are `Truthy or true`.
As if here `0` is the Falsy Value it straightaway returns `Falsy Value`.

//. 2
`console.log(false || "Hello")` -> `"Hello"`
Here Logical `||` Operator also assesses the Truthy and Falsy Value But, in a different way.
As, here it would return Truthy Value even if there's only one Truthy Value or a Falsy Value.
So it returns "Hello".

//. 3
`console.log(!"")` -> `true`.
`!` is Logical Not or Negation Operator as, it reverses the Boolean `Truthy || Falsy` value and returns the reversed Boolean Value.
So here As `""` is a Falsy Value Thus, `!""` returns it's opposite i.e., `True or Truthy` Value.

**NOTE:**logical operators do work for Truthy & Falsy Values...

### Question 2:

**Question:** What is the output of the following code?

```javascript
console.log(null || undefined);
console.log(1 && null && "Hello");
console.log(false || 0 || "");
```

**Answer & Justification:**
`console.log(null || undefined);` // `undefined`
As `||` Operator checks for atleast one Truthy Value in whole input expression.
So, it goes to second input value to see whether if it's Truthy Value or true.
Since As it finds both are Falsy Values [null & undefined] So, it prints second Falsy Value.

//. 2
`console.log(1 && null && "Hello");` // `null`
Here Logical `&&` Operator also assesses the Truthy and Falsy Value.
As, here it would return Truthy Value if all are Truthy Value or True.
Since, As here one value `null` is a Falsy Value thus, it would return null.

//. 3
`console.log(false || 0 || "");` // `""`
As `||` Operator checks for atleast one Truthy Value in whole input expression.
Here, as all are Falsy Values so when goes to see one by one and doesn't find a Truthy Value.
It returns last Falsy Value i.e, `""`

**NOTE:**logical operators do work for Truthy & Falsy Values...

### Question 3:

**Question:** What will be the output of the following? (Nullish Coalescing Operator `??`)

```javascript
console.log(0 ?? "Default");
console.log(null ?? "Default");
console.log(undefined ?? "Fallback");
```

**Answer & Justification:**
`console.log(0 ?? "Default");` -> `0`
As `'??'` Operator only checks for a null or undefined value.
Here above, 0 isn't null || undefined so it returns 0.
Because 0 is just a Falsy Value.

//. 2
`console.log(null ?? "Default");` -> `"Default"`
As `'??'` Operator only checks for a null or undefined value.
Here above, null is one of the special values. Thus, it goes to next value and returns "Default"
Because "Default" is just a Truthy Value.

//. 3
`console.log(undefined ?? "Fallback");` -> `"Fallback"`
As `'??'` Operator only checks for a null or undefined value.
Here above, undefined is one of the special values. Thus, it goes to next value and returns "Fallback"
Because "Fallback" is just a Truthy Value.

### Question 4:

**Question:** Output ?

```javascript
console.log(null ?? 0 ?? "Fallback");
console.log(undefined ?? "" ?? "Text");
```

**Answer & Justification:**
`console.log(null ?? 0 ?? "Fallback");` -> `0`
Here `??` Operator checks only for special values [null, undefined].
So here it goes from start -->
null ?? 0 → 0 (because null is ignored, 0 stays).
0 ?? "Fallback" → 0 (since 0 is NOT null or undefined, it stays).

// 2.
`console.log(undefined ?? "" ?? "Text");` -> `""`
Here `??` Operator checks only for special values [null, undefined].
So here it goes from start -->
undefined ?? "" → "" (because undefined is ignored).
"" ?? "Text" → "" (because empty string is NOT null or undefined).

### Question 5:

**Question:** Output ?

```javascript
console.log("Text" && false && 42);
```

**Answer & Justification:**
`console.log("Text" && false && 42);` -> `false`
Here Logical `&&` Operator also assesses the Truthy and Falsy Value.
As, here it would return Truthy Value if all are Truthy Value or True.
Since, As here one value `false` is a Falsy Value thus, it would return false.

### Question 6:

**Question:** Output ?

```javascript
console.log(0 || NaN || "Hello");
```

**Answer & Justification:**
`console.log(0 || NaN || "Hello");` -> `"Hello"`
As `||` Operator checks for atleast one Truthy Value in whole input expression.
Here, as all are Falsy Values Except last one "Hello" [Any valid String] so when goes to see one by one it finds "Hello".
It returns last Value which is Truthy i.e, `"Hello"`

### Question 7:

**Question:** Output ?

```javascript
console.log(("" && 5) || "JavaScript");
```

**Answer & Justification:**
`console.log("" && 5 || "JavaScript");` -> `JavaScript`
As above contains two Logical Operators one by one i.e., `[&&, ||]`.
Here JS Engine begins from start,
And it finds first expression as ("" && 5) -> it returns "" As `&&` Operator checks for the any one falsy value.
Then second expression ("" || "JavaScript") -> it finally returns output as "JavaScript" As `||` Operator only checks for one Truthy Value.

---

## Day 10: Decision Making in JavaScript (IF Statement) 🎯

### Question 1:

**Question:** What is the output of the following code?

```javascript
if (5 > 2) {
  console.log("JavaScript is awesome!");
}
```

**Answer & Justification:**
Here, inside the IF condition `(5 > 2)` which is `true`.
As If statement normally satisifies `true or Truthy` values.
Thus, it would log the `JavaScript is awesome!`.

### Question 2:

**Question:** What is the output of the following code?

```javascript
if (0) {
  console.log("This will print!");
}
console.log("End of script");
```

**Answer & Justification:**
Here, inside the If condition it has `0` which is a `Falsy` Value. & As If only satisfies the `Truthy or true` values.
Thus it would skip it and just log `End of Script`. (As it's outside the If condition thus ignored).

### Question 3:

**Question:** What is the output of the following code?

```javascript
if (" ") {
  console.log("Hello, World!");
}
console.log("Script continues...");
```

**Answer & Justification:**
Here, inside the If condition it has `" "` (which has white-space character!) & it's a `Truthy` Value.
& If statement always satisfies the `Truthy` Values so it would execute or log `Hello, World!`.
And, after JS Engine logs `Script Continues...` (As it's outside the If-scope)!

### Question 4:

**Question:** What is the output of the following code?

```javascript
let num = -10;
if (num) {
  console.log("Number is valid!");
}
console.log("Check complete.");
```

**Answer & Justification:**
Here we have a number i.e., `-10` inside `num`.
As `-10` is a `Truthy` Value and it's inside the If statement so it logs `Number is valid!`
And after this, JS Engine logs `Check Complete.`.

### Question 5:

**Question:** What is the output of the following code?

```javascript
let data = null;
if (data) {
  console.log("Data exists!");
}
console.log("Process finished.");
```

**Answer & Justification:**
Here we have `data` consisting of `null`.
Where `null` is a `Falsy` Value this means inside above If Statement condition it wouldn't satisfy thus un-executed.
Then, JS Engine logs `Process finished` (As it's outside the scope of If Statement)

### Question 6:

**Question:** What is the output of the following code?

```javascript
if ("false") {
  console.log("Truthy value!");
}
console.log("Execution completed.");
```

**Answer & Justification:**
Here inside the If statement condition we've `"false"` (A String) which is a `Truthy` Value.
So here If condition would be satisfied and logged `Truthy value!`.
And after than JS Engine logs `Execution completed`.

### Question 7:

**Question:** What is the output of the following code?

```javascript
if (undefined) {
  console.log("Executed!");
}
console.log("Code running...");
```

**Answer & Justification:**
Here inside the If statement condition we've `undefined`, Since it's a `Falsy` Value.
If condition won't be satisfied there thus execution would be skipped.
And, JS Engine would simply log `Code running...`.

### Question 8:

**Question:** What is the output of the following code?

```javascript
if ("0") {
  console.log("Valid input!");
}
console.log("Script executed!");
```

**Answer & Justification:**
Here inside the If statement condition we've `0`. Thus, Any String is `Truthy` Value.
So If statement would satisfy the condition and log the `Valid input!` in console.
And after then, JS Engine would execute `Script Executed`.

### Question 9:

**Question:** What is the output of the following code?

```javascript
if (NaN) {
  console.log("Number accepted!");
}
console.log("Checking done!");
```

**Answer & Justification:**
Here inside the If statement condition we've `NaN` which is a `Falsy` Value.
Thus, If Statement wouldn't satisfy the condition and skip the execution.
And after JS Engine would log `Checking done`.

### Question 9:

**Question:** What is the output of the following code?

```javascript
if (!NaN) {
  console.log("Falsy Value");
}
console.log("Executed code...");
```

**Answer & Justification:**
Here inside the If statement condition we've `!NaN` as NaN is a `Falsy` Value.
But, it has negated using `!` (Logical Not Operator) this reverses the Boolean value `(false -> true)`.
Thus, If Statement would satisfy the condition and log `Falsy Value`.
And after JS Engine would log Executed code...`.

---

## Day 11: Optimizing Decision Making in JavaScript (else-if & else) 🎯

### Question 1:

**Question:** What is the output of the following code?

```javascript
let num = 10;

if (num > 10) {
  console.log("Greater than 10");
} else if (num === 10) {
  console.log("Exactly 10");
} else {
  console.log("Less than 10");
}

console.log("Check complete");
```

**Answer & Justification:**
Output: Exactly 10. Check Complete
As as `num` is `10`. So 1st condition of If Statement is skipped (`10 not > 10`).
Then, JS Engine goes to 2nd condition which gets satisfied as (`10 === 10`) and executes the code beneath (`Exactly 10`).
Then it jumps out of IF-Else-If-Else block and just logs `check complete` to console.

### Question 2:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Grade C. Evaluation done.
As as `score` is `75`. So 1st condition of If Statement is skipped (`75 not >= 90`).
Also JS Engine would skip the 2nd condition (`75 >= 80`).
Then, JS Engine goes to 3rd condition which gets satisfied as (`75 >= 70`) and executes the code beneath (`Grade C`).
Then it jumps out of IF-Else-If-Else block and just logs `Evaluation done.` to console.

### Question 3:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: It's warm. Weather check complete.
As as `temperature` is `32`. So 1st condition of If Statement is skipped (`32 not > 40`).
Then, JS Engine goes to 2nd condition which gets satisfied as (`32 > 30`) and executes the code beneath (`It's warm.`).
Then it jumps out of IF-Else-If-Else block and just logs `Weather check complete` to console.

### Question 4:

**Question:** What is the output of the following code?

```javascript
let age = 15;

if (age >= 18) {
  console.log("Eligible to vote");
} else if (age >= 13) {
  console.log("Teenager");
} else {
  console.log("Child");
}

console.log("Age check complete.");
```

**Answer & Justification:**
Output: Teenager. Age check complete.
As as `age` is `15`. So 1st condition of If Statement is skipped (`15 not >= 18`).
Then, JS Engine goes to 2nd condition which gets satisfied as (`15 >= 13`) and executes the code beneath (`Teenager.`).
Then it jumps out of IF-Else-If-Else block and just logs `Age check complete` to console.

### Question 5:

**Question:** What is the output of the following code?

```javascript
let num = -5;

if (num > 0) {
  console.log("Positive number");
} else if (num < 0) {
  console.log("Negative number");
} else {
  console.log("Zero");
}

console.log("Number check complete.");
```

**Answer & Justification:**
Output: Negative number. Number check complete.
As as `num` is `-5`. So 1st condition of If Statement is skipped (`-5 not > 0`).
Then, JS Engine goes to 2nd condition which gets satisfied as (`-5 < 0`) and executes the code beneath (`Negative number.`).
Then it jumps out of IF-Else-If-Else block and just logs `Number check complete` to console.

### Question 6:

**Question:** What is the output of the following code?

```javascript
let speed = 120;

if (speed < 60) {
  console.log("Slow");
} else if (speed <= 100) {
  console.log("Moderate speed");
} else {
  console.log("Fast");
}

console.log("Speed check complete.");
```

**Answer & Justification:**
Output: Fast. Speed check complete.
As as `speed` is `120`. So 1st condition of If Statement is skipped (`120 not < 60`).
Also JS Engine skips the 2nd condition as (`120 not <= 100`).
Lastly the, JS Engine just goes to `else` block and executes the code beneath (`Fast`)
Then it jumps out of IF-Else-If-Else block and just logs `Speed check complete` to console.

### Question 7:

**Question:** What is the output of the following code?

```javascript
let battery = 50;

if (battery > 80) {
  console.log("Battery full");
} else if (battery > 30) {
  console.log("Battery medium");
} else {
  console.log("Battery low");
}

console.log("Battery check complete.");
```

**Answer & Justification:**
Output: Battery medium. Battery check complete.
As as `battery` is `50`. So 1st condition of If Statement is skipped (`50 not > 80`).
Then, JS Engine goes to 2nd condition which gets satisfied as (`50 > 30`) and executes the code beneath (`Battery medium`).
Then it jumps out of IF-Else-If-Else block and just logs `Battery check complete` to console.

## Day 12: Learning Nested If-Else Statements in JavaScript 🎯 🎯

### Question 1:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Evem and greater than 5. Check done.
As as `num` is `8`. So 1st condition of If Statement is satisfied (`8 > 5`).
Then JS Engine goes inside it and sees nested condition (`8 % 2 === 0`) which is also `true` thus it executes the code (`Even and greater than 5`).
Then it instantly jumps out of IF-Else-If-Else block and just logs `Check done` to console.

### Question 2:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Cold day!. Weather checked.
As as `temperature` is `15`. So 1st condition of If Statement is skipped (`15 not > 30`).
Then, JS Engine goes inside `else` block as default.
And it finds nested `if-else` in which If condition is not satisfied as (`15 not > 20`).
So it executes the nested `else` block by default (`Cold day!`).
Then it jumps out of IF-Else-If-Else block and just logs `Weather checked.` to console.

### Question 3:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Grade B. Good performance. Evaluation done.
As as `marks` is `85`. So 1st condition of If Statement is skipped (`85 not >= 90`).
Then, JS Engine goes inside `else` block as default.
And, it finds nested `if-else` in which If condition is satisfied as (`85 > 75`) thus it logs (`Grade B`).
Again it finds a nested `if` block with satisfied condition (`85 > 80`) thus logs (`Good performance`).
Then it jumps out of IF-Else-If-Else block and just logs `Evaluation done.` to console.

### Question 4:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Negative number. Check completed.
As `value` is `-2`. So 1st condition of If Statement is skipped (`-1 not >= 0`).
Then, JS Engine goes inside `else` block as default & logs (`Negative number`).
And, it finds a nested `if` block with condition (`-3 < -5`) which is `false` so it skips it.
Then it jumps out of IF-Else-If-Else block and just logs `Check completed.` to console.

### Question 5:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Even number. Greater than 10. Number checked.
As as `num` is `20`. So 1st condition of If Statement is satisfied (`20 % 2 === 0`) & logs (`Even number`).
Then, JS Engine finds nested `if` block with condition (`20 > 10`) which is `true` thus it again logs (`Greater than 10`).
Then it jumps out of IF-Else-If-Else block and just logs `Number checked.` to console.

### Question 6:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Excellent. Evaluation finished.
As as `score` is `95`. So 1st condition of If Statement is satisfied (`95 >= 90`) hence, logs (`Excellent`).
Then JS Engine goes finds a nested `if` block with condition (`95 === 100`) which is `false` so it instantly skips it.
Then it jumps out of IF-Else block and just logs `Evaluation finished` to console.

### Question 7:

**Question:** What is the output of the following code?

```javascript
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
```

**Answer & Justification:**
Output: Child. Still a kid. Age check done.
As as `age` is `10`. So 1st condition of If Statement is satisfied (`10 > 5`) hence, logs (`Child`).
Then JS Engine goes finds a nested `if-else` block where `if` condition (`10 > 12`) remains un-satisfied so it instantly skips it.
Thus, it directly goes to nested `else` part and logs (`Still a kid`).
Then it jumps out of IF-Else block and just logs `Age check done.` to console.

## Day 13: Learning switch-case Control Statement in JavaScript 🎯🎯🎯

### Question 1:

**Question:** What is the output of the following code?

```javascript
let fruit = "apple";
switch (fruit) {
  case "banana":
    console.log("Banana is yellow.");
    break;
  case "apple":
    console.log("Apple is red.");
  case "grape":
    console.log("Grape is purple.");
    break;
  default:
    console.log("Unknown fruit.");
}
```

**Answer & Justification:**
Output: `Apple is red. Grape is purple.`
as fruit is intialized as `apple`.
What happens here is as `switch` evaluates the strictly matching value thus, when it sees `apple` it logs `Apple is red`.
Then after as there's missing `break` keyword it executes the another underlying case due to this thus logging `Grape is purple`.
But, it ignores other cases like `banana` as they do-not match down there & `default` is ignored due to `break` keyword\*\*

### Question 2:

**Question:** What is the output of the following code?

```javascript
let day = "Monday";
switch (day) {
  case "Monday":
  case "Tuesday":
    console.log("It's a weekday!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's a weekend!");
    break;
  default:
    console.log("Invalid day!");
}
```

**Answer & Justification:**
Output: `It's a weekday!`
Since there are mutliple cases given as `Monday` and `Tuesday`.
What happens here is when JS Engine finds `Monday` equal to `case` then it simply logs `It's a weekday!`.
Also as there's a `break` keyword used JS Engine instantly jumps out when the execution is done.

NOTE: Even if day is `Tuesday` it will log `It's a weekday!`, because there are multiple `case` given back down.
So any matching case would mean to execution of the underlying code\*\*

### Question 3:

**Question:** What is the output of the following code?

```javascript
let num = 5;
switch (num) {
  case 5:
    console.log("Five");
  default:
    console.log("Not Five");
}
```

**Answer & Justification:**
Output: `Five Not Five`.
As `num` is `5`, Here in `switch-case` it matches the 1st `case` i.e., 5.
So it just logs `Five` to console.
But, as there's no `break` keyword used it `default-case` would be executed as well logging `Not Five`.

### Question 4:

**Question:** What is the output of the following code?

```javascript
let x = "1";
switch (x) {
  case 1:
    console.log("Number One");
    break;
  case "1":
    console.log("String One");
    break;
  default:
    console.log("Unknown");
}
```

**Answer & Justification:**
Output: `String One`.
Since `x` is String i.e., `"1"`.
Here, only 2nd `case` is instantly evaluated due to strict `===` check thus, logging `String One`.
As then JS Engine exits the `switch-case` after match found as `break` keyword is properly used here!

### Question 5:

**Question:** What is the output of the following code?

```javascript
let color = "blue";
switch (color) {
  case "red":
    console.log("The color is red.");
  case "blue":
    console.log("The color is blue.");
  case "green":
    console.log("The color is green.");
    break;
  default:
    console.log("Unknown color.");
}
```

**Answer & Justification:**
Output: `The color is blue. The color is green`.
as color is intialized as `blue`.
What happens here is as `switch` evaluates the strictly matching value thus, when it sees `blue` it logs `The color is blue`.
Then after as there's missing `break` keyword it executes the another underlying case due to this thus logging `The color is green.`
But, it ignores other cases like `red` as they do-not match down there & `default` is ignored due to `break` keyword\*\*

### Question 6:

**Question:** What is the output of the following code?

```javascript
let grade = "B";
switch (grade) {
  case "A":
    console.log("Excellent!");
    break;
  case "B":
  case "C":
    console.log("Well done!");
    break;
  case "D":
    console.log("You passed.");
  case "F":
    console.log("Better luck next time.");
    break;
  default:
    console.log("Invalid grade.");
}
```

**Answer & Justification:**
Output: `Well done!`.
Since grade is initialized as `B`.
And `switch-case` contains two group `case(s)` as `case "B"` and `case "C"`.
JS Engine here finds appropriate match so it simply logs `case "B"` block as `Well done!`.
And, given `break` keyword allows instant exit from the `switch-case` block.

### Question 7:

**Question:** What is the output of the following code?

```javascript
let size = "M";
switch (size) {
  case "S":
    console.log("Small size selected.");
    break;
  case "M":
    console.log("Medium size selected.");
  case "L":
    console.log("Large size selected.");
    break;
  default:
    console.log("Invalid size.");
}
```

**Answer & Justification:**
Output: `Medium size selected. Large size selected`.
as size is intialized as `M`.
What happens here is as `switch` evaluates the strictly matching value thus, when it sees `M` it logs `Medium size selected.`
Then after as there's missing `break` keyword it executes the another underlying case due to this thus logging `Large size selected.`
But, it ignores other cases like `S` as it does-not match down! & `default` is ignored due to `break` keyword\*\*

## Day 14: Learning Ternary Operator ❕❔

### Question 1:

```javascript
let age = 20;
let message = age >= 18 ? "You are an adult" : "You are a minor";
console.log(message);
```

**Answer & Justification:**
Output: `You are an adult`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `age` is currently above `18` i.e., `20` thus it's `true` and JS Engine goes for `?` part and executes instantly
`"You are an adult"`

### Question 2:

```javascript
let score = 85;
let grade = score > 90 ? "A" : score > 75 ? "B" : "C";

console.log(grade);
```

**Answer & Justification:**
Output: `B`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `score` is currently less than `90` i.e., `85` thus it's `false` and JS Engine goes for `:` part.
Thus, now JS Engine finds another else-if case where `score > 75` which evaluates to `true` hence it instantly goes for `?` block printing `grade` as `"B"`.

### Question 3:

```javascript
let isLoggedIn = false;
let welcomeMsg = isLoggedIn ? "Welcome back!" : 5 + 5;
console.log(welcomeMsg);
```

**Answer & Justification:**
Output: `10`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `isLogged` currently evaluates to `false` i.e., `false` thus JS Engine goes for `:` part and executes instantly
`10` as `5+5 = 10` storing it in `WelcomeMsg`.

### Question 4:

```javascript
function sayHello() {
  return "Hello!";
}

let shouldGreet = true;
let greeting = shouldGreet ? sayHello() : "No greeting";
console.log(greeting);
```

**Answer & Justification:**
Output: `Hello!`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `shouldGreet` currently evaluates to `true` i.e., `true` thus JS Engine goes for `?` part and executes instantly
invkoing `sayHello()` -> returns `Hello!` as the `greeting`.

### Question 5:

```javascript
let items = [];
let message = items.length ? "Items found" : "Cart is empty";
console.log(message);
```

**Answer & Justification:**
Output: `Cart is empty`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `items` is currently empty array `[]` thus `items.length` evaluates to `0` i.e., `false`
(Because, No items in the cart Yet! So, 0 or -0 are considered as Falsy Values Right!)
thus JS Engine goes for `:` part and executes instantly `"Cart is empty"`.

### Question 6:

```javascript
let loggedIn = false;
let user = loggedIn ? "User1" : console.log("Please log in first");
```

**Answer & Justification:**
Output: `Please log in first`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `loggedIn` is currently a Boolean `false` thus `loggedIn` evaluates to `false` i.e., `false`
thus JS Engine goes for `:` part and executes instantly shows `"Please log in first"` and just beneath it returns `undefined` as (console.log() method by-default only shows the given input and doesn't return anything so `undefined`)
making `user` value as `undefined` as simple!.

### Question 7:

```javascript
let marks = 45;
let result = marks > 90 ? "A+" : marks > 75 ? "A" : marks >= 50 ? "B" : "Fail";
console.log(result);
```

**Answer & Justification:**
Output: `Fail`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `marks` is currently `45` thus `result` evaluates to `false`
thus JS Engine skips all condtion-checks before goes for last `:` part and executes instantly shows `"Fail"`.

### Question 8:

```javascript
let isActive = "false";
let message = isActive ? "Active" : "Inactive";
console.log(message);
```

**Answer & Justification:**
Output: `Active`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `isActive` is currently `"false"`, (As any filled String except "" is considered as `Truthy Value` Right)
i.e., `Truthy Value` `message` evaluates to `true`
thus JS Engine goes for last `?` part and executes instantly shows `"Active"`.

### Question 9:

```javascript
function greet(name) {
  return name ? `Hi, ${name}` : "Hi, guest";
}

let user = "";
console.log(greet(user));
```

**Answer & Justification:**
Output: `Hi, guest`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `user` is currently `""`, (As Empty String `/`/``, '', "" is considered as `Falsy Value` Right)
i.e.,`Falsy Value` So, beneath`greet("")`function's code -
the JS Engine goes for last`:`part and executes instantly returning`"Hi, guest"`.

### Question 10:

```javascript
let temp = 38;

let weather = `Today's weather is ${temp > 35 ? "Hot" : "Pleasant"}`;
console.log(weather);
```

**Answer & Justification:**
Output: `Hi, guest`.
As Ternary Operator evaluates on the basis of either `true` or `Truthy Value` as expression/ condition..
So `temp` is currently `38` to which `38 > 35` i.e., `true`
thus JS Engine goes for last `?` part and executes instantly showing `"Today's weather is Hot"`.

## Day 16:📗 Objects in JavaScript

### Question 1:

```javascript
const person1 = {
  name: "Elijah",
  age: 24,
};

const person2 = person1;

person2.age = 30;

console.log(person1.age);
```

**Answer & Justification:**
Output: `30`.
Since `person1` is an `object` and JS Engine stores it by reference not values..
Thus, `person2` is given direct `@address` of `person1`.
Which means JS Engine uses same `@address` of `person1` to allocate `person2` where-in any change in data done by any object reflects permanently -> `24` -> `30`.

### Question 2:

```javascript
const person1 = {
  name: "Elijah",
  city: "New Orleans",
};

const person2 = {
  name: person1.name,
  city: person1.city,
};

person2.city = "Mystic Falls";
console.log(person1.city);
```

**Answer & Justification:**
Output: `"New Orleans"`.
Since `person2` even if it takes same data as of `person1`.
It's created using `{}` this makes JS Engine to allocate separate `@address` this makes both `person1` and `person2` different.
Thus, even if `person2` holds same data as of `person1` but, they're separated by `@address` each data...
Hence a change in `person2's data` wont affect `person1`

### Question 3:

```javascript
const original = {
  name: "Elijah",
  friends: ["Klaus", "Rebekah"],
};

const clone = original;
clone.friends.push("Hayley");

console.log(original.friends.length);
```

**Answer & Justification:**
Output: `3`.
Here `clone` is given direct reference by `@address` of `original` as JS Engine doesn't allocate different `@address` due to `=` used there...
As any update in `clone` directly affects data present in the `@address` which is also shared by the same `original`
Thus now `original.friends` would be `["Klaus", "Rebekah", "Hayley"]` as well.

### Question 4:

```javascript
const user = {
  name: "Freya",
  location: {
    city: "Mystic Falls",
    realm: "Earth",
  },
};

const user2 = {
  name: user.name,
  location: user.location,
};

user2.location.city = "New Orleans";
console.log(user.location.city);
```

**Answer & Justification:**
Output: `"New Orleans"`.
Here indeed, `user2` is created with the new `@address` but, inside `location` is given the `reference` not the value\*
Because, JS Engine gives `@address` of the nested-object of `user` instead of giving separate `@address`.
Thus if `user2.location.city = "New Orleans";` changes reflects changes in `user.location.city` as-well due to `@address sharing`.

### Question 5:

```javascript
const hero1 = { name: "Elijah" };
const hero2 = { name: "Elijah" };
console.log(hero1 === hero2);
```

**Answer & Justification:**
Output: `false`.
Since, `hero1` and `hero2` does have same values But, JS Engine gives them each a unique `@address` due to `{}` used there..
When comparing it returns `false` as JS Engine checks striclty via `reference` not as values.

### Question 6:

```javascript
const person1 = {
  name: "Alice",
  age: 30,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const person2 = person1;

person2.age = 35;
person2.name = "Bob";

person1.greet();
```

**Answer & Justification:**
Output: `Hello, I'm Bob`.
As `person2` is given the straight `reference` of `person1` where JS Engine doesn't allocate it a new address instead it gives same `@address` as of `person1`.
Thus, a any change in `person2` reflects to data stored in `@address` thus, leaving same data with both objects.

### Question 7:

```javascript
const person1 = {
  name: "John",
  age: 30,
  greet: function () {
    console.log(`Hello, I'm ${this.name}`);
  },
};

const person2 = {
  name: person1.name,
  age: person1.age,
  greet: person1.greet,
};

person2.name = "William";
console.log(person1.greet());
```

**Answer & Justification:**
Output: `Hello, I'm John`.
As `person2` is newly create with `{}` of same data `person1` where JS Engine allocates it a new address.
Thus, a any change in `person2` reflects it's own data stored separate location at `@address` whereas it doesn't affect
`person1` anyway..
