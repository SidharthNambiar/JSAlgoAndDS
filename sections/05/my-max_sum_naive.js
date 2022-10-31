// 1. Write a function called maxSubarraySum which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutive elements in the array.

// naive solution
// Big O: time complexity = O(n^2)
// Big O: space complexity

function maxSubarraySum(arr, num) {
  let max = -Infinity;
  let sum = 0;
  let lastIndex = arr.length - 1;

  if (arr.length === 0) return null;

  for (let i = 0; i <= lastIndex - num; i++) {
    for (let j = i; j < i + num; j++) {
      sum += arr[j];
    }

    if (sum > max) {
      max = sum;
    }
    sum = 0;
  }
  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //null
