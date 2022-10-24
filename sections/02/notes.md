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
> Depending on what we count, the number of operations can be as low as 2n or as high as 5n+2. But regardless of the exact number, the number of operations grow roughly proportionally with n
___
## 4. Visualizing Time Complexities

### A. Performance Tracker
> Link To: [Performance Tracker](https://rithmschool.github.io/function-timer-demo/)

>![Performance Tracker](/assets/02-01.png)
>In regards to the example above, as `n` increases, the execution time for the faster solution remains <ins>constant</ins>, whereas, for the slower solution, the time continues to increase <ins>linearly</ins>, as seen from the graph above.
___
## 5. Official Intro to Big O

### A. Big O
- Big O Notation is a way to formalize fuzzy counting

- It allows us to talk formally about how the runtime of an algorithm grows as the input grows

- We don't care about the details, only the broad trends

>We say that an algorithm is **`O(f(n))`** if the number of simple operations the computer has to do is eventually less than a constant times **`f(n)`**, as **n** increases
> - f(n) could be linear (`f(n) = n`)
> - f(n) could be quadtratic (`f(n) = n`<sup>`2`</sup>)
> - f(n) could be constant (`f(n) = 1`)
> - f(n) could be entirely different

- Big O refers to the <ins>**worst case**</ins> scenario, i.e. the upperbound of runtime.

### B. Example

#### 1. Faster Solution:

```
function addUpTo(n) {
  return n * (n + 1) / 2;
}
```
- Always 3 operations: `O(1)`
>As `n` grows there's no change in the runtime

#### 2. Slower Solution:

```
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}
```
- Always 5n +2 operations: `O(n)`
>As `n` grows the number of operations is eventually bounded by a multiple of `n`, `O(n)`

#### 3. Count Up and Down:

```
function countUpAndDown(n) {

  console.log("Going Up")

  for (let i = 0; i < n; i++){
    console.log(i)
  }

  console.log("At the top. \n Going down.")

  for (let j = n - 1; j >= 0; j--){
    console.log(j)
  }

  console.log("Back Down")
}
```
- First for loop: `O(n)`
- Second for loop: `O(n)`
>You might think that Big O is `2n`, but the number of operations is (eventually) bounded by a multiple of `n`, so we simplify it to `O(n)` 

#### 4. Print All Pairs:

```
function printAllPairs(n) {
  for (let i = 0; i < n; i++){
    for (let j = 0; j < n; j++){
      console.log(i,j)
    }
  }
}
```
- First for loop: `O(n)`
- Nested loop: `O(n)`
  - if `n` = 2 -> [00, 01, 10, 11]: 4 pairs 
  - if `n` = 3 -> [00, 01, 02,...]: 9 pairs

>![Big O(n^2)](/assets/02-02.png)
>`O(n)` operation inside of an `O(n)` operation is `O(n*n)`, which is `O(n`<sup>`2`</sup>`)`, so as `n` grows, the runtime growth is <ins>quadratic</ins>.

>An `O(n)` inside an `O(n)` is `O(n`<sup>`2`</sup>`)`
___
## 6. Simplifying Big O Expressions

### A. General Rules

#### Rule 1 - **<ins>Constants Don't Matter</ins>**

>![Constants Don't Matter](/assets/02-03.png)

#### Rule 2 - **<ins>Smaller Terms Don't Matter</ins>**

>![Small Terms Don't Matter](/assets/02-04.png)

#### Rule 3 - **<ins>Arithmetic Operations are Constant</ins>**

> Arithmetic operations roughly take the same amount of time regardless the size of `n`

#### Rule 4 - **<ins>Variable Assignment is Constant</ins>**

> Variable assignment roughly takes the same amount of time regardless of the size of `n`

#### Rule 5 - **<ins>Accessing Element in an Array(by index) or Object(by key) is Constant</ins>**

> Accessing an element in an array or an object is roughly the same time regardless of `n`

#### Rule 6 - **<ins>Loop Complexity is based on length of loop times the inner complexity of the loop</ins>**
> In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

### B. Examples

1. #### Log at least Five

```
function logAtLeat5(n) {
  for (let i = 0; i < Math.max(5, n); i++){
    console.log(i)
  }
}
```
>Big O is `O(n)`

2. #### Log at most Five

```
function logAtMost5(n) {
  for (let i = 0; i < Math.min(5, n); i++) {
    console.log(i);
  }
}
```
>Big O is `O(1)`

### C. Big O Complexity Chart

>![Big O Complexity Chart](/assets/02-05.png)
___
## 7. Space Complexity


___
## 8. Logs and Section Recap