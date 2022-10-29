// 2. Implement a function valled countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(sortedArr) {
  if (sortedArr.length === 0) {
    return 0;
  }

  let uniqueCount = {};
  for (let value of sortedArr) {
    uniqueCount[value] = (uniqueCount[value] || 0) + 1;
  }

  return Object.keys(uniqueCount).length;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
