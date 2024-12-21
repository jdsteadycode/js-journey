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

## Notes:

- **Hoisting:** The process of moving variable declarations to the top of their respective scopes (either function or block scope).
- **Scope:** Variables declared with `var` are function-scoped, while variables declared with `let` or `const` are block-scoped, making them behave differently within loops or conditionals.
- **Temporal Dead Zone (TDZ):** Refers to the time between entering the scope and the initialization of a variable declared with `let` or `const`, where accessing it results in an error.

---
