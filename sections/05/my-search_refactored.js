// 1. Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

// Big O: time - O(n)

function search(arr, value) {
  let max = arr.length - 1;
  let min = 0;

  while (min <= max) {
    let middleIndex = Math.floor((max + min) / 2);

    if (arr[middleIndex] < value) {
      min = middleIndex + 1;
    } else if (arr[middleIndex] > value) {
      max = middleIndex - 1;
    } else {
      return middleIndex;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6], 4)); // 3
console.log(search([1, 2, 3, 4, 5, 6], 6)); // 5
console.log(search([1, 2, 3, 4, 5, 6], 11)); //-1
