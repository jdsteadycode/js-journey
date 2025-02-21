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

## Day 7: Comparison Operators in JavaScript 💥

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
