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

## Day 5: In-depth on Variables Scopes and Hoisting

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

## Notes:

- **Hoisting:** The process of moving variable declarations to the top of their respective scopes (either function or block scope).
- **Scope:** Variables declared with `var` are function-scoped, while variables declared with `let` or `const` are block-scoped, making them behave differently within loops or conditionals.
- **Temporal Dead Zone (TDZ):** Refers to the time between entering the scope and the initialization of a variable declared with `let` or `const`, where accessing it results in an error.

---
