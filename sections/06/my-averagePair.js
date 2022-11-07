// Multiple Pointers - averagePair
// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:

// Time: O(N)

// Space: O(1)

function averagePair(sortedArr, targetValue) {
  if (sortedArr.length === 0) return false;
  let leftIndex = 0;
  let rightIndex = sortedArr.length - 1;
  let average = null;

  // if average is greater than targetvalue then move rightIndex left
  // if average is less than targetvalue then move leftIndex right

  while (leftIndex < rightIndex) {

    average = (sortedArr[leftIndex] + sortedArr[rightIndex]) / 2;

    if (average > targetValue) {
      rightIndex--
    }
    else if (average < targetValue) {
      leftIndex++
    }
    else {
      return true;
    }
  }

  return false;

}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
