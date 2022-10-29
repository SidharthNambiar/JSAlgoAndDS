// 1. Write a function called `sumZero` which accepts a `sorted` array of integers. The function should find the `first` pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if a pair does not exist.
// Big O time complexity:  O(n^2); nested loops
// Big O space complexity: O(1); 

function sumZero(sortedArr) {
  for (let i = 0; i < sortedArr.length; i++) { //O(n)
    for (let j = i + 1; j < sortedArr.length; j++) { //O(n)
      if (sortedArr[i] + sortedArr[j] === 0) {
       
        return [sortedArr[i], sortedArr[j]]
       
      }
    }
  }
}
console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));
console.log(sumZero([-4,-3, -2, -1, 0, 1, 2, 5]));
console.log(sumZero([-2, 0, 1, 3]) === undefined);
console.log(sumZero([1, 2, 3]) === undefined);
