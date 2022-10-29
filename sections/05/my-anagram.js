// 1. Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as 'cinema', formed from 'iceman'.

function validAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const str1FrequencyCount = {};
  const str2FrequencyCount = {};

  for (let i = 0; i < str1.length; i++) {
    str1FrequencyCount[str1[i]] = (str1FrequencyCount[str1[i]] || 0) + 1;
    str2FrequencyCount[str2[i]] = (str2FrequencyCount[str2[i]] || 0) + 1;
  }

  for (let key in str1FrequencyCount) {
    if (!str2FrequencyCount[key]) {
      return false;
    }

    if (str1FrequencyCount[key] !== str2FrequencyCount[key]) {
      return false;
    }
  }
  return true;
}

console.log(validAnagram('', '') === true); // true
console.log(validAnagram('aaz', 'zza') === false); // false
console.log(validAnagram('anagram', 'nagaram') === true); // true
console.log(validAnagram('rat', 'car') === false); // false) // false
console.log(validAnagram('awesome', 'awesom') === false); // false
console.log(
  validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') === false
); // false
console.log(validAnagram('qwerty', 'qeywrt') === true); // true
console.log(validAnagram('texttwisttime', 'timetwisttext') === true); // true
