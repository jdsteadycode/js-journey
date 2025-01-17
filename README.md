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
`ReferenceError, ReferenceError`

**Justification:**
Both `let` and `const` were introduced in the ES6 (2015+) ECMA Standards with specific restrictions, including hoisting and block-scoping. Due to hoisting, the declarations of `a` and `b` are moved to the top of their respective blocks. However, these variables remain in the **temporal dead zone** from the start of the block until their actual initialization.

Since we are attempting to access `a` and `b` before they are initialized, the JavaScript Engine throws a `ReferenceError` for both variables, as they are not accessible during the dead zone period. This restricts the access to them before their declaration and initialization.

Hence, the result is two `ReferenceError` exceptions

---

## Notes:

- **Hoisting:** The process of moving variable declarations to the top of their respective scopes (either function or block scope).
- **Scope:** Variables declared with `var` are function-scoped, while variables declared with `let` or `const` are block-scoped, making them behave differently within loops or conditionals.
- **Temporal Dead Zone (TDZ):** Refers to the time between entering the scope and the initialization of a variable declared with `let` or `const`, where accessing it results in an error.

---
