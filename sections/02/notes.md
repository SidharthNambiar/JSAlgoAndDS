# Big O Notation

## 1. Intro To Big O

### A. Objectives

- Motivation for needing BigO Notation
- Describe Big O Notation
- Simplify Big O Notations
- Define "time" and "space" complexities
- Evaluate "time" and "space" complexities of algorithms
- Describe what an algorithm is

### B. What's the motivation behind Big O?

>If we have multiple implementations of a function, then how do we determine which implementation is the "**best**"

### C. What is Big O?
>Big O is a way of generalizing and comparing code and it's performance to other pieces of code

### D. Why care about Big O?
- Gives us precise vocabulary to talk about how our code performs
- Useful for discussing trade-offs between different approaches
- Identify inefficiencies in our code
- Interviews
---

## 2. Timing Our Code

### A. Example

Write a function that calculates the sum of all numbers from 1 up to (and including) some number n.

##### Slower Solution:
```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
 return total;
}
```
##### Faster Solution:
```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```

Which code is "better"? And what does "better" mean?
- faster ?
- less memory-intensive ?
- more readable ?

Comparing time for both codes:

##### Slower Solution:
```
const t1 = performance.now();
addUpTo(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)
```
>Time Elapsed: 0.9451825829744339 seconds.

##### Faster Solution:
```
const time1 = performance.now();
addUpTo(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)
```
>Time Elapsed: 0.000010916948318481446 seconds.

### B. The Problem with comparing **TIME**

- Different machines will record different times
- The same machine will record different times
- For increadibly fast algorithms, speed measurements might not be precise enough

> We want to be able to be able to talk about code in general terms, without having to measure time, and that's where Big O comes into play

___

## 3. Counting Operations

### A. If not time, then what?
>Instead of counting seconds, count the <ins>**number of operations**</ins> the computer has to perform.

##### Faster Solution (Previous Example)
```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```
Counting operations for the faster solution:
1. Multiplication - `n * ...`
2. Addition - `n + ...`
3. Division - `...) / 2`
> There are 3 simple operations, regardless of the size of `n`

##### Slower Solution (Previous Example)
```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
Counting operations for the slower solution:
- n additions 
  1. `total = total + i`
  2. `i++` shorthand for `i = i + 1`
- n assignments 
  1. `total = total + i`
  2. `i++` shorthand for `i = i + 1`
- 1 assignment
  1. `total = 0`
  2. `i = 1`
- n comparison
  1. `i <= n`
> Depeneding on what we count, the number of operations can be as low as 2n or as high as 5n+2. But regardless of the exact number, the number of operations grow roughly proportionally with n

