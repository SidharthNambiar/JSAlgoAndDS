function sum(arr) {
  let total = 0;

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

let result = sum([100, 2, 3, 89, 100]);
console.log(result);
