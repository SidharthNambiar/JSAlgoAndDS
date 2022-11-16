// Write a function called findLongestSubstring, which accepts a string and returns the length of the longest substring with all distinct characters.

// Time Complexity - O(n)

function findLongestSubstring(str) {
  if (!str) return 0;

  let charCount = {};
  let maxLength = 0;
  let startIndex = 0;
  let end = startIndex;
  let tempMaxLength = 0;

  while (startIndex < str.length && end < str.length) {
    if (!charCount[str[end]]) {
      charCount[str[end]] = 1;
      tempMaxLength++;
      end++;
    } else {
      startIndex++;
      tempMaxLength = 0;
      charCount = {};
      end = startIndex;
    }

    if (tempMaxLength > maxLength) {
      maxLength = tempMaxLength;
    }
  }

  return maxLength;
}

console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1
console.log(findLongestSubstring('c')); // 1
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6
