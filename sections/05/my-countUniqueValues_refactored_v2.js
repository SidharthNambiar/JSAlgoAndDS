// 2. Implement a function valled countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//refactored
//Big O time: O(n)
//Big O space: O(1) ; unlike previous solution, now a primitive value is used to keep track of unique values


function countUniqueValues(sortedArr) {
  if (!sortedArr.length) {
    return 0;
  }
  if (sortedArr.length === 1) {
    return 1;
  }

  let firstPointerIndex = 0;
  let secondPointerIndex = 1;
  let count = 1;

  while (secondPointerIndex <= sortedArr.length - 1) {
    if (sortedArr[firstPointerIndex] === sortedArr[secondPointerIndex]) {
      secondPointerIndex++;
    } else {
      firstPointerIndex = secondPointerIndex;
      count++;
    }
  }
  return count;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
console.log(countUniqueValues([-2])); //1
