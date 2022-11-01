// Frequency Counter - sameFrequency
// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Your solution MUST have the following complexities:

// Time: O(N)

function sameFrequency(num1, num2) {
  let frequencyCountNum1 = {};
  let frequencyCountNum2 = {};
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();

  if (strNum1.length !== strNum2.length) {
    return false;
  }

  for (let char of strNum1) {
    frequencyCountNum1[char] = (frequencyCountNum1[char] || 0) + 1;
  }
  
  for (let char of strNum2) {
    frequencyCountNum2[char] = (frequencyCountNum2[char] || 0) + 1;
  }

  for (let char in frequencyCountNum1) {
    if (!frequencyCountNum2[char]) {
      return false;
    }
    if (frequencyCountNum1[char] !== frequencyCountNum2[char]) {
      return false;
    }
  }

  return true;
}

// Sample Input:

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)) // true
console.log(sameFrequency(22, 222)); // false
