// Ass 1
/* let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let pureString = mix
  .map(function (ele) {
    return isNaN(parseInt(ele)) ? ele : "";
  })
  .reduce(function (acc, current) {
    return acc + current;
  });

console.log(pureString);
 */

// Ass 2
/* let myString = "EElllzzzzzzzeroo";

let newString = myString
  .split("")
  .filter(function (ele, ind, arr) {
    return ele !== arr[++ind];
  })
  .join("");
console.log(newString);
// Elzero
 */

// Ass 3
/* let myArray = ["E", "l", "z", ["e", "r"], "o"];

// Elzero
let myNewArray = myArray
  .reduce(function (acc, curr) {
    return acc + curr;
  })
  .split("")
  .filter(function (ele) {
    return ele !== ",";
  })
  .join("");

console.log(myNewArray);
 */

// Ass 4
/* let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let filteredArr = numsAndStrings
  .filter(function (ele) {
    return !isNaN(parseInt(ele));
  })
  .map(function (ele) {
    return -ele;
  });
console.log(filteredArr);
// [-1, -10, 10, 20, -5, -3]
 */

// Ass 5
/* let nums = [2, 12, 11, 5, 10, 1, 99];

let res = nums.reduce(function (acc, curr) {
  return curr % 2 == 0 ? acc * curr : acc + curr;
}, 1);
console.log(res);
// 500
 */
