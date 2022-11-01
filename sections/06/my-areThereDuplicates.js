// Frequency Counter / Multiple Pointers - areThereDuplicates
// Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in.  You can solve this using the frequency counter pattern OR the multiple pointers pattern.

// Restrictions:
// Time - O(n)
// Space - O(n)

// frequency counter
function areThereDuplicates(...numOfArgs) {
  let duplicateCount = {};

  for (let arg of numOfArgs) {
    if (!duplicateCount[arg]) {
      duplicateCount[arg] = 1;
    } else {
      return true;
    }
  }
  return false;
}

// Examples:

// console.log(areThereDuplicates(1, 2, 3)); // false
// console.log(areThereDuplicates(1, 2, 2)); // true
// console.log(areThereDuplicates('a', 'b', 'c', 'a')); // true

// Bonus:
// Time - O(n log n)
// Space - O(1)

//multiple pointer
function areThereDuplicatesBonusV1(...numOfArgs) {
  let sortedArgs = numOfArgs.sort();
  // console.log(numOfArgs, sortedArgs);
  let firstPointerIndex = 0;
  let secondPointerIndex = 1;
  let lastIndex = numOfArgs.length - 1;

  while (firstPointerIndex <= lastIndex || secondPointerIndex <= lastIndex) {
    if (sortedArgs[firstPointerIndex] === sortedArgs[secondPointerIndex]) {
      return true;
    }
    firstPointerIndex++;
    secondPointerIndex++;
  }
  return false;
}

function areThereDuplicatesBonusV2() {
  return new Set(arguments).size !== arguments.length;
}

// Examples:

console.log(areThereDuplicatesBonusV1(1, 2, 2)); // true
console.log(areThereDuplicatesBonusV1('a', 'b', 'c', 'd')); // false

console.log(areThereDuplicatesBonusV2('a', 'b', 'c', 'd', 'b', 'e', 'f')); //true
console.log(areThereDuplicatesBonusV2(1, 2, 5, 3, 6, 20)); // false

