// 2. Implement a function valled countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

//refactored

function countUniqueValues(sortedArr) {

  let firstPointerIndex = 0;
  let secondPointerIndex = firstPointerIndex++;
  let uniqueCounter = {};

  while (sortedArr[firstPointerIndex] !== undefined || sortedArr[secondPointerIndex] !== undefined) {
    
    if (sortedArr[firstPointerIndex] === sortedArr[secondPointerIndex]) {
     
      if (!uniqueCounter[sortedArr[firstPointerIndex]]) {      
        uniqueCounter[sortedArr[firstPointerIndex]] = 1;
      }
      firstPointerIndex += 2;
      secondPointerIndex += 2;
    }
    else {
      if (!uniqueCounter[sortedArr[firstPointerIndex]] && sortedArr[firstPointerIndex]!== undefined) {
        uniqueCounter[sortedArr[firstPointerIndex]] = 1
      }
      if (!uniqueCounter[sortedArr[secondPointerIndex]] && sortedArr[secondPointerIndex]!== undefined) {
        uniqueCounter[sortedArr[secondPointerIndex]] = 1
      }
      firstPointerIndex += 1;
      secondPointerIndex += 1;
    }

  }
  return Object.keys(uniqueCounter).length;
}


console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); //2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); //7
console.log(countUniqueValues([])); //0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); //4
