// 1. Write a function called **same**, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must by the same.

// Big O = O(n^2)

function same(arr1, arr2) {
  let result = true;

  if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) { // O(n)
      if (arr2.includes(arr1[i] ** 2)) {
        let indexToRemove = arr2.indexOf(arr1[i] ** 2); // O(n)
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

console.log('The result is: ', same([1, 2, 3], [4, 1, 9]));
console.log('The result is: ', same([1, 2, 3], [1, 9]));
console.log('The result is: ', same([1, 2, 3], [4, 4, 1]));


