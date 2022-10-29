# Problem Solving Patterns


## Intro To Problem Solving Patterns

### <ins>Some Common Patterns</ins>

>![Some Patterns](05-01.png)
___

## Frequency Counter Pattern

### <ins>Frequency Counters</ins>
>This pattern uses objects or sets to collect values/frequencies of values. This can often avoid the need for nested loops or `O(n`<sup>`2`</sup>`)`operations with array/string.
The Big O for this pattern is usually `O(n)`.

### <ins>EXAMPLE</ins>

1. Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must by the same.

#### Naive Solution:
```
// Big O = O(n^2)

function same(arr1, arr2) {
  let result = true;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) { //---> O(n)
      if (arr2.includes(arr1[i] ** 2)) {
        let indexToRemove = arr2.indexOf(arr1[i] ** 2); //---> O(n)
        arr2.splice(indexToRemove, 1);
      } else {
        result = false;
      }
    }
  } else {
    result = false;
  }
  return result;
}
```
>In the naive solution, there's nested loops which means Big O is `O(n`<sup>`2`</sup>`)`. If there are 1000 elements in the array, then it would take 1000*1000 = `1,000,000` iterations.

#### Refactored Solution (using `Frequency Pattern`):
```
function same(arr1, arr2){
    if(arr1.length !== arr2.length){
        return false;
    }

    let frequencyCounter1 = {}
    let frequencyCounter2 = {}
    for(let val of arr1){ ---> O(n)
        frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
    }
    for(let val of arr2){
        frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1        
    }
    for(let key in frequencyCounter1){
        if(!(key ** 2 in frequencyCounter2)){
            return false
        }
        if(frequencyCounter2[key ** 2] !== frequencyCounter1[key]){
            return false
        }
    }
    return true
}

```
> Using 2 **<ins>separate</ins>** loops is vastly `better` than using 2 nested loops.  If there are 1000 elements in the array, then it would take 1000+1000+1000 = `3000` iterations. The Big O in this case is `O(3n)`, which simplifies to `O(n)`.

### <ins>ANAGRAMS</ins>

1. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.

#### Solution:
```
function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1FrequencyCount = {};
  const str2FrequencyCount = {};

  for (let i = 0; i < str1.length; i++) {
    str1FrequencyCount[str1[i]] = (str1FrequencyCount[str1[i]] || 0) + 1;
    str2FrequencyCount[str2[i]] = (str2FrequencyCount[str2[i]] || 0) + 1;
  }

  for (let key in str1FrequencyCount) {
    if (!str2FrequencyCount[key]) {
      return false;
    }

    if (str1FrequencyCount[key] !== str2FrequencyCount[key]) {
      return false;
    }
  }
  return true;
}
```
>Big O is `O(2n)`, which simplifies to `O(n)`
___

## Multiple Pointers Pattern
> Creating `pointers` or values that correspond to an `index` or position and move towards the `beginning`, `end` or `middle` based on a certain `condition`. Very efficient for solving problems with `minimal space complexity` as well.

### <ins>EXAMPLE</ins>
1. Write a function called `sumZero` which accepts a `sorted` array of integers. The function should find the `first` pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.

#### Naive Solution:
```
// Big O time complexity:  O(n^2); nested loops
// Big O space complexity: O(1); 

function sumZero(sortedArr) {
  for (let i = 0; i < sortedArr.length; i++) { ---> //O(n)
    for (let j = i + 1; j < sortedArr.length; j++) { ---> //O(n)
      if (sortedArr[i] + sortedArr[j] === 0) {
        return [sortedArr[i], sortedArr[j]]
      }
    }
  }
}

```
> The Big O for time complexity is `O(n`<sup>`2`</sup>`)` since the naive solution uses nested loops, and for space complexity the Big O is `O(1)`.

#### Refactored Solution (using `Multiple Pointers Pattern`):
```
// Big O time complexity: O(n)
// Big O space complexity: O(1)

//refactored using multiple pointers pattern

function sumZero(sortedArr) {
  let leftPointerIndex = 0;
  let rightPointerIndex = sortedArr.length - 1;

  while (leftPointerIndex < rightPointerIndex) {

    let result = sortedArr[leftPointerIndex] + sortedArr[rightPointerIndex];
    if (result === 0) {
      return [sortedArr[leftPointerIndex], sortedArr[rightPointerIndex]]
    }
    else if (result > 0) {
      rightPointerIndex--;
    }
    else {
      leftPointerIndex++;
    }

  }
}
```
>This works because the array is `sorted`. The `Big O` for time complexity is `O(n)` and for space complexity it is `O(1)`.
___

## Sliding Window Pattern
___

## Divide And Conquer Pattern
