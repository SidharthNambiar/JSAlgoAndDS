// 1. Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must by the same.

// 2 separate loops is better than using 2 nested loops
// Big O = O(3n) = O(n)

// solution using frequency pattern

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let arr1FrequencyCounter = {};
  let arr2FrequencyCounter = {};

  for (let value of arr1) {
    // arr1FrequencyCounter[value] === undefined ? arr1FrequencyCounter[value] = 1 : arr1FrequencyCounter[value]++
    arr1FrequencyCounter[value] = (arr1FrequencyCounter[value] || 0) + 1;
  }
  for (let value of arr2) {
    // arr2FrequencyCounter[value] === undefined ? arr2FrequencyCounter[value] = 1 : arr2FrequencyCounter[value]++
    arr2FrequencyCounter[value] = (arr2FrequencyCounter[value] || 0) + 1;
  }

  // for (let value of arr1) {
  //   if (arr1FrequencyCounter[value] !== arr2FrequencyCounter[value**2]) {
  //     return false
  //   }
  // }
  for (let key in arr1FrequencyCounter) {
    // if (!(key ** 2 in arr2FrequencyCounter)) {
    //   return false;
    // }
    if (arr1FrequencyCounter[key] !== arr2FrequencyCounter[key ** 2]) {
      return false;
    }
  }
  return true;
}

console.log('The result is: ', same([1, 2, 3, 2], [9, 1, 4, 4])); // true
console.log('The result is: ', same([1, 2, 3], [1, 9])); // false
console.log('The result is: ', same([1, 2, 3], [4, 4, 1])); // false
console.log('The result is: ', same([1, 2, 3, 5], [9, 1, 4, 11])); // true
