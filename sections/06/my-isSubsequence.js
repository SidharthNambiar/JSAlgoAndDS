// Multiple Pointers - isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:
// Your solution MUST have AT LEAST the following complexities:

// Time Complexity - O(N + M)

// Space Complexity - O(1)

function isSubsequence(str1, str2) {
  if (str1.length === str2.length) return str1 === str2;
  let str1Pointer = 0;
  let str2Pointer = 0;
  let count = str1.length;

  while (str1Pointer < str1.length && str2Pointer < str2.length) {
    if (str2[str2Pointer] === str1[str1Pointer]) {
      count--;
      if (count === 0) return true;
      str1Pointer++;
    }

    str2Pointer++;
  }
  return false;
}

console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acbefg')); // false (order matters)
console.log(isSubsequence('a', 'cab')); // true (order matters)
console.log(isSubsequence('bat', 'cabat')); // true (order matters)
