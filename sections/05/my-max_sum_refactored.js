// 1. Write a function called maxSubarraySum which accepts an array of integers and a number called `n`. The function should calculate the maximum sum of `n` consecutive elements in the array.

// refactored solution
// Big O: time complexity = O(n)

function maxSubarraySum(arr, num) {
  if (arr.length === 0) return null;
  let max = 0;
  let sum = 0;

  for (let i = 0; i < num; i++) {
    sum += arr[i];
  }
  max = sum;

  for (let i = 1; i <= arr.length - num; i++) {
    sum = sum - arr[i - 1];
    sum = sum + arr[i + num - 1];
    if (sum > max) {
      max = sum;
    }
  }

  return max;
}

console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 2)); //10
console.log(maxSubarraySum([1, 2, 5, 2, 8, 1, 5], 4)); //17
console.log(maxSubarraySum([4, 2, 1, 6], 1)); // 6
console.log(maxSubarraySum([4, 2, 1, 6, 2], 4)); //13
console.log(maxSubarraySum([], 4)); //null
console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); //19
